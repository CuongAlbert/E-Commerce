// Hàm kiểm tra ô input đang trống
export const isEmpty = (value) => value.trim() === "";

// Hàm check trùng email, trả về mảng rỗng là email hợp lệ
export const checkEmail = (value, useArr) =>
  useArr.filter((el) => el.email === value);

// Hàm check password có ít nhất 9 ký tự
export const correctPassword = (value) => value.trim().length > 8;
