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

    async getDataTableBody() {
        const body = await this.findElement(By.css('tbody'));
        return new vlDataTableBody(this.driver, body);
    }


    async isHover() {
        return this.hasAttribute('hover');
    }

    async isMatrix() {
        return this.hasAttribute('matrix');
    }

    async isLined() {
        return this.hasAttribute('lined');
    }

    async isZebra() {
        return this.hasAttribute('zebra');
    }
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
    async getRows() {
        const rows = await this.findElements(By.css('tr'));
        
        return Promise.all(
            rows.map(async row => {
                return await new vlDataTableRow(this.driver, row);
            })
        );
    }
}

class vlDataTableRow extends VlElement {

    async _getColumns() {
        return this.findElements(By.css('td'));
    }

    async getNumberOfColumns() {
        return (await this._getColumns()).length;
    }

    async getColumn(index) {
        const columns = await this._getColumns();
        if (index < columns.length) {
            return columns[index].getText();
        } else {
            return undefined;
        }
    }
}


module.exports = VlDataTable;
