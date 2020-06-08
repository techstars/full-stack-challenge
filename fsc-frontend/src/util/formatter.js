export const formatDate = date => {
  const parsedDate = new Date(date);
  const day = `${parsedDate.getDate()}`.padStart(2, '0');
  const month = `${parsedDate.getMonth()}`.padStart(2, '0');
  const year = parsedDate.getFullYear();
  return `${month}/${day}/${year}`;
}
