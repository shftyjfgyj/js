//写入参数,可供多个元素使用
		function animate(object,target,callback){
			//当我们不断地点击这个按钮,盒子会越来越快,因为开启了太多的定时器
			//解决方法就是让我们的元素只有一个定时器执行,先清除以前的定时器
			clearInterval(object.timer);			
			
			//给不同元素添加不同的定时器			
			object.timer=setInterval(function(){
				//匀速动画
				//解决小数问题
				var step=(target-object.offsetLeft)/10;
				step=step>0?Math.ceil(step):Math.floor(step);
				
				if(object.offsetLeft==target){
					clearInterval(object.timer);
					//添加回调函数,写在定时器结束的位置
					if(callback){
						callback();
					}
				}
				object.style.left=object.offsetLeft+step+'px';
				
			},30);
		}