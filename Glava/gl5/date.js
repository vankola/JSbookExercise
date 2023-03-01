let dat = new Date(2012, 1, 20, 3, 12);
console.log(dat);



function getWeekDay(date) {
  let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

  return days[date.getDay()];
}

let date = new Date(2014, 0, 3);
console.log( getWeekDay(date) ); 



function getLocalDay(date) {
  let day = date.getDay();
  if (day == 0) { 
    day = 7;
  }

  return day;
}
let date6 = new Date(2012, 0, 3);  
console.log( getLocalDay(date6) );  




function getDateAgo(date, days) {
  let dateCopy = new Date(date);

  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}

let date5 = new Date(2015, 0, 2);
console.log( getDateAgo(date5, 1) );  
console.log( getDateAgo(date5, 2) );  
console.log( getDateAgo(date5, 365) );  




function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}
console.log( getLastDayOfMonth(1998, 9) ); 




function getSecondsToday() {
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let diff = now - today; 
  return Math.round(diff / 1000); 
}
console.log( getSecondsToday() );