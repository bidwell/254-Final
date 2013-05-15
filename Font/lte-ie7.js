/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'NWoutfitters\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-cart' : '&#x61;',
			'icon-phone' : '&#x62;',
			'icon-images' : '&#x63;',
			'icon-location' : '&#x64;',
			'icon-clock' : '&#x65;',
			'icon-binoculars' : '&#x66;',
			'icon-bug' : '&#x67;',
			'icon-briefcase' : '&#x68;',
			'icon-facebook' : '&#x69;',
			'icon-twitter' : '&#x6a;',
			'icon-envelope' : '&#x6b;',
			'icon-calendar' : '&#x6c;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};