
//Character One

// make a variable called characterOneName and have it equal a string of Mr. Farley;
var characterOneName = "Mr. Farley";

// assign a new value, Ms. Farley, to the variable characterOneName.

characterOneName = "Ms. Farley";

// now give character one a age
// make a variable called characterOneAge and have it equal to a integer of 5 ;
var characterOneAge = 5;


// assign a new value, 6, to the varibale characterOneAge.
characterOneAge = 6;


// make a variable called characterOneSalary and have it equal to 100000.00 ;
var characterOneSalary = 100000.00;


// make a variable called characterOneSalary and have it equal to "Web Developer"
var characterOneProfession = "Web Developer";

// make a variable called characterOneSpecies and have it equal to "cat"
var characterOneSpecies = "cat";

// make a variable called characterOneLocation and have it equal to "San Francisco CA"
var characterOneLocation = "San Francisco CA";

// make a variable called characterOneRent and have it equal to "2000.00"
characterOneRent = 2000.00;


// make a variable called characterOneExpenses and have it equal to "1500.00"
characterOneExpenses = 1500.00;


// make a variable called characterOneYearlyRent and have it equal to characterOneYearlyRent + 12
characterOneYearlyRent = characterOneRent * 12;

// make a variable called characterOneYealyExpenses and have it equal to 1500.00 * 12
characterOneYearlyExpenses = characterOneExpenses * 12;

// make a variable called characterOneSavings and have it equal to characterOneYearlyRent + characterOneYealyExpenses
var characterOneSavings = characterOneYearlyRent + characterOneYearlyExpenses;

//character Two
// make a variable of charcterTwoName equal to a string of mr. snuggles
var characterTwoName = "mr. snuggles";

// make a variable of characterTwoAge equal to a age of 3
characterTwoAge = 3;

// now redefine characterTwoAge to four
characterTwoAge = 4;

// make a variable called characterTwoProfession and have it equal to "Accountant"
var characterTwoProfession = "Accountant";


// make a variable called characterTwoSpecies and have it equal to "mouse"
var characterTwoSpecies = "mouse";

// make a variable called characterTwoProfession and have it equal to "Accountant" - Salary?
var characterTwoSalary = 75000.00;

// make a variable called characterTwoLocation and have it equal to "Oakland, CA"
var characterTwoLocation = "Oakland, CA"

// make a variable called characterTwoRent and have it equal to "4000.00"
var characterTwoRent = 4000.00;

// make a variable called characterTwoExpenses and have it equal to "500.00"
var characterTwoExpenses = 500.00;

// make a variable called characterTwoYearlyRent and have it equal to characterTwoYearlyRent + 12
var characterTwoYearlyRent = characterTwoRent * 12;

// make a variable called characterTwoYealyExpenses and have it equal to 1500.00 * 12
var characterTwoYearlyExpenses = characterTwoExpenses * 12;

// make a variable called characterTwoSavings and have it equal to characterTwoYearlyRent + characterTwoYealyExpenses
var characterTwoSavings = characterTwoRent + characterTwoYearlyExpenses;
//conditionals

// write if statement to check if characterOneName is equal to "Mr. farley"

    // if it does === Mr. farley than console.log a string of hello Mr. farley

    // write a else if and check if characterOneName === "Ms. Farley"

    // if it does === Ms. farley than console.log a string of hello Ms. farley

    // finally if they both dont apply else

    // console.log a string of hello stranger

    if(characterOneName === "Mr. farley"){
        console.log("hello " + characterOneName);
    }
    else if(characterOneName === "Ms. Farley"){
        console.log("hello " + characterOneName);
    }
    else{
        console.log("hello strangers");
    }


// write if statement check if characterOneAge greter than characterTwoAge

    // if characterOneAge is greater than characterTwoAge than console.log a string of  Mr. farley

    // else console.log a string of Ms. farley

    if (characterOneAge > characterTwoAge){
        console.log("Mr. farley");
    }
    else{
        console.log("Ms. farley");
    }



// write if statement check if characterOneLocation is equal to oakland

    // if characterOneLocation is equal to oakland console.log a string of raiders

    // else if check if characterTwoLocation is equal to a string of san francisco 

    //  console.log a string of Niners

    // if both condition doesn't apply write a else with a console.log of a string of warriors
    if(characterOneLocation === "Oakland"){
        console.log("raiders");
    }
    else if(characterTwoLocation === "San Francisco"){
        console.log("Niners");
    }
    else{
        console.log("Warriors");
    }



// write if statement check if characterOneRent greter than characterTwoRent

    // console.log of a string of Rent One

    // if rent one isn't high else

    // console.log of a string of Rent Two

    if (characterOneRent > characterTwoRent){
        console.log("Rent One");
    }
    else {
        console.log("Rent Two");
    }



// write if statement check if characterOneExpenses greter than characterTwoExpenses

    // console.log of a string of farley's shopping expense

    // if characterOneExpenses isn't greater than characterTwoExpenses else

    // console.log of a string of farley's needs kibbles

    if ( characterOneExpenses > characterTwoExpenses){
        console.log("farley's shopping expense");
    }
    else{
        console.log("farley's needs kibbles");
    }

// write if statement to check fi characterOneProfession equal to a string of web developer and characterTwoProfession is a string of Accountant

    // console.log of a string of Look at Web Developer and a Accountant

    // if characterOneProfession and  characterTwoProfession doesnt equal those string else

   // console.log of a string of what ?

   if (characterOneProfession === "web developer" && characterTwoProfession === "Accountant"){
    console.log("Look at Web Developer and a Accountant");
   }
   else{
       console.log("what ?");
   }
