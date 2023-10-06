const namee = 'Lokesh'


function ReverseString(str) {
    if(!str || str.length < 2 || typeof str !== 'string'){
        return 'invalid input';
    } 

    const rev = [];

    for(let i=str.length-1; i>=0; i--){
        rev.push(str[i]);
    }

    return rev.join('');
}

function ReverseString2(str) {
    return str.split('').reverse().join('');
}

console.log(ReverseString2(namee));