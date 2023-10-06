const strings = ['a', 'b', 'c', 'd'];
// 4*4 = 16 byres of storage

// push
strings.push('e'); // O(1)

// pop
strings.pop();
strings.pop(); // O(1)

// unshift - to add in the Front of the array
strings.unshift('x'); // O(n);

// splice - to add at a particular index.
strings.splice(2,0,'alien'); // O(n);


console.log(strings);