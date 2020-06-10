import {nativeVlElement} from '/node_modules/vl-ui-core/dist/vl-core.js';
import {define} from '/node_modules/vl-ui-core/dist/vl-core.js';

/**
 * VlDataTable
 * @class
 * @classdesc Gebruik een data table om op een gestructureerde manier (grote hoeveelheden) relationele data te tonen.
 *
 * @extends HTMLTableElement
 *
 * @property {boolean} hover - Attribuut wordt gebruikt om een rij te highlighten waneer de gebruiker erover hovert met muiscursor.
 * @property {boolean} matrix - Attribuut wordt gebruikt om data in 2 dimensies te tonen. Zowel de rijen als de kolommen krijgen een titel. Deze titels worden gescheiden door een dikke lijn.
 * @property {boolean} lined - Variant met een lijn tussen elke rij en kolom.
 * @property {boolean} zebra - Variant waarin de rijen afwisslend een andere achtergrondkleur krijgen. Dit maakt de tabel makkelijker leesbaar.
 * @property {boolean} collaped-m - Vanaf een medium schermgrootte zullen de cellen van elke rij onder elkaar ipv naast elkaar getoond worden.
 * @property {boolean} collaped-s - Vanaf een small schermgrootte zullen de cellen van elke rij onder elkaar ipv naast elkaar getoond worden.
 * @property {boolean} collaped-xs - Vanaf een extra small schermgrootte zullen de cellen van elke rij onder elkaar ipv naast elkaar getoond worden.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-data-table/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-data-table/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-data-table.html|Demo}
 */
export class VlDataTable extends nativeVlElement(HTMLTableElement) {
  static get _observedAttributes() {
    return [];
  }

  static get _observedClassAttributes() {
    return ['hover', 'matrix', 'lined', 'zebra', 'collapsed-m', 'collapsed-s', 'collapsed-xs'];
  }

  connectedCallback() {
    this.classList.add('vl-data-table');
  }

  get _classPrefix() {
    return 'vl-data-table--';
  }
}

define('vl-data-table', VlDataTable, {extends: 'table'});
