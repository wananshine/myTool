<script type="text/javascript">




// 获取时间戳(以s为单位)一：
var timestamp = Date.parse(new Date());
timestamp = timestamp / 1000;
//结果：1280977330748



// 获取时间戳二：
var timestamp =(new Date()).valueOf();
//结果：1280977330748



// 获取时间戳三：
var timestamp=new Date().getTime()；
//结果：1280977330748





// 获取某个时间格式的时间戳四：
var stringTime = "2014-07-10 10:21:12";
var timestamp2 = Date.parse(new Date(stringTime));
timestamp2 = timestamp2 / 1000;
//2014-07-10 10:21:12的时间戳为：1404958872 





/******************************分割线*************************************/


// 将日期格式转换成时间戳 也很简单
var strtime = '2018-04-23 18:55:49:123';
var date = new Date(strtime); 
//传入一个时间格式，如果不传入就是获取现在的时间了，这样做不兼容火狐。
// 可以这样做
var date = new Date(strtime.replace(/-/g, '/'));
 
// 有三种方式获取，在后面会讲到三种方式的区别
time1 = date.getTime();
time2 = date.valueOf();
time3 = Date.parse(date);
 
/* 
三种获取的区别：
第一、第二种：会精确到毫秒
第三种：只能精确到秒，毫秒将用0来代替
比如上面代码输出的结果(一眼就能看出区别)：
1398250549123
1398250549123
1398250549000 
*/


/******************************分割线*************************************/




//Date()参数形式有7种
new Date("month dd,yyyy hh:mm:ss");
new Date("month dd,yyyy");
new Date("yyyy/MM/dd hh:mm:ss");
new Date("yyyy/MM/dd");
new Date(yyyy,mth,dd,hh,mm,ss);
new Date(yyyy,mth,dd);
new Date(ms);

//例如:
new Date("September 16,2016 14:15:05");
new Date("September 16,2016");
new Date("2016/09/16 14:15:05");
new Date("2016/09/16");
new Date(2016,8,16,14,15,5); // 月份从0～11
new Date(2016,8,16);
new Date(1474006780);

/******************************分割线*************************************/


// 将当前时间换成时间格式字符串
var timestamp3 = 1403058804;
var newDate = new Date();
newDate.setTime(timestamp3 * 1000);
// Wed Jun 18 2014 
console.log(newDate.toDateString());
// Wed, 18 Jun 2014 02:33:24 GMT 
console.log(newDate.toGMTString());
// 2014-06-18T02:33:24.000Z
console.log(newDate.toISOString());
// 2014-06-18T02:33:24.000Z 
console.log(newDate.toJSON());
// 2014年6月18日 
console.log(newDate.toLocaleDateString());
// 2014年6月18日 上午10:33:24 
console.log(newDate.toLocaleString());
// 上午10:33:24 
console.log(newDate.toLocaleTimeString());
// Wed Jun 18 2014 10:33:24 GMT+0800 (中国标准时间)
console.log(newDate.toString());
// 10:33:24 GMT+0800 (中国标准时间) 
console.log(newDate.toTimeString());
// Wed, 18 Jun 2014 02:33:24 GMT
console.log(newDate.toUTCString());

Date.prototype.format = function(format) {
       var date = {
              "M+": this.getMonth() + 1,
              "d+": this.getDate(),
              "h+": this.getHours(),
              "m+": this.getMinutes(),
              "s+": this.getSeconds(),
              "q+": Math.floor((this.getMonth() + 3) / 3),
              "S+": this.getMilliseconds()
       };
       if (/(y+)/i.test(format)) {
              format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
       }
       for (var k in date) {
              if (new RegExp("(" + k + ")").test(format)) {
                     format = format.replace(RegExp.$1, RegExp.$1.length == 1
                            ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
              }
       }
       return format;
}
console.log(newDate.format('yyyy-MM-dd h:m:s'));

</script>