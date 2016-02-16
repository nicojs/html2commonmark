import describeBackAndForth  from '../describe-back-and-forth';
import JSDomParser  from '../../../src/JSDomParser';
import * as fs from 'fs';

describeBackAndForth('From nodejs', new JSDomParser(), (url: string) => new Promise<string>( (resolve, reject) => { 
    fs.readFile('./' + url, 'utf8', (error, result) => {
            if(error){
                reject(error);
            }
            resolve(result);
        });
}));
