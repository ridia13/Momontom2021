'use strict';
const todayDate = document.querySelector('.js-date');
const clock = document.querySelector('.js-clock'),
  title = clock.querySelector('.js-title');

  
  function getTime() {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  title.innerText = `${hour < 10? `0${hour}` : `${hour}`}:${min < 10? `0${min}` : `${min}`}:${sec < 10? `0${sec}` : `${sec}`}`;
}

function getDate(){
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth()+1;
  const date = today.getDate();
  console.log(month);
  todayDate.innerText = `${year}/${month < 10? `0${month}` : `${month}`}/${date <10 ? `0${date}` : `${date}`}`;
}


function init() {
  setInterval(getTime, 1000);
  getDate();
}
init();