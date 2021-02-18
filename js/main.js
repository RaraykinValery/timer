let timer = {
    hours: 0,
    mins: 0,
    secs: 0,

    hours_angle: 180,
    mins_angle: 180,
    secs_angle: 180,

    hours_arrow: document.getElementById("js-hours-arrow"),

    hours_input: document.getElementById("hours_input"),
    mins_input: document.getElementById("mins_input"),
    secs_input: document.getElementById("secs_input"),

    start_btn: document.getElementById("js-start-btn"),
    stop_btn: document.getElementById("js-stop-btn"),
};

let view = {
    // unit - hours/mins/secs
    arrowMoving: function(unit, deg) {
        let angle = unit + '_angle';
        timer[angle] = timer[angle] - deg;
        let newStyle = "rotate(" + timer[angle] + "deg)";
        timer[unit + '_arrow'].style.transform = newStyle;
        controller.subtractionСounter(unit);
    },
};

let controller = {
    subtractionСounter: function(unit) {
        timer[unit] = timer[unit] - 1;
    },
    getAngle: function (unit) {
        if (unit == 'hours') {
            timer[unit + '_angel'] = 180 + timer[unit]*30;
        } else if (unit == 'mins' || unit == 'secs') {
            timer[unit + '_angel'] = 180 + timer[unit]*6;
        }         
     },
     setTime: function(unit) {
         this.getAngle(unit);
         let style = "rotate(" + timer[unit + '_angel'] + "deg)";
         timer[unit + '_arrow'].style.transform = style;
     },
    start: function() {

    },
};

// Monitoring of inputs
function getHours() {timer.hours = hours_input.value; controller.setTime('hours');};
function getMins() {timer.mins = mins_input.value; controller.setTime('mins');};
function getSecs() {timer.secs = secs_input.value; controller.setTime('secs');};

timer.hours_input.addEventListener('input', getHours);
timer.mins_input.addEventListener('input', getMins);
timer.secs_input.addEventListener('input', getSecs);

// timer.start_btn.onclick

// mins = 1;
// secs = 5;
// setInterval(()=>{console.log(mins + " : " + secs)}, 1000);
// setInterval(()=>{secs = secs - 1}, 1000);
// setInterval(()=>{mins = mins - 1}, 60000);

// getAngle: function () {
//     let a1 = this.hours * 30;
//     let a2 = this.mins * 0.5;
//     let a3 = this.secs * 0.00833;
//     this.angle = 180 + a1 + a2 + a3;
// },
// setTime: function() {
//     let style = "rotate(" + this.angle + "deg)";
//     timer.arrow.style.transform = style;
// },
