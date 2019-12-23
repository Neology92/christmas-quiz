let haslo = [];
let form = [];
let quiz = [];

haslo[0] = "asdf";
haslo[1] = "asdg";
haslo[2] = "asdv";
haslo[3] = "asdb";

form[0] = document.querySelector("#form1");
form[1] = document.querySelector("#form2");
form[2] = document.querySelector("#form3");
form[3] = document.querySelector("#form4");

quiz[0] = document.querySelector("#q1");
quiz[1] = document.querySelector("#q2");
quiz[2] = document.querySelector("#q3");
quiz[3] = document.querySelector("#q4");

for (let i = 0; i < 4; i += 1) {
  form[i].setAttribute("novalidate", true);
  const input = form[i].querySelector('input[name="response"]');

  form[i].addEventListener("keyup", function(e) {
    console.log(input.value);
    if (input.value.toLowerCase() === haslo[i].toLowerCase()) {
      quiz[i].classList.add("done");
    }

    //dalsza część kodu wraz z ewentualną wysyłką
    //   if (wszystko_ok) {
    //   this.submit();
    //   }
  });

  form[i].addEventListener("submit", function(e) {
    e.preventDefault(); //przerywamy domyślną wysyłkę
  });
}
