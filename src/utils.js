export const getElements = (arr, index) => {
  const len = arr.length;
  // Normalize the index to handle negative values
  const start = ((index % len) + len) % len;
  let result = [];

  // fetch only the first four since the rest aren't visible due to limited width
  for (let i = 0; i < 4; i++) {
    result.push(arr[(start + i) % len]);
  }

  return result;
};

export const getFragmentName = (id) => id.toLowerCase().replace(/ /g, "-");
