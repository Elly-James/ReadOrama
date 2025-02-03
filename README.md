
# The ReadOrama Online Book Library

Check out the live [link]()

This project is a single page react app that utilizes the fundamentals of React.js. 

It enables a user/learner to interact with concepts that will enable him/her to understand the main contents used in React.js by web developers across the globe.


Increating the app, I used the **cra** method- ``code-challenge-week2-phase2``

 ### Concepts Used
   * Functional components and Props
   * Destructuring method
   * Array methods e.g map
   * Form control methods
   * React states and effects methods
   * Data Fetching
   * Client Side Routing
  




## Project Problem Statement and MVPs
### Problem Statement: 
  * People who are taking up reading  as a hobby struggle to find the best books to start with.
  * This library application  aims to provide users with a seamless platform to explore and interact with books. 
  * Users can view book details,buy books, manage personal favorites, and add books of their preference, creating a personalized digital library experience. 
  * This project integrates modern web development technologies,including React, React Router, and RESTful APIs, to deliver a user-friendly single-page application that prioritizes interactivity and responsive design.

   ## Challenges
   * Finding the perfect API for the books details
   * Fixing bugs
   * Unforseen challenges e.g power issues
  
    

    
## MVPs (Minimum Viable Products)
 
 * Users can view a list of available books according to their category.
 * Users can add new books using a form.
 * Each book displays essential details such as title, author and description.
 * Users can buy books, which are then added to their cart
 * They can add books to a favorites list.
 * They can modify the quantity of books in their cart and remove from cart
 * The user can then proceed to purchase the books by choosing a modal of payment
 * They can view and remove books from their favorites list.
 * Changes are reflected in real-time through state updates.

     
        
        
 
## Components Used
1. **App** - Which is the parent component of the app and renders props and data to its children components 
2. **SideBar** - Contains the navigation links for the library pages.
3. **Home** - Has a welcome page of the Library.
4. **Shop** - Renders all the available books in their respective categories and the user can add to cart or favorites
5. **Category** - Responsible for grouping the books to their respective categories e.g *computer, African lit*
6. **BookForm** - Contains a form that allows the user to add a book to shop.
7. **Cart** - Responsible for rendering a collection of books in the cart page and the payment form.
8. **CartItem** - Responsible for rending the books in the cart page.
9. **Favorites** - Enables the user to view their selected books to be in their favorites list
10. **Footer**-  Responsible for rendering the footer of the whole application

## db.json file

It contains the data for all the books in the app.
### Data contained
* Book Id
* Book Title
* Book Description
* Book Author
* Publisher
* Published Date
* Book Price
* Book Image Link
* Book Category
     
     
## Prerequisites   

VsCode Install to view the codes

git clone ````git clone <SSH KEY>```` the repository to your local machine in the terminal

cd in to  the readorama  folder and ``npm install`` to install all the dependencies
Use `` json-server --watch db.json`` to start the server for rendering the apps

Use ``npm start`` to start the react app

  **Note:** Both the server and the app must run at the same time, to enable the app to fetch the data from the json file.


### Authors
* Edith Gatwiri  <edithgatwiri70@gmail.com>
* Elly James    <ellykomunga@gmail.com>
* Helen Wairagu  <hwangari3@gmail.com>
* Hollidah Chemutai <hollydachemutai@gmail.com>
* Hydan Cheruiyot  <hydancheru@gmail.com>

Incase you are stuck or experiencing any error, reach out to us via our respective emails

### Licence 
We used MIT licence






