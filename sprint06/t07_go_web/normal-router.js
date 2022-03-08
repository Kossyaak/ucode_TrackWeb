function calculateTime()
{
    let Date1 = new Date();
    let Date2 = new Date('01.01.1939');

    let Date1 = new Date();
    let Date2 = new Date('01.01.1939');

    let mls = (Date1 - Date2);

    let years = Math.floor(mls / (1000 * 60 * 60 * 24 * 30 * 12));
    let months = Math.floor(mls / (1000 * 60 * 60 * 24 * 30) % 12);
    let days = Math.floor(mls / (1000 * 60 * 60 * 24) % 30);
    const obj = 
    {
        year: years,
        month: months,
        day: days,
        years()
        {
            return this.year;
        },
        months()
        {
            return this.month;
        },
        days()
        {
            return this.day;
        }

    }
    return obj;

}

module.exports.calculateTime = calculateTime;

