import * as fs from 'fs';

export const writeToFile = (path, content) => {
    fs.appendFileSync(`/Users/horatiu/PhpstormProjects/compiler/src/out/${path}`, content, err => {
        if (err) {
            console.error(err)
            return
        }
        console.log('FINISHED WRITING');
    })
}


