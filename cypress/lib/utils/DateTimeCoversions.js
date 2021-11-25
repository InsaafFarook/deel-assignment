export const convertStringToDate = (dateString) => {
  return new Date(dateString);
}

export const changeDate = (date, numOfDays) => {
  let d = new Date(date);
  d.setDate(d.getDate() + numOfDays);
  return d;
}