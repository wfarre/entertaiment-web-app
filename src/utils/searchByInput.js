export const searchByInput = (data, input) => {
  if (input.length === 0) {
    return data;
  }

  if (input.length > 0) {
    const newData = data.filter((data) => {
      return data.title.toLowerCase().includes(input.toLowerCase());
    });

    return newData;
  }
};
