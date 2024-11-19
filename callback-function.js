const sayHello = (userName, callback) => {
  callback();
  return `Hello ${userName}`;
};

const welcome = () => {
  console.log("Welcome to Rikkei Academy");
};

console.log(sayHello("Nguyễn Văn A", welcome));
