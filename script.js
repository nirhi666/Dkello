setInterval(() => {
    d = new Date(); //object of date()
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hr_rotation = 30 * hr + min / 2; //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;
    
    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
    }, 1000);
function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const ampm = hours >= 12 ? '' : '';

  const clockElement = document.getElementById('clock');
  clockElement.textContent = `${hours % 24 || 24}:${minutes}:${seconds} ${ampm}`;

  const dateElement = document.getElementById('date');
  dateElement.textContent = now.toLocaleDateString('fi-FI', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  const daytimeElement = document.getElementById('daytime');
  const dayTime = getDayTime(hours);
  daytimeElement.textContent = `Ajankohta: ${dayTime}`;
}

function getDayTime(hours) {
  if (hours >= 6 && hours < 10) return 'Aamu';
   if (hours >= 10 && hours < 12) return 'Aamupäivä';
  if (hours >= 12 && hours < 18) return 'iltapäivä';
  if (hours >= 18 && hours < 23) return 'Ilta';
  if (hours >= 23 || hours < 6) return 'Yö';
}

updateClock();
setInterval(updateClock, 1000);
