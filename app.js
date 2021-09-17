const nomeBusca = document.querySelector(".input");
const mensamErro = document.querySelector("#mesangemErro");
const botaoBuscar = document.querySelector("#botao_buscar");
const titulo = document.querySelector("#titulo");
const ano = document.querySelector("#ano");
const duracao = document.querySelector("#duracao");
const genero = document.querySelector("#genero");
const diretor = document.querySelector("#diretor");
const atores = document.querySelector("#atores");
const poster = document.querySelector(".poster");
const sinopse = document.querySelector("#sinopse");
const apiKey = "a2584fb8";
const imgDefault = "assets/default_image.png";

async function buscaFilme(nomeBusca){
     const resposta = await fetch(`http://www.omdbapi.com/?t=${nomeBusca}&apikey=a2584fb8`);
     return resposta.json();
};

botaoBuscar.addEventListener("click",()=>{
     limparCampos();
     core();
});

async function core(){
     try{
          const filme = await buscaFilme(nomeBusca.value);
          validaDados(filme);
          defineValores(filme);
      }catch(err){
          console.log(err);
          mensamErro.textContent =`${err}`;
     }
     
};

function defineValores(filme){
     titulo.textContent = filme.Title;
     sinopse.textContent = filme.Plot;
     ano.textContent = `Year:${filme.Year}`;
     duracao.textContent = `Run time: ${filme.Runtime}`;
     poster.setAttribute("src", filme.Poster);
};

function limparCampos(){
     titulo.textContent = "";
     sinopse.textContent = "";
     ano.textContent = "";
     duracao.textContent = "";
     poster.setAttribute("src", imgDefault);
};

function validaDados(filme){
     if(filme.Plot === undefined || filme.Year === undefined || filme.Actors === "N/A"){
          throw new Error("Filme não encontrado!")
     }
};

