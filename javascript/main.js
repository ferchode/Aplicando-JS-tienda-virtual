// Show & Hide Desktop Menu

const btnActive = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.inactive');


btnActive.addEventListener('click' , toogleMenuDesktop);

function toogleMenuDesktop (){

    const isShoppingCartClose = productsCart.classList.contains('inactive');
    const isAsideDetailClose = productDetail.classList.contains('inactive');

    if (!isShoppingCartClose || !isAsideDetailClose) {

        productsCart.classList.add('inactive');
        productDetail.classList.add('inactive');

    }
    desktopMenu.classList.toggle('inactive');

}

// Show & Hide Mobile Menu

const burgerBtn = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


burgerBtn.addEventListener('click' , toogleMobileMenu);

function toogleMobileMenu (){

    const isShoppingCartClose = productsCart.classList.contains('inactive');
    const isAsideDetailClose = productDetail.classList.contains('inactive');

  
        if (!isShoppingCartClose || !isAsideDetailClose) {

            productsCart.classList.add('inactive');
            productDetail.classList.add('inactive');
            
        }

    mobileMenu.classList.toggle('inactive');

}

//Aside shopping cart

const btnShoppingCart = document.querySelector('.navbar-shopping-cart');
const productsCart = document.querySelector('#shoppingCartContainer');

btnShoppingCart.addEventListener('click' , toogleShoppingCart);

function toogleShoppingCart (){

    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive');
    const isAsideDetailClose = productDetail.classList.contains('inactive');
  
        if (!isMobileMenuClose || !isDesktopMenuClose || !isAsideDetailClose) {

            mobileMenu.classList.add('inactive');
            desktopMenu.classList.add('inactive');
            productDetail.classList.add('inactive');
            
        }

    productsCart.classList.toggle('inactive');

}


// Contenedor de product card
const CardsContainer = document.querySelector('.cards-container')

//Principal View - Products List

const productList = [];

productList.push({

    name:'Speed Bike',
    price: 120,
    image:'img/bike.jpg'

});

productList.push({

    name:'Speed Bike',
    price: 120,
    image:'img/bike.jpg'

});

productList.push({

    name:'Speed Bike',
    price: 120,
    image:'img/bike.jpg'

});

productList.push({

    name:'Speed Bike',
    price: 120,
    image:'img/bike.jpg'

});

productList.push({

    name:'Speed Bike',
    price: 120,
    image:'img/bike.jpg'

});

productList.push({

    name:'Speed Bike',
    price: 120,
    image:'img/bike.jpg'

});


// Se almacena el for en una funcion en caso de ser necesaria la reutilizacion de este codigo

function renderItems (array){

    for (product of productList) {

        //Product card = container
    
        const containerProductcard = document.createElement('div');
        containerProductcard.classList.add('product-card');
    
        const imgProduct = document.createElement('img');
        imgProduct.setAttribute('src', product.image);
        imgProduct.classList.add('product-img');
        imgProduct.addEventListener('click', openAsideDetail);
    
        //Div info = container price, name & shopping cart
    
        const containerInfo = document.createElement('div');
        containerInfo.classList.add('product-info');
    
    
        //Div 1 = price & name
    
        const div1 = document.createElement('div');
    
        const price = document.createElement('p')
        price.append('$' + product.price + ',' + 00);
    
        const name = document.createElement('p')
        name.append(product.name);
    
    
        //Div 2 = img shopping cart
    
        const div2 = document.createElement('div');
    
        const figure = document.createElement('figure');
    
        const addToCart = document.createElement('img');
        addToCart.setAttribute('src', './Icons/bt_add_to_cart.svg');
        addToCart.classList.add('count-click');
        addToCart.addEventListener('click', count)
        addToCart.addEventListener('click', renderItemSC);

    
        //Integrando elementos
    
        containerProductcard.appendChild(imgProduct);
        containerProductcard.appendChild(containerInfo);
        containerInfo.appendChild(div1);
        containerInfo.appendChild(div2);
        div1.appendChild(price);
        div1.appendChild(name);
        div2.appendChild(figure);
        figure.appendChild(addToCart);
        CardsContainer.appendChild(containerProductcard);
        
    }

}

