
        $(document).ready(function () {
            $(".g-up").click(function () {
                $("html, body").animate({
                    scrollTop: 0
                }, 1000);
            });
            $("#flip").click(function () {
                $("#panel").slideToggle("slow");
            });
            
            $(".buttons  span").click(function(){
                $(".row-slider").animate({
                   left: "1000px"
                },1000);
            });
            
            
        });
  