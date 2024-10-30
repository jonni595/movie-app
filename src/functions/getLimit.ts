export const getLimit = (text: string) => {
  return text.length > 200 ? text.slice(0, 200) + "..." : text;
};
