const numbers = [8, 7, 1, 9, 6, 4, 3, 10];
const sortNumbers = numbers.sort();
// console.log(sortNumbers);
const friends = ['kabila', 'josim', 'razzak', 'alam', 'depjol'];
const sortFriends = friends.sort();
// console.log(sortFriends);

// const reversedFriends = friends.reverse();
// console.log(reversedFriends);

const sortReversFriends = friends.sort().reverse();
console.log(sortReversFriends);

// number sorting fun
const bigNumbers = [66, 58, 45, 77, 88, 23, 10, 2, 7, 99];
const sortBigNumbers = bigNumbers.sort( function(a, b){
    return a-b;
});
console.log(sortBigNumbers);