//方法1：使用JQuery的extend方法
var o1 = { a:'a' }, o2 = { b:'b' };
// 合并 o1 和 o2， 将结果返回给 o3. 注意： 此时，o1 == o3! 即 o1 被修改
o3 = $.extend(o1, o2);
// 或(合并 o1 和 o2， 将结果返回给 o3. 注意： 此时，o1 ！= o3! 即 o1 没有被修改  )
o3 = $.extend({}, o1, o2) 



//方法2：Object.assign()
var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, 注意目标对象自身也会改变。



//方法3：合并对象
function extend(target, source) {
	for (var obj in source) {
		target[obj] = source[obj];
	}
	return target;
}

// 测试
var a = {a: 1, b: 2};
var b = {a: 2, b: 3, c: 4};

var c = extend(a, b);
console.log(c);



