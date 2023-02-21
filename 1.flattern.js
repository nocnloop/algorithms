/*
 * @Author: Qiuxue.Wu - LCFC
 * @Date: 2021-05-10 09:36:14
 * @LastEditors: Qiuxue.Wu - LCFC
 * @LastEditTime: 2023-02-21 11:35:36
 * @Description: file content
 * @FilePath: /algorithms/1.flattern.js
 */

// 将数组展平
const arr = [1, 2, [[3, 4], 5]];

// 递归法
function flattern1(arr) {
  return [].concat(...arr.map((item) => (Array.isArray(item) ? flattern1(item) : item)));
}

console.log(flattern1(arr)); // [1,2,3,4,5]

// 非递归法
function flattern2(arr = []) {
  let stack = arr.slice();
  let result = [];
  while (stack.length > 0) {
    const last = stack.pop();
    Array.isArray(last) ? stack.push(...last) : result.push(last);
  }
  return result.reverse();
}

console.log(flattern2(arr)); // [1,2,3,4,5]
