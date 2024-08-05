const summonBtn = document.querySelector('#summon');
const pond = document.querySelector('#pond');
const addForm = document.querySelector('#add-form');

const renderDuck = ({ name, imgUrl, quote }) => {
    //This is much more concise and readable, but leaves you vulnerable to security risks.
    pond.innerHTML += `<div class="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src=${imgUrl}
          alt=${name} />
      </figure>
      <div class="card-body">
        <h2 class="card-title">${name}</h2>
        <p>${quote}</p>
      </div>
    </div>`;
};
