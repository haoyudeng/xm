function WaterFall(){}
$.extend(WaterFall.prototype,{
    init:function(){
        this.page = 1;
        this.main = $("#pbl ul");
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
    renderPage:function(json){
        var html = "";
        for(var i = 0; i < JSON.length ; i++){
            html += `
                <li class="goods">
                    <img src="${list[i].show.img}">
                    <h3>
                        <span>价格:<em>${list[i].price}</em></span>${list[i].props}   
                    </h3>
                </li>
            `
        }
        this.main.html(this.main.html()+html);
    },
    bindEvent(){
        $(window).on("scroll",this.Judgeload.bind(this));
    },
    Judgeload(){
        var scrollTop = $("html,body").scrollTop();
        var clientHeight = $("html")[0].clientHeight;
        var lastBox = $("#foot");
        if(scrollTop + clientHeight > lastBox.offset().top){
            if(this.loading){
                return 0;
            }
            this.loading = true;
            this.pagr ++;
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
