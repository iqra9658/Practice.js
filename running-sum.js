let numbers =[2,4,3,1];
let sum=0;
    for(let i=0;i<numbers.length;i++){
        sum = sum+numbers[i];
        numbers[i]=sum;
    }
    console.log(numbers);
    