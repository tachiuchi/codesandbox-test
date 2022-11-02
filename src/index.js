/**
 * const,letの変数宣言
 */

// var var1 = "var変数";
// console.log(var1);

// //var変数は上書き可能
// var1 = "var変数を上書き";
// console.log(var1);

// //var変数は再宣言可能
// var var1 = "var変数を再宣言";
// console.log(var1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言不可能
// let val2 = "let変数を再宣言";

//const val3 = "const変数";
//console.log(val3);

//const変数は上書き不可能
//val3 = "const変数上書き";

//const val3 = "const変数を再宣言";

//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "mi",
//   age: 22
// };

// val4.name = "mimi";
// val4.address = "tokyo";

// console.log(val4);

//constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "mi";
// const age = "18";
// //「私の名前はmiです。年齢は18歳です。」

// //従来の方法
// const message = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message);

// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

/**
 * アロー関数
 */

//従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) => {
//   return str;
// };

// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "mi",
//   age: 2
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。2`;
// console.log(message1);

// const { name, age } = myProfile;

// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ["み", 3];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// //配列は順番になる
// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。2`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */

// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん`);
// sayHello("bumimi");

/**
 * スプレッド構文　...
 */
//配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(...arr3);

//配列のコピーや結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
arr6[0] = 1000;

console.log(arr6);
console.log(arr4); //元の配列は影響受けない　値渡し

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// //イコールでコピーはできるのでは？
// const arr8 = arr4;
// //要素0を書き換え
// arr8[0] = 100;
// console.log(arr8);
// //コピー元も変更されてしまう　イコールは参照渡しになってしまう
// console.log(arr4);
