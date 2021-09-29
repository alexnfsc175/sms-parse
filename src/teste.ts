import {GsmMessage} from './GsmMessage';

const m = `©®_A expressão Lorem ipsum em design gráfico
e editoração é um texto padrão em latim utilizado na produção
gráfica para preencher os espaços de texto em {}
ªµºÀÁÂÃÈÊËÌÍÎÏÐÒÓÔÕÙÚÛÝÞáâãçêëíîïðóôõúûýþÿąĄćĆęĘłŁńŃśŚźŹżŻ`;

const {
  encoding,
  segmentsCount,
  parsedMessage: message,
  numberOfCharacters,
  messageSize,
} = new GsmMessage(m);

console.log({
  encoding,
  segmentsCount,
  message,
  numberOfCharacters,
  messageSize,
});
