const tokenTypes = {
    arithmeticOperator: 'arithmeticOp',
    relationshipOperator: 'relationshipOp',
    reservedWord: 'reservedWords',
    constant: 'constant',
}

export const arithmeticOperators =
    [
        '+',
        '-',
        '*',
        '/',
        '++',
    ];

export const relationshipOperators =
    [
        '=',
        '===',
        '<',
        '>',
        '++',
    ]

export const reservedWords = ['function', 'if', 'for', 'let', 'return'];

export const constants = [
    'numberConstant',
    'stringConstant',
]



export const identifierRegex = `^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$`