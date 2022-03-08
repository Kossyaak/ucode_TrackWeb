let res = 1;
while(true)
{
    let number = Number(prompt("Previous result: " + res + " " + "Enter a new number:"));
    if (!isNaN(number)) 
    {
        res += number;
    }
    else
    {
        console.error("Invalit number!");
        continue;
    }
     if (res > 10000) {
        res = 1;
    }

    console.log("Result: " + res + ".");

}


