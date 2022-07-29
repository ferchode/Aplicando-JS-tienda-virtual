// Show & Hide Desktop Menu

const btnActive = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.inactive');


btnActive.addEventListener('click' , toogleMenuDesktop);

function toogleMenuDesktop (){

    const isShoppingCartClose = productsCart.classList.contains('inactive');
  
    if (!isShoppingCartClose) {

        productsCart.classList.add('inactive');
        
    }
    desktopMenu.classList.toggle('inactive');

}

// Show & Hide Mobile Menu

const burgerBtn = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


burgerBtn.addEventListener('click' , toogleMobileMenu);

function toogleMobileMenu (){

    const isShoppingCartClose = productsCart.classList.contains('inactive');

  
        if (!isShoppingCartClose) {

            productsCart.classList.add('inactive');
            
        }

    mobileMenu.classList.toggle('inactive');

}

//Aside shopping cart

const btnShoppingCart = document.querySelector('.navbar-shopping-cart');
const productsCart = document.querySelector('.product-detail');

btnShoppingCart.addEventListener('click' , toogleShoppingCart);

function toogleShoppingCart (){

    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive');
  
        if (!isMobileMenuClose || !isDesktopMenuClose) {

            mobileMenu.classList.add('inactive');
            desktopMenu.classList.add('inactive');
            
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

    name:'Mango',
    price:10,
    image:'img/mango.jpg'
    
});

productList.push({

    name:'Speed Bike',
    price: 120,
    image:'img/bike.jpg'

});

productList.push({

    name:'Mango',
    price:10,
    image:'img/mango.jpg'
    
});

productList.push({

    name:'Speed Bike',
    price: 120,
    image:'img/bike.jpg'

});

productList.push({

    name:'Mango',
    price:10,
    image:'img/mango.jpg'
    
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
