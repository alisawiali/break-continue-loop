let names =[ 'Ali', 'Imad', 'Omer','Maher', 'gaml',1,2,3,4 , 'Ahmed']

for(let i =0 ; i < names.length;i++)
{
    if(typeof names[i] == 'number')
    {continue;
    }
  

    else if(names[i] == 'gaml') // wenn wir nur eine name raus wollen  und wenn nur eine name raus wollen denn nutzen wir es (!=).
    {
        continue;
    }

    else (names[i] == 'gaml') // wenn wir nur bis eine bestimte namen haben wollen und dann stop. den Rest nicht bringen.
    {
        break;
    }



    console.log(names[i])
}