// const square = function(x){
//     return x * x;
// };
// console.log(square(21));

// const power = (base, exponent) => {
//     let result = 1;
//     for(let count = 0; count< exponent; count++){
//         result *=base;
//     }
//     return result;
// };
// console.log(power(2,7))

// function chicken(){
//     return egg()
// }

// function egg(){
//     return chicken()
// }
// console.log(chicken() + " came first");

// function wrapValue(n){
//     let local = n;
//     return () => local;
// }

// let wrap1 = wrapValue(1);
// let wrap2 = wrapValue(2);

// console.log(wrap1());
// console.log(wrap2());

// function multiplier(factor){
//     return number => number * factor;
// }
// let twice = multiplier(2);
// console.log(twice(4));
// console.log(twice(6));
// let thrice = multiplier(3);
// console.log(thrice(3));

// function findsolution(target){
//     function find(current, history){
//         if(current == target){
//             return history;
//         }
//         else if (current > target) {
//             return null;
//         }
//         else {
//             return find(current +5, `(${history} +5)`) || find(current *3, `(${history} *3)`);
//         }
//     }
//     return find(1,"1")
// }

// console.log(findsolution(10))

// function min(a,b){
//     if (a< b){
//         return a;
//     }
//     return b;
// }
// console.log(min(0,10));
// console.log(min(0,-10));

// function isEven(number){
//     if (number == 0){return true}
//     if (number == 1){return false}
//     if (number < 0) { return isEven(number*-1)}
//     return isEven(number-2)
// }
// console.log(isEven(50));
// console.log(isEven(76));
// console.log(isEven(-1));


