import initScrollSuave from "./modules/scroll-suave.js";
import initAnimacaoScroll from "./modules/animacao-scroll.js";
import initAccordion from "./modules/accordion.js";
import initTabNav from "./modules/tabNav.js"

initScrollSuave();
initAnimacaoScroll();
initAccordion();
initTabNav();

// modules são divisão de código em diferentes arquivos, que facilita a manutenção; compartilhamento facilitado. Algumas das ferramentas Grunt, Gulp, Webpack e outros


//Características:
//Strict modo, 'use strict' por padrão em todos os arquivos
//Variáveis ficam no module apenas, não vazam para o escopo global
//This fora de um objeto faz referência a undefined, ao invés de fazer referência ao window
//Assíncrono

