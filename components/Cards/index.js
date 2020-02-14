// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response);
        let javascript = response.data.articles.javascript;
        let bootstrap = response.data.articles.bootstrap;
        let technology = response.data.articles.technology;
        let jquery = response.data.articles.jquery;
        let node = response.data.articles.node;

        javascript.forEach((obj) => {
            const cards = article(obj);
            cardsContainer.appendChild(cards);
        });
        bootstrap.forEach((obj) => {
            const cards = article(obj);
            cardsContainer.appendChild(cards);
        });
        jquery.forEach((obj) => {
            const cards = article(obj);
            cardsContainer.appendChild(cards);
        });
        node.forEach((obj) => {
            const cards = article(obj);
            cardsContainer.appendChild(cards);
        });
        technology.forEach((obj) => {
            const cards = article(obj);
            cardsContainer.appendChild(cards);
        });
    })

    .catch(error => {
        console.log("Data Not Returned on Cards", error);
    })


function article(obj) {

    //create elements
    let card = document.createElement('div');
    let headLine = document.createElement('div');
    let author = document.createElement('div');
    let imgContainer = document.createElement('div');
    let img = document.createElement('img');
    let authorName = document.createElement('span');

    //add classes
    card.classList.add('card');
    headLine.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    //add attributes
    headLine.textContent = obj.headline;//for now ---replace
    img.src = obj.authorPhoto; //for now ---replace
    authorName.textContent = `By ${obj.authorName}`; //for now ---replace

    //append
    card.appendChild(headLine);
    card.appendChild(author);
    author.appendChild(imgContainer);
    author.appendChild(authorName);
    imgContainer.appendChild(img);

    return card;

}

let cardsContainer = document.querySelector('.cards-container');