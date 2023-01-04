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
            <p style="font-size: 1em;
            font-weight: bold;
            color: #009900;">${product.price} $<p>
            <p style="border:2px solid #16123f; padding:4px;border-radius:10px">${product.category} </p>
        </div>
        `
    })
}
function showError() {
    let container = document.getElementById("storeContainer");
    container.innerHTML = `<h1 class="errorTExt">Error 404! No data found</h1>`
}
const showCategories = async () => {
    try {
        const response = await fetch("https://dummyjson.com/products/categories")
        console.log(response)
    } catch (error) {
        throw new Error("failed to fetch categories");

    }
}