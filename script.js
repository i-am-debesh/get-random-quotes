
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const quotetText = document.querySelector('.quote-text');
const authorText = document.querySelector('.author');
const getQuoteBtn = document.querySelector('.get-quote-btn');
function setQuote(quote= 'hi folks') {
    quotetText.innerText = "Quote : "+quote;
}
function setAuthor(author) {
    authorText.innerText = "Author : "+author;
}

function getQuote() {
    

    fetch('quotes.json')
    .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(jsonData => {
    //console.log('Parsed JSON data:', jsonData);
    const idx = getRandomInt(0,49);
    const quote = jsonData[idx].q;
    const author = jsonData[idx].a;

    setQuote(quote);
    setAuthor(author);
    
    
  })
  .catch(error => {
    console.error('Error fetching JSON:', error);
  });


}

getQuote();

getQuoteBtn.addEventListener('click', ()=>{
    
    // getQuote();
    getQuote();
});

