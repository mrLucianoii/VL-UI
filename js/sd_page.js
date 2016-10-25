    
var el = document.getElementsByClassName("scene-1-btn"),
            targEl =  [];

var stg1;
    console.log( targEl[0] );

function gridLaunch(e){
    
    targEl[0] = $(".stage");
    console.log(e.currentTarget.dataset.service);

    var $target = e.currentTarget.dataset.service;

    $("#fullpage").toggleClass("off");
    if ( targEl[1].hasClass("gd") ){
            console.log("Condition Test");
            targEl[1].removeClass('gd');
            
            $("#fullpage").removeClass('off');

    }else {
            console.log("Condition Test");
            targEl[1].addClass('gd');
            $("#fullpage").addClass('off');
    }
}

function toggleSD(e){
    console.log(e.currentTarget.dataset.service);
        targEl[0] = $(".stage");

    console.log( targEl[0] );

    var $target = e.currentTarget.dataset.service;
            
       if ( targEl[0].hasClass("to3") ){
            console.log("Condition 1");
            targEl[0].removeClass('to3');
            targEl[0].removeClass('to2');
            

        }else if ( targEl[0].hasClass("to2") ) {
            console.log("Condition 2");
            targEl[0].addClass('to3');

        }else {            
            console.log("Condition 3");
            targEl[0].addClass('to2');
            
        } 
   
        
    return true;
}
function topScroll(){
        console.log("swinging start");

        $(document).off("scroll");

        var target = this.hash,
            menu = target;
        $target = $(".b1");
		
        $('.verbiage').animate({
            'scrollTop': 0
        }, 333, 'swing', function () {
            console.log("swinging success");
        });

}

/* Content Loading */

var itemsSD = null;

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        itemSD = JSON.parse(this.responseText);
    }else {
        itemsSD = {
    "documentaries": {
        "overview": "Telling a compelling story that an audience can sympathize with is the key to the settlement process. To avoid the stresses that a client can often experience as a result from a lengthy and demanding trial, we have become highly successful in producing emotional and visually impactful settlement documentaries. A settlement is often the best case scenario in any civil case and is one of the most difficult objectives to achieve in litigation.",
        "imageFile": ["49ersStadium_03082014", "BakerBeachPanorama", "BakerBeackPano2", "web-point-cloud3"]
        }
    }
  };
    xhttp.open("GET", "../json/content.json", true);
    xhttp.send();
}

//GET Content
  //  loadDoc();
var expanded = false;

function expand(targ){
    
    var $parent = $(targ)[0].dataset.exp,
        $target =   $($parent + " .cont3 p#overview")[0];
    
    
    
    $($parent + " .cont3").toggleClass("expand", function(){
        if($target.innerHTML === "Click to learn more."){
            console.log("empty");
           $target.innerHTML = itemSD[0].documentaries.overview;
            
        }else {
            
            console.log("Not empty");
            $target.innerHTML = "Click to learn more.";            
        }  
    });
    return true;
    
}
    /*
function toggleImages(targ){
    /* var $parent = $(targ)[0].dataset.exp,
         $target = $($parent + " .cont1")[0],
         $image = $($parent + " .cont2"),
         $file = itemSD[0].documentaries.imageFile,
         $path = "url('img/uploads/'"+$file[i]+".jpg"; 
    
    console.log($parent);
    //console.log($target);
  //  console.log($image.css);
    
//$image.css("background-image", $path );
    
 //   i++;
               
   return true;
} */
