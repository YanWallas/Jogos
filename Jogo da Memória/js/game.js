const grid = document.querySelector('.grid');// buscando a div com a class grid.
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const caracters = [
  'gojo',
  'goku',
  'itachi',
  'kakashi',
  'luffy',
  'nami',
  'naruto',
  'sasuke',
  'vegeta',
  'zoro',
];

const createElement = (tag, className) => {// função que cria o elemento
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
  const disabledCards = document.querySelectorAll('.disabled-card');

  if(disabledCards.length == 20) {
    clearInterval(this.loop);
    alert(`Parabens, ${spanPlayer.innerHTML}! Seu tempo foi:${timer.innerHTML}`);
  }
}

const checkCards = () => {
  const firstCaracter = firstCard.getAttribute('data-caracter');
  const secondCaracter = secondCard.getAttribute('data-caracter');

  if (firstCaracter == secondCaracter) {
    firstCard.firstChild.classList.add('disabled-card');
    secondCard.firstChild.classList.add('disabled-card');

    firstCard = '';
    secondCard = '';

    checkEndGame();

  } else {
    setTimeout(() => {
      firstCard.classList.remove('reveal-card');
      secondCard.classList.remove('reveal-card');

      firstCard = '';
      secondCard = '';
    }, 500);
  }
}

const revealCard = ({ target }) => {
  if(target.parentNode.className.includes('reveal-card')) {
    return;
  };

  if(firstCard == '') {//Verificando se a primeira carta esta vazia(se é a primeira mesma)
    target.parentNode.classList.add('reveal-card');
    firstCard = target.parentNode;
  } else if(secondCard == '') {//verificando se a segunda carta esta vazia.
    target.parentNode.classList.add('reveal-card');
    secondCard = target.parentNode;

    checkCards();
  }

  target.parentNode.classList.add('reveal-card');
}

const createCard = (caracter) => {
  const card = createElement('div', 'card');//criando a div card com a class.
  const front = createElement('div', 'face front');;//criando a div front com a class.
  const back = createElement('div', 'face back');;//criando a div back com a class.

  front.style.backgroundImage = `url('../img/${caracter}.png')`;

  card.appendChild(front);//colocando como filha(dentro) da div card.
  card.appendChild(back);//colocando como filha(dentro) da div card.

  card.addEventListener('click', revealCard);
  card.setAttribute('data-caracter', caracter);
  return card;
}

const loadGame = () => {
  const duplicateCaracters = [ ...caracters, ...caracters ];

  const shuffleArray = duplicateCaracters.sort(() => Math.random() - 0.5 );

  shuffleArray.forEach((caracter) => {
    const card = createCard(caracter);
    grid.appendChild(card);
  });
}

const startTimer = ( ) => {

  this.loop = setInterval(() => {
    const currentTime = +timer.innerHTML;// O + antes da letra, transforma em Number.
    timer.innerHTML = currentTime + 1;
  }, 1000);
}

window.onload = () => {
  spanPlayer.innerHTML = localStorage.getItem('player');
  startTimer();
  loadGame();
}
