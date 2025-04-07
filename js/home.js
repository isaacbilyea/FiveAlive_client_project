import { burgerMenu } from "./modules/burger-menu.js";
import { donationCounter } from "./modules/donation-counter.js";
import { gsapSections } from "./modules/gsap-sections.js";
import { videoPlayer } from "./modules/video-player.js";
import { centerCards } from "./modules/center-cards.js";
import { contactForm } from "./modules/contact-form.js";
import { getLatestArticles } from "./api/latest-articles.js";
import { getLatestEvent } from "./api/latest-event.js";

burgerMenu();
donationCounter();
gsapSections();
videoPlayer();
centerCards();
contactForm();
getLatestArticles();
getLatestEvent();