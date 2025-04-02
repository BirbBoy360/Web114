//Ryan Blackwell
//4/2/25
// Practice if else and logical operators

// Prompt user for their major
const major = prompt("What is your major?").toLowerCase();

// Check the major and display a message using if statements with logical operators

switch (major) {
    case "english":
    case "theater":
    case "liberal arts":
    case "fine arts":
    case "computer science":
        console.log("I know what you are");
        break;
    default:
        break;
}
//If you really need includes or something to do with lists or arrays this works but you could also do the third example
switch (true) {
    case major === "english":
    case major.includes("arts") :
    case major === "computer science":
        console.log("I know who you are");
        break;
    default:
        break;
}
//This of course works (photography should be in its own case but ignore that)
switch (major) {
    case "english":
    case "theater":
    case "computer science":
        console.log("I know what you are");
        break;
    default:
        if (major.includes("arts")) {
            console.log("Fancy aren't we?"); 
            }
        else if (major === "photography") {
            console.log("Truly bougie.");
        }
        else {console.log("How creative.")}
        break;
}

/* if ((major === "computer science" || major === "software development"))
    {
        console.log("Your major involves a lot of problem-solving and technical skills!");
     }
     else if (major.includes("arts") || major === "english") 
     {
      console.log("Your major focuses on creativity, communication, and critical thinking!");
     } 
     else
      {
        console.log("That's an interesting major! I hope you enjoy it.");
      }

let desiredSalary = prompt("What is your desired salary?");

if (desiredSalary > 50000 && major === "computer science"  || major === "software development")
    {
        console.log("You have a technical mind!");
    } */