"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GsmMessage_1 = require("./GsmMessage");
const m = `©®_A expressão Lorem ipsum em design gráfico
e editoração é um texto padrão em latim utilizado na produção
gráfica para preencher os espaços de texto em {}
ªµºÀÁÂÃÈÊËÌÍÎÏÐÒÓÔÕÙÚÛÝÞáâãçêëíîïðóôõúûýþÿąĄćĆęĘłŁńŃśŚźŹżŻ`;
const { encoding, segmentsCount, parsedMessage: message, numberOfCharacters, messageSize, } = new GsmMessage_1.GsmMessage(m);
console.log({
    encoding,
    segmentsCount,
    message,
    numberOfCharacters,
    messageSize,
});
