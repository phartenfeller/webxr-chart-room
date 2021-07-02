/* global AFRAME */

import 'aframe';
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import initAll from './aframe-components';

initAll(AFRAME);
@customElement('my-component')
class MyComponent extends LitElement {
  @property({ type: String })
  data;

  /* Do not create shadow dom */
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div style="min-height: 500px; border: 1px solid black;">
        <a-scene embedded style="height: 800px; width:100%;">
          <!-- <a-box position="-1 0.5 -3" rotation="0 0 0" color="#4CC3D9"></a-box> -->
          <a-entity
            chartstand="width: 1; height: 1; depth: 1; color: orange"
            position="0 0 -5"
          ></a-entity>
          <a-entity
            barchart="data: ${this.data};"
            position="0 0 -10"
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
      </div>
    `;
  }
}

export default MyComponent;
