const { assert, driver } = require('vl-ui-core').Test.Setup;
const VlDataTablePage = require('./pages/vl-data-table.page');

describe('vl-data-table', async () => {
    const vlDataTablePage = new VlDataTablePage(driver);

    before(() => {
        return vlDataTablePage.load();
    });

    it ('De gebruiker kan de caption van een datatable opgeven', async() => {
        const datatable = await vlDataTablePage.getDataTableWithHoverLines();
        await assert.eventually.equal(datatable.getCaption(), "Data table Hover");
    });

    

    after(async () => {
        return driver.quit();
    });
});

