const {assert, getDriver} = require('vl-ui-core').Test.Setup;
const VlDataTablePage = require('./pages/vl-data-table.page');

describe('vl-data-table', async () => {
  let vlDataTablePage;

  before(() => {
    vlDataTablePage = new VlDataTablePage(getDriver());
    return vlDataTablePage.load();
  });

  it('WCAG', async () => {
    await assert.eventually.isFalse(vlDataTablePage.hasWcagIssues());
  });

  it('als gebruiker kan ik de caption van een datatable zien', async () => {
    const datatable = await vlDataTablePage.getDataTableWithHoverLines();
    await assert.eventually.equal(datatable.getCaption(), 'Data table Hover');
  });

  it('als gebruiker kan ik de headers van een datatable zien', async () => {
    const datatable = await vlDataTablePage.getDataTableWithHoverLines();
    const header = await datatable.getHeader();
    const headerRows = await header.getRows();

    await assert.eventually.lengthOf(headerRows[0].getCells(), 4);
    const headerCells = await headerRows[0].getCells();
    await assert.eventually.equal(headerCells[0].getText(), 'Entry Header 1');
    await assert.eventually.equal(headerCells[1].getText(), 'Entry Header 2');
    await assert.eventually.equal(headerCells[2].getText(), 'Entry Header 3');
    await assert.eventually.equal(headerCells[3].getText(), 'Entry Header 4');
    await headerRows[0].assertValues(['Entry Header 1', 'Entry Header 2', 'Entry Header 3', 'Entry Header 4']);
  });

  it('als gebruiker kan ik de columns van een table zien', async () => {
    const datatable = await vlDataTablePage.getDataTableWithHoverLines();
    const body = await datatable.getBody();

    const rows = await body.getRows();

    await assert.eventually.lengthOf(rows[0].getCells(), 4);
    const cellsRow0 = await rows[0].getCells();
    await assert.eventually.equal(cellsRow0[0].getText(), 'Entry line 1');
    await assert.eventually.equal(cellsRow0[1].getText(), 'Entry line 2');
    await assert.eventually.equal(cellsRow0[2].getText(), 'Entry line 3');
    await assert.eventually.equal(cellsRow0[3].getText(), 'Entry line 4');

    await assert.eventually.lengthOf(rows[1].getCells(), 3);
    const cellsRow1 = await rows[1].getCells();
    await assert.eventually.equal(cellsRow1[0].getText(), 'Entry line 1');
    await assert.eventually.equal(cellsRow1[1].getText(), 'Entry line 2');
    await assert.eventually.equal(cellsRow1[2].getText(), 'Entry line 3');

    await assert.eventually.lengthOf(rows[2].getCells(), 4);
    const cellsRow2 = await rows[2].getCells();
    await assert.eventually.equal(cellsRow2[0].getText(), 'Entry line 1');
    await assert.eventually.equal(cellsRow2[1].getText(), 'Entry line 2');
    await assert.eventually.equal(cellsRow2[2].getText(), 'Entry line 3');
    await assert.eventually.equal(cellsRow2[3].getText(), 'Entry line 4');
  });

  it('als gebruiker zie ik het onderscheid tussen een data-table met hover en zonder', async () => {
    const datatableWithHover = await vlDataTablePage.getDataTableWithHoverLines();
    await assert.eventually.isTrue(datatableWithHover.isHover());
    const datatableWithoutHover = await vlDataTablePage.getDataTableMatrix();
    await assert.eventually.isFalse(datatableWithoutHover.isHover());
  });

  it('als gebruiker zie ik het onderscheid tussen een data-table met matrix stijl en zonder', async () => {
    const datatableWithoutMatrix = await vlDataTablePage.getDataTableWithHoverLines();
    await assert.eventually.isFalse(datatableWithoutMatrix.isMatrix());
    const datatableWithMatrix = await vlDataTablePage.getDataTableMatrix();
    await assert.eventually.isTrue(datatableWithMatrix.isMatrix());
  });

  it('als gebruiker zie ik het onderscheid tussen een data-table met lined stijl en zonder', async () => {
    const datatableWithLined = await vlDataTablePage.getDataTableLined();
    await assert.eventually.isTrue(datatableWithLined.isLined());
    const datatableWithoutLined = await vlDataTablePage.getDataTableWithHoverLines();
    await assert.eventually.isFalse(datatableWithoutLined.isLined());
  });

  it('als gebruiker zie ik het onderscheid tussen een data-table met zebra stijl en zonder', async () => {
    const datatableWithZebra = await vlDataTablePage.getDataTableZebra();
    await assert.eventually.isTrue(datatableWithZebra.isZebra());
    const datatableWithoutZebra = await vlDataTablePage.getDataTableWithHoverLines();
    await assert.eventually.isFalse(datatableWithoutZebra.isZebra());
  });

  it('als gebruiker van een datatable zie ik waar er cellen uitgespreid zijn over meerdere rijen of kolommen', async () => {
    const datatable = await vlDataTablePage.getDataTableMatrixJoinedRowTitles();
    const body = await datatable.getBody();
    const rows = await body.getRows();
    const cellsRow0 = await rows[0].getCells();
    await assert.eventually.equal(cellsRow0[0].getRowSpan(), 3);
    await assert.eventually.equal(cellsRow0[0].getScope(), 'rowgroup');
    await assert.eventually.isTrue(cellsRow0[0].isTh());
    await assert.eventually.isFalse(cellsRow0[0].isTd());
    const cellsRow1 = await rows[1].getCells();
    await assert.eventually.equal(cellsRow1[1].getColSpan(), 2);
    await assert.eventually.isFalse(cellsRow1[1].isTh());
    await assert.eventually.isTrue(cellsRow1[1].isTd());
  });

  it('als gebruiker zie ik het onderscheid tussen een collapsed-medium data-table en een zonder', async () => {
    const datatableWithCollapsedMedium = await vlDataTablePage.getDataTableCollapsedMedium();
    await assert.eventually.isTrue(datatableWithCollapsedMedium.isCollapsedMedium());
    const datatableWithoutCollapsedMedium = await vlDataTablePage.getDataTableWithHoverLines();
    await assert.eventually.isFalse(datatableWithoutCollapsedMedium.isCollapsedMedium());
  });

  it('als gebruiker zie ik het onderscheid tussen een collapsed-small data-table en een zonder', async () => {
    const datatableWithCollapsedSmall = await vlDataTablePage.getDataTableCollapsedSmall();
    await assert.eventually.isTrue(datatableWithCollapsedSmall.isCollapsedSmall());
    const datatableWithoutCollapsedSmall = await vlDataTablePage.getDataTableWithHoverLines();
    await assert.eventually.isFalse(datatableWithoutCollapsedSmall.isCollapsedSmall());
  });

  it('als gebruiker zie ik het onderscheid tussen een collapsed-extra-small data-table en een zonder', async () => {
    const datatableWithCollapsedExtraSmall = await vlDataTablePage.getDataTableCollapsedExtraSmall();
    await assert.eventually.isTrue(datatableWithCollapsedExtraSmall.isCollapsedExtraSmall());
    const datatableWithoutCollapsedExtraSmall = await vlDataTablePage.getDataTableWithHoverLines();
    await assert.eventually.isFalse(datatableWithoutCollapsedExtraSmall.isCollapsedExtraSmall());
  });
});

