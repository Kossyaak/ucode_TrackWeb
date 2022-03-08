let houseMixin = {
    wordReplace(oldWord, newWord) {
        let newDescp = this.description.replace(oldWord, newWord);
        this.description = newDescp;
        return this.description;
        
    },
    wordDelete(deleteWord) {
        let newDescp = this.description.replace(deleteWord, "");
        this.description = newDescp;
        return this.description;
    },
    wordInsertAfter(word, afterWord) {
        let newDescp = this.description.replace(word, word + " " + afterWord);
        this.description = newDescp;
        return this.description;
        
    },
    wordEncrypt(){
        let a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
        return this.description = this.description.replace(/[a-z]/gi, (c) => b[a.indexOf(c)]);
    },
    wordDecrypt()
    {
        var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
        return this.description = this.description.replace(/[a-z]/gi, (c) => b[a.indexOf(c)]);
    },
};
// const house = new HouseBuilder('88 Crescent Avenue',
//     'Spacious town house with wood flooring, 2-car garage, and a back patio.',
//     'J. Smith', 110, 5);

// Object.assign(house, houseMixin);

// console.log(house.getDaysToBuild()); 
// // 220
// console.log(house.description);
// // Spacious town house with wood flooring, 2-car garage, and a back patio.

// house.wordReplace("wood", "tile");
// console.log(house.description);
// // Spacious town house with tile flooring, 2-car garage, and a back patio.

// house.wordDelete("town ");
// console.log(house.description);
// // Spacious house with tile flooring, 2-car garage, and a back patio.

// house.wordInsertAfter ("with", "marble");
// console.log(house.description);
// // Spacious house with marble tile flooring, 2-car garage, and a back patio.

// house.wordEncrypt();
// console.log(house.description);
// // Fcnpvbhf ubhfr jvgu zneoyr gvyr sybbevat, 2-pne tnentr, naq n onpx cngvb.

// house.wordDecrypt();
// console.log(house.description);
// // Spacious house with marble tile flooring, 2-car garage, and a back patio.


