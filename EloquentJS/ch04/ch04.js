// let numberlist = [2,3,5,7,11];
// console.log(numberlist[3-1]);
// console.log(numberlist.length);
// console.log("astr".toUpperCase);
// numberlist.push(4);
// numberlist.push(44);
// numberlist.pop();
// console.log(numberlist)

// let day1 = {
//     squirrel: false,
//     events: ["work", "touched tree", "pizza", "running"]
// };

// day1.wolf = false;
// delete day1.wolf
// console.log(day1);
// console.log(day1.squirrel);
// console.log(day1.events);
// console.log(Object.keys(day1))

// let journal = [];
// function addEntry (events, squirrel)
// {
//     journal.push({events, squirrel});
// }
// addEntry(["work", "touched tree", "pizza", "running",
//           "television"], false);
// addEntry(["work", "ice cream", "cauliflower", "lasagna",
//           "touched tree", "brushed teeth"], false);
// addEntry(["weekend", "cycling", "break", "peanuts",
//           "beer"], true);

// function phi (table){
//     return(table[3]*table[0] - table[2]*table[1])/  
//     Math.sqrt( (table[2]+table[3]) *
//                (table[0]+table[1]) *
//                (table[1]+table[3]) *
//                (table[0]+table[2]));
// }
// console.log(phi([76,9,4,1]));

// for (let entry of journal) {
//     console.log(`${entry.events.length} events.`);
//   }

// console.log([1, 2, 3, 2, 1].indexOf(2));
// console.log([1, 2, 3, 2, 1].lastIndexOf(2));

// let string = JSON.stringify({squirrel: false,
//     events: ["weekend"]});
// console.log(string);
// console.log(JSON.parse(string).events);

// function range(start, end, step){
//     let retArray = [];
//     if(step == undefined){
//         step = 1;
//     }
//     if (step>0){
//         let position = 0; 
//         while (start <= end){
//            retArray[position] = start;
//            start +=step;
//            position +=1;
//         }
//     }else {
//         let position = 0; 
//         while (start >= end){
//            retArray[position] = start;
//            start +=step;
//            position +=1;
//         }
//     }

//     return retArray;
// }

// function sum(aArray){
//     sum = 0;
//     for (let entry of aArray){
//         sum +=entry;
//     }
//     return sum;
// }

// console.log(range(1, 10));
// console.log(range(5, 2, -1));
// console.log(sum(range(1, 10)));

// function reverseArray(aArray){
//     let retArray = [];
//     position = 0;
//     for (let i = aArray.length-1; i>=0;i--){
//         retArray[position] = aArray[i];
//         position +=1;
//     }
//     return retArray
// }

// function reverseArrayInPlace(aArray){
//     temp =0;
//     for(i=0,j=aArray.length-1; i<j; i++, j--){
//         temp = aArray[i];
//         aArray[i] = aArray[j];
//         aArray[j] = temp;
//     }
//     return aArray
// }


// console.log(reverseArray(["A", "B", "C"]));
// // → ["C", "B", "A"];
// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue);


// function arrayToList(aArray){
//     let retList = {};
//     retList.value = '';
//     retList.next = null;
//     let start = retList;
//     for (let entry of aArray){
//         if(retList.value == ''){
//             //Start of list
//             retList.value = entry;
//             retList.next = null;
//         }else{
//             retList.next = {value:entry,next:null}
//             retList = retList.next;
//         }
//     }
//     return start;
// }

// function listToArray(aList){
//     let retArray = [];
//     let position = 0;
//     while(aList != null){
//         retArray[position] = aList.value;
//         aList = aList.next;
//         position ++;
//     }
//     return retArray;
// }

// function prepend( element, list){
//     return {'value':element, 'next':list};
// }

// function nth(list, number){
//     if(list == null){
//         return null;
//     }
//     if (number == 0){
//         return list.value;
//     }else{
//         return nth(list.next, number-1 )
//     }
// }


// console.log(arrayToList([10, 20,40]));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(listToArray(arrayToList([10, 20, 30])));
// // → [10, 20, 30]
// console.log(prepend(10, prepend(20, null)));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(nth(arrayToList([10, 20, 30]), 1));
// // → 20


// function deepEqual (obj1, obj2)
// {
//     if(obj1 == null){
//         return false;
//     }
//     if(obj2 == null){
//         return false;
//     }

//     if(typeof(obj1)!= "object" || typeof(obj2)!="object")
//     {
//         return obj1 === obj2;
//     }
//     if (typeof(obj1)== "object" && typeof(obj2)=="object"){
//         for(let key of Object.keys(obj1)){
//             if (deepEqual(obj1[key], obj2[key]))
//             {
//                 continue;
//             }
//             else
//             {
//                 return false;
//             }
//         }
//     }
//     return true;
// }


// let obj = {here: {is: "an"}, object: 2};
// console.log(deepEqual(obj, obj));
// // → true
// console.log(deepEqual(obj, {here: 1, object: 2}));
// // → false
// console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// // → true