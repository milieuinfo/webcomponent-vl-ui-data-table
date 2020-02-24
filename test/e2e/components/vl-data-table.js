const { VlElement } = require('vl-ui-core').Test;
const { By } = require('selenium-webdriver');

class VlDataTable extends VlElement {  

    async getCaption() {
        const caption = await this.findElement(By.css('caption'));
        return caption.getText();
    }

    async getDataTableHeader() {
        const header = await this.findElement(By.css('thead'));
        return new vlDataTableHeader(this.driver, header);
    }

    // async getDataTableBody() {

    // }
}

class vlDataTableHeader extends VlElement {

    async _getHeaderColumns() {
        return this.findElements(By.css('th'));
    }

    async getNumberOfHeaderColumns() {
        return (await this._getHeaderColumns()).length;
    }

    async getHeaderOfColumn(index) {
        const headers = await this._getHeaderColumns();
        if (index < headers.length) {
            return headers[index].getText();
        } else {
            return undefined;
        }
    }

}

class vlDataTableBody extends VlElement {

}


module.exports = VlDataTable;
