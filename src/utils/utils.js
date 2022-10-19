const months = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];
const declinationYear = ["год", "года", "лет"];
const MS_1YEAR = 31557600000;

export const convertDate = (date) => {
  const curDate = new Date(date);
  return `${curDate.getDate()} ${
    months[curDate.getMonth()]
  } ${curDate.getFullYear()}`;
};

export const getAge = (birthDate) => {
  const fullAge = Math.floor((new Date() - new Date(birthDate)) / MS_1YEAR);
  return `${fullAge} ${
    declinationYear[
      fullAge % 100 > 4 && fullAge % 100 < 20
        ? 2
        : [2, 0, 1, 1, 1, 2][fullAge % 10 < 5 ? fullAge % 10 : 5]
    ]
  }`;
};

export const convertPhone = (phone) => {
  return `${phone.slice(0, 2)} (${phone.slice(2, 5)}) 
  ${phone.slice(5, 8)} ${phone.slice(8, 10)} ${phone.slice(10)}`;
};
