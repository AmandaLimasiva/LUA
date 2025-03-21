import { phase } from "https://cdn.skypack.dev/lune";

function verificaAFase(date) {
  const lua = phase(date);
  const fase = lua.phase;
  let nomeFase = "Fase desconhecida";
  let imagem = "";

  if (fase >= 0 && fase < 0.125) {
    nomeFase = "Lua Nova";
    imagem = "./imgs/nova.jpg";
  } else if (fase >= 0.125 && fase < 0.5) {
    nomeFase = "Lua Crescente";
    imagem = "./imgs/crescente.jpg";
  } else if (fase >= 0.5 && fase < 0.875) {
    nomeFase = "Lua Cheia";
    imagem = "./imgs/cheia.jpg";
  } else if (fase >= 0.875 && fase < 1) {
    nomeFase = "Lua Minguante";
    imagem = "./imgs/nova.jpg";
  }

  return { nomeFase, imagem }; // Retorna um objeto contendo a fase e a imagem
}

function obterDataHoraBrasilia() {
  const agora = new Date();
  const opcoes = {
    timeZone: 'America/Sao_Paulo',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  const formatador = new Intl.DateTimeFormat('pt-BR', opcoes);
  return formatador.format(agora);
}

//EXIBE
function atualizarExibicao() {
  const data = new Date();
  const resultado = verificaAFase(data); // Agora resultado é um objeto
  const nomeFase = resultado.nomeFase; // Pega apenas o nome da fase
  const imagem = resultado.imagem; // Pega a imagem correspondente
  const dataHora = obterDataHoraBrasilia();

  document.getElementById("faseLua").textContent = `Fase da Lua: ${nomeFase}`;
  document.getElementById("dataHora").textContent = `Data e Hora em Brasília: ${dataHora}`;
  document.getElementById("imgLua").src = imagem;
}

document.addEventListener("DOMContentLoaded", () => {
  atualizarExibicao();
  setInterval(atualizarExibicao, 60000);
});
