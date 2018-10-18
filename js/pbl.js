function WaterFall(){}
$.extend(WaterFall.prototype,{
    init:function(){
        this.page = 1;
        this.main = $("#pbl").children("ul");
        this.loading = false;
        this.loadJson()
        .done(function(res){
            this.renderPage(res);
        })
        this.bindEvent();
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
                </li>
            `
        }
        this.main.html(this.main.html()+html);
        this.loading = false;
    },
    bindEvent(){
        $(window).on("scroll",this.Judgeload.bind(this));
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
