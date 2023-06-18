const normalText = "<a aria-label='Day 1' href='challenge.html' class='calendar-day1' style='color: #707070'>@#@#@@###@#@##@@@@@@@@@#@#@@##@@@@@@@###@#@@@##@@  <span class='calendar-day'> June 19th</span></a>";
const changedText = "<span style='color:#ffffff;'> (`-\').-> (`-\')  _  _  (`-\') _  (`-\')           \n (OO )__  (OO ).-/  \\-.(OO ) \\-.(OO )     .->   \n,--. ,\'-\' / ,---.   _.\'    \\ _.\'    \\ ,--.\'  ,-.\n|  | |  | | \\ /`.\\ (_...--\'\'(_...--\'\'(`-\')\'.\'  /\n|  `-\'  | \'-\'|_.\' ||  |_.\' ||  |_.\' |(OO \\    / \n|  .-.  |(|  .-.  ||  .___.\'|  .___.\' |  /   /) \n|  | |  | |  | |  ||  |     |  |      `-/   /`  \n`--\' `--\' `--\' `--\'`--\'     `--\'        `--\'     \n           (`-\')  _ (`-\')      (`-\').-> (`-\')  _   (`-\')      (`-\').-> \n   <-.     (OO ).-/ ( OO).->   (OO )__  ( OO).-/<-.(OO ) ,--. ( OO)_   \n(`-\')-----./ ,---.  /    \'._  ,--. ,\'-\'(,------.,------,)\\  |(_)--\\_)  \n(OO|(_\\---\'| \\ /`.\\ |\'--...__)|  | |  | |  .---\'|   /`. \' `-\'/    _ /  \n / |  \'--. \'-\'|_.\' |`--.  .--\'|  `-\'  |(|  \'--. |  |_.\' |    \\_..`--.  \n \\_)  .--\'(|  .-.  |   |  |   |  .-.  | |  .--\' |  .   .\'    .-._)   \\ \n  `|  |_)  |  | |  |   |  |   |  | |  | |  `---.|  |\\  \\     \\       / \n   `--\'    `--\' `--\'   `--\'   `--\' `--\' `------\'`--\' \'--\'     `-----\'  \n _(`-\')    (`-\')  _            ,---. \n( (OO ).-> (OO ).-/      .->   |   | \n \\    .\'_  / ,---.   ,--.\'  ,-.|   | \n \'`\'-..__) | \\ /`.\\ (`-\')\'.\'  /|   | \n |  |  \' | \'-\'|_.\' |(OO \\    / |  .\' \n |  |  / :(|  .-.  | |  /   /) `--\'  \n |  \'-\'  / |  | |  | `-/   /`  .--.  \n `------\'  `--\' `--\'   `--\'    `--\'  </span>  <span class=\"calendar-day\"> June 19th <span style='color: #fce392'>**</span></span> <p style='color: #ffffff'><p>"

let params = new URLSearchParams(window.location.search);
let completed = params.get("completed");
let halfCompleted = params.get("halfCompleted");

window.onload = function() {
    changeText(normalText);
    if (completed) {
        changeText(changedText);
        document.getElementById("yuzu").removeAttribute("hidden");
    }
}   

function changeText(text) {
    document.getElementById('link').innerHTML = text;
}

