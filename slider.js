$(document).ready(function(){
//     var indexDiv = 0;
//    var counter = 1;
//    
//    
//    
//    
//        var interval = setInterval(function () {
//        var lenSlide = (len - 2) * -100;
//        $(".btns").find(".bgc-btn").attr("class", "").next().addClass("bgc-btn");
//        $(" .cslide-slides-container").animate({
//            marginRight: indexDiv - 100 + "%"
//        }, 250);
//        indexDiv = indexDiv - 100;
//        if (indexDiv < lenSlide) {
//            indexDiv = 100;
//        }
//        if (counter == $(".cslide-slide").size()) {
//            $("span[data-btn=0]").addClass("bgc-btn");
//            counter = 0;
//        }
//    
//            counter++;
//        
//        //    
//    }, 2000);
//        
//
//    
//  $(".btns").mouseenter(function(){
// 
//$(".cslide-slides-container").stop();          
//    
//      
//  });
//      
//  $(".btns").mouseleave(function(){
//   var interval = setInterval(function () {
//        var lenSlide = (len - 2) * -100;
//        $(".btns").find(".bgc-btn").attr("class", "").next().addClass("bgc-btn");
//        $(" .cslide-slides-container").animate({
//            marginRight: indexDiv - 100 + "%"
//        }, 250);
//        indexDiv = indexDiv - 100;
//        if (indexDiv < lenSlide) {
//            indexDiv = 100;
//        }
//        if (counter == $(".cslide-slide").size()) {
//            $("span[data-btn=0]").addClass("bgc-btn");
//            counter = 0;
//        }
//   
//            counter++;
//       
//        //    
//    }, 2000);
//      
//  });
    
    
    $("#cslide-slides").each(function(){
                var slidesContainerId = "#" + ($(this).attr("id"));
       len = $(slidesContainerId + " .cslide-slide").size();
            // get number of slides
            var slidesContainerWidth = len * 100 + "%"; // get width of the slide container
            var slideWidth = (100 / len) + "%"; // get width of the slides
            // set slide container width
            $(slidesContainerId + " .cslide-slides-container").css({
                visibility: "visible"
                , width: slidesContainerWidth
            });
            $(".cslide-slide").css({
                width: slideWidth
            });
        
        
        
            $("span").click(function () {
                $(".btns").find(".bgc-btn").attr("class", "");
                $(this).attr("class", "bgc-btn");
                var btnIndex = $(this).attr("data-btn") * -100 + "%";
                $(" .cslide-slides-container").animate({
                    marginRight: btnIndex
                }, 250);
            });
    });
    
    
    
});


   


    
    
