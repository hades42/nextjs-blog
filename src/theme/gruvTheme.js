"use strict";

var theme = {
    plain: {
        color: "#fbf1c7" /* fg0 */,
        backgroundColor: "#7c6f64" /* bg4 */,
    },
    styles: [
        {
            types: ["changed"],
            style: {
                fontStyle: "italic",
            },
        },
        {
            types: ["deleted"],
            style: {
                background: "#fb4934" /* red2 */,
            },
        },
        {
            types: ["inserted", "attr-name"],
            style: {
                color: "rgb(173, 219, 103)",
                fontStyle: "italic",
            },
        },
        {
            types: ["comment"],
            style: {
                color: "rgb(99, 119, 119)",
                fontStyle: "italic",
            },
        },
        {
            types: ["string", "url"],
            style: {
                color: "rgb(173, 219, 103)",
            },
        },
        {
            types: ["variable"],
            style: {
                color: "rgb(214, 222, 235)",
            },
        },
        {
            types: ["number"],
            style: {
                color: "rgb(247, 140, 108)",
            },
        },
        {
            types: ["builtin", "char", "constant", "function"],
            style: {
                color: "rgb(130, 170, 255)",
            },
        },
        {
            // This was manually added after the auto-generation
            // so that punctuations are not italicised
            types: ["punctuation"],
            style: {
                color: "rgb(199, 146, 234)",
            },
        },
        {
            types: ["selector", "doctype"],
            style: {
                color: "rgb(199, 146, 234)",
                fontStyle: "italic",
            },
        },
        {
            types: ["class-name"],
            style: {
                color: "rgb(255, 203, 139)",
            },
        },
        {
            types: ["tag", "operator", "keyword"],
            style: {
                color: "rgb(127, 219, 202)",
            },
        },
        {
            types: ["boolean"],
            style: {
                color: "rgb(255, 88, 116)",
            },
        },
        {
            types: ["property"],
            style: {
                color: "rgb(128, 203, 196)",
            },
        },
        {
            types: ["namespace"],
            style: {
                color: "rgb(178, 204, 214)",
            },
        },
    ],
};

module.exports = theme;
