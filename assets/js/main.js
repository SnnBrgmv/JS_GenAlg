// Task1. Verilen duplicate array daxilindən duplicate olanları silib unique array formasına salın.
// Task1=>method1
let array = [1,-16,6,5,-2,9,5,14,0,9,-2,20]
let newArray = [];
for (let i = 0; i < array.length; i++) {
    if (!newArray.includes(array[i]) ) {
        newArray.push(array[i]);
    }
    
}
console.log(newArray);

// Task1=>method2
let uniqueArr = [...new Set(array)];
console.log(uniqueArr);



// Task2. Verilen array daxilinden musbet olanlari kvadratından ibaret yeni array return et .
// Task2=>method1
let  num = [2,6,-3,5,0,-9,13,19,-21,25];
let newArr = [];
for (let i = 0; i < num.length; i++) {
    if (num[i]>0) {
        newArr.push(num[i] * num[i]);
    }
}
console.log(newArr);

// Task2=>method2
let squarePositive = num.reduce((arr, item) => {
    if (item > 0) {
        arr.push(item * item);
    }
    return arr;
}, []);

console.log(squarePositive);



// Task3. Verilen stringi tersine çevir 
// Task3=>method1
let str = "LiverpooL";
let reverseStr = str.split('').reverse().join('');
console.log(reverseStr);

// Task3=>method2
let stringRev = str.split('').reduce((arr,item)=>{
    arr.unshift(item);
    return arr;
},[])

console.log(...stringRev);


