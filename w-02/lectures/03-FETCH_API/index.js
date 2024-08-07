const summonBtn = document.querySelector('#summon');
const pond = document.getElementById('pond');
const addForm = document.querySelector('#add-form');

const renderDuck = ({ name, imgUrl, quote }) => {
    //This is concise and readable, but leaves you vulnerable to security risks.
    // pond.innerHTML += `<div class="card card-compact bg-base-100 w-96 shadow-xl">
    //   <figure>
    //     <img
    //       src=${imgUrl}
    //       alt=${name} />
    //   </figure>
    //   <div class="card-body">
    //     <h2 class="card-title">${name}</h2>
    //     <p>${quote}</p>
    //   </div>
    // </div>`;

    //doing complex DOM manipulation starts to get very verbose with this technique, but is more secure
    //declare variables
    const card = document.createElement('div');
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    const body = document.createElement('div');
    const title = document.createElement('h2');
    const text = document.createElement('p');

    //Set img properties, and append to figure
    img.src = imgUrl;
    img.alt = name;
    figure.appendChild(img);

    //Set body content and append
    title.textContent = name;
    title.classList.add('card-title');
    text.textContent = quote;
    body.classList.add('card-body');
    body.appendChild(title);
    body.appendChild(text);

    //Append to card
    card.classList.add(
        'card',
        'card-compact',
        'bg-base-100',
        'w-96',
        'shadow-xl'
    );
    card.appendChild(figure);
    card.appendChild(body);

    //Add card to pond
    pond.appendChild(card);
};

const errorHandler = (error) => {
    console.error(error);
    const h2 = document.createElement('h2');
    h2.classList.add(
        'inline-block',
        'm-auto',
        'text-6xl',
        'mb-6',
        'text-red-600'
    );
    h2.textContent = error;
    pond.appendChild(h2);
};

//using .then chaining
// summonBtn.addEventListener('click', () => {
//     // console.log('You tried to summon the ducks!');
//     fetch('https://duckpond-89zn.onrender.com/ducks/')
//         .then((res) => {
//             if (!res.ok)
//                 throw new Error(`${res.status} - Something went quackers!`);
//             // console.log(res);
//             return res.json();
//         })
//         .then((data) => data.forEach((duck) => renderDuck(duck)))
//         .catch((err) => errorHandler(err));
// });

//async/await
summonBtn.addEventListener('click', async () => {
    try {
        // console.log('You tried to summon the ducks!');
        const res = await fetch('https://duckpond-89zn.onrender.com/ducks/');
        // console.log(res);
        if (!res.ok)
            throw new Error(`${res.status} - Something went quackers!`);
        const data = await res.json();
        data.forEach((duck) => renderDuck(duck));
    } catch (err) {
        errorHandler(err);
    }
});

//making a POST request
addForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log('You tried to add a new duck!');

    const name = document.getElementById('name');
    const imgUrl = document.getElementById('img-url');
    const quote = document.getElementById('quote');
    const res = await fetch('https://duckpond-89zn.onrender.com/ducks/', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
            name: name.value,
            imgUrl: imgUrl.value,
            quote: quote.value,
        }),
    });
    const data = await res.json();
    renderDuck(data);
    addForm.reset();
});
