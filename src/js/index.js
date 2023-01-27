const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const botaoFecharModalPersonagens = document.querySelector(
  ".fechar-modal-personagens"
);
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;
const container = document.querySelector(".container");
const containerDetalhes = document.querySelector(".container-detalhes");
const fundoVideo = document.querySelector(".fundo-video");
const btnDetalhes = document.querySelector("#detalhes");
const btnHome = document.querySelector("#home");
const cards = document.querySelectorAll(".models li .card");
const modalPersonagens = document.querySelector(".modal-personagens");
const links = document.querySelectorAll(".menu .navlist");

personagensJson.map((personagem, index) => {
  let personagemItem = document.querySelector(".models li").cloneNode(true);
  personagemItem.setAttribute("data-key", index);
  personagemItem.querySelector(".card-button").innerHTML = personagem.nome;
  personagemItem.querySelector(".card .card-img").src = personagem.img;
  personagemItem.querySelector(".card").addEventListener("click", (e) => {
    e.preventDefault();
    let key = e.target.closest("li").getAttribute("data-key");
    document.querySelector(".left-side img").src = personagensJson[key].img;
    document.querySelector(".right-side p").innerHTML =
      personagensJson[key].descricao;
    alternarModalPersonagens();
  });
  document.querySelector(".container-cards").append(personagemItem);
});

function alternarModal() {
  modal.classList.toggle("aberto");
}

function alternarModalPersonagens() {
  modalPersonagens.classList.toggle("aberto");
}

function activeLink() {
  links.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}

botaoTrailer.addEventListener("click", () => {
  alternarModal();
  video.setAttribute("src", linkDoVideo);
});

links.forEach((link) => {
  link.addEventListener("click", activeLink);
});

botaoFecharModal.addEventListener("click", () => {
  alternarModal();
  video.setAttribute("src", "");
});

botaoFecharModalPersonagens.addEventListener("click", () => {
  alternarModalPersonagens();
});

btnDetalhes.addEventListener("click", () => {
  container.classList.add("hidden");
  fundoVideo.classList.add("hidden");
  containerDetalhes.classList.remove("hidden");
});

btnHome.addEventListener("click", () => {
  container.classList.remove("hidden");
  fundoVideo.classList.remove("hidden");
  containerDetalhes.classList.add("hidden");
});
