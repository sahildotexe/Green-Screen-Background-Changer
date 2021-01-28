var fgimg = null ;
var bgimg = null ;

function fgload(){
   var fileinput = document.getElementById("fginput");
  fgimg = new SimpleImage(fileinput);
  var imgcanvas1 = document.getElementById("abc");
  fgimg.drawTo(imgcanvas1);
  }

function bgload(){
   var fileinput2 = document.getElementById("bginput");
  bgimg = new SimpleImage(fileinput2);
  var imgcanvas2 = document.getElementById("xyz");
  bgimg.drawTo(imgcanvas2);
  }



function combine(){
  var output = new SimpleImage(fgimg.getWidth(),fgimg.getHeight())
  for(var pixel of fgimg.values()){
    var x = pixel.getX();
    var y = pixel.getY();
    if (pixel.getGreen() > (pixel.getRed() + pixel.getBlue()) ) {
      var bgpixel = bgimg.getPixel(x,y);
      output.setPixel(x,y,bgpixel);
    }
      else {
        output.setPixel(x,y,pixel);
        
      }
 
   
  }
  var imgcanvas3  = document.getElementById("abc");
  var d1  = document.getElementById("xyz");
  output.drawTo(imgcanvas3);
  var context = d1.getContext("2d");
context.clearRect(0,0,d1.width,d1.height);
  
}

