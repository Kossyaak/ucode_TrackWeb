let characters_count = document.getElementById("characters").children;
for(let i = 0; i < characters_count.length; i++)
{
    let characters_class = characters_count[i].getAttribute("class");
    let characters_data = characters_count[i].getAttribute("data-element");
    if(characters_class !== "good" && characters_class !== "evil" || !characters_class)
    {
        characters_count[i].className = "unknown";
        
    }
    if(!characters_data)
    {
        characters_count[i].setAttribute("data-element", "none"); 
        
    }
    characters_count[i].appendChild(document.createElement("br"));
    characters_data = characters_count[i].getAttribute("data-element");
    if(characters_count[i].getAttribute("data-element") === "none")
    {
        let cyrcle = document.createElement("div");
        cyrcle.setAttribute("class", "elem none");
        let line = document.createElement("div");
        line.setAttribute("class", "line");
        cyrcle.appendChild(line);
        characters_count[i].appendChild(cyrcle);

    }
    else
    {
        characters_data = characters_count[i].getAttribute("data-element").split(' ');
        for(const val of characters_data)
        {
            let cyrcle = document.createElement("div");
            cyrcle.setAttribute("class", `elem ${val}`);
            characters_count[i].appendChild(cyrcle);
        }
    }

}