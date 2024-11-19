const array = [1, 2, 1, 4, 5, 6];

const myFind = (arr, input) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === input) {
      return arr[i];
    }
  }
};

const findNumber = array.find((item) => item === 1);
const filterNumber = array.filter((item) => item === 10);
const formatArray = array.map((item) => `Số ${item}`);

console.log(findNumber);
console.log("filterNumber: ", filterNumber);
console.log("formatArray: ", formatArray);

const conditionExams = ["Đủ", "Thiếu", "Đủ", "Đủ", "Đủ"];

const checkEvery = conditionExams.every((item) => item === "Đủ");
const checkSome = conditionExams.some((item) => item === "Thiếu");
const resetArray = conditionExams.fill("Đủ");

console.log("checkEvery: ", checkEvery);
console.log("checkSome: ", checkSome);
console.log("resetArray: ", resetArray);
