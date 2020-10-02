const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timezone: 'UTC',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
};

function getHowMuchTimeHasPassed(date: string): string {
  const targetDate = new Date(date);
  const currentDate = Date.now();

  const diff = currentDate - targetDate.valueOf();

  const seconds = diff / 1000;
  if (seconds < 60) return `${Math.floor(seconds)} секунд назад`;

  const minutes = seconds / 60;
  if (minutes < 60) return `${Math.floor(minutes)} минут назад`;

  const hours = minutes / 60;
  if (hours < 24) return `${Math.floor(hours)} часов назад`;

  const days = hours / 24;
  if (days < 30) return `${Math.floor(days)} дней назад`;

  return targetDate.toLocaleDateString('ru-RU', options);
}

export default getHowMuchTimeHasPassed;
