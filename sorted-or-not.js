let numbers=[2,4,6,8,10];
let isSorted=true;
for(let i=0;i < numbers.length-1;i++){
    if(numbers[i]>numbers[i+1]){
        isSorted=false;
        break;
    }
}
if(isSorted){
    console.log("Array is sorted");
}else{
    console.log("Array isn't sorted");
}