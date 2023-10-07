const array1 = [1,3,5,7,9];
const array2 = [2,4,6,8,10];

function mergeSortedArrays(arr1, arr2){
    const arr3 = [];
    const len = arr1.length;
    for(let i=0; i<len; i++){
        arr3.push(arr1[i]);
        arr3.push(arr2[i]);
    }
    console.log(arr3);
}

mergeSortedArrays(array1,array2);