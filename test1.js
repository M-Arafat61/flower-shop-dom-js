/* function handleClick(data) {
    const info =  data.parentNode.childNodes[1].innerText
    console.log(info)
} */
document.getElementById('btn-clickme').addEventListener('click', function (){
    const element = this
    console.log(element.parentNode.childNodes[1].innerText)
})