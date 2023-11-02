export const formatDate = (date: Date) => {
  const dateObject = new Date(date);

  const day: number = dateObject.getDate();
  const month: number = dateObject.getMonth() + 1; // Months are 0-based, so add 1
  const year: number = dateObject.getFullYear();
  const hours: number = dateObject.getHours();
  const minutes: number = dateObject.getMinutes();
  const amOrPm: string = hours >= 12 ? "pm" : "am";

  const formattedDate: string = `${day}-${month}-${year} ${
    hours % 12 || 12
  }:${minutes}${amOrPm}`;

  return formattedDate;
};
