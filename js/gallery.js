/*Name this external file gallery.js*/

function upDate(previewPic){
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image    */
       
   document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
       
        /*2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */
   
   document.getElementById("description").textContent = previewPic.alt;
    
   /*console log debug messages*/
     console.log(previewPic.src);
     console.log(previewPic.alt);
     
       }
   
       function unDo(){
        /* In this function you should 
       1) Update the url for the background image of the div with the id = "image" 
       back to the orginal-image.  You can use the css code to see what that original URL was    */
       
       document.getElementById("image").style.backgroundImage = " url('')";
       
       /* 2) Change the text  of the div with the id = "image" 
       back to the original text.  You can use the html code to see what that original text was
       */
     
   document.getElementById("description").textContent = "Hover over an image below to display here.";
           
       }

function tabindex() {

    currentImages = document.querySelectorAll(".grid img")
    for (var i = 0; i < currentImages.length; i++) {
        console.log("Image "+ i)

        currentImages[i].setAttribute("tabindex","0")
    }

}