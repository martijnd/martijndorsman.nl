document.addEventListener("DOMContentLoaded", () => {
    background_gradient();
    console.log("Beep boop");
});

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));
const $ = selector => document.querySelector(selector);

const repeat = count => {
    let strings = [];
    while (strings.length < count) {
        strings.push(getRandomInt(16).toString(16));
    }
    return strings.join("");
};

const background_gradient = () => {
    const background = `linear-gradient(${getRandomInt(360)}deg, \
    #${repeat(6)}, #${repeat(6)} 100%) `;

    const styleElement = document.createElement("style");
    const style = `.list li::before { background: ${background}; } a:after { background: ${background};} .fullpage { background: ${background}; }`;
    styleElement.appendChild(document.createTextNode(style));
    document.head.appendChild(styleElement);
};
