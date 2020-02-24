const { assert, driver } = require('vl-ui-core').Test.Setup;
const VlDataTablePage = require('./pages/vl-data-table.page');

describe('vl-data-table', async () => {
    const vlDataTablePage = new VlDataTablePage(driver);

    before(() => {
        return vlDataTablePage.load();
    });

    it ('De gebruiker kan de caption van een datatable zien', async() => {
        const datatable = await vlDataTablePage.getDataTableWithHoverLines();
        await assert.eventually.equal(datatable.getCaption(), "Data table Hover");
    });

    it ('De gebruiker kan de headers van de table zien', async() => {
        const datatable = await vlDataTablePage.getDataTableWithHoverLines();
        const header = await datatable.getDataTableHeader();

        await assert.eventually.equal(header.getNumberOfHeaderColumns(), 4);
        await assert.eventually.equal(header.getHeaderOfColumn(0), "Entry Header 1");
        await assert.eventually.equal(header.getHeaderOfColumn(1), "Entry Header 2");
        await assert.eventually.equal(header.getHeaderOfColumn(2), "Entry Header 3");
        await assert.eventually.equal(header.getHeaderOfColumn(3), "Entry Header 4");
    });


    // it ()

    

    after(async () => {
        return driver.quit();
    });
});

