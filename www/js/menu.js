$(function() {

	var tab_template = $('#tab_template').html();
	var category_desc_template = $('#category_desc_template').html();
	var product_template = $('#product_template').html();	

	$.get('http://mis412.davidrichard.com/product_services/darla', function(data) {

		console.log(data);

		for (var i = 0; i < data.categories.length; i++) {

			data.categories[i].index = i;
			$('#category_tabs').append(Mustache.render(tab_template, data.categories[i]));
			$('#product_content').append(Mustache.render(category_desc_template, data.categories[i]));

			for (var j = 0; j < data.categories[i].products.length; j++) {
			  $('#cat'+ data.categories[i].index).append(Mustache.render(product_template, data.categories[i].products[j]));
			};

		};

		$('.tab-pane:first').addClass('active');
		$('.tab-pane > div:odd > div').addClass('margin_top');
		$('.nav-tabs li:first').addClass('active');

	});

});