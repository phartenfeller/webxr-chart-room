/* global AFRAME */

import 'aframe';
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import initAll from './aframe-components';

initAll(AFRAME);
@customElement('my-component')
class MyComponent extends LitElement {
  @property({ type: JSON })
  charts;

  @property({ type: Boolean })
  cursor = true;

  /* Do not create shadow dom */
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div style="min-height: 500px; border: 1px solid black;">
        <a-scene embedded style="height: 800px; width:100%;">
          <a-camera>
            ${
              this.cursor
                ? html` <a-entity
                    cursor
                    position="0 0 -1"
                    geometry="primitive: sphere; radius: 0.005"
                    material="color: #000; shader: flat; opacity: 0.6"
                  ></a-entity>`
                : null
            }
          </a-camera>

          <a-sky></a-sky>

          <a-entity
            chartstand="width: 1; height: 1; depth: 1; color: orange"
            position="0 0 -5"
          ></a-entity>
          ${this.charts.map(
            (chart) =>
              html`
                <a-entity
                  barchart="data: ${JSON.stringify(
                    chart.data
                  )}; title: ${chart.title};"
                  position="0 0 -10"
                ></a-entity>
              `
          )}
          <a-entityw
            geometry="primitive: box; height: 2; width: 0.25; depth: 0.25"
            color="#823943"
            position="0 0 -3"
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
