

//获取地址栏参数的方法
function getQueryString(name) {
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r!=null)return  decodeURIComponent(r[2]); return '';
}


//返回的是字符串形式的参数，例如：class_id=3&id=2&  
function getUrlArgStr(){  
    var q=location.search.substr(1);  
    var qs=q.split('&');  
    var argStr='';  
    if(qs){  
        for(var i=0;i<qs.length;i++){  
            argStr+=qs[i].substring(0,qs[i].indexOf('='))+'='+qs[i].substring(qs[i].indexOf('=')+1)+'&';  
        }  
    }  
    return argStr;  
}  
//返回的是对象形式的参数  
function getUrlArgObject(){  
    var args=new Object();  
    var query=location.search.substring(1);//获取查询串  
    var pairs=query.split(",");//在逗号处断开  
    for(var i=0;i<pairs.length;i++){  
        var pos=pairs[i].indexOf('=');//查找name=value  
        if(pos==-1){//如果没有找到就跳过  
            continue;  
        }  
        var argname=pairs[i].substring(0,pos);//提取name  
        var value=pairs[i].substring(pos+1);//提取value  
        args[argname]=unescape(value);//存为属性  
    }  
    return args;//返回对象  
}  


//传统方法
<script type="text/javascript">
function UrlSearch() 
{
   var name,value; 
   var str=location.href; //取得整个地址栏
   var num=str.indexOf("?") 
   str=str.substr(num+1); //取得所有参数   stringvar.substr(start [, length ]

   var arr=str.split("&"); //各个参数放到数组里
   for(var i=0;i < arr.length;i++){ 
    num=arr[i].indexOf("="); 
    if(num>0){ 
     name=arr[i].substring(0,num);
     value=arr[i].substr(num+1);
     this[name]=value;
     } 
    } 
} 
var Request=new UrlSearch(); //实例化
alert(Request.id);
</script>





window.location.host; //返回url 的主机部分，例如：www.xxx.com  
window.location.hostname; //返回www.xxx.com  
window.location.href; //返回整个url字符串(在浏览器中就是完整的地址栏)，例如：www.xxx.com/index.php?class_id=3&id=2  
window.location.pathname; //返回/a/index.php或者/index.php  
window.location.protocol; //返回url 的协议部分，例如： http:，ftp:，maito:等等。  
window.location.port //url 的端口部分，如果采用默认的80端口，那么返回值并不是默认的80而是空字符  


var data = "category.php?id=27&price_min=0&price_max=0&page=1&sort=last_update&order=DESC";
var indexof1 = data.indexOf("&sort=");
var indexof2 = data.indexOf("&order=");
var pageSort1 = data.substr(indexof1, indexof2);   //从索引值开始获取stringObject.substr(start,length)
var pageSort2 = data.substring(indexof1, indexof2);  //从索引值开始获取到索引值结束stringObject.substring(start,end)




