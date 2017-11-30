/**
 * Created by linyuhua on 2017/1/14.
 */
define(function (require, exports, module) {
    var changeText = require('changeText');
    var $ = require('jquery');
    var showText = function () {
        $('#title').text(changeText.init());
    }
    var init = function(){
    	$('#title').after('<button id="show">showText</button>');
	   		$('#show').on('click',function() {
	            showText()
	        })
    }
    exports.init = init;
   // module.exports={
   // 		init: init
   // }
})