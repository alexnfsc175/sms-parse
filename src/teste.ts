import {MessageParser} from './MessageParser';

const messageParser = new MessageParser('GSM-7');

const message = `A expressão Lorem ipsum em design gráfico
e editoração é um texto padrão em latim utilizado na produção
gráfica para preencher os espaços de texto em {}
ªµºÀÁÂÃÈÊËÌÍÎÏÐÒÓÔÕÙÚÛÝÞáâãçêëíîïðóôõúûýþÿąĄćĆęĘłŁńŃśŚźŹżŻ`;

console.log(messageParser.parseNonGsmChars(message));
