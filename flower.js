let itemCount = 1;
let totalPrice = 0;


function handleClick(target) {
    const selectedItems = document.getElementById('selected-items')
    const itemName = target.parentNode.querySelector('.card-title').textContent

    // complication begins
    const existingLi = Array.from(selectedItems.getElementsByTagName('li')).find(li => li.innerText.includes(itemName));
    if (existingLi) {
        const quantitySpan = existingLi.querySelector('.quantity')
        const quantity = parseInt(quantitySpan.innerText) + 1
        quantitySpan.innerText = quantity
    } else {
        const li = document.createElement('li')
        li.innerHTML = `${itemCount}. ${itemName} (Quantity: <span class='quantity'>1</span>)`
        selectedItems.appendChild(li);
        itemCount ++;
    }
    
    const price = target.parentNode.childNodes[5].childNodes[1].innerText
    totalPrice = (parseFloat(price) + parseFloat
    (totalPrice))
    document.getElementById('price').innerText = totalPrice.toFixed(2)

    // discount 10% for shopping upto $300

    if (totalPrice > 300) {
        const calcDiscount = (15 / 100) * totalPrice;
        document.getElementById('discount-10').innerText = calcDiscount.toFixed(2)
        const grandTotal = totalPrice - calcDiscount
        document.getElementById('grand-total').innerText = grandTotal
    } else{
        const grandTotal = totalPrice
        document.getElementById('grand-total').innerText = grandTotal.toFixed(2)
    }
}