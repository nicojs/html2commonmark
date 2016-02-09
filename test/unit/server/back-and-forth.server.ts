import describeBackAndForth  from '../describe-back-and-forth';
import JSDomParser  from '../../../src/JSDomParser';
import * as fs from 'fs';

describeBackAndForth('From nodejs', new JSDomParser(), [ {description: 'readme.md', content: new Promise<string>( (resolve, reject) => { 
    fs.readFile('./readme.md', 'utf8', (error, result) => {
            if(error){
                reject(error);
            }
            resolve(result);
        });
})} ]);
