function dataView(){
	$.getJSON('data/menu.json',function(response){
	// console.log(response);
	let menu =response[0].menu;
	$.each(menu,function(i,value){
		$("#daftar-menu").append('<div class="col-md-4 mb-3"><div class="card" style="width: 18rem;"><img class="card-img-top" src="../rest/'+value.gambar+'"><div class="card-body"><h5 class="card-title">'+value.nama+'</h5><p class="card-text">'+value.deskripsi+'</p><a href="#" class="btn btn-primary">Pesan sekarang</a></div></div></div>');
	});
});

}
dataView(); // tampilkan function//
$(".nav-link").on('click',function(){
	$(".nav-item").removeClass('active');
	$(this).addClass('active');

	 let kategori=$(this).html();
	$("h1").html(kategori);
	console.log(kategori);
	if (kategori == 'Semua Menu') {
		dataView();
		return;
	}

	$.getJSON('data/menu.json',function(response){
		let menu=response[0].menu;
		let content='';
		$.each(menu,function(i,value){
			if (value.kategori == kategori.toLowerCase()) {
				content+='<div class="col-md-4 mb-3"><div class="card" style="width: 18rem;"><img class="card-img-top" src="../rest/'+value.gambar+'"><div class="card-body"><h5 class="card-title">'+value.nama+'</h5><p class="card-text">'+value.deskripsi+'</p><a href="#" class="btn btn-primary">Pesan sekarang</a></div></div></div>';
			}

			$("#daftar-menu").html(content);
		});
	});

});