

let masText_btn = document.getElementById('masText_btn');

let masText = document.getElementById('masText');

masText_btn.addEventListener('click', toggleText);

function toggleText() {
    masText.classList.toggle('show');

  
  if(masText.classList.contains('show')){
    masText_btn.innerHTML = "Menos Informacion"
  }else {
    masText_btn.innerHTML = "Mas Informacion"
  }
}
