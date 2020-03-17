const { VlElement } = require('vl-ui-core').Test;
const { By } = require('vl-ui-core').Test.Setup;

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

    async isCollapsedMedium() {
    	return this.hasAttribute('collapsed-m');
    }

    async isCollapsedSmall() {
    	return this.hasAttribute('collapsed-s');
    }

    async isCollapsedExtraSmall() {
    	return this.hasAttribute('collapsed-xs');
    }
}

class VlDataTableHeader extends VlElement {
    async getRows() {
        const rows = await this.findElements(By.css('tr'));
        return Promise.all(rows.map(row => new VlDataTableRow(this.driver, row)));
    }
}

class VlDataTableBody extends VlElement {
    async getRows() {
        const rows = await this.findElements(By.css('tr'));
        return Promise.all(rows.map(row => new VlDataTableRow(this.driver, row)));
    }
}

class VlDataTableRow extends VlElement {
    async _getCells() {
        return this.findElements(By.css('tr>*'));
    }

    async getCells() {
        const cells = await this._getCells();
        return Promise.all(cells.map(cell => new VlDataTableCell(this.driver, cell)));
    }
}

class VlDataTableCell extends VlElement {
	getRowSpan() {
		return this.getAttribute("rowspan");
	}

	getColSpan() {
		return this.getAttribute("colspan");
	}

	getScope() {
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
