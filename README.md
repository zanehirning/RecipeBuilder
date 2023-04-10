# Assignment 4 Description

After bouncing between jobs and giving your resume to so many companies you decide that it might be time to start your own business. After doing some market research you bump into an old friend. As you tell her of your plans to start a business she tells you that she has recently broken into the market of selling recipes (you know... like food recipes). She informs you that there is still a lot of room for growth in that area and recommends starting a business that provides a community marketplace for buying, selling, and trading recipes. She was always a lot smarter than you in school and that is a good enough reason for you to trust her! After registering a domain and getting a business license, worldrecipeace.com is born. Your business model includes donating a portion of every recipe sale to a sponsored charity.

Objectives
Build something bigger
Apply the principles of accessibility
Requirements
You have determined that your MVP (minimum viable product) will allow users to produce recipe cards. These recipe cards contain a list of ingredients and the instructions for single recipe. You are given some code that will write the recipe to a file and download it. It provides you with one function called "writeRecipeToFile". This function has the following signature:

/*
  Writes the recipe to a recipe card
  @param recipe: an object the contains the information for the recipe
*/
function writeRecipeToFile(recipe)
This function expects you to pass in a recipe object of the following shape:

{
  name: "Grandma's Broccoli Cheese Soup", // the name of the recipe
  ingredients: [
    "2 cups of shredded cheddar cheese",
    "1 block of velveeta",
    "3 cups of chopped broccoli",
    "1/2 cup of butter"
    "1 can of cream of chicken soup"
  ],
  instructions: [
    "turn on crockpot to high",
    "mix in the ingredients except the brocolli",
    "cook for 60 minutes",
    "add the broccoli in and stir thoroughly",
    "cook for the remaining 40 minutes",
    "turn crockpot to low heat until served"
  ]
}
Your application will need to allow the user to do the following

1. Add an ingredient to the recipe

2. Remove an ingredient from the recipe

3. Add an instruction to the recipe

4. Remove an instruction from the recipe

5. Export the recipe to a recipe card (using the writeRecipeToFile  function)

6. Allow the user to perform all of the operations in an accessible way

7. Reset all of the fields to begin a new recipe

Accessibility
Accessibility includes:

Good color selection
Keyboard interactivity
Screenreader support - including live areas where appropriate.
Good usage of the aria tags
If you are on a Mac then you can use the built in voiceOver Utility - activated by pushing "cmd + f5", or by launching the voiceOver Utility app.

If you are on a Windows then you can use the built in Narrator app. You can activate narrator in your settings and if enabled the shortcut is "windows key + ctrl + enter".

If you are on linux then you will need to figure out which one to use for your distro, I believe Orca comes standard with Ubuntu (and other distros).

You will be graded on accessibility so make sure it is a priority.

Hints
As you add and remove instructions and ingredients you will need some way of knowing which DOM node represents which instruction / ingredient in the code. document.querySelector combined with custom data attributes will be your friend in finding things on the screen that you need to remove.

For example, when you add a new ingredient to the list you might add a div that looks something like this:

<div data-ingredient="1 cup of sugar">1 cup of Sugar</div>
Then to find that div and remove it from the DOM you can call:

document.querySelector('div[data-ingredient="1 cup of sugar"]').remove()
If you are reproducing my UI then this is even easier. When you create the element, before you even put it on the screen just add the click event to the element that removes it like:

const myElement = document.createElement("div");
// add all of the important stuff to myElement here
myElement.addEventListener("click", () => myElement.remove())
// then put the element on the screen where it goes.
That way you don't have to look up the element at all because you already have a reference to it!

Instructions
1. Download the code that will produce the file for you here Download here.

2. Build your application. You should keep accessibility in the front of your mind at all times!

3. Test your application by writing recipes and downloading them. The writeRecipeToFile just produces an HTML document that displays the recipe that you saved.

4. Submit the zip of your project
