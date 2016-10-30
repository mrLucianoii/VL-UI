    
var el = document.getElementsByClassName("scene-1-btn"),
            targEl =  [];

var stg1;
    //console.log( targEl[0] );

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


var Picture = {
    items : {},
    getData : function() {
        var loadJson = {};
        //Ajax Jason files
         $.getJSON( "json/content.json", function( data ) {
            $.each( data, function( key, val ) {
                loadJson[key] = val;
            });            
        });//End Ajxax
        return this.items = loadJson;
    },
    currentImg : 0 , //first index is defualt
    loadImages : function(parent, imgBtn){
     //   var size = Picture.items[0].documentaries.imageFile.length;

        if (imgBtn == true){    
            this.currentImg++;
            $(parent + " .cont2").css("background-image", "url(img/uploads/"+Picture.items[0].documentaries.imageFile[this.currentImg]+".jpg)")
            
        }
        else {
            this.currentImg--;
            $(parent + " .cont2").css("background-image", "url(img/uploads/"+Picture.items[0].documentaries.imageFile[this.currentImg]+".jpg)")

        }

        
        //$(parent + " .cont2").css("background-image", "url("+Picture.items[0].documentaries.imageFile[1]+".jpg)");
        console.log(this.currentImg);
    }

       
}

Picture.getData();

var expand = function(targ){
    console.log($(targ)[0].dataset.exp);
    var $parent = $(targ)[0].dataset.exp,
        $target = $($parent + " .cont3 p#overview")[0].innerHTML;

  
        //console.log($($parent + " .cont3 p#overview"));

    
    $($parent + " .cont3").toggleClass("expand", function(){
        if($target === "Click to learn more."){
            console.log("empty");
            $($parent + " .cont3 p#overview")[0].innerHTML = Picture.items[0].documentaries.overview;
            
        }else {    
            $($parent + " .cont3 p#overview")[0].innerHTML = "Click to learn more.";

        }
    });
  
}

var nextImg = function(targ){
    var $parent = $(targ)[0].dataset.exp;
    console.log('next');
    Picture.loadImages($parent, true);

}
var prevImg = function(targ){
    var $parent = $(targ)[0].dataset.exp;
    Picture.loadImages($parent, false);


}

