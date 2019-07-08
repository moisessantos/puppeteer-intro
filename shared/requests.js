import axios from 'axios';
import { mockServerUrl } from './';

let singletonAxios = null;

export const getAxios = () => {
    if (singletonAxios === null) {
        singletonAxios = axios.create({
            baseURL: mockServerUrl,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                Expires: 0,
                'If-Modified-Since': '0',
                'Content-Type': 'text/html; charset=utf-8',
            },
            timeout: 10000,
        });
    }

    return singletonAxios;
};
