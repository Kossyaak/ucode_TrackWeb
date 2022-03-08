let number1 = prompt("Enter a start number");
let number2 = prompt("Enter an end number");
number1 = Number(number1);
number2 = Number(number2);
if(number1 > number2 || !/^[1-9]*$/.test(number1) || !/^[1-9]*$/.test(number2))
{
    number1 = 1;
    number2 = 100;
}
for(let i = number1; i <= number2; i++)
{
    if(i % 2 === 0 && i % 10 === 0 && i % 3 === 0)
    {
        console.log(i + " even, multiple of 3, multiple of 10");
    }
    else if(i % 2 === 0 && i % 10 === 0)
    {
        console.log(i + " even,  multiple of 10");
    }
    else if(i % 3 === 0 && i % 10 === 0)
    {
        console.log(i + " ,  multiple of 10");
    }
    else if (i % 2 === 0 && i % 3 === 0)
    {
        console.log(i + " even, multiple of 3");
    }
    else  if(i % 2 === 0)
    {
        console.log(i + " even");
    }
    else if(i % 3 === 0)
    {
        console.log(i + " multiple of 3");
    }
    else if(i % 10 === 0)
    {
        console.log(i + " multiple of 10");
    }
    else
    {
        console.log(i + " -");
    }
}


