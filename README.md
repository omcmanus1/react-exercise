# React Exercise

## Tasks

- Create new React project of your choice
- Call the following api : https://fakestoreapi.com/products
- Map the response to a page using tiles (we recommend using flex box but this is optional). Bonus if you can make it responsive for mobile devices (flex box would make this much easier).
- Add a “Add to cart” button that adds products to state. Bonus points if a different button can remove items from state.

## Thought Process

- I created a 'basket' state using Context API, as this could be accessed universally / by multiple components if necessary.
  - This is initialised as an empty array, and when "Add To Cart Is Clicked" the relevant product ID is added to the array (and vice-versa when removed)
- I originally set up the API call to use promises, but refactored to use async functions.
  - Initially errors were just logged, but I've removed those and attempted to use the React Material UI "Alert" component.
- I have used MUI components where possible to keep base styling universal.
- Each individual product card is rendered with reusable logic in "ProductCard" component.
- "CartButtons" component used to abstract logic to render Add To Cart / Remove From Cart buttons.
  - Helper functions to change the "itemAdded" state passed to this component, ensuring the parent retains control where possible.
- "CartButtons" refactored to render a single button, with text/styling/behaviour changing dependent on the "itemAdded" state.

## Instructions To Run Locally

1. Clone this repository

```
git clone https://github.com/omcmanus1/react-exercise.git
```

2. Navigate into the repository

```
cd react-exercise
```

3. Install dependencies

```
npm i
```

4. Launch application locally

```
npm start
```
