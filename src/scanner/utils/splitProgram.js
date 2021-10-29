export const splitProgram = (program) => {
    // add separators in pif
    const separators = ['(',')','{','}',' ',',',';'];
    const tempChar = separators[0];
    for(let i = 1; i < separators.length; i++){
        program = program.split(separators[i]).join(tempChar);
    }
    program = program.split(tempChar);
    return program;
};

export const splitByLine = (program) => {
    return program.split("\n");
}