export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + '...';
}
export function getCurrentTimeInIndonesia(): Date {
  // Create a date object with the current UTC time
  const now = new Date();

  // Convert the UTC time to Indonesia's time
  const offsetIndonesia = 7; // Indonesia is in Central European Summer Time (UTC+2), but you might need to adjust this based on Daylight Saving Time
  now.setHours(now.getUTCHours() + offsetIndonesia);

  return now;
}

export function formatTimeForIndonesia(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true, // This will format the time in 12-hour format with AM/PM
    timeZone: 'Asia/Jakarta',
  };

  let formattedTime = new Intl.DateTimeFormat('en-US', options).format(date);

  // Append the time zone abbreviation. You can automate this with libraries like `moment-timezone`.
  // For simplicity, here I'm just appending "CET", but do remember that Indonesia switches between CET and CEST.
  formattedTime += ' WIB';

  return formattedTime;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
