let myExtras = [];
const myExtrasInput = document.getElementById('extraUdstyr');
const myExtrasListElement = document.getElementById('extraList');


myExtrasInput.addEventListener("change", addExtra);



function addExtra(e) { //e står for event

    /* din map kode her... */
    myExtras.push(e.target.value);
    updateExtras();
}



function updateExtras() {
    let myHTML = "<ul>";
    myExtras.map((myElement) => {
        myHTML += '<li>' + myElement + '</li>'
    })

    myHTML += '/ul'

    /* din map kode her... */

    myExtrasListElement.innerHTML = myHTML;
}







