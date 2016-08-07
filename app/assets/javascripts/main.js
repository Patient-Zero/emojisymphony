var sound1 = new Howl( {
      src: ["assets/sound1.mp3"]
    });

var sound2 = new Howl( {
      src: ["assets/sound2.mp3"]
    });

 var sound3 = new Howl( {
      src: ["assets/sound3.mp3"]
  
    });

var sound4 = new Howl( {
      src: ["assets/sound4.mp3"]
    });

 var sound5 = new Howl( {
      src: ["assets/sound5.mp3"]
  
    });

var sound6 = new Howl( {
      src: ["assets/sound6.mp3"]
    });

 var sound7 = new Howl( {
      src: ["assets/sound7.mp3"]
  
    });

var sound8 = new Howl( {
      src: ["assets/sound8.mp3"]
    });

var sound9 = new Howl( {
      src: ["assets/sound9.mp3"]
    });

var sound10 = new Howl( {
      src: ["assets/sound10.mp3"]
    });

 var sound11 = new Howl( {
      src: ["assets/sound11.mp3"]
  
    });

var sound12 = new Howl( {
      src: ["assets/sound12.mp3"]
    });

 var sound13 = new Howl( {
      src: ["assets/sound13.mp3"]
  
    });

var sound14 = new Howl( {
      src: ["assets/sound14.mp3"]
    });

 var sound15 = new Howl( {
      src: ["assets/sound15.mp3"]
  
    });

var sound16 = new Howl( {
      src: ["assets/sound16.mp3"]
    });


var sound17 = new Howl( {
      src: ["assets/sound17.mp3"]
    });

 var sound18 = new Howl( {
      src: ["assets/sound18.mp3"]
  
    });

var sound19 = new Howl( {
      src: ["assets/sound19.mp3"]
    });

 var sound20 = new Howl( {
      src: ["assets/sound20.mp3"]
  
    });

var sound21 = new Howl( {
      src: ["assets/sound21.mp3"]
    });

 var sound22 = new Howl( {
      src: ["assets/sound22.mp3"]
  
    });

var sound23 = new Howl( {
      src: ["assets/sound23.mp3"]
    });

var sound24 = new Howl( {
      src: ["assets/sound24.mp3"]
    });


 var sound25 = new Howl( {
      src: ["assets/sound25.mp3"]
  
    });

var sound26 = new Howl( {
      src: ["assets/sound26.mp3"]
    });

 var sound27 = new Howl( {
      src: ["assets/sound27.mp3"]
  
    });

var sound28 = new Howl( {
      src: ["assets/sound28.mp3"]
    });


var sound29 = new Howl( {
      src: ["assets/sound29.mp3"]
    });

 var sound30 = new Howl( {
      src: ["assets/sound30.mp3"]
  
    });

var sound31 = new Howl( {
      src: ["assets/sound31.mp3"]
    });

 var sound32 = new Howl( {
      src: ["assets/sound32.mp3"]
  
    });

var sound33 = new Howl( {
      src: ["assets/sound33.mp3"]
    });

 var sound34 = new Howl( {
      src: ["assets/sound34.mp3"]
  
    });

var sound35 = new Howl( {
      src: ["assets/sound35.mp3"]
    });

var sound36 = new Howl( {
      src: ["assets/sound36.mp3"]
    });


 $(window).load(function(){
  var press = document.getElementById("press");
    $(press).hide();
  var buttons= document.getElementById("footer");
    $(footer).hide();
  var emoji= document.getElementById("emojis");
    $(emoji).animate({ opacity:0},3000);
  var slided = document.getElementById("slide_down");
    $(slided).animate({ opacity:0},3000);
  var slideu = document.getElementById("slide_up");
    $(slideu).animate({opacity:0},3000); 
    $(press).fadeIn(4000);
    $(footer).fadeIn(4000);
});

$(document).keypress(function(event){
  var press = document.getElementById("press");
    $(press).fadeOut(200);
}) 

