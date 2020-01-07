const VlDataTable = require('../components/vl-data-table');
const { Page } = require('vl-ui-core');
const { Config } = require('vl-ui-core');

class VlDataTablePage extends Page {
    async _getDataTable(selector) {
        return new VlDataTable(this.driver, selector);
    }

    async load() {
        await super.load(Config.baseUrl + '/demo/vl-data-table.html');
    }
}

module.exports = VlDataTablePage;
