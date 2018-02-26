$app = __({
  el:'app'
});

$app.setContent('<br><br><center id="view_button"><button class="btn btn-warning btn-md" id="btn_previous">Previous</button> &nbsp'
					+'<button class="btn btn-primary btn-md" id="btn_next">Next</button> </center> <br><br> <center>'
					+'<div class="input-group mb-3"> <div class="input-group-prepend">'
					+'<button class="btn btn-outline-success" id="btn_url" type="button">Open</button></div>'
					+'<select class="form-control" id="display_menu"> </select> </div>'
					+'<span class="badge badge-warning">Press Backspace for Preious</span>&nbsp<span class="badge badge-primary">Press Enter for Next</span></br>'
					+'<img src="" width="600" height="600" id="albums" class="img-thumbnail"></center> <br><br>');

$menu = __({
  el:'display_menu'
});

$view = __({
  el:'albums'
});

for (var i = 0 ; i < $album_image.length; i++) 
{
	$menu.insertContent("<option value='"+i+"'>"+$album_image[i]+"</option>");
}

$btn_next = __({
  el:'btn_next'
});

$btn_previous = __({
  el:'btn_previous'
});

$btn_url = __({
  el:'btn_url'
});


$doc = __({
  el:document
});