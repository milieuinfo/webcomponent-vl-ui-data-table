const {VlElement} = require('vl-ui-core').Test;
const {assert, By} = require('vl-ui-core').Test.Setup;

class VlDataTable extends VlElement {
  async getCaption() {
    const caption = await this.findElement(By.css('caption'));
    return caption.getText();
  }

  async getHeader() {
    return new VlDataTableHeader(this.driver, await this.findElement(By.css('thead')));
  }

  async getBody() {
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
    return Promise.all(rows.map((row) => new VlDataTableRow(this.driver, row)));
  }
}

class VlDataTableBody extends VlElement {
  async getRows() {
    const rows = await this.findElements(By.css('tr'));
    return Promise.all(rows.map((row) => new VlDataTableRow(this.driver, row)));
  }
}

class VlDataTableRow extends VlElement {
  async getCells() {
    const cells = await this.findElements(By.css('tr>*'));
    return Promise.all(cells.map((cell) => new VlDataTableCell(this.driver, cell)));
  }

  async assertValues(values) {
    const cells = await this.getCells();
    assert.lengthOf(cells, values.length);
    for (let i = 0; i < cells.length; i++) {
      await cells[i].assertValue(values[i]);
    }
  }
}

class VlDataTableCell extends VlElement {
  async getRowSpan() {
    return this.getAttribute('rowspan');
  }

  async getColSpan() {
    return this.getAttribute('colspan');
  }

  async getScope() {
    return this.getAttribute('scope');
  }

  async isTd() {
    const tag = await this.getTagName();
    return tag == 'td';
  }

  async isTh() {
    const tag = await this.getTagName();
    return tag == 'th';
  }

  async assertValue(value) {
    await assert.eventually.equal(this.getText(), value);
  }
}

module.exports = VlDataTable;
