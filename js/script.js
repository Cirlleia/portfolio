// Alternar tema claro/escuro
function alternarTema() {
  document.body.classList.toggle("modo-escuro");
}

// Mostrar apenas a seção clicada
function mostrar(idSecao) {
  const secoes = document.querySelectorAll('main section');
  secoes.forEach(secao => secao.classList.remove('visivel'));

  const secaoAtiva = document.getElementById(idSecao);
  if (secaoAtiva) {
    secaoAtiva.classList.add('visivel');
  }
}

// Enviar formulário com alerta
function enviarMensagem(event) {
  event.preventDefault();
  alert("Mensagem enviada! Obrigada pelo contato 😊");
  event.target.reset();
}



  
  