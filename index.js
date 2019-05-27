import Colcade from 'colcade'
import LazyLoad from "vanilla-lazyload";
import mediumZoom from 'medium-zoom'
import AOS from 'aos';
import 'aos/dist/aos.css';

var col = new Colcade('.grid', {
    columns: '.grid-col',
    items: '.grid-item'
});

AOS.init();

mediumZoom('[data-zoomable]', {
    margin: 24,
    background: 'hsl(0, 0%, 96%)',
    scrollOffset: 40,
})

function logEvent(msg) {
    console.log(msg)
}

const lazyLoadOptions = {
    elements_selector: ".lazy",

    callback_error: element => {
        logEvent("ERROR", element);
        element.src = "https://placehold.it/220x280?text=Placeholder";
    }
};
const pageLazyLoad = new LazyLoad(lazyLoadOptions);