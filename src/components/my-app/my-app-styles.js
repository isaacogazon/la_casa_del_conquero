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

export const MyAppStyles = html`
<style>
  :host {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    --max-width: 1200px;

    --app-primary-color: #0097A7;
    --app-darker-primary-color: #263238;
    --app-secondary-color: #293237;
    --app-dark-text-color: #313131;
    --app-light-text-color: white;
    --app-section-even-color: #f7f7f7;
    --app-section-odd-color: white;

    color: var(--app-dark-text-color);
  }

  /* app-header */
  .header {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: var(--max-width);
    margin: 0 auto;
    width: 100%;
  }
  
  .header-logo {
    box-sizing: border-box;
    height: 160px;
    display: inline-block;
    padding: 15px;
  }

  .header-logo img {
    height: 100%;
    width: auto;
  }

  .header-nav {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .header-nav > a {
    display: inline-block;
    box-sizing: border-box;
    color: #444;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.5px;
    padding: 6px 10px;
    text-decoration: none;
    text-transform: uppercase;
  }

  .header-nav > a:hover {
    color: var(--app-dark-text-color);
  }

  .header-nav > a[selected] {
    color: var(--app-primary-color);
  }

  @media (min-width: 460px) {
    .header-nav a {
      padding: 6px 15px;
    }
  }

  /* toolbar menu-btn */
  .menu-btn {
    background: none;
    border: none;
    cursor: pointer;
    height: 44px;
    width: 44px;
  }

  /* footer */
  footer {
    margin-top: auto;
    padding: 40px 20px;
    background: #f8f8f8;
  }

  .footer-top {
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
  }

  .footer-top h3 {
    margin: 0 0 20px 0;
  }

  .footer-top p {
    margin: 0 0 8px 0;
    color: #666;
  }

  .footer-top section {
    padding: 20px 0;
  }

  @media (min-width: 720px) {
    .footer-top section{
      padding: 20px;
    }
    .footer-top {
      flex-direction: row;
    }
  }

  .footer-copyright {
    font-size: 14px;
    color: #666;
    text-align: center;
    padding: 20px 0;
  }

  /* social icons */
  .social-icons {
    display: flex;
    align-items: center;
  }

  .social-icons > a {
    padding: 6px;
    margin-left: -10px;
    margin-right: 15px;
  }

  .social-icons > a:last-child {
    margin-right: 0;
  }

  .social-icons svg {
    vertical-align: top;
    height: 32px;
    width: 32px;
    fill: #666;
  }

  .social-icons > a:hover svg {
    fill: var(--app-dark-text-color);
  }

  /* Workaround for IE11 displaying <main> as inline */
  main {
    display: block;
    flex: 1;
  }

  .page {
    display: none;
  }

  .page[active] {
    display: block;
  }

  /* Wide layout: when the viewport width is bigger than 460px, layout
  changes to a wide layout. */
  @media (min-width: 460px) {
    .menu-btn {
      display: none;
    }
  }
</style>
`;
