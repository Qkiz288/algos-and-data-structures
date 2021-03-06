module.exports.singlePlusMinusOperationData = [
    {num1: 1.25, num2: 2, operator: "+", expectedResult: 3.25},
    {num1: 10.5, num2: 2, operator: "+", expectedResult: 12.5},
    {num1: 1, num2: 20, operator: "+", expectedResult: 21},
    {num1: -1, num2: 2, operator: "+", expectedResult: 1},
    {num1: -10, num2: 2, operator: "+", expectedResult: -8},
    {num1: -1, num2: 20, operator: "+", expectedResult: 19},
    {num1: 1, num2: 2.5, operator: "-", expectedResult: -1.5},
    {num1: 10, num2: 2, operator: "-", expectedResult: 8},
    {num1: 1, num2: 20, operator: "-", expectedResult: -19},
    {num1: -1, num2: 2, operator: "-", expectedResult: -3},
    {num1: -10, num2: 2, operator: "-", expectedResult: -12},
    {num1: -1, num2: 20, operator: "-", expectedResult: -21},
    {num1: 0, num2: 0, operator: "-", expectedResult: 0},
    {num1: 00, num2: 0, operator: "-", expectedResult: 0},
    {num1: 0, num2: 00, operator: "-", expectedResult: 0},
    {num1: 0, num2: 0, operator: "+", expectedResult: 0},
    {num1: 00, num2: 0, operator: "+", expectedResult: 0},
    {num1: 0, num2: 00, operator: "+", expectedResult: 0},
];

module.exports.doublePlusMinusOperationData = [
    {num1: 1, num2: 2.2, num3: 3, operator1: "+", operator2: "+", expectedResult: 6.2},
    {num1: 10, num2: 2, num3: 3, operator1: "+", operator2: "+", expectedResult: 15},
    {num1: 1, num2: 20, num3: 3, operator1: "+", operator2: "+", expectedResult: 24},
    {num1: 1, num2: 2, num3: 30, operator1: "+", operator2: "+", expectedResult: 33},
    {num1: -1, num2: 2, num3: 3, operator1: "+", operator2: "+", expectedResult: 4},
    {num1: -10.5, num2: 2, num3: 3, operator1: "+", operator2: "+", expectedResult: -5.5},
    {num1: -1, num2: 20, num3: 3, operator1: "+", operator2: "+", expectedResult: 22},
    {num1: -1, num2: 2, num3: 30, operator1: "+", operator2: "+", expectedResult: 31},
    {num1: 1, num2: 2, num3: 3, operator1: "-", operator2: "-", expectedResult: -4},
    {num1: 10, num2: 2, num3: 3, operator1: "-", operator2: "-", expectedResult: 5},
    {num1: 1, num2: 20, num3: 3, operator1: "-", operator2: "-", expectedResult: -22},
    {num1: 1, num2: 2, num3: 30.5, operator1: "-", operator2: "-", expectedResult: -31.5},
    {num1: -1, num2: 2, num3: 3, operator1: "-", operator2: "-", expectedResult: -6},
    {num1: -10, num2: 2, num3: 3, operator1: "-", operator2: "-", expectedResult: -15},
    {num1: -1, num2: 20, num3: 3, operator1: "-", operator2: "-", expectedResult: -24},
    {num1: -1, num2: 2, num3: 30, operator1: "-", operator2: "-", expectedResult: -33},
    {num1: 0, num2: 0, num3: 0, operator1: "-", operator2: "-", expectedResult: 0},
    {num1: 00, num2: 0, num3: 0, operator1: "-", operator2: "-", expectedResult: 0},
    {num1: 0, num2: 00, num3: 0, operator1: "-", operator2: "-", expectedResult: 0},
    {num1: 0, num2: 0, num3: 00, operator1: "-", operator2: "-", expectedResult: 0},
    {num1: 0, num2: 0, num3: 0, operator1: "+", operator2: "+", expectedResult: 0},
    {num1: 00, num2: 0, num3: 0, operator1: "+", operator2: "+", expectedResult: 0},
    {num1: 0, num2: 00, num3: 0, operator1: "+", operator2: "+", expectedResult: 0},
    {num1: 0, num2: 0, num3: 00, operator1: "+", operator2: "+", expectedResult: 0},
    {num1: 1, num2: 2, num3: 3, operator1: "+", operator2: "-", expectedResult: 0},
    {num1: 10, num2: 2, num3: 3, operator1: "+", operator2: "-", expectedResult: 9},
    {num1: 1, num2: 20, num3: 3, operator1: "+", operator2: "-", expectedResult: 18},
    {num1: 1, num2: 2, num3: 30, operator1: "+", operator2: "-", expectedResult: -27},
    {num1: -1, num2: 2, num3: 3, operator1: "+", operator2: "-", expectedResult: -2},
    {num1: -10, num2: 2, num3: 3, operator1: "+", operator2: "-", expectedResult: -11},
    {num1: -1, num2: 20, num3: 3, operator1: "+", operator2: "-", expectedResult: 16},
    {num1: -1, num2: 2, num3: 30, operator1: "+", operator2: "-", expectedResult: -29},
    {num1: 1, num2: 2, num3: 3, operator1: "-", operator2: "+", expectedResult: 2},
    {num1: 10, num2: 2, num3: 3, operator1: "-", operator2: "+", expectedResult: 11},
    {num1: 1, num2: 20, num3: 3, operator1: "-", operator2: "+", expectedResult: -16},
    {num1: 1, num2: 2, num3: 30, operator1: "-", operator2: "+", expectedResult: 29},
    {num1: -1, num2: 2, num3: 3, operator1: "-", operator2: "+", expectedResult: 0},
    {num1: -10, num2: 2, num3: 3, operator1: "-", operator2: "+", expectedResult: -9},
    {num1: -1, num2: 20, num3: 3, operator1: "-", operator2: "+", expectedResult: -18},
    {num1: -1, num2: 2, num3: 30, operator1: "-", operator2: "+", expectedResult: 27},
];

