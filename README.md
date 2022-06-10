<div align="center">
  <img width="180" src="public/images/logo.svg" alt="Logo">
  <h1>Adote um Pet</h1>
</div>
<p align="center">
  <a href="LICENSE"><img alt="licence" src="https://img.shields.io/github/license/ShadowsS01/Adopt-a-Pet-Frontend?color=%23AE0FEA"></a>
  <img src="https://img.shields.io/github/languages/top/ShadowsS01/Adopt-a-Pet-Frontend?color=%23AE0FEA" alt="Main project language">
</p>
<br/>

## Sobre

> Um projeto de adoção de animais. Desenvolvido junto ao Workshop [Multi-Stack 3](https://lp.treinaweb.com.br/multi-stack/aula1) da [TreinaWeb](https://www.treinaweb.com.br/).
>
> Este projeto é um multi-repo. Este repositório contem o Frontend do projeto e no repositório [Adopt-a-Pet-Backend-Python](https://github.com/ShadowsS01/Adopt-a-Pet-Backend-Python) contem o Backend, feito em [Python](https://www.python.org/) e [Django](https://www.djangoproject.com/).

## Tecnologias utilizadas

- [React.js](https://reactjs.org/)
- [Next.js](https://github.com/vercel/next.js)
- [Material UI](https://mui.com/)
- [Axios](https://axios-http.com/)

## Demo

[https://adopt-a-pet-frontend.vercel.app/](https://adopt-a-pet-frontend.vercel.app/)

## Como executar o projeto

Para executar o projeto você precisa ter o [Node.js](https://nodejs.dev) e o [Git](https://git-scm.com) instalados na sua maquina. Você também precisará de um editor de código, eu utilizei o [VSCode](https://code.visualstudio.com).

NOTA! Para conseguir executar o Frontend será necessário ter o backend rodando, então se você não tem o backend, entre neste repo [Adopt-a-Pet-Backend-Python](https://github.com/ShadowsS01/Adopt-a-Pet-Backend-Python) e execute o backend. Só seguir o [README](https://github.com/ShadowsS01/Adopt-a-Pet-Backend-Python#readme)!

### 1. Clone esse repositório

```bash
git clone https://github.com/ShadowsS01/Adopt-a-Pet-Frontend.git
```

### 2. Acesse a pasta do projeto

```bash
cd Adopt-a-Pet-Frontend
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configurar variáveis de ambiente

Copie o arquivo `.env.local.example` neste diretório para `.env.local` (que será ignorado pelo Git):

```bash
cp .env.local.example .env.local
```

- Se der errado o `cp` crie o arquivo `.env.local` nesta pasta.

Em seguida, defina a variável em `.env.local` com a URL do seu Backend:

```text
NEXT_PUBLIC_API_URL=urlDoBackend/api
```

### 5. Execute a aplicação em modo de desenvolvimento

```bash
npm run dev
```

## Faça o seu próprio Deploy

NOTA! Para o deploy do Front funcionar é preciso que o Backend também tenha seu deploy, pois precisará de sua url.

Depois de ter acesso às [variáveis de ambiente necessárias](#4-configurar-variáveis-de-ambiente), implante o exemplo usando o [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FShadowsS01%2FAdopt-a-Pet-Frontend&env=NEXT_PUBLIC_API_URL&envDescription=Necess%C3%A1rio%20para%20conectar%20com%20o%20Backend&envLink=https%3A%2F%2Fgithub.com%2FShadowsS01%2FAdopt-a-Pet-frontend%234-configurar-vari%25C3%25A1veis-de-ambiente&project-name=adopt-a-pet-frontend&repository-name=adopt-a-pet-frontend)

## Licença

Este projeto esta sobe a licença [MIT](/LICENSE).
