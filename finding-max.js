let numbers=[3,10,2,15,6];
let largest = numbers[0];
let smallest =numbers[0];
for(let i=0;i<numbers.length;i++){
if(numbers[i]>largest){
    largest=numbers[i];
}
if(numbers[i]<smallest){
    smallest=numbers[i];
}
}
console.log(largest-smallest);