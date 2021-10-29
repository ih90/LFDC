import * as fs from 'fs';

export const readFile = async (path) => {
    fs.readFile(path, 'utf8' , (err, data) => {
        if (err) {
            throw new Error('Error reading file');
        }
        return data;
    })
}