$(document).keydown(function(event){

  function getRandomPosition(element){
    var x = document.body.offsetHeight - element.clientHeight;
    var y = document.body.offsetWidth - element.clientWidth;
    var randomX = Math.floor(Math.random()*x);
    var randomY = Math.floor(Math.random()*y);
    return [randomX,randomY];
  }


    if (event.keyCode==32){
      var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
      $('body').css("background",hue);
    }


    if (event.keyCode == 65) {
      sound1.play();
      var img = document.createElement('img');
      img.setAttribute("class", "emojis");
      img.setAttribute("style", "position:absolute;");
      img.setAttribute("src", "assets/emojis/e1.png");
      document.body.appendChild(img);
      var xy = getRandomPosition(img);
      img.style.top = xy[0] + 'px';
      img.style.left = xy[1] + 'px';
    } 

      if (event.keyCode == 66) {
      sound2.play();
      var img = document.createElement('img');
      img.setAttribute("class", "emojis");
      img.setAttribute("style", "position:absolute;");
      img.setAttribute("src", "assets/emojis/e2.png");
      document.body.appendChild(img);
      var xy = getRandomPosition(img);
      img.style.top = xy[0] + 'px';
      img.style.left = xy[1] + 'px';
    } 

      if (event.keyCode == 67) {
      sound3.play();
      var img = document.createElement('img');
      img.setAttribute("class", "emojis");
      img.setAttribute("style", "position:absolute;");
      img.setAttribute("src", "assets/emojis/e3.png");
      document.body.appendChild(img);
      var xy = getRandomPosition(img);
      img.style.top = xy[0] + 'px';
      img.style.left = xy[1] + 'px';
    } 

      if (event.keyCode == 68) {
      sound4.play();
      var img = document.createElement('img');
      img.setAttribute("class", "emojis");
      img.setAttribute("style", "position:absolute;");
      img.setAttribute("src", "assets/emojis/e4.png");
      document.body.appendChild(img);
      var xy = getRandomPosition(img);
      img.style.top = xy[0] + 'px';
      img.style.left = xy[1] + 'px';
    } 

      if (event.keyCode == 69) {
      sound5.play();
      var img = document.createElement('img');
      img.setAttribute("class", "emojis");
      img.setAttribute("style", "position:absolute;");
      img.setAttribute("src", "assets/emojis/e5.png");
      document.body.appendChild(img);
      var xy = getRandomPosition(img);
      img.style.top = xy[0] + 'px';
      img.style.left = xy[1] + 'px';
    } 

      if (event.keyCode == 70) {
      sound6.play();
      var img = document.createElement('img');
      img.setAttribute("class", "emojis");
      img.setAttribute("style", "position:absolute;");
      img.setAttribute("src", "assets/emojis/e6.png");
      document.body.appendChild(img);
      var xy = getRandomPosition(img);
      img.style.top = xy[0] + 'px';
      img.style.left = xy[1] + 'px';
    } 

      if (event.keyCode == 71) {
      sound7.play();
      var img = document.createElement('img');
      img.setAttribute("class", "emojis");
      img.setAttribute("style", "position:absolute;");
      img.setAttribute("src", "assets/emojis/e7.png");
      document.body.appendChild(img);
      var xy = getRandomPosition(img);
      img.style.top = xy[0] + 'px';
      img.style.left = xy[1] + 'px';
    } 

      if (event.keyCode == 72) {
      sound8.play();
      var img = document.createElement('img');
      img.setAttribute("class", "emojis");
      img.setAttribute("style", "position:absolute;");
      img.setAttribute("src", "assets/emojis/e8.png");
      document.body.appendChild(img);
      var xy = getRandomPosition(img);
      img.style.top = xy[0] + 'px';
      img.style.left = xy[1] + 'px';
    }

      if (event.keyCode == 73) {
      sound9.play();
      var img = document.createElement('img');
      img.setAttribute("class", "emojis");
      img.setAttribute("style", "position:absolute;");
      img.setAttribute("src", "assets/emojis/e9.png");
      document.body.appendChild(img);
      var xy = getRandomPosition(img);
      img.style.top = xy[0] + 'px';
      img.style.left = xy[1] + 'px';
    } 

      if (event.keyCode == 74) {
      sound10.play();
      var img = document.createElement('img');
      img.setAttribute("class", "emojis");
      img.setAttribute("style", "position:absolute;");
      img.setAttribute("src", "assets/emojis/e10.png");
      document.body.appendChild(img);
      var xy = getRandomPosition(img);
      img.style.top = xy[0] + 'px';
      img.style.left = xy[1] + 'px';
    } 

      if (event.keyCode == 75) {
      sound11.play();
      var img = document.createElement('img');
      img.setAttribute("class", "emojis");
      img.setAttribute("style", "position:absolute;");
      img.setAttribute("src", "assets/emojis/e11.png");
      document.body.appendChild(img);
      var xy = getRandomPosition(img);
      img.style.top = xy[0] + 'px';
      img.style.left = xy[1] + 'px';
    } 

      if (event.keyCode == 76) {
      sound12.play();
      var img = document.createElement('img');
      img.setAttribute("class", "emojis");
      img.setAttribute("style", "position:absolute;");
      img.setAttribute("src", "assets/emojis/e12.png");
      document.body.appendChild(img);
      var xy = getRandomPosition(img);
      img.style.top = xy[0] + 'px';
      img.style.left = xy[1] + 'px';
    } 

      if (event.keyCode == 77) {
      sound13.play();
      var img = document.createElement('img');
      img.setAttribute("class", "emojis");
      img.setAttribute("style", "position:absolute;");
      img.setAttribute("src", "assets/emojis/e13.png");
      document.body.appendChild(img);
      var xy = getRandomPosition(img);
      img.style.top = xy[0] + 'px';
      img.style.left = xy[1] + 'px';
    } 

      if (event.keyCode == 78) {
      sound14.play();
      var img = document.createElement('img');
      img.setAttribute("class", "emojis");
      img.setAttribute("style", "position:absolute;");
      img.setAttribute("src", "assets/emojis/e14.png");
      document.body.appendChild(img);
      var xy = getRandomPosition(img);
      img.style.top = xy[0] + 'px';
      img.style.left = xy[1] + 'px';
    } 

      if (event.keyCode == 79) {
      sound15.play();
      var img = document.createElement('img');
      img.setAttribute("class", "emojis");
      img.setAttribute("style", "position:absolute;");
      img.setAttribute("src", "assets/emojis/e15.png");
      document.body.appendChild(img);
      var xy = getRandomPosition(img);
      img.style.top = xy[0] + 'px';
      img.style.left = xy[1] + 'px';
    } 

      if (event.keyCode == 80) {
      sound16.play();
      var img = document.createElement('img');
      img.setAttribute("class", "emojis");
      img.setAttribute("style", "position:absolute;");
      img.setAttribute("src", "assets/emojis/e16.png");
      document.body.appendChild(img);
      var xy = getRandomPosition(img);
      img.style.top = xy[0] + 'px';
      img.style.left = xy[1] + 'px';
    }   

      if (event.keyCode == 81) {
      sound17.play();
      var img = document.createElement('img');
      img.setAttribute("class", "emojis");
      img.setAttribute("style", "position:absolute;");
      img.setAttribute("src", "assets/emojis/e17.png");
      document.body.appendChild(img);
      var xy = getRandomPosition(img);
      img.style.top = xy[0] + 'px';
      img.style.left = xy[1] + 'px';
    } 

      if (event.keyCode == 82) {
      sound18.play();
      var img = document.createElement('img');
      img.setAttribute("class", "emojis");
      img.setAttribute("style", "position:absolute;");
      img.setAttribute("src", "assets/emojis/e18.png");
      document.body.appendChild(img);
      var xy = getRandomPosition(img);
      img.style.top = xy[0] + 'px';
      img.style.left = xy[1] + 'px';
    }

      if (event.keyCode == 83) {
      sound19.play();
      var img = document.createElement('img');
      img.setAttribute("class", "emojis");
      img.setAttribute("style", "position:absolute;");
      img.setAttribute("src", "assets/emojis/e19.png");
      document.body.appendChild(img);
      var xy = getRandomPosition(img);
      img.style.top = xy[0] + 'px';
      img.style.left = xy[1] + 'px';
    } 

      if (event.keyCode == 84) {
      sound20.play();
      var img = document.createElement('img');
      img.setAttribute("class", "emojis");
      img.setAttribute("style", "position:absolute;");
      img.setAttribute("src", "assets/emojis/e20.png");
      document.body.appendChild(img);
      var xy = getRandomPosition(img);
      img.style.top = xy[0] + 'px';
      img.style.left = xy[1] + 'px';
    } 

      if (event.keyCode == 85) {
      sound21.play();
      var img = document.createElement('img');
      img.setAttribute("class", "emojis");
      img.setAttribute("style", "position:absolute;");
      img.setAttribute("src", "assets/emojis/e21.png");
      document.body.appendChild(img);
      var xy = getRandomPosition(img);
      img.style.top = xy[0] + 'px';
      img.style.left = xy[1] + 'px';
    } 

      if (event.keyCode == 86) {
      sound22.play();
      var img = document.createElement('img');
      img.setAttribute("class", "emojis");
      img.setAttribute("style", "position:absolute;");
      img.setAttribute("src", "assets/emojis/e22.png");
      document.body.appendChild(img);
      var xy = getRandomPosition(img);
      img.style.top = xy[0] + 'px';
      img.style.left = xy[1] + 'px';
    } 

      if (event.keyCode == 87) {
      sound23.play();
      var img = document.createElement('img');
      img.setAttribute("class", "emojis");
      img.setAttribute("style", "position:absolute;");
      img.setAttribute("src", "assets/emojis/e23.png");
      document.body.appendChild(img);
      var xy = getRandomPosition(img);
      img.style.top = xy[0] + 'px';
      img.style.left = xy[1] + 'px';
    } 

      if (event.keyCode == 88) {
      sound24.play();
      var img = document.createElement('img');
      img.setAttribute("class", "emojis");
      img.setAttribute("style", "position:absolute;");
      img.setAttribute("src", "assets/emojis/e24.png");
      document.body.appendChild(img);
      var xy = getRandomPosition(img);
      img.style.top = xy[0] + 'px';
      img.style.left = xy[1] + 'px';
    } 

      if (event.keyCode == 89) {
      sound25.play();
      var img = document.createElement('img');
      img.setAttribute("class", "emojis");
      img.setAttribute("style", "position:absolute;");
      img.setAttribute("src", "assets/emojis/e25.png");
      document.body.appendChild(img);
      var xy = getRandomPosition(img);
      img.style.top = xy[0] + 'px';
      img.style.left = xy[1] + 'px';
    } 

      if (event.keyCode == 90) {
      sound26.play();
      var img = document.createElement('img');
      img.setAttribute("class", "emojis");
      img.setAttribute("style", "position:absolute;");
      img.setAttribute("src", "assets/emojis/e26.png");
      document.body.appendChild(img);
      var xy = getRandomPosition(img);
      img.style.top = xy[0] + 'px';
      img.style.left = xy[1] + 'px';
    }   


      if (event.keyCode == 48) {
      sound27.play();
      var img = document.createElement('img');
      img.setAttribute("class", "emojis");
      img.setAttribute("style", "position:absolute;");
      img.setAttribute("src", "assets/emojis/e27.png");
      document.body.appendChild(img);
      var xy = getRandomPosition(img);
      img.style.top = xy[0] + 'px';
      img.style.left = xy[1] + 'px';
    } 

      if (event.keyCode == 49) {
      sound28.play();
      var img = document.createElement('img');
      img.setAttribute("class", "emojis");
      img.setAttribute("style", "position:absolute;");
      img.setAttribute("src", "assets/emojis/e28.png");
      document.body.appendChild(img);
      var xy = getRandomPosition(img);
      img.style.top = xy[0] + 'px';
      img.style.left = xy[1] + 'px';
    }

      if (event.keyCode == 50) {
      sound29.play();
      var img = document.createElement('img');
      img.setAttribute("class", "emojis");
      img.setAttribute("style", "position:absolute;");
      img.setAttribute("src", "assets/emojis/e29.png");
      document.body.appendChild(img);
      var xy = getRandomPosition(img);
      img.style.top = xy[0] + 'px';
      img.style.left = xy[1] + 'px';
    } 

      if (event.keyCode == 51) {
      sound30.play();
      var img = document.createElement('img');
      img.setAttribute("class", "emojis");
      img.setAttribute("style", "position:absolute;");
      img.setAttribute("src", "assets/emojis/e30.png");
      document.body.appendChild(img);
      var xy = getRandomPosition(img);
      img.style.top = xy[0] + 'px';
      img.style.left = xy[1] + 'px';
    } 

      if (event.keyCode == 52) {
      sound31.play();
      var img = document.createElement('img');
      img.setAttribute("class", "emojis");
      img.setAttribute("style", "position:absolute;");
      img.setAttribute("src", "assets/emojis/e31.png");
      document.body.appendChild(img);
      var xy = getRandomPosition(img);
      img.style.top = xy[0] + 'px';
      img.style.left = xy[1] + 'px';
    } 

      if (event.keyCode == 53) {
      sound32.play();
      var img = document.createElement('img');
      img.setAttribute("class", "emojis");
      img.setAttribute("style", "position:absolute;");
      img.setAttribute("src", "assets/emojis/e32.png");
      document.body.appendChild(img);
      var xy = getRandomPosition(img);
      img.style.top = xy[0] + 'px';
      img.style.left = xy[1] + 'px';
    } 

      if (event.keyCode == 54) {
      sound33.play();
      var img = document.createElement('img');
      img.setAttribute("class", "emojis");
      img.setAttribute("style", "position:absolute;");
      img.setAttribute("src", "assets/emojis/e33.png");
      document.body.appendChild(img);
      var xy = getRandomPosition(img);
      img.style.top = xy[0] + 'px';
      img.style.left = xy[1] + 'px';
    } 

      if (event.keyCode == 55) {
      sound34.play();
      var img = document.createElement('img');
      img.setAttribute("class", "emojis");
      img.setAttribute("style", "position:absolute;");
      img.setAttribute("src", "assets/emojis/e34.png");
      document.body.appendChild(img);
      var xy = getRandomPosition(img);
      img.style.top = xy[0] + 'px';
      img.style.left = xy[1] + 'px';
    } 

      if (event.keyCode == 56) {
      sound35.play();
      var img = document.createElement('img');
      img.setAttribute("class", "emojis");
      img.setAttribute("style", "position:absolute;");
      img.setAttribute("src", "assets/emojis/e35.png");
      document.body.appendChild(img);
      var xy = getRandomPosition(img);
      img.style.top = xy[0] + 'px';
      img.style.left = xy[1] + 'px';
    } 

      if (event.keyCode == 57) {
      sound36.play();
      var img = document.createElement('img');
      img.setAttribute("class", "emojis");
      img.setAttribute("style", "position:absolute;");
      img.setAttribute("src", "assets/emojis/e36.png");
      document.body.appendChild(img);
      var xy = getRandomPosition(img);
      img.style.top = xy[0] + 'px';
      img.style.left = xy[1] + 'px';
    }   
});  

