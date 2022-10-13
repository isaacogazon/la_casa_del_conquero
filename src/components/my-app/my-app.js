import { LitElement, html } from '@polymer/lit-element';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { installOfflineWatcher } from 'pwa-helpers/network.js';
import { installRouter } from 'pwa-helpers/router.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';

// This element is connected to the Redux store.
import { store } from '../../store.js';

// These are the actions needed by this element.
import {
  navigate,
  updateOffline,
  updateLayout
} from '../../actions/app.js';

// These are the elements needed by this element.
import { facebookIcon, instagramIcon } from '../my-icons/my-icons.js';
import '../snack-bar/snack-bar.js';

import { MyAppStyles } from './my-app-styles.js';
import { LinkSharedStyles } from '../shared-styles/shared-styles.js';

class MyApp extends connect(store)(LitElement) {
  _render({appTitle, _page, _snackbarOpened, _offline}) {
    // Anything that's related to rendering should be done in here.
    return html`
    ${MyAppStyles}
    ${LinkSharedStyles}

    <!-- Header -->
    <header class="header">
      <a href="/home" class="header-logo"><img src="images/logo.png"></a>
      <nav class="header-nav" sticky>
        <a selected?="${_page === 'home'}" href="/home">Inicio</a>
        <a selected?="${_page === 'spaces'}" href="/spaces">Espacios</a>
        <a selected?="${_page === 'about'}" href="/about">Quiénes Somos</a>
        <a selected?="${_page === 'contact'}" href="/contact">Contacto</a>
      </nav>
    </header>

    <!-- Main content -->
    <main role="main" class="main-content">
      <my-home class="page" active?="${_page === 'home'}"></my-home>
      <my-about class="page" active?="${_page === 'about'}"></my-about>
      <my-spaces class="page" active?="${_page === 'spaces'}"></my-spaces>
      <my-contact class="page" active?="${_page === 'contact'}"></my-contact>
      <my-404 class="page" active?="${_page === '404'}"></my-404>
    </main>

    <footer>
      <div class="footer-top">
        <section>
          <h3>Contacto</h3>
          <p>Teléfonos: </p>
          <p><strong>628 445 686</strong></p>
          <p><strong>626 243 051</strong></p>
          <p>Email: <a class="link" href="emailto:lacasadelconquero@gmail.com">lacasadelconquero@gmail.com</a></p>
        </section>
        <section>
          <h3>Localización</h3>
          <p>Calle Pedro Gómez 2, 21004 Huelva</p>
          <a href="https://goo.gl/maps/tRyGyW8EKkL2" class="link" target="_blank" rel="noopener">Abrir en Google Maps</a>
        </section>
        <section>
          <h3>Síguenos</h3>
          <div class="social-icons">
            <a href="https://www.facebook.com/lacasadelconquero/" target="_blank" rel="noopener">${facebookIcon}</a>
            <a href="https://www.instagram.com/lacasadelconquero/" target="_blank" rel="noopener">${instagramIcon}</a>
          </div>
        </section>
      </div>
      <div class="footer-copyright">2018 La Casa del Conquero. Todos los derechos reservados.</div>
    </footer>

    <snack-bar active?="${_snackbarOpened}">
        You are now ${_offline ? 'offline' : 'online'}.</snack-bar>
    `;
  }

  static get properties() {
    return {
      appTitle: String,
      _page: String,
      _snackbarOpened: Boolean,
      _offline: Boolean
    }
  }

  constructor() {
    super();
    // To force all event listeners for gestures to be passive.
    // See https://www.polymer-project.org/3.0/docs/devguide/settings#setting-passive-touch-gestures
    setPassiveTouchGestures(true);
  }

  _firstRendered() {
    installRouter((location) => store.dispatch(navigate(window.decodeURIComponent(location.pathname))));
    installOfflineWatcher((offline) => store.dispatch(updateOffline(offline)));
    installMediaQueryWatcher(`(min-width: 460px)`,
        (matches) => store.dispatch(updateLayout(matches)));
  }

  _didRender(properties, changeList) {
    if ('_page' in changeList) {
    }
  }

  _stateChanged(state) {
    this._page = state.app.page;
    this._offline = state.app.offline;
    this._snackbarOpened = state.app.snackbarOpened;
  }
}

window.customElements.define('my-app', MyApp);
