      // Typewriter effect function
      function typeWriter(text, targetElement, delay) {
        let i = 0;
        const interval = setInterval(function () {
          if (i < text.length) {
            document.querySelector(targetElement).innerHTML += text.charAt(i);
            i++;
          } else {
            clearInterval(interval);
          }
        }, delay);
      }
    
      // Call the typewriter effect for the specific element
      typeWriter("</>", ".typewriter-text", 200); // Adjust the delay as needed

       // Function to animate the shooting star
       function animateShootingStar() {
        const starContainer = document.querySelector('.star-container');
    
        // Animate the star's position
        starContainer.style.animation = 'shootingStar 2s ease-in-out';
    
        // After the animation, remove it to allow for replay
        starContainer.addEventListener('animationend', function () {
          starContainer.style.animation = '';
        });
      }
    
      // Call the shooting star animation when the page loads
      window.addEventListener('load', function () {
        animateShootingStar();
      });

      const accomplishment = document.getElementById("accomplishment");

    accomplishment.addEventListener("mouseover", () => {
      const explosion = document.createElement("div");
      explosion.classList.add("explosion");
      accomplishment.appendChild(explosion);

      setTimeout(() => {
        accomplishment.removeChild(explosion);
      }, 500); // Adjust the duration as needed
    });

    $(document).ready(function(){
      $(".fa-bed").click(function(){
        $("#title-screen").fadeIn(1500).delay(3000).fadeOut(1500);
      });
    });

function openInSafari() {
   window.open('google.com', '_blank');
}
    
    