$(document).keyup(function(event) {
     if (event.keyCode == 65) {
     var a= document.getElementById('wrapper');
      $img = $("img").fadeOut(1000);  
    }

     if (event.keyCode == 66) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

     if (event.keyCode == 67) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

    if (event.keyCode == 68) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

     if (event.keyCode == 69) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

     if (event.keyCode == 70) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   } 
    if (event.keyCode == 71) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

     if (event.keyCode == 72) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

     if (event.keyCode == 73) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

    if (event.keyCode == 74) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

     if (event.keyCode == 75) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

     if (event.keyCode == 76) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }  


     if (event.keyCode == 77) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

    if (event.keyCode == 78) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

     if (event.keyCode == 79) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

     if (event.keyCode == 80) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   } 

        if (event.keyCode == 81) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   } 
    if (event.keyCode == 82) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

     if (event.keyCode == 83) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

     if (event.keyCode == 84) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

    if (event.keyCode == 85) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

     if (event.keyCode == 86) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

     if (event.keyCode == 87) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }  


     if (event.keyCode == 88) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

    if (event.keyCode == 89) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

     if (event.keyCode == 90) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

       if (event.keyCode == 48) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   } 
    if (event.keyCode == 49) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

     if (event.keyCode == 50) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

     if (event.keyCode == 51) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

    if (event.keyCode == 52) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

     if (event.keyCode == 53) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

     if (event.keyCode == 54) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }  


     if (event.keyCode == 55) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

    if (event.keyCode == 56) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

     if (event.keyCode == 57) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

     if (event.keyCode == 67) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

    if (event.keyCode == 68) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

     if (event.keyCode == 69) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

     if (event.keyCode == 70) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   } 
    if (event.keyCode == 71) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

     if (event.keyCode == 72) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

     if (event.keyCode == 73) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

    if (event.keyCode == 74) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

     if (event.keyCode == 75) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

     if (event.keyCode == 76) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }  


     if (event.keyCode == 77) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

    if (event.keyCode == 78) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

     if (event.keyCode == 79) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

     if (event.keyCode == 80) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   } 

        if (event.keyCode == 81) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   } 
    if (event.keyCode == 82) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

     if (event.keyCode == 83) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

     if (event.keyCode == 84) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

    if (event.keyCode == 85) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

     if (event.keyCode == 86) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

     if (event.keyCode == 87) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }  


     if (event.keyCode == 88) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

    if (event.keyCode == 89) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

     if (event.keyCode == 90) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

       if (event.keyCode == 48) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   } 
    if (event.keyCode == 49) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

     if (event.keyCode == 50) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

     if (event.keyCode == 51) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

    if (event.keyCode == 52) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

     if (event.keyCode == 53) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

     if (event.keyCode == 54) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }  


     if (event.keyCode == 55) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

    if (event.keyCode == 56) {
     var a= document.getElementById('wrapper');
       $("img").fadeOut(1000);
   }

     if (event.keyCode == 57) {
     var a = document.getElementById('wrapper');
       $("img").fadeOut(1000);
      }

});


