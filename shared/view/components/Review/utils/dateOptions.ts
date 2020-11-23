const DECLENSION = {
  seconds: ['Second', 'Seconds', 'SecondsSecondary'],
  minutes: ['Minute', 'Minutes', 'MinuteSecondary'],
  hours: ['Hour', 'Hours', 'HoursSecondary'],
  days: ['Day', 'Days', 'DaysSecondary'],
};

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timezone: 'UTC',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
};

export { DECLENSION, options };
