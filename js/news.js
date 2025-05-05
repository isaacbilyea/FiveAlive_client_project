import { burgerMenu } from "./modules/burger-menu.js";
import { getAllArticles } from "./api/all-articles.js";
import { gsapSections } from "./modules/gsap-sections.js";
import { backToTop } from "./modules/back-to-top.js";

burgerMenu();
getAllArticles();
gsapSections();
backToTop();