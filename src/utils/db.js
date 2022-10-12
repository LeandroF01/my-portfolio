import github from "./img/icon/github-svgrepo-com.svg";
import netly from "./img/icon/netlify.svg";
import react from "./img/icon/react-svgrepo-com.svg";
import javaScript from "./img/icon/js-svgrepo-com.svg";
import html from "./img/icon/html-5.svg";
import css from "./img/icon/css-3.svg";

import pokedex from "./img/pokedex-pokemon.png";
import eCommerce from "./img/e-commerce.png";
import crudForm from "./img/crud-form.png";
import eEcomerce from "./img/ecommerce-nike.png";
import phraseCard from "./img/phrase-card.png";
import portfolio from "./img/portfolio1.png";
import rickAndaMorty from "./img/ricck-and-morty.png";
import weather from "./img/weather-app.png";
import tableCoin from "./img/tablee-coin.png";

export const results = [
  {
    id: 1,
    title: "pokedex",
    img: pokedex,
    description:
      "Data fetching with good practices. Router for nested, protected and redirect routes, in conjunction with Redux, to initialize in practice. Optimization of the app and distribution of tasks, so as not to overload the components. Search logic, filtering by types, quantity and pagination.",
    tecnologies: [
      ["React", react],
      ["JavaScript", javaScript],
      ["CSS", css],
      ["HTML", html],
    ],
    links: [
      {
        github: {
          url: "https://github.com/LeandroF01/pokedex",
          icon: github,
        },
      },
      {
        demo: {
          url: "https://pokedex-pokex.netlify.app",
          icon: netly,
        },
      },
    ],
  },
  {
    id: 2,
    title: "e-commerce",
    img: eCommerce,
    description:
      "Electronic commerce with a registration and login system so that the user can access to buy, interact with their cart and history of use of Router purchases. Redux and data fetching with good practices, and also applied in the uses.",
    tecnologies: [
      ["React", react],
      ["JavaScript", javaScript],
      ["CSS", css],
      ["HTML", html],
    ],
    links: [
      {
        github: {
          url: "https://github.com/LeandroF01/e-commerce-react",
          icon: github,
        },
      },
      {
        demo: {
          url: "https://e-commerce-react-it.netlify.app",
          icon: netly,
        },
      },
    ],
  },
  {
    id: 3,
    title: "fromCrud",
    img: crudForm,
    description:
      "Hooks Form para la creación, actualización y eliminación de datos ingresados por el formulario, con sus respectivas required en cada campo, haciendo fetching de datos en una Api de Academlo.",
    tecnologies: [
      ["React", react],
      ["JavaScript", javaScript],
      ["CSS", css],
      ["HTML", html],
    ],
    links: [
      {
        github: {
          url: "https://github.com/LeandroF01/users-form",
          icon: github,
        },
      },
      {
        demo: {
          url: "https://form-users.netlify.app",
          icon: netly,
        },
      },
    ],
  },
  {
    id: 4,
    title: "rickAndaMorty",
    img: rickAndaMorty,
    description:
      "Fetching of data to lists, keys, making controlled inputs, conditional rendering and pagination.",
    tecnologies: [
      ["React", react],
      ["JavaScript", javaScript],
      ["CSS", css],
      ["HTML", html],
    ],
    links: [
      {
        github: {
          url: "https://github.com/LeandroF01/rick-and-morty",
          icon: github,
        },
      },
      {
        demo: {
          url: "https://rick-and-morty26.netlify.app",
          icon: netly,
        },
      },
    ],
  },

  {
    id: 5,
    title: "portfolio",
    img: portfolio,
    description: "First responsive portfolio with JavaScript features.",
    tecnologies: [
      ["JavaScript", javaScript],
      ["CSS", css],
      ["HTML", html],
    ],
    links: [
      {
        github: {
          url: "https://github.com/LeandroF01/NewPortafolio",
          icon: github,
        },
      },
      {
        demo: {
          url: "https://leandro-portafolio.netlify.app",
          icon: netly,
        },
      },
    ],
  },
  {
    id: 6,
    title: "weather",
    img: weather,
    description:
      "Data fetching app based on user location with conditional rendering",
    tecnologies: [
      ["React", react],
      ["JavaScript", javaScript],
      ["CSS", css],
      ["HTML", html],
    ],
    links: [
      {
        github: {
          url: "https://github.com/LeandroF01/WeatherApp",
          icon: github,
        },
      },
      {
        demo: {
          url: "https://wheater-app-temp.netlify.app",
          icon: netly,
        },
      },
    ],
  },

  {
    id: 7,
    title: "tableCoin",
    img: tableCoin,
    description: "Time quote of 100 cryptocurrencies, using the CoinGecko api.",
    tecnologies: [
      ["React", react],
      ["JavaScript", javaScript],
      ["CSS", css],
      ["HTML", html],
    ],
    links: [
      {
        github: {
          url: "https://github.com/LeandroF01/TableCoin",
          icon: github,
        },
      },
      {
        demo: {
          url: "https://table-coin.netlify.app/",
          icon: netly,
        },
      },
    ],
  },

  {
    id: 8,
    title: "phraseCard",
    img: phraseCard,
    description: "Random phrases and colors with JavaScript logic.",
    tecnologies: [
      ["React", react],
      ["JavaScript", javaScript],
      ["CSS", css],
      ["HTML", html],
    ],
    links: [
      {
        github: {
          url: "https://github.com/LeandroF01/QuoteBox",
          icon: github,
        },
      },
      {
        demo: {
          url: "https://statuesque-croquembouche-7d5b9a.netlify.app",
          icon: netly,
        },
      },
    ],
  },
  {
    id: 9,
    title: "ecommerce-nike",
    img: eEcomerce,
    description:
      "Rendering of the Dom with Vanilla Javascript and logic, with good practices and inspiration in ecommerce of nike.",
    tecnologies: [
      ["JavaScript", javaScript],
      ["CSS", css],
      ["HTML", html],
    ],
    links: [
      {
        github: {
          url: "https://github.com/LeandroF01/E-commerce",
          icon: github,
        },
      },
      {
        demo: {
          url: "https://ecommerecenikeejemplo.netlify.app",
          icon: netly,
        },
      },
    ],
  },
];
