
let hideText_btn_cs_quienes = document.getElementById('hideText_btn_cs_quienes');

let hideText = document.getElementById('hideText-cs-quienes');

hideText_btn_cs_quienes.addEventListener('click', toggleText);

function toggleText() {

    if(hideText.classList) {
      hideText.classList.toggle("showText-cs-quienes")
    }

    if(hideText.classList.contains('showText-cs-quienes')) {
      hideText_btn_cs_quienes.innerHTML = 'Ver Menos';
    }
    else{
      hideText_btn_cs_quienes.innerHTML = '¿Quiénes lo conforman?'
    }
}

let hideText_btn_cdi_quienes = document.getElementById('hideText_btn_cdi_quienes');

let hideText_cdi = document.getElementById('hideText-cdi-quienes');

hideText_btn_cdi_quienes.addEventListener('click', toggleText_cdi);

function toggleText_cdi() {

    if(hideText_cdi.classList) {
      hideText_cdi.classList.toggle("showText-cdi-quienes")
    }

    if(hideText_cdi.classList.contains('showText-cdi-quienes')) {
      hideText_btn_cdi_quienes.innerHTML = 'Ver Menos';
    }
    else{
      hideText_btn_cdi_quienes.innerHTML = '¿Quiénes lo conforman?'
    }
}

let hideText_btn_cde = document.getElementById('hideText_btn_cde');

let hideText_cde = document.getElementById('hideText-cde');

hideText_btn_cde.addEventListener('click', toggleText_cde);

function toggleText_cde() {

    if(hideText_cde.classList) {
      hideText_cde.classList.toggle("showText-cde")
    }

    if(hideText_cde.classList.contains('showText-cde')) {
      hideText_btn_cde.innerHTML = 'Ver Menos';
    }
    else{
      hideText_btn_cde.innerHTML = '¿Y el centro de estudiantes?'
    }
}