module.exports.triplePlusMinusOperationData = [
    {num1: 1, num2: 2, num3: 3, num4: 4, operator1: "+", operator2: "+", operator3: "+", expectedResult: 10},
    {num1: -1, num2: 2, num3: 3, num4: 4, operator1: "+", operator2: "+", operator3: "+", expectedResult: 8},
    {num1: 1, num2: 2, num3: 3, num4: 4, operator1: "-", operator2: "+", operator3: "+", expectedResult: 6},
    {num1: -1, num2: 2, num3: 3, num4: 4, operator1: "-", operator2: "+", operator3: "+", expectedResult: 4},
    {num1: 1, num2: 2, num3: 3, num4: 4, operator1: "+", operator2: "-", operator3: "+", expectedResult: 4},
    {num1: -1, num2: 2, num3: 3, num4: 4, operator1: "+", operator2: "-", operator3: "+", expectedResult: 2},
    {num1: 1, num2: 2, num3: 3, num4: 4, operator1: "+", operator2: "+", operator3: "-", expectedResult: 2},
    {num1: -1, num2: 2, num3: 3, num4: 4, operator1: "+", operator2: "+", operator3: "-", expectedResult: 0},
    {num1: 1, num2: 2, num3: 3, num4: 4, operator1: "-", operator2: "-", operator3: "+", expectedResult: 0},
    {num1: -1, num2: 2, num3: 3, num4: 4, operator1: "-", operator2: "-", operator3: "+", expectedResult: -2},
    {num1: 1, num2: 2, num3: 3, num4: 4, operator1: "-", operator2: "+", operator3: "-", expectedResult: -2},
    {num1: -1, num2: 2, num3: 3, num4: 4, operator1: "-", operator2: "+", operator3: "-", expectedResult: -4},
    {num1: 1, num2: 2, num3: 3, num4: 4, operator1: "+", operator2: "-", operator3: "-", expectedResult: -4},
    {num1: -1, num2: 2, num3: 3, num4: 4, operator1: "+", operator2: "-", operator3: "-", expectedResult: -6},
    {num1: 1, num2: 2, num3: 3, num4: 4, operator1: "-", operator2: "-", operator3: "-", expectedResult: -8},
    {num1: -1, num2: 2, num3: 3, num4: 4, operator1: "-", operator2: "-", operator3: "-", expectedResult: -10},
    {num1: 0, num2: 0, num3: 0, num4: 0, operator1: "+", operator2: "+", operator3: "+", expectedResult: 0},
    {num1: 0, num2: 0, num3: 0, num4: 0, operator1: "-", operator2: "-", operator3: "-", expectedResult: 0},
];

