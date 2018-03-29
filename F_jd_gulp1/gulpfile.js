//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
	uglify = require('gulp-uglify'),  //js压缩
	concat = require('gulp-concat'),   //js合并
	less = require('gulp-less'),       //less编译成css
	minicss = require('gulp-minify-css'), //压缩编译后的css
	livereload = require('gulp-livereload'),  //浏览器自动刷新页面
	plumber = require('gulp-plumber'),      //防止错误中断
	imagemin = require('gulp-imagemin'),    //图片压缩
	rev = require('gulp-rev'),      //- 对文件名加MD5后缀
	revCollector = require('gulp-rev-collector'),  //- 路径替换
	batchReplace = require('gulp-batch-replace');  //- 文件内的图片路径替换
// var less = require('gulp-less');  //本地安装less所用到的地方
// var cssmin = require('gulp-minify-css');  //本地安装cssmin所用到的地方
// var cssver = require('gulp-make-css-url-version');
// var sourcemaps = require('gulp-sourcemaps');

/******************************************************************/
//定义一个testLess任务（自定义任务名称）
// gulp.task('testLess', function () {
//     gulp.src('src/less/*.less') //该任务针对的文件
//         .pipe(sourcemaps.init())
//         .pipe(less()) //该任务调用的模块
//         .pipe(sourcemaps.write())
//         .pipe(cssver()) //给css文件里引用文件加版本号（文件MD5）
//         .pipe(cssmin({
//             advanced: false,//类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
//             compatibility: 'ie7',//保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
//             keepBreaks: true,//类型：Boolean 默认：false [是否保留换行]
//             keepSpecialComments: '*'
//             //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
//         }))
//         .pipe(gulp.dest('src/css')); //将会在src/css下生成index.css
// });

// gulp.task('testWatch', function () {
//     gulp.watch('src/**/*.less', ['testLess']); //当所有less文件发生改变时，调用testLess任务
// });

// gulp.task('default',['testLess']); //定义默认任务
/******************************************************************/

function errorLog(error){
	console.error.bind(error);
	this.emit('end');
}


// Scripts Task
gulp.task('scripts', function(){
	gulp.src(['js/index.js', 'js/a.js'])
	.pipe(plumber())
	.pipe(concat('mian.js'))
	.pipe(uglify())
	.pipe(rev())
	.on('error',(error)=>{
		console.log(error)
	})
	.pipe(gulp.dest('build/minjs'))
	.pipe(rev.manifest())
	.pipe(gulp.dest('build/rev/js'));
})


//Stytls Task
gulp.task('styles', function(){
	gulp.src('less/**/*.less')
	.pipe(less({
		style: 'compressed'
	}))
	.on('error', errorLog)
	.pipe(minicss())
	.pipe(rev())
	.pipe(gulp.dest('build/css'))
	.pipe(batchReplace(/images/g, './images'))
	.pipe(rev.manifest())
	.pipe(gulp.dest('build/rev/css'))
	.pipe(livereload());
});

// gulp.task('styles', function(){
// 	gulp.src(['less/indexCss/base.less','less/indexCss/style.less'])
// 	.pipe(concat('main.less'))
// 	.pipe(less({
// 		style: 'compressed'
// 	}))
// 	.on('error', errorLog)
// 	.pipe(minicss())
// 	.pipe(rev())    //给文件添加hash编码
// 	.pipe(batchReplace(/images/g, './images'))
// 	.pipe(gulp.dest('build/css'))
// 	.pipe(rev.manifest())   //生成rev-mainfest.json文件作为记录  
// 	.pipe(gulp.dest('build/rev/css'))
// 	.pipe(livereload());
// });





// Images Task
gulp.task('images', function(){
	gulp.src('images/**/*.{png,jpg,gif,webp,ico}')
	.pipe(imagemin())
	.pipe(gulp.dest('build/miniimg'));
});



var replaceThis = [
	[ 'original', 'replacement' ]
];
 
//Html替换css文件版本  
gulp.task('revHtmkCss', function(){
	gulp.src(['build/rev/css/*.json', 'index.html'])
	.pipe(revCollector(
		{
			replaceReved: true,
			replacements: {
				'/css/': '/build/css/'
			}
		}
	))
	.pipe(gulp.dest('build/'));
});

//Html替换img文件版本  
gulp.task('revHtmkImg', function(){
	gulp.src(['build/rev/css/*.json', 'index.html'])
	.pipe(revCollector(
		{
			replaceReved: true,
			replacements: {
				'/css/': '/build/css/'
			}
		}
	))
	.pipe(gulp.dest('build/'));
});

//Html替换js文件版本  
gulp.task('revHtmkJs', function(){
	gulp.src(['build/rev/js/*.json', 'index.html'])
	.pipe(revCollector(
		{
			replaceReved: true,
			replacements: {
				'./js/': '/build/minjs/'
			}
		}
	))
	.pipe(gulp.dest('build/'));
});


// Watch Task
// Watches JS less images
gulp.task('watch', function(){
	var server = livereload();
	gulp.watch('js/*.js', ['scripts']);
	gulp.watch('less/**/*.less', ['styles']);
	gulp.watch('images/**/*.{png,jpg,gif,webp,ico}', ['images']);
})


//定义默认任务
gulp.task('default', [ 'scripts', 'styles', 'images', 'revHtmkCss', 'revHtmkJs', 'watch' ])








//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组) 
//gulp.dest(path[, options]) 处理完后文件生成路径