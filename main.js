//recuperation des valeurs
var noun,adjective,person,verb,place 
var button = document.querySelector('#lib-button')
var span= document.querySelector('#story')

button.addEventListener('click', event => {
    event.preventDefault()
    // Obtention des valeurs de chacune des entrées
    noun = document.querySelector('#noun').value.trim()
    adjective = document.querySelector('#adjective').value.trim()
    person = document.querySelector('#person').value.trim()
    verb = document.querySelector('#verb').value.trim()
    place = document.querySelector('#place').value.trim()
    //verifications des valeurs
    if (noun === '' || adjective === '' || person === '' || verb === '' || place === '') {
        alert('Please fill out all the input fields');
        return;
    }

history()
})
// affiche une histoire
function history() { 
     span.textContent= `Un jour, mr(e) ${person} se promenait à ${place} quand il est tombés sur un ${adjective} ${noun} qui na pas pu résister à la tentation de le ${verb}.` ;
}
    