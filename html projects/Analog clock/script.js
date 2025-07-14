(function () {

    const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saurday"];

    function setTime(id, value) {
        document.getElementById(id).style.transform = `translate(-50%,-100%) rotate(${value}deg)`;
        document.getElementById(id).style.transform = `translate(-50%,-100%) rotate(${value}deg)`;
        document.getElementById(id).style.transform = `translate(-50%,-100%)  rotate(${value}deg)`;
    }

    function setHtml(id, value) {
        document.getElementById(id).innerHTML = value;
    }

    function paddedValue(value) {
        return value.toString().padStart(2, '0');
    }

    setInterval(() => {
        let newDate = new Date();
        let hh = newDate.getHours();
        let mm = newDate.getMinutes();
        let ss = newDate.getSeconds();

        let hhrotate = 30 * hh + mm / 2;
        let mmrotate = 6 * mm + ss / 10;
        let ssrotate = 6 * ss;

        setTime("hour", hhrotate);
        setTime("minute", mmrotate);
        setTime("second", ssrotate);
        setHtml("mytime", `${paddedValue(hh)} : ${paddedValue(mm)} : ${paddedValue(ss)}`);
        let musicSound = new Audio('clock-ticking.mp3');
        musicSound.play();
    }, 1000);

    let newDate = new Date();
    let day = newDate.getDay();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    setHtml('mydate', `${paddedValue(date)} - ${paddedValue(month)} - ${year}`);
    setHtml("myday", DAYS[day]);
})();
