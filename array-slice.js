const nubmers = [3, 4,5, 6, 7, 10 , 12, 21, 87];
const nubmerSliced = nubmers.slice(4,8);
// console.log(nubmerSliced);
// console.log(nubmers);

// splice to remove an element from an array
// const numberSplied = nubmers.splice(4, 2);
// console.log(numberSplied);
// console.log(nubmers);

const nubmerSliced2 = nubmers.splice(4, 0, 444,11, 777);
console.log(nubmerSliced2);
console.log(nubmers);