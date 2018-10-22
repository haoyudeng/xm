function WaterFall(){}
$.extend(WaterFall.prototype,{
    init:function(){
        this.page = 1;
        this.main = $("#pbl").children("ul");
        this.loading = false;
        this.loadJson()
        .done(function(res){
            this.json = res.subjects;
            this.renderPage(res);
        })
        this.bindEvent();
        this.listSum();
    },
    loadJson:function(){
        var opt = {
            url:"https://list.mogujie.com/search",
            dataType:"jsonp",
            data:{page:this.page},
            // this => 指向实例化对象;
            context:this
        }
        return $.ajax(opt);

    },
    renderPage:function(json1){
        var json=json1.result.wall.list;
        console.log(json);
        var html = "";
        for(var i = 0; i < json.length ; i++){
            html += `
                <li class="goods">
                    <img src="${json[i].show.img}">
                    <h3>
                        <span>价格:<em>${json[i].price}</em></span>${json[i].props[0]}  
                         
                    </h3>
                    <button date-id = ${json[i].iid}>加入购物车</button>
                </li>
            `
        }
        this.main.html(this.main.html()+html);
        this.loading = false;
    },
    bindEvent(){
        $(window).on("scroll",this.Judgeload.bind(this));
        $("#shopList ul").on("click","button",this.addCar.bind(this));

                $("#ShoppingCar").on("mouseenter",this.showList.bind(this));
                $("#ShoppingCar").on("mouseleave",function(){
                    $(".goods-list").children().remove();
                });
                $("#ShoppingCar").on("click",function(event){
                    var target = event.target ; 
                    if(target != $("#ShoppingCar")[0]) return 0;

                    $.removeCookie("shopCar");
                    // 执行鼠标移出事件;
                    $("#ShoppingCar").triggerHandler("mouseleave");
                    this.listSum();
                }.bind(this));
    },
    Judgeload(){
        var scrollTop = $("html,body").scrollTop();
        var clientHeight = $("html")[0].clientHeight;
        var lastBox = this.main.children(":last");
        if(scrollTop + clientHeight > lastBox.offset().top){
            if(this.loading){
                return 0;
            }
            this.loading = true;
            this.page ++;
            this.loadJson()
            .done(function(res){
                this.renderPage(res);
            })
        }
    },
    addCar:function(event){
        var target = event.target;
        var goods = $(target).attr("data-id");
        var cookie;
        if((cookie = $.cookie("shopCar"))){
            var cookieArray = JSON.parse(cookie);
            var hasGoods = false;
            for(var i = 0; i<cookieArray.length ;i++){
                if(cookieArray[i].id == goodsId){
                    hasGoods = true;
                    cookieArray[i].num ++;
                    break;
                }
            }
            if(hasGoods == false){
                var goods = {
                    id : goodsId,
                    num : "1"
                }
                cookieArray.push(goods);
            }
            $.cookie("shopCar",JSON.stringify(cookieArray));
                }else{
                    $.cookie("shopCar",`[{"id":"${goodsId}","num":"1"}]`);
                }
                console.log($.cookie("shopCar"));
                this.listSum();
        },
        showList:function(event){
            var target = event.target;
            if(target != $(".shopCar>div")[0]) return 0;

                var cookie;
                if(!(cookie = $.cookie("shopCar"))){ return 0; };
                var cookieArray = JSON.parse(cookie);

                var html = "";
                // for 购物车里有多少商品就拼接多少个;
                for(var i = 0 ; i < cookieArray.length ; i ++){
                    // console.log(cookieArray[i]);
                    // for 判断哪一个商品是购物车里的商品;
                    for(var j = 0 ; j < this.json.length ; j ++){
                        if(cookieArray[i].id == this.json[j].id){
                            html += `<li data-id="${cookieArray[i].id}">
                                        <img src="${json[i].show.img}" alt="">
                                        <h3>${json[i].props[0]}</h3>
                                        <strong>${cookieArray[i].num}</strong>
                                    </li>`;
                            break;
                        }
                    }
                }
                $(".goods-list").html(html);
        },
        listSum:function(){
            var cookie;
            if(!(cookie = $.cookie("ShoppingCar"))){
                $("#ShoppingCar").find("span").html(0);
                return 0;
            };
            var cookieArray = JSON.parse(cookie);
            var sum = 0;
            for(var i = 0;i<cookieArray.length ; i++){
                sum += Number(cookieArray[i].num);
            }
            $("#ShoppingCar").find("span").html(sum);
        }
})
var waterfall = new WaterFall();
waterfall.init();   
// $.ajax({
//         url:"https://list.mogujie.com/search",
//         dataType:"jsonp",
//         data:{page:1}
//     })
//     .then(function(res){
//         console.log(res);
//     })
