function firstUpper(string)
{
    if(string === null)
    {
        return ('');
    }
    string = string.trim().slice('');
    string = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

   
    return string;
}
module.exports.firstUpper = firstUpper;
