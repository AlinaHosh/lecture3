const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element){
  let day = 1;
  const daysOfWeek = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
  const tableMonth = document.createElement('table');
  const dateFirstDayMonth = new Date(year, month - 1);
  let firstDay = dateFirstDayMonth.getDay();
  const lastDayMonth = new Date(year, month , 0).getDate();

  if(!firstDay) { 
    firstDay = 7;
  }

  daysOfWeek.forEach(item => {

    const headerCell = document.createElement('th');

    headerCell.innerText = item;
    tableMonth.append(headerCell);

  });
  
  for(let row = 0; row < 6; row++){

    const week = document.createElement('tr');

    tableMonth.append(week);


    for(let dayOfWeek = 1; dayOfWeek < 8; dayOfWeek++){

      const cell = document.createElement('td');

      week.append(cell);

      if(dayOfWeek < firstDay && row == 0) {
        continue;
      }

      if(day <= lastDayMonth) {

        cell.innerText = day;
        day++;
      } 
    } 

    if(day > lastDayMonth) {
      break;
    }
  }

  element.append(tableMonth);
}

calendarTable(2019, 10, calendar);