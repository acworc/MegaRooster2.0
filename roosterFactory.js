const bucketForm = document.querySelector('#bucketForm')
const deleteForm = document.querySelector('#deleteForm')

function handleSubmit(ev) {
  ev.preventDefault()
  const f = ev.target
  const details = document.querySelector('#buckets')
  const item = f.item.value

  const nameLi = document.createElement("LI")
  nameLi.innerHTML = item

  details.insertBefore(nameLi,details.childNodes[0])

}

function handleDelete(ev) {
    ev.preventDefault()
    const f = ev.target
    const toDelete = f.numToDelete.value
    const ul = document.getElementById('buckets')
    const liToKill = ul.childNodes[toDelete - 1]
    liToKill.parentNode.removeChild(liToKill)
}

function makePretty(evt) {
    const focus = evt.target


    if (focus.style.fontFamily != 'Comic Sans MS' && focus.style.fontSize != "50px"){
        console.log('1')
        focus.style.fontFamily = 'Comic Sans MS'
        focus.style.fontSize = "50px"
    } else {
        console.log('2')
        focus.style.fontFamily = 'times'
        focus.style.fontSize = "18px"
    }
    
    evt.stopPropagation();
}

deleteForm.addEventListener('submit', handleDelete)
bucketForm.addEventListener('submit', handleSubmit)
document.getElementById("buckets").addEventListener("click", makePretty, true);
