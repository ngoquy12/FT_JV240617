// import formatMoney, { PI, POST, sum } from "./common.js";
import * as common from "./common.js";
import formatMoney from "./formatData.js";

const { GET, POST } = common;
const { PI, sum } = common;

console.log("POST: ", POST);
console.log("PI: ", PI);
console.log("Sum: ", sum(1, 2));
console.log("formatMoney: ", formatMoney(20000000));
