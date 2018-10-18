//二级菜单
var aLi = $(".logoList").children("ul").children(".ejcd");
for(var i = 0 ; i < aLi.length; i++){
    aLi[i].onmouseenter = function(){
        var oDiv = $(this).children(".subNav");
        
        oDiv[0].style.display = "block";
        this.onmouseleave = function(){
            oDiv[0].style.display = "none"
        }
    }
}


//回到顶部;
var oA = $("#suspend").children("ul").children(".goTop");
oA.click = function(e){
    var scroll = document.body.scrollTop || document.documentElement.scrollTop;
    if(scroll>0){
        scroll = 0;
    }else{
        scroll = 0;
    }
}

//微信二维码
var wechat = $("#Wechat").children("a").children("span");
var oB = document.querySelector(".ewm")
console.log(oB)
wechat[0].onmouseover = function(){
    oB.style.display = "block";
    wechat[0].onmouseleave = function(){
        oB.style.display = "none"
    }
}

//购物车划过效果
var oDiv = $("#ShoppingCar");
var lDiv = $("#shopList");
oDiv[0].onmouseenter = function(){
    oDiv[0].className = "hover";
    lDiv[0].style.display = "block";
    oDiv[0].onmouseleave = function(){
        oDiv[0].className = "Shopping";
        lDiv[0].style.display = "none";
    }
    lDiv[0].onmouseleave = function(){
        oDiv[0].className = "Shopping";
        lDiv[0].style.display = "none";
    }
}