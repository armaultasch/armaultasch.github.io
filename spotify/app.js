// app.js
$(document).ready(function (){

	$(".js-artist-form").on("submit", fetchArtists);

	$(".js-artist-list").on("click", ".js-artist-albums", fetchAlbums)

	$(".tracks-btn").on("click", ".js-album-tracks", fetchTracks)

});


function fetchArtists(event){
	event.preventDefault();
		var searchTerm = $(".searchbox").val();
		searchTerm = searchTerm.split(" ").join("+");
		
	
	
	$.ajax({
		type: "GET",
		url: "https://api.spotify.com/v1/search?type=artist&query=" + searchTerm,
		success: showArtists,
		error: handleError

	}); 
	$(".searchbox").val("");
	}
function showArtists(response) {
		console.log(response);
		$(".js-artist-list").empty();
		$(".js-albums-list").empty();
		$(".js-track-list").empty();
		response.artists.items.forEach(function (artist) {
			createArtistHtml(artist);
		});
	}


	function createArtistHtml(artist)  {
		var image;

		if (artist.images.length > 0){
			image = artist.images[0].url;
		} else {
			image = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQCk2bayZHUJsWeglTeTOvjcX3PvSpnkqU3T-6YmCE6bT1nFQ56Bw";
		}

		var html = `

		<li class="artist-item">
		<h4> ${artist.name} </h4>
		<img class="artist-image" src="${image}">

		<button class="albums-btn js-artist-albums" data-blah="${artist.id}">
		Show albums for ${artist.name}
		</button>
		</li>

		`; $(".js-artist-list").append(html);
	}


function fetchAlbums(event) {


	var artistID = $(event.currentTarget).data("blah");
	

	$.ajax({
		type: "GET",
		url: "https://api.spotify.com/v1/artists/" + artistID + "/albums",
		success: showAlbums,
		error: handleError

	}); 

	}

	function showAlbums (response) {

		console.log(response);
		$(".js-artist-list").empty();
		$(".js-albums-list").empty();
		$(".js-track-list").empty();
	
		response.items.forEach(function (album) {
		createAlbumHtml(album);
			 
});
	}





	function createAlbumHtml(album)  {
		var image;

		if (album.images.length > 0){
			image = album.images[0].url;
		} else {
			image = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQCk2bayZHUJsWeglTeTOvjcX3PvSpnkqU3T-6YmCE6bT1nFQ56Bw";
		}

		var html = `

		<li class="album-item">
		<h4> ${album.name} </h4>
		<img class="album-image" src="${image}">

		<button class="tracks-btn js-album-tracks" data-sup="${album.id}">
		Show Tracks for ${album.name}
		</button>
		</li>

		`; $(".js-albums-list").append(html);
	}


	function fetchTracks(event) {
		console.log("sup");
	var albumID = $(event.currentTarget).data("sup");
	

	$.ajax({
		type: "GET",
		url: "https://api.spotify.com/v1/albums/" + albumID + "/tracks",
		success: showTracks,
		error: handleError

	}); 

	}


	function handleError(err) {
		console.log("Error", err);
	}
	

	function showTracks (response) {
		console.log(response);
		$(".js-track-list").empty();
		response.items.forEach(function (track) {
			var listTracks = `
			<li>
			<h3> ${track.name}</h3>
			</li>
			`; $(".js-track-list").append(listTracks);
		});
	}
