// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
const quotes = [
  {
    quote: "Don't cry because it's over, smile because it happened.",
    source: "Dr. Seuss"
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    source: "Oscar Wilde"
  },
  {
    quote: "Be the change that you wish to see in the world.",
    source: "Mahatma Gandhi"
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    source: "Mark Twain"
  },
  {
    quote: "A friend is someone who knows all about you and still loves you",
    source: "Elbert Hubbard"
  },
  {
    quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    source: "Mahatma Gandhi"
  },
  {
    quote: "Insanity is doing the same thing, over and over again, but expecting different results.",
    source: "Narcotics Anonymous"
  },
  {
    quote: "It is better to be hated for what you are than to be loved for what you are not.",
    source: "André Gide, Autumn Leaves "
  }
];


// arrow function sintax with one argument and one line of code
const getRandomQuote = quotes =>  quotes[Math.floor(Math.random() * quotes.length)];
const randomColor = () => Math.floor(Math.random() * 256);

// arrow function sintax, will return a random Color
const changeColor = () => {
  const rgb = 'rgb(' + randomColor() + ',' + randomColor() + ',' + randomColor() + ')';
  return document.getElementById('body').style.backgroundColor = rgb
}

// function to change content inside html element
const printQuote = () => {
    const sources = getRandomQuote(quotes);
    const pQuote = document.querySelector('.quote');
    const pSource = document.querySelector('.source');
    pQuote.textContent = sources.quote;
    pSource.textContent = sources.source;
}
//on click will change color, and change quote
document.getElementById('lQuote').addEventListener("click", changeColor);
document.getElementById('lQuote').addEventListener("click", printQuote);