module.exports.singleMultiplyDivideOperationData = [
    {num1: 1.5, num2: 2, operator: "*", expectedResult: 3}, 
    {num1: -1, num2: 2, operator: "*", expectedResult: -2},   
    {num1: 10, num2: 2, operator: "*", expectedResult: 20}, 
    {num1: -10, num2: 2, operator: "*", expectedResult: -20},
    {num1: 1, num2: 20, operator: "*", expectedResult: 20},
    {num1: -1.5, num2: 20, operator: "*", expectedResult: -30},

    {num1: 1, num2: 2, operator: "/", expectedResult: 0.5}, 
    {num1: -1, num2: 2, operator: "/", expectedResult: -0.5},   
    {num1: 10, num2: 2, operator: "/", expectedResult: 5}, 
    {num1: -10, num2: 2, operator: "/", expectedResult: -5},
    {num1: 1, num2: 20, operator: "/", expectedResult: 0.05},
    {num1: -1, num2: 20, operator: "/", expectedResult: -0.05},

    {num1: 0, num2: 999, operator: "*", expectedResult: 0},
    {num1: 0, num2: 999, operator: "/", expectedResult: 0},
];

module.exports.doubleMultiplyDivideOperationData = [
    {num1: 1, num2: 2, num3: 3, operator1: "*", operator2: "*", expectedResult: 6},
    {num1: 10, num2: 2, num3: 3, operator1: "*", operator2: "*", expectedResult: 60},
    {num1: 1, num2: 20, num3: 3, operator1: "*", operator2: "*", expectedResult: 60},
    {num1: 1, num2: 2.5, num3: 30, operator1: "*", operator2: "*", expectedResult: 75},

    {num1: 1, num2: 2, num3: 4, operator1: "*", operator2: "/", expectedResult: 0.5},
    {num1: 10, num2: 2, num3: 4, operator1: "*", operator2: "/", expectedResult: 5},
    {num1: 1.5, num2: 20, num3: 4, operator1: "*", operator2: "/", expectedResult: 7.5},
    {num1: 1, num2: 2, num3: 10, operator1: "*", operator2: "/", expectedResult: 0.2},

    {num1: 1, num2: 2, num3: 4, operator1: "/", operator2: "*", expectedResult: 2},
    {num1: 10, num2: 2.5, num3: 4, operator1: "/", operator2: "*", expectedResult: 16},
    {num1: 1, num2: 20, num3: 4, operator1: "/", operator2: "*", expectedResult: 0.2},
    {num1: 1, num2: 2, num3: 10, operator1: "/", operator2: "*", expectedResult: 5},

    {num1: 1, num2: 4, num3: 4, operator1: "/", operator2: "/", expectedResult: 0.0625},
    {num1: 10, num2: 2, num3: 4, operator1: "/", operator2: "/", expectedResult: 1.25},
    {num1: 1, num2: 20, num3: 4, operator1: "/", operator2: "/", expectedResult: 0.0125},
    {num1: 1, num2: 2, num3: 10, operator1: "/", operator2: "/", expectedResult: 0.05},
];

module.exports.doubleMixedOperationData = [
    {num1: 1.5, num2: 2, num3: 3, operator1: "+", operator2: "*", expectedResult: 7.5},
    {num1: 1, num2: 2, num3: 3.5, operator1: "-", operator2: "*", expectedResult: -6},
    {num1: 1, num2: 2, num3: 3.5, operator1: "*", operator2: "+", expectedResult: 5.5},
    {num1: 1, num2: 2, num3: 3.5, operator1: "*", operator2: "-", expectedResult: -1.5},

    {num1: -1, num2: 2, num3: 3, operator1: "+", operator2: "*", expectedResult: 5},
    {num1: -1, num2: 2, num3: 3, operator1: "-", operator2: "*", expectedResult: -7},
    {num1: -1, num2: 2, num3: 3, operator1: "*", operator2: "+", expectedResult: 1},
    {num1: -1, num2: 2, num3: 3, operator1: "*", operator2: "-", expectedResult: -5},

    {num1: 1, num2: 2, num3: 4, operator1: "+", operator2: "/", expectedResult: 1.5},
    {num1: 1, num2: 2, num3: 4, operator1: "-", operator2: "/", expectedResult: 0.5},
    {num1: 1, num2: 2, num3: 3, operator1: "/", operator2: "+", expectedResult: 3.5},
    {num1: 1, num2: 2, num3: 3, operator1: "/", operator2: "-", expectedResult: -2.5},

    {num1: -1, num2: 2, num3: 4, operator1: "+", operator2: "/", expectedResult: -0.5},
    {num1: -1, num2: 2, num3: 4, operator1: "-", operator2: "/", expectedResult: -1.5},
    {num1: -1, num2: 2, num3: 3, operator1: "/", operator2: "+", expectedResult: 2.5},
    {num1: -1, num2: 2, num3: 3, operator1: "/", operator2: "-", expectedResult: -3.5},
];

module.exports.parenthesisOperationData = [
    {expression: "2.5*(3+4)", expectedResult: 17.5},
    {expression: "2.5/(7+3)", expectedResult: 0.25},
    {expression: "2.5+(3+4)", expectedResult: 9.5},
    {expression: "2.5-(3+4)", expectedResult: -4.5},

    {expression: "2*(3-4)", expectedResult: -2},
    {expression: "2/(7-3)", expectedResult: 0.5},
    {expression: "2+(3-4)", expectedResult: 1},
    {expression: "2-(3-4)", expectedResult: 3},

    {expression: "2*(3*4)", expectedResult: 24},
    {expression: "21/(7*3)", expectedResult: 1},
    {expression: "2+(3*4)", expectedResult: 14},
    {expression: "2-(3*4)", expectedResult: -10},

    {expression: "2*(12/4)", expectedResult: 6},
    {expression: "5/(5/2)", expectedResult: 2},
    {expression: "2+(3/4)", expectedResult: 2.75},
    {expression: "2-(3/4)", expectedResult: 1.25},

    {expression: "2*(3+4+(1+2))", expectedResult: 20},
    {expression: "2/(7+3-(2+3))", expectedResult: 0.4},
    {expression: "2+(3+4*(1+2))", expectedResult: 17},
    {expression: "2-(3+4/(4+4))", expectedResult: -1.5},

    {expression: "2*(3-4+(1+2))", expectedResult: 4},
    {expression: "2/(7-3-(1+2))", expectedResult: 2},
    {expression: "2+(3-4*(1+2))", expectedResult: -7},
    {expression: "2-(3-4/(1+3))", expectedResult: 0},

    {expression: "2*(3*4+(1+2))", expectedResult: 30},
    {expression: "18/(7*3-(1+2))", expectedResult: 1},
    {expression: "2+(3*4*(1+2))", expectedResult: 38},
    {expression: "2-(3*4/(1+2))", expectedResult: -2},

    {expression: "2*(12/4+(1+2))", expectedResult: 12},
    {expression: "2/(5/2-(1+2))", expectedResult: -4},
    {expression: "2+(3/4*(1+2))", expectedResult: 4.25},
    {expression: "2-(3/4/(1+2))", expectedResult: 1.75},

    {expression: "-1*(0.5+2.5)+2*(1+2)", expectedResult: 3},
    {expression: "-1*(0.5+2.5)-2*(1+2)", expectedResult: -9},
    {expression: "-1*(0.5+2.5)*2*(1+2)", expectedResult: -18},
    {expression: "-1*(0.5+2.5)/2*(1+2)", expectedResult: -4.5},

    {expression: "(1+2)+(3+4)", expectedResult: 10},
    {expression: "-(1+2)+(3+4)", expectedResult: 4},
    {expression: "(1+2)-(3+4)", expectedResult: -4},
    {expression: "-(1+2)-(3+4)", expectedResult: -10},
    {expression: "(1+2)*(3+4)", expectedResult: 21},
    {expression: "-(1+2)*(3+4)", expectedResult: -21},
    {expression: "(1+3)/(3+5)", expectedResult: 0.5},
    {expression: "-(1+3)/(3+5)", expectedResult: -0.5},
];

module.exports.caretOperationData = [
    {expression: "2^2", expectedResult: 4},
    {expression: "2^(-2)", expectedResult: 0.25},
    {expression: "2^(2^2)", expectedResult: 16},
    {expression: "(2+2)^2", expectedResult: 16},
    {expression: "(2+2)^(0.5+1.5)", expectedResult: 16},
    {expression: "(2+2)^(3-1)", expectedResult: 16},
    {expression: "(2+2)^(2*1)", expectedResult: 16},
    {expression: "(2+2)^(4/2)", expectedResult: 16},
    {expression: "2^(1+2)+2", expectedResult: 10},
    {expression: "2^(1-2)*2", expectedResult: 1},
    {expression: "2^(2*2)-2", expectedResult: 14},
    {expression: "4^(1/2)/2", expectedResult: 1},
    {expression: "1+3*2-2^2*0", expectedResult: 7},
    {expression: "(2^(15-(4^2))*2^(1+100^(16-4^2)))/0.5", expectedResult: 4}
];