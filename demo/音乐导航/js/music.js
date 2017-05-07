/**
 * Created by xiaoli on 2017/3/2.
 */

    $(function(){

        $("#container li").append("<ins></ins>");
        var arr = new Array ("green","yellow","black","red","pink","purple","blue","orange");
        $("ul li ins").each(function(index,ele){
            $(this).css("background-color",arr[index]);
        });

        $("#container li").mouseenter(function(){
            $(this).children("ins").stop().animate({top:0},250);
            $("audio").get($(this).index()).load();
            $("audio").get($(this).index()).play();
        }).mouseleave(function () {
            $(this).children("ins").stop().animate({top:50},200);
        });
        $(window).keydown(function(event){
            var num = 0;
            if(event.keyCode>=48&&event.keyCode<=55){
                num = event.keyCode-49;

                $("#container li").eq(num).trigger("mouseenter");

                setTimeout(function(){
                    $("#container li").eq(num).trigger("mouseleave");
                },300)

            }
        });





    });