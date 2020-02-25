const { assert, driver } = require('vl-ui-core').Test.Setup;
const VlDataTablePage = require('./pages/vl-data-table.page');

describe('vl-data-table', async () => {
    const vlDataTablePage = new VlDataTablePage(driver);

    before(() => {
        return vlDataTablePage.load();
    });

    it('Dummy test om de browsers te laten sluiten', () => {
    	assert.isTrue(true);
    });
});

