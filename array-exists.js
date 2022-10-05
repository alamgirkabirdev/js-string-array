function megaFriend(friends){
    if(Array.isArray(friends) ==false){
        return 'Please provide an array';
    }
    let mega = friends[0];
    for(const friend of friends){
        if(friend.length > mega.length){
            mega = friend;
        }
    }
    return mega;
}
const friends = ['kutub', 'lion', 'shamol', 'sabbir'];
const myBigBuddy = megaFriend(1234);
// console.log(myBigBuddy);

if(friends.indexOf('Fox') != -1){
    console.log('lion exists');
}
else{
    console.log('Fox does not exists');
}
if(friends.includes('lion')){
    console.log('lion exists using inludes');
}

// concat
const first = [1, 2, 3, 4];
const second = [5, 6, 7, 9];
const combined = first.concat(second);
console.log(combined);