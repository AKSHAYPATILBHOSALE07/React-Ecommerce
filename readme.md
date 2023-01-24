## Challenge 02 - "Create a NavBar component"

This time I have created a NavBar.jsx component inside a folder
which I have called "components"

There are many ways to organize our code, and in React JS there is nothing defined.
If there is something that characterizes this bookstore, it is that we have a lot of freedom, it is because of
Therefore, we must also be careful with how we organize our files.

Next I will show you the distribution that I thought of in the first instance for this project that is relatively small:

|--src/
|--|--components/
|--|--|--styles/
|--|--|--|--NavBar.css
|--|--|--|--NavBar.jsx

There are many ways but this is very useful when I have 4 or 6 components maximum. For the ecommerce project you can use the following:

|--src/
|--|--components/
|--|--|--NavBar/
|--|--|--|--NavBar.css
|--|--|--|--NavBar.jsx

## Creating a CartWidget

In my case, I have created a component called CartWidget.jsx with its respective style sheet in the /styles folder

### CartWidget

This CartWidget has a fontawesome icon (a glass of beer 😜) and has a small html element that displays a number. In the future this number will change based on the products I have in my cart.

Subsequently, I mounted the CartWidget inside my NavBar component ✨

###Hero

Well, as you can see I've added a hero to my page, obviously I created a component called hero, which because of the CSS property ( background-image ), displays a background image. This hero is receiving by props a prop called title with the title that you see "The Beer King". I'll make a slide with this later, and each time I change slides, I'll enter a different title.

Well, that's all for today 😉
