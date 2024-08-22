// import { storeItems } from './storage';

const createCard = (product, products, addToCart) => {
  //creating the div element for the card container and adding styling
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('bg-white');
  cardContainer.classList.add('p-4');
  cardContainer.classList.add('rounded-lg');
  cardContainer.classList.add('shadow-md');
  console.log(product);
  // creating the image element for the card and adding some styling and adding the src from the fetch
  const image = document.createElement('img');
  image.classList.add('rounded-lg');
  image.classList.add('shadow-md');
  image.src = product.image;

  // creating the title for the card and the styling
  const title = document.createElement('h2');
  title.classList.add('text-xl');
  title.classList.add('font-bold');
  title.classList.add('mb-2');
  title.textContent = product.title;

  // creating the description for the card product
  const description = document.createElement('p');
  description.classList.add('text-gray-700');
  description.classList.add('mb-2');
  description.textContent = product.description;

  // creating the paragraph with the price details
  const price = document.createElement('p');
  price.classList.add('text-lg');
  price.classList.add('text-blue-600');
  price.classList.add('font-semibold');
  price.textContent = product.price;

  // creating button to add to cart
  const addBtn = document.createElement('button');
  addBtn.classList.add('bg-blue-500');
  addBtn.classList.add('mt-2');
  addBtn.classList.add('py-1');
  addBtn.classList.add('px-3');
  addBtn.classList.add('text-white');
  addBtn.classList.add('rounded');
  addBtn.classList.add('hover:bg-blue-700');
  addBtn.textContent = 'Add to Cart';
  addBtn.id = product.id;

  addBtn.addEventListener('click', (event) => {
    console.log(event.target);
    const addedToCart
  });

  //Appending elements
  cardContainer.appendChild(image);
  cardContainer.appendChild(title);
  cardContainer.appendChild(description);
  cardContainer.appendChild(price);
  cardContainer.appendChild(addBtn);

  return cardContainer;
};

const renderCards = (products, containerId) => {
  const container = document.getElementById(containerId);

  products.map((product) => {
    const card = createCard(product);
    container.appendChild(card);
  });
};

export default renderCards;
