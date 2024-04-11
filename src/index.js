// index.js
// Code Challenge 4/10/2024 Ken Richlin @ Flatiron School

// Callbacks

const addSubmitListener = () => { 

  // attach a submit event listener to the "new-ramen" form using a   //
  //  function called addSubmitLIstener.                              //

  const newRamenForm = document.querySelector('#new-ramen') 

  newRamenForm.addEventListener('submit', (e) => handleSubmit(e))

  // console.log('newRamenForm', newRamenForm)                      //
}

const handleSubmit = (e) => {

  // After the submission, create a new ramen and add it to the #ramen-menu div
  // should be nonpersistent

  e.preventDefault()                       // Don't reload the page on submit

  // console.log("e",e)
  // console.log("e.target", e.target)

  const menu_div = document.querySelector("#ramen-menu")
  // console.log('menu_div', menu_div)

  // Now loop through the ramenContainer with forEach() method
  // and use appendChild()  to write each element to the dom.

    const newRamenImg = document.createElement('img')
    newRamenImg.src = e.target.image.value
    newRamenImg.name = e.target.name.value
    newRamenImg.alt = e.target.restaurant.value

    menu_div.appendChild(newRamenImg) // Apply the image to the document 

    // Update the Rating and Comment if we ever figure out how
}
const addClickListener = () => {
  
  // First add an event listener to a (each?) picture in ramen-menu div.

  const theMenuDiv = document.querySelector('#ramen-menu')

  // that event listner should fire callback handleClick() send it event

  theMenuDiv.addEventListener('click', (e) => handleClick(e))

}
  
const handleClick = (e) => {

  // console.log('handleClick called') // Check event listener
  console.log("e.target", e.target)

  // console.log("e.target.src", e.target.src)    // image URL
  // console.log("e.target.name", e.target.name)  // ramen name
  // console.log ("e.target.alt", e.target.alt)   // ramen restaurant stored in alt field.

  // great let's grab the piece of the DOM we are writing to

  const detailView = document.querySelector('#ramen-detail')

  // const ramenDetail = document.querySelector('#ramen-detail') (old name)

  var img = detailView.querySelector('.detail-image')
  var name = detailView.querySelector('.name')
  var restaurant = detailView.querySelector('.restaurant')

  // create new img h2 and h3 elements
  
  var newImg = document.createElement('img')
  var newH2 = document.createElement('h2')
  var newH3 = document.createElement('h3')

  // now populate them with the data

  // when you click on an image from ramen menu, this callback fires
  // to see all the info about that ramen displayed inside the
  // #ramen-detail div (where it says insert comment here and insert
  // rating here )

  // build out the new objects

  newImg.src = e.target.src
  newImg.classList = 'detail-image'
  newH2.textContent = e.target.name
  newH2.classList = 'name'
  newH3.textContent = e.target.alt
  newH3.classList = 'restaurant'

  // Maybe here we can add the rating and comment to the img tag as metadata?

  newImg.title = '5'

  console.log("newImg",newImg)
  newImg.comment = 'meh'

  // populate them with the correct classes

  // now populate them with the correct data

  //Now we update rating and comment

  // Grab the 2 parts of the dom we want to populate:

  var rating = document.querySelector('#rating-display')
  var comment = document.querySelector('#comment-display')

  console.log(rating.textContent)
  console.log(comment.textContent)

  console.log("rating", rating)
  console.log("comment", comment)
  
  // newImg.rating = rating
  // newImg.comment = comment

  console.log("newImg", newImg)

  // Got the ratings, now somehow put them as children of the img tag?

  //console.log('detailView', detailView)  // that's the one

  //console.log(detailView.img)


  // Let's remove the 3 children of the original div

  img.remove()
  name.remove()
  restaurant.remove()

  // Now let's append the 3 new nodes back where we removed the old ones.  

  detailView.appendChild(newImg)
  detailView.appendChild(newH2)
  detailView.appendChild(newH3)

  // That finishes populating the image.

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
    console.log("ramen.rating", ramen.rating)
    console.log("ramen.comment", ramen.comment)

    newRamenImg.rating = ramen.rating
    newRamenImg.comment = ramen.comment

    console.log('newRamenImg', newRamenImg)
    // console.log('newRamenImg.rating', new)

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