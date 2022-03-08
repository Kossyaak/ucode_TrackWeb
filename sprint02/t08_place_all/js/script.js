function sortEvenOdd(arr)
{
    arr.sort(function sortA(a, b) 
    {
        return (a % 2) - (b % 2) || a - b;
    });
}
