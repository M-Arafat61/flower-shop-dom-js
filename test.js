function setTextById(Id, newvalue) {
    document.getElementById(Id).innerText = newvalue
}

function getValueById(inputId) {
    const value = document.getElementById(inputId).value;
    return parseInt(value)
}
function getInputField() {
    const result = getValueById('input-field')
    console.log(result)
}
function lorem10() {
    setTextById('lorem10', 'Hello')
}
function lorem5() {
    setTextById('lorem5', 'Oy')
}
