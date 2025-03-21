import { phase } from "https://cdn.skypack.dev/lune";

function verificaAFase(date) {
  const lua = phase(date);
  const fase = lua.phase;

  if (fase >= 0 && fase < 0.125) {
    return "Lua Nova";
  } else if (fase >= 0.125 && fase < 0.5) {
    return "Lua Crescente";
  } else if (fase >= 0.5 && fase < 0.875) {
    return "Lua Cheia";
  } else if (fase >= 0.875 && fase < 1) {
    return "Lua Minguante";
  }
  return "Fase desconhecida";
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

function atualizarExibicao() {
  const data = new Date();
  const fase = verificaAFase(data);
  const dataHora = obterDataHoraBrasilia();

  document.getElementById("faseLua").textContent = `Fase da Lua: ${fase}`;
  document.getElementById("dataHora").textContent = `Data e Hora em Brasília: ${dataHora}`;
}

document.addEventListener("DOMContentLoaded", () => {
  atualizarExibicao();
  setInterval(atualizarExibicao, 60000);
});
