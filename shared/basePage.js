export class BasePage {
    constructor(browser) {
        this.browser = browser;
    }

    goTo(uri) {
        this.browser.url(uri);
    }

    setOrUpdateCookie(cookieName, cookieValue) {
        let currentCookie = this.browser.getCookie(cookieName);

        if (currentCookie != null) {
            currentCookie.value = currentCookie.value + cookieValue;
        } else {
            currentCookie = { name: cookieName, value: cookieValue };
        }

        this.browser.setCookie(currentCookie);
    }
}
