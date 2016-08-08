// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){

	var pepperoni = "<li id='1'>+$1 pepperonni</li>";
	var mushroom = "<li id='2'>+$1 mushroom</li>";
	var pepper = "<li id='3'>+$1 pepper</li>";
	var white = "<li id='4'>+$3 White Sauce</li>";
	var crust = "<li id='5'>+$5 Gluten-Free Sauce</li>";
	var cheese_price = 10;

var pepperoni_cost = 1, mushroom_cost = 1, pepper_cost = 1, white_cost = 3, gluten_cost = 5


	function fade_pepperoni(){

	$('#all_pepperoni').fadeToggle(100);
	$('.js-pepperoni').toggleClass('active');
	

	};

	fade_pepperoni();

	function fade_mushrooms(){

	$('#all_mushrooms').fadeToggle(100);
	$('.js-mushrooms').toggleClass('active')
	};

	fade_mushrooms();
	
	function fade_peppers(){

	$('#all_peppers').fadeToggle(100);
	$('.js-peppers').toggleClass('active')
	};

	fade_peppers();
	function change_sauce(){

	$('.sauce').toggleClass('sauce-white');
	$('.js-sauce').toggleClass('active')
	};

	function change_crust(){

	$('.crust').toggleClass('crust-gluten-free');
	$('.js-crust').toggleClass('active')
	};

	function pepperoni_price (){
		
		if ($(".js-pepperoni").hasClass("active") !== true )
			{$('#ingredients').append(pepperoni);
			cheese_price +=1;
			$('#total').empty();
			$('#total').append("$"+cheese_price);
	}
		else 
			{$('#1').remove()
			cheese_price -=1;	
			$('#total').empty();
			$('#total').append("$"+cheese_price)};	
	}	
	
	function mushroom_price (){
		
		if ($(".js-mushrooms").hasClass("active") !== true )
			{$('#ingredients').append(mushroom);
			cheese_price +=1;
			$('#total').empty();
			$('#total').append("$"+cheese_price);
		}
		else 
			{$('#2').remove()
			cheese_price -=1;	
			$('#total').empty();
			$('#total').append("$"+cheese_price)};	
	}

	function pepper_price (){
		
		if ($(".js-peppers").hasClass("active") !== true )
			{$('#ingredients').append(pepper);
			cheese_price +=1;
			$('#total').empty();
			$('#total').append("$"+cheese_price);}
		else 
			{$('#3').remove()
	cheese_price -=1;	
			$('#total').empty();
			$('#total').append("$"+cheese_price)};
	}

	function white_price (){
		
		if ($(".js-sauce").hasClass("active") !== true )
			{$('#ingredients').append(white)
			cheese_price +=3;
			$('#total').empty();
			$('#total').append("$"+cheese_price);}
		else 
			{$('#4').remove()
			cheese_price -=3;	
			$('#total').empty();
			$('#total').append("$"+cheese_price)};
	}

	function gluten_price (){
		
		if ($(".js-crust").hasClass("active") !== true )
			{$('#ingredients').append(crust)
			cheese_price +=5;
			$('#total').empty();
			$('#total').append("$"+cheese_price);}
		else 
			{$('#5').remove();
			cheese_price -=5;	
			$('#total').empty();
			$('#total').append("$"+cheese_price)};
	}


$('.js-pepperoni').on('click', fade_pepperoni);
$('.js-mushrooms').on('click', fade_mushrooms );
$('.js-peppers').on('click', fade_peppers );
$('.js-sauce').on('click', change_sauce );
$('.js-crust').on('click', change_crust );

$('.js-pepperoni').on('click', pepperoni_price);
$('.js-mushrooms').on('click', mushroom_price );
$('.js-peppers').on('click', pepper_price );
$('.js-sauce').on('click', white_price );
$('.js-crust').on('click', gluten_price);

});
