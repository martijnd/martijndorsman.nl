document.addEventListener("DOMContentLoaded", () => {
  background_gradient();
  fetchData();
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

const fetchData = () => {
  const username = "Gastlyguy";
  let keyTotal = 0;
  let clickTotal = 0;
  const start = moment()
    .startOf("day")
    .unix();
  const end = moment().unix();
  fetch(
    `https://api.whatpulse.org/pulses.php?user=${username}\
    &start=${start}&end=${end}&format=json`
  )
    .then(res => res.json())
    .then(response => {
      if (response.error) {
        $("#current-keys").innerHTML = "0";
        $("#current-clicks").innerHTML = "0";
        return;
      }

      Object.values(response).forEach(pulse => {
        keyTotal += +pulse.Keys;
        clickTotal += +pulse.Clicks;
      });
      $("#current-keys").innerHTML = keyTotal;
      $("#current-clicks").innerHTML = clickTotal;
    });
};

const background_gradient = () => {
  const background = `linear-gradient(${getRandomInt(360)}deg, \
    #${repeat(6)}, #${repeat(6)} 100%) `;

  const styleElement = document.createElement("style");
  const style = `.list li::before { background: ${background}; } a:after { background: ${background};} .fullpage { background: ${background}; }`;
  styleElement.appendChild(document.createTextNode(style));
  document.head.appendChild(styleElement);
};
