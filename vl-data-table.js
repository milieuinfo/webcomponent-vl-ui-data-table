import { NativeVlElement, define } from '/node_modules/vl-ui-core/vl-core.js';

/**
 * VlDataTable
 * @class
 * @classdesc Gebruik een data table om op een gestructureerde manier (grote hoeveelheden) relationele data te tonen.
 *
 * @extends NativeVlElement
 *
 * @property {boolean} hover - Attribuut wordt gebruikt om een rij te highlighten waneer de gebruiker erover hovert met muiscursor.
 * @property {boolean} matrix - Attribuut wordt gebruikt om data in 2 dimensies te tonen. Zowel de rijen als de kolommen krijgen een titel. Deze titels worden gescheiden door een dikke lijn.
 * @property {boolean} lined - Variant met een lijn tussen elke rij en kolom.
 * @property {boolean} zebra - Variant waarin de rijen afwisslend een andere achtergrondkleur krijgen. Dit maakt de tabel makkelijker leesbaar.
 * 
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-data-table/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-data-table/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-data-table.html|Demo}
 */
export class VlDataTable extends NativeVlElement(HTMLTableElement) {
  static get _observedAttributes() {
    return [];
  }

  static get _observedClassAttributes() {
    return ['hover', 'matrix', 'lined', 'zebra'];
  }

  connectedCallback() {
    this.classList.add('vl-data-table');
  }

  get _classPrefix() {
    return 'vl-data-table--';
  }

  get _stylePath() {
    return '/node_modules/vl-ui-data-table/style.css';
  }
}

define('vl-data-table', VlDataTable, {extends: 'table'});
