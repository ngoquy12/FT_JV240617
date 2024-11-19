const colors = ["red", "green", "blue"];

// Cách làm thông thường
console.log("Index 0: ", colors[0]);
console.log("Index 0: ", colors[1]);
console.log("Index 0: ", colors[2]);

// Destructuring
const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor, secondColor, thirdColor);

// Đối với đối tượng
const userInfo = {
  id: 1,
  userName: "Nguyễn Văn A",
  age: 21,
};

console.log(userInfo.age);
console.log(userInfo.id);
console.log(userInfo.userName);

const { id, age, userName } = userInfo;

console.log(id, age, userName);
