// class MultiplicatorUnitFailure extends Error {}

// function primitiveMultiply(a, b) {
//   if (Math.random() < 0.2) {
//     return a * b;
//   } else {
//     throw new MultiplicatorUnitFailure("Klunk");
//   }
// }

// function reliableMultiply(a, b) {
//     try {
//         return primitiveMultiply(a,b);
//     }catch(aError){
//         if( aError instanceof MultiplicatorUnitFailure){
//             console.log("Err");
//             return reliableMultiply(a,b);
//         }
//     }
// }

// console.log(reliableMultiply(8, 8));
// // → 64


// const box = {
//     locked: true,
//     unlock() { this.locked = false; },
//     lock() { this.locked = true;  },
//     _content: [],
//     get content() {
//       if (this.locked) throw new Error("Locked!");
//       return this._content;
//     }
//   };
  
//   function withBoxUnlocked(body) {
//     let toLock = false;
//     if(box.locked){
//         box.unlock();
//         toLock = true;
//     }
//     try{
//         body();
//     }catch(anError){
//         console.log(anError.message);
//     }
//     finally{
//         if(toLock){
//             box.lock();
//         }
//     }
//   }
  
//   withBoxUnlocked(function() {
//     box.content.push("gold piece");
//   });
  
//   try {
//     withBoxUnlocked(function() {
//       throw new Error("Pirates on the horizon! Abort!");
//     });
//   } catch (e) {
//     console.log("Error raised: " + e);
//   }
//   console.log(box.locked);
//   // → true