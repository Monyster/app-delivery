# app-delivery

App for delivery from different shops.

A delivery application is a software that facilitates the process of ordering and delivering goods or services to customers. The application consists of two main components: a frontend and a backend.

The frontend of a delivery application is built using React.js.

The backend of the delivery application is designed using Nest.js.
Nest.js provides performing tasks such as order processing, delivery coordination, and interaction with databases.

The frontend and backend delivery applications communicate with each other through API. The frontend sends requests to the backend, for example, to place an order or get a delivery status, and the backend responds with the required data or performs the necessary actions.

The backend provides an API for:

- Customer
- Order
- Shop and products

Getting started with the application:

1. In the server folder configure .env according to the example of .env.example
2. Install MongoDB database if it's not installed.
3. Start server.
4. You need to create stores using a third-party application or admin panel ( coming soon);
5. Fill stores with products using a third-party app or admin panel (coming soon);
6. In the frontend folder configure ./src/config/configuration
7. Run the frontend application.

How the application works:

1. The user enters the site and goes to the home page.
2. Selects the store.
3. Selects the products and adds them to the cart (Only from one store)
4. After that you can go to the cart and manage your order
5. After ordering the user can go to the history and with his e-mail and phone to get information about his orders

Complete:

- The page where users can choose a shop, then add goods to the cart (get data from the database)
- The page where the user can check all added products, remove some of them
  or change the count. And add an email, a phone number, and an address (in
  inputs)
- The order should be saved in the database after the user clicks the “submit”
  button
- Users can order products only from one shop (for example, if the user chooses
  McDonald's. Then you need to disable other shops.)
- Users can find their orders on this page using their email and phone number

TODO:

- Add google maps
- Captcha after clicking submit on cart page
- Create a page where users can see all coupons
