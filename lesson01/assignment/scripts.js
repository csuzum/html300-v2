// Requires the DOM be loaded should not be run until the DOM is loaded
document.addEventListener("DOMContentLoaded", function(){

  // Find the the form, and handle its submit event
  const myForm1 = document.querySelector('#myForm1')
  
  myForm1.addEventListener('submit', function(event){
  // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array to be transformed based on user input
    const array1 = [5, 10, 15, 20, 25]
    
    const inputField = document.querySelector('#myForm1 .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // Use to multiple all array items by userInput number
    const newArray1 = array1.map(x => x * userNumber);

    // Output the new array
    document.querySelector('#myForm1 .output').innerHTML = newArray1

    // Clear the form field so the user can try again
    inputField.value = ''
  })
})

// Requires the DOM be loaded should not be run until the DOM is loaded
document.addEventListener("DOMContentLoaded", function(){

  // Find the the form, and handle its submit event
  const myForm2 = document.querySelector('#myForm2')
  
  myForm2.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array to be accessed with user input
    const pizzaMenu = ['Cheese', 'Pepperoni', 'Vegetarian', 'Hawaiian', 'Margherita', 'Supreme', 'Mushroom']
    
    const inputField = document.querySelector('#myForm2 .input')
    const userInput = inputField.value
    // Use to compare user input to array items
    const pizzaOrder = (pizzaMenu.includes(userInput));
    
    // If user input is found in the array, output this
    if(pizzaOrder === true) {
      document.querySelector('#myForm2 .output').innerHTML = 'Your order will be ready shortly.';
    // If user input is not found in the array, output this
    } else {
      document.querySelector('#myForm2 .output').innerHTML = 'Not available. Please choose again.';
    }

    // Clear the form field so the user can try again
    inputField.value = ''
  })
})

// Requires the DOM be loaded should not be run until the DOM is loaded
document. addEventListener("DOMContentLoaded", function(){
  const myForm3 = document.querySelector('#myForm3')

  // Find the the form, and handle its submit event
  myForm3.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array to be accessed with user input
    let myClass = [18, 21, 42, 65, 99]

    const inputField = document.querySelector('#myForm3 .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    if(!isNaN(userNumber)){
      // Use to compare user if user input is smaller than array items
      let youngest = myClass.every( e => e > userNumber)

      // Output true if user input is smaller than any array item, false if input is the same or larger than any array item  
      document.querySelector('#myForm3 .output').innerHTML = youngest
    }

    // Clear the form field so the user can try again
    inputField.value = ''
  })
})

// Requires the DOM be loaded should not be run until the DOM is loaded
document. addEventListener("DOMContentLoaded", function(){
  const myForm3 = document.querySelector('#myForm4')

  // Find the the form, and handle its submit event
  myForm4.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array to be accessed with user input
    let myClass = [18, 21, 34, 42, 65, 99]

    const inputField = document.querySelector('#myForm4 .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)
  
    if(!isNaN(userNumber)){
      // Use to compare user input to array items
      let older = myClass.filter( e => e > userNumber)

      // output all array items larger than user input
      document.querySelector('#myForm4 .output').innerHTML = older
    }

    // Clear the form field so the user can try again
    inputField.value = ''
  })
})

// Requires the DOM be loaded should not be run until the DOM is loaded
document.addEventListener("DOMContentLoaded", function(){

  // Find the the form, and handle its submit event
  const myForm3 = document.querySelector('#myForm5')
  
  myForm5.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()
    
    // An array to be accessed with user input
    const kittenInventory = [
      {breed: 'Tabby', quantity: 25},
      {breed: 'Calico', quantity: 9},
      {breed: 'Siamese', quantity: 2},
      {breed: 'Sphynx', quantity: 3},
      {breed: 'Bengal', quantity: 0},
      {breed: 'Manx', quantity: 5},
      {breed: 'Persian', quantity: 1}
    ];

    const inputField = document.querySelector('#myForm5 .input')
    const userInput = inputField.value
    // Use to compare user input to array items
    const kittensAvailable = kittenInventory.find(({breed}) => breed === userInput);
    
    // output the array item quantity based on user input 
    document.querySelector('#myForm5 .output').innerHTML = kittensAvailable.quantity
    
    // Clear the form field so the user can try again
    inputField.value = ''
  })
})