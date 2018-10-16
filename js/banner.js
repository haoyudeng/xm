	// var index = 0;
	// var timer = null;
	// var uList = $("#ulist").children();
    // var oList = $("#olist").children();
    // var Left = $(".Leftarr");
    // var Right = $(".Rightarr");
    // timer = setInterval( autoPlay , 2000 );
    // var index = 0;
	// function autoPlay(){
    //     index++;
	// 	for( var i = 0 ; i < oList.length ; i++ ){
	// 		oList[i].className = "";
    //         startMove( uList[i] , 0 , "opacity" );
            
    //     }
        
    //     if( index == oList.length ){
	// 		index = 0;
    //     }
        
	// 	oList[index].className = "current";
    //     startMove( uList[index] , 100 , "opacity" ); 
	// }
	// for( let i = 0 ; i < oList.length ; i++ ){
	// 	oList[i].onmouseover = function(){
	// 		clearInterval( timer );
	// 		index = i-1;
	// 		autoPlay();
	// 	}
	// 	oList[i].onmouseout = function(){
	// 		timer = setInterval( autoPlay , 2000 );
    //     }
    // }
    // Left[0].onmouseover = function(){
    //     clearInterval(timer);
    //     Left[0].style.backgroundPositionY = "-61px";
    //     Left[0].onmouseout = function(){
    //         Left[0].style.backgroundPositionY = "0"
    //         timer = setInterval( autoPlay , 2000 );
    //     }

    // }
    
    // Right[0].onmouseover = function(){
    //     clearInterval(timer);
    //     Right[0].style.backgroundPositionY = "-61px";
    //     Right[0].onmouseout = function(){
    //         Right[0].style.backgroundPositionY = "0"
    //         timer = setInterval( autoPlay , 2000 );
    //     }

    // }
 
    $(function(){
        
        
        
        //第一张显示
        $("#ulist li").eq(0).show();
        //鼠标滑过手动切换，淡入淡出
        $("#olist li").mouseover(function() {
            $(this).addClass('current').siblings().removeClass("current");
            var index = $(this).index();
            i = index;
            $("#ulist li").eq(index).fadeIn(500).siblings().fadeOut(500);
        });
        //自动轮播
        var i=0;
        var timer=setInterval(play,2000);
        //向右切换
        var play=function(){
            i++;
            i = i > 4 ? 0 : i ;
            $("#olist li").eq(i).addClass('current').siblings().removeClass("current");
            $("#ulist li").eq(i).fadeIn(500).siblings().fadeOut(500);
        }
        //向左切换
        var playLeft=function(){
            i--;
            i = i < 0 ? 4 : i ;
            $("#olist li").eq(i).addClass('current').siblings().removeClass("current");
            $("#ulist li").eq(i).fadeIn(500).siblings().fadeOut(500);
        }
        //鼠标移入移出效果
        $("#banner").hover(function() {
            clearInterval(timer);
        }, function() {
            timer=setInterval(play,2000);
        });
        //左右点击切换
        $(".Leftarr").click(function(){
            playLeft();
        })
        $(".Rightarr").click(function(){
            play();
        })
        $(".Leftarr")[0].onmouseover = function(){
            $(".Leftarr")[0].style.backgroundPositionY = "-61px";
            $(".Leftarr")[0].onmouseout = function(){
                $(".Leftarr")[0].style.backgroundPositionY = "0"; 
            }
        }
        $(".Rightarr")[0].onmouseover = function(){
            $(".Rightarr")[0].style.backgroundPositionY = "-61px";
            $(".Rightarr")[0].onmouseout = function(){
                $(".Rightarr")[0].style.backgroundPositionY = "0"; 
            }
        }
    })	 