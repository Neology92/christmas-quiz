const form = document.querySelector("#form1");
const inputs = form.querySelectorAll(
  "input[required], textarea[required], select[required]"
);

form.setAttribute("novalidate", true);

form.addEventListener("submit", function(e) {
  e.preventDefault(); //przerywamy domyślną wysyłkę

  //dalsza część kodu wraz z ewentualną wysyłką
  if (wszystko_ok) {
    this.submit();
  }
});
