## CURSO GRATUITO JAVASCRIPT

Curso online totalmente GRATUITO para você dominar o JavaScript, a linguagem de programação mais popular e uma das mais modernas, responsável por grandes tecnologias como ReactJS, VueJS, Angular, NodeJS e React Native.

### SOBRE O CURSO

Neste curso você irá aprender desde os primeiros conceitos em JavaScript como variáveis, condicionais e funções, até conceitos mais avançados como JavaScript assíncrono.
Esse é um curso para você descobrir na prática como o JavaScript funciona e dar os primeiros passos na linguagem. E o melhor, na direção certa.
Durante o curso nós iremos construir juntos uma aplicação web com JavaScript puro e HTML, aplicando os conceitos apresentados nas aulas para assimilar da melhor forma as features dessa linguagem.
Você terá ainda uma lista de exercícios para colocar seus conhecimentos à prova e ser desafiado. E assim você poderá garantir que teve o melhor aproveitamento de todo o conteúdo.

### O QUE É JAVASCRIPT

Se você trabalha com desenvolvimento web, conhecer JavaScript não é opcional. Essa é a linguagem de programação que roda em 100% dos navegadores, e por isso está presente em praticamente todos os projetos online.
Com JavaScript você é capaz de controlar todo o comportamento da sua aplicação no navegador, levando a experiência do usuário para outro nível e deixando sua interface totalmente dinâmica.
Além de ser essencial no desenvolvimento web, o JavaScript vem sendo muito utilizado em desenvolvimento mobile, tanto através de ferramentas híbridas como Ionic quanto tecnologias mais modernas como React Native.
Com React Native é possível inclusive desenvolver apps nativos para iOS e Android e manipular todos os recursos do smartphone como GPS, câmera, arquivos, contatos, diretamente com JavaScript.
E por tudo isso o JavaScript hoje é a linguagem de programação mais utilizada e que possui a maior comunidade, além de ser uma das mais modernas e que vem evoluindo mais rápido, sendo aplicada desde robótica até big data.


Por [Rocketseat](https://rocketseat.com.br/starter/curso-gratuito-javascript)

--- 

## Anotações realizadas durante o curso


### Manipulando o DOM

`document.querySelector` ou `document.querySelectorAll`.

### Método Splice

Remove uma quantidade de elementos de um vetor a partir de uma determinada posição. Exemplo:

`var_array.splice(pos, 1);`

### Local Storage

Armazenamento local simples baseado em chave e valor:
`localStorage.setItem('key','value');`
*Obs.: localStorage é uma variável global do JavaScript*

### Conversões JSON

- Vetor em JSON: `json = JSON.stringify(vetor);`
- JSON em vetor: `vetor = JSON.parse(json);`

### AJAX em JavaScript puro

```
var xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.send(null);

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    console.log(xhr.responseText);
  }
}
```

### Usando Promises

Promises é um conceito de JavaScript onde suas funções não influenciam na linha do tempo do seu código, ou seja, eles retornam valor depois de um tempo sem influenciar na execução. Sendo assim, é interessante colocar o código anterior (AJAX) dentro de um promise desta forma:

```
var minhaPromise = function() {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send(null);
    
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.stats === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject('Erro');
        }
      }
    }
  });
}

minhaPromise()
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.warn(error);
  });
```

### Axios

Uma biblioteca para fazer requisições assíncrona no JavaScript.
github.com/axios/axios

Adicione a biblioteca no seu HTML via CDN e no seu código JavaScript anterior, altere todo ele para:

```
axios.get(url)
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.warn(error);
  });
```
