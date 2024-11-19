// Declation function, Expression Function, Arrow function, Callback function, Generation function

function sum(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);

  return firstNumber + secondNumber;
}

function sum(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);

  return firstNumber + secondNumber + 10;
}
// JSDoc

/**
 * Hàm nối họ và tên
 * @param {*} firstName Họ và tên đệm
 * @param {*} lastName  Tên
 * @returns Tên đầy đủ
 * Author: NVQUY(19/11/2024)
 * ModifiedAt: NVYEN(19/11/2025)
 */
// const mergeName = (firstName, lastName) => {
//   return `${firstName} ${lastName}`;
// };

const mergeName = (firstName, lastName) => `${firstName} ${lastName}`;

const result = mergeName("Nguyễn thị", "Yến");

console.log("Result: ", result);

// Không có arguments

const total = () => {
  console.log(arguments);
};

total(1, 2, 3, 4, 5, 6);
