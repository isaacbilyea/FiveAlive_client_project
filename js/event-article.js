import { burgerMenu } from "./modules/burger-menu.js";
import { getEventArticle } from './api/event-article.js';
import { gsapSections } from "./modules/gsap-sections.js";
import { backToTop } from "./modules/back-to-top.js";

burgerMenu();
getEventArticle();
gsapSections();
backToTop();