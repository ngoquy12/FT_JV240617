const renderName = (userName = "A") => {
  return `Nguyễn Văn ${userName}`;
};

console.log(renderName());

const createGender = (gender = "Other") => {
  return `Created ${gender}`;
};

console.log(createGender());

const searchAndPaging = (
  searchKey = "",
  pageSize = 10,
  currentPage = 1,
  sort = "ASC"
) => {
  return `http://localhost:8080/users?name=${searchKey}&pageSize=${pageSize}&currentPage=${currentPage}&sort=${sort}`;
};

console.log(searchAndPaging());
