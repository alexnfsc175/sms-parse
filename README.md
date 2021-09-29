# sms-parse

```sh
npm i sms-parse --save
```

```ts
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

output: {
  encoding: 'GSM-7',
  segmentsCount: 2,
  message: '(c)(r)_A expressao Lorem ipsum em design grafico\n' +
    'e editoracao é um texto padrao em latim utilizado na producao\n' +
    'grafica para preencher os espacos de texto em \u001b(\u001b)\n' +
    'auoAAAAEEEIIIIDOOOOUUUYTHaaaceeiiidooouuythyaAcCeElLnNsSzZzZ',
  numberOfCharacters: 214,
  messageSize: 1554
}
```
