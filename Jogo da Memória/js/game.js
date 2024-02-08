const grid = document.querySelector('.grid');// buscando a div com a class grid.

const caracters = [
  'gojo',
  'goku',
  'itachi',
  'kakashi',
  'luffy',
  'nami',
  'naruto',
  'pika',
  'sasuke',
  'um',
  'vegeta',
  'zoro',
];

const createElement = (tag, className) => {// função que cria o elemento
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

const revealCard = ({ target }) => {

}

const createCard = (caracter) => {
  const card = createElement('div', 'card');//criando a div card com a class.
  const front = createElement('div', 'face front');;//criando a div front com a class.
  const back = createElement('div', 'face back');;//criando a div back com a class.

  front.style.backgroundImage = `url('../img/${caracter}.png')`;

  card.appendChild(front);//colocando como filha(dentro) da div card.
  card.appendChild(back);//colocando como filha(dentro) da div card.

  card.addEventListener('click', revealCard);

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

loadGame();