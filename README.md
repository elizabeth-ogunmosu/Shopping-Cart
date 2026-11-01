# React Shopping Cart project

## Overview
This is a front-end web application built as part of a course assignment. It simulates an online shop with a functional shopping cart. Users can view a list of predefined products, add them to their cart, adjust quantities, and view the total price dynamically.

## Features
- **Product List:** Displays 6 predefined products with their names and prices.
- **Add to Cart:** Users can add products to the cart. If a product is already in the cart, it increments the quantity.
- **Quantity Adjustment:** Inside the cart, users can use `+` and `-` buttons to change the quantity of a specific item. 
- **Remove Items:** If the quantity of an item is reduced to 0, it is automatically removed from the cart.
- **Dynamic Total:** The total sum of all items in the cart is calculated and updated in real-time.
- **State Management:** Utilizes React's `useState` hook to manage the cart's data across the application.

## Technologies Used
- **React:** For building the user interface and managing state.
- **Vite:** As the build tool and local development server.
- **JavaScript (ES6+):** Core logic and array manipulation (`.map`, `.find`, `.reduce`, `.filter`).
- **CSS:** Basic inline styling for layout.

2. Open your terminal and navigate to the project folder:
   ```bash
   cd shopping-cart
