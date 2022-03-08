module.exports = class StrFrequency
{
    constructor(str)
    {
        this.str = str;
    }
    letterFrequencies()
    {
        let freq = {};
        let str1 = this.str.split(/[0-9]*[! ',-]/).join('');
        for (var i = 0; i < str1.length; i++) 
        {
            // this.str.split(/[! ',-]/).join('');
            let character = str1.toUpperCase().charAt(i);
            if (freq[character]) 
            {
                freq[character]++;
            } 
            else 
            {
                freq[character] = 1;
            }
        }
        return freq;
    }
    wordFrequencies()
    {
        if(this.str === '')
        {
            return {'':1}
        }
        var obj = { };
        this.str.split(/[0-9]*[! ',-]/).join(' ').toUpperCase().split(" ").filter((val)=>val !== '').forEach(function(el, i, arr) 
        { 
            obj[el] = obj[el] ? ++obj[el] : 1;
        });
        return obj;
    }
    reverseString()
    {
        return this.str.split("").reverse().join("");
    }
}


