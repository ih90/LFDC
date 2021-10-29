import * as fs from 'fs';
import { splitProgram, splitByLine } from "./utils/splitProgram.js";
import { classification } from "./utils/classification.js";
import SymbolTable from "../SymbolTableRepository/HashTableRepo.js";
import ProgramInternalForm from "../SymbolTableRepository/ProgramInternalForm.js";
import { writeToFile } from "./utils/writeToFile.js";

const scanner = async () => {

    const err = fs.readFileSync('src/miniPrograms/err.txt', 'utf8');
    const p1 = fs.readFileSync('src/miniPrograms/p1.txt', 'utf8');
    const p2 = fs.readFileSync('src/miniPrograms/p2.txt', 'utf8');
    const p3 = fs.readFileSync('src/miniPrograms/p3.txt', 'utf8');
    const outNames = ['err', 'p1', 'p2', 'p3'];
    const files = [err, p1, p2, p3];

    files.forEach((file, fileIndex) => {
        const lines = splitByLine(file);
        const symbolTable = new SymbolTable();
        const programInternalForm = new ProgramInternalForm(symbolTable);
        lines.forEach((line, lineIndex) => {
            const tokensFromLine = splitProgram(line).filter(entry => entry !=='');
            let position = 0;
            tokensFromLine.forEach(token => {
                let type = classification(token, tokensFromLine);
                try {
                    symbolTable.set(token, type);
                    programInternalForm.set(token);
                    position++
                }
                catch (e) {
                    // throw new Error(`${e}, on line ${lineIndex -1}, position: ${line.indexOf(token)}`);
                }
            });
        })
        // update PIF, include separators
        // add exceptions to files
        // add strings
        writeToFile(`PIF_${outNames[fileIndex]}`, programInternalForm.toString());
        writeToFile(`ST_${outNames[fileIndex]}`, symbolTable.toString());
    })


}

export default scanner;