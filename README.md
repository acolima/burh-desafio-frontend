# Livro de Receitas

## Desafio Frontend Burh

O objetivo do desafio é criar um crud sobre um tema livre, utilizando a API do <a href="https://crudcrud.com/" target="_blank">crudcrud</a>. Minha ideia foi desenvolver um livro de receitas!

## Features

- Adicionar receita
- Listar todas as receitas salvas
- Editar e deletar uma receita

## Desenvolvimento

O aplicativo foi desenvolvido utilizando:

- <strong>ReactJS</strong>, pois é o framework que possuo maior familiaridade
- <strong>SASS/SCSS</strong>, que é um pré-processador que estou aprendendo sobre recentemente e quis praticar, além de toda a facilidade que ele traz para o desenvolvimento com a criação de mixins, variáveis e classes aninhadas
- <strong>Axios</strong>, para fazer as requisições para a API
- <strong>React Hook Forms</strong>, para a criação e gerenciamento do formulário de criação de receitas

Foi aplicado também o conceito de Mobile First e layout de maneira responsiva.

## Tecnologias

<div>
  <img src='https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB' alt="React" />
  
  <img src='https://img.shields.io/badge/React_Hook_Form-20232A?style=for-the-badge&logo=react&logoColor=61DAFB' alt="React Hook Form" />

  <img src='https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white' alt="React-Router-Dom"/>

  <img src='https://img.shields.io/badge/axios%20-%2320232a.svg?&style=for-the-badge&color=informational' alt="Axios">

  <img src='https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white' alt="SASS">
</div>

## Como rodar o projeto

1. Clone esse repositório

```bash
git clone git@github.com:acolima/burh-desafio-frontend.git
```

2. Vá até a pasta do projeto

```bash
 cd burh-desafio-frontend
```

3. Instale todas as dependências

```bash
npm i
```

4. Execute o projeto com

```bash
npm run dev
```

5. Por fim, acesse http://localhost:5173 no seu navegador (o número da porta pode variar)

Obs. O endpoint disponível em <a href="https://crudcrud.com/" target="_blank">crudcrud</a> pode expirar após um tempo ou atingir o limite de requisições. Caso isso ocorra, um novo endpoint deve ser adicionado em `/src/services/api.ts`

```
const baseAPI = axios.create({
	baseURL: novo endpoint aqui,
});
```

## Autora

<p>
  <a href='https://www.burh.com.br/carolineoliveira153'>Perfil Burh</a>
</p>

<img src='https://avatars.githubusercontent.com/acolima' width='150px'/>

<p>
  <a href='https://github.com/acolima'>
    <img src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white' alt='Github' />
  </a>
  <a href='https://www.linkedin.com/in/ana-caroline-oliveira-lima-51821122b/'>
    <img src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white' alt='LinkedIn' />
  </a>
  <a href='mailto:acolima@gmail.com'>
    <img src='https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white' alt='Gmail' />
  </a>

</p>
