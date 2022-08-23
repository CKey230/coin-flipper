// TODO: Declare any global variables we need
let headsFlips = 0
let tailsFlips = 0

document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    // TODO: Add event listener and handler for flip and clear buttons
 
  document.getElementById('flip').addEventListener('click', () => {

    
    // Flip Button Click Handler
        // TODO: Determine flip outcome
        let flippedHeads = Math.random() < 0.5

        // TODO: Update image and status message in the DOM
        if (flippedHeads) {
        document.getElementById('penny-image').src='assets/images/penny-heads.jpg'
        document.getElementById('message').textContent = 'You Flipped Heads!'

        headsFlips += 1 
  }
        else {
            document.getElementById('penny-image').src = 'assets/images/penny-tails.jpg'
            document.getElementById('message').textContent = 'You Flipped Tails!'
    
  
    // Add one to the count of number of tails flipped
    tailsFlips += 1 
        }


        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        let total = headsFlips + tailsFlips

        // Make variables to track the percentages of heads and tails
        let percentHeads = 0
        let percentTails = 0

        // TODO: Use the calculated total to calculate the percentages
        if (total > 0) {
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        percentHeads = Math.round((headsFlips / total) * 100)
        percentTails = Math.round((tailsFlips / total) * 100)
        }

    

        // TODO: Update the display of each table cell
        document.getElementById('heads').textContent = headsFlips
        document.getElementById('heads-percent').textContent = percentHeads + '%'
        document.getElementById('tails').textContent = tailsFlips
        document.getElementById('tails-percent').textContent = percentTails + '%'
    })

document.getElementById('clear').addEventListener('click', function () {
        // Reset the heads and tails values to zero
        headsFlips = 0
        tailsFlips = 0

        // Update the message to the user
        document.getElementById('message').textContent = 'Let\'s Get Rolling!'

        // Update the scoreboard
        
        // Calculate total number of rolls
        let total = headsFlips + tailsFlips

        // Create variables to track percent heads and tails
        let percentHeads = 0
        let percentTails = 0

        // Before trying to divide, make sure total is not zero
        if (total > 0) {
            // Calculate percentage of heads and tails
            percentHeads = Math.round((headsFlips / total) * 100)
            percentTails = Math.round((tailsFlips / total) * 100)
        }

        // Update the values in the scoreboard table
        document.getElementById('heads').textContent = headsFlips
        document.getElementById('heads-percent').textContent = percentHeads + '%'
        document.getElementById('tails').textContent = tailsFlips
        document.getElementById('tails-percent').textContent = percentTails + '%'
    })
})

