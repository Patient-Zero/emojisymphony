window.onload = function(){
  var logged = [];
  var timer;
  var counter = 0;
  var show = [];
  var i = 0;
  var emojiSound = {
      65: "assets/sound1.mp3",

      66: "assets/sound2.mp3",

      67: "assets/sound3.mp3", 

      68: "assets/sound4.mp3", 

      69: "assets/sound5.mp3",

      70: "assets/sound6.mp3",

      71: "assets/sound7.mp3",

      72: "assets/sound8.mp3",

      73: "assets/sound9.mp3",

      74: "assets/sound10.mp3",

      75: "assets/sound11.mp3",

      76: "assets/sound12.mp3",

      77: "assets/sound13.mp3",

      78: "assets/sound14.mp3",

      79: "assets/sound15.mp3",

      80: "assets/sound18.mp3",

      81: "assets/sound17.mp3",

      82: "assets/sound18.mp3",

      83: "assets/sound19.mp3",

      84: "assets/sound20.mp3",

      85: "assets/sound21.mp3",

      86: "assets/sound22.mp3",

      87: "assets/sound23.mp3",

      88: "assets/sound24.mp3",

      89: "assets/sound25.mp3",

      48: "assets/sound27.mp3",
      
      90: "assets/sound26.mp3",

      49: "assets/sound28.mp3",

      50: "assets/sound29.mp3",

      51: "assets/sound30.mp3",

      52: "assets/sound31.mp3",

      53: "assets/sound32.mp3",

      54: "assets/sound33.mp3",

      55: "assets/sound34.mp3",

      56: "assets/sound35.mp3",

      57: "assets/sound36.mp3"
    };
  

  document.body.addEventListener('keydown',function(event) {
    clearTimeout(timer);

   

    var character = String.fromCharCode(event.which);
      logged.push(event.keyCode);
      console.log(logged);
  });  // end of keydown
  

  document.getElementById("button").addEventListener('click', function(event){
    var pictures = document.getElementsByClassName("emojis");
    var picInterval = setInterval(function(){
      pictures[i].style.display = "block";
      show.push(pictures);
      i++;
        if(i >= pictures.length){
        clearInterval(picInterval);
        i = 0;
      };
    }, 650)
  });   

  document.getElementById("button").addEventListener('click', function(event) {
    var interval = setInterval(function(){
      emojiSound[logged[counter]];
      console.log(emojiSound[logged[counter]]);
    var sounds = (emojiSound[logged[counter]]);

    var playSound = new Howl({
      src: [sounds],
      format: "mp3"
    });
    playSound.play();
    console.log(playSound);
      counter++;
      if(counter >= logged.length){
        clearInterval(interval);
        counter = 0;
      };
    }, 650);

  });

  function reset(){
    var pictures = document.getElementsByClassName("emojis");
    for (var n=0; n<pictures.length; n++){
        pictures[n].style.opacity = 0;
      }
      logged.length=0;
      pictures=null;
      console.log(logged);
      
  
      var counter = 0;
      // var emojiSound = null;
  };

  document.getElementById("reset").onclick=function(){
  reset();
  };
} //window close brace
    

