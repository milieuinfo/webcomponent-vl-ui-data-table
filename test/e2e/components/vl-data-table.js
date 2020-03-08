const { VlElement } = require('vl-ui-core').Test;
const { By } = require('selenium-webdriver');

class VlDataTable extends VlElement {  

    async getCaption() {
        const caption = await this.findElement(By.css('caption'));
        return caption.getText();
    }

    async getDataTableHeader() {
        return new VlDataTableHeader(this.driver, await this.findElement(By.css('thead')));
    }

    async getDataTableBody() {
        return new VlDataTableBody(this.driver, await this.findElement(By.css('tbody')));
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

class VlDataTableHeader extends VlElement {
    async getRow() {
        return new VlDataTableRow(this.driver, await this.findElement(By.css('tr')));
    }
}

class VlDataTableBody extends VlElement {
    async getRows() {
        const rows = await this.findElements(By.css('tr'));
        
        return Promise.all(
            rows.map(async row => {
                return await new VlDataTableRow(this.driver, row);
            })
        );
    }
}

class VlDataTableRow extends VlElement {
    async _getCells() {
        return this.findElements(By.css('tr>*'));
    }

    async getNumberOfCells() {
        return (await this._getCells()).length;
    }

    async getCells() {
        const cells = await this._getCells();
        
        return Promise.all(
            cells.map(async cell => {
                return await new VlDataTableCell(this.driver, cell);
            })
        );
    }
}

class VlDataTableCell extends VlElement {
	rowSpan() {
		return this.getAttribute("rowspan");
	}

	colSpan() {
		return this.getAttribute("colspan");
	}

	scope() {
		return this.getAttribute("scope");
	}

	async isTd() {
		const tag = await this.getTagName();
		return tag == 'td';
	}

	async isTh() {
		const tag = await this.getTagName();
		return tag == 'th';
	}
}

module.exports = VlDataTable;
