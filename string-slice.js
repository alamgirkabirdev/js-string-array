const anthem = 'Amar Sonar Bangla Ami Tomai Valobashi';
const words = anthem.split(' ');
const withoutA = anthem.split('a');
// console.log(withoutA);

// slice
const smallSlice = anthem.slice(5,13);
// console.log(smallSlice);

// substr
const anotherPart = anthem.substr(11,10);
// console.log(anotherPart);

// substring
const anotherAnotherPart = anthem.substring(11, 15);
// console.log(anotherAnotherPart);

// concat
const first = 'Amader';
const second = 'City';
const fullstring = first.concat(second).concat('abc').concat(' RJ Kibria');
// console.log(fullstring);

// 

const words2 = ['alim', 'badhon', 'cameron', 'david'];
// const allJoined = words2.join('');
// const allJoined = words2.join(' ');
// const allJoined = words2.join(',');
// const allJoined = words2.join(', ');
const allJoined = words2.join('www');
console.log(allJoined);