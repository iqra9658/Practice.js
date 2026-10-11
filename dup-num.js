let numbers=[2,5,8,5,10,2,7];
for(let i=0;i<numbers.length;i++){
    for(let j=i+1;j<numbers.length;j++){
        if(numbers[i]==numbers[j]){
        console.log("Duplicate:",numbers[i]);
        }
    }
}