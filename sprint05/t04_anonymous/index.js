const Anonymous = class
{
    constructor(name, alias, affiliation)
    {
        this.name = name;
        this.alias = alias;
        this.affiliation = affiliation;
    }

}
function getAnonymous(name, alias, affiliation)
{
    let aboba = new Anonymous(name, alias, affiliation);
    return aboba;

}
module.exports.getAnonymous = getAnonymous;