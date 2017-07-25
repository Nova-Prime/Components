import { concat } from 'rxjs/operator/concat';
const dev = 'dev';
function checkEnv() {
    if (dev === 'dev') {
        return envxx;
    } else {
        return envx;
    }
};

const envxx = {
    Url: 'https://jsonplaceholder.typicode.com'
}
const envx = {
    Url: 'http://www.facebook.com'
}

export const env = checkEnv();

export class GlobalConfiguration {
    public env = {
        Url: 'http://www.facebook.com'
    };
}

