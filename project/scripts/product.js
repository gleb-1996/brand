function createStructure() {
    var $wrapper = document.getElementById('wrapper');

    var $heading = document.createElement('h1');
    $heading.textContent = 'Ваша корзина.';
    $wrapper.appendChild($heading);

    var $productsBasket = document.createElement('div');
    $productsBasket.setAttribute('id', 'products');
    $wrapper.appendChild($productsBasket);

    var $info = document.createElement('div');
    $info.setAttribute('id', 'info');
    $wrapper.appendChild($info);
}

createStructure();

function monitoringBasketInfo(products) {
    var $info = document.getElementById('info');
    var text = 'Корзина пуста';

    if (products[0] === undefined) {
        $info.textContent = text;
    } else {
        var sum = 0;
        for (var i = 0; i < products.length; i++) {
            sum += products[i].price;
        }
        text = 'В корзине: ' + products.length + ' товара на сумму ' + sum + ' рублей';
        $info.textContent = text;
    }
}

var products = [

    {
        image: 'item1.jpg',
        title: 'Product-1',
        price: 1500,
        link: function() {
            return 'img/' + this.image;
        }
    },

    {
        image: 'item2.jpg',
        title: 'Product-2',
        price: 2000,
        link: function() {
            return 'img/' + this.image;
        }
    },

    {
        image: 'item3.jpg',
        title: 'Product-3',
        price: 3250,
        link: function() {
            return 'img/' + this.image;
        }
    },

    {
        image: 'item4.jpg',
        title: 'Product-4',
        price: 1325,
        link: function() {
            return 'img/' + this.image;
        }
    }

];


for (var i = 0; i < products.length; i++) {
    var $wrapProduct = document.getElementById('products');

    var $item = document.createElement('div');
    var $img = document.createElement('img');
    var $title = document.createElement('p');
    var $price = document.createElement('p');

    $item.classList.add('item');
    $img.setAttribute('src', products[i].link());
    $title.textContent = products[i].title;
    $price.textContent = String(products[i].price) + ' руб.';

    $wrapProduct.appendChild($item);
    $item.appendChild($img);
    $item.appendChild($title);
    $item.appendChild($price);
}

monitoringBasketInfo(products);