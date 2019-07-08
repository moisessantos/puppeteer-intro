import * as steps from '../steps';
import { LoginPage } from '../page-object';

describe('My functional tests', () => {
    it('should render an header and a login form', async () => {
        try {
            const page = await steps.goToFacebook();

            const loginPage = new LoginPage(page);

            expect.assertions(1);

            expect(await loginPage.isHeaderVisible()).toBe(true);

            await steps.endTest(page);
        } catch (ex) { throw ex; }
    }, 10000);
});
