export function formatDay(input) {
  if (!input.startsWith("on") || input.length <= 2) return input;

  const day = input.slice(2);
  const formattedDay = day.charAt(0).toUpperCase() + day.slice(1).toLowerCase();
  return `On ${formattedDay}`;
}
