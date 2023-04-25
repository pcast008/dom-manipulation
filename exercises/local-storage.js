/**
 * LOCAL STORAGE AND DOM MANIPULATION
 * In this task you will write some functions to let the browser save
 * some of your actions results and retrieve them when the page is reloaded.
 * You will be working with the localStorage.
 * Make sure to read the following exercise-info file/files before you start
 * * 03 LocalStorage.md
 * * 04 EventDelegation.md
 * Local Storage might be shortened to "LS" in the comments beneath.
 * @requirement
 * Event delegation MUST be used
 */

/**
 * @task
 * Implement the 'click' event that solves several tasks by the item click:
 * * If the item is NOT in favorites LS and has white background color
 * * * Changes the color of the box to red
 * * * Add the item's id to the local storage
 * * Else if the box is in favorites LS and has white red color
 * * * Changes the color of the box to white
 * * * Add the item's id to the local storage
 * * Make all the items that are listed in the favorites LS save the red background color when the page is reloaded
 */

/**
 * @hint
 * Here is a plan of how you can structure your code. You can follow it or choose your own way to go
 * * Select the container that holds all the items
 * * Create a function that sets the background to be red for the item with an id listed in favorites LS
 * * Run this function
 * * Create a function that adds an id to favorites LS by id passed as an argument
 * * Create a function that deletes an id from favorites LS by id passed as an argument
 * * Create a callback function that updates the element background color and does the
 * * /~/ action with the item's id depending on if it is in LS or not. The function should
 * * /~/ do that to a specific item that has a specific class value
 * * add the event listener to the container, pass the callback.
 */

// Your code goes here...
const container = document.querySelector(".cardsContainer");
const cards = document.getElementsByClassName("card");
localStorage.setItem("favorites", "1,2,3,4,5");
let favorites = localStorage.getItem("favorites");

function setToRed() {
    Array.from(cards).forEach(card => {
        if (favorites.split(",").includes(card.id)) {
            card.classList.add("red")
        }
    })
}

setToRed();

function addToFavs(id) {
    let favs = localStorage.getItem("favorites");
    favs += `,${id}`;
    localStorage.setItem("favorites", favs);
}

function deleteFromFavs(id) {
    const favs = localStorage.getItem("favorites");
    const favoritesArr = favs.split(",");
    favoritesArr.splice(favoritesArr.indexOf(id), 1).join(",");
    localStorage.setItem("favorites", favoritesArr);
}

function callBack(e) {
    const card = e.target;

    if (card.classList.contains("red")) {
        deleteFromFavs(card.id);
        card.classList.remove("red");
    } else {
        addToFavs(card.id);
        card.classList.add("red");
    }
}

container.addEventListener("click", callBack);