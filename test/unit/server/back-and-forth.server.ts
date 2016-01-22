import describeBackAndForth = require('../describe-back-and-forth');
import JSDomParser = require('../../../src/JSDomParser');
import fs = require('fs');

describeBackAndForth('From nodejs', new JSDomParser(), [ {description: 'readme.md', content: new Promise<string>( (resolve, reject) => { 
    fs.readFile('./readme.md', 'utf8', (error, result) => {
            if(error){
                reject(error);
            }
            resolve(result);
        });
})} ]);
