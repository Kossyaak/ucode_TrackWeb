module.exports = class Access
{
    constructor(mark_LXXXV)
    {
        this.mark_LXXXV = mark_LXXXV;
        if(!this.mark_LXXXV)
        {
            return this.mark_LXXXV = undefined;
        }
        else if(this.mark_LXXXV === null)
        {
            return this.mark_LXXXV = "null";
        }
        else 
        {
            return this.mark_LXXXV;
        }
    }

}