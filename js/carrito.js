const Clickbutton = document.querySelectorAll('.button')
const tbody = document.querySelector('.tbody')
let carrito = []

Clickbutton.forEach(btn =>{
    btn.addEventListener('click',addToCarritoItem)
})

function addToCarritoItem(e){
    const button = e.target
    const item = button.closest('.card')
    const itemTitle = item.querySelector('.card-title').textContent;
    const itemPrice = item.querySelector('.precio').textContent;
    const itemImg = item.querySelector('.imagen').src;
    
    

    const newItem = {
        title : itemTitle,
        precio : itemPrice,
        img: itemImg,
        cantidad : 1
    }
    addItemCarritoItem(newItem)
}
function addItemCarritoItem(newItem){
    
   
    carrito.push(newItem)
   
    renderCarrito()
}

function renderCarrito(){
    
    tbody.innerHTML = ''
    carrito.map(item => {
        const tr = document.createElement('tr')
        tr.classList.add('ItemCarrito')
    })
    console.log(carrito)
}

