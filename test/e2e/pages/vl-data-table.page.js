const VlDataTable = require('../components/vl-data-table');
const { Page, Config } = require('vl-ui-core').Test;

class VlDataTablePage extends Page {
    async _getDataTable(selector) {
        return new VlDataTable(this.driver, selector);
    }

    async getDataTableWithHoverLines() {
        return this._getDataTable('#data-table-hover');
    }

    async load() {
        await super.load(Config.baseUrl + '/demo/vl-data-table.html');
    }
}

module.exports = VlDataTablePage;
