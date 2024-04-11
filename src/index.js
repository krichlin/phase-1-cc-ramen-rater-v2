// index.js
// Code Challenge 4/10/2024 Ken Richlin @ Flatiron School

// Callbacks

const addSubmitListener = () => { 

    // attach a submit event listener to the "new-ramen" form using a
    //  function called addSubmitLIstener.

  const newRamenForm = document.querySelector('#new-ramen') 

  newRamenForm.addEventListener('submit', (e) => handleSubmit(e))
  // console.log('newRamenForm', newRamenForm)

  // After the submission, create a new ramen
  // and add it to the #ramen-menu div
  // should be nonpersistent
}

const handleSubmit = (e) => {

  e.preventDefault()
  // console.log(e)
  // console.log("e.target", e.target)

  const menu_div = document.querySelector("#ramen-menu")
  // console.log('menu_div', menu_div)

  // Now loop through the ramenContainer with forEach() method
  // and use appendChild()  to write each element to the dom.

    const newRamenImg = document.createElement('img')
    newRamenImg.src = e.target.image.value
    newRamenImg.name = e.target.name.value
    newRamenImg.alt = e.target.restaurant.value

    //    not here and not yet
    //    newRamenImg.restaurant = ramen.restaurant
    //    newRamenImg.rating = ramen.rating

    // console.log('newRamenImg', newRamenImg)
    menu_div.appendChild(newRamenImg) // Apply the image to the document 

}
const addClickListener = () => {
  
  // First add an event listener to a (each?) picture in ramen-menu.
  // maybe we can attach it to the whole div?  

  const theMenuDiv = document.querySelector('#ramen-menu')

  // that event listner should fire handleClick()

  theMenuDiv.addEventListener('click', (e) => handleClick(e))

}
  
const handleClick = (e) => {

  // console.log('handleClick called') // Check event listener
  // let's see what we get inside e

  // console.log("e", e)

  // console.log("e.target", e.target)

  // console.log("e.target.src", e.target.src)       // image URL
  // console.log("e.target.name", e.target.name)      // ramen name
  // console.log ("e.target.alt", e.target.alt)      // ramen restaurant stored in alt field.

  // grab the key parts from the event and save them into variable

  // great let's grab the piece of the DOM we are writing to

  const detailView = document.querySelector('#ramen-detail')

  var img = detailView.querySelector('.detail-image')
  var name = detailView.querySelector('.name')
  var restaurant = detailView.querySelector('.restaurant')
  var rating = document.querySelector('.rating-display')
  var comment = document.querySelector('.comment-display')

  // display the rating and comment here

  // rating = 
  // comment = 

  // create a new img, h2 and h3 tags floating in space
  
  var newImg = document.createElement('img')
  var newH2 = document.createElement('h2')
  var newH3 = document.createElement('h3')


  // now populate them with the data

  // when you click on an image from ramen menu, this callback fires
  // to see all the info about that ramen displayed inside the
  // #ramen-detail div (where it says insert comment here and insert
  // rating here )

  newImg.src = e.target.src
  newImg.classList = 'detail-image'
  newH2.textContent = e.target.name
  newH2.classList = 'name'
  newH3.textContent = e.target.alt
  newH3.classList = 'restaurant'

  console.log('e',e)

  var newRating = document.createElement('p')
  var newComment = document.createElement('p')

  // populate them with the correct classes

  // newRating.classList = 'rating-display'
  // newComment.classList = 'comment-display'

  //newRating.textContent = 
  //newComment.textContent = 


  // now populate them with the correct data

  // newRating.textContent = e.
  // newComment.textContent = e.


  // Let's remove the 3 children of the div

  img.remove()
  name.remove()
  restaurant.remove()

  // Now let's append the 3 new nodes back where we removed the old ones.  

  detailView.appendChild(newImg)
  detailView.appendChild(newH2)
  detailView.appendChild(newH3)

  //console.log('detailView', detailView)  // that's the one

  //console.log(detailView.img)

  // img = e.target.src
  // name = e.target.name
  // restaurant = e.target.alt

  // detailView.appendChild(img)
  // detailView.appendChild(name)
  // detailView.appendChild(restaurant)

  // detailView.img.src = e.target.src
  // detailView.h2 = e.target.name
  // detailView.h3 = e.target.alt

  // const ramenDetail = document.querySelector('#ramen-detail')

};

const displayRamens = () => {
  // requests data from the server to get all the ramen objects. //

     fetch("http://localhost:3000/ramens")
     .then((resp) => resp.json())
     .then((data) => cbone(data))

}

function cbone (data) {  // Callback function for displayRamens()

  // store the ramens in a new array of objects ramenArray   //
  // console.log(data);                                      //

  const ramenContainer = data;
  // console.log('ramenContainer', ramenContainer)

  // display the image for each of the ramen using am img tag 
  // inside the #ramen-menu div.
  // grab the dom element we will be adding to.  It is #ramen-menu

  const menu_div = document.querySelector("#ramen-menu")
  // console.log('menu_div', menu_div)

  // Now loop through the ramenContainer with forEach() method
  // and use appendChild()  to write each element to the dom.

  ramenContainer.forEach((ramen) => {

    // console.log(ramen.id);
    const newRamenImg = document.createElement('img')
    newRamenImg.src = ramen.image
    newRamenImg.name = ramen.name
    newRamenImg.alt = ramen.restaurant

    //    not here and not yet
    //    newRamenImg.restaurant = ramen.restaurant
    //    newRamenImg.rating = ramen.rating

    // console.log('newRamenImg', newRamenImg)
    menu_div.appendChild(newRamenImg) // Apply the image to the document 

    }
  )
}

const main = () => {
  console.log('hi');
  document.addEventListener("DOMContentLoaded", () => {
    displayRamens();
    addSubmitListener();
    addClickListener();
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