    // jQuery for Emoji Animation
    $(document).ready(function() {
        function animateEmojis() {
          $(".emoji").animate({ 
            fontSize: '2.5rem', 
            marginTop: '-10px' 
          }, 500).animate({
            fontSize: '2rem', 
            marginTop: '0px' 
          }, 500);
        }
        
        // Run animation every 2 seconds
        setInterval(animateEmojis, 2000);
      });