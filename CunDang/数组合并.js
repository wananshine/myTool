

//concat(..)方法
var q=[5,5,1,9,9,6,4,5,8];
var b=["tie","mao","csdn","ren","fu","fei"];
var c = q.concat( b );
c; // [5,5,1,9,9,6,4,5,8,"tie","mao","csdn","ren","fu","fei"]

//循环遍历方法
var arr1=['a','b'];
var arr2=['c','d','e'];
 
for(var i=0;i<arr2.length;i++){
      arr1.push(arr2[i]) 
}

//apply方法
//合并数组arr1和数组arr2,使用Array.prototype.push.apply(arr1,arr2)  or arr1.push.apply(arr1,arr2);
var arr1=['a','b'];
var arr2=['c','d','e'];
 
Array.prototype.push.apply(arr1,arr2);
//或者
arr1.push.apply(arr1,arr2);<br>console.log(arr1) //['a','b','c','d','e']