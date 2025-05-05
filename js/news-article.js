import { burgerMenu } from "./modules/burger-menu.js";
import { getNewsArticle } from './api/news-article.js';
import { gsapSections } from "./modules/gsap-sections.js";
import { backToTop } from "./modules/back-to-top.js";

burgerMenu();
getNewsArticle();
gsapSections();
backToTop();