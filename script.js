const products = [
  {
    id: 1,
    name: "Smartphone",
    price: 499.99,
    image: "assets/phone.jpg",
  },
  {
    id: 2,
    name: "Laptop",
    price: 899.99,
    image: "assets/laptop.jpg",
  },
  {
    id: 3,
    name: "Headphones",
    price: 149.99,
    image: "assets/headphones.jpg",
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 249.99,
    image: "assets/smartwatch.jpg",
  },
  {
    id: 5,
    name: "Tablet",
    price: 349.99,
    image: "assets/tablet.jpg",
  },
];

// Your JavaScript code here

function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";

  card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">$${product.price.toFixed(2)}</p>
    `;

  return card;
}

function renderProductGallery() {
  const gallery = document.getElementById("productGallery");
  products.forEach((product) => {
    const card = createProductCard(product);
    gallery.appendChild(card);
  });
}

renderProductGallery();
