/**
 * Format tiền tệ
 * @param {*} money Chuỗi tiền tệ cần format
 * @param {*} type Loại tiền tệ quốc gia
 * @returns Chuỗi tiền tệ đã format
 * Auth: 19/11/2024
 * ModifinedAt: ...
 */
const formatMoney = (money, type = "VND") => {
  return money.toLocaleString("it-IT", { style: "currency", currency: type });
};

export default formatMoney;
