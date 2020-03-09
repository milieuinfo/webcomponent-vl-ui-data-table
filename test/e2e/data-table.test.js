const { assert, driver } = require('vl-ui-core').Test.Setup;
const VlDataTablePage = require('./pages/vl-data-table.page');

describe('vl-data-table', async () => {
	const vlDataTablePage = new VlDataTablePage(driver);

	before(() => {
		return vlDataTablePage.load();
	});

	it('Als gebruiker kan ik de caption van een datatable zien', async() => {
		const datatable = await vlDataTablePage.getDataTableWithHoverLines();
		await assert.eventually.equal(datatable.getCaption(), "Data table Hover");
	});

	it('Als gebruiker kan ik de headers van een datatable zien', async() => {
		const datatable = await vlDataTablePage.getDataTableWithHoverLines();
		const header = await datatable.getDataTableHeader();
		const headerRow = await header.getRow();

		await assert.eventually.equal(headerRow.getNumberOfCells(), 4);
		const headerCells = await headerRow.getCells();
		await assert.eventually.equal(headerCells[0].getText(), "Entry Header 1");
		await assert.eventually.equal(headerCells[1].getText(), "Entry Header 2");
		await assert.eventually.equal(headerCells[2].getText(), "Entry Header 3");
		await assert.eventually.equal(headerCells[3].getText(), "Entry Header 4");
	});

	it('De gebruiker kan de columns van een table zien', async() => {
		const datatable = await vlDataTablePage.getDataTableWithHoverLines();
		const body = await datatable.getDataTableBody();

		const rows = await body.getRows();

		await assert.eventually.equal(rows[0].getNumberOfCells(), 4);
		const cellsRow0 = await rows[0].getCells();
		await assert.eventually.equal(cellsRow0[0].getText(), "Entry line 1");
		await assert.eventually.equal(cellsRow0[1].getText(), "Entry line 2");
		await assert.eventually.equal(cellsRow0[2].getText(), "Entry line 3");
		await assert.eventually.equal(cellsRow0[3].getText(), "Entry line 4");

		await assert.eventually.equal(rows[1].getNumberOfCells(), 3);
		const cellsRow1 = await rows[1].getCells();
		await assert.eventually.equal(cellsRow1[0].getText(), "Entry line 1");
		await assert.eventually.equal(cellsRow1[1].getText(), "Entry line 2");
		await assert.eventually.equal(cellsRow1[2].getText(), "Entry line 3");

		await assert.eventually.equal(rows[2].getNumberOfCells(), 4);
		const cellsRow2 = await rows[2].getCells();
		await assert.eventually.equal(cellsRow2[0].getText(), "Entry line 1");
		await assert.eventually.equal(cellsRow2[1].getText(), "Entry line 2");
		await assert.eventually.equal(cellsRow2[2].getText(), "Entry line 3");
		await assert.eventually.equal(cellsRow2[3].getText(), "Entry line 4");
	});

	it('Als gebruiker zie ik het onderscheid tussen een data-table met hover en zonder', async() => {
		const datatableWithHover = await vlDataTablePage.getDataTableWithHoverLines();
		await assert.eventually.isTrue(datatableWithHover.isHover());
		const datatableWithoutHover = await vlDataTablePage.getDataTableMatrix();
		await assert.eventually.isFalse(datatableWithoutHover.isHover());
	});

	it('Als gebruiker zie ik het onderscheid tussen een data-table met matrix stijl en zonder', async() => {
		const datatableWithoutMatrix = await vlDataTablePage.getDataTableWithHoverLines();
		await assert.eventually.isFalse(datatableWithoutMatrix.isMatrix());
		const datatableWithMatrix = await vlDataTablePage.getDataTableMatrix();
		await assert.eventually.isTrue(datatableWithMatrix.isMatrix());
	});

	it('Als gebruiker zie ik het onderscheid tussen een data-table met lined stijl en zonder', async() => {
		const datatableWithLined = await vlDataTablePage.getDataTableLined();
		await assert.eventually.isTrue(datatableWithLined.isLined());
		const datatableWithoutLined = await vlDataTablePage.getDataTableWithHoverLines();
		await assert.eventually.isFalse(datatableWithoutLined.isLined());
	});

	it('Als gebruiker zie ik het onderscheid tussen een data-table met zebra stijl en zonder', async() => {
		const datatableWithZebra = await vlDataTablePage.getDataTableZebra();
		await assert.eventually.isTrue(datatableWithZebra.isZebra());
		const datatableWithoutZebra = await vlDataTablePage.getDataTableWithHoverLines();
		await assert.eventually.isFalse(datatableWithoutZebra.isZebra());
	});

	it('Als gebruiker van een datatable zie ik waar er cellen uitgespreid zijn over meerdere rijen of kolommen', async() => {
		const datatable = await vlDataTablePage.getDataTableMatrixJoinedRowTitles();
		const body = await datatable.getDataTableBody();
		const rows = await body.getRows();
		const cellsRow0 = await rows[0].getCells();
		await assert.eventually.equal(cellsRow0[0].rowSpan(), 3);
		await assert.eventually.equal(cellsRow0[0].scope(), "rowgroup");
		await assert.eventually.isTrue(cellsRow0[0].isTh());
		await assert.eventually.isFalse(cellsRow0[0].isTd());
		const cellsRow1 = await rows[1].getCells();
		await assert.eventually.equal(cellsRow1[1].colSpan(), 2);
		await assert.eventually.equal(cellsRow1[1].scope(), "colgroup");
		await assert.eventually.isFalse(cellsRow1[1].isTh());
		await assert.eventually.isTrue(cellsRow1[1].isTd());
	});

});

