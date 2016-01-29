window.onload=function(){
	var nums=document.getElementsByClassName('num');
	var yunsuanfu=document.getElementsByClassName('yunsuanfu');
	var xianshi=document.getElementById('sum');
	var dengyu=document.getElementById('equ');
	var clear=document.getElementById('clear');
	var zhengfu=document.getElementById('zhengfu');

	var fuyi=document.getElementById('fuyi');
	var pingfang=document.getElementById('pingfang');
	var lifang=document.getElementById('lifang');

	var jiecheng=document.getElementById('jiecheng');
	var kaifang=document.getElementById('kaifang');

	var sin=document.getElementById('sin');
	var cos=document.getElementById('cos');
	var tan=document.getElementById('tan');
	var ln=document.getElementById('ln');

	var sinh=document.getElementById('sinh');
	var cosh=document.getElementById('cosh');
	var tanh=document.getElementById('tanh');
	var eN=document.getElementById('eN');

	var pai=document.getElementById('pai');
	var rand=document .getElementById('rand');

	var firstNumber='',secondNumber='';
	var yun='';
// 显示时间
	var timefn=function(){
		var date=new Date();
		if(date.getHours()<10 && date.getMinutes()<10 ){
			time.innerHTML='0'+date.getHours()+':'+'0'+date.getMinutes();		
		}else if( date.getHours()>=10 && date.getMinutes()<10 ){
			time.innerHTML=date.getHours()+':'+'0'+date.getMinutes();		
		}else if( date.getHours()<10 && date.getMinutes()>=10 ){
			time.innerHTML='0'+date.getHours()+':'+date.getMinutes();		
		}else if( date.getHours()>=10 && date.getMinutes()>=10 ){
			time.innerHTML=date.getHours()+':'+date.getMinutes();		
		}	
	};
	timefn();//让页面刷新的时候就显示时间
	setInterval(timefn,1000);//1s 后调用函数 改变时间

// 解决蓝色
	document.onmousedown=function(e){
		e.preventDefault();
	}
// 用数组记录下所有点击过的东西
	var arr=[];
	var pusharr=function(thing){
		arr.push(thing);
		console.log(arr);
	}

// m+  
// 存储数据   M+使记忆缓存中的数加上目前输入的数，结果存入缓存中  
  // 第一次点击 dangqianshu 记下的是xianshi.innerHTML ,之后再次点击是 dangqianshu + xianshi.innerHTML
	// var dangqianshu=0,huancun;
	// mjia.onclick=function(){
	// 	huancun=Number(xianshi.innerHTML);
	// 	console.log(huancun);
	// }

// m-  
// 将存储器(缓存)里面的数减去当前xianshi.innerHTML里的数
	// mjian.onclick=function(){
	// 	dangqianshu -=Number(xianshi.innerHTML);
	// 	xianshi.innerHTML=dangqianshu;
	// 	console.log(dangqianshu);
	// }


// 运算符	
	for(var i=0;i<yunsuanfu.length;i++){
		yunsuanfu[i].onclick=function(){
			yun=this.innerHTML;			
			pusharr(this.innerHTML);
		}
	}		

// 数字
	for(var i=0;i<nums.length;i++){
		nums[i].onclick=function(){
			// 小数点判断,如果有就不在显示
			if(this.innerHTML=='.' && xianshi.innerHTML.indexOf('.')!=-1){
			 	return; 
			}
			if(yun==''){//没点运算符的情况 一个数参与运算
				firstNumber+=this.innerHTML;
			    xianshi.innerHTML=firstNumber;
			    pusharr(firstNumber);
			    //正负号 +/-
				zhengfu.onclick=function(){
					firstNumber*=-1;
			    	xianshi.innerHTML=firstNumber;
				// if(firstNumber==''){
				 //    	firstNumber=0*-1;
				 //    	console.log(firstNumber);
				 //    	xianshi.innerHTML=firstNumber;
				// }
				}
				
				// 1/x
				fuyi.onclick=function(){
					console.log(typeof firstNumber)
					xianshi.innerHTML=1/firstNumber;
				}
				// 平方
				pingfang.onclick=function(){
					xianshi.innerHTML=Math.pow(firstNumber,2);	
				}
				// 立方
				lifang.onclick=function(){
					xianshi.innerHTML=Math.pow(firstNumber,3);
				}
				// 开方
				kaifang.onclick=function(){
					xianshi.innerHTML=Math.sqrt(firstNumber);
				}
				// sin
				sin.onclick=function(){
					xianshi.innerHTML=Math.sin(firstNumber*Math.PI/180);
				}
				// cos
				cos.onclick=function(){
					xianshi.innerHTML=Math.cos(firstNumber*Math.PI/180);					
				}
				// tan
				tan.onclick=function(){
					xianshi.innerHTML=Math.tan(firstNumber*Math.PI/180);
				}
				// eⁿ
				eN.onclick=function(){
					xianshi.innerHTML=Math.pow(Math.E,firstNumber);
				}
				// ln
				ln.onclick=function(){
					xianshi.innerHTML=Math.log(Number(firstNumber))/Math.log(Math.E);	
				}
				// sinh
				sinh.onclick=function(){
					xianshi.innerHTML=Math.sinh(Number(firstNumber));
				}
				// cosh
				cosh.onclick=function(){
					xianshi.innerHTML=Math.cosh(Number(firstNumber));
				}
				// tanh
				tanh.onclick=function(){
					xianshi.innerHTML=Math.tanh(Number(firstNumber));
				}
				// 阶乘
				jiecheng.onclick=function(){
					var sumJie=1;
					for(var i=firstNumber;i>1;i--){
						sumJie=sumJie*i;
					}
					xianshi.innerHTML=sumJie;
				}
				// %
				baifen.onclick=function(){
					xianshi.innerHTML=Number(firstNumber)/100;			
				}
			}else{				
				zhengfu.onclick=function(){
					secondNumber*=-1;
			    	xianshi.innerHTML=secondNumber;
				}
				secondNumber+=this.innerHTML;
				xianshi.innerHTML=secondNumber;
				pusharr(secondNumber);
				if(yun=='+'){
					firstNumber=Number(firstNumber)+Number(secondNumber);			
					secondNumber='';
				}
				if(yun=='-'){
					firstNumber=Number(firstNumber)-Number(secondNumber);			
					secondNumber='';
				}
				if(yun=='×'){
					firstNumber=Number(firstNumber)*Number(secondNumber);			
					secondNumber='';
				}
				if(yun=='÷'){
					firstNumber=Number(firstNumber)/Number(secondNumber);			
					secondNumber='';
				}
			}
		}
	}

	// random 随机数
	rand.onclick=function(){
		xianshi.innerHTML=Math.random();
	}
	// π
	pai.onclick=function(){
		xianshi.innerHTML=Math.PI;
	}
// 得数
	dengyu.onclick=function(){
		pusharr('=');
		if(yun=='+'){
			xianshi.innerHTML=firstNumber;			
		}
		if(yun=='-'){
			xianshi.innerHTML=firstNumber;			
		}
		if(yun=='×'){
			xianshi.innerHTML=firstNumber;			
		}
		if(yun=='÷'){
			xianshi.innerHTML=firstNumber;			
		}
		if(yun=='yⁿ'){
			xianshi.innerHTML=Math.pow(Number(firstNumber),Number(secondNumber));			
		}
		if(yun=='log'){
			xianshi.innerHTML=Math.log(Number(secondNumber))/Math.log(Number(firstNumber));			
		}
		if(yun=='EE'){
			xianshi.innerHTML=Number(firstNumber)*Math.pow(10,Number(secondNumber));	
		}
		if(yun=='ⁿ√y'){
			xianshi.innerHTML=Math.pow(Number(firstNumber),1/Number(secondNumber));	
		}


	// 点了 ' = ' 之后   判断 '=' 的下一个是啥
	// 若为数字 则把所有都清空 相当于刷新页面重新来过
		for(var i=0;i<arr.length;i++){
			if(arr[i]== '=' && arr[i+1]!=undefined && Number(arr[i+1]) ==Math.floor(Math.random()*10) ){
				firstNumber='';
				secondNumber='';
				yun='';
				break;
			}
		}

		//  m+
		// for (var j = 0; j < arr.length; j++) {
		// 	console.log(arr[j]== '=',arr[j+1] =='=');
		// 	if(arr[j]== '=' && arr[j+1]!=undefined && arr[j+1] =='=' && typeof huancun=='number'){
		// 		//查看数组中 '=' 之后又是'=' 并且huancun记下了一个数的情况下 执行m+ 
		// 		dangqianshu=huancun+firstNumber;
		// 		console.log(dangqianshu+'='+huancun+'+'+firstNumber);
		// 		xianshi.innerHTML=dangqianshu;
		// 		dangqianshu+=huancun;
		// 	}
		
		// };
		



	}

	// if( dengyu.hasAttribute(dianle)){ //点过 ' = '
	// // 一直加,只能加一个数 = ---> + - * /  shu
	// 	firstNumber=xianshi.innerHTML;
	// 	secondNumber='';
	// 	yun='';
	// }else{
	// // 再来一轮
	// 	firstNumber='';
	// 	secondNumber='';
	// 	yun='';	
	// }
	clear.onclick=function(){
		window.location.reload();
	}










}