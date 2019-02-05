const nop = () => {};

let cssTx = nop;

if (typeof window !== 'undefined') {
  cssTx = (el, t) => requestAnimationFrame(() =>{
    el.style.webkitTransform = t;
    el.style.MozTransform = t;
    el.style.msTransform = t;
    el.style.transform = t;
  });
}

export default cssTx;
