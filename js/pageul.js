var curPage =1;//当前页码
var total,pageSize,totalPage;
//获取数据
function getData(page){
    $.ajax({
        type:'get',
        url:'data1.json',
        data:"",
        dataType:'json',
        beforeSend:function(){
            $("#list ul").append("<li id='loading'>loading...</li>");
        },
        success:function(json){
            $("#list ul").empty();
            total = json.length;//总记录数
            pageSize = 6;//每页显示条数
            curPage = 1;//当前页
            totalPage = parseInt(json.length/pageSize);//总页数
            var li ="";
            var list = json.name;
            $.each(list,function(json.id,json.name){//遍历json数据列
                
                if(0==index &&1==curPage)li +="<li><a href=\""+ array['content']+"\"style=\"color:red;font-weight:900;\"target=\"myIframe\" title=\""+array['title']+"\">"+title_sub+"</a><div class='div_date'></div></li>";
                elseif(1==index &&1==curPage)li +="<li><a href=\""+ array['content']+"\"style=\"color:Darkorange;font-weight:700;\"target=\"myIframe\" title=\""+array['title']+"\">"+title_sub+"</a><div class='div_date'></div></li>";
                elseif(2==index &&1==curPage)li +="<li><a href=\""+ array['content']+"\"style=\"color:Greenyellow;font-weight:500;;\"target=\"myIframe\" title=\""+array['title']+"\">"+title_sub+"</a><div class='div_date'></div></li>";
                else li +="<li><a href=\""+ array['content']+"\"target=\"myIframe\" title=\""+array['title']+"\">"+title_sub+"</a><div class='div_date'>"+array['date']+"</div></li>";
            });
            $("#list ul").append(li);
        },
        complete:function(){//生成分页条
            getPageBar();
        },
        error:function(){
            alert("数据加载失败");
        }
    });
}

//获取分页条
function getPageBar(){
    //页码大于最大页数
    if(curPage>totalPage) curPage=totalPage;
    //页码小于1
    if(curPage<1) curPage=1;
    pageStr ="<span>共"+total+"条</span><span>"+curPage+"/"+totalPage+"</span>";

    //如果是第一页
    if(curPage==1){
        pageStr +="<span>首页</span>&nbsp;<span>上一页</span>&nbsp;";
    }else{
        pageStr +="<span><a href='javascript:void(0)' rel='1'>首页</a>&nbsp;</span><span><a href='javascript:void(0)' rel='"+(curPage-1)+"'>上一页</a>&nbsp;</span>";
    }

    //如果是最后页
    if(curPage>=totalPage){
        pageStr +="<span>下一页</span>&nbsp;<span>尾页</span>&nbsp;";
    }else{
        pageStr +="<span><a href='javascript:void(0)' rel='"+(parseInt(curPage)+1)+"'>下一页</a>&nbsp;</span><span><a href='javascript:void(0)' rel='"+totalPage+"'>尾页</a>&nbsp;</span>";
    }

    $("#pagecount").html(pageStr);
}

$(function(){
    getData(1);
    $("#pagecount span a").live('click',function(){
        var rel = $(this).attr("rel");
        if(rel){
            getData(rel);
        }
    });
});