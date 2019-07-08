import { BaseComponent } from '.';

export default class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async isHeaderVisible() {
        const header = new BaseComponent(this.page, '#pagelet_bluebar');
        return Promise.resolve(await header.isVisible());
    }

    async loginForm() {
        const [email, password] = await this.page.$$("#login_form input:not([type='hidden'])")
        return Promise.resolve({ email, password });
    }
}
