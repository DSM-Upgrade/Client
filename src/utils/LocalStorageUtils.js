export const getItem = (key) => {
  const targetItem = localStorage.getItem(key);

  const parseItem = JSON.parse(targetItem);

  return parseItem;
};

export const setItem = (key, value) => {
  const stringfyItem = JSON.stringify(value);

  localStorage.setItem(key, stringfyItem);
};

export const clearStorage = () => {
  localStorage.clear();
};

export const removeItem = (key) => {
  localStorage.removeItem(key);
};
