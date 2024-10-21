# Dynamic Product Card Gallery

You are tasked with creating a dynamic product card gallery using JavaScript and DOM manipulation. You are provided with an HTML file containing a div with the id "productGallery" and some CSS styles for product cards.
Requirements:

Use the following data array to generate product cards dynamically:

```javascript
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

```

- Each product card should display the product's image, name, and price.
- The cards should be created and appended to the "productGallery" div using JavaScript.
- Use DOM manipulation techniques to create elements and set their attributes and content.
- Ensure that the layout matches the provided CSS styles.

Your task is to write the JavaScript code that will generate these product cards dynamically based on the given data array. Focus on creating a reusable solution that could easily accommodate changes or additions to the product data.
