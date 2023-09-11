function addCommas(number) {
    let str = String(number);
    let newStr = "";
    let prefix;
    if (str[0] === "-") {
        str = str.slice(1);
        prefix = "-";
    }
    let remainder = str.length % 3;

    newStr = str.slice(0, remainder);

    let sections = Math.floor(str.length / 3);

    for (let i = 0; i < sections; i++) {
        let start = i * 3 + remainder;

        let addStr = str.slice(start, start + 3);
        if (i === 0 && remainder === 0) {
            newStr = newStr + addStr;
        } else {
            newStr = newStr.concat(",", addStr);
        }
    }
    if (prefix) {
        newStr = "-" + newStr;
    }

    return newStr;
}

module.exports = addCommas;
