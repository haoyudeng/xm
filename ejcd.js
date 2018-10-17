// 头部二级菜单
// var aLi = document.querySelectorAll(".navs2 li");
var aLi = $(".navs2").children(".memu");
for(var i = 0 ; i < aLi.length ; i ++ ){
	aLi[i].onmouseenter = function(){
        var oA = $(this).children().children("a");
		var div = $(this).children(".two_navs");
        div[0].style.display = "block";
        oA[0].style.cssText = 'color : #333;background:#fff;border-right:solid 1px #dfdfdf;border-left:solid 1px #dfdfdf;padding:0 13px';
	}
	aLi[i].onmouseleave = function(){
        var oA = $(this).children().children("a");
		var div = $(this).children(".two_navs");
        div[0].style.display = "none";
        oA[0].style.cssText = 'color:#e5e5e5;background:#333;border-right:none;border-left:none;'
	}

}
// 左侧二级菜单
var aLis = $(".nav_shopall_list").children().children();
var aDiv = $(".nav_shopall_pop").children(".popBox");
var nav = document.querySelector(".nav_shopall_pop")
for(var i = 0 ; i < this.aLis.length ; i ++ ){
    aLis[i].index = i;
    aLis[i].onmouseenter = function(){
        for(var j = 0 ; j < aDiv.length ; j ++ ){
            nav.style.zIndex = "0";
            aLis[j].style.background = "none";
            $(aLis[j]).children()[0].style.color = "#333";
            aDiv[j].style.display = "none";
        }
        aLis[this.index].style.background = "rgba(255,255,255,1)";
        $(aLis[this.index]).children()[0].style.color = "#d80c18";
        nav.style.zIndex = "4";
        aDiv[this.index].style.display = "block";
        
    }
    aLis[i].onmouseleave = function(){
        nav.style.zIndex = "0";
        aLis[this.index].style.background = "none";
        $(aLis[this.index]).children()[0].style.color = "#333";
        aDiv[this.index].onmouseenter = function(){
            for(var k = 0 ; k < aDiv.length ; k ++ ){
                nav.style.zIndex = "0";
                aDiv[k].style.display = "none";
            }
            nav.style.zIndex = "4";
            this.style.display = "block";
        }
        aDiv[this.index].onmouseleave = function(){
            nav.style.zIndex = "0";
            this.style.display = "none";
        }
        nav.style.zIndex = "0";
        aDiv[this.index].style.display = "none";
    }
}
