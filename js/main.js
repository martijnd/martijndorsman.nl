$( () => {
    background_gradient2();
    console.log("Beep boop");
});

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

const repeat = (count) => {
    let strings = [];
    while(strings.length < count) {
        strings.push(getRandomInt(16).toString(16));
    }
    return strings.join('');
}

function background_gradient2(){

    $('.fullpage').css('background', `linear-gradient(${getRandomInt(360)}deg, #${repeat(6)}, #${repeat(6)} 100%)`);
    $( `<style>.list li::before { background: linear-gradient(${getRandomInt(360)}deg, #${repeat(6)}, #${repeat(6)} 100%) }</style>` ).appendTo( "head" );
}

const background_gradient = () => {

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
    $( "<style>.list li::before { background: " + style + " }" +
        "a:after { background: " + style + "</style>" ).appendTo( "head" );

}
