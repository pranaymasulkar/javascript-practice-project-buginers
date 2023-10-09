const hourElemet = document.getElementById("hour");

const minuteElement = document.getElementById("minute");

const secondElement = document.getElementById("second");

const amPmElement = document.getElementById("ampm");

function UpdateTime(){
  let hr = new Date().getHours();
  let mi = new Date().getMinutes();
  let se = new Date().getSeconds();
  let ampm = "AM";
  
  if(hr > 12){
    hr = hr - 12;
    ampm = "PM"
  }
  
  hr = hr < 10 ? "0" + hr : hr;
  mi = mi < 10 ? "0" + mi : mi;
  se = se < 10 ? "0" + se : se;
  
  hourElemet.innerHTML = hr;
  minuteElement.innerHTML = mi;
  secondElement.innerHTML = se;
  amPmElement.innerHTML = ampm;
  
  setTimeout(()=>{
    UpdateTime();
  }, 1000)
}

UpdateTime();