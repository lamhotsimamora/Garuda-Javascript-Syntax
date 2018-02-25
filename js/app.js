var $start = 0;



$menu.when('change',$=>{
	var now   = $menu.getSelected();
	var index = JSON.parse(now);
		index = index.value;
	$start = index;
	$view.loadImage($album_image[$start]);
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

	$view.loadImage($album_image[$start]);
	$menu.getObj.selectedIndex = $start;

	setup();
}

function setup()
{
	if ($start==0)
	{
		$btn_previous.disabled()
	}
	else if ($start==($album_image.length-1))
	{
		$btn_next.disabled()
	}
	else{
		$btn_next.enabled()
		$btn_previous.enabled()
	}
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

showImage('reset');

setInterval($=>{
	Garuda('loading').delete();
	Garuda('app').show();
	Garuda('footer').show();
},2000);