// let rabbit = {};
// rabbit.speak = function(line){
//     console.log(`The rabbit says '${line}'` );
// };

// rabbit.speak("I am alive")

// function speak(line){
//     console.log(`The ${this.type} rabbit says '${line}'`);
// }

// let whiteRabbit = {type: "white", speak};
// let hungryRabbit = {type: "hungry", speak};

// console.log(Object.getPrototypeOf({}));
// console.log(Object.prototype);

// class Vec {
//     constructor(x, y){
//         this.x = x;
//         this.y = y;
//     }

//     plus(vector){
//         return new Vec(this.x+vector.x, this.y+vector.y);
//     }

//     minus(vector){
//         return new Vec(this.x-vector.x, this.y-vector.y);
//     }

//     get length(){
//         return Math.sqrt(this.x*this.x + this.y*this.y);
//     }
// }
// console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// // → Vec{x: 3, y: 5}
// console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// // → Vec{x: -1, y: -1}
// console.log(new Vec(3, 4).length);
// // → 5


// class Group {
//     constructor(){
//         this.content = [];

//     }
//     add( obj){
//         this.content.push(obj);
//     }
//     delete(obj){
//         let location = this.content.indexOf(obj);
//         if(location!=-1){
//             if(location== 0){
//                 this.content = this.content.slice(1);
//             } else if (location == this.content.length-1){
//                 this.content = this.content(0,location);
//             }else{
//                 this.content = this.content(0,location).concat(this.content(location+1));
//             }

//         }
//     }
//     has(obj){
//         return this.content.includes(obj);
//     }

//     [Symbol.iterator]() {
//         return new GroupIterator(this.content);
//     }

//     static from(iterable){
//         let agroup = new Group();
//         for (let obj of iterable){
//             agroup.add(obj);
//         }
//         return agroup;
//     }

//   }

// class GroupIterator {
//     constructor(content){
//         this.curr_position = 0;
//         this.end_position = content.length;
//         this.content = content;
//     }
//     next(){
//         if(this.curr_position === this.end_position){
//             return {done:true};
//         }
//         let toRet = {value:this.content[this.curr_position], done:false}
//         this.curr_position +=1;
//         return toRet;
//     }
// }

// let group = Group.from([10, 20]);
// console.log(group.has(10));
// // → true`
// console.log(group.has(30));
// // → false
// group.add(10);
// group.delete(10);
// console.log(group.has(10));
// // → false

// // Your code here (and the code from the previous exercise)

// for (let value of Group.from(["a", "b", "c"])) {
//     console.log(value);
//   }
//   // → a
//   // → b
//   // → c



// let map = {one: true, two: true, hasOwnProperty: true};
// map.prototype = Object.prototype;

// // Fix this call
// console.log(map.prototype.hasOwnProperty.call(map,"one"));
// // → true

