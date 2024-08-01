export const avatarIntials = (str) => {
  if (!str) return "";

  return str
    .split(" ")
    .map((item) => item[0].toUpperCase())
    .join("");
};
