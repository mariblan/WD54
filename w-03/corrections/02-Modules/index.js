import fetchItems from './modules/network.js';
import { storeItems, getItems } from './modules/storage.js';
import renderCards from './modules/ui.js';

const API_URL = 'https://fakestoreapi.com/products';

const main = async() => {
    // Fetch products from the API
    const products = await fetchItems(API_URL);

    // Save products to localStorage
    storeItems('products', products);

    // Retrieve products from localStorage
    const storedProducts = getItems('products');

    // Render products to the DOM
    renderCards(storedProducts, 'products');
}

main();
