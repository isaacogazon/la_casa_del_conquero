/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement, html } from '@polymer/lit-element';
import { closeIcon } from '../my-icons/my-icons.js';

class PhotoOverlay extends LitElement {

  _render(props) {
    if (props.src) {
      return html`
        <style>
          :host {
            align-items: center;
            background: rgba(0,0,0,0.6);
            bottom: 0;
            display: flex;
            justify-content: center;
            left: 0;
            position: fixed;
            right: 0;
            top: 0;
            z-index: 9999;
          }
          img {
            max-width: 100%;
            height: auto;
            max-height: calc(100% - 40px);
          }
          #closeBtn {
            background: white;
            border: 0;
            border-radius: 50%;
            cursor: pointer;
            fill: black;
            margin: 0;
            outline: 0;
            padding: 5px;
            position: fixed;
            right: 20px;
            top: 10px;
            z-index: 8888;
          }
        </style>
        <button id="closeBtn">${closeIcon}</button>
        <img src="${props.src}"></img>
      `;
    } else {
      return html`
        <style>
          :host {
            display: none !important;
          }
        </style>
      `;
    }
  }

  static get properties() {
    return {
      src: String,
    };
  }

  constructor() {
    super();
    this._onClick = this._onClick.bind(this);
    this._onKeydown = this._onKeydown.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', this._onClick);
    window.addEventListener('keydown', this._onKeydown);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('click', this._onClick);
    window.removeEventListener('keydown', this._onKeydown);
  }

  _propertiesChanged(props, b, c) {
    super._propertiesChanged(props, b, c);
    if (props.src !== undefined) {
      this.dispatchEvent(new CustomEvent('src-changed', {
        composed: true,
        detail: {value: props.src}
      }));
    }
  }

  _onClick(evt) {
    const target = evt.composedPath()[0];
    if (!target.localName || target.localName !== 'img') {
      this.src = '';
    }
  }

  _onKeydown(evt) {
    if (evt.keyCode === 27) {
      this.src = '';
    }
  }

}

window.customElements.define('photo-overlay', PhotoOverlay);
