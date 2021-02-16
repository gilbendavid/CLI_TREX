const chalk = require("chalk");
const boxen = require("boxen");

exports.printCommandTitle = function(titleText,backColor,borderColor,textColor)
{
    console.clear();
    const commandTitle = chalk[textColor].bold(titleText);
    const boxenOptions = {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: borderColor,
    backgroundColor: backColor
    };
    const msgBoxTitle = boxen(commandTitle, boxenOptions );
    console.log(msgBoxTitle);
}
