let student = {
    name: "Ahmed",
    age: 20,
    course:"javascript",
    isActive: true,
};
console.log(student.name + " has chosen " + student.course);

let person = {
    name: "Ali",
    age: 20
}; 
console.log(person.name);
let colors = ["Red", "Green","Blue","Yellow"];
console.log(colors[0]);
console.log(colors[colors.length - 1]);
console.log(colors[1]);
let marks = [80,75,90,60];
let total = marks[0] + marks[1] + marks[2] + marks[3];
console.log(total);
let average = total / marks.length;
console.log(average);
let students = [
    { id:1, name:"Ali", marks: 85},
    { id: 2, name: "Sara",marks:92},
    { id: 3, name:"john", marks:78},
];
console.log(students[0].name);
console.log(students[0].marks);
console.log(students[1].name);
console.log(students[2].marks);
console.log(students[0].name+"scored"+students[0].marks);

console.log(students[0].name);
console.log(students[1].name);
console.log(students[2].name);

let totalMarks =
 students[0].marks +
 students[1].marks + students[2].marks;
 console.log(totalMarks);
let user ={
    id: 1,
    name:"Rahul",
    address: {
        city: "Hyderabad",
        pincode: 500001
    },
    skills:["HTML","CSS","JS"]
};
console.log(user.address.city);
console.log(user.skills[1]);
let response={
  "products": [
    {
      "id": 1,
      "title": "Essence Mascara Lash Princess",
      "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      "category": "beauty",
      "price": 9.99,
      "discountPercentage": 10.48,
      "rating": 2.56,
      "stock": 99,
      "tags": [
        "beauty",
        "mascara"
      ],
      "brand": "Essence",
      "sku": "BEA-ESS-ESS-001",
      "weight": 4,
      "dimensions": {
        "width": 15.14,
        "height": 13.08,
        "depth": 22.99
      },
      "warrantyInformation": "1 week warranty",
      "shippingInformation": "Ships in 3-5 business days",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 3,
          "comment": "Would not recommend!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Eleanor Collins",
          "reviewerEmail": "eleanor.collins@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Very satisfied!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Lucas Gordon",
          "reviewerEmail": "lucas.gordon@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Highly impressed!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Eleanor Collins",
          "reviewerEmail": "eleanor.collins@x.dummyjson.com"
        }
      ],
      "returnPolicy": "No return policy",
      "minimumOrderQuantity": 48,
      "meta": {
        "createdAt": "2025-04-30T09:41:02.053Z",
        "updatedAt": "2025-04-30T09:41:02.053Z",
        "barcode": "5784719087687",
        "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
      ],
      "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
    }]
}
console.log(response.products[0].images[0]);

 for (let number = 1; number <= 20; number++) {
    if (number % 2 === 0) {
        console.log(number + " is even");
    } else {
        console.log(number + " is odd");
    }
}
