import describeBackAndForth from '../describe-back-and-forth';
import BrowserParser from '../../../src/BrowserParser';

let retrieveFromServer: (url: string) => Promise<string> = (url: string) => {

    var resolve: (value?: string | Thenable<string>) => any, reject: (err: any) => void;
    var promise = new Promise<string>((res, rej) => {
        resolve = res;
        reject = rej;
    });
    var fileRequest = new XMLHttpRequest();
    fileRequest.open("GET", url, true);
    fileRequest.onload = function() {
        if (fileRequest.status === 200) {
            resolve(fileRequest.responseText);
        } else {
            reject(new Error(`http GET to ${url} resulted in ${fileRequest.status}`));
        }
    }
    fileRequest.send();

    return promise;
};


describeBackAndForth('From browser', new BrowserParser(), [{ description: 'readme.md', content: retrieveFromServer('base/readme.md') }]);
