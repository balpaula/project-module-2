# project-module-2

## Description

Virtual fridge. User can add ingredients and search recipes according to these.

## User Stories

 - **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault.
 - **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault.
 - **homepage** - As a user I want to be able to access the homepage so that I see what the app is about and login and signup.
 - **sign up** - As a user I want to be able to register on the web application.
 - **log in** - As a user I want to be able to access to my fridge and see the available recipes.
 - **log out** - As a user I want to be able to log out from the web app so that I can make sure no one wull access my account.
 - **add ingredients** - As a user I want to add my ingredients to the virtual fridge so that I can obtain recipes.
 - **delete ingredients** - As a user I want to delete ingredients so I can keep my fridge updated.
 - **list recipes** - As a user I want to see all the recipes available so I can choose one.
 - **suggested recipes** - As a user I want to obtain recipes based on my ingredients.
 - **recipe of the day** - As a user I want to see a daily recipe so I can get cooking inspiration.
 
## Backlog

User profile:
-Filter by type of diet (vegan, vegetarian, etc)
-Favourite recipes
-Profile picture
-Confirmation email

Recipes:
-Search bar
-Filters
-Middle screen to delete ingredients after having done the recipe

Ingredients:
-Quantity
-Autoremove
-Expiration date
-Shopping list
-Voice recognition

## Views (frameworks) (sketches)

## Routes

```
GET /

POST /auth/signup - POST Body: username, email, password, diet
GET /auth/login
POST /auth/login - POST Body: email, password
POST /auth/logout - POST Body: nothing

GET /home

GET /fridge
GET /fridge/ingredients
POST /fridge/ingredients - POST Body: ingredient ID

GET /recipes
GET /recipes/suggestions
GET /recipes/all
GET /recipes/:id
```

## Models 

```
User:
 - username: String,
 - email: String,
 - password: String,
 - diet: enum
 - fridge: Array,
 
Ingredient:
 - name: String,
 - type: String,
 - quantity: num,
 -image: String
 
Recipe:
  - title: String,
  - level: num,
  - time: num,
  - ingredients: Array,
  - description: String,
  - image: String
```

## Links

### Trello

### Git

### Slides.com
