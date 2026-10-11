
const defaultProducts = [
    { id: 1, name: "Laptop", price: 60000, stock: 10 },
    { id: 2, name: "Mouse", price: 800, stock: 3 },
    { id: 3, name: "Keyboard", price: 1200, stock: 0 },
    { id: 4, name: "Monitor", price: 15000, stock: 7 },
    { id: 5, name: "Headphones", price: 2500, stock: 2 }
];

let products;

try {
    const saved = localStorage.getItem("smartStockProducts");
    const parsed = saved ? JSON.parse(saved) : null;

    products = Array.isArray(parsed)
        ? parsed
        : defaultProducts.map(product => ({ ...product }));
} catch {
    products = defaultProducts.map(product => ({ ...product }));
}

const productList = document.getElementById("productList");
const totalProducts = document.getElementById("totalProducts");
const inventoryValue = document.getElementById("inventoryValue");
const lowStockCount = document.getElementById("lowStockCount");
const searchInput = document.getElementById("searchInput");
const addProductForm = document.getElementById("addProductForm");

function saveProducts() {
    try {
        localStorage.setItem("smartStockProducts", JSON.stringify(products));
    } catch (error) {
        console.error("Could not save inventory:", error);
        alert("Could not save inventory in this browser.");
    }
}

function getStockStatus(stock) {
    if (stock === 0) return "Out of Stock";
    if (stock <= 3) return "Low Stock";
    return "In Stock";
}

function renderProducts(productArray) {
    productList.innerHTML = "";

    if (productArray.length === 0) {
        productList.innerHTML = `
            <p class="p-8 text-center text-sm text-gray-500">
                No products found. Try another search.
            </p>
        `;
        return;
    }

    for (const product of productArray) {
        const status = getStockStatus(product.stock);

        let statusColor = "text-emerald-300 bg-emerald-400/10";

        if (status === "Low Stock") {
            statusColor = "text-amber-300 bg-amber-400/10";
        } else if (status === "Out of Stock") {
            statusColor = "text-red-300 bg-red-400/10";
        }

        productList.innerHTML += `
            <article class="product-row grid grid-cols-12 items-center gap-3 border-b border-white/5 px-5 py-5 hover:bg-white/[0.03] sm:px-7">
                <div class="col-span-4 sm:col-span-3">
                    <h3 class="font-medium text-gray-100">${product.name}</h3>
                    <p class="mt-1 text-xs text-gray-500">Product #${product.id}</p>
                </div>

                <p class="col-span-2 text-sm text-gray-300">
                    ₹${product.price.toLocaleString("en-IN")}
                </p>

                <p class="col-span-2 text-sm text-gray-300">${product.stock}</p>

                <div class="col-span-4 sm:col-span-2">
                    <span class="inline-block rounded-full px-2 py-1 text-[10px] font-medium sm:text-xs ${statusColor}">
                        ${status}
                    </span>
                </div>

                <div class="col-span-12 flex gap-2 sm:col-span-3 sm:justify-end">
                    <button
                        type="button"
                        data-action="edit"
                        data-id="${product.id}"
                        class="rounded-lg border border-white/10 px-3 py-2 text-xs text-emerald-300 hover:bg-emerald-400/10"
                    >
                        Edit
                    </button>

                    <button
                        type="button"
                        data-action="delete"
                        data-id="${product.id}"
                        class="rounded-lg border border-white/10 px-3 py-2 text-xs text-red-300 hover:bg-red-400/10"
                    >
                        Delete
                    </button>
                </div>
            </article>
        `;
    }
}

function updateDashboard() {
    let totalValue = 0;
    let lowStock = 0;

    for (const product of products) {
        totalValue += product.price * product.stock;

        if (product.stock > 0 && product.stock <= 3) {
            lowStock++;
        }
    }

    totalProducts.textContent = products.length;
    inventoryValue.textContent =
        "₹" + totalValue.toLocaleString("en-IN");
    lowStockCount.textContent = lowStock;
}

function refreshDashboard() {
    const searchText = searchInput.value.toLowerCase();

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchText)
    );

    renderProducts(filteredProducts);
    updateDashboard();
}

addProductForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("productName").value.trim();
    const priceInput = document.getElementById("productPrice").value;
    const stockInput = document.getElementById("productStock").value;

    const price = Number(priceInput);
    const stock = Number(stockInput);

    if (
        !name ||
        priceInput.trim() === "" ||
        !Number.isFinite(price) ||
        price <= 0 ||
        stockInput.trim() === "" ||
        !Number.isInteger(stock) ||
        stock < 0
    ) {
        alert("Enter a name, a price above zero, and a valid whole-number quantity.");
        return;
    }

    const newProduct = {
        id: Math.max(...products.map(product => product.id), 0) + 1,
        name,
        price,
        stock
    };

    products.push(newProduct);
    saveProducts();

    searchInput.value = "";
    refreshDashboard();
    addProductForm.reset();

    gsap.from(".product-row:last-child", {
        y: 18,
        opacity: 0,
        duration: 0.45,
        ease: "power2.out"
    });
});

productList.addEventListener("click", function (event) {
    const button = event.target.closest("button[data-action]");

    if (!button) return;

    const id = Number(button.dataset.id);
    const product = products.find(item => item.id === id);

    if (!product) return;

    if (button.dataset.action === "edit") {
        const name = prompt("Product name:", product.name);

        if (name === null) return;

        const priceInput = prompt("Product price:", product.price);

        if (priceInput === null) return;

        const stockInput = prompt("Product quantity:", product.stock);

        if (stockInput === null) return;

        const newName = name.trim();
        const newPrice = Number(priceInput);
        const newStock = Number(stockInput);

        if (
            !newName ||
            priceInput.trim() === "" ||
            !Number.isFinite(newPrice) ||
            newPrice <= 0 ||
            stockInput.trim() === "" ||
            !Number.isInteger(newStock) ||
            newStock < 0
        ) {
            alert("Invalid details. Please try again.");
            return;
        }

        product.name = newName;
        product.price = newPrice;
        product.stock = newStock;

        saveProducts();
        refreshDashboard();
    }

    if (button.dataset.action === "delete") {
        const confirmed = confirm(
            `Delete "${product.name}" from your inventory?`
        );

        if (!confirmed) return;

        products = products.filter(item => item.id !== id);

        saveProducts();
        refreshDashboard();
    }
});

searchInput.addEventListener("input", refreshDashboard);

refreshDashboard();

const introAnimation = gsap.timeline({
    defaults: {
        ease: "power3.out"
    }
});

introAnimation.from("header > *", {
    y: 25,
    opacity: 0,
    duration: 0.7,
    stagger: 0.15
});

introAnimation.from(".summary-card", {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15
}, "-=0.25");

introAnimation.from(".add-product-section", {
    y: 20,
    opacity: 0,
    duration: 0.5
}, "-=0.2");

introAnimation.from(".product-row", {
    y: 15,
    opacity: 0,
    duration: 0.4,
    stagger: 0.08
}, "-=0.15");
