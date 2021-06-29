/* global AFRAME */

import 'aframe';
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import initAll from './aframe-components';

initAll(AFRAME);
@customElement('my-component')
class MyComponent extends LitElement {
  @property()
  text = 'Change Me';

  static get styles() {
    return css`
      .frame {
        height: 500px;
        width: 900px;
        border: solid black;
      }
    `;
  }

  /* Do not create shadow dom */
  createRenderRoot() {
    return this;
  }

  render() {
    return html`<div class="frame">
      <a-scene>
        <!-- <a-box position="-1 0.5 -3" rotation="0 0 0" color="#4CC3D9"></a-box> -->
        <a-entity
          chartstand="width: 1; height: 1; depth: 1; color: orange"
          position="0 0 -5"
        ></a-entity>
        <a-plane
          position="0 0 -4"
          rotation="-90 0 0"
          width="4"
          height="4"
          color="#7BC8A4"
        ></a-plane>
        <a-sky color="#ECECEC"></a-sky>
      </a-scene>
    </div>`;
  }
}

export default MyComponent;
