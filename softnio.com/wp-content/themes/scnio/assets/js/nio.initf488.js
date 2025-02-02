/*  
 * @package ThemeNio /@1.0
 * jQuery init();
**/
jQuery(document).ready(function($) {
	$('ul li:last-child').addClass('last');
	$('ul li:first-child').addClass('first');
	// MENU
	$('.inav ul.menu').superfish({ delay: 500, speed: 'normal', speedOut: 'slow', cssArrows: true, disableHI: true, dropShadows: false });
	// MENU MOBILE @TAP OPEN
	if ($('.inav-mb').length > 0) {
		var _nv = $('.inav-mb'); var _nt = _nv.children('.inav-toggle'); var _ni = _nv.find ('li.menu-item-has-children'); var _al = _ni.children('a:first-child'); var _ah = _nv.find('a');
		function nav_hide (tg) { _t = (tg) ? tg : _nt ; _b = $('body'); _b.toggleClass('nav-shown'); _t.toggleClass('on').prev().toggleClass('shown'); _ni.removeClass('opened').children('ul.sub-menu').slideUp(700); }
		_nt.on('click', function(){ _t = $(this); nav_hide (_t); }); _ah.on('click', function(){ if (!$(this).parent('li').hasClass('menu-item-has-children')) { setTimeout(function() {nav_hide();}, 300); } });
		_al.on('click', function (e) { _a = $(this);
			if (_a.parent('.menu-item-has-children').hasClass('opened')) { _a.parent('.menu-item-has-children').removeClass('opened'); setTimeout(function() {nav_hide();}, 300); return true; } 
			else { _ni.removeClass('opened').children('ul.sub-menu').slideUp(500); _a.parent('.menu-item-has-children').addClass('opened'); _a.next('ul.sub-menu').delay(300).slideDown(700); return false; }
		});
	} 
	$('.no-click').find('a:first').click(function(){ return false; });
 	$('.scroll-down a').click(function() { var _tg = $(this).attr('href'); $.scrollTo(_tg, 800); return false; });	
	// STICKY HEAD
	function sticky_header(opt, wd) {
		if (!$('body').hasClass('has-sticky')) return false;
		var o = (opt) ? opt : 1; var ow = (wd) ? wd : 992; 
		var w = $(window).width(); var scL = $(window).scrollTop();
		if ( w > ow) { 
			if (o==1||o==true) { 
				var snK = $('.hd-glb.enb-sticky'); var snH = $('.hd-glb').height(); var smH = $('.ihd-ms').outerHeight();
				if(scL > 32){ if(!snK.hasClass('shrink')) snK.stop().addClass('shrink'); } else { if(snK.hasClass('shrink')) snK.stop().removeClass('shrink'); }
				if(scL > (snH-smH)) { if(!snK.hasClass('endhd')) snK.stop().addClass('endhd'); } else { if(snK.hasClass('endhd')) snK.stop().removeClass('endhd');	}
			} else { 
				var hcx = $('.hd-clone'); var shh = $('.hd-glb').height() + 50; 
				if(scl > shh){ if(!hcx.hasClass('fixed')) hcx.stop().addClass('fixed'); } else { if(hcx.hasClass('fixed')) hcx.stop().removeClass('fixed'); } 
			}
		}
		if(scL > 200) { $('.ibn .scrolling').css('opacity', 0); } else { $('.ibn .scrolling').css('opacity', 1); }
	}
	sticky_header(1, 0); $(window).scroll(function(){ sticky_header(1, 0) });
	// HEADER EFFECT
	function hd_effect (opt) {
		if ( !($('.hd-glb').hasClass('ihd-effect') && $('.hd-glb').hasClass('has-bn')) ) return false;
		var o = (opt) ? opt : 0; var isbar = ($('body').hasClass('admin-bar')) ? 46 : 0; var pos, top, topcp, hh, wh, ww, factor = 0.2; 
		var $thhd = $('.ebn'); var $thbn = $thhd.find('.hs-bg.is-effect'); $thcp = $thhd.find('.cpnw'); pos = $(window).scrollTop(); 
		wh = $(window).height(); ww = $(window).width(); top = $thbn.offset().top-isbar; topcp = $thcp.offset().top+150; hh = $thbn.outerHeight();
		if (top + hh < pos || top > pos + wh || ww < 992) return false; 
		var calcpos = Math.round((top - pos) * factor ); var calcmax = hh - Math.abs(hh * factor); 
		var calcopc = (topcp-pos) / topcp; $thcp.css( 'opacity', calcopc ).css('margin-top', Math.abs(Math.round(calcpos*1.15))+"px");;
		if (o==true||o==1) { $thbn.addClass('translate').css( 'transform', 'translate3d(0, ' + calcpos + 'px, 0)' );
		} else { $thbn.css('background-position', "50% " + calcpos + "px"); }
	}
	hd_effect(0); $(window).scroll(function(){ hd_effect(0); });
	// SLIDER EFFECT
	function sdr_effect (opt) {
		if ( !($('.islider').hasClass('udsx') && $('.islider').hasClass('udmfx')) ) return false;
		var o = (opt) ? opt : 0; var isbar = ($('body').hasClass('admin-bar')) ? 46 : 0; var pos, top, topcp, hh, wh, ww, factor = 0.35; 
		var $thsdr = $('.islider'); var $thsbg = $thsdr.find('.bg.hs-bg'); $thcp = $thsdr.find('.cpnw'); pos = $(window).scrollTop(); 
		wh = $(window).height(); ww = $(window).width(); top = $thsbg.offset().top-isbar; topcp = $thcp.offset().top+150; hh = $thsbg.outerHeight();
		if (top + hh < pos || top > pos + wh || ww < 992) return false; 
		var calcpos = Math.round((top - pos) * factor ); 
		var calcopc = (topcp-pos) / topcp; $thcp.css( 'opacity', calcopc ).css('margin-top', Math.abs(Math.round(calcpos*1.15))+"px");;
		if (o==true||o==1) { $thsbg.addClass('translate').css( 'transform', 'translate3d(0, ' + calcpos + 'px, 0)' );
		} else { $thsbg.css('background-position', "50% " + calcpos + "px"); }
	}
	sdr_effect(0); $(window).scroll(function(){ sdr_effect(0); });
	// SVG
	function svgon () { 
		var svg = $('img.isvg.rep'); if (svg.length > 0) { svg.each(function(){ var im = $(this); var imd = im.attr('id'), imc = im.attr('class'), imu = im.attr('src'); $.get(imu, function(data) { var ims = $(data).find('svg'); if(typeof imd !== 'undefined') { ims = ims.attr('id', imd); } if(typeof imc !== 'undefined') { ims = ims.attr('class', imc+' rep-svg'); } ims = ims.removeAttr('xmlns:a'); im.replaceWith(ims); }, 'xml'); }); }
	}
	function svgani () {
		if($('#svg-web').length > 0) var web = new Vivus('svg-web', {type:'scenario-sync',duration:350 });
		if($('#svg-apps').length > 0) var apps = new Vivus('svg-apps', {type:'scenario-sync', duration:350 });
		if($('#svg-design').length > 0) var design = new Vivus('svg-design', {type:'scenario-sync', duration:350 });
		if($('#svg-eshop').length > 0) var eshop = new Vivus('svg-eshop', {type: 'scenario-sync', duration:350 });
	}
	svgon (); svgani ();
	// iJOBs
	function ijobs () {
		var ejob = $('.ejobs.view-toggle');
		var ijob = ejob.find('.job-title');
		if (ejob.length > 0) {
			ijob.on('click', function() { var _j = $(this); 
				if (_j.parents('.ejob').hasClass('current')) { 
					_j.parents('.ejob').removeClass('current'); _j.next().slideUp(400);
				} else { 
					ejob.find('.ejob').removeClass('current').find('.job-entry').slideUp(400);
					_j.parents('.ejob').addClass('current'); _j.next().slideDown(500);
					//setTimeout(function() { $.scrollTo(_j, 1200, {offset: {top:-45} } ); }, 450); 
				}
			});
		}
	}
	ijobs();
	// WAYPOINT
	if(jQuery().waypoint) {
		jQuery('.animated').each(function() {
			var ani = jQuery(this); var typ = ani.attr("data-animate"), dur = ani.data("duration"), dly = ani.data("delay");
			ani.waypoint(function() { 
				ani.css("visibility", "visible"); ani.addClass("animated "+typ);
				if(dur) { ani.css('-moz-animation-duration', dur+'s').css('-webkit-animation-duration', dur+'s').css('-ms-animation-duration', dur+'s').css('animation-duration', dur+'s'); } 
				if (dly) { ani.css('-webkit-animation-delay', dly+'s').css('-moz-animation-delay', dly+'s').css('-ms-animation-delay', dly+'s').css('animation-delay', dly+'s'); } 
			}, { offset: '85%' }); 
        });
	}
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {} else { 
	}
});