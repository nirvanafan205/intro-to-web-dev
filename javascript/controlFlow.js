const skyIsBlue = true;

if(skyIsBlue)
{
    console.log("The sky is blue!");
}

else 
{
    console.logt("The Sky is ... not blue?");
}

if(2 + 2 === 4) //use three = signs to check if same thing and same type
{               // double equals only check if they're the same thing despite being different data types
    console.log("Yo");
}


const friendsAtParty = 10;

if(friendsAtParty === 0)
{
    console.log("Cool, now I have a lot of nachos to myself.");
}

else if(friendsAtParty <= 4)
{
    console.log("Perfect amount to play some Mario Kart.");
}

else
{
    console.log("Dance party!");
}

let people = 0;

while(people < 10)
{
    people += 1;
}

console.log(people);