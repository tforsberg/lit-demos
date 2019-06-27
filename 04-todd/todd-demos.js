import { LitElement, html, css } from 'lit-element';

import {} from '../src/wc/HelloWorld.js'

//import './01-basic-setup.js';
// import './02-manage-properties.js';
// import './03-property-changes.js';
// import './04-properties-and-attributes.js';
// import './05-passing-properties.js';
// import './06-handle-events.js';
// import './07-conditional-rendering.js';
// import './08-repeated-templates.js';
// import './09-update-arrays-and-objects.js';
// import './10-render-styles.js';
// import './11-fetching-data.js';
// import './12-firing-events.js';

class ToddDemos extends LitElement {

  static get styles() {
    return [
      css`
        :host {
          display: flex;
          flex-direction: column;
          font-family: sans-serif;
        }

        a {
          text-decoration: none;
        }

        .demo > *:not(h2):not(a) {
          display: block;
          border: 1px solid	#e2e2e2;
          border-radius: 5px;
          padding: 8px;
          margin: 8px 0;
          line-height: 32px;
        }

        paper-card {
          border-radius: 5px;
          flex: 1;
          padding: 12px;
          margin: 0 0 32px 0;
        }

        h2 {
          font-size: 20px;
          color: #2c3e50;
        }

        h2:hover::after {
          color: #9B35FA;
          content: " #";
        }

        h1 {
          margin-top: 0px;
          color: #9B35FA;
        }
      `,
    ];
  }


  render() {
    return html`
    <hello-world></hello-world>
    `;
  }
}

customElements.define('todd-demos', ToddDemos);
