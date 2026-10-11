let number = 121;
let original = number;
let reversed = 0;

while (number > 0) {
    let digit = number % 10;
    number = Math.floor(number / 10);
    reversed = reversed * 10 + digit;
}

if (original == reversed) {
    console.log("Palindrome");
} else {
    console.log("Not a palindrome");
}