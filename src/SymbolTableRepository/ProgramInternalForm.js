import { writeToFile } from "../scanner/utils/writeToFile.js";

class ProgramInternalForm {

    constructor(symbolTable) {
        this.pif = [];
        this.symbolTable = symbolTable;
    }

    set = (key) => {
        const index = this.symbolTable.hash(key);
        if (this.symbolTable.isAvailable(key)){
            this.pif.push([key, index]);
        } else {
            this.pif.push([key, -1]);
        }

    }

    toString = () => {
        let string = '';
        this.pif.forEach(entry => {
            string += `${entry} \n`;
        });
        return string;
    }
}


export default ProgramInternalForm;


