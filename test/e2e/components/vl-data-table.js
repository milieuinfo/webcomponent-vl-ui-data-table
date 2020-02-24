const { VlElement } = require('vl-ui-core').Test;
const { By } = require('selenium-webdriver');

class VlDataTable extends VlElement {  

    async getCaption() {
        const caption = await this.findElement(By.css('caption'));
        return caption.getText();
    }

    // async getDataTableHeader() {
    //     const header = this.findElements(By.css('thead'));
    //     return new vlDataTableHeader(this.driver, header);
    // }

    // async getDataTableBody() {

    // }
}

class vlDataTableHeader extends VlElement {

}

class vlDataTableBody extends VlElement {

}


module.exports = VlDataTable;
