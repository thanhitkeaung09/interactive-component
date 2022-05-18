import './style.scss'
import 'bootstrap'
import ScrollReveal from "scrollreveal";

var slideUp = {
    distance: '70px',
    origin: 'bottom',
    duration:1000,
    interval:500
};

ScrollReveal().reveal('.content', slideUp);