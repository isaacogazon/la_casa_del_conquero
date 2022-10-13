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
import { 
  SharedStyles,
  FormSharedStyles,
  ButtonSharedStyles,
  LinkSharedStyles
} from '../shared-styles/shared-styles.js';

class MyContact extends PageViewElement {
  _render(props) {
    return html`
      ${SharedStyles}
      ${FormSharedStyles}
      ${LinkSharedStyles}
      ${ButtonSharedStyles}
      <style>
        :host {
          max-width: var(--max-width);
          margin: 0 auto;
          margin-top: 20px;
        }
        section {
          padding: 20px;
        }
        .info-section p {
          font-size: 16px;
          line-height: 2;
        }
        .gmap-section {
          margin: 0 0 30px 0;
        }
        .form-section h2 {
          margin-bottom: 10px;
          font-weight: 400;
          font-size: 32px;
          font-family: 'Brush Script MT', sans-serif;          
        }
        label {
          font-weight: 600;
          color: #777;
          font-size: 14px;
          display: block;
          margin-bottom: 10px;
        }
        form {
          margin-top: 20px;
        }
        .mb-m {
          margin-bottom: 25px;
        }
        form input[type="submit"] {
          margin-top: 10px;
        }
        @media (min-width: 720px) {
          .section-col {
            display: flex;
          }
          .form-section {
            flex: 1.2;
            padding-right: 40px;
          }
          .info-section {
            flex: 0.9;
          }
          .gmap-section {
            margin: 20px 0;
          }
        }
        textarea {
          resize: vertical;
        }
      </style>

      <div class="section-col">
        <section class="form-section">
          <h2>Contáctanos</h2>
          <p>Si tienes alguna pregunta, no dude en ponerse en contacto con nosotros.</p>
          <form id="contactForm" method="POST" action="https://formspree.io/lacasadelconquero@gmail.com">
            <input type="hidden" name="_language" value="es" />
            <input class="input" type="text" placeholder="Nombre" name="nombre">
            <input class="input" type="email" placeholder="Email" name="email">
            <input class="input" type="number" placeholder="Teléfono" name="teléfono">
            <textarea class="textarea" name="mensaje"></textarea>
            <input type="submit" class="button" value="Enviar">
          </form>
        </section>
        <section class="info-section">
          <div class="mb-m">
            <label>Teléfonos:</label>
            <p><strong>628 445 686</strong></p>
            <p><strong>626 243 051</strong></p>
          </div>
          <div class="mb-m">
            <label>Email:</label>
            <p><a href="mailto:lacasadelconquero@gmail.com" class="link"><strong>lacasadelconquero@gmail.com</a></strong></p>
          </div>
          <div class="mb-m">
            <label>Dirección:</label>
            <p><strong>Calle Pedro Gómez 2, 21004 Huelva</strong></p>
          </div>
        </section>
      </div>
      <section class="gmap-section">
        <iframe
            width="100%"
            height="450"
            frameborder="0"
            style="border:0"
            src="https://www.google.com/maps/embed/v1/place?q=calle%20pedro%20gomez%202%2021002&key=AIzaSyBsAlR7cFnOUmEmUIUgGmhSBqdQ7EqZ8Bc"
            allowfullscreen>
        </iframe>
      </section>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
  }
}

window.customElements.define('my-contact', MyContact);
