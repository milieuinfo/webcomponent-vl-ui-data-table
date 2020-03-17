const VlDataTable = require('../components/vl-data-table');
const { Page, Config } = require('vl-ui-core').Test;

class VlDataTablePage extends Page {
    async _getDataTable(selector) {
        return new VlDataTable(this.driver, selector);
    }

    async getDataTableWithHoverLines() {
        return this._getDataTable('#data-table-hover');
    }

    async getDataTableMatrix() {
        return this._getDataTable('#data-table-matrix-column-titles');
    }

    async getDataTableMatrixJoinedRowTitles() {
        return this._getDataTable('#data-table-matrix-row-titles');
    }

    async getDataTableLined() {
        return this._getDataTable('#data-table-lined');
    }

    async getDataTableLinedJoinRowTitles() {
        return this._getDataTable('#data-table-lined-row-titles');
    }

    async getDataTableZebra() {
        return this._getDataTable('#data-table-zebra');
    }
    async getDataTableCollapsedMedium() {
    	return this._getDataTable('#data-table-collapsed-medium');
    }
    
    async getDataTableCollapsedSmall() {
    	return this._getDataTable('#data-table-collapsed-small');
    }
    
    async getDataTableCollapsedExtraSmall() {
    	return this._getDataTable('#data-table-collapsed-extra-small');
    }

    async load() {
        await super.load(Config.baseUrl + '/demo/vl-data-table.html');
    }
}

module.exports = VlDataTablePage;
