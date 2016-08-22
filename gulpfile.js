<<<<<<< HEAD
/***********************************************************************
 * gulp的使用
 * 1.配合nodejs
 * 2.利用npm安装相应的插件
 * 3.将插件require进来
 * 4.制定各项任务
 * 5.监听，运行任务
 * 
 * 
 * gulp主要的作用：
 * 1.可以搭建微型服务器，有些很好的开发工具（编辑器），很好用。但是我们有时候要
 * 把页面放到服务器上来运行才可以。例如NG，angular里面的指令，路由等必须要有
 * 服务器支持。
 * 2.代码压缩
 * gulp可以将我们的代码进行压缩，包括js，css，image，html等，还可以重命名
 * 以及代码合并等。代码压缩有，会有代码混淆，将我们的一些变量名进行混淆替换
 * 以及一些逻辑优化。
 * 
 * 用gulp压缩angular代码的时候特别注意：
 * 因为gulp压缩代码会有代码混淆，替换变量名称。
 * 但是我们知道在angular中，注入的服务名称是不能变的。
 * 压缩之后function($scope)===>function(e)
 * 这样就会出现依赖注入出错。
 * 解决的方法是要注入的服务或常量等以数组的形式注入
 * module.controller('controllerName',["$scope","arg2",'arg3',"...",function($scope,arg2,arg3,...){}])
 * 
 * 要使用gulp来进行协助，项目的结构一定要定义好。路径要相对路径。尽量开发目录和生成目录结构要是一样的。
 * 这样页面之间的引用才能不出错。
 * 
 * 
 * 
 * 抽取公共组件？：
 * 有没有意义？
 * 每个单页面都要引入公共组件，但是如果我抽取了公共组件，每个单页面还是要引入
 * 还是将每个页面要引入的组件全部压缩合并为一个js文件。
 * 
 * 没有必要压缩html文件。
 * 而且压缩后的html文件可能出bug
 * 
 ***********************************************************************/

var gulp = require('gulp');

var connect = require('gulp-connect');


gulp.task('connect', function() {
    connect.server({
        root: './',
        livereload: true,
        port: 8088,
    })
});
gulp.task('default', function() {
    gulp.run('connect');
});
/**
 * 
 * 抽取公共组件
=======
/***********************************************************************
 * gulp的使用
 * 1.配合nodejs
 * 2.利用npm安装相应的插件
 * 3.将插件require进来
 * 4.制定各项任务
 * 5.监听，运行任务
 * 
 * 
 * gulp主要的作用：
 * 1.可以搭建微型服务器，有些很好的开发工具（编辑器），很好用。但是我们有时候要
 * 把页面放到服务器上来运行才可以。例如NG，angular里面的指令，路由等必须要有
 * 服务器支持。
 * 2.代码压缩
 * gulp可以将我们的代码进行压缩，包括js，css，image，html等，还可以重命名
 * 以及代码合并等。代码压缩有，会有代码混淆，将我们的一些变量名进行混淆替换
 * 以及一些逻辑优化。
 * 
 * 用gulp压缩angular代码的时候特别注意：
 * 因为gulp压缩代码会有代码混淆，替换变量名称。
 * 但是我们知道在angular中，注入的服务名称是不能变的。
 * 压缩之后function($scope)===>function(e)
 * 这样就会出现依赖注入出错。
 * 解决的方法是要注入的服务或常量等以数组的形式注入
 * module.controller('controllerName',["$scope","arg2",'arg3',"...",function($scope,arg2,arg3,...){}])
 * 
 * 要使用gulp来进行协助，项目的结构一定要定义好。路径要相对路径。尽量开发目录和生成目录结构要是一样的。
 * 这样页面之间的引用才能不出错。
 * 
 * 
 * 
 * 抽取公共组件？：
 * 有没有意义？
 * 每个单页面都要引入公共组件，但是如果我抽取了公共组件，每个单页面还是要引入
 * 还是将每个页面要引入的组件全部压缩合并为一个js文件。
 * 
 * 没有必要压缩html文件。
 * 而且压缩后的html文件可能出bug
 * 
 ***********************************************************************/

var gulp = require('gulp');

var connect = require('gulp-connect');


gulp.task('connect', function() {
    connect.server({
        root: './',
        livereload: true,
        port: 8088,
    })
});
gulp.task('default', function() {
    gulp.run('connect');
});
/**
 * 
 * 抽取公共组件
>>>>>>> origin/master
 */