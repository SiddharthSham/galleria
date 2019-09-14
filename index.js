import Colcade from 'colcade'
import LazyLoad from "vanilla-lazyload";
import mediumZoom from 'medium-zoom'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

mediumZoom('[data-zoomable]', {
    margin: 24,
    background: 'hsl(0, 0%, 96%)',
    scrollOffset: 40,
})

const pageLazyLoad = new LazyLoad({ elements_selector: ".lazy",});

fetch('https://api.quotable.io/random')
  .then(res => res.json())
  .then((json) => {
      console.log(json.content)
      console.log("Quote by: " + json.author)
  })
  .catch(err => console.log(err))