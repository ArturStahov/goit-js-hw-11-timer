(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(t,e,i){},QfWi:function(t,e,i){"use strict";i.r(e);i("L1EO"),i("fp7Y"),i("e+qc");var n=function(){function t(t){this.timerId=null,this.days=0,this.hours=0,this.mins=0,this.secs=0,this.UiDay=t.querySelector('[data-value="days"]'),this.UiHours=t.querySelector('[data-value="hours"]'),this.UiMins=t.querySelector('[data-value="mins"]'),this.UiSecs=t.querySelector('[data-value="secs"]'),this.isActive=!1}var e=t.prototype;return e.start=function(t){var e=this;this.isActive||(this.timerId=setInterval((function(){var i=Date.now();if(Number(t)<Number(i))return console.warn("date entered is less than current!Enter current date!!!!!"),void e.stop();var n=t-i;e.isActive=!0,e.calculateTimer(n),e.updateClockUi()}),1e3))},e.stop=function(){this.isActive=!1,clearInterval(this.timerId),this.UiDay.textContent="00",this.UiHours.textContent="00",this.UiMins.textContent="00",this.UiSecs.textContent="00"},e.calculateTimer=function(t){var e=function(t){return String(t).padStart(2,"0")};this.days=e(Math.floor(t/864e5)),this.hours=e(Math.floor(t%864e5/36e5)),this.mins=e(Math.floor(t%36e5/6e4)),this.secs=e(Math.floor(t%6e4/1e3))},e.updateClockUi=function(){this.UiDay.textContent=this.days,this.UiHours.textContent=this.hours,this.UiMins.textContent=this.mins,this.UiSecs.textContent=this.secs},t}(),s={timerControl:document.querySelector("#timer-control"),clockUiRef:document.querySelector("#timer-1"),inputDate:document.querySelector('[data-input-date="input-date"]'),labelInputDate:document.querySelector("#label-input")},o=new n(s.clockUiRef);s.timerControl.addEventListener("click",(function(t){if("button-start"===t.target.dataset.button){if(""!==s.inputDate.value)return void o.start(s.inputDate.valueAsNumber);s.labelInputDate.textContent="Enter the date!!!!",s.labelInputDate.style.color="red"}"button-stop"===t.target.dataset.button&&(o.stop(),s.labelInputDate.textContent="Select date",s.labelInputDate.style.color="black")}))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.e2c35399602561ce1b3f.js.map