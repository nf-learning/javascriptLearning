// let re1 = new RegExp("abc");
// let re2 = /abc/;
// console.log(/abc/.test("abcde"));

// let match = /\d+/.exec("one two 100");
// console.log(match);
// // → ["100"]
// console.log(match.index);
// // → 8


// console.log(/bad(ly)?/.exec("bad"));
// // → ["bad", undefined]
// console.log(/(\d)+/.exec("123"));
// // → ["123", "3"]

// function getDate(string) {
//     let [_, month, day, year] =
//       /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
//     return new Date(year, month - 1, day);
//   }
//   console.log(getDate("1-30-2003"));
//   // → Thu Jan 30 2003 00:00:00 GMT+0100 (CET)

// verify(/ca(r|t)/,
//        ["my car", "bad cats"],
//        ["camper", "high art"]);

// verify(/pr?op/,
//        ["pop culture", "mad props"],
//        ["plop", "prrrop"]);

// verify(/ferr(et|y|ari)/,
//        ["ferret", "ferry", "ferrari"],
//        ["ferrum", "transfer A"]);

// verify(/.*?ious\b/,
//        ["how delicious", "spacious room"],
//        ["ruinous", "consciousness"]);

// verify(/\W[,.:;]/,
//        ["bad punctuation ."],
//        ["escape the period"]);

// verify(/\w{6,}/,
//        ["Siebentausenddreihundertzweiundzwanzig"],
//        ["no", "three small words"]);

// verify(/\b[^eE\s]+\b/,
//        ["red platypus", "wobbling nest"],
//        ["earth bed", "learning ape", "BEET"]);


// function verify(regexp, yes, no) {
//   // Ignore unfinished exercises
//   if (regexp.source == "...") return;
//   for (let str of yes) if (!regexp.test(str)) {
//     console.log(`Failure to match '${str}'`);
//   }
//   for (let str of no) if (regexp.test(str)) {
//     console.log(`Unexpected match for '${str}'`);
//   }
// }

// let text = "'I'm the cook,' he said, 'it's my job.'";
// // Change this call.
// console.log(text.replace(/(\W|^)'|'(\W)(\b|$)/g, '$1"$2'));
// // → "I'm the cook," he said, "it's my job."

// // Fill in this regular expression.
// let number = /(^(-|\+)?\d*?(\d\.|\.\d)?\d*?$)|(^(-|\+)?\d*(\d\.|\.\d)?(e|E){1}(-|\+)?\d+?$)/;

// // Tests:
// for (let str of ["1", "-1", "+15", "1.55", ".5", "5.",
//                  "1.3e2", "1E-4", "1e+12"]) {
//   if (!number.test(str)) {
//     console.log(`Failed to match '${str}'`);
//   }
// }
// for (let str of ["1a", "+-1", "1.2.3", "1+1", "1e4.5",
//                  ".5.", "1f5", "."]) {
//   if (number.test(str)) {
//     console.log(`Incorrectly accepted '${str}'`);
//   }
// }