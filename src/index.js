// index.js
// Code Challenge 4/10/2024 Ken Richlin @ Flatiron School


// Callbacks
const handleClick = (ramen) => {
  
  // when you click on an image from ramen menu, this callback fires
  // to see all the info about that ramen displayed inside the
  // #ramen-detail div (where it says insert comment here and insert
  // rating here )

};

const addSubmitListener = () => {

  // attach a submit event listener to the "new-ramen" form using a
  // function called addSubmitLIstener.
  
  // After the submission, create a new ramen
  // and add it to the #ramen-menu div
  // should be nonpersistent
}

const displayRamens = () => {
  // requests data from the server to get all the ramen objects.
    var ramenArray = [];
     fetch("http://localhost:3000/ramens")
     .then((resp) => resp.json())
     .then((data) => cbone(data))
}

function cbone (data) {
  // store the ramens in a new array of objects ramenArray
  //console.log(data);
  const ramenContainer = data;
  console.log(ramenContainer)

  // display the image for each of the ramen using am img tag 
  // inside the #ramen-menu div.
  // grab the dom element we will be adding to.  It is #ramen-menu

  const menu_div = document.querySelector("#ramen-menu")
  console.log(menu_div)

  // Now loop through the ramenContainer with For - In or a method
  // and use appendChild()  to write each element to the dom.

  ramenContainer.forEach((ramen) => {

    console.log(ramen.id);

    const newRamenImg = document.createElement('img')
    newRamenImg.src = ramen.image

    console.log(newRamenImg)

    menu_div.appendChild(newRamenImg)

    }
  )
}

const main = () => {
  console.log('hi');
  document.addEventListener("DOMContentLoaded", () => {
    
    displayRamens();
    addSubmitListener();
    }
  )
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
