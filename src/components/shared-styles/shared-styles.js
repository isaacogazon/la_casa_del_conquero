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

/* HOST */
export const SharedStyles = html`
<style>
  :host {
    display: block;
    box-sizing: border-box;
  }

  .max-width-container {
    max-width: var(--max-width);
    margin-right: auto;
    margin-left: auto;
  }

  h1,h2,h3,p,label {
    margin: 0;
  }
</style>
`;

/* BUTTONS */
export const ButtonSharedStyles = html`
<style>
  .button {
    font-size: inherit;
    vertical-align: middle;
    background: var(--app-primary-color);
    color: white;
    padding: 8px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
  }
  .button:hover {
    background: #00BFA5;
  }
</style>
`;

/* LINKS */
export const LinkSharedStyles = html`
<style>
  .link {
    color: var(--app-primary-color);
    text-decoration: none;
  }
  .link:hover {
    color: var(--app-darker-primary-color);
    text-decoration: underline;
  }
</style>
`;

/* FORM */
export const FormSharedStyles = html`
<style>
  .input,
  .textarea {
    border-radius: 4px;
    border: 1px solid #ddd;
    box-sizing: border-box;
    display: block;
    font-family: inherit;
    font-size: inherit;
    outline: 0;
    padding: 6px;
    width: 100%;
    margin-bottom: 10px;
  }

  .input:focus,
  .textarea:focus {
    border-color: var(--app-primary-color);
  }
</style>
`;
