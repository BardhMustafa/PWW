function getAllProducts() {
    const spinner = document.getElementById("spinner");
    spinner.removeAttribute('hidden');
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => {
            spinner.setAttribute('hidden', '');
            showProducts(data)
        })
        .catch(error => {
            spinner.setAttribute('hidden', '');
            showError()
        });
}

function getMostSellers() {
    const spinner = document.getElementById("spinner");
    spinner.removeAttribute('hidden');

    fetch('https://dummyjson.com/products/category/fragrances?limit=3')
        .then(res => res.json())
        .then(data => {
            spinner.setAttribute('hidden', '');
            showProducts(data)
        })
        .catch(error => {
            spinner.setAttribute('hidden', '');
            showError()
        });
}


function showProducts(data) {
    console.log(data.products)
    let container = document.getElementById("storeContainer");
    data.products.map(product => {
        console.log(product)
        container.innerHTML += `
        <div class="product-cart">
        <img src=${product.thumbnail} alt="Product image">
        <h3>${product.title}</h3>
            <p>${product.description}</p>
            <p>${product.price} $<p>
            <p>${product.category} $</p>
            <p>Stock: ${product.stock}</p>
        </div>
        `
    })
}
function showError() {
    let container = document.getElementById("storeContainer");
    container.innerHTML = `<h1 class="errorTExt">Error 404! No data found</h1>`
}