console.log("Hello!");

let button = document.querySelector(".button");
let cytat = document.querySelector(".cytat");
console.log(button);
button.addEventListener("click", () => {
   cytat.innerText = cytat.innerText === "Pomóż mi samemu to zrobić." ? "Największą oznaką sukcesu dla nauczyciela jest bycie zdolnym, by powiedzieć:Te dzieci pracują, jak gdybym nie istniała." : "Pomóż mi samemu to zrobić."
    });

