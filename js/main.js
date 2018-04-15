$(function () {
    background_gradient();
});

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function background_gradient2(){

    let colors = {
        0: ['1'],
        1: ['2'],
        2: ['3'],
        3: ['4'],
        4: ['5'],
        5: ['6'],
        6: ['7'],
        7: ['8'],
        8: ['9'],
        9: ['0'],
        10: ['A'],
        11: ['B'],
        12: ['C'],
        13: ['D'],
        14: ['E'],
        15: ['F'],

    };

    let randomAngle = getRandomInt(360);
    let color1 = colors[getRandomInt(16)] + colors[getRandomInt(16)] + colors[getRandomInt(16)] + colors[getRandomInt(16)] + colors[getRandomInt(16)] + colors[getRandomInt(16)];
    let color2 = colors[getRandomInt(16)] + colors[getRandomInt(16)] + colors[getRandomInt(16)] + colors[getRandomInt(16)] + colors[getRandomInt(16)] + colors[getRandomInt(16)];
    let style = 'linear-gradient(' + randomAngle + 'deg, #' + color1.toString() + ', #' + color2.toString() + ' 100%)';
    console.log(style);

    $('.fullpage').css('background', style);
    $( "<style>.list li::before { background: " + style + " }</style>" ).appendTo( "head" );

}

function background_gradient(){

    let colors = {
        0: ["#00F2FE", "#4FACFE"],
        1: ["#50C9C3", "#96DEDA"],
        2: ["#00C6FB", "#005BEA"],
        3: ["#F9D423", "#E14FAD"],
        4: ["#21D4FD", "#B721FF"],
        5: ["#F68084", "#A6C0FE"],
        6: ["#F09819", "#FF5858"],
        7: ["#68E0CF", "#209CFF"],
        8: ["#7579FF", "#B224EF"],
        9: ["#FF057C", "#4CC3FF"],
    };

    let random = getRandomInt(10);
    let randomAngle = getRandomInt(360);
    let color1 = colors[random][0];
    let color2 = colors[random][1];

    let style = 'linear-gradient(' + randomAngle + 'deg, ' + color1 + ', ' + color2 + ' 100%)';

    $('.fullpage').css('background', style);
    $( "<style>.list li::before { background: " + style + " }</style>" ).appendTo( "head" );

}
