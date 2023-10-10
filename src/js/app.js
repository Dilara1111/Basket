let cart = {
    'pls11' : 2,
    'mns22' : 2,
}

document.onclick = event => {
    if (event.target.classList.contains('plus')){
       plusFunction(event.target.clas);    
    }
    else if (event.target.classList.contains('minus')){
        plusFunction(event.target.clas); 
     }
}

const plusFunction = id => {
    cart[id]++;
    renderCart();
}

const minusFunction = id => {
    if (cart[id]-1 ==0){
        deleteFunction;
        return true;
    }
    cart[id]--;
    renderCart();
}
const deleteFunction = id =>{
    delete cart[id];
    renderCart();
}
const renderCart = () => {
    console.log(cart);
}
renderCart()