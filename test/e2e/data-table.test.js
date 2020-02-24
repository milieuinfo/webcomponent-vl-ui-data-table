const { assert, driver } = require('vl-ui-core').Test.Setup;
const VlDataTablePage = require('./pages/vl-data-table.page');

describe('vl-data-table', async () => {
    const vlDataTablePage = new VlDataTablePage(driver);

    before(() => {
        return vlDataTablePage.load();
    });

    it('De gebruiker kan de caption van een datatable zien', async() => {
        const datatable = await vlDataTablePage.getDataTableWithHoverLines();
        await assert.eventually.equal(datatable.getCaption(), "Data table Hover");
    });

    it('De gebruiker kan de headers van de table zien', async() => {
        const datatable = await vlDataTablePage.getDataTableWithHoverLines();
        const header = await datatable.getDataTableHeader();
        const headerRow = await header.getRow();

        await assert.eventually.equal(headerRow.getNumberOfColumns(), 4);
        await assert.eventually.equal(headerRow.getColumn(0), "Entry Header 1");
        await assert.eventually.equal(headerRow.getColumn(1), "Entry Header 2");
        await assert.eventually.equal(headerRow.getColumn(2), "Entry Header 3");
        await assert.eventually.equal(headerRow.getColumn(3), "Entry Header 4");
    });


    it('De gebruiker kan de columns van een table zien', async() => {
        const datatable = await vlDataTablePage.getDataTableWithHoverLines();
        const body = await datatable.getDataTableBody();

        const rows = await body.getRows();

        await assert.eventually.equal(rows[0].getNumberOfColumns(), 4);
        await assert.eventually.equal(rows[0].getColumn(0), "Entry line 1");
        await assert.eventually.equal(rows[0].getColumn(1), "Entry line 2");
        await assert.eventually.equal(rows[0].getColumn(2), "Entry line 3");
        await assert.eventually.equal(rows[0].getColumn(3), "Entry line 4");

        await assert.eventually.equal(rows[1].getNumberOfColumns(), 3);
        await assert.eventually.equal(rows[1].getColumn(0), "Entry line 1");
        await assert.eventually.equal(rows[1].getColumn(1), "Entry line 2");
        await assert.eventually.equal(rows[1].getColumn(2), "Entry line 3");

        await assert.eventually.equal(rows[2].getNumberOfColumns(), 4);
        await assert.eventually.equal(rows[2].getColumn(0), "Entry line 1");
        await assert.eventually.equal(rows[2].getColumn(1), "Entry line 2");
        await assert.eventually.equal(rows[2].getColumn(2), "Entry line 3");
        await assert.eventually.equal(rows[2].getColumn(3), "Entry line 4");
    });

    it('Als gebruiker kan ik over rijen hooveren', async() => {
        const datatable = await vlDataTablePage.getDataTableWithHoverLines();
        await assert.eventually.isTrue(datatable.isHover());
        await assert.eventually.isFalse(datatable.isMatrix());
        await assert.eventually.isFalse(datatable.isLined());
        await assert.eventually.isFalse(datatable.isZebra());
    });

    it('Als gebruiker kan ik een tabel als matrix variant definieren', async() => {
        const datatable = await vlDataTablePage.getDataTableMatrix();
        await assert.eventually.isTrue(datatable.isMatrix());
        await assert.eventually.isFalse(datatable.isLined());
        await assert.eventually.isFalse(datatable.isHover());
        await assert.eventually.isFalse(datatable.isZebra());
    });

    it('Als gebruiker kan ik een tabel als matrix variant definieren', async() => {
        const datatable = await vlDataTablePage.getDataTableMatrixJoinedRowTitles();
        await assert.eventually.isTrue(datatable.isMatrix());
        await assert.eventually.isFalse(datatable.isHover());
        await assert.eventually.isFalse(datatable.isLined());
        await assert.eventually.isFalse(datatable.isZebra());
    });

    it ('Als gebruiker kan ik lijnen zien tussen kolommen en rijen', async() => {
        const datatable = await vlDataTablePage.getDataTableLined();
        await assert.eventually.isTrue(datatable.isLined());
        await assert.eventually.isFalse(datatable.isMatrix());
        await assert.eventually.isFalse(datatable.isHover());
        await assert.eventually.isFalse(datatable.isZebra());
    });

    it ('Als gebruiker kan ik lijnen zien tussen kolommen en rijen', async() => {
        const datatable = await vlDataTablePage.getDataTableLinedJoinRowTitles();
        await assert.eventually.isTrue(datatable.isLined());
        await assert.eventually.isFalse(datatable.isMatrix());
        await assert.eventually.isFalse(datatable.isHover());
        await assert.eventually.isFalse(datatable.isZebra());
    });


    it('Als gebruiker zie ik de lijnen in een afwisselende kleur', async() => {
        const datatable = await vlDataTablePage.getDataTableZebra();
        await assert.eventually.isTrue(datatable.isZebra());
        await assert.eventually.isFalse(datatable.isMatrix());
        await assert.eventually.isFalse(datatable.isHover());
        await assert.eventually.isFalse(datatable.isLined());
    })

    after(async () => {
        return driver.quit();
    });
});

