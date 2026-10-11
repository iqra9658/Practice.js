let numbers=[12,5,20,8,15];
let secondLargest=-Infinity;
let largest=numbers[0];
for(let i=0;i<numbers.length;i++){
   if(numbers[i]>largest){
secondLargest = largest;
    largest=numbers[i];
    
   }else if (numbers[i] > secondLargest && numbers[i] < largest) {
    secondLargest = numbers[i];
}
}
   console.log("secondLargest:",secondLargest);
