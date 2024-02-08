const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login-form');

const validateInput = ({ target }) => { //pegando o target(o que tem dentro dentro do input)
  if (target.value.length > 2) {//target(o que tem dentro do input).valor do target. tamanho maior que 2.
    button.removeAttribute('disabled');//Vai remove o atrribute desativado. 
    return;
  }
    
  button.setAttribute('disabled', '');//se o tamanho digitado for menor que 2, ai ficar desativado o button.
}

const handleSubmit = (event) => {
  event.preventDefault();

  localStorage.setItem('player', input.value);//Onde vai salva o nome.
  window.location = 'pages/game.html';//redirecionamento da pagina quando clicar no botão

}

input.addEventListener('input', validateInput);//pegando o evento de digitar o nome.
form.addEventListener('submit', handleSubmit);//pegando o evento de clicar no button.


