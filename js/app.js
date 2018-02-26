var $start = 0;
$menu.when('change',$=>{
	var now   = $menu.getSelected();
	var index = JSON.parse(now);
		index = index.value;
	$start = index;
	setup();
});

function showImage(type){
	if (type==='next')
	{
		$start++;
	}
	else if(type==='previous')
	{
		$start--;
	}
	else{
		$start = 0;
	}
	setup();
}

function setup()
{
	if ($start==0)
	{
		$btn_previous.disabled();
		$btn_next.enabled();
	}
	else if ($start==($album_image.length-1))
	{
		$btn_next.disabled();
		$btn_previous.enabled();
	}
	else{
		$btn_next.enabled();
		$btn_previous.enabled();
	}
	$view.loadImage($album_image[$start]);
	$menu.getObj.selectedIndex = $start;
}

$btn_next.when('click',$=>{
	showImage('next');
});

$btn_previous.when('click',$=>{
	showImage('previous');
});

$btn_url.when('click',$=>{
	_newForm({
		url:$album_image[$start]
	});
});


_doWhen({
  keycode:_keyCode.enter,
  callback:function(){
  	if ($start!=($album_image.length-1))
  	{
  		showImage('next');
  	}
  }
});

_doWhen({
  keycode:_keyCode.backspace,
  callback:function(){
  	if ($start!=0)
  	{
  		showImage('previous');
  	}
  }
});

_doWhen({
  keycode:_keyCode.end,
  callback:function(){
  	$start = $album_image.length-1;
  	setup();
  }
});

showImage('reset');

setInterval($=>{
	Garuda('loading').delete();
	Garuda('app').show();
	Garuda('footer').show();
},2000);
