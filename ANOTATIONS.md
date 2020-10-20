# sms-parse

```ts
import {MessageParser} from 'sms-parse';

const messageParser = new MessageParser('GSM-7');

const message = `A expressão Lorem ipsum em design gráfico
e editoração é um texto padrão em latim utilizado na produção
gráfica para preencher os espaços de texto em {}
ªµºÀÁÂÃÈÊËÌÍÎÏÐÒÓÔÕÙÚÛÝÞáâãçêëíîïðóôõúûýþÿąĄćĆęĘłŁńŃśŚźŹżŻ`;

console.log(messageParser.parseNonGsmChars(message));

output: `A expressao Lorem ipsum em design grafico
e editoracao é um texto padrao em latim utilizado na producao
grafica para preencher os espacos de texto em
uoAAAAEEEIIIIDOOOOUUUYTHaaaceeiiidooouuythyaAcCeElLnNsSzZzZ`;
```
