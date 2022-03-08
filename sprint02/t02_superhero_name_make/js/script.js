let animal = prompt("What animal is the superhero most similar to?");
let animal_check;
if(animal.length <= 20 && /^[a-zA-Z]+$/.test(animal))
{
    animal_check = true
}
else
{
    animal_check = false;
    
}
let gender = prompt("Is the superhero male or female? Leave blank if unknown or other");
let gender_check;
gender.toLowerCase();
if(gender === "male" || gender === "female" || gender === undefined)
{
    gender_check = true;

}
else
{
    gender_check = false;
}
let age = prompt("How old is the superhero?");
let age_check; 
if(age >= 5 && /^[1-9]+[0-9]*$/.test(age))
{
    age_check = false;
}
else
{
    age_check = true;
}
if(animal_check === true && gender_check === true && age_check === true)
{
    let description;
    if(gender === "male" && age < 18)
    {
        description = "boy";
    }
    if(gender === "male" && age >= 18)
    {
        description = "man";
    }
    if(gender === "female" && age < 18)
    {
        description = "girl";
    }
    if(gender === "female" && age >= 18)
    {
        description = "Woman";
    }
    if(gender === undefined && age < 18)
    {
        description = "kid";
    }
    if(gender === undefined && age >= 18)
    {
        description = "hero";
    }
    alert(animal + "-" + description +  " " + age);
    

}
else
{
    if(animal_check === false)
    {
        alert("Input requirements: length <= 20, only one word that contains only letters");
    }
    if(gender_check === false)
    {
        alert("Input requirements: accepts onlymale,female, or blank (not case sensitive)");
    }
    if(age_check === false)
    {
        alert("Input requirements: length <= 5, only digits, cannot start with a zero")
    }
}