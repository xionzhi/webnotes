//@adnen_rebai
function rgb2hex(rgb) {
    if (  rgb.search("rgb") == -1 ) {
         return rgb;
    } else {
         rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
         function hex(x) {
              return ("0" + parseInt(x).toString(16)).slice(-2);
         }
         return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]); 
    }
}

$(document).ready(function(){


function load(e){
   
}


var limit=6;
   
   
    $('.c').on('click',function(){
       
         if($('.color__tags').children().length < limit)
          {
        
           
        var color= $(this).css( "background-color" );
        $('.color__tags').append('<div class="badge" style="background-color:'+rgb2hex(color)+'">'+rgb2hex(color)+'<span class="close"></span></div>');

           $('.close').click(function(){
               $(this).parent().remove();
           });
          }
       
     }); 
   
   
   
   
   
   


})


