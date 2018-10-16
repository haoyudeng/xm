//obj : 表示操作的运动对象
//target ： 目标值
//attr ： 操作的样式属性
//支持缓冲运动和多物体运动   支持透明度改变
function startMove(obj,target,attr){
	clearInterval( obj.timer );
	obj.timer = setInterval( function(){
		var current = 0;
		if( attr == "opacity" ){
			current = getStyle( obj , "opacity" )*100;
		}else{
			current = parseInt( getStyle( obj , attr ) ) ;//获取当前样式值
		}
		var speed = (target-current) / 10;
		speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
		if( current == target ){
			clearInterval( obj.timer );
		}else{
			if( attr == "opacity" ){
				obj.style["opacity"] = (current + speed) / 100;
			}else{
				obj.style[attr] = current + speed + "px";
			}
		}
	},30 )
}	

function getStyle(obj,attr){
	if( window.getComputedStyle ){
		return window.getComputedStyle(obj,false)[attr];
	}else{
		return obj.currentStyle[attr];
	}
}