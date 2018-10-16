	var index = 0;
	var timer = null;
	var uList = $("#ulist").children();
    var oList = $("#olist").children();
    var Left = $(".Leftarr");
    var Right = $(".Rightarr");
    timer = setInterval( autoPlay , 2000 );
    var index = 0;
	function autoPlay(){
        index++;
		for( var i = 0 ; i < oList.length ; i++ ){
			oList[i].className = "";
            startMove( uList[i] , 0 , "opacity" );
            
        }
        
        if( index == oList.length ){
			index = 0;
        }
        
		oList[index].className = "current";
        startMove( uList[index] , 100 , "opacity" ); 
	}
	for( let i = 0 ; i < oList.length ; i++ ){
		oList[i].onmouseover = function(){
			clearInterval( timer );
			index = i-1;
			autoPlay();
		}
		oList[i].onmouseout = function(){
			timer = setInterval( autoPlay , 2000 );
        }
    }
    Left[0].onmouseover = function(){
        clearInterval(timer);
        Left[0].style.backgroundPositionY = "-61px";
        Left[0].onmouseout = function(){
            Left[0].style.backgroundPositionY = "0"
            timer = setInterval( autoPlay , 2000 );
        }

    }
    
    Right[0].onmouseover = function(){
        clearInterval(timer);
        Right[0].style.backgroundPositionY = "-61px";
        Right[0].onmouseout = function(){
            Right[0].style.backgroundPositionY = "0"
            timer = setInterval( autoPlay , 2000 );
        }

    }
    
	 