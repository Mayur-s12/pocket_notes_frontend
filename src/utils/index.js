export const avatarIntials = (str) => {
  if (!str) return "";

  return str
    .split(" ")
    .map((item) => item[0].toUpperCase())
    .join("");
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);

  const dateOptions = { day: "numeric", month: "long", year: "numeric" };
  const timeOptions = { hour: "2-digit", minute: "2-digit" };

  const formattedDate = date.toLocaleDateString(undefined, dateOptions);
  const formattedTime = date.toLocaleTimeString(undefined, timeOptions);

  return `${formattedDate} . ${formattedTime}`;
};
