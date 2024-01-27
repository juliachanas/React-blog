export function dateToStr(date) {
  const month = date.getMonth() + 1;
  console.log(month);
  const day = date.getDate();
  console.log('Day', day);
  const year = date.getFullYear();
  console.log('year', year);

  const formattedMonth = month < 10 ? '0' + month : month;
  const formattedDay = day < 10 ? '0' + day : day;

  return `${formattedMonth}/${formattedDay}/${year}`;
}
