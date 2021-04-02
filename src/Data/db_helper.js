import allData from "./bolsas";

export const getAllBags = async () => {
  const array = Object.values(allData);
  //randomDelay();
  return array;
};

export const getOneBag = async (code) => {
  console.log(Object.values(allData));
  try {
    const bags = Object.values(allData).find((bag) => bag.codigo === code);
    return bags;
  } catch (error) {
    return {};
  }
};

const randomDelay = () =>
  new Promise((resolve) => {
    const max = 350;
    const min = 100;
    const delay = Math.floor(Math.random() * (max - min + 1)) + min;

    setTimeout(resolve, delay);
  });
