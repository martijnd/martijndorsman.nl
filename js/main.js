$(function () {
    background_gradient();
});

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function background_gradient(){

    let colors = {
        0: ["#00F2FE", "#4FACFE"],
        1: ["#50C9C3", "#96DEDA"],
        2: ["#00C6FB", "#005BEA"]
    };

    let random = getRandomInt(3);
    let color1 = colors[random][0];
    let color2 = colors[random][1];

    let style = 'linear-gradient(to bottom, ' + color1 + ', ' + color2 + ' 100%)';

    $('.fullpage').css('background', style);
    console.log($('.fullpage').css('background'));
}
