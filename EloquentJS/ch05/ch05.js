// let roseDragon = "🌹🐉";
// for (let char of roseDragon) {
//   console.log(char);
// }
// // → 🌹
// // → 🐉


// let arrays = [[1, 2, 3], [4, 5], [6]];

// let result = arrays.reduce((a,b) => a.concat(b));
// console.log(result)

// function loop(a, testf, incf, execf){
//     while(testf(a)){
//         execf(a)
//         a = incf(a)
//     }
// }

// loop(3,n=> n>0, n=> n-1, console.log);

// function every(array, test) {
//     result = true;
//     for (let i =0; i < array.length; i++){
//         if(!test(array[i])){
//             result = false;
//             break;
//         }
//     }
//     return result;
//   }

// function every(array, test) {
//     return !array.some((a)=>!test(a));
// }


//   console.log(every([1, 3, 5], n => n < 10));
//   // → true
//   console.log(every([2, 4, 16], n => n < 10));
//   // → false
//   console.log(every([], n => n < 10));
//   // → true