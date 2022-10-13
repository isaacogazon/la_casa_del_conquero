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
import '../photo-overlay/photo-overlay.js';

class MySpaces extends PageViewElement {
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
          padding: 18px;
        }
        section h2 {
          padding: 0 0 0 2px;
          margin-bottom: 10px;
          font-weight: 400;
          font-size: 32px;
          font-family: 'Brush Script MT', sans-serif;          
        }
        .images {
          display: flex;
          flex-wrap: wrap;
        }
        .images p {
          align-items: center;
          background: #f2f2f2;
          display: flex;
          height: auto;
          margin: 2px;
          width: calc(33.33% - 4px);
        }
        .images img {
          box-sizing: border-box;
          cursor: pointer;
          display: block;
          height: auto;
          margin: 0 auto;
          vertical-align: top;
          width: 100%;
        }
        @media (min-width: 720px) {
          section {
            padding: 12px;
          }
          section h2 {
            padding: 0 0 0 12px;
          }          
          .images p {
            margin: 8px;
            width: calc(33.33% - 16px);
          }
        }
      </style>
      <section class="" on-click="${e => this._onClick(e)}">
        <h2>Exteriores</h2>
        <div class="images">
          <p><img src="images/casa/3.jpg"></p>
          <p><img src="images/casa/4.jpg"></p>
          <p><img src="images/casa/5.jpg"></p>
          <p><img src="images/casa/6.jpg"></p>
          <p><img src="images/casa/7.jpg"></p>
          <p><img src="images/casa/8.jpg"></p>
          <p><img src="images/casa/9.jpg"></p>
          <p><img src="images/casa/10.jpg"></p>
          <p><img src="images/casa/11.jpg"></p>
          <p><img src="images/casa/12.jpg"></p>
          <p><img src="images/casa/13.jpg"></p>
          <p><img src="images/casa/14.jpg"></p>
          <p><img src="images/casa/15.jpg"></p>
          <p><img src="images/casa/16.jpg"></p>
          <p><img src="images/casa/17.jpg"></p>
        </div>
      </section>
      <section on-click="${e => this._onClick(e)}">
        <h2>Interiores</h2>
        <div class="images">
          <p><img src="images/casa/18.jpg"></p>
          <p><img src="images/casa/19.jpg"></p>
          <p><img src="images/casa/20.jpg"></p>
          <p><img src="images/casa/21.jpg"></p>
          <p><img src="images/casa/22.jpg"></p>
          <p><img src="images/casa/23.jpg"></p>
          <p><img src="images/casa/24.jpg"></p>
          <p><img src="images/casa/25.jpg"></p>
          <p><img src="images/casa/26.jpg"></p>
        </div>        
      </section>
      <photo-overlay></photo-overlay>
    `;
  }

  static get properties() {
    return {
    };
  }

  _onClick(e) {
    const target = e.composedPath()[0];
    if (target.nodeType === Node.ELEMENT_NODE && target.localName === 'img') {
      this.shadowRoot.querySelector('photo-overlay').src = target.getAttribute('src');
    }
  }

}

window.customElements.define('my-spaces', MySpaces);
