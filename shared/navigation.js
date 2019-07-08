import puppeteer from 'puppeteer';
import { mockUrl, getAxios } from '../shared/';

export const mockData = (data) =>
    new Promise((resolve, reject) => {
        const url = mockUrl(data);

        getAxios().post(url)
            .then((response) => resolve(response.data))
            .catch((ex) => {
                console.error(ex);

                return reject(ex);
            });
    });

export const navigateTo = (url, browser = null) => new Promise(async (resolve, reject) => {
    try {
        const newBrowser = browser || await puppeteer.launch({
            headless: false,
        });
        const page = await newBrowser.newPage();

        await page.setViewport({ width: 1000, height: 500 });

        await page.goto(url);

        return resolve(page);
    } catch (ex) {
        reject(ex);
    }
});

export const end = async (page) => Promise.resolve(await (await page.browser()).close());
