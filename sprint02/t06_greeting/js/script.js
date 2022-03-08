let first_name = prompt("Enter your first name");
let last_name = prompt("Enter your last name");
if(/[^A-Za-z]/.test(first_name) && /[^A-Za-z]/.test(last_name))
{
   alert("Wrong input: incorrectly entered data");
   console.log("Wrong input: incorrectly entered data"); 
}
else
{
    let nameCapitalized = first_name.charAt(0).toUpperCase() + first_name.slice(1);
    let last_nameCapitalized = last_name.charAt(0).toUpperCase() + last_name.slice(1);
    alert("Hello " + nameCapitalized + " " + last_nameCapitalized);
    console.log("Hello " + nameCapitalized + " " + last_nameCapitalized);

}
