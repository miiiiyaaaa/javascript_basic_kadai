const toDay = new Date();
console.log(toDay);

const year = toDay.getFullYear();
console.log(year,'年');

const month = toDay.getMonth() + 1;
console.log(month,'月');

const day = toDay.getDate();
console.log(day,'日');