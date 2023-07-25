import './styles/style.css';
import javascriptLogo from './assets/javascript.svg';
import fwdpLogo from '/fwdp-stacked-tr.png';
import fwdpSvg from '/fwdp.svg';
import { setupCounter } from './components/counter.js';

// From public folder
import viteLogo from '/vite.svg';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" /> 
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <a href="https://github.com/FWDP/" target="_blank">
      <img src="${fwdpLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Filipino Web Dev Peers!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the logos to learn more!
    </p>
    <div class="footnote">
      <p>
        Made with 💓 , Visit us at
      </p>
      <a href="https://www.facebook.com/fwdpeers"> 
        <img src="${fwdpSvg}" class="logo fwdpLogo" alt="FWDP logo" /> 
      </a>
    </div>
  </div>
`;

setupCounter(document.querySelector('#counter'));
