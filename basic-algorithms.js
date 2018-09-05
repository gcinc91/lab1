// Names and Input
var hacker1 = "Gabi";
console.log("The driver's name is " + hacker1);

var hacker2 = prompt("what browser do you use??");
console.log("The navigator's name is " + hacker2);


//Conditionals

if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters")
} else if (hacker1.length < hacker2.length) {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters")
} else {
  console.log("wow, you both got equally long names, " + hacker2.length + " characters!!")
}

var sentenceDriver = "";

for (var i = 0; i < hacker1.length; i++) {
  var cadena = (hacker1[i] + " ");
  sentenceDriver += cadena;
}

console.log(sentenceDriver.toUpperCase());

var sentenceBrowser = "";

for (var i = (hacker2.length - 1); i >= 0; i--) {
  var cadena = hacker2[i];
  sentenceBrowser += cadena;
}

console.log(sentenceBrowser);

var order = hacker1[0].localeCompare(hacker2[0]);

switch (order) {
  case -1:
    console.log("The driver's name goes first")
    break;
  case 0:
    console.log("What?! You both got the same name?")
    break;
  case 1:
    console.log("Yo, the navigator goes first definitely")
    break;
}

var palindrome = prompt("Say something interesting");
var palindromeTournedAround = "";

for (var i = (palindrome.length - 1); i >= 0; i--) {
  var cadena = palindrome[i];
  palindromeTournedAround += cadena;
}

var cadena1 = palindrome,
  patron = / /g,
  nuevoValor = "",
  palindromeWhihoutSpace = cadena1.replace(patron, nuevoValor);



var cadena2 = palindromeTournedAround,
  patron2 = / /g,
  nuevoValor2 = "",
  palindromeTournedAroundWhihoutSpace = cadena2.replace(patron2, nuevoValor2);


palindrome = palindromeWhihoutSpace.toLowerCase();

palindromeTournedAround = palindromeTournedAroundWhihoutSpace.toLowerCase();

console.log(palindrome);
console.log(palindromeTournedAround);

if (palindrome === palindromeTournedAround) {
  console.log("It's palindrome!");
} else {
  console.log("Sorry, it's not interesting enough");
}


// Lorem ipsum generator

var count = 0;
var arrayParagrahs;

var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac elit sit amet leo molestie tempus. Vestibulum quis dui imperdiet, laoreet justo et, rutrum ipsum. Pellentesque nec nulla ex. Fusce faucibus sagittis lacus, sed vestibulum metus scelerisque in. Mauris tincidunt dolor leo, et ultricies libero congue non. Etiam magna ipsum, auctor vitae velit et, tincidunt tincidunt mauris. Nullam euismod aliquet suscipit. Aenean vehicula pretium nunc, et pretium velit auctor vel.\n \nCras malesuada vitae neque id pharetra. Etiam nec maximus purus. Duis tincidunt quis odio a ornare. Duis vel sapien nibh. Quisque non ipsum tincidunt, vulputate nisl laoreet, semper quam. Maecenas luctus, tellus eget rutrum hendrerit, lectus elit tempus elit, eget suscipit dolor sem nec est. Vestibulum id aliquam purus. Duis faucibus augue in est porta, a ultrices turpis egestas. \n\nDonec vitae libero lorem. Fusce eleifend magna risus, eu tristique nisl condimentum id. Phasellus eu elit et nulla molestie viverra. Vestibulum iaculis leo sed erat pellentesque posuere. Nam ornare ultrices odio, id semper sapien lacinia in. Ut nunc magna, interdum placerat eros lobortis, dignissim facilisis urna. Vivamus mi lorem, consequat in volutpat sit amet, congue vitae nisl. Aliquam dapibus dapibus mauris ac tristique. Pellentesque ut sapien non libero convallis vestibulum nec sed odio. Aliquam finibus ultricies nisl, ut viverra nulla tincidunt eget. Quisque cursus, magna eu hendrerit molestie, ligula lacus cursus massa, non sollicitudin leo dui in turpis",

  separador = " ",
  arrayParagrahs = lorem.split(separador);

console.log("the paragraph have " + arrayParagrahs.length + "Words!!");


var i = 0;
do {

  if ((arrayParagrahs[i] === 'et') || (arrayParagrahs[i] === 'et,')) {
    count += 1;
  } else {
  }
  i++
} while (i < arrayParagrahs.length)

console.log("\"et\" appears  " + count + " times in the paragraphs ");