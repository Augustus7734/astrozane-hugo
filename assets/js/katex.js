// astrozane.com override of the Poison theme's assets/js/katex.js.
//
// The stock file treats any text between two single dollar signs as math, so a
// sentence with two prices in it ("about $80 a person ... about $40") is
// swallowed and re-typeset as an equation. This version only renders math
// written between double dollar signs or \( ... \) and \[ ... \], which leaves
// prices alone everywhere on the site.
document.addEventListener("DOMContentLoaded", function() {
    renderMathInElement(document.body, {
        delimiters: [
            {left: "$$", right: "$$", display: true},
            {left: "\\[", right: "\\]", display: true},
            {left: "\\(", right: "\\)", display: false}
        ]
    });
});
