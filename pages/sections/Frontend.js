import Image from 'next/image';
import HTMLIcon from '../../public/images/html5-icon.svg';
import CSSIcon from '../../public//images/css3-icon.svg';
import JSIcon from '../../public//images/javascript-icon.svg';
import BootstrapIcon from '../../public/images/bootstrap-icon.svg';
import TailwindIcon from '../../public/images/tailwindcss-icon.svg';
import ReactIcon from '../../public/images/reactjs-icon.svg';

const FrontEnd = () => {
  return (
    <section id="frontend">
      <h1 class="section-title">FRONT END DEVELOPMENT</h1>
      <div class="card-container">
        {/* HTML */}
        <div class="card-item">
          <div class="card-image">
            <Image src={HTMLIcon} height={80} width={80} alt="HTML 5 Icon" />
          </div>
          <div class="card-description">
            <ul>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                  target="_blank"
                  class="card-link">
                  MDN Web HTML
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a
                  href="https://www.w3schools.com/html/default.asp"
                  target="_blank"
                  class="card-link">
                  W3School HTML
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* CSS */}
        <div class="card-item">
          <div class="card-image">
            <Image src={CSSIcon} height={80} width={80} alt="HTML 5 Icon" />
          </div>
          <div class="card-description">
            <ul>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                  target="_blank"
                  class="card-link">
                  MDN Web CSS
                </a>
              </li>
              <li>
                <a href="https://cssreference.io/" target="_blank" class="card-link">
                  CSS Reference
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a
                  href="https://www.w3schools.com/css/default.asp"
                  target="_blank"
                  class="card-link">
                  W3School CSS
                </a>
              </li>
              <li>
                <a href="https://css-tricks.com/" target="_blank" class="card-link">
                  CSS Tricks
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Javascript */}
        <div class="card-item">
          <div class="card-image">
            <Image src={JSIcon} height={80} width={80} alt="HTML 5 Icon" />
          </div>
          <div class="card-description">
            <ul>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  class="card-link">
                  MDN Web Javascript
                </a>
              </li>
              <li>
                <a href="https://eloquentjavascript.net/" target="_blank" class="card-link">
                  Eloquent Javascript
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a
                  href="https://www.w3schools.com/js/default.asp"
                  target="_blank"
                  class="card-link">
                  W3School Javascript
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/rwaldron/idiomatic.js"
                  target="_blank"
                  class="card-link">
                  Idiomatic Javascript
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bootstrap */}
        <div class="card-item">
          <div class="card-image">
            <Image src={BootstrapIcon} height={80} width={80} alt="HTML 5 Icon" />
          </div>
          <div class="card-description">
            <ul>
              <li>
                <a
                  href="https://getbootstrap.com/docs/5.2/getting-started/introduction/"
                  target="_blank"
                  class="card-link">
                  Bootstrap 5.2
                </a>
              </li>
              <li>
                <a href="https://bootsnipp.com/" target="_blank" class="card-link">
                  Bootsnipp Template
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a
                  href="https://hackerthemes.com/bootstrap-tools/"
                  target="_blank"
                  class="card-link">
                  Bootstrap Tools
                </a>
              </li>
              <li>
                <a
                  href="https://bootstrap-cheatsheet.themeselection.com/"
                  target="_blank"
                  class="card-link">
                  Bootstrap 5 Cheatsheet
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Tailwind CSS */}
        <div class="card-item">
          <div class="card-image">
            <Image src={TailwindIcon} height={80} width={80} alt="HTML 5 Icon" />
          </div>
          <div class="card-description">
            <ul>
              <li>
                <a href="https://tailwindcss.com/" target="_blank" class="card-link">
                  Tailwind CSS
                </a>
              </li>
              <li>
                <a href="https://www.tailwindtoolbox.com/tools" target="_blank" class="card-link">
                  Tailwind Toolbox
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="https://postsrc.com/components" target="_blank" class="card-link">
                  Tailwind Components
                </a>
              </li>
              <li>
                <a href="https://bestoftailwind.com/t/tools" target="_blank" class="card-link">
                  Tailwind Tools
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* React JS */}
        <div class="card-item">
          <div class="card-image">
            <Image src={ReactIcon} height={80} width={80} alt="HTML 5 Icon" />
          </div>
          <div class="card-description">
            <ul>
              <li>
                <a
                  href="https://reactjs.org/docs/getting-started.html"
                  target="_blank"
                  class="card-link">
                  React JS
                </a>
              </li>
              <li>
                <a
                  href="https://mui.com/material-ui/getting-started/overview/"
                  target="_blank"
                  class="card-link">
                  Material UI
                </a>
              </li>
              <li>
                <a href="https://chakra-ui.com/getting-started" target="_blank" class="card-link">
                  Chakra UI
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a
                  href="https://redux.js.org/introduction/getting-started"
                  target="_blank"
                  class="card-link">
                  Redux
                </a>
              </li>
              <li>
                <a href="https://reactrouter.com/docs/en/v6" target="_blank" class="card-link">
                  React Router
                </a>
              </li>
              <li>
                <a href="https://devhints.io/react" target="_blank" class="card-link">
                  ReactJS Cheatsheet
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrontEnd;