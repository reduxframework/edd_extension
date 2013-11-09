/*global jQuery, document, redux_change */
(function($){
	'use strict';

	$.redux = $.redux || {};

	$(document).ready(function(){
		$.redux.edd();
	});

	$.redux.edd = function(){
		jQuery('.redux-verifyEDD').click(function() {
			jQuery.post(
			    ajaxurl, {
			        'action': 'redux_edd_'+redux_opts.opt_name+'_verify_license',
			        'data':   'foobarid'
			    },
			    function(response){
			        alert('The server responded: ' + response);
			    }
			);			
		});
				
	}

})(jQuery);
