import { arithmeticOperators, reservedWords, constants, relationshipOperators, identifierRegex } from "../tokens.js";

export const isReservedWord = (string) => {
    return reservedWords.includes(string);
}

export const isArithmeticOperator = (string) => {
    return arithmeticOperators.includes(string);
}

export const isRelationshipOperator = (string) => {
    return relationshipOperators.includes(string);
}

export const anyReservedWord = (string) => {
    return isReservedWord(string) || isArithmeticOperator(string) || isRelationshipOperator(string);
}

// export const isConstant = (items, string) => {
//     const regex = new RegExp(identifierRegex);
//     if (regex.test(string)) {
//         if (items[items -1] === 'let' || items[items -1] === 'function'){
//             console.log(`${entry} -> constant`);
//             return
//         }
//         console.log(`${entry} -> identifier`);
//         return
//     }
// }

export const classification = (token, line) => {
        if (isArithmeticOperator(token)){
            return 'arithmeticOperators';
        }
        if (isReservedWord(token)){
            return 'reservedWords';
        }
        if (isRelationshipOperator(token)){
            return relationshipOperators;
        }
        const regex = new RegExp(identifierRegex);
        if (regex.test(token)) {
            const indexOfToken = line.indexOf(token);
            if (line[indexOfToken -1] === 'let' || line[indexOfToken -1] === 'function'){
                return 'constant'
            }
            return 'identifier';
        }

        return 'unknown'
}