let counter = 1;
function transformation()
{
    if(document.querySelector("#btn").onclick)
    {
        counter++;
        if(counter % 2 === 0)
        {
            let divCol = document.getElementById('lab');
            document.getElementById("hero").innerHTML = "HULK";
            document.getElementById("hero").style.fontSize = "130px"; 
            document.getElementById("hero").style.letterSpacing = "6px";
            divCol.style.backgroundColor = "#70964a";
        }
        else
        {
            let divCol = document.getElementById('lab');
            document.getElementById("hero").innerHTML = "Bruce Banner";
            document.getElementById("hero").style.fontSize = "60px"; 
            document.getElementById("hero").style.letterSpacing = "2px";
            divCol.style.backgroundColor = "#ffb300";
        }
    }
}   
