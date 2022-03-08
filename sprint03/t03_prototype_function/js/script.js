String.prototype.removeDuplicates = function removeDuplicates() 
{
    let str = this.replace(/ +(?= )/g,'').trim();
    let str1 = str.split(' ');

    str = str1.filter((item, index, str1) => {
        return str1.indexOf(item) === index;
    }).join(' ');

    return str;
}

// let str = "Giant Spiders?   What’s next? Giant Snakes?";
// console.log(str);
// // Giant Spiders?   What’s next? Giant Snakes?
// str = str.removeDuplicates();
// console.log(str);
// // Giant Spiders? What’s next? Snakes?
// str = str.removeDuplicates();
// console.log(str);
// // Giant Spiders? What’s next? Snakes?

// str = ". . . . ? . . . . . . . . . . . ";
// console.log(str);
// // . . . . ? . . . . . . . . . . .
// str = str.removeDuplicates();
// console.log(str);
// // . ?