renderItems(productList);

    // Aside product detail OPEN

const productDetail = document.querySelector('#productDetail');

function openAsideDetail() {

    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive');
    const isShoppingCartClose = productsCart.classList.contains('inactive');
  
        if (!isMobileMenuClose || !isDesktopMenuClose || !isShoppingCartClose) {

            mobileMenu.classList.add('inactive');
            desktopMenu.classList.add('inactive');
            productsCart.classList.add('inactive');
            
        }

    productDetail.classList.remove('inactive');
    
}


    //Aside product detail CLOSE

const closeProductDetail = document.querySelector('.product-detail-close');
closeProductDetail.addEventListener('click', closeAsideDetail);


function closeAsideDetail(){

    productDetail.classList.add('inactive');
}

    // Add to shopping cart
const elementsCart = document.querySelector('#ElementsCart');
const asideButton = document.querySelector('.count-click');
asideButton.addEventListener('click', count);
asideButton.addEventListener('click', renderItemSC);
const countCart = document.querySelector('.countClick');


//Add to shopping cart - products 

const productsContainer = document.querySelector('.my-order-content');

let listProducts = [];

listProducts.push({

    name:'Speed Bike',
    price: 120,
    image:'img/bike.jpg'

});

const productValue = listProducts.map(function(value){

    return value.price;
})

function renderItemSC (){

    for (products of listProducts) {
        
    //Productos

    const shoppingCartDiv = document.createElement('div');
    shoppingCartDiv.classList.add('shopping-cart');

    
    const figureContainer = document.createElement('figure');
    
    const imgFigure = document.createElement('img');
    imgFigure.setAttribute('src', 'img/bike.jpg');
    imgFigure.classList.add('product-img');

    const p1 = document.createElement('p');
    p1.append( products.name);
    
    const p2 = document.createElement('p');
    p2.append('$' + products.price + ',' + 00);
    
    const iconClose = document.createElement('img');
    iconClose.setAttribute('src', './Icons/icon_close.png');
    iconClose.classList.add('close');
    iconClose.addEventListener('click', removeElement);

    //Integrando elementos
    shoppingCartDiv.appendChild(figureContainer);
    figureContainer.appendChild(imgFigure)
    shoppingCartDiv.appendChild(p1);
    shoppingCartDiv.appendChild(p2);
    shoppingCartDiv.appendChild(iconClose);
    productsContainer.appendChild(shoppingCartDiv);
    
    }
    
}

    //Variables para añadir y remover elementos
const contValueTotal = document.querySelector('#total-value');

let valuesFunction = function() {

    let obteniendoValores = Object.values(listProducts);
    let valor = obteniendoValores[0].price;
    return valor;
  
} 

let priceValue = valuesFunction();

let number = 0;



    // Añadiendo valores 

    function count() {
        
        number++;
        elementsCart.innerText = number;

        let totalValue = number * priceValue;

        function addPrice() {

            contValueTotal.innerText = '$' + totalValue + ',' + 00 ;
            console.log('funciona');
        }

        addPrice();
        
    }


// Removiendo Valor total y cantidad de productos
 
    function removeElement(){

        const shoppingCartDiv = document.querySelector('.shopping-cart');
        productsContainer.removeChild(shoppingCartDiv);

        number --
        elementsCart.innerText = number;

        function restValue() {

            let totalValue = number * priceValue;        
            let restaValueTotal = (number * priceValue); - priceValue;
            totalValue = restaValueTotal;
            contValueTotal.innerText = '$' + totalValue + ',' + 00 ;
        }

        restValue();
    }

    

    




