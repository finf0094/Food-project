function Timer(id, deadline) {
    function getTimeRemaining(endtime) {
        let days, hours, minutes, seconds;
        const t = Date.parse(endtime) - Date.parse(new Date());

        if (t <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            // Time calculations for days, hours, minutes and seconds
            const millisecondInDay = 1000 * 60 * 60 * 24;
            const millisecondInHour = 1000 * 60 * 60;
            const millisecondInMinute = 1000 * 60;
            days = Math.floor(t / millisecondInDay);
            hours = Math.floor((t % millisecondInDay) / millisecondInHour);
            minutes = Math.floor((t % (millisecondInHour)) / millisecondInMinute);
            seconds = Math.floor((t % (millisecondInMinute)) / 1000);
        }
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector);
        const days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds');
        const timeInterval = setInterval(updateClock, 1000);
        updateClock();
        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                return clearInterval(timeInterval);
            }
        }
    }

    setClock(id, deadline);
}

export default Timer;