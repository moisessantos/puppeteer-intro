import { navigateTo, end } from '../shared/';

export const goToFacebook = (browser = null) => navigateTo('https://www.facebook.com', browser);

export const endTest = async (page) => Promise.resolve(await end(page));
