const products1 = [
    { name: "Laptop", price: 60000, stock: 10 },
    { name: "Mouse", price: 800, stock: 3 },
    { name: "Keyboard", price: 1200, stock: 0 },
    { name: "Monitor", price: 15000, stock: 7 },
    { name: "Headphones", price: 2500, stock: 2 }
];

const products2 = [
    { name: "Apples", price: 100, stock: 200 },
    { name: "Bananas", price: 40, stock: 3 },
    { name: "Mangos", price: 60, stock: 0 },
    { name: "Kivi", price: 200, stock: 1 },
    { name: "Orange", price: 55, stock: 500 }
];
function getStockStatus(stock){
    if(stock===0){
        return"Out of Stock";
    }else if (stock <= 3){
        return "Low Stock";
    }else{
 return "In Stock";
    }
}
;
    
    function productDetails(productArray){
        let totalInventoryValue=0;
        let priceTotal=0;
        let maxPrice=0;
        let expensiveProduct="";
        let maxStock=0;
        let mostStockedProduct="";
        for(const product of productArray){
            console.log(
            `${product.name} - ₹${product.price} | Quantity: ${product.stock} | Status: ${getStockStatus(product.stock)}`
            );
            totalInventoryValue+=product.price*product.stock;
            priceTotal+=product.price;
            if(product.price>maxPrice){
                maxPrice=product.price;
                expensiveProduct=product.name;
            }
            if(product.stock>maxStock){
                maxStock=product.stock;
                mostStockedProduct=product.name;
            }
        }
        console.log("_____________________");
        console.log(`Total Inventory Value: ₹${totalInventoryValue}`);
console.log(`Most Expensive Product: ${expensiveProduct} priced at ₹${maxPrice}`);
console.log(`Average cost of products: ₹${priceTotal / productArray.length}`);
console.log(`Most Stocked Product: ${mostStockedProduct}`);
    }
    productDetails(products1);
    productDetails(products2);
