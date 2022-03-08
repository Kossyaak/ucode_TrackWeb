function total(addCount, addPrice, currentTotal = 0)
{
    addCount = Number(addCount);
    addPrice = Number(addPrice);
    currentTotal = Number(currentTotal);
    let sum = currentTotal;
    if(addCount < 0 || addPrice < 0)
    {
        console.log("Nubmer of items or Price < 0");
    }
    else
    {
        sum = addPrice * addCount + sum;
    }   
    return sum;
}


