import { phase } from 'lune';

function verificaAFase(date) {
  const opcoes = { timeZone: 'America/Sao_Paulo' };
  const dataBrasilia = new Date(date.toLocaleString('en-US', opcoes));
  const lua = phase(dataBrasilia);
  const fase = lua.phase;
  console.log(fase);

  if (fase >= 0 && fase < 0.125) {
    return "Lua Nova";
} else if (fase >= 0.125 && fase < 0.500) {
    return "Lua Crescente";
} else if (fase >= 0.500 && fase <= 1) {
    return "Lua Cheia";
} else if (fase > 0.75) {
    return "Lua Minguante";
    }
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

const data = new Date();
console.log(`Data e Hora em Brasília: ${obterDataHoraBrasilia()}`);
console.log(`Fase da Lua: ${verificaAFase(data)}`);