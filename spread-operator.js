// Đối với mảng

const array1 = [1, 2, 3, 4, 5];

const array2 = [6, 7, 8, 9];

// const array3 = array1.concat(array2);
const array3 = [...array1, ...array2, 10, 11, 12];

console.log("Array3: ", array3);

// Đối với đối tượng
const userInfo = {
  id: 1,
  userName: "Yến DT",
  age: 21,
};

const newUserInfo = {
  ...userInfo,
  address: "Hà Nội, VN",
  email: "yendt@gmail.com",
};

console.log("User Info: ", newUserInfo["email"]);
