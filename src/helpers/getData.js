
import { productList } from '../data/data.js';

const getById = (id, array) => array.find((el) => el.id === id);


const getProducts = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(productList);
  }, 2000);
});

const getAllProductsFromDB = async (setState) => {
  try {
    const result = await getProducts;
    setState(result);
  } catch (error) {
    console.log(error);
    alert('We are unable to display products at this time.');
  }
};

const getProductById = async (id, setState) => {
  try {
    const result = await getProducts;
    setState(getById(id, result));
  } catch (error) {
    console.log(error);
  }
};

export { getAllProductsFromDB, getProductById };
