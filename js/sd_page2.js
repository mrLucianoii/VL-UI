    
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

var itemsSD = [];

function expand(targ){
    console.log($(targ)[0].dataset.exp);
    var $parent = $(targ)[0].dataset.exp,
        $expanded = false,
        $width = null,
        $height = null;
  
        console.log($($parent + " .cont3 p#overview"));

    
    $($parent + " .cont3").toggleClass("expand");
    $($parent + " .cont3 p#overview")[0].innerHTML = "Yo Bitch";
    $.getJSON( "json/content.json", function( data ) {
        console.log(data);
        $.each( data, function( key, val ) {
            itemsSD[key] = val;
        });
    console.log( itemsSD );
});

    
  /*  
    if ($expanded){
        
    }else {
        $width = $($parent + " .cont3").width();
        $height = $($parent + " .cont3").height();
        
    }
    $($parent + " .cont3").animate({
        'width': $width,
        'height': $height
    }, 333, 'swing', function(){
       
        console.log("Grow Doggy");
        
    }); */
    
}
