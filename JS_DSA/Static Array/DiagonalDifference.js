let arr = [10,20,30,40,50,60];
console.log(arr);

let sum = 0;
for(let i = 0; i<arr.length-1; i++){
    sum += arr[i] - arr[i+1];
}

console.log(sum*-1);