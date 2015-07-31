require('babel/register')({
    "modules": "common",
    "optional": [
        "es7.trailingFunctionCommas",
        "es7.objectRestSpread",
        "strict"
    ],
    "loose": [
        "es6.modules",
        "es6.classes",
        "es6.arrowFunctions"
    ]
});