const products = [
    'Dell hardcore i20 200GB laptop',
    'iphone 1tb camera flashlight phone',
    'dell yellow laptop with black camera',
    '1x59 Lenovo commercial yoga Laptop',
    'LG supernova laptop',
    'HTC low price phone dell',
    'Dell purple color phone with laptop'
];

const searching = 'dell';

// indexof
const output = [];
for(const product of products){
    if(product.toLowerCase().indexOf(searching.toLowerCase()) != -1){
        // output.push(product);
    }
}
// console.log(output);
for(const product of products){
    if(product.toLowerCase().includes(searching.toLowerCase())){
        // output.push(product);
    }
};
console.log(output);

// starts with
for(const product of products){
    if(product.toLowerCase().startsWith(searching.toLowerCase())){
        output.push(product);
    }
};
console.log(output);