# MERN E-commerce App

## Used Packages (npm)

### For Frontend (client & admin)

- syled-components
- @mui/material
- @emotion/react
- @emotion/styled
- @mui/icons-material
- react-router-dom
- react-stripe-checkout
- axios
- react-redux
- @reduxjs/toolkit
- dotenv
- redux-persist
- timeago.js
- firebase

### For Backend

MongoDB used for creating database.
Stripe for payment service provider.

- express
- mongoose
- dotenv
- nodemon
- crypto-js
- jsonwebtoken
- stripe
- cors

## Admin Dashboard Usage

- In order to login to the admin page, "isAdmin = true" must be met. If it is "false", the login is not allowed.
To be able to login:
Email: admin@abc.com
password: admin
- It is displayed by calculating the current month's cost and the percentage increase or decrease compared to the previous month in the Revenue section on the home page.
- The newly created user distribution according to the months is seen in the chart.
- New Join Members and Latest transactions sections are also available on the home page.
- With Sign Out, the logout process is performed with redux.
- You can see all products listed in the Products section of the sidebar.
- When you press any product edit button, a page specific to that product's id is displayed. Here the sales price graph, id, price and in-stock are displayed dynamically.
- When the Create button is pressed, the new product page opens. Here, the product image file, title, description, price, categories (if "spring" is added, it will appear in the "products/spring" section of the shop Thunderbolt e-commerce app interface) and the stock status is selected and created. The product is created with the redux addProduct function. File is stored in firebase storage and created in database products collection. So it is also displayed in the e-commerce mern application.

Backend deployed by render and frontend deployed by netlify. 
Finally, link of the admin dashboard is: 
[Thunderbolt Admin Dashboard](https://thunderbolt-admin.netlify.app)
