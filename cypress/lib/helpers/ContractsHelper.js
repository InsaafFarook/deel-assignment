import * as DateTimeConversion from '../../lib/utils/DateTimeCoversions';

export const getContractEffectiveDate = (dateString, numOfDates) => {
  let date = DateTimeConversion.convertStringToDate(dateString);
  date = DateTimeConversion.changeDate(date, numOfDates);

  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();

  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let contractDate = dd + ' ' + months[mm] + ' ' + yyyy;
  return contractDate;
}