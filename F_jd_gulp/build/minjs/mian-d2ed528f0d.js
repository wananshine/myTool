var myPig={name:"Pig",age:"23",cacheStart:function(){this.sayName(),this.setNew("Dog","10"),this.pigSwiper()},sayName:function(){console.log(this.name+this.age),alert(this.name+this.age)},setNew:function(t,e){console.log(t,e),alert(t+e)},pigSwiper:function(){new Swiper(".swiper-container",{pagination:".swiper-pagination",paginationClickable:!0,prevButton:".swiper-button-prev",nextButton:".swiper-button-next",loop:!0,autoplay:5e3})}};myPig.cacheStart(),alert("123");