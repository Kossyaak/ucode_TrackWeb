function checkBrackets(str)
{
    let temp = [];
    if (!(typeof str === 'string') || !/[()]/.test(str)) 
    {
      return -1;
    }
    for (let i = 0; i <= str.length; i += 1) 
    {
      if (str[i] == '(') 
      {
        temp.push('(');
      }
      if (str[i] == ')') 
      {
        temp.push(')');
      }
    }
    let total = temp.join('');
    for (let i = 0; i <= str.length; i += 1) 
    {
        total = total.replace('()', '');
    }
    return total.length;
}



  