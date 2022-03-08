function getFormattedDate(dateObject)
{
    let days_of_the_week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dateobj = dateObject.toISOString().slice(0, 10);
    let day = dateobj.slice(8);
    let month = dateobj.slice(5, 7);
    let year = dateobj.slice(0, 4);
    let time = dateObject.toTimeString();
    let number_of_Day = dateObject.getDay();
    let name_of_Day = days_of_the_week[number_of_Day];
    return `${day}.${month}.${year} ${time.slice(0, 5)} ${name_of_Day}`;
}

const date0 = new Date(1993, 11, 1);
const date1 = new Date(1998, 0, -33);
const date2 = new Date('42 03:24:00');
console.log(getFormattedDate(date0));// 01.12.1993 00:00 Wednesday
console.log(getFormattedDate(date1));// 28.11.1997 00:00 Friday
console.log(getFormattedDate(date2));// 01.01.2042 03:24 Wednesday



