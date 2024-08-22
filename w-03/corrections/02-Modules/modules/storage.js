const storeItems = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

const getItems = (key) => {
    const data = JSON.parse(localStorage.getItem(key)) || [];
    return data;
  };



export {storeItems, getItems};