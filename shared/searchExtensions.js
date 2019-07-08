export const findElementsByTestAttribute = (webElement, dataTest, testAttrName = 'data-tstid') => {
    const selector = `[${testAttrName}="${dataTest}"]`;

    return findElementsBySelector(webElement, selector);
};

export const findElementsBySelector = (webElement, selector) => {
    webElement.waitForExist(selector, 3000);

    return webElement.elements(selector);
};

export const findElementBySelector = (webElement, selector) =>
    findElementsBySelector(webElement, selector)[0];

export const findElementByTestAttribute = (webElement, testAttrName, dataTest) =>
    findElementsByTestAttribute(webElement, testAttrName, dataTest)[0];
