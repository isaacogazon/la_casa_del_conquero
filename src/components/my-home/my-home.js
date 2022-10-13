/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from '@polymer/lit-element';
import { PageViewElement } from '../page-view-element/page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from '../shared-styles/shared-styles.js';

class MyHome extends PageViewElement {
  _render(props) {
    return html`
      ${SharedStyles}
      <style>
        section {
          margin: 20px auto;
          max-width: var(--max-width);
        }
        .hero-img {
          display: block;
          width: 100%;
          height: auto;
          margin: 0 auto;
        }
        .welcome-texts {
          box-sizing: border-box;
          padding: 30px 25px;
        }
        .welcome-texts  h1 {
          font-size: 32px;
          font-weight: 400;
          font-family: 'Brush Script MT', sans-serif;
          margin-bottom: 20px;
          line-height: 1.4;
        }
        .welcome-texts p {
          color: #666;
        }
        @media (min-width: 720px) {
          .hero-img {
            padding: 0 20px;
            box-sizing: border-box;
          }
          .welcome-texts {
            margin-left: auto;
            margin-right: auto;
            max-width: 1024px;
            padding: 30px 40px;
          }
          .welcome-texts p {
            column-count: 2;
            column-gap: 40px;
          }
        }        
      </style>

      <section class="hero">
        <img class="hero-img" src="images/hero-img.png"></img>
      </section>
      <section class="welcome-texts">
        <h1>Huelva es Cabezuda de Cabezos, Laberinto de Marismas, Huelva es Luz Deslumbradora.</h1>
        <p>Le presentamos el primer complejo de Huelva que por su situación paisajística y por las 
características escenográficas tanto de su edificación como de sus jardines pretende convertirse 
en un lugar referente para la celebración de todo tipo de eventos sociales y profesionales.</p>
      </section>
    `;
  }
}

window.customElements.define('my-home', MyHome);
