
//Main
var myPig = {
	name: 'Pig',
	age: '23',
	cacheStart: function(){
		this.sayName();
		this.setNew('Dog', '10');
		this.pigSwiper();
	},
	sayName: function(){
		console.log(this.name + this.age);
		alert(this.name + this.age);

	},
	setNew: function(newName, newAge){
		console.log(newName, newAge);
		alert(newName+newAge);
	},
	pigSwiper: function(){
		//banner轮播
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            prevButton:'.swiper-button-prev',
            nextButton:'.swiper-button-next',
            loop : true,
            autoplay: 5000,
        });
	},
}
myPig.cacheStart();