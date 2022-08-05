let myName = document.querySelector("#myName");
let username = prompt("Lütfen adınızı giriniz: "); 
myName.innerHTML = username;

function showTime() {
    let myClock = document.querySelector("#myClock");
    let myDate = document.querySelector("#myDate");
    let myDay = document.querySelector("#myDay");
    let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]

    let currentDate = new Date().toLocaleDateString();
    let currentTime = new Date().toLocaleTimeString();
    let day = new Date().getDay();
    
    myClock.innerHTML = `Saat: ${currentTime}`;
    myDate.innerHTML = currentDate;
    myDay.innerHTML = days[day];
}

setInterval(showTime,1000);




