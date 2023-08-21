export const shuffle = <T>(array: Array<T>) => {
  const newArray = JSON.parse(JSON.stringify(array));
  return newArray.sort(() => Math.random() - 0.5);
};

export const duplicate = <T>(array: Array<T>) => {
  const result = [...array, ...array].map((x, index) => {
    return { id: index + 1, ...x };
  });

  return result;
};
