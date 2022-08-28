// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded', () => {
  
  const likeBtn = document.getElementsByClassName("like-glyph"),
  errorDiv = document.getElementById("modal").className = ("hidden")

  for(const heart of likeBtn) {

    heart.addEventListener('click', () => {
      
      return mimicServerCall()
      .then( () => {
        if(heart.className === "activated-heart") {
          heart.textContent = EMPTY_HEART
          heart.classList.remove('activated-heart')
        } else {
          heart.textContent = FULL_HEART
          heart.className = 'activated-heart'
        }
      })
      .catch( error => {
        errorDiv.removeAttribute('class')
        let errorMessage = document.getElementById('modal-message')
        errorMessage.textContent = error
        setTimeout( () => (errorDiv.setAttributes('class', 'hidden')), 3000)
      })
    })
  }
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
