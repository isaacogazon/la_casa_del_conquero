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

class MyAbout extends PageViewElement {
  _render(props) {
    return html`
      ${SharedStyles}
      <style>
        :host {
          max-width: var(--max-width);
          margin: 0 auto;
          margin-top: 20px;
        }        
        section {
          padding: 20px;
        }

        section p,
        section h2 {
          line-height: 1.6;
          margin: 0 0 16px;
        }

        section h2 {
          margin-bottom: 10px;
          font-weight: 400;
          font-size: 32px;
          font-family: 'Brush Script MT', sans-serif;          
        }
        
        .section-images img {
          width: 100%;
          margin-bottom: 20px;
        }
        .section-images {
          padding: 20px 0;
        }
        @media (min-width: 720px) {
          article {
            column-count: 2;
            column-gap: 40px;
          }
          .section-images {
            display: flex;
            padding: 20px;
          }
          .section-images > div {
            flex: 1;
            padding-right: 20px;
          }
          .section-images img {
            width: 100%;
            margin-bottom: 0;
          }          
          .section-images > div:last-child {
            padding-right: 0;
          }
        }
      </style>
      <section>
        <h2>Nuestra historia</h2>
        <article>
          <p>En La Casa del Conquero estamos dispuestos a poner en valor lo que creemos que es el entorno con 
  más potencial de la ciudad de Huelva.</p>
          <p>Tenemos la oportunidad de ofrecer un lugar único, en el cual el evento a realizar adquiera valor 
  añadido por el mero hecho de realizarse en nuestras instalaciones.</p>
          <p>Y es que nuestro espacio se sitúa junto al Mirador del Conquero, en un enclave paisajístico inigualable, siendo 
  la edificación una de las casas más reconocibles de la ciudad.</p>
          <p>Por todo ello estamos convencidos de que muchas empresas y particulares estarán dispuestos a decantarse por nuestras 
  instalaciones cuando pretendan causar una buena impresión a clientes o invitados.</p>
        </article>
      </section>
      <section class="section-images">
        <div><img src="images/casa/2.jpg"></div>
        <div><img src="images/casa/27.jpg"></div>
        <div><img src="images/casa/3.jpg"></div>
      </section>
    `;
  }
}

window.customElements.define('my-about', MyAbout);
