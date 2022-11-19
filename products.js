// Our product array
var products = [   
    {
        index:1,
        id:'p1',
        name:'Samsung TV',
        price:500000
    },
    {
        index:2,
        id:'p2',
        name:'Pixel 4a',
        price:250000
    },
    {
        index:3,
        id:'p3',
        name:'PS 5',
        price:300000
    },
    {
        index:4,
        id:'p4',
        name:'MacBook Air',
        price:800000
    },
    {
        index:5,
        id:'p5',
        name:'Apple Watch',
        price:95000
    },
    {
        index:6,
        id:'p6',
        name:'Air Pods',
        price:75000
    }

];

// Our products HTML component
function getProductsComponent() {
    // Create HTML products component
    const productsComponents = document.createElement("div");
    productsComponents.setAttribute("id", "products");

    // Loop over products array
    for(let product of products) {
        const price = document.createTextNode(product.price);

        const priceComponent = document.createElement("p");
        priceComponent.classList.add("price");
        priceComponent.appendChild(price);

        const productComp = document.createElement("div");

        productComp.dataset.id = product.id;
        productComp.classList.add("product");
        productComp.addEventListener("click", () => {
            alert("You clicked: "+ product.name);
        });
        productComp.appendChild(priceComponent);

        productsComponents.appendChild(productComp);
    }

    return productsComponents;
}