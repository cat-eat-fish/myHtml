	window.onload=function(){
		var btn=document.getElementsByClassName("play")[0];
		var mymusic=document.getElementById("mymusic");
		var make=true;
		var txt=document.getElementById("txt");
		var con=document.getElementsByClassName("content")[0];
		var lrc=txt.value;
		btn.onclick=function(){
			if(make){
				this.className +=" rotate";
				mymusic.play();
				make=false;
			}else{
				this.className ="play";
				mymusic.pause();
				make=true;
			}
		};
		var lrcarr=lrc.split("[");
		var html="";
		for(var i=0;i<lrcarr.length;i++){
			var arr=lrcarr[i].split("]");
			var time=arr[0].split("."); //时间
			var timer=time[0].split(":");
			var ms=timer[0]*60+timer[1]*1; //字符串*数字=数字 字符串+数字=字符串
			var text=arr[1]; //歌词
			if(text){
				html+="<p id="+ms+">"+text+"</p>"
			}
			con.innerHTML=html;
		};
		var num=0;
		var op=con.getElementsByTagName("p"); //通过标签名获取元素
		mymusic.addEventListener("timeupdate",function(){ //监听歌曲时间变化
			var curtime=parseInt(this.currentTime);//获取歌曲播放的事件
			if(document.getElementById(curtime)){//判断该时间ID是否存在
				for(var i=0;i<op.length;i++){
					op[i].style.cssText="color: #ccc;font-size: 12px;";
				}
				document.getElementById(curtime).style.cssText="color:#F579BF;font-size: 18px;";
				if(op[7+num].id==curtime){
					con.style.top = -20 * num+"px";
					num++;
				} 
			}
		});   //监听事件
	}
