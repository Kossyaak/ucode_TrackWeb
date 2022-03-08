function concat(string1, string2)
{
    userinput.count = 0;
    function userinput()
    {
      userinput.count++;
      let input = prompt("Enter a pharase!");
      let res;
      if(input <= 0)
      {
        res = string1;
      }
      else 
      {
        res = `${string1} ${string2}`;
      }
      return res;
    }
    if(string2 === undefined)
    {
      userinput();
    }
    else
    {
      return `${string1} ${string2}`;
    }

}

