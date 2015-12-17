var flxpxlObj = (function() {
	var obj = {};

	obj.version = '5';

	obj.execute = function() {

		var bodyHTML = '';
		var bodyText = '';
		var bodyNormalized = '';
		var currentQueryTemp = '';
		var currentFunction = function(){};

		// Page group: Samsung Basket
		var conditions_727906 = {};
		setTimeout(function() {
		function pageGroup_727906() {
			obj.placeAppNexusSegmentScript('seg?add=4045235&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_727906[queryId]=true);if(checkConditions(conditions_727906)){pageGroup_727906();}});};
		if(
			(window.location.href.indexOf('shop.samsung.com/uk/basket/') != -1)
		) {
			if(checkConditions(conditions_727906)){pageGroup_727906();}
		}
		}, 1);

		// Page group: Samsung 3 Pages
		var conditions_727907 = {};
		setTimeout(function() {
		function pageGroup_727907() {
			obj.placeAppNexusSegmentScript('seg?add=4045395&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_727907[queryId]=true);if(checkConditions(conditions_727907)){pageGroup_727907();}});};
		if(
			(obj.getAndSetPagesViewed('727907', '3'))
		) {
			if(checkConditions(conditions_727907)){pageGroup_727907();}
		}
		}, 1);

		// Page group: Samsung 5 Mins
		var conditions_727908 = {};
		setTimeout(function() {
		function pageGroup_727908() {
			obj.placeAppNexusSegmentScript('seg?add=4045405&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_727908[queryId]=true);if(checkConditions(conditions_727908)){pageGroup_727908();}});};
		if(
			(obj.getAndSetTimespent('727908', '5', currentFunction()))
		) {
			if(checkConditions(conditions_727908)){pageGroup_727908();}
		}
		}, 1);

		// Page group: Samsung Login
		var conditions_727909 = {};
		setTimeout(function() {
		function pageGroup_727909() {
			obj.placeAppNexusSegmentScript('seg?add=4088804&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_727909[queryId]=true);if(checkConditions(conditions_727909)){pageGroup_727909();}});};
		if(
			(window.location.href.indexOf('shop.samsung.com/uk/checkout/auth/') != -1)
		) {
			if(checkConditions(conditions_727909)){pageGroup_727909();}
		}
		}, 1);

		// Page group: Samsung Order Checkout
		var conditions_727910 = {};
		setTimeout(function() {
		function pageGroup_727910() {
			obj.placeAppNexusSegmentScript('seg?add=4088818&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_727910[queryId]=true);if(checkConditions(conditions_727910)){pageGroup_727910();}});};
		if(
			(window.location.href.indexOf('shop.samsung.com/uk/checkout/?dz=874&pm=CC') != -1)
		) {
			if(checkConditions(conditions_727910)){pageGroup_727910();}
		}
		}, 1);

		// Page group: All pages
		var conditions_727911 = {};
		setTimeout(function() {
		function pageGroup_727911() {

(function() {
  var loadScript = function (a,b){var c=document.createElement("script");c.async=true,c.readyState?c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete")c.onreadystatechange=null,b&&b()}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
  var waitUntilLoaded = function(toTest, callback) {
    var count = 0;
    var waitUntilLoadedInner = function(toTest, callback) {
      var val = toTest();
      if(!val) {
        count++;
        if(count < 100) { // 10 seconds
          setTimeout(function(){ waitUntilLoadedInner(toTest, callback); }, 100);
        }
        return;
      }
      callback(val);
    };
    waitUntilLoadedInner(toTest, callback);
  };
  function getValueInner($, cssPath, getImage) {
    if(cssPath) {
      var el = $(''+cssPath);
      if(el && el.length) {
        if(el[0].tagName && el[0].tagName.toLowerCase() == 'embed') { // this is flash, try to extract image from flash vars
          var f = el.attr('flashvars');
          if(f && f.indexOf('http') != -1) {
            return f.match(/(http|https)(?:(?!\&).)*/g)[0];
          }
        }
        if(el.attr('src')) { // this is probably an image
          return el[0].src;
        }
        if(getImage) { // we always want an image
          var patt=/\"|\'|\)|\(|url/g; //regex to remove enclosing url()

          if(el.css('background-image') && el.css('background-image') != "none") {
            return el.css('background-image').replace(patt,'');
          } else if($(el[0].parentNode).css('background-image') && $(el[0].parentNode).css('background-image') != "none") {
            return $(el[0].parentNode).css('background-image').replace(patt,'');
          }
        }
        if(el.find('sup')) {
          el = el.clone();
          el.html(el.html().replace('<sup>', '.').replace('</sup>', ''));
        }
        if(!getImage && el[0].className && el[0].className.indexOf('sIFR-flash') != -1 && el[0].id) {
          var tmpEl = $('#' + el[0].id);
          var el2 = tmpEl.siblings('.sIFR-alternate');
          if(el2.length) {
            el = el2;
          }
        }
        var text = el[0].textContent||el[0].innerText;
        return $.trim(text).replace(/\u20ac/g, '€').replace(/\u00a0/g, " ");
      }
    }
    return '';
  };

  var exec = function($) {

    var getValue = function(cssPath, getImage) { return getValueInner($, cssPath, getImage);};

    iatDomain = '691779-samsung'; // place domain you want to use here, leave default if not sure

    iatProd = {
      prodId: '', 						// product id
      imageUrl: getValue('div.listing div.listing__product div.listing__product-img a img', true), 					// url of the product image
      destUrl: window.location.href, 	// landing page url
      prodName: getValue('div.listing div.listing__product div.listing__product-title-wrap a h2'), 					// product name
      prodPrice: getValue('div.listing div.row.collapse div.listing__product .listing__product-price'),
      desc: getValue('div.listing div.row.collapse div.listing__product .listing__product-version'), 						// additional short description (optional)
      logo: '', 						// product brand logo (optional)
      custom1: '', 						// custom value
      custom2: '', 						// custom value
      availability: 1, 					// is the product in stock?, 1 - yes, 0 - no (optional)
      category: '', 					// product category (optional)
      useCookies: 1,				// if set to 0, it won't set any cookies
      remove: 0					// if set, it will remove the products defined in prodId from the visitor's cookie (optional)
    };


    if(!iatProd.prodId) {
      if(iatProd.imageUrl) {
        iatProd.prodId = iatProd.imageUrl;
      } else if(iatProd.prodName && iatProd.prodPrice) {
        iatProd.prodId = iatProd.prodName + "__" + iatProd.prodPrice;
      } else {
        iatProd.prodId = iatProd.destUrl;
      }
    }

    if(!iatProd.imageUrl) {
      return;
    }

    if(!iatProd.destUrl) {
      return;
    }

    if(!iatProd.prodPrice) {
      return;
    }


    (function(a){var c=document.createElement("script");c.async=true,c.defer=true,c.src=a,document.getElementsByTagName("head")[0].appendChild(c)})
    ("//dq5tha3wemxik.cloudfront.net/prod.js");
  }

  if(window.jQuery) {
    exec(window.jQuery);
  } else {
    if (typeof $ != 'undefined' && $ != null && $.toString().indexOf('[native code]') == -1) {
      var tmpLib = $;
    }
    loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
      var jqNoConflict = jQuery.noConflict();
      if (typeof tmpLib != 'undefined' && tmpLib !== null) {
        $ = tmpLib;
        tmpLib = null;
      }
      if(jqNoConflict) {
        exec(jqNoConflict);
      }
    });
  }
})();


		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_727911[queryId]=true);if(checkConditions(conditions_727911)){pageGroup_727911();}});};
		if(
			(window.location.href.indexOf('shop.samsung.com/uk/') != -1)
		) {
			if(checkConditions(conditions_727911)){pageGroup_727911();}
		}
		}, 1);



	}; // end execute

	obj.placePixel = function(url, tagId) {
		if(tagId && tagsPlaced[tagId]) {
			return;
		} else if(tagId) {
			tagsPlaced[tagId] = 1;
		}
		var i = document.createElement("img");
		i.onload = function(){};
		i.src = obj.fixUrl((url + '')).replace('{iatRandom}', obj.randomId());
	};

	obj.placeCode = function(code, tagId) {
		if(tagId && tagsPlaced[tagId]) {
			return;
		} else if(tagId) {
			tagsPlaced[tagId] = 1;
		}
		var scriptCode = [];
		code = "" + code;
		if(code.toLowerCase().indexOf("<scr"+"ipt") > -1) {
			var d = document.createElement("div");
			d.innerHTML = "_" + code;
			var scripts = d.getElementsByTagName("script");
			for(var i=0, len=scripts.length; i < len; i++) {
				if(scripts[i].src) {
					scriptCode.push({url: scripts[i].src});
				} else {
					scriptCode.push({evalSrc: scripts[i].innerHTML});
				}
			}
			for(var j=scripts.length-1; j >= 0; j--) {
				scripts[j].parentNode.removeChild(scripts[j]);
			}
			code = d.innerHTML.substring(1);
		}
		obj.placeHtml(code);
		if(scriptCode.length) {
			 scriptsToPlace = scriptsToPlace.concat(scriptCode);
		}
		return scriptCode;
	};

	obj.placeScript = function(url, tagId) {
		if(tagId && tagsPlaced[tagId]) {
			return;
		} else if(tagId) {
			tagsPlaced[tagId] = 1;
		}
		var script = document.createElement("script");
		script.async = true;
		script.type = "text/javascript";
		script.src = obj.fixUrl(url).replace('{iatRandom}', obj.randomId());
		document.getElementsByTagName('head')[0].appendChild(script);
	};

	obj.placeHtml = function(code, tagId) {
		if(tagId && tagsPlaced[tagId]) {
			return;
		} else if(tagId) {
			tagsPlaced[tagId] = 1;
		}
		df.innerHTML += code.replace('{iatRandom}', obj.randomId());
	};

	obj.placeAppNexusScript = function(code, tagId, purchaseIntegration, scVariable) {
		code = window.location.protocol == 'https:' ? 'https://secure.adnxs.com/' + code : 'http://ib.adnxs.com/' + code;
		if(purchaseIntegration && purchaseIntegration != 'None') {
			code = code + obj.getIntegrationData(purchaseIntegration, scVariable);
		}
		obj.placeScript(code, tagId);
	};

	obj.placeAppNexusSegmentScript = function(code, tagId, purchaseIntegration, scVariable, keywordType, queryParam) {
		if(keywordType && keywordType == 'Organic') {
			if(flxKeywordHash) {
				code += '&other=' + escape(flxKeywordHash);
			}
		} else if(keywordType && keywordType == 'Custom') {
			var customKeyword = flxGetKeyword(queryParam);
			var hash = '';
			if(customKeyword) {
				hash = flxSendKeyword(customKeyword);
			}
			if(hash) {
				code += '&other=' + escape(hash);
			}
		} else if(keywordType && keywordType == 'Both') {
			var customKeyword = flxGetKeyword(queryParam);
			var hash = '';
			if(customKeyword) {
				hash = flxSendKeyword(customKeyword);
			}

			if(hash) {
				code += '&other=' + escape(hash);
			} else {
				if(flxKeywordHash) {
					code += '&other=' + escape(flxKeywordHash);
				}
			}
		}
		obj.placeAppNexusScript(code, tagId, purchaseIntegration, scVariable);
	};

	obj.getIntegrationData = function(purchaseIntegration, scVariable) {
		var ret = '';
		var orderId = '';
		var revenue = 0;
		if(purchaseIntegration == 'Google Analytics') {
			var html = document.body.innerHTML;
			//async
			if(html.indexOf('_gaq.push') != -1) {
				try {
					orderId = html.split('_addTrans')[1].split('_trackTrans')[0].split(',')[1].match(/['"].*?['"]/g)[0].replace(/['"]/g, '');
				} catch(e){};
				try {
					revenue = parseFloat(html.split('_addTrans')[1].split('_trackTrans')[0].split(',')[3].match(/['"].*?['"]/g)[0].replace(/['"]/g, ''));
				} catch(e){};
				if(!revenue) {
					try {
						revenue = parseFloat(html.split('_addTrans')[1].split('_trackTrans')[0].split(/\,\s+.*/g)[2].match(/['"].*?['"]/g)[0].replace(/['"]/g, ''));
					} catch(e){}
				}
			}

			//sync
			if(!orderId && !revenue) {
				try {
					orderId = html.split('_addTrans')[1].split('_trackTrans')[0].split(',')[0].match(/['"].*?['"]/g)[0].replace(/['"]/g, '');
				} catch(e){};
				try {
					revenue = parseFloat(html.split('_addTrans')[1].split('_trackTrans')[0].split(',')[2].match(/['"].*?['"]/g)[0].replace(/['"]/g, ''));
				} catch(e){};
			}
		} else if(purchaseIntegration == 'Adobe SiteCatalyst') {
			try {
				if(!scVariable) {
					scVariable = 's';
				}
				if(window[scVariable]) {
					orderId = window[scVariable].purchaseID;
				}
			} catch(e){};
			try {
				if(window[scVariable]) {
					var productsVar = window[scVariable].products;
					if(productsVar) {
						var products = productsVar.split(',');
						for(var i=0; i<products.length; i++) {
							var items = products[i].split(';');
							if(items.length > 3 && items[3]) {
								revenue += parseFloat(items[3], 10);
							}
						}
					}
				}
			} catch(e){};
		} else if(purchaseIntegration == 'Qubit Universal Variable') {
			try {
				if(window.universal_variable && window.universal_variable.transaction) {
					orderId = window.universal_variable.transaction.order_id;
					revenue = window.universal_variable.transaction.total;
				}
			} catch(e){}
		}

		if(orderId) {
			ret += '&order_id=' + encodeURIComponent(orderId);
		}
		if(revenue) {
			ret += '&value=' + encodeURIComponent(revenue);
		}
		return ret;
	};

	obj.randomId = function() {
		return (new Date()).getTime() + '' + (Math.random() * 1e16);
	};

	obj.fixUrl = function(url) {
		if(url.substring(0, 5) === 'http:') {
			return url;
		}
		if(url.substring(0, 6) === 'https:') {
			return url;
		}
		return "//" + url;
	};

	obj.scriptEval = function(script) {
		if (window.execScript) {
			window.execScript(script);
		} else {
			var f = function () {
				eval.call(window, script);
			};
			f();
		}
	};

	obj.placeScripts = function(scripts) {
		for(var i=0, len=scripts.length; i<len; i++) {
			if(scripts[i].url) {
				obj.placeScript(scripts[i].url);
			} else if(scripts[i].evalSrc) {
				obj.scriptEval(scripts[i].evalSrc);
			}
		}
	};

	function getTextContentExceptScript(element) {
		var text = [];
		var self = arguments.callee;
		var el, els = element.childNodes;

		for (var i=0, iLen=els.length; i<iLen; i++) {
			el = els[i];
			if (el.nodeType == 1 && el.tagName && el.tagName.toLowerCase() != 'script' && el.tagName.toLowerCase() != 'noscript' && el.tagName.toLowerCase() != 'style') {
				text.push(self(el));
			} else if (el.nodeType == 3) {
				text.push(el.data);
			}
		}
		return text.join(' ').replace(/\s{2,}/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
	}

	function checkConditions(conditions) {
		for(var i in conditions) {
			if(conditions.hasOwnProperty(i)) {
				if(!conditions[i]) {
					return false;
				}
			}
		}
		return true;
	}
    
    var visibilityObj = null;
    var flxKeyword = '';
    var flxCustomKeyword = '';
    var flxKeywordHash = '';
    var flxCustomKeywordHash = '';
    var flxRewriteDocumentWrite = true;

	function getVisiblityObj() {
	var eventObj = {};
	eventObj.hidden = false;
	function addEvent(obj, evType, fn, isCapturing) {
		if (isCapturing == null) isCapturing = false;
		if (obj.addEventListener) {
			// Firefox
			obj.addEventListener(evType, fn, isCapturing);
			return true;
		} else if (obj.attachEvent) {
			// MSIE
			var r = obj.attachEvent('on' + evType, fn);
			return r;
		} else {
			return false;
		}
	}

	// register to the W3C Page Visibility API
	var hidden = null;
	var visibilityChange = null;
	if (typeof document.mozHidden !== "undefined") {
		hidden = "mozHidden";
		visibilityChange = "mozvisibilitychange";
	} else if (typeof document.msHidden !== "undefined") {
		hidden = "msHidden";
		visibilityChange = "msvisibilitychange";
	} else if (typeof document.webkitHidden !== "undefined") {
		hidden = "webkitHidden";
		visibilityChange = "webkitvisibilitychange";
	} else if (typeof document.hidden !== "hidden") {
		hidden = "hidden";
		visibilityChange = "visibilitychange";
	}
	if (hidden != null && visibilityChange != null) {
		addEvent(document, visibilityChange, function (event) {
			if(document[hidden]) {
				eventObj.hidden = true;
			} else {
				eventObj.hidden = false;
			}
		});
	}

	// register to the potential page visibility change
	addEvent(document, "potentialvisilitychange", function (event) {
		if(eventObj.potentialHidden) {
			eventObj.hidden = true;
		} else {
			eventObj.hidden = false;
		}
	});



	var potentialPageVisibility = {
		pageVisibilityChangeThreshold: 3,
		// in seconds
		init: function () {
			function setAsNotHidden() {
				var dispatchEventRequired = eventObj.potentialHidden;
				eventObj.potentialHidden = false;
				eventObj.potentiallyHiddenSince = 0;
				if (dispatchEventRequired) dispatchPageVisibilityChangeEvent();
			}

			function initPotentiallyHiddenDetection() {
				// the window does not has the focus => check for  user activity in the window
				lastActionDate = new Date();
				if (timeoutHandler != null) {
					clearInterval(timeoutHandler);
				}
				timeoutHandler = setInterval(checkPageVisibility, potentialPageVisibility.pageVisibilityChangeThreshold * 1000 + 100); // +100 ms to avoid rounding issues under Firefox
			}

			function dispatchPageVisibilityChangeEvent() {
				unifiedVisilityChangeEventDispatchAllowed = false;
				if( document.createEvent ) {
					var evt = document.createEvent("Event");
					evt.initEvent("potentialvisilitychange", true, true);
					document.dispatchEvent(evt);
				}
			}

			function checkPageVisibility() {
				var potentialHiddenDuration = (lastActionDate == null ? 0 : Math.floor((new Date().getTime() - lastActionDate.getTime()) / 1000));
				eventObj.potentiallyHiddenSince = potentialHiddenDuration;
				if (potentialHiddenDuration >= potentialPageVisibility.pageVisibilityChangeThreshold && !eventObj.hidden) {
					// page visibility change threshold raiched => raise the even
					eventObj.potentialHidden = true;
					dispatchPageVisibilityChangeEvent();
				}
			}

			var lastActionDate = new Date();
			var hasFocusLocal = true;
			var hasMouseOver = true;
			eventObj.potentialHidden = false;
			eventObj.potentiallyHiddenSince = 0;
			var timeoutHandler = null;

			addEvent(document, "mousemove", function (event) {
				lastActionDate = new Date();
			});
			addEvent(document, "mouseover", function (event) {
				hasMouseOver = true;
				setAsNotHidden();
			});
			addEvent(document, "mouseout", function (event) {
				hasMouseOver = false;
			});
			addEvent(window, "blur", function (event) {
				hasFocusLocal = false;
				eventObj.potentialHidden = true;
				dispatchPageVisibilityChangeEvent();
			});
			addEvent(window, "focus", function (event) {
				hasFocusLocal = true;
				setAsNotHidden();
			});
			addEvent(window, "focusin", function (event) {
				hasFocusLocal = true;
				setAsNotHidden();
			});
			addEvent(window, "focusout", function (event) {
				hasFocusLocal = false;
				eventObj.potentialHidden = true;
				dispatchPageVisibilityChangeEvent();
			});
			setAsNotHidden();
			initPotentiallyHiddenDetection();
		}
	}

	potentialPageVisibility.pageVisibilityChangeThreshold = 15;
	potentialPageVisibility.init();
	return eventObj;
}
	
	/*!
 * Cookies.js - 0.1.7
 * Tuesday, May 08 2012 @ 6:29 PM EST
 *
 * Copyright (c) 2012, Scott Hamper
 * Licensed under the MIT license,
 * http://www.opensource.org/licenses/MIT
 */
var Cookie = (function (document, undefined) {
		
	var Cookies = function (key, value, options) {
		return arguments.length === 1 ?
			Cookies.get(key) : Cookies.set(key, value, options);
	};
	
	Cookies.get = function (key) {
		if (document.cookie !== Cookies._cacheString) {
			Cookies._populateCache();
		}
		
		return Cookies._cache[key];
	};
	
	Cookies.defaults = {
		path: '/'
	};
	
	Cookies.set = function (key, value, options) {
		var options = {
			path: options && options.path || Cookies.defaults.path,
			domain: options && options.domain || Cookies.defaults.domain,
			expires: options && options.expires || Cookies.defaults.expires,
			secure: options && options.secure !== undefined ? options.secure : Cookies.defaults.secure
		};
		
		if (value === undefined) {
			options.expires = -1;
		}
		
		switch (typeof options.expires) {
			// If a number is passed in, make it work like 'max-age'
			case 'number': options.expires = new Date(new Date().getTime() + options.expires * 1000); break;
			// Allow multiple string formats for dates
			case 'string': options.expires = new Date(options.expires); break;
		}
	
		// Escape only the characters that should be escaped as defined by RFC6265
		var cookieString = encodeURIComponent(key) + '=' + (value + '').replace(/[^!#-+\--:<-[\]-~]/g, encodeURIComponent);
		cookieString += options.path ? ';path=' + options.path : '';
		cookieString += options.domain ? ';domain=' + options.domain : '';
		cookieString += options.expires ? ';expires=' + options.expires.toGMTString() : '';
		cookieString += options.secure ? ';secure' : '';
		
		document.cookie = cookieString;
		
		return Cookies;
	};
	
	Cookies.expire = function (key, options) {
		return Cookies.set(key, undefined, options);
	};
	
	Cookies._populateCache = function () {
		Cookies._cache = {};
		Cookies._cacheString = document.cookie;
		
		var cookiesArray = Cookies._cacheString.split('; ');
		for (var i = 0; i < cookiesArray.length; i++) {
			// The cookie value can contain a '=', so cannot use 'split'
			var separatorIndex = cookiesArray[i].indexOf('=');
			var key = '';
			try {
				key = decodeURIComponent(cookiesArray[i].substr(0, separatorIndex));
			} catch(e) {
				key = unescape(cookiesArray[i].substr(0, separatorIndex));
			}
			var value = '';
			try {
				value = decodeURIComponent(cookiesArray[i].substr(separatorIndex + 1));
			} catch(e) {
				value = unescape(cookiesArray[i].substr(separatorIndex + 1));
			}
			
			if (Cookies._cache[key] === undefined) {
				Cookies._cache[key] = value;
			}
		}
	};
	
	Cookies.enabled = (function () {
		var isEnabled = Cookies.set('cookies.js', '1').get('cookies.js') === '1';
		Cookies.expire('cookies.js');
		return isEnabled;
	})();
	
	return Cookies;

})(document);

var timespentAdded = {};
var pagesviewedAdded = {};

obj.getAndSetTimespent = function(pageId, conditionSeconds, funcToExecute) {
	conditionSeconds = parseInt(conditionSeconds, 10);
	var alreadyFired = false;
	var lastTimestamp = new Date();
	if(!timespentAdded[pageId]) {
		timespentAdded[pageId] = setInterval(function() {
			if(!visibilityObj) {
				visibilityObj = getVisiblityObj();
			}
			var timespent = Cookie('flxpxlTs_' + pageId);
			if(!timespent) {
				timespent = 0;
			} else {
				timespent = timespent.split('|');
				if(timespent.length > 1) {
					alreadyFired = parseInt(timespent[1], 10);
				}
				timespent = parseInt(timespent[0], 10);
			}
			var newTimestamp = new Date();
			timespent += newTimestamp - lastTimestamp;
			lastTimestamp = newTimestamp;
			if(!visibilityObj.hidden) {
				if(!alreadyFired && timespent && timespent >= (conditionSeconds * 1000)) {
					Cookie('flxpxlTs_' + pageId, timespent + '|' + 1);
					clearInterval(timespentAdded[pageId]);
					alreadyFired = true;
					funcToExecute();
				} else {
					Cookie('flxpxlTs_' + pageId, timespent + '|' + 0);
				}
			}
		}, 2000);
	}
	return false;
};

obj.getAndSetPagesViewed = function(pageId, conditionNumberOfPages) {
	conditionNumberOfPages = parseInt(conditionNumberOfPages, 10);
	var alreadyFired = false;

	var pagesviewed = Cookie('flxpxlPv_' + pageId);
	if(!pagesviewed) {
		pagesviewed = 0;
	} else {
		pagesviewed = pagesviewed.split('|');
		if(pagesviewed.length > 1) {
			alreadyFired = parseInt(pagesviewed[1], 10);
		}
		pagesviewed = parseInt(pagesviewed[0], 10);
	}

	pagesviewed += 1;

	if(!alreadyFired && pagesviewed >= conditionNumberOfPages) {
		Cookie('flxpxlPv_' + pageId, pagesviewed + '|' + 1);
		alreadyFired = true;
		return true;
	} else {
		Cookie('flxpxlPv_' + pageId, pagesviewed + '|' + 0);
	}
	return false;
};

	
	
	
	
	
    
    
    
    
    
    
    
    
    
    

    function timeout(numberOfSeconds, funcToExec) {
    	window.setTimeout(funcToExec, numberOfSeconds * 1000);
    	return false;
    }
	
	var tagsPlaced = {};
	var docFragment = document.createDocumentFragment();
	var df = document.createElement('div');
	df.style.display = 'none';
	df.id = 'iatDivInsert';
	docFragment.appendChild(df);
	var scriptsToPlace = [];
	
	var main = function() {
		obj.execute();

		if(document.body) {
			document.body.appendChild(docFragment);
		}

		var dwCodes = [];
		var dw = document.write;
		var dwl = document.writeln;
		document.write = document.writeln = function(html){dwCodes.push(html)};
		obj.placeScripts(scriptsToPlace);
		scriptsToPlace = [];
		obj.placeCode(dwCodes.join(''));
		obj.placeScripts(scriptsToPlace);

		if(flxRewriteDocumentWrite) {
			document.write = document.writeln = function(html){var scriptsToPlace = obj.placeCode(html); obj.placeScripts(scriptsToPlace);};
		}

		if(window.location.href.indexOf('iatDev=1') != -1) {
			document.cookie = "iatDev=1; path=/";
		} else if(window.location.href.indexOf('iatDev=0') != -1) {
			document.cookie = "iatDev=0; path=/";
		}
	};
		// Following function is adapted from https://github.com/jfriend00/docReady
		// licensed under MIT license
		// https://github.com/jfriend00/docReady/blob/master/license
	  ((function(funcName, baseObj) {
	    "use strict";
	    // The public function name defaults to window.docReady
	    // but you can modify the last line of this function to pass in a different object or method name
	    // if you want to put them in a different namespace and those will be used instead of 
	    // window.docReady(...)
	    funcName = funcName || "docReady";
	    baseObj = baseObj || window;
	    var readyList = [];
	    var readyFired = false;
	    var readyEventHandlersInstalled = false;
	    
	    // call this when the document is ready
	    // this function protects itself against being called more than once
	    function ready() {
	        if (!readyFired) {
	            // this must be set to true before we start calling callbacks
	            readyFired = true;
	            for (var i = 0; i < readyList.length; i++) {
	                readyList[i].fn.call(window, readyList[i].ctx);
	            }
	            // allow any closures held by these functions to free
	            readyList = [];
	        }
	    }
	    
	    function readyStateChange() {
	        if ( document.readyState === "complete" ) {
	            ready();
	        }
	    }
	    
	    baseObj[funcName] = function(callback, context) {
	        // if ready has already fired, then just schedule the callback
	        // to fire asynchronously, but right away
	        if (readyFired) {
	            setTimeout(function() {callback(context);}, 1);
	            return;
	        } else {
	            // add the function and context to the list
	            readyList.push({fn: callback, ctx: context});
	        }
	        // if document already ready to go, schedule the ready function to run
	        // IE only safe when readyState is "complete", others safe when readyState is "interactive"
	        if (document.readyState === "complete" || (!document.attachEvent && document.readyState === "interactive")) {
	            setTimeout(ready, 1);
	        } else if (!readyEventHandlersInstalled) {
	            // otherwise if we don't have event handlers installed, install them
	            if (document.addEventListener) {
	                // first choice is DOMContentLoaded event
	                document.addEventListener("DOMContentLoaded", ready, false);
	                // backup is window load event
	                window.addEventListener("load", ready, false);
	            } else {
	                // must be IE
	                document.attachEvent("onreadystatechange", readyStateChange);
	                window.attachEvent("onload", ready);
	            }
	            readyEventHandlersInstalled = true;
	        }
	    }
	    return baseObj[funcName];
	})("docReady"))(main);

	return obj;
})();