// app.js
$(document).ready(function (){
	$(".widget").addClass("hide");
	$(".js-song-form").on("submit", function(event){
		$(".widget").removeClass("hide");
		event.preventDefault();

		fetchSong();
		$(".js-show-artist").on("click", showModal);
	});

	$(".button").on("click", playMusic);

	

});
function fetchSong(){
	
		var searchTerm = $(".searchbox").val();
		getSong(searchTerm);
	
	}

	function showModal () {
		// $(".js-artist-name").text(searchTerm.artists[0].name);
		// $('.js-artist-photo').prop("src");
		$(".js-modal").modal("show");
	}

function getSong(searchTerm) {
	console.log("boo!!");
	$.ajax({
		type: "GET",
		url: "https://api.spotify.com/v1/search?type=track&query=" + searchTerm,
		success: function (response) {
			console.log(response);
			$(".cover").empty();
			$(".js-song-play").empty();
			$(".button").removeClass("disabled");
			$(".title").text(response.tracks.items[0].name);
			$(".author").text(response.tracks.items[0].artists[0].name);
			var getPhoto = `
		
		<ul>
		<img src= "${response.tracks.items[0].album.images[0].url}" >
		</ul>
		
		`;
		$(".cover").append(getPhoto);
		var getAudio = `
		
		<ul>
		<audio class="audio" src= "${response.tracks.items[0].preview_url}">
		</ul>
		
		`; $(".js-song-play").append(getAudio);
		$('.audio').on('timeupdate', printTime);

		// bar.val(current) 


			
		},
		error: handleError

	}); 
	}
function playMusic (response) {
	$(".button").toggleClass("playing");
	if ($(".button").hasClass("playing") === true ){
		$('.audio').trigger('play');}
	else {$(".audio").trigger('pause');}

	}

	// Define a function to print the player's current time
function printTime () {
  var current = $('.audio').prop('currentTime');
	// var bar = document.getElementById('progressBar');
	$("#progressBar").val(current);
  console.debug('Current time: ' + current);
}

// Have printTime be called when the time is updated

	// function showSong(response) {
	// 	console.log(response);
	// 	$(".js-track-list").empty();
	// 	response.items.forEach(function (track) {
	// 		var listTracks = `
	// 		<li>
	// 		<h3> ${track.name}</h3>
	// 		</li>
	// 		`; $(".js-track-list").append(listTracks);
		
	// }

	function handleError(err) {
		console.log("Error", err);
	}
