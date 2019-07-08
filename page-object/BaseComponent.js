export default class BaseComponent {
    constructor(page, selector) {
        this.page = page;
        this.selector = selector;
    }

    async isVisible() {
        return Promise.resolve(await this.page.$eval(this.selector, (element) => {
            const computedStyles = window.getComputedStyle(element);

            return Promise.resolve(
                !!(computedStyles.getPropertyValue('display') !== 'none' &&
                element.offsetHeight &&
                computedStyles.getPropertyValue('zIndex') !== -1));
        }));
    }
}
