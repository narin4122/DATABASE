//임시 start
if( SITE_CD === 'uk' ){
	if( DOMAIN === 'www.samsung.com' || DOMAIN === 'origin2.samsung.com' ){
		$('div.cart-popover').find('ul.acText').find('a').attr('href', 'http://shop.samsung.com/uk/basket/');
		$('.jump-module').each(function(){
			$(this).find('#jumpToCartArea').find('a').attr('href','http://shop.samsung.com/uk/basket/');
		});
	}else if( DOMAIN === 'preview4.samsung.com' || DOMAIN === 'stgweb4.samsung.com' ){
		$('div.cart-popover').find('ul.acText').find('a').attr('href', 'http://sabre-staging.shop.samsung.com/uk/basket/');
		$('.jump-module').each(function(){
			$(this).find('#jumpToCartArea').find('a').attr('href','http://sabre-staging.shop.samsung.com/uk/basket/');
		});
	}
}
//임시 end

if(SITE_CD == 'jp') {//최상단에 추가
 dispNmGglTag = $("#displayName").val();
 typeNmGglTag = $("#prdTypeNm").val();
}

﻿// New 로직의 경우에 무조건 Shop API 를 호출
//$('#discontinued').val("N"); // #299

// PDP information 영역 상단 고정
$(".pdp_standard #content .pdp-hero .product-info-section").css('vertical-align', 'top');
var ss = $;

// 프랑스 레이어팝업 내 Basket 처리
if(SITE_CD == 'fr'){
	$("#addCartList a").attr('href', 'https://shop.samsung.com/fr/ng/cartAndCheckout/basket');
} else if(SITE_CD == 'au'){
	$("#addCartList a").attr('href', 'https://shop.samsung.com/au/ng/cartAndCheckout/basket');
}

/** -- FILE: pdp-standard.js -- **/
/**
Page object for the standard pdp page.

@module Main
@submodule PDPStandard
@main Main
@ver.0.9
**/
var mappingList = {
	'option' : [],
	'product' : [],
	'dispNm' : []
};
(function($) {
	$.fn.val2 = function(value) {
		if (!this.is('[data-placeholder-active]')) {
			return $.fn.val.apply(this, arguments);
		}

		// getter
		if (!arguments.length) {
			// compensation
			if (this.attr('data-placeholder-active') === 'true' && this.val() !== this.attr('data-placeholder-value')) {
				var val = this.val();
				this.val('');
				Placeholders.enable(this[0]);
				Placeholders.disable(this[0]);
				this.val(val);
			}
			return ss.inputValue(this);
		}

		// setter
		ss.inputValue(this, value);
		return this;
	};
}(jQuery));

/*global window, document, setInterval, clearInterval, Modernizr, eventBridge, eventDictionary, setTimeout, clearTimeout, console, Math, setHeroSize */
(function($) {

	var reviewTermsCheckSite = false;
	var reviewTermsCheckText = {};
	if(['se','no','fi','dk'].indexOf(SITE_CD) > -1){
		reviewTermsCheckSite = true;
		reviewTermsCheckText = {
			"se": "Jag godkänner Samsung Nordics <a href='/se/info/privacy.html#none' target='_blank'>personuppgiftspolicy<a/> och <a href='http://reviews.se.samsung.com/content/7463-sv_se/termsandconditions.htm' target='_blank'>villkor</a> (inklusive avseende lagring av uppgifter hos extern tjänsteleverantör)",
			"no": "Jeg samtykker i Samsung Nordics <a href='/no/info/privacy.html#none' target='_blank'>personvernerklæring</a> og <a href='http://reviews.no.samsung.com/content/7463-no_no/termsandconditions.htm' target='_blank'>betingelser</a> (herunder om lagring hos ekstern tjenesteleverandør)",
			"dk": "Jeg accepterer Samsung Nordics politik om <a href='/dk/info/privacy.html#none' target='_blank'>personoplysninger</a> og <a href='http://reviews.dk.samsung.com/content/7463-da_dk/termsandconditions.htm' target='_blank'>betingelser</a> (herunder betingelserne om lagring af oplysninger hos en ekstern tjenesteleverandør)",
			"fi": "Hyväksyn Samsung Nordicin <a href='/fi/info/privacy.html#none' target='_blank'>tietosuojakäytännön</a> ja <a href='http://reviews.fi.samsung.com/content/7463-fi_fi/termsandconditions.htm' target='_blank'>ehdot</a> (mukaan lukien ehdot, jotka koskevat ulkopuolisen palveluntarjoajan hoitamaa tietojen säilyttämistä)"
		};
		$('div.ratings-write-content').find('div.y_btnBox01').addClass('checkWrap').prepend('<form><fieldset><div class="checkArea"><input type="checkbox" id="checkYes"><label for="checkYes">' + reviewTermsCheckText[SITE_CD] + '</label></div></fieldset></form>');
	}

    var body = $('.ss_samsung');
    var isWow = body.hasClass('pdp_wow') || body.hasClass('instore') || body.hasClass('business') ? true : false;
    var viewSection = $('.view-section');

	/**
	@class $.PDPStandard
	@constructor
	@param {Object} params External object settings passed into the object.
	**/
	ss.PDPStandard = function(params) {
		function init(){

			if(isWow) new ss.PDPStandard.Wow();
			else new ss.PDPStandard.Standard();
		}

		init();

	};


	/**
	 * @class $.PDPStandard.Standard
	 * @constructor
	 * @param {Object}
	 *            params External object settings passed into the object.
	 */
	ss.PDPStandard.Standard = function (params) {
        /**
        Stores the top level scope.

        @property self
        **/
       var self = this;

       /**
        Hero module.

        @property heroContainer
        **/
       var heroContainer = $('.hero-module');


       var playBtns = heroContainer.find('.play-btn.popupVideo');
       var closeBtns = viewSection.find('.close-video.popupVideo');
       var vmPlayer = viewSection.find('.vm-player');

       window.firstAction = false;

       /**
       Initializaiton function which runs at object instantiation time.
       Sets up the various modules, popovers and event bindings.

       @method init
       **/
      function init() {
		  var initColorModel = $("#ColorModelCode").val();

		  var param = new Array();

		  // 현재 페이지의 url
		  var url = decodeURIComponent(location.href);
		  url = decodeURIComponent(url);

		  var params;
		  params = url.substring( url.indexOf('?')+1, url.length );
		  //params = params.split("&");

		  /*if( typeof params[1] == 'undefined'){
		  }else{
			 $("#prdImgData").empty();
			 getPDPGallery(initColorModel);
		  }*/
		  //aeseul.kim #77 0820
		  if((params.indexOf('oTyp=') > -1) && (params.indexOf('&oId=') > -1)) {
			 $("#prdImgData").empty();
			 getPDPGallery(initColorModel);
			 $("#chageModelCode").val(initColorModel);
			 changeSpec();
		  }

          new ss.PDPStandard.PDPFeaturesController();
          new ss.PDPStandard.PDPAccessories();

          new ss.PDPStandard.PDPThreeSixty();
          if ( $('.media-module').find('.sampleimages').length > 0 ) {
              new ss.PDPStandard.PDPSampleImages();
          }

          bindEvents();

          new ss.PDPStandard.PDPCommon();
          new ss.PDPStandard.PDPStandardKv();

          new ss.PDPStandard.PDPeCommerceSTD();

		  if ($("#selectColor>.active").find("a").attr("data-color") === undefined) {
			$('#selectColor').find('[data-modelcode="' + $('#modelCode').val() + '"]').parent().addClass('active');
		  }
      }


      /**
       Bind events.

       @method bindEvents
       **/
      function bindEvents() {

		optionMapping();
  		optionInit();

      	var carousel = $( ".product-img-section>.ss-carousel");
      	var heros = carousel.find( ".viewer>ul>li [class*='hero'] > p");
      	var herosImg = heros.find( "span.responsive-image img");
      	var herosImgArea = heros.find( "> .click-area");
          eventBridge.on(eventDictionary.global.RESIZE, function() {
        	  heroSize();
          });

          eventBridge.on( "loadedKvImgs", function() {
              herosImg = heros.find("span.responsive-image img");
          });

          // 모바일버전에서 이미지 클릭시 새창 열리는것 중단.
/*          herosImgArea.on( ss.clickEvent, function(e){
          	if( ss.metrics.deviceLayoutId === 1 && ss.metrics.isMobile() ){
          		var dataLink = $( this ).siblings( ".responsive-image" ).attr( "data-img-link" );
          		if(dataLink) window.open( dataLink );
          	}
          });*/

          playBtns.on('click', function (e){
              if(!viewSection.hasClass('on')) viewSection.addClass('on');
              if(!vmPlayer.hasClass('on')) vmPlayer.addClass('on');
              viewSection[0].popAlign();
              //setTimeout(function (){viewSection[0].popAlign();}, 1);
              $('.lightbox-skrim').remove();
              $('body').append('<div class="lightbox-skrim"></div>');
              $('.lightbox-skrim').on(ss.clickEvent, function (){
                  closeBtnClickHandler();
              });

              if($(this).attr('data-view')){
                  setTimeout(function (){vmPlayer.find('.video-player .close-video').focus();}, 1);
              }else{
                  setTimeout(function (){vmPlayer.find('.youtube-player .close-video').focus();}, 1);
              }

          });

          function heroSize(){
              var metrics = ss.metrics, width;
              if( metrics.isIE8() ) return;
              if( metrics.deviceLayoutId == 1 ) {
                  width = carousel.outerWidth();
                  carousel.outerHeight( width );
                  heros.outerHeight( width );
                  herosImg.outerHeight( width );
              }else if( metrics.deviceLayoutId == 2 ){
                  width = carousel.outerWidth()/3*2;
                  carousel.outerHeight( width );
                  heros.outerHeight( width );
                  herosImg.outerHeight( width );
              }else{
                  carousel.css( 'height', '' );
                  heros.css( 'height', '' );
                  herosImg.css( 'height', '' );
              }
          }

          closeBtns.on(ss.clickEvent, closeBtnClickHandler);

          function closeBtnClickHandler(e){
              if(vmPlayer.hasClass('on')) vmPlayer.removeClass('on');
              else return;

              if(viewSection.hasClass('on')) viewSection.removeClass('on');

              $('.lightbox-skrim').remove();

              var carousel = heroContainer.find('.ss-carousel'),
                  index = carousel.find('.dots li.current a').attr('data-index');
              setTimeout(function (){carousel.find('li[data-index="'+ index +'"] a').first().focus();}, 461);

          }

      }

      init();
	};


	 /**
      Check Spec events.

      @method bindEvents
     **/
	 function changeSpec() {
		//$(".tech-spec-module .glance-section").empty();
		//$(".tech-spec-module .spec-section .spec-list").remove();
		//$(".tech-spec-module .spec-section .btn-more").remove();
		//$(".tech-spec-module .spec-section .more-spec-section").remove();

		var siteCode = $("#siteCode").val();
		var iaCode = $("#iaCode").val();
		var modelCode = $("#chageModelCode").val();

		$.ajax({
			//url: "/uk/api/product/specification/23050100/SM-N910FZWEBTU?mType=json",
			url: "/"+siteCode+"/api/product/specification/"+iaCode+"/"+modelCode+"?mType=json",
			success : function(data){
				if (data.xmlData.totalCount < 1) {
					$(".tech-spec-module").css("display","none");
					$(".jump-module>.jump-link-list").find("a[tag-code='specs']").parent().css("display","none");
				} else {
					$(".tech-spec-module").css("display","");
					$(".jump-module>.jump-link-list").find("a[tag-code='specs']").parent().css("display","");

					var a = data.xmlData.specList;
					var gg = data.xmlData.viewSpecList;
					var kkk =  data.xmlData.specImage;

					if (gg != null && gg != "" && gg != 'undefined') {
						$.each(gg,function(key){
							var bb = gg.viewSpecList;
							var glanceHtml="<ul aria-label='Tech Specs at a Glance'>";
							$.each(bb,function(key){
								glanceHtml += "<li aria-label='"+bb[key].attrValue+"'><div class='glance-con'><div class='"+bb[key].iconClass+" icon'></div>";
								glanceHtml += "<div class='title'>"+bb[key].attrName+"</div><div class='desc'>"+bb[key].attrValue+"</div></div></li>";
							});
							$(".tech-spec-module .glance-section").html(glanceHtml+"</ul>");
						});
					}

					if (kkk != null && kkk != "" && kkk != 'undefined') {
						$.each(kkk,function(key){
							var fileUrl = kkk.filePath;
							var fileDesc = kkk.fileDesc;

							var dimesiontHtml = "<p><img alt='Dimension of SM-A500FZKUBTU' src='"+fileUrl+"'></p>";
							$(".tech-spec-module .dimension-section").html(dimesiontHtml);
						});
					}

					var specSectionHtml="";
					var specSectionMoreHtml="";
					if (a != null && a != "" && a != 'undefined') {
						$.each(a,function(key){
							if(key<2){
								if(a[key].prdSpecAttrList.length != "0" || a[key].gsValList.length == "0"){
									specSectionHtml="<h4 class='tit'>"+a[key].schmAttNm+"</h4><ul>";
									var b = a[key].prdSpecAttrList;

									$.each(b,function(key){
										specSectionHtml += "<li><div class='spec'><h5 class='sub-tit'>"+b[key].name+"</h5>";
										var c = b[key].values;
										$.each(c,function(key){
											specSectionHtml += "<div class='desc'><p>"+c[key]+"</p></div></li>";
										});
									});
								}else{
									specSectionHtml="<h4 class='tit'>"+a[key].schmAttNm+"</h4><ul>";
									specSectionHtml += "<li><div class='spec'><h5 class='sub-tit'>"+a[key].schmAttNm+"</h5>";
									var b = a[key].gsValList;
									$.each(b,function(key){
										specSectionHtml += "<div class='desc'><p>"+b[key]+"</p></div></li>";
										var c = b[key];
										$.each(c,function(key){
										});
									});
								}
								if (key == 0){
									$(".tech-spec-module .spec-section .spec-list:eq(0)").html(specSectionHtml+"</ul></div>");
								}
								if (key == 1){
									$(".tech-spec-module .spec-section .spec-list:eq(1)").html(specSectionHtml+"</ul></div>");
								}
							}
							if(key>1){
								if(a[key].prdSpecAttrList.length != "0" || a[key].gsValList.length == "0"){
									specSectionMoreHtml+="<div class='spec-list'><h4 class='tit'>"+a[key].schmAttNm+"</h4><ul>";
									var b = a[key].prdSpecAttrList;

									$.each(b,function(key){
										specSectionMoreHtml += "<li><div class='spec'><h5 class='sub-tit'>"+b[key].name+"</h5>";
										var c = b[key].values;
										$.each(c,function(key){
											specSectionMoreHtml += "<div class='desc'><p>"+c[key]+"</p></div></li>";
										});
									});
									specSectionMoreHtml += "</ul></div>";
								}else{
									specSectionMoreHtml+="<div class='spec-list'><h4 class='tit'>"+a[key].schmAttNm+"</h4>";
									specSectionMoreHtml += "<li><div class='spec'><h5 class='sub-tit'>"+a[key].schmAttNm+"</h5>";
									var b = a[key].gsValList;
									$.each(b,function(key){
										specSectionMoreHtml += "<div class='desc'><p>"+b[key]+"</p></div></li>";
										var c = b[key];
										$.each(c,function(key){
										});
									});
									specSectionMoreHtml += "<ul></div>";
								}

							}

						});
					}
					$(".tech-spec-module .spec-section .more-spec-section").html(specSectionMoreHtml);
				}
			}, error : function(data){
			var resultMessage = "Error!";
			console.log(resultMessage);
			}
		});
	};

	function productFilterOption() {

		var siteCode = $("#siteCode").val();
		var iaCode = $("#iaCode").val();
		var modelCode = $("#modelCode").val();

		$.ajax({
			url: "/"+siteCode+"/api/filter/option/"+modelCode+"?mType=json&prdOptTypeId=2",
			success : function(data){
				var a = data.xmlData;
				var html;
				$.each(a, function(key){

					if(key == 0){
						html ="<p class='tit'>"+a[key].prdOptTypeTitle+"</p>";
						html += "<fieldset><legend>"+a[key].prdOptTypeTitle+"</legend>";
						html += "<ul class='carrier_ul'>";
						html += "<li><input id='carrier_"+key+"' name='carrier' type='radio' value='"+a[key].prdOptId+"' onclick='productRepModel("+a[key].prdOptId+","+a[key].prdOptTypeId+");'>";
						//html += "<li><input id='carrier_"+key+"' name='carrier' type='radio' value='"+a[key].prdOptId+"'>";
						html += "<label for='carrier_"+key+"'>"+a[key].prdOptNm+"</label></li>";
					}else{
						//html += "<li><input id='carrier_"+key+"' name='carrier' type='radio' value='"+a[key].prdOptId+"'>";
						html += "<li><input id='carrier_"+key+"' name='carrier' type='radio' value='"+a[key].prdOptId+"' onclick='productRepModel("+a[key].prdOptId+","+a[key].prdOptTypeId+");'>";
						html += "<label for='carrier_"+key+"'>"+a[key].prdOptNm+"</label></li>";
					}

				});
				//var Contracthtml = "<fieldset><ul class='aaa'><li><input id='contract_0' name='contract' type='radio' value='5'><label for='contract_0'>Contracted Phone</label></li>";
				//Contracthtml += "<li><input id='contract_1' name='contract' type='radio' value='6'><label for='contract_1'>Uncontracted Phone</label></li>";
				//Contracthtml += "</fieldset>";
				$(".imsi").append(html+"</ul></fieldset>");


			}, error : function(data){
			var resultMessage = "Error!";
			console.log(resultMessage);
			}
		});
	}



	function optionMapping(){

		var rIndex = 0;
		var siteCode = $('#siteCode').val();
		var modelCode = $('#modelCode').val();
		var initModelCode = $('#chageModelCode').val();
		var paramModelCode = $('#ParamModelCode').val();
		if (paramModelCode !== undefined && paramModelCode != "" && paramModelCode != null) {
			$('#chageModelCode').val(paramModelCode);
			initModelCode = paramModelCode;
		}
		var test = $(':input:radio[name=carrier]:checked').val();

		var url = '/' + siteCode + '/api/filter/modelList/' + initModelCode + '?mType=json';

		mappingList.option = new Array( $(".layout-2>div[class*=option]").length );

		$(".layout-2>div[class*=option]").each(function(){
			var cIndex = 1;
			if( $(this).hasClass("swatches") ){
				mappingList.option[rIndex] = new Array( $(this).find("a").length + 1 );
				mappingList.option[rIndex][0] = "color";
				$(this).find("a").each(function(){
					mappingList.option[rIndex][cIndex] = $(this).attr("data-color");
					cIndex++;
				});

			}else{
				mappingList.option[rIndex] = new Array( $(this).find("li>label").length + 1 );
				mappingList.option[rIndex][0] = $(this).find("li>input").first().attr("id").split("_")[0];
				$(this).find("li").each(function(){
					mappingList.option[rIndex][cIndex] = $(this).find("input[type='radio']").data('optidval');
					//mappingList.option[rIndex][cIndex] = $(this).text();
					//console.log("값 : "+mappingList.option[rIndex][cIndex]);
					cIndex++;
				});
			}
			rIndex++;
		});

		$.ajax({
			type: 'POST',
			url: url,
			dataType: 'json',
			async:false,
			success: function(data) {

					mappingList.product = new Array( data.xmlData.length );
					mappingList.discontinued  = new Array( data.xmlData.length ); // #299

					for(var i=0; i<data.xmlData.length; i++){
						mappingList.product[i] = new Array( data.xmlData[i].option.length + 1 );
						mappingList.product[i][0] = data.xmlData[i].mdlCd;
						mappingList.discontinued[i] = new Array( data.xmlData[i].option.length + 1 ); // #299
						if(SITE_CD === 'uk'){
							mappingList.discontinued[i][0] = 'N';
						}else{
							mappingList.discontinued[i][0] = data.xmlData[i].discontinued; // #299
						}
						for(var j=0; j<data.xmlData[i].option.length; j++){
							var optionName = data.xmlData[i].option[j].prdTypeEngNm;
							for(var k=0; k<mappingList.option.length; k++){
								if(mappingList.option[k][0] == data.xmlData[i].option[j].prdTypeEngNm){
									mappingList.product[i][k+1] = data.xmlData[i].option[j].prdOptIdVal.replace('&#42;', '*');
									break;
								}
							}
						}
					}

					if (location.search && location.search.split("=")[0] == '?subsubtype') {
						for(var i=0; i<data.xmlData.length; i++){
							for(var j=0; j<data.xmlData[i].option.length; j++){
								if (data.xmlData[i].option[j].prdOptTypeCd == 'OPT-001') {
									$('#selectColor').find('[data-color="' + data.xmlData[i].option[j].prdOptIdVal + '"]').attr('data-modelcode', data.xmlData[i].option[j].mdlCd);
								}
							}
						}
					}
					
					// #299
					for(var i=0; i<data.xmlData.length; i++){
						if(mappingList.product[i][0] == $('#chageModelCode').val()) {
							$('#discontinued').val(mappingList.discontinued[i][0]);
							break;
						}
					}
				},
				error: function(data) {
					console.log("API error");
				}
			});
	}

	function optionInit(){

		if(mappingList.option[0][0] == 'color'){
			for(var i=1; i<mappingList.option[0].length; i++){
				matchFlag = false;
				for(var j=0; j<mappingList.product.length; j++){
					if(mappingList.option[0][i] == mappingList.product[j][1]){
						matchFlag = true;
						break;
					}
				}
				if(matchFlag){
					$("#selectColor").find("a[data-color='"+mappingList.option[0][i]+"']").parent().css('opacity', 1);
					$("#selectColor").find("a[data-color='"+mappingList.option[0][i]+"']").parent().css('display', 'block');
					$("#selectColor").find("a[data-color='"+mappingList.option[0][i]+"']").css('cursor', 'pointer');
					$("#selectColor").find("a[data-color='"+mappingList.option[0][i]+"']").on('click', function(e) {
						$("#selectColor").find('.swatch').removeClass('active');
						$(this).parent().addClass('active');
						$('#currentColor').val($(this).attr('data-color'));
						getPDPGallery( $(this).attr('data-modelcode') );
						setPrdOptions(1, $(this).attr('data-color') );
						$('#selectColor>.active').find("a").attr("data-color");
						sendClickCode('pdp_gallery','gallery:color');
					});
				}else{
					//$("#selectColor").find("a[data-color='"+mappingList.option[0][i]+"']").parent().css('opacity', 0.2);
					$("#selectColor").find("a[data-color='"+mappingList.option[0][i]+"']").parent().css('display', 'none');
					$("#selectColor").find("a[data-color='"+mappingList.option[0][i]+"']").css('cursor', 'default');
					$("#selectColor").find("a[data-color='"+mappingList.option[0][i]+"']").off('click');
				}
			}
		}else{
			for(var i=1; i<mappingList.option[0].length; i++){
				matchFlag = false;
				for(var j=0; j<mappingList.product.length; j++){
					console.log("첫번째1 : "+mappingList.option[0][i]);
					console.log("두번째 : "+mappingList.product[j][1]);
					if(mappingList.option[0][i] == mappingList.product[j][1]){
						matchFlag = true;
						break;
					}
				}
				if(matchFlag){
					$("#"+mappingList.option[0][0]+"_"+i).attr('disabled', false);
					$("#"+mappingList.option[0][0]+"_"+i).parent().css('opacity', 1);
					$("#"+mappingList.option[0][0]+"_"+i).parent().on('click', function(e) {
						setPrdOptions(1, $(".layout-2>.option-1").find("input[type='radio']:checked").data('optidval') );
					});
				}else{
					$("#"+mappingList.option[0][0]+"_"+i).attr('disabled', true);
					//$("#"+mappingList.option[0][0]+"_"+i).parent().css('opacity', 0.2);
					$("#"+mappingList.option[0][0]+"_"+i).parent().css('display', 'none');
					$("#"+mappingList.option[0][0]+"_"+i).parent().off('click');
				}
			}
		}

		for(var optionTypeId=1; optionTypeId<mappingList.option.length ; optionTypeId++){
			$(".layout-2>.option-" + ((parseInt(optionTypeId, 10) + 1))).css("opacity", 1);
			if( $(".layout-2>.option-" + ((parseInt(optionTypeId, 10) + 1))).hasClass("swatches") ){
				$('#selectColor').find(".swatch").each(function(){
					$(this).css('opacity', 1);
					$(this).find("a").css('cursor', 'pointer');
					$(this).find("a").off('click');

					var thisSwatch = $(this);
					var cIndex = 1;
					var optionValue = "";
					var actionFlag = true;
					var matchFlag = false;
					var arrProductFlag = new Array( mappingList.product.length );
					for(var i=0; i<arrProductFlag.length; i++){
						arrProductFlag[i] = true;
					}
					$(".layout-2>div[class*=option]").each(function(){
						if(actionFlag){
							if( $(this).hasClass("swatches")){
								optionValue = thisSwatch.find("a").attr("data-color");
								for(var i=0; i<arrProductFlag.length; i++){
									if( mappingList.product[i][cIndex] != optionValue && arrProductFlag[i] ){
										arrProductFlag[i] = false;
									}
								}
								actionFlag = false;
							}else{
								optionValue = $(this).find("input[type='radio']:checked").data('optidval');
								for(var i=0; i<arrProductFlag.length; i++){
									if( mappingList.product[i][cIndex] != optionValue && arrProductFlag[i] ){
										arrProductFlag[i] = false;
									}
								}
							}
							cIndex++;
						}
					});
					actionFlag = true;
					matchFlag = false;
					for(var i=0; i<arrProductFlag.length; i++){
						if(arrProductFlag[i]){
							if( (mappingList.product[i][(parseInt(optionTypeId, 10) + 1)] == thisSwatch.find("a").attr("data-color") ) && !matchFlag ){
								matchFlag = true;
							}
						}
					}
					if(matchFlag){
						$(this).css('opacity', 1);
						$(this).css('display', 'block');
						$(this).find("a").css('cursor', 'pointer');
						var nextOptionTypeId = parseInt(optionTypeId, 10) + 1;
						$(this).find("a").on('click', function(e) {
							$("#selectColor").find('.swatch').removeClass('active');
							$(this).parent().addClass('active');

							var model = $('#selectColor').find('[data-color="' + optionValue + '"]').attr('data-modelcode');

							$('#chageModelCode').val(model);
							$('#currentColor').val(optionValue);
							console.log( model );
							getPDPGallery( model );
							setPrdOptions(nextOptionTypeId, $(this).attr("data-color") );
						});
					}else{
						//$(this).css('opacity', 0.2);
						$(this).css('display', 'none');
						$(this).find("a").css('cursor', 'default');
					}
				});
			} else {
				$(".layout-2>.option-" + ((parseInt(optionTypeId, 10) + 1))).find("li").each(function(){
					$(this).attr('disabled', false);
					$(this).css('opacity', 1);
					var cIndex = 1;
					var optionValue = "";
					var actionFlag = true;
					var matchFlag = false;
					var arrProductFlag = new Array( mappingList.product.length );
					for(var i=0; i<arrProductFlag.length; i++){
						arrProductFlag[i] = true;
					}
					$(".layout-2>div[class*=option]").each(function(){
						if(cIndex <= optionTypeId){
							if( $(this).hasClass("swatches") ){
								optionValue = $("#selectColor>.active").find("a").attr("data-color");
								for(var i=0; i<arrProductFlag.length; i++){
									if( mappingList.product[i][cIndex] != optionValue && arrProductFlag[i] ){
										arrProductFlag[i] = false;
									}
								}
							}else{
								optionValue = $(this).find("input[type='radio']:checked").data('optidval');
								for(var i=0; i<arrProductFlag.length; i++){
									if( mappingList.product[i][cIndex] != optionValue && arrProductFlag[i] ){
										arrProductFlag[i] = false;
									}
								}
							}
							cIndex++;
						}
					});
					matchFlag = false;
					for(var i=0; i<arrProductFlag.length; i++){
						if(arrProductFlag[i]){
							if( ( mappingList.product[i][(parseInt(optionTypeId, 10) + 1)] == $(this).find("input[type='radio']").data('optidval') ) && !matchFlag){
								matchFlag = true;
							}
						}
					}
					if(matchFlag){
						$(this).attr('disabled', false);
						$(this).css('opacity', 1);
						var nextOptionTypeId = parseInt(optionTypeId, 10) + 1;
						$(this).on('click', function(e) {
							setPrdOptions(nextOptionTypeId, $(this).find("input[type='radio']").data('optidval') );
						});
					}else{
						$(this).attr('disabled', true);
						$(this).css('opacity', 0.2);
					}
				});
			}
		}
	}

	function getPDPGallery(modelCode) {
		var siteCode = $('#siteCode').val();
		var colorCode = $('#currentColor').val();
		var url = '/' + siteCode + '/api/product/gallery/' + modelCode + '?mType=json';
		$.ajax({
			type: 'POST',
			url: url,
			dataType: 'json',
			success: function(data) {
				var htmlStr = "";
				var prdImg = data.xmlData.productImage.productImage;
				if(isWow) {

					// colorchip 선택시 displayname 변경.
					$(".product-title").text(prdImg[0].dispNm);

					$.each(prdImg, function(i) {
		        		if (this.type == 'R' || this.type == 'G') {
		        			htmlStr += '<li data-heroImageType="G" image-color-type="' + this.color + '">';
	        				htmlStr += '<div class="hero responsive-image"';
	    					htmlStr += 'data-media-tablet-portrait="' + this.url + '?$DT-Gallery$"';
							htmlStr += 'data-media-desktop="' + this.url + '?$DT-Gallery$"';
							htmlStr += 'gallery-image-url="' + this.url + '"';
							htmlStr += 'gallery-thumb-url="' + this.url + '?$XS-Thumbnail$"';
							htmlStr += 'gallery-color-type="' + this.color + '"';
							htmlStr += 'gallery-size-width="' + this.width + '"';
							htmlStr += 'gallery-size-height="' + this.height + '"';
							htmlStr += 'role="img" aria-label="${escSpecialTextdispNm }">';
							htmlStr += '</div>';
							htmlStr += '</li>';
		        		} else if ((this.type == 'B' || this.type == 'Y') && this.useTIYN == 'Y') {
		        			htmlStr += '<li data-heroImageType="V">';
							htmlStr += '<div';
							htmlStr += 'gallery-videoType="' + this.type + '"';
							htmlStr += 'gallery-code="' + this.src + '"';
							htmlStr += 'gallery-image-url="' + this.desktopTI + '"';
							htmlStr += 'gallery-thumb-url="' + this.desktopTI + '"';
							htmlStr += 'gallery-size-width="' + this.width + '"';
							htmlStr += 'gallery-size-height="' + this.height + '">';
							htmlStr += '</div>';
							htmlStr += '</li>';
		        		} else if (this.type == 'B' || this.type == 'Y') {
		        			htmlStr += '<li data-heroImageType="V">';
							htmlStr += '<div';
							htmlStr += 'gallery-videoType="' + this.type + '"';
							htmlStr += 'gallery-code="' + this.src + '"';
							htmlStr += 'gallery-image-url=""';
							htmlStr += 'gallery-thumb-url=""';
							htmlStr += 'gallery-size-width=""';
							htmlStr += 'gallery-size-height="">';
							htmlStr += '</div>';
							htmlStr += '</li>';
		        		}
		        	});
				} else {

					// colorchip 선택시 displayname 변경.
					$(".product-title").text(prdImg[0].dispNm);
					$(".product-code").text(prdImg[0].mdlNm);
					
					// chw.park KV 20150519 비디오 수정
					$.each(prdImg, function(i) {
						if (this.type == 'KVHTML') {
		        			htmlStr += '<li data-heroImageType="KV" data-kvType="H">';
	        				htmlStr += '<div class="hero' + i + '">';
	    					htmlStr += '<p>' + keyVisualHtml + '</p>';
							htmlStr += '</div>';
							htmlStr += '</li>';
		        		} else if (this.type == 'KVImg') {
		        			htmlStr += '<li data-heroImageType="KV" data-kvType="I">';
	        				htmlStr += '<div class="hero' + i + '">';
	    					htmlStr += '<p>';
							htmlStr += '<span class="responsive-image lazy"';
							htmlStr += ' data-media-mobile="' + this.kvImageTP + '"';
							htmlStr += ' data-media-tablet-portrait="' + this.kvImagePC + '"';
							htmlStr += ' data-media-tablet-landscape="' + this.kvImageTP + '"';
							htmlStr += ' data-media-desktop="' + this.kvImagePC + '"';
							htmlStr += ' data-img-link="' + this.kvImagePC + '"';
							htmlStr += ' gallery-image-url=""';
							htmlStr += ' gallery-thumb-url="' + this.kvImagePC + '"';
							htmlStr += ' gallery-color-type="" gallery-size-width=""';
							htmlStr += ' gallery-size-height="" role="img"';
							htmlStr += ' data-alt="'+this.dispNm+'" ></span>';
							htmlStr+=  '<span class="click-area"></span>';
							htmlStr += '</p>';
							htmlStr += '</div>';
							htmlStr += '</li>';
		        		} else if (this.type == 'R' || this.type == 'G') {
		        			htmlStr += '<li data-heroImageType="G"';
							htmlStr += 'image-color-type="' + this.color + '">';
	        				htmlStr += '<div class="hero' + i + '">';
							htmlStr += '<p>';
							htmlStr += '<span class="responsive-image lazy"';
							htmlStr += ' data-media-mobile="' + this.url + '?$TM-Gallery$"';
							htmlStr += ' data-media-tablet-portrait="' + this.url + '?$DT-Gallery$"';
							htmlStr += ' data-media-tablet-landscape="' + this.url + '?$TM-Gallery$"';
							htmlStr += ' data-media-desktop="' + this.url + '?$DT-Gallery$"';
							htmlStr += ' data-img-link="' + this.url + '?$Download-Source$"';
							htmlStr += ' gallery-image-url="' + this.url + '"';
							htmlStr += ' gallery-thumb-url="' + this.url + '?$XS-Thumbnail$"';
							htmlStr += ' gallery-color-type="' + this.color + '"';
							htmlStr += ' gallery-size-width="' + this.width + '"';
							htmlStr += ' gallery-size-height="' + this.height + '" role="img"';
							htmlStr += ' data-alt="'+this.dispNm+'" ></span>';
							htmlStr+=  '<span class="click-area"></span>';
							htmlStr += '</p>';
							htmlStr += '</div>';
							htmlStr += '</li>';
		        		} else if ((this.type == 'B' || this.type == 'Y') && this.useTIYN == 'Y') {
							htmlStr += '<li data-heroImageType="V" image-color-type="' + this.color + '">';
							htmlStr += '<div class="hero' + i + '">';
							htmlStr += '<p>';
							htmlStr += '<span class="responsive-image lazy"';
							htmlStr += ' data-media-mobile="' + this.desktopTI + '?$TM-Gallery$"';
							htmlStr += ' data-media-tablet-portrait="' + this.desktopTI + '?$DT-Gallery$"';
							htmlStr += ' data-media-tablet-landscape="' + this.desktopTI + '?$TM-Gallery$"';
							htmlStr += ' data-media-desktop="' + this.desktopTI + '?$DT-Gallery$"';
							htmlStr += ' data-img-link="' + this.desktopTI + '?$Download-Source$"';
							htmlStr += ' gallery-image-url="' + this.desktopTI + '"';
							htmlStr += ' gallery-videoType="' + this.type + '"';
							htmlStr += ' gallery-code="' + this.src + '"';
							htmlStr += ' gallery-image-url="' + this.desktopTI + '"';
							htmlStr += ' gallery-thumb-url="' + this.desktopTI + '?$XS-Thumbnail$"';
							htmlStr += ' gallery-size-width="' + this.width + '"';
							htmlStr += ' gallery-size-height="' + this.height + '" role="img"';
							htmlStr += ' data-alt="'+this.dispNm+'" ></span>';
							htmlStr += '</p>';
							if (this.type == 'B') {
								htmlStr += '<a href="javascript:void(0);"';
								htmlStr += 'class="play-btn noSwipe popupVideo" data-view="firstBC"';
								htmlStr += 'data-video-player="' + this.src + '"';
								htmlStr += 'aria-label="Play Samsung Video"><span>Play</span></a>';
							} else if (this.type == 'Y') {
								htmlStr += '<a href="javascript:void(0);"';
								htmlStr += 'class="play-btn noSwipe popupVideo" data-contents="firstYT"';
								htmlStr += 'data-youtube-player="' + this.src + '"';
								htmlStr += 'aria-label="Play Samsung Video"><span>Play</span></a>';
							}
							htmlStr += '</div>';
							htmlStr += '</li>';
		        		} else if (this.type == 'B' || this.type == 'Y') {
							htmlStr += '<li data-heroImageType="V" image-color-type="' + this.color + '">';
							htmlStr += '<div class="hero' + i + '">';
							htmlStr += '<p>';
							htmlStr += '<span class="responsive-image lazy"';
							htmlStr += ' data-media-mobile="http://images.samsung.com/is/image/samsung/gallery_thumbnail?$TM-Gallery$"';
							htmlStr += ' data-media-tablet-portrait="http://images.samsung.com/is/image/samsung/gallery_thumbnail?$DT-Gallery$"';
							htmlStr += ' data-media-tablet-landscape="http://images.samsung.com/is/image/samsung/gallery_thumbnail?$TM-Gallery$"';
							htmlStr += ' data-media-desktop="http://images.samsung.com/is/image/samsung/gallery_thumbnail?$DT-Gallery$"';
							htmlStr += ' data-img-link="http://images.samsung.com/is/image/samsung/gallery_thumbnail"';
							htmlStr += ' gallery-image-url="" gallery-videoType="' + this.type + '"';
							htmlStr += ' gallery-code="' + this.src + '" gallery-image-url=""';
							htmlStr += ' gallery-thumb-url="" gallery-size-width=""';
							htmlStr += ' gallery-size-height="" role="img"';
							htmlStr += ' data-alt="'+this.dispNm+'" ></span>';
							htmlStr += '</p>';
							if (this.type == 'B') {
								htmlStr += '<a href="javascript:void(0);"';
								htmlStr += 'class="play-btn noSwipe popupVideo" data-view="firstBC"';
								htmlStr += 'data-video-player="' + this.src + '"';
								htmlStr += 'aria-label="Play Samsung Video"><span>Play</span></a>';
							} else if (this.type == 'Y') {
								htmlStr += '<a href="javascript:void(0);"';
								htmlStr += 'class="play-btn noSwipe popupVideo" data-contents="firstYT"';
								htmlStr += 'data-youtube-player="' + this.src + '"';
								htmlStr += 'aria-label="Play Samsung Video"><span>Play</span></a>';
							}
							htmlStr += '</div>';
							htmlStr += '</li>';
		        		}
						//colorCode = prdImg[0].color;
		        	});
				}

				if((colorCode == "") || (colorCode == "undefined") || (colorCode == null)) {
					colorCode = $("#ParamModelColor").val();
				}
				$('#prdImgData').html(htmlStr);
				$('#currentColor').val(colorCode);

				if (!isWow) {
					changeGallery(colorCode);
				}
			},
			error: function(data) {
				console.log("API error");
			}
		});
	}

	function initChangeSEC() {

		var mdlCd = $("#chageModelCode").val();
		var a = $(".ss-wishlist-button").attr("wish-product-id",mdlCd);

		$('#promotionDesc').html('');
		$('#promotionDescRed').html('');

		$('.ecom-module .stock').text("");
		$('.ecom-module #price').text("");
		$('.ecom-module #promotionPrice').text("");

		$('.price-01.sec-p-item').hide();
		$('.price-01.sec-p-item .calculator').hide();

		$('.price-02.sec-p-item').hide();

		$('.price-03.sec-p-item ').hide();

		$('.price-04.sec-p-item').hide();

		$('.price-05.sec-p-item ').hide();

		$('.card-discount').hide();
		$('.card-discount ul').empty();

		$('.sec-point').hide();
		$('.sec-point .con').empty();

		$('.freebie').hide();
		$('.freebie .free-item').empty();

		$('.stock-condition').hide();

		$('.order-quantity.sec-p-item').hide();
		$(".order-quantity.sec-p-item .desc").hide();

		$('.date.sec-p-item').hide();

		$('.delivery.sec-p-item').hide();

		$('.ecom-text .pickup').hide();

		$('.ecom-module .store-choice').hide();
    	$('.ecom-module .store-stock').hide();
    	$('.ecom-module .notice').hide();

		$('.store-choice.sec-p-item').hide();

		$('.store-stock.sec-p-item').hide();

		$('.notice.store-notice').hide();

		$('.badges').empty();

		$('.sec-store-banner').hide();

		$('#wishlist-tab' ).hide();

		//$('.jump-module').find('.price').empty();
		$('#jumpToStockStatus').text('');
		$('#jumpToPrice').text('');


		$('.module-wrap').find('.eco-tax').empty();

		$('#openphone').attr('style', 'display:none');
		$('#jumpToOpenphone').attr('style', 'display:none');
		$('#quickBuy').attr('style', 'display:none');
		$('#jumpToQuickBuy').attr('style', 'display:none');
		$('#addToCart').attr('style', 'display:none');
		$('#jumpToAddToCart').attr('style','display:none');
		$('#findStore').attr('style', 'display:none');
		$('#jumpToFindStore').attr('style', 'display:none');
		$('#seeAllAvailability').attr('style', 'display:none');
		$('#addToCartDisable').css('display', 'none');
		$('#jumpToAddToCartDisable').remove();
		$('.ecom-module .pdp_sebn_wrap').remove();

		$('.jumpToClone').remove();

		$(".price-option-module").hide();

		$.cookies.set('OpenPhone', null);

		init_sCharge = '<a href="javascript:void(0)" class="selected-option" aria-label="Select option" title="'+pdpMsg.pdpLayerOpen+'">'+pdpMsg.openPhoneOption2+'</a><ul class="options"></ul>';
		init_sJointype = '<a href="javascript:void(0)" class="selected-option" aria-label="Select option" title="'+pdpMsg.pdpLayerOpen+'">'+pdpMsg.openPhoneOption3+'</a><ul class="options"></ul>';
		init_sContract = '<a href="javascript:void(0)" class="selected-option" aria-label="Select option" title="'+pdpMsg.pdpLayerOpen+'">'+pdpMsg.openPhoneOption4+'</a><ul class="options"></ul>';
		init_sMonthly = '<a href="javascript:void(0)" class="selected-option" aria-label="Select option" title="'+pdpMsg.pdpLayerOpen+'">'+pdpMsg.openPhoneOption5+'</a><ul class="options"></ul>';
		init_sSubside =   '<a href="javascript:void(0)" class="selected-option" aria-label="Select option" title="'+pdpMsg.pdpLayerOpen+'">'+pdpMsg.openPhoneOption6+'</a><ul class="options"></ul>';

		$('.option-selector.optionCharge').html(init_sCharge);
		$('.option-selector.optionJointype').html(init_sJointype);
		$('.option-selector.optionContract').html(init_sContract);
		$('.option-selector.optionMonthly').html(init_sMonthly);
		$('.option-selector.optionSubside').html(init_sSubside);

		$("#optionUsim").attr("value", "Y" );
		$("#optionMakerx").attr("value", "" );
		$("#optionCharge").attr("value", "" );
		$("#optionJointype").attr("value", "" );
		$("#optionContract").attr("value", "" );
		$("#optionMonthly").attr("value", "" );
		$("#optionSubside").attr("value", "" );
		$("#optionCheck").attr("value", "N" );

		//aeseul.kim #94 0820
		var tempHtml = $('#seeAllAvailability').data('bs.popover')['options']['content'];
		$('#wtb').html(tempHtml);
		$('#wtb').find('.buy-online > ul').empty();
		$('#seeAllAvailability').data('bs.popover')['options']['content'] = $('#wtb').html();

	}

	function changeSEC(modelCode) {
		/*$('#chageModelCode').val(modelCode);
		initChangeSEC();

		new ss.PDPStandard.PDPeCommerceSTD();
	*/

		$('#chageModelCode').val(modelCode);
		initChangeSEC();
		//$('.jump-module > .jump-link-list > ul').empty();

		var modelCode = $('#modelCode').val();
		var modelName = $('#modelName').val();
		var displayName = $('#displayName').val();
		var discontinued = $('#discontinued').val();
		var priceDisplay = $('#priceDisplay').val();
		var oldProductYN = $('#oldProductYN').val();
		var prdPrice = $('#prdPrice').val();
		var prdPriceDiscl = $('#prdPriceDiscl').val();
		var rrpDisplay = $('#rrpDisplay').val() == "true" ? true : false;
		var quickByButton = $('#quickByButton').val() == "true" ? true : false;
		var usePreOrder = false;
		var whereToBuyBtnUse = false;
		var addToCart;
		var btnCount = 0;
		var whereToBuyBtn = $('#whereToBuyBtnYN').val();
		var whereToBuyBtnPDP = $('#whereToBuyBtnPDPYN').val();
		var onlineRetailerYN = $('#onlineRetailerYN').val();
		var storeLocatorYN = $('#storeLocatorUse').val() == "true" ? 'Y' : 'N';
		var lightPdpFl = $('#lightPdpFl').val();
		var typeCd = $('#typeCode').val();
		var lightPdpWhereToBuyFl = $('#lightPdpWhereToBuyFl').val() == "true" ? true : false;

		function init() {
			btnCount = 0;
			$('#seeAllAvailability').hide();
			$('#shopNowButton').css('display', '');
			//버튼 1개 이상인 경우로 변경
			$('#multiShopButton').attr('class', 'nor-btnList');
			//$('#multiShopButton').hide();
			if ($('a.clearfix.toggle').is(':visible')) {
				if ($('a.clearfix.toggle').hasClass('link-toggled')) {
					$('a.clearfix.toggle').next('.nor-btnList').show();
				}
				else {
					$('a.clearfix.toggle').next('.nor-btnList').hide();
				}
			}
			else {
				$('a.clearfix.toggle').next('.nor-btnList').show();
			}

			// Go To Check Out에 대한 옵니쳐 적용
			$('#addCartList').find('a').attr('onclick',"sendScView(\';"+ modelName + "\');");
			//$('#addCartList').find('a').attr('href', 'https://stg-kr.shop.samsung.com/uk/ng/cartAndCheckout/basket')

			$('#addToCart').off('show.bs.popover hidden.bs.popover shown.bs.popover');
			addToCart = new ss.Popover('#addToCart:not(.btngrey)', {skipBoot: true,interOp2Hide: function(obj) { /*obj.toggle();*/},interOp2Show: function(obj) {

					//Analytics_tagging
					sendScAddPrd(modelName,$("#chageModelCode").val());

					// 미니카트 숨김처리
					navigation.miniCartHide();

					// addToCart 레이어팝업이 열려 있으면 호출 안함.
					//if ($('.cart-popover').length <= 1) {
					if(!$('#addToCart').hasClass('btngrey')){
						estore.addCart({productCode: $("#chageModelCode").val(),quantity: '1'}, function(data) {
							if (data && data.resultCode == "0000") {

								$.Auth.getGlobalCartCount(function(data) {
									console.info("addCart", data);
								});

								$('#cartCount').text(pdpMsg.addedtocart);
								setTimeout("$('#cartCount').text(pdpMsg.addtocart);", 1000);

								$('.jump-module').find('#jumpToCartArea').removeClass('on');

								obj.showOnly();

								ss.commonWidgets.setDefaultFocusInWidget( ".popover .cart-popover" );

								if (SITE_CD == 'uk'
										&& TMAN != undefined && TMAN ) {
									TMAN.addParams('samsunguk', {currency: 'EUR',conversion_type: 'purchase_indirect_online',product_prices: '0.0'});
									TMAN.doTags(TMAN.position.CUSTOM_2, true);
								} else if (SITE_CD == 'de'
										&& TMAN != undefined && TMAN ) {
									TMAN.addParams('samsungde', {currency: 'EUR',conversion_type: 'purchase_indirect_online',product_prices: '0.0'});
									TMAN.doTags(TMAN.position.CUSTOM_2, true);
								} else if ( SITE_CD == 'pt'
										&& TMAN != undefined && TMAN ) {
									TMAN.addParams('samsungpt', {currency: 'EUR',conversion_type: 'purchase_indirect_online',product_prices: '0.0'});
									TMAN.doTags(TMAN.position.CUSTOM_2, true);
								}

							}
						});
					}

				},tapProtect: true,placement: 'auto top',content: $('#addCartList').html(),html: true,container: '.body_wrapper',animation: false});

			// where to buy data setting.
            if(SITE_CD != 'ar' || SITE_CD != 'py' || SITE_CD != 'uy') {
            	onlineRetailer();
            }
			
			getRealTimeProductSimpleInfo();
			bindEvents();
		}

		// where to buy관련.
        function onlineRetailer(){

			var buyOnlineUseSite = $("#buyOnlineUseSite").val();
			var buyInStoreUseSite = $("#buyInStoreUseSite").val();
			var paramModelCode = $("ParamModelCode").val();
        	var param = {};

        	param.siteCode	 = $("#siteCode").val();
        	//param.modelCode	 = $("#modelCode").val();
			if (paramModelCode !== undefined && paramModelCode != "" && paramModelCode != null) {
				param.modelCode	 = paramModelCode;
			}else{
				param.modelCode	 = $("#chageModelCode").val();
			}
			//param.modelCode	 = $("#chageModelCode").val();
	        param.chageModelCode = $("#chageModelCode").val();
        	param.modelName	 = $("#modelName").val();
        	param.displayName= $("#displayName").val();
        	param.iaCode	 = $("#iaCode").val();
        	param.entry 	 = "product";
        	param.groupName  = $("#group").val();
        	param.typeName	 = $("#type").val();
        	param.subTypeName	 = $("#subtype").val();

			if(buyOnlineUseSite.indexOf(',' + SITE_CD + ',') >= 0 && buyInStoreUseSite.indexOf(',' + SITE_CD + ',') >= 0){ // online retailer, storelocator
				onlineRetailerInfoNew(1, param);
			} else if (buyOnlineUseSite.indexOf(',' + SITE_CD + ',') >= 0) { // online retailer
				onlineRetailerInfoNew(2, param);
			} else if (buyInStoreUseSite.indexOf(',' + SITE_CD + ',') >= 0) { // storelocator
				onlineRetailerInfoNew(3, param);
			}
        }

		function bindEvents() {
			$('#quickBuy').off("click");
			$('#quickBuy').on("click", function() {
				estore.buyNow({productCode: $("#chageModelCode").val(),quantity: '1'}, function(data) {
					if (data && data.resultCode == "0000") {
						if (usePreOrder) {
							sendClickCode('wishlist', 'pre order now');
						} else {
							//sendClickCode('wishlist', 'quick buy');
							//sendScBasket(modelName,modelCode);
							sendScBasket($("#modelName").val(),$("#chageModelCode").val());
						}
						location.href = "http://" + STORE_DOMAIN + "/" + SITE_CD + "/ng/cartAndCheckout";
						return false;
					}
				});
			});
		}

		function jumpToBindEvents(){

			// jumpTo cart영역 닫기버튼 처리
			$('.jump-module').find('#jumpToCartArea').find('.close-button').off('click');
			$('.jump-module').find('#jumpToCartArea').find('.close-button').on('click', function(){
				$('.jump-module').find('#jumpToCartArea').removeClass('on');
			});

			// JumpTo addtoCart 처리
			$('.jump-module').find('#jumpToAddToCart:not(.btngrey)').off('click');
			$('.jump-module').find('#jumpToAddToCart:not(.btngrey)').on('click', function(){

				//Analytics_tagging
				sendClickCode('jumpto','jump to:add to cart');
				sendScAddPrd(modelName,$("#chageModelCode").val());

				if ($('.cart-popover').length > 1) {
					$('.cart-popover .close-button').trigger('click');
				}

				if(!$('#jumpToCartArea').hasClass('on')){
					estore.addCart({productCode: $("#chageModelCode").val(),quantity: '1'}, function(data) {
						if (data && data.resultCode == "0000") {

							$.Auth.getGlobalCartCount(function(data) {
								console.info("addCart", data);
							});

							$('.jump-module').find('#jumpToCartArea').addClass('on');
							$('.jump-module').find('#jumpToCartArea').css('display','');

							$('.jump-module').find('#jumpToAddToCart').text(pdpMsg.addedtocart);
							setTimeout("$('.jump-module').find('#jumpToAddToCart').text(pdpMsg.addtocart);", 1000);

							if (SITE_CD == 'uk'
								&& TMAN != undefined && TMAN ) {
								TMAN.addParams('samsunguk', {currency: 'EUR',conversion_type: 'purchase_indirect_online',product_prices: '0.0'});
								TMAN.doTags(TMAN.position.CUSTOM_2, true);
							} else if (SITE_CD == 'de'
									&& TMAN != undefined && TMAN ) {
								TMAN.addParams('samsungde', {currency: 'EUR',conversion_type: 'purchase_indirect_online',product_prices: '0.0'});
								TMAN.doTags(TMAN.position.CUSTOM_2, true);
							} else if ( SITE_CD == 'pt'
									&& TMAN != undefined && TMAN ) {
								TMAN.addParams('samsungpt', {currency: 'EUR',conversion_type: 'purchase_indirect_online',product_prices: '0.0'});
								TMAN.doTags(TMAN.position.CUSTOM_2, true);
							}
						}
					});

				}

			});

			$('.jump-module').find('#jumpToQuickBuy').off('click');
			$('.jump-module').find('#jumpToQuickBuy').on('click', function() {
				sendClickCode('jumpto','jump to:buy now');
				$('#quickBuy').trigger('click');
			});

			//aeseul.kim http://preview4.samsung.com/se/consumer/mobile-devices/tablets/galaxy-tab-a/SM-T550NZKANEE
			$('.jump-module').find('#jumpToSeeAllAvailability').off('click');
			$('.jump-module').find('#jumpToSeeAllAvailability').on('click', function() {
				$('#seeAllAvailability').trigger('click');
			});
		}

		// eCommerce 실시간 상품 정보 조회 처리
		function getRealTimeProductSimpleInfo() {

			// 스토어 사용국가이고 제품이 판매대상인지
			if (USE_ESTORE && discontinued != "Y") {

				// old product 일 경우
				if (oldProductYN == 'Y') {
					$('#promotionDescRed').empty();
					$('#promotionDescRed').html(pdpMsg.oldProductMsg);

					notEcommerceSite();

					hiddenBuyingOptionBtn();

					oneButton();

					new ss.PDPStandard.PDPJumpModule();

					jumpToBindEvents();

				}else{

					var optionValue = $("#currentColor").val();
					var model = $('#selectColor').find('[data-color="' + optionValue + '"]').attr('data-modelcode');

					//console.log("여기 들어옴, 모델은? :"+model);
					modelCode = model;

					//if(model != null && model != "" && model != "undefined") {
						//$("#chageModelCode").val(model);
					//}

					estore.getRealTimeProductSimpleInfo({productCode: $("#chageModelCode").val() }, function(data) {

						console.info('estore_data :: ', data);

						if(data.flagSoldOut == "Y" && SITE_CD == "nl") {
							$("#addToCartDisable > span[id='cartCount']").text("Tijdelijk niet op voorraad in de Shop");
							$("#jumpToAddToCartDisable").text("Tijdelijk niet op voorraad in de Shop");
						}

						if (data && data.resultCode == "0000") {

							// UK 사이트는 Where to buy 항상 노출
							if(SITE_CD === 'uk'){
								data.whereToBuyBtnYn = 'Y';
								if(data.price === '£0.00'){
									data.price = '';
								}
							}

							// flag 처리
							if(data.flags && data.flags != ""){

								var flag = data.flags;
								flag = flag.split(',');

								if (flag.length) {
									var appendData = '';
									for (var index = 0; index < flag.length; index++) {
										var flagVal =  $.trim(flag[index]);
										if(flagVal != null && flagVal != ""){

											if (index != 0) {
												appendData += ' <span class="spacer">|</span> ';
											}
											appendData += flagVal;
										}
									}
									$('#eCommerceFlag').html(appendData);
								}
							}

							// 1. 버튼 노출 여부
							// quick buy 와 add to basket 버튼
							$('#seeAllAvailability > span, #jumpToSeeAllAvailability').text(pdpMsg.otherRetailers);
							if (data.buyNowBtnYn == 'Y' && data.cartBtnYn == 'Y') {
								if (!quickByButton) {
									// 예약 상품인 경우 버튼 텍스트 변경
									if (data.flagPreOrder == 'Y') {
										usePreOrder = true;
										$('#quickBuy').children().text(pdpMsg.preordernow);
										$('#quickBuy').css('display', '');
										$('#jumpToQuickBuy').text(pdpMsg.preordernow);
										$('#jumpToQuickBuy').css('display', '');
									}else{
										$('#quickBuy').css('display', '');
										$('#jumpToQuickBuy').css('display', '');
									}
									//$('#addToCart').remove();
									$('#addToCart').hide();
									btnCount ++;

								} else {
									$('#addToCart').css('display', '');
									$('#jumpToAddToCart').css('display', '');
									$('#addToCart, #jumpToAddToCart').removeClass('btngrey');
									$('#quickBuy').hide();
									btnCount ++;
								}

							}else if(data.buyNowBtnYn == 'Y'){
								// 예약 상품인 경우 버튼 텍스트 변경
								if (data.flagPreOrder == 'Y') {
									usePreOrder = true;
									$('#quickBuy').children().text(pdpMsg.preordernow);
									$('#quickBuy').css('display', '');
									$('#jumpToQuickBuy').text(pdpMsg.preordernow);
									$('#jumpToQuickBuy').css('display', '');

								}else{
									$('#quickBuy').css('display', '');
									$('#jumpToQuickBuy').css('display', '');
								}
								//$('#addToCart').remove();
								$('#addToCart').hide();
								btnCount ++;

							}else if(data.cartBtnYn == 'Y'){
								$('#addToCart').css('display', '');
								$('#jumpToAddToCart').css('display', '');
								$('#addToCart, #jumpToAddToCart').removeClass('btngrey');
								$('#quickBuy').hide();
								btnCount ++;

							}else{
								if(SITE_CD == 'au' || SITE_CD == 'br'){
									$('#quickBuy').hide();
									$('#addToCart').hide();
								} else {
								// out of stock일 경우 버튼은 노출 시키되 동작 안되도록 수정.
								var jumpToAddToCartDisable = '<a href="javascript:void(0)" id="jumpToAddToCartDisable" class="btn btn-type-01" style="display:none">' + pdpMsg.addtocart + '</a>';
								$('.module-wrap').find('#jumpToAddToCart').append(jumpToAddToCartDisable);
								$('#addToCartDisable, #jumpToAddToCartDisable').css('display', '').css('cursor', 'default').css('background', '#666').addClass('btngrey'); // background 흑백 & 기본 커서로 수정.
								$('.module-wrap').find('#addToCart, #jumpToAddToCart').css('display', 'none');
								//$('#addToCart').unbind('click');	// 클릭 안되게 수정.
								$('.jump-module-shim').find('.btn-type-01').addClass('btngrey');
								btnCount ++;

								$('#quickBuy').hide();
								//$('#addToCart').remove();
								}
							}


							// 2. where to buy 버튼
							if(whereToBuyBtn == 'Y'
								&& whereToBuyBtnPDP == 'Y'
								&& data.whereToBuyBtnYn == 'Y'
									&& (onlineRetailerYN == 'Y' || storeLocatorYN == 'Y' )
									&& (lightPdpFl == 'N' || lightPdpWhereToBuyFl == true)
								){
								if( SITE_CD == 'br' && ($('#addToCart').css('display') != 'none'|| $('#quickBuy').css('display') != 'none')){
									$('.module-wrap').find('#seeAllAvailability').css('display', 'none');
									whereToBuyBtnUse = false;
								}else{
									$('.module-wrap').find('#seeAllAvailability').css('display', '');
									whereToBuyBtnUse = true;
									btnCount ++;
								}
								//$('#seeAllAvailability').css('display', '');
								//whereToBuyBtnUse = true;
								//btnCount ++;

								if(data.buyNowBtnYn != 'Y' && data.cartBtnYn != 'Y'){
									$('#jumpToSeeAllAvailability').css('display','');
								}

							}else{
								$('#seeAllAvailability').hide();
								//$('#seeAllAvailability').remove();
							}

							// 3.재고량에 따른 문구 표현
							if (data.stockLevelStatusDisplay && data.flagPreOrder != 'Y' ) {
								$('#stockLevelStatus').text(data.stockLevelStatusDisplay);
								$('#jumpToStockStatus').text(data.stockLevelStatusDisplay);
							}

							// 4. 할인가격 표시
							if (data.promotionPrice != undefined && data.promotionPrice != null && data.promotionPrice != "") {
								$('#promotionPrice').text(data.promotionPrice);

								if(SITE_CD == 'au')
									if(modelCode=='WW90H9600EW/SA' || modelCode=='GT-I9505ZKAXSA')
									ecommerceData.product[0].price=data.promotionPrice;

								$('#jumpToPrice').text(data.promotionPrice);
								if (data.price) {
									$('#price').text(data.price);
								}
							} else {
								// 가격 표시
								if ( data.price ) {
									$('#promotionPrice').text(data.price);

									if(SITE_CD == 'au')
										if(modelCode=='WW90H9600EW/SA' || modelCode=='GT-I9505ZKAXSA')
										ecommerceData.product[0].price=data.price;

									$('#jumpToPrice').text(data.price);
								}
							}

							// 5. 마일리지 표시
							if (data.productMileage != "0.0" && data.productMileage != "") {
								var mileage = '(<strong class="cb">' + data.productMileage + '</strong> Points';
								if (data.promotionMileage != "0.0" && data.promotionMileage != "") {
									mileage += ' + <strong class="cr">' + data.promotionMileage + '</strong> Points)';
								} else {
									mileage += ')';
								}
								$('#mileage').html(mileage);
							}

							// 6. freeGift 정보 표시
							if (data.promotionData.length > 0) {
								var freegift = data.promotionData[0];

								// freegift 이미지 처리
								if (freegift.url && freegift.url != "") {
									$('#freegiftData').find('img').attr('src', freegift.url + '?fmt=png-alpha');

									if(freegift.displayName){
										$('#freegiftData').find('img').attr('alt', freegift.displayName);
									}

									if (freegift.code && freegift.code != "") {
										$('#freegiftLinkImg').attr('href', '/' + SITE_CD + '/c/p/' + freegift.code);
									}else{
										$('#freegiftLinkImg').attr('href', 'javascript:void(0)');
									}

								}

								// title 처리
								if (freegift.title && freegift.title != "" ) {
									$('#freegiftLinkTitle').html(freegift.title + '&nbsp;<span class="icon-link-play"></span>');

								}

								// title 링크처리
								if(freegift.code  && freegift.code != ""){
									$('#freegiftLinkTitle').attr('href', '/' + SITE_CD + '/c/p/' + freegift.code);

								}else{
									$('#freegiftLinkTitle').attr('href', 'javascript:void(0)');

								}

								if (freegift.description) {
									$('#freegiftDataDesc').text(freegift.description);
								}

								if (freegift.outOfstockInfo) {
									$('#freegiftOutOfStock').show();
								}

								$('#freegift').show();
								$('.offers-bar-module.inner').show();
								$('#offerbelow').show();
							}

							// 7. eco tax 정보 및 E-Store 링크정보 (국가가 프랑스일 경우에만 노출)
							if(SITE_CD == 'fr'){

								// E-Store 링크정보
								if(data.buyNowBtnYn == 'Y' || data.cartBtnYn == 'Y'){
									$('.eco-tax').prepend('<p><a href="/fr/shop/contact/" target="_blank">Profiter de la livraison express gratuite</a></p>');
								}
								// copyrightFee
								if(data.copyrightFee != undefined && data.copyrightFee != null && data.copyrightFee != ""){
									var copyrightFeeURL = '/fr/shop/static/link_tax_p.html#copyright_tax';
									var ecoTaxData = '<p>';
									ecoTaxData += '(Dont ' + data.copyrightFee + ' <a href="' + copyrightFeeURL + '" target="_blank" onclick="window.open(this.href, '+ "'_blank','scrollbars=yes, width=470, height=600'" + '); return false;" >de copie privée</a>)';
									ecoTaxData += '</p>';
									$('.eco-tax').prepend(ecoTaxData);

								}

								// weeeFee
								if(data.weeeFee != undefined && data.weeeFee != null && data.weeeFee != ""){
									var weeeFeeURL = '/fr/shop/static/link_tax_p.html#eco_tax';
									var ecoTaxData = '<p>';
									ecoTaxData += '(Dont ' + data.weeeFee + ' <a href="' + weeeFeeURL + '" target="_blank" onclick="window.open(this.href, '+ "'_blank','scrollbars=yes, width=470, height=600'" + '); return false;" >éco-participation</a>)';
									ecoTaxData += '</p>';
									$('.eco-tax').prepend(ecoTaxData);

								}

							}

							// 8. 예약 안내 문구 노출
							if(data.flagPreOrder == 'Y'){
								if (data.reservedDeliveryStartDate) {
									$('#promotionDesc').html(pdpMsg.scheduledToShipOn + " " + data.reservedDeliveryStartDate);
									$('#promotionDesc').parent('div.point').css('display', '');
									if(SITE_CD == 'fr'){
										var pointHtml = $('#promotionDesc').parent('div.point').html();
										var ecoTaxHtml = $('.eco-tax').html();
										//$('#promotionDesc').parent('div.point').remove();
										$('#promotionDesc').parent('div.point').hide();
										$('.eco-tax').html(ecoTaxHtml + pointHtml);
									}
								}
							}

							// 9. 별점 정보 처리
							/*
							var starStyle = $('.overall-section>.owner-review>.score>.star-score p').attr('style');
							var reviewCount = $('#reviews>.module-heading>.heading-alt-text').text().replace(/^.*\(([0-9]+)\).*$/g,'$1');
							var reviewText = $('#reviews>.module-heading>.heading-text').text();

							if(starStyle != null && starStyle != ""){
							    var ratingHtml = '<div class="point"><p style="';
							    ratingHtml += starStyle;
							    ratingHtml += '"></p></div><p class="reviews"> <a href="#">'+ reviewCount + ' ' + reviewText + '</a> </p>';
								$('.usp-module>.star-score').html(ratingHtml);
								$('.usp-module>.star-score').find('a').off('click');
								$('.usp-module>.star-score').find('a').on('click', function(){
									var shopGnbHeight = $('.select-category').outerHeight();
									if(shopGnbHeight == null || shopGnbHeight == ""){
										shopGnbHeight = 0;
									}
									ss.htmlBody.animate({
										scrollTop : ( ss.metrics.elemTop( $('#reviews') ) - $('.jump-module').outerHeight() - shopGnbHeight )
									}, 1000);
								});
							}
							*/

							// 10. Promotion 문구 처리
							if (data.promotionDescription != null && data.promotionDescription != "") {
								var promotion = '<ul><li>';
								promotion += data.promotionDescription;
								promotion += '</li></ul>';
								$('.ecom-text>.promotion').html(promotion);
							}

							// 11. 로고 아이콘 노출 (네덜란드만 처리)
							if (SITE_CD == 'nl'){
								if( $('.ecom-module .pdp_sebn_wrap').length == 0 ){
									var sebnLabelHtml = '<p class="pdp_sebn_wrap"><a href="https://www.thuiswinkel.org/leden/samsung-shop/certificaat" class="pdp_sebn_logo" target="_blank" title="THUISWINKEL WAARBORG"><span class="blind">THUISWINKEL WAARBORG</span></a></p>';
									$('.ecom-module .ecom-text').after(sebnLabelHtml);
								}
							}

							// 포인트 및 예약안내 정보 없을경우 해당 영역 삭제
							if((data.productMileage == "0.0" || data.productMileage == "") && data.flagPreOrder != 'Y'){
								//$('.ecom-text .point').remove();
								$('.ecom-text .point').hide();
							}

							// sales status 가 end 일 때 특정 문구 출력 (fr 사이트만 해당)
							if(SITE_CD == 'fr' && data.salesStatus == 'SALES_END'){
								$('.module-wrap').find('#stockLevelStatus').text(data.saleEndDesc);
							}

						} else {
							notEcommerceSite();
						}

						hiddenBuyingOptionBtn();

						oneButton();

						new ss.PDPStandard.PDPJumpModule();

						jumpToBindEvents();

					});

				}
			} else {

				// old product 일 경우
				if (oldProductYN == 'Y') {
					$('#promotionDescRed').empty();
					$('#promotionDescRed').html(pdpMsg.oldProductMsg);

				}

				notEcommerceSite();

				hiddenBuyingOptionBtn();

				oneButton();

				new ss.PDPStandard.PDPJumpModule();

				jumpToBindEvents();
				
				refreshPriceInf();
			}

			/*if(SITE_CD == 'za') {
				$.ajax({
					type: 'GET',
					url: 'http://api.bazaarvoice.com/data/reviews.xml?ApiVersion=5.4&PassKey=' + reviewSubmitPopup.message.passKey + '&Filter=ProductId:' + $('#modelCode').val().replace("/", "_") + '&Sort=Rating:desc&Include=Products&Stats=Reviews',
					dataType: 'xml',
					success: function(data) {
						$(data).find("DataApiResponse").each(function(){
							var reviewCount = $(this).children("TotalResults").text();
							console.log("za review",reviewCount);
							if(reviewCount > 0){
								var productCol = $(this).children("Includes").find("Product");
								productCol.each(function(){
									var count = Number($(this).index())+1;
									if(count == 1){
										$(this).find("ReviewStatistics").each(function(){
											var averageOverallRating = $(this).children("AverageOverallRating").text();
											var ratingPercent = (Number(averageOverallRating)/5*100).toFixed(0);
											var reviewResultCount = Number(reviewCount).toLocaleString().split(".")[0];
											var reviewText = $('#reviews>.module-heading>.heading-text').text();
											var ratingHtml = '<div class="point"><p style="width:' + ratingPercent + '%;"></p></div>'
											ratingHtml += '<p class="reviews"> <a href="#">'+ reviewResultCount + ' ' + reviewText + '</a> </p>';
											$('.usp-module>.star-score').html(ratingHtml);
											$('.usp-module>.star-score').find('a').click(function(){
												var shopGnbHeight = $('.select-category').outerHeight();
												if(shopGnbHeight == null || shopGnbHeight == ""){
													shopGnbHeight = 0;
												}
												ss.htmlBody.animate({
													scrollTop : ( ss.metrics.elemTop( $('#reviews') ) - $('.jump-module').outerHeight() - shopGnbHeight )
												}, 1000);
											});
										});
									}
								});
							}
						});
					}
				});
			}*/

		}

		//mem 변경에 따른 price refresh
		function refreshPriceInf() {
			if (rrpDisplay && priceDisplay == 'Y' ) {
				
				var list = $('.memory_ul').find('input');

				list.each(function() {
					var elm = this;
					$elm=$(this)
					if ($elm.attr('checked') === "checked") {
						$('#promotionPrice').text($elm.attr('data-priceinf'));
						$('.price').find('#jumpToPrice').text($elm.attr('data-priceinf'));
					}
				});
			}
		}
		
		//eCommerce Cart 건수 조회
		// 현재 사용안함
		function getCartCount() {
			estore.getCartCount(function(data) {
				console.info("cartCount", data);
				if (data && data.resultCode == "0000") {

				}

			});
		}

		//버튼이 한개일 경우
		function oneButton() {
/*			if(btnCount <= 1){
				$('#shopNowButton').hide();
				$('#multiShopButton').attr('class', 'nor-btnList-etc');
				$('#multiShopButton').css('display', '');
			}*/

			//버튼이 한개 미만일 경우
			if(btnCount < 1){
				$('.jump-module .info-section').addClass('no-button');
			}

			// E-store 버튼이 두개일경우 높이값 동기화
			//var norBtn = $('.product-info-wrap > .product-info-section > .module-wrap > .ecom-module > .nor-btnList > .nor-button');
            //if(norBtn.length === 2) ss.CompareHeight.init(norBtn.eq(0), norBtn.eq(1), false, false, true, true, true, true);
            var norBtnCon = $('.product-info-wrap > .product-info-section > .module-wrap > .ecom-module > .nor-btnList'), norBtn = norBtnCon.find('> .nor-button');

			var btnNum = norBtn.length;
			norBtn.each(function() {
				if (($(this).attr('style') == 'display: none;') || ($(this).attr('style') == 'display:none')) {
					btnNum = btnNum-1;
				}
			});

			if($('#addToCartDisable').length > 0){
				if($('#addToCartDisable').attr('style').indexOf('display: none;') > 0 || $('#addToCartDisable').attr('style').indexOf('display:none') > 0) {
					btnNum = btnNum-1;
				}
			}

			norBtnCon.addClass('num-'+btnNum);
		}

		//E-Store 사이트가 아닌경우.
		function notEcommerceSite() {

			// 사용하지 않는 버튼 제거
			$('#quickBuy').hide();
			$('#addToCart').hide();

			// 사용하지 않는 영역 제거.
			$('.ecom-text .point').hide();

			//제품의 특성을 나타내는 아이콘 노출
			var flag = $('#productIconTypeCode').val();
			if (flag == 'C') {
				$('#eCommerceFlag').html(pdpMsg.flagComingSoon);
			} else if (flag == 'E') {
				$('#eCommerceFlag').html(pdpMsg.flagEvnet);
			} else if (flag == 'H') {
				$('#eCommerceFlag').html(pdpMsg.flagHot);
			} else if (flag == 'N') {
				$('#eCommerceFlag').html(pdpMsg.flagNew);
			}


			// 가격정보 노출
			if (rrpDisplay && priceDisplay == 'Y' ) {

				if (prdPrice != undefined && prdPrice != null && prdPrice != "") {

					$('#promotionPrice').text(prdPrice);
					$('#jumpToPrice').text(prdPrice);

					if(prdPrice != undefined && prdPriceDiscl != null && prdPriceDiscl != ""){
						$('.price-dec p').html(prdPriceDiscl);
					}

				} else {
				//ERP price
				}
			}

			if(whereToBuyBtn == 'Y'
				&& whereToBuyBtnPDP == 'Y'
				&& ( onlineRetailerYN == 'Y' || storeLocatorYN == 'Y' || SITE_CD == "cn" || SITE_CD == "ca" || SITE_CD == "ca_fr")
				&& (lightPdpFl == 'N' || lightPdpWhereToBuyFl == true)){
				$('#seeAllAvailability').css('display', '');
				$('#jumpToSeeAllAvailability').css('display','');
				whereToBuyBtnUse = true;
				btnCount++;

			}else{
				$('#seeAllAvailability').hide();
				//$('#seeAllAvailability').remove();
			}


		}

		function hiddenBuyingOptionBtn(){


/*			if (modelCode == 'SM-G900FZDABTU'
				|| (SITE_CD == 'jp' && typeCd == '05020000')) {

				// buying option 노출 안함.
				$('#seeAllAvailability').hide();
				if(whereToBuyBtnUse){
					btnCount --;
				}
			}*/

		}


		// E-Store data 노출 중단 (초기화)
		// 현제 사용안함
		function notUseEcommerce() {
			console.info("eCommerce 사용안함");

			//PRE-ORDER NOW 를 quick buy 로 초기화
			$('#quickBuy').children().text(pdpMsg.quickbuy);
			// 플래그 초기화
			$('#eCommerceFlag').html('');
			// 버튼 제거
			$('#quickBuy').hide();
			$('#addToCart').hide();
			//문구 제거
			$('#stockLevelStatus').text('');
			//가격 제거
			$('#promotionPrice').text('');
			$('#price').text('');

			//마일리지 제거
			$('#mileage').html('');

			//설명 문구 제거
			$('#promotionDesc').html('');
			$('#promotionDescRed').html('');

			//buying option 추가
			$('#seeAllAvailability').css('display', '');

			//버튼이 1개일경우 처리
			oneButton();

			//freegift 정보제거
			$('#freegiftData').find('img').attr('src', '');
			$('#freegiftData').find('img').attr('alt', '');
			$('#freegiftLinkImg').attr('href', '');
			$('#freegiftLinkTitle').html('');
			$('#freegiftLinkTitle').attr('href', '');
			$('#freegiftDataDesc').text('');
			$('#freegiftOutOfStock').hide();
			$('#freegift').hide();

			if ($('.offers-bar-module').find('[data-offer="Y"]').length == 0) {
				$('.offers-bar-module.inner').hide();
				$('#offerbelow').hide();
			}

		}

		function onlineRetailerInfoNew(flag, param) {
			retailerSiteCode = param.siteCode;
			retailerModelName = param.modelName;
			retailerModelCode = $('#chageModelCode').val();
			retailerIaCode = param.iaCode;
			retailerEntry = param.entry;
			retailerGroupName = param.groupName;
			retailerTypeName = param.typeName;
			retailerSubTypeName = param.subTypeName;
	 		retailerSiteCode == 'fr' ?  retailerDisplayName  = param.displayName : undefined;

			if(flag != 3){
				if(retailerSiteCode == 'ar' || retailerSiteCode == 'mx' || retailerSiteCode == 'py' || retailerSiteCode == 'uy'){
					retailerDisplayName = param.displayName.replace(/ /g, "+");
					var $buyonlineTemplate = $('.buy-online > ul');
					$buyonlineTemplate.empty();
					var buyonlineHtml = "";

					var parameter = "";
					var url = "";

					if(retailerSiteCode == 'ar') {
						parameter = "group=" + retailerGroupName + "&type=" + retailerTypeName + "&subtype=" + retailerSubTypeName + "&iaAcc=&model_code="+retailerModelCode+"&model_name="+retailerModelName+"&display_model_name="+retailerDisplayName;
						url = "http://etale.samsungargentina.net/getData.php?" + parameter;
					} else if(retailerSiteCode == 'py') {
						parameter = "group=" + retailerGroupName + "&type=" + retailerTypeName + "&subtype=" + retailerSubTypeName + "&iaAcc=&model_code="+retailerModelCode+"&model_name="+retailerModelName+"&display_model_name="+retailerDisplayName;
						url = "http://etale.samsungnet.com.ar/getData.php?" + parameter;
					} else if(retailerSiteCode == 'uy') {
						parameter = "group=" + retailerGroupName + "&type=" + retailerTypeName + "&subtype=" + retailerSubTypeName + "&iaAcc=&model_code="+retailerModelCode+"&model_name="+retailerModelName+"&display_model_name="+retailerDisplayName;
						url = "http://assets.etailing-la.com/samsung/uy/getData.php?" + parameter;
					} else {
						if(retailerTypeName == 'accessories' || retailerTypeName == 'mobile-phones' || retailerTypeName == 'televisions' || retailerTypeName == 'air-conditioners' || retailerTypeName == 'audio-systems'
							|| retailerTypeName == 'wireless-audio-with-dock' || retailerTypeName == 'cameras' || retailerTypeName == 'smart-compact' || retailerTypeName == 'printers' || retailerTypeName == 'odd'
								|| retailerTypeName == 'home-theaters' || retailerTypeName == 'galaxy-camera' || retailerTypeName == 'mwo' || retailerTypeName == 'laundry' || retailerTypeName == 'digital-camera'
									|| retailerTypeName == 'monitors' || retailerTypeName == 'smart-nx' || retailerTypeName == 'ultra-mobile-pc' || retailerTypeName == 'refrigerators' || retailerTypeName == 'soundbar'
										|| retailerTypeName == 'video' || retailerTypeName == 'camcorders' || retailerTypeName == 'visual-solutions' || retailerTypeName == 'lens') {
							parameter = "group=" + retailerGroupName + "&type=" + retailerTypeName + "&subtype=" + retailerSubTypeName + "&iaAcc=&model_code="+retailerModelCode+"&model_name="+retailerModelName+"&display_model_name="+retailerDisplayName+"&output=embed";
							url = "http://198.61.129.0/onlineRetailers/index.php?" + parameter;

						}
					}
					console.info("url >>>>>>>> ", url);

					buyonlineHtml = "<iframe src='" + url + "' style='border:none;' width='100%' height='310'></iframe>";

					$buyonlineTemplate.append(buyonlineHtml);

					popoverDefaultHeight($('.buy-instore'), onlineRetailerMsg.gelocationNoCheck, 'buyinstore');
				}  else {

					//코드값 강제 삽입
					var retailerUniSiteCode = $.cookies.get("country_codes");
					if (retailerUniSiteCode && retailerUniSiteCode != "") {
						retailerUniSiteCode = retailerUniSiteCode.toLowerCase();
					} else {
						retailerUniSiteCode = "";
					}
					
					$.ajax({
						type: "POST"
						,url: "/" + retailerSiteCode + "/data-consumer/online-retailer?mType=xml"
						,data: {
							 siteCode: retailerSiteCode
							,modelCode: retailerModelCode
							,iaCode: retailerIaCode
							,retailerUniSiteCode : retailerUniSiteCode
						}
						,dataType: "xml"
						,async: true
						,block: true
						,success: function(data) {
							// BUY ONLINE TAB. [START]
							var buyonlineList = $(data).find("map").find("entry").find("onlineRetailerInfo");

							var $buyonlineTemplate = $('.buy-online > ul');
							var ortApiUseFl = buyonlineList.attr("ortApiUseFl");
							var buyonlineHtml = "";
							var etcName = "";

							$buyonlineTemplate.empty();

							var tabMsg = flag == 2 ? onlineRetailerMsg.buyonlineTabMsg : onlineRetailerMsg.buyinstoreTabMsg;
							if(flag == 2){
								$(".shop-popover > ul:first").hide();
								$(".shop-popover-title").text(tabMsg).show();
							}
							// retailer 개수가 5개 이하일 때는 페이징부분 display:none 처리.
							if (buyonlineList.attr("onlineRetailerListCnt") < 6) {
								$(".tab-content .controls").hide();
							}

							if (buyonlineList.attr("onlineRetailerListCnt") > 0 && buyonlineList.attr("ortDisplayFlag") == "Y") {
								buyonlineList.find("onlineRetailerList").find("onlineRetailer").each(function(idx) {
									var name = $(this).find("name");
									var displayType = $(this).find("displayType");
									var instock = $(this).find("instock");
									var deeplinkUrl = $(this).find("deeplinkUrl");
									var logoUrl = $(this).find("logoUrl");
									var price = $(this).find("price");

									if (instock.text() != "") {
										etcName = instock.text() == "true" ? onlineRetailerMsg.instock : onlineRetailerMsg.outofstock;
										/*if ("be,be_fr,nl,uk".indexOf(retailerSiteCode)!=-1 &&"SM-G925FZKFBTU,SM-G920FZKEBTU,SM-G920FZKFBTU,SM-G925FZKEBTU,SM-G925FZKFBTU,SM-G920FZKAPHN,SM-G920FZKEPHN, SM-G920FZKFPHN, SM-G925FZKAPHN, SM-G925FZKEPHN, SM-G925FZKFPHN, SM-G920FZKALUX, SM-G920FZKELUX, SM-G925FZKALUX, SM-G925FZKELUX, SM-G925FZKFLUX, SM-G920FZKALUX, SM-G920FZKELUX, SM-G925FZKALUX, SM-G925FZKELUX, SM-G925FZKFLUX".indexOf(retailerModelCode)!=-1 && instock.text() == "true") {
											etcName = 'Pre-order';
										}*/
										if(retailerSiteCode == "uk" && instock.text() == "true" && $('#lightPdpFl').val()== "Y") {
											etcName = 'Pre-order';
										}
									}

									//buyonlineHtml += idx < 5 ? "<li>" : "<li class='hide'>";
									buyonlineHtml += "<li>";
									buyonlineHtml += "<span class='store-name'>";
									if (displayType.text() == "N-M") {
										buyonlineHtml += name.text();
									} else if (displayType.text() == "L-G") {
										buyonlineHtml += "<img src='" + logoUrl.text() + "' alt='checked at 16 February 2014 12:35:04' />";
									} else {
										buyonlineHtml += "<img src='" + logoUrl.text() + "' alt='checked at 16 February 2014 12:35:04' />" + name.text();
									}
									buyonlineHtml += "</span>";
									if (ortApiUseFl == "Y") {
										buyonlineHtml += "<span class='etc'>" + price.text() + "</span>";
										buyonlineHtml += "<span class='etc-name'>" + etcName + "</span>";
									}
									buyonlineHtml += "<span>";
									buyonlineHtml += "<button type=\"button\" class=\"go ss-button darkblue\" aria-label=\"Go purchase at Littlewood's\" onclick=\"$_retailerLocation('" + deeplinkUrl.text() + "','" + name.text() + "');\">" + onlineRetailerMsg.btngo + "</button>";
									buyonlineHtml += "</span>";
									buyonlineHtml += "</li>";

								});

								//aeseul.kim #94 0820
						 		//var tempHtml = $('#seeAllAvailability').data('bs.popover')['options']['content'];
								//$('#wtb').html(tempHtml);
								$('#wtb').find('.buy-online > ul').html(buyonlineHtml);
								$('#seeAllAvailability').data('bs.popover')['options']['content'] = $('#wtb').html();
								$buyonlineTemplate.html(buyonlineHtml);

								$_retailerLocation = function(deeplinkUrl, name) {
									sendClickCode('wishlist_step2', 'buy online:' + name + '|' + retailerModelCode.toLowerCase() +'|' + retailerModelName.toLowerCase() + '');
									//sendClickCode('wishlist', 'buy online:' + name + '||' + retailerModelName.toLowerCase() + '');
									if("fr".indexOf(retailerSiteCode)!=-1 && location.href.indexOf('samsung.com/fr/')!=-1){
										  s_sendOmnitureData('where_to_buy:online:link', name)         //    2015-02-13 [fr] tagging added
									}
									var openNewWindow = window.open("about:blank");
									openNewWindow.location.href = deeplinkUrl;
								};

							} else if (buyonlineList.attr("ortDisplayFlag") == "N") {
								if(flag == 2){
									//popoverDefaultHeight($buyonlineTemplate, onlineRetailerMsg.retailerNoData, '');
									buyonlineHtml = "<div class='text-noti'>" + onlineRetailerMsg.retailerNoData + "</div>";
									var tempHtml = $('#seeAllAvailability').data('bs.popover')['options']['content'];
									$('#wtb').html(tempHtml);
									$('#wtb').find('.buy-online > ul').html(buyonlineHtml);
									$('#seeAllAvailability').data('bs.popover')['options']['content'] = $('#wtb').html();
									//aeseul.kim #94 0820
									$buyonlineTemplate.html(buyonlineHtml);
								} else {
									$(".shop-popover > ul:first").hide();
									$(".shop-popover-title").text(onlineRetailerMsg.buyinstoreTabMsg).show();

									$(".shop-popover").find(".tab-content").each(function(elm) {
										$(this).toggleClass('show');
									});
								}
							} else {
								// buy online에 retailer data가 없다고 표시.
								//popoverDefaultHeight($buyonlineTemplate, onlineRetailerMsg.retailerNoData, '');
								buyonlineHtml = "<div class='text-noti'>" + onlineRetailerMsg.retailerNoData + "</div>";
								var tempHtml = $('#seeAllAvailability').data('bs.popover')['options']['content'];
								$('#wtb').html(tempHtml);
								$('#wtb').find('.buy-online > ul').html(buyonlineHtml);
								$('#seeAllAvailability').data('bs.popover')['options']['content'] = $('#wtb').html();
								//aeseul.kim #94 0820
								$buyonlineTemplate.html(buyonlineHtml);
							}

							if(SITE_CD != 'fr'){
								popoverDefaultHeight($('.buy-instore'), onlineRetailerMsg.gelocationNoCheck, 'buyinstore');
							} else {
								popoverDefaultHeight($('.buy-instore'), onlineRetailerMsg.storeNoData, 'buyinstore');
							}

						// BUY ONLINE TAB. [END]
						},
						error: function(xhr, st, err) {
							var $buyonlineTemplate = $('.buy-online > ul');

							popoverDefaultHeight($buyonlineTemplate, onlineRetailerMsg.retailerNoData, '');
							$(".tab-content .controls").hide();
							popoverDefaultHeight($('.buy-instore'), onlineRetailerMsg.gelocationNoCheck, 'buyinstore');
							console.info("error", err);
						}
					});
				}

			} else {

				if(SITE_CD != 'fr'){
					popoverDefaultHeight($('.buy-instore'), onlineRetailerMsg.gelocationNoCheck, 'buyinstore');
				} else {

					popoverDefaultHeight($('.buy-instore'), onlineRetailerMsg.storeNoData, 'buyinstore');
				}

				$(".shop-popover > ul:first").hide();
				$(".shop-popover-title").text(onlineRetailerMsg.buyinstoreTabMsg).show();

				$(".shop-popover").find(".tab-content").each(function(elm) {
					$(this).toggleClass('show');
				});
			}
		}

		init();



	}

	function changeGallery(colorCode) {
		var kvArea = $('#carousel-00 ul');
		var kvData = $('#prdImgData').clone(true, true);
		var kvThumbnailArea = $('.thumbnail-visual').find('.wrap');
		var colorChip = $('#selectColor');

		// 기존 KV 데이터 삭제 (KV전용 이미지, 갤러리)
		kvArea.find('[data-heroimagetype="KV"]').remove();
		kvArea.find('[data-heroimagetype="G"]').remove();
		kvArea.find('[data-heroimagetype="V"]').remove();

		// 기존 KV썸네일 데이터 삭제
		kvThumbnailArea.empty();

		// KV, gallery&동영상 순서대로 KV영역에 데이터 복사
		kvArea.prepend(kvData.find('[image-color-type="' + colorCode + '"]'));
		kvArea.prepend(kvData.find('[data-heroimagetype="KV"]'));


		var kvDataLength = kvArea.find('li').length;

		for ( var i = 0; i < kvDataLength; i++) {
			var dataHtml = $(kvArea.find('li')[i]);
			var dataType = dataHtml.attr('data-heroimagetype');
			// chw.park KV 20150519 비디오 수정
			var dataGalleryUrl = dataHtml.find('span').attr('gallery-image-url') + "?wid=60&hei=60";
			var dataThumbUrl = dataHtml.find('span').attr('gallery-thumb-url');

			if (dataType == "KV") {
				var kvType = dataHtml.attr('data-kvType');
				if ( kvType == "H"){
					var form = $('#kvHtmlThumb').clone();
					form.attr('sampleimages-index', i);
					kvThumbnailArea.append(form);

				}else if (kvType == "I"){
					var form = $('#kvThumb').clone();
					form.attr('sampleimages-index', i);
					form.find('img').attr('src',dataThumbUrl);
					kvThumbnailArea.append(form);
				}

			} else if (dataType == "G") {
				var form = $('#galleryThumb').clone();
				form.attr('sampleimages-index', i);
				form.find('img').attr('src',dataGalleryUrl);
				kvThumbnailArea.append(form);

			} else if (dataType == "V") {
				var form = $('#videoThumb').clone();
				form.attr('sampleimages-index', i);
				kvThumbnailArea.append(form);

			}
		}

		heroSize();

		eventBridge.on(eventDictionary.global.RESIZE, function() {
			heroSize();
		});

		function heroSize() {

			var carousel = $( ".product-img-section>.ss-carousel");
			var heros = carousel.find( ".viewer>ul>li [class*='hero'] > p");
			var herosImg = heros.find( "> img");
			var metrics = ss.metrics, width;
			if (metrics.isIE8())
				return;
			if (metrics.deviceLayoutId == 1) {
				width = carousel.outerWidth();
				carousel.outerHeight(width);
				heros.outerHeight(width);
				herosImg.outerHeight( width );
			} else if (metrics.deviceLayoutId == 2) {
				width = carousel.outerWidth() / 3 * 2;
				carousel.outerHeight(width);
				heros.outerHeight(width);
				herosImg.outerHeight( width );
			} else {
				carousel.css('height', '');
				heros.css('height', '');
				herosImg.css( 'height', '' );
			}
		}

		$(eventBridge).trigger(jQuery.Event(eventDictionary.dom.DOM_REFRESH));
		window.firstAction = false;
		new ss.PDPStandard.PDPStandardKv();
	}

	function setPrdOptions(optionTypeId, optionId) {
		//첫번째 옵션 선택 시 (Standard 만 해당)
		if( (optionTypeId == 1) && (typeof $("#selectColor").attr("id") != 'undefined') ) {
			var seqOfColor = 0;
			for(var i=0; i<mappingList.option.length; i++){
				if(mappingList.option[i][0] == 'color'){
					seqOfColor = i;
					break;
				}
			}
			if( seqOfColor > 0 ){
				$("#selectColor").find("a").each(function(){
					for(var i=0; i<mappingList.product.length; i++){
						if( (mappingList.product[i][1] == optionId) && (mappingList.product[i][seqOfColor + 1] == $(this).attr("data-color")) ){
							$(this).attr("data-modelcode", mappingList.product[i][0]);
						}
					}
				});
			}
		}

		//마지막 옵션 선택 시
		if(optionTypeId == mappingList.option.length){
			var optionValue = "";
			var arrProductFlag = new Array( mappingList.product.length );
			for(var i=0; i<arrProductFlag.length; i++){
				arrProductFlag[i] = true;
			}
			for(var i=0; i<mappingList.option.length; i++){
				if(i < mappingList.option.length - 1){
					if(mappingList.option[i][0] == 'color'){
						optionValue = $('#selectColor>.active').find("a").attr("data-color");
					}else{
						optionValue = $(".layout-2").find("input[id*='"+mappingList.option[i][0]+"']:checked").data('optidval');
					}
					for(var j=0; j<arrProductFlag.length; j++){
						if( mappingList.product[j][i+1] != optionValue && arrProductFlag[j] ){
							arrProductFlag[j] = false;
						}
					}
				}else{
					optionValue = optionId;
					for(var j=0; j<arrProductFlag.length; j++){
						if( mappingList.product[j][i+1] == optionValue && arrProductFlag[j] ){
							//aeseul.kim
							$(".layout-2").find("input[checked='checked']").prop("checked", false);
							$(".layout-2").find("input[checked='checked']").removeAttr("checked");
							$(".layout-2").find("input[data-optidval='"+mappingList.product[j][i+1]+"']").attr("checked", "checked");
							
							// #299 모델코드에 맞는 discontinued 값으로 변경
							$('#discontinued').val(mappingList.discontinued[j][0]);
							
							changeSEC(mappingList.product[j][0]);
							changeSpec();
							// Standard 는 Spec 의 추가 정보 처리
							$(".app-info-section").find("a").first().attr("href", "/sec/consumer/mobile/Apps/"+ mappingList.product[j][0] +".html");
							break;
						}
					}
				}
			}
		}

		//선택된 다음 옵션 처리
		if(optionTypeId <= mappingList.option.length - 1){
			initChangeSEC();
			$(".layout-2>.option-" + (parseInt(optionTypeId, 10) + 1)).css("opacity", 1);
			if(  $(".layout-2>.option-" + (parseInt(optionTypeId, 10) + 1)).hasClass("swatches") ){
				$('#selectColor').find(".swatch").each(function(){

					$(this).css('opacity', 1);
					$(this).find("a").css('cursor', 'pointer');
					$(this).find("a").off('click');

					var thisSwatch = $(this);
					var cIndex = 1;
					var optionValue = "";
					var actionFlag = true;
					var matchFlag = false;
					var arrProductFlag = new Array( mappingList.product.length );
					var nextOptionId = $(this).find('a').attr('data-color');
					for(var i=0; i<arrProductFlag.length; i++){
						arrProductFlag[i] = true;
					}
					$(".layout-2>div[class*=option]").each(function(){
						if(actionFlag){
							if( $(this).hasClass("swatches") ){
								optionValue = thisSwatch.find("a").attr("data-color");
								for(var i=0; i<arrProductFlag.length; i++){
									if( mappingList.product[i][cIndex] != optionValue && arrProductFlag[i] ){
										arrProductFlag[i] = false;
									}
								}
								actionFlag = false;
							}else{
								optionValue = $(this).find("input[type='radio']:checked").data('optidval');
								for(var i=0; i<arrProductFlag.length; i++){
									if( mappingList.product[i][cIndex] != optionValue && arrProductFlag[i] ){
										arrProductFlag[i] = false;
									}
								}
							}
							cIndex++;
						}
					});
					actionFlag = true;
					matchFlag = false;
					for(var i=0; i<arrProductFlag.length; i++){
						if(arrProductFlag[i]){
							if( (mappingList.product[i][(parseInt(optionTypeId, 10) + 1)] == thisSwatch.find("a").attr("data-color") ) && !matchFlag ){
								matchFlag = true;
							}
						}
					}
					if(matchFlag){
						$(this).css('opacity', 1);
						$(this).css('display', 'block');
						$(this).find("a").css('cursor', 'pointer');
						$(this).find("a").off('click');
						$(this).find("a").on('click', function(e) {

							var model = $('#selectColor').find('[data-color="' + optionValue + '"]').attr('data-modelcode');
							$('#currentColor').val(optionValue);
							getPDPGallery( model );
							//getPDPGallery( $('#modelCode').val() );
							setPrdOptions((parseInt(optionTypeId, 10) + 1), nextOptionId );
							$("#selectColor").find('.swatch').removeClass('active');
							$(this).parent().addClass('active');
						});
					}else{
						//$(this).css('opacity', 0.2);
						$(this).css('display', 'none');
						$(this).find("a").css('cursor', 'default');
					}
					if($(this).hasClass("active") ){
						$(this).removeClass("active");
						$('#currentColor').val("");
					}
				});
				new ss.PDPStandard.PDPStandardKv();
			} else {
				var availableFlag = true;
				$(".layout-2>.option-" + (parseInt(optionTypeId, 10) + 1)).find("li").each(function(){
					$(this).attr('disabled', false);
					$(this).css('opacity', 1);
					var cIndex = 1;
					var optionValue = "";
					var actionFlag = true;
					var matchFlag = false;
					var arrProductFlag = new Array( mappingList.product.length );
					for(var i=0; i<arrProductFlag.length; i++){
						arrProductFlag[i] = true;
					}
					$(".layout-2>div[class*=option]").each(function(){
						if(cIndex <= optionTypeId){
							if( $(this).hasClass("swatches") ){
								if(cIndex == cIndex){
									optionValue = optionId;
								}else{
									optionValue = $("#selectColor>.active").find("a").attr("data-color");
								}
								for(var i=0; i<arrProductFlag.length; i++){
									if( mappingList.product[i][cIndex] != optionValue && arrProductFlag[i] ){
										arrProductFlag[i] = false;
									}
								}
							}else{
								optionValue = $(this).find("input[type='radio']:checked").data('optidval');
								for(var i=0; i<arrProductFlag.length; i++){
									if( mappingList.product[i][cIndex] != optionValue && arrProductFlag[i] ){
										arrProductFlag[i] = false;
									}
								}
							}
							cIndex++;
						}
					});
					matchFlag = false;
					for(var i=0; i<arrProductFlag.length; i++){
						if(arrProductFlag[i]){
							if( ( mappingList.product[i][parseInt(optionTypeId, 10) + 1] == $(this).find("input[type='radio']").data('optidval') ) && !matchFlag){
								matchFlag = true;
							}
						}
					}
					if(matchFlag){
						$(this).attr('disabled', false);
						$(this).css('opacity', 1);
						$(this).off('click');
						$(this).on('click',function(e) {
							setPrdOptions( (parseInt(optionTypeId, 10) + 1), $(this).find("input[type='radio']").data('optidval') );
						});
					}else{
						$(this).attr('disabled', true);
						$(this).css('opacity', 0.2);
						$(this).find("input[type='radio']:checked").prop("checked", false);
						$(this).find("input[type='radio']:checked").removeAttr("checked");
					}
				});

				//aeseul.kim s
				//선택한 옵션의 다음 옵션이 마지막 옵션일 경우
				//선택 가능한 마지막 항목 중 첫 번째 또는 이미 선택되어 있는 항목으로 setPrdOptions 실행
				if(optionTypeId == mappingList.option.length - 1){
					//이미 선택되어 있는 항목이 선택 불가 항목일 경우
					if($(".layout-2>.option-" + (parseInt(optionTypeId, 10) + 1)).find("li").find("input[type='radio']:checked").attr('data-optidval') == undefined) {
						$(".layout-2>.option-" + (parseInt(optionTypeId, 10) + 1)).find("li").each(function(){
							if($(this).attr("disabled") == undefined){
								$(".layout-2>.option-" + (parseInt(optionTypeId, 10) + 1)).find("li").find("input[type='radio']:checked").prop("checked", false);
								$(".layout-2>.option-" + (parseInt(optionTypeId, 10) + 1)).find("li").find("input[type='radio']:checked").removeAttr("checked");
								$(this).find("input[type='radio']").attr("checked", "checked");
								setPrdOptions( (parseInt(optionTypeId, 10) + 1), $(this).find("input[type='radio']").data('optidval') );
								return false;
							}
						});
					} else{
						setPrdOptions( (parseInt(optionTypeId, 10) + 1), $(".layout-2>.option-" + (parseInt(optionTypeId, 10) + 1)).find("li").find("input[type='radio']:checked").attr('data-optidval') );
					}
				}
				//aeseul.kim e

			}
		}

		// 선택된 다다음 옵션이후 처리
		if(optionTypeId <= mappingList.option.length - 2){
			for(var i=(parseInt(optionTypeId, 10) + 1); i <= mappingList.option.length; i++){
				if( $(".layout-2>.option-" + (parseInt(i, 10) + 1)).hasClass("swatches") ){
					$('#selectColor').find("a").each(function(){
						$(this).css('opacity', 1);
						$(this).css('cursor', 'default');
					});
					$('#selectColor').css('opacity', 0.2);
				} else {
					$(".layout-2>.option-" + (parseInt(i, 10) + 1)).find("li").each(function(){
						$(this).attr('disabled', true);
						$(this).css('opacity', 1);
					});
					$(".layout-2>.option-" + (parseInt(i, 10) + 1)).css('opacity', 0.2);
				}
			}
		}

		return false;
	}

	ss.PDPStandard.PDPStandardKv = function (params) {
        var container = $('.product-img-section');
        var containerAnim = false;
        var carousel = container.find('.ss-carousel')[0].binder;
        var realchild = container.find( ".ss-carousel .viewer > ul" ).attr( "realchild");
        var kvImgs = container.find( ".responsive-image" );
        var thumbnailGallery = container.find('.thumbnail-visual');
        var currLabel = container.find('.current-num');
        var totalLabel = container.find('.all-num');
        var thumbs = thumbnailGallery.find('.thumbnail');
        var thumbNum = thumbs.length;
        var isPanning = false;
        var prevArrow = thumbnailGallery.find('.prev');
        var nextArrow = thumbnailGallery.find('.next');
        var currentThumbnail = 0;
        var thumbnailsAnim = false;
        var showNum = 5;
        var itemSize = 20;
        var pageNum = 0;
        var maxPage = thumbNum - showNum;
        var currentSwatchID;
        var domRefreshEvent = jQuery.Event(eventDictionary.dom.DOM_REFRESH);
        var isShownumMoreImg;
        var halfIndex = parseInt( showNum/2 );
        var isRTL = $("html").hasClass( "rtl" );
		var currentLazyItem = null;
        carousel.callFn = carouselCallback;

		// 컬러칩 하이라이트 변경
		if (($('#currentColor').val() != "") && ($('#currentColor').val() != undefined) && ($('#currentColor').val() != null)) {
			$('#selectColor').find('.swatch').removeClass('active');
			$('#selectColor').find('[data-color="' + $('#currentColor').val() + '"]').parent().addClass('active');
		}

        function carouselCallback(){
        	 var idx =  this.curr % realchild;
             if( currentThumbnail !=  idx  ){
                 if( idx <= halfIndex ) pageNum = 0;
                 else if( idx == thumbNum-1 ) pageNum = maxPage;
                 else pageNum = idx-halfIndex;
             }
             if( pageNum > maxPage ) pageNum = maxPage;
             else if( pageNum < 0 ) pageNum = 0;
             changeImg( idx );
        }

        function changeImg( index ){
        	setupThumbnailGallery( index );
            firstLoadLazyItem( index );
            showLazyItem( index );
        }

        function initLazys(){
        	kvImgs = container.find( ".responsive-image" );
        	var firstCount = Math.min( kvImgs.length, 5  );
        	for( var i=0 ; i<firstCount ; i+=1 ){
        		firstLoadLazyItem( i );
        	}
        	showLazyItem( 0 );
        }

        function firstLoadLazyItem( index ){
        	var $lazyItem = kvImgs.eq( index );
        	var alt = $lazyItem.attr( "data-alt" );
        	$lazyItem.show();
        	if( !$lazyItem.attr( "data-has-img" )){
        		var mobileImg = $( "<img src='"+$lazyItem.attr("data-media-mobile")+"' alt='"+alt+"' class='pdp-mobile'/>") ;
        		var desktopImg = $( "<img src='"+$lazyItem.attr("data-media-desktop")+"'  alt='"+alt+"' class='pdp-desktop'/>" );
                $lazyItem.empty();
                $lazyItem.append( desktopImg ).append( mobileImg );
        		$lazyItem.data( "mobile-img", mobileImg );
        		$lazyItem.data( "desktop-img", desktopImg );
        		$lazyItem.attr( "data-has-img", true );
        		eventBridge.trigger( "loadedKvImgs", null );

        	}
        }

        function showLazyItem( index ){
        	currentLazyItem = kvImgs.eq( index );
        	currentLazyItem.css( "opacity", 1 );
        	// chw.park KV 20150519 비디오 수정
        	if (currentLazyItem.attr("gallery-videotype")=="Y") {
        		$('.hero-module').find('.play-btn.popupVideo').css('opacity','1');

        		// 비디오 Player 재설정

        		//$('#youtubePlayer').remove();
        		// 유튜브 플레이어가 기존에 있고 변경되어야 할 때,
        		// 유튜브 플레어가 초기 세팅 안 되어 있을 경우
        		if (($('#youtubePlayer').attr('data-videoId') != currentLazyItem.attr("gallery-code"))){
        			var ytbHtml = "";
        			ytbHtml+='<div class="youtube-player noSwipe not-visible" id="youtubePlayer"'
    				ytbHtml+='style="width: 100%; height: 100%; display: none; opacity: 0; transition-property: opacity; transition-duration: 400ms; transition-timing-function: ease-in-out; background-color: rgb(0, 0, 0);"'
					ytbHtml+='data-videoid="'+currentLazyItem.attr("gallery-code")+'"'
					ytbHtml+='data-height="100%" data-width="100%">'
					ytbHtml+='<a class="close-video popupVideo" style="display: block;" 	href="javascript:void(0)">'
					ytbHtml+='<img class="close-btn" alt="'+pdpMsg.closeVideo+'" src="/common/next/img/hp/icons/close-btn.png">'
					ytbHtml+='<span class="blind">'+pdpMsg.closeVideo+'</span>'
					ytbHtml+='</a>'
					ytbHtml+='<div id="firstYT"></div>'
					ytbHtml+='</div>'

					$('.vm-player').html(ytbHtml);
        			onYouTubeIframeAPIReady();
				}

        		// event 재설정
        		var heroContainer = $('.hero-module');
        		var playBtns = heroContainer.find('.play-btn.popupVideo');
        		var closeBtns = viewSection.find('.close-video.popupVideo');
        		var vmPlayer = viewSection.find('.vm-player');

        		playBtns.on('click', function(e) {
        			if (!viewSection.hasClass('on'))
        				viewSection.addClass('on');
        			if (!vmPlayer.hasClass('on'))
        				vmPlayer.addClass('on');
        			viewSection[0].popAlign();
        			// setTimeout(function (){viewSection[0].popAlign();}, 1);
        			$('.lightbox-skrim').remove();
        			$('body').append('<div class="lightbox-skrim"></div>');
        			$('.lightbox-skrim').on(ss.clickEvent, function() {
        				closeBtnClickHandler();
        			});

        			// chw.park KV 20150519 비디오 수정
        			$('#youtubePlayer').css('opacity','1');
        			$('#youtubePlayer').removeClass('not-visible');
        			$('#youtubePlayer').addClass('show-video');
        			$('#youtubePlayer').show();

        			if ($(this).attr('data-view')) {
        				setTimeout(function() {
        					vmPlayer.find('.video-player .close-video').focus();
        				}, 1);
        			} else {
        				setTimeout(function() {
        					vmPlayer.find('.youtube-player .close-video').focus();
        				}, 1);
        			}
        		});

        		closeBtns.on('click', function(e) {
        			if (vmPlayer.hasClass('on'))
        				vmPlayer.removeClass('on');
        			else
        				return;

        			if (viewSection.hasClass('on'))
        				viewSection.removeClass('on');

        			$('.lightbox-skrim').remove();

        			var carousel = heroContainer.find('.ss-carousel'), index = carousel.find('.dots li.current a').attr('data-index');
        			console.log('index = ' + index);
        			setTimeout(function() {
        				carousel.find('li[data-index="' + index + '"] a').first().focus();
        			}, 461);
        		});
			}
        }

        /**
         Initialization function which runs at object instantiation time.

         @method init
         **/
        function init() {
            var imgLength = realchild;
            totalLabel.text( imgLength );
            if( imgLength == 1 ){
            	container.find( ".ss-carousel .controls").css( "visibility", "hidden");
            }else{
            	container.find( ".ss-carousel .controls").css( "visibility", "visible");
                bindEvents();
            }
            carousel.curr = 0;
            carouselCallback.call( carousel );
            isShownumMoreImg = imgLength > showNum;
            if( !isShownumMoreImg ){
            	prevArrow.addClass( 'disabled' );
            	nextArrow.addClass( 'disabled' );
            }
            initArrowControls();
            thumbnailGallery.find('.wrap').css('display','');
            setThumbZIndex();
            window.InstResponsive.init();
        	window.InstResponsive.scan(ss.metrics);

			eventBridge.on( "initLazys", function() {
            	initLazys();
            });
        }

        function setThumbZIndex(){
        	if( !isRTL ) return;
        	thumbs.each(function(i) {
        		if( isRTL ) $(this).css("z-index", thumbs.length-i);
        	});
        }

        function bindEvents() {

            nextArrow.on(ss.clickEvent, function(e) {
                if (pageNum === maxPage) {
                    e.preventDefault();
                } else {
                	pageNum++;
                    slideThumbnails();
                }
            });

            prevArrow.on(ss.clickEvent, function(e) {
                if (pageNum === 0) {
                    e.preventDefault();
                } else {
                	pageNum--;
                    slideThumbnails();
                }
            });

            thumbnailGallery.swipe({
                swipeLeft: function (event, direction) {
                    var maxPos = maxPage;

                    if (pageNum === maxPos && !thumbnailsAnim) {
                        event.preventDefault();
                    } else {
                    	pageNum++;
                        slideThumbnails();
                    }
                },

                swipeRight: function (event, direction) {
                    if (pageNum === 0 && !thumbnailsAnim) {
                        event.preventDefault();
                    } else {

                    	pageNum--;
                        slideThumbnails();
                    }
                }
            });

            thumbnailGallery.on('swipeleft', function(e) {
                var maxPos = maxPage;

                if (pageNum === maxPos && !thumbnailsAnim) {
                    e.preventDefault();
                } else {
                	pageNum++;
                    slideThumbnails();
                }
            }).on('swiperight', function(e) {
                    if (pageNum === 0 && !thumbnailsAnim) {
                        e.preventDefault();
                    } else {
                    	pageNum--;
                        slideThumbnails();
                    }
                });

            thumbnailGallery.on(ss.clickEvent, '.thumbnail', function() {
                if(!$(this).hasClass('current')) {
                	sendClickCode('pdp_gallery','gallery:image');
                    $(thumbnailGallery).find('.thumbnail.current').removeClass('current');
                    $(this).addClass('current');
                    carousel.carouselSwipe.slide(parseInt($(this).attr('sampleimages-index'), 10));
                }
            });

            thumbs.on('focus', function() {
            	var thumb = $(this);
                currentThumbnail = parseInt(thumb.attr('sampleimages-index'), 10);
            	if( currentThumbnail == 0 ) pageNum = 0;
            	else if( currentThumbnail == thumbNum-1 ) pageNum = maxPage;
            	else pageNum = currentThumbnail;
                if( pageNum > maxPage ) pageNum = maxPage;
                else if( pageNum < 0 ) pageNum = 0;
                activeThumbnails();
            });
        }

        function setupThumbnailGallery(swatchIndex) {
            initArrowControls();
            thumbnailGallery.find('.thumbnail.current').removeClass('current');
            thumbs.eq(swatchIndex).addClass('current');
            var propName = isRTL ? "right" : "left";
            thumbs.each(function(i) {
            	$(this).css(propName, (i * itemSize) + '%');
            });

            currentThumbnail = parseInt(swatchIndex, 10);
            currLabel.text(currentThumbnail+1);
            activeThumbnails();
        }

        function initArrowControls() {
        	if( !isShownumMoreImg ) return;
        	if(pageNum === 0) {
        		prevArrow.addClass('disabled');
        		nextArrow.removeClass('disabled');
        	} else if(pageNum === maxPage) {
        		prevArrow.removeClass('disabled');
        		nextArrow.addClass('disabled');
        	} else {
        		prevArrow.removeClass('disabled');
        		nextArrow.removeClass('disabled');
        	}
        }

		function activeThumbnails() {
			if( thumbNum <= showNum ) return;
			thumbnailsAnim = true;
			initArrowControls();
			var moveOffset = ( -1 * currentThumbnail * itemSize ) + ( itemSize * halfIndex );
			var min = 0;
			var max = (thumbNum-showNum)*itemSize*-1;
			if( moveOffset > 0 ) moveOffset = 0;
			else if( moveOffset < max) moveOffset = max;
			if( isRTL ) aniOption = { marginRight: moveOffset + '%' };
			else aniOption = { marginLeft: moveOffset + '%' };
			thumbs.stop().animate(aniOption, 500, function () {
			    thumbnailsAnim = false;
			});
		}

        function slideThumbnails() {
            if( thumbNum <= showNum ) return;
            thumbnailsAnim = true;
            initArrowControls();
            var moveOffset = ( -1 * pageNum * itemSize );
            var aniOption = null;
            if( isRTL ) aniOption = { marginRight: moveOffset + '%' };
            else aniOption = { marginLeft: moveOffset + '%' };
            thumbs.stop().animate(aniOption, 500, function () {
                thumbnailsAnim = false;
            });
        }
        /*
        if(!window.firstAction){
	        $('#selectColor').find('a').on('click', function(e) {
	        	window.firstAction = true;
	        	e.preventDefault();
				var fromEStore = $('#fromEStore').val();
				var catid = $('#catid').val();
				var catnm = $('#catnm').val();

				var modelCode = $('#modelCode').val();
				var currentColor = $('#currentColor').val();
				var thisSwatch = $(this);

				if (thisSwatch.attr('data-color') !== currentColor) {
					sendClickCode('pdp_gallery','gallery:color');
					var url = $(this).attr('data-url');
					var group = $(this).attr('data-groupcode');
					var model = $(this).attr('data-modelcode');
					var swatchColor = $(this).attr('data-color');

					// 그룹으로 묶이지 않은 색상일경우
					if (group == "" || group == null) {
						$('#currentColor').val(swatchColor);
						setupKeyVisualData(swatchColor);

					// 그룹으로 묶인 색상일 경우
					}else{
						// 모델이 동일하지 않을경우
						if (model != modelCode) {

							// e-store breadcrumb 정보가 있으면 함께 전달한다.
							var decodedCnm = $('<div/>').html(catnm).text();
							if(fromEStore == 'Y'){
								if(url.indexOf('?') == -1){
									location.href = url + '?catid=' + catid + '&catnm=' + decodedCnm;
								}else{
									location.href = url + '&catid=' + catid + '&catnm=' + decodedCnm;
								}
							}else{
								location.href = url;
							}
							return false;

						// 모델이 동일한 경우
						}else{
							$('#currentColor').val(swatchColor);
							setupKeyVisualData(swatchColor);

						}
					}
				}

	        });
        }*/

        function setupKeyVisualData(colorCode) {

			var kvArea = $('#carousel-00 ul');
			var kvData = $('#prdImgData').clone(true, true);
			var kvThumbnailArea = $('.thumbnail-visual').find('.wrap');
			var colorChip = $('#selectColor');

			// 컬러칩 하이라이트 변경
			colorChip.find('.swatch').removeClass('active');
			colorChip.find('[data-color="' + colorCode + '"]').parent().addClass('active');

			// 기존 KV 데이터 삭제 (KV전용 이미지, 갤러리)
			kvArea.find('[data-heroimagetype="KV"]').remove();
			kvArea.find('[data-heroimagetype="G"]').remove();
			kvArea.find('[data-heroimagetype="V"]').remove();

			// 기존 KV썸네일 데이터 삭제
			kvThumbnailArea.empty();

			// KV, gallery&동영상 순서대로 KV영역에 데이터 복사
			kvArea.prepend(kvData.find('[image-color-type="' + colorCode + '"]'));
			kvArea.prepend(kvData.find('[data-heroimagetype="KV"]'));


			var kvDataLength = kvArea.find('li').length;

			for ( var i = 0; i < kvDataLength; i++) {
				var dataHtml = $(kvArea.find('li')[i]);
				var dataType = dataHtml.attr('data-heroimagetype');
				var dataGalleryUrl = dataHtml.find('img').attr('gallery-image-url') + "?wid=60&hei=60";
				var dataThumbUrl = dataHtml.find('img').attr('gallery-thumb-url');

				if (dataType == "KV") {
					var kvType = dataHtml.attr('data-kvType');
					if ( kvType == "H"){
						var form = $('#kvHtmlThumb').clone();
						form.attr('sampleimages-index', i);
						kvThumbnailArea.append(form);

					}else if (kvType == "I"){
						var form = $('#kvThumb').clone();
						form.attr('sampleimages-index', i);
						form.find('img').attr('src',dataThumbUrl);
						kvThumbnailArea.append(form);
					}

				} else if (dataType == "G") {
					var form = $('#galleryThumb').clone();
					form.attr('sampleimages-index', i);
					form.find('img').attr('src',dataGalleryUrl);
					kvThumbnailArea.append(form);

				} else if (dataType == "V") {
					var form = $('#videoThumb').clone();
					form.attr('sampleimages-index', i);
					kvThumbnailArea.append(form);

				}
			}


			heroSize();

			eventBridge.on(eventDictionary.global.RESIZE, function() {
				heroSize();
			});

			function heroSize() {

				var carousel = $( ".product-img-section>.ss-carousel");
				var heros = carousel.find( ".viewer>ul>li [class*='hero'] > p");
				var herosImg = heros.find( "> img");
				var metrics = ss.metrics, width;
				if (metrics.isIE8())
					return;
				if (metrics.deviceLayoutId == 1) {
					width = carousel.outerWidth();
					carousel.outerHeight(width);
					heros.outerHeight(width);
					herosImg.outerHeight( width );
				} else if (metrics.deviceLayoutId == 2) {
					width = carousel.outerWidth() / 3 * 2;
					carousel.outerHeight(width);
					heros.outerHeight(width);
					herosImg.outerHeight( width );
				} else {
					carousel.css('height', '');
					heros.css('height', '');
					herosImg.css( 'height', '' );
				}
			}

			var heroContainer = $('.hero-module');
			var playBtns = heroContainer.find('.play-btn.popupVideo');
			var closeBtns = viewSection.find('.close-video.popupVideo');
			var vmPlayer = viewSection.find('.vm-player');

			playBtns.on('click', function(e) {
				if (!viewSection.hasClass('on'))
					viewSection.addClass('on');
				if (!vmPlayer.hasClass('on'))
					vmPlayer.addClass('on');
				viewSection[0].popAlign();
				// setTimeout(function (){viewSection[0].popAlign();}, 1);
				$('.lightbox-skrim').remove();
				$('body').append('<div class="lightbox-skrim"></div>');
				$('.lightbox-skrim').on(ss.clickEvent, function() {
					closeBtnClickHandler();
				});

				if ($(this).attr('data-view')) {
					setTimeout(function() {
						vmPlayer.find('.video-player .close-video').focus();
					}, 1);
				} else {
					setTimeout(function() {
						vmPlayer.find('.youtube-player .close-video').focus();
					}, 1);
				}

			});

			closeBtns.on(ss.clickEvent, closeBtnClickHandler);

			function closeBtnClickHandler(e) {
				if (vmPlayer.hasClass('on'))
					vmPlayer.removeClass('on');
				else
					return;

				if (viewSection.hasClass('on'))
					viewSection.removeClass('on');

				$('.lightbox-skrim').remove();

				var carousel = heroContainer.find('.ss-carousel'), index = carousel.find('.dots li.current a').attr('data-index');
				console.log('index = ' + index);
				setTimeout(function() {
					carousel.find('li[data-index="' + index + '"] a').first().focus();
				}, 461);

			}

			$(eventBridge).trigger(jQuery.Event(eventDictionary.dom.DOM_REFRESH));
			new ss.PDPStandard.PDPStandardKv();
		}

        init();

	};

	/**
	 * @class $.PDPStandard.Wow
	 * @constructor
	 * @param {Object}
	 *            params External object settings passed into the object.
	 */
    ss.PDPStandard.Wow = function (params) {

		/**
		 * Stores the top level scope. demo
		 *
		 * @property self
		 */
		var self = this;

		/**
		Hero module.

		@property heroContainer
		**/
		var heroContainer = $('.hero-module');

		/**
		Gallery module.

		@property galleryContainer
		**/
		var galleryContainer = $('.gallery-module');

		/**
		Three Sixty module.

		@property threesixtyContainer
		**/
		var threesixtyContainer = $('.threesixty-module');

		/**
		Share Popover.

		@property sharePopover
		**/
		var sharePopover;

		/**
		AddToCart Popover.

		@property addToCartPopover
		**/


		/**
		Awards Popover.

		@property awardsPopover
		**/
		var awardsPopover;

		/**
		Review Sort Popover.

		@property reviewSortPopover
		**/
		var reviewSortPopover;
		/*
		var bcImgCnt = 0;

		var flagReadyBC = true;*/

		/**
		Dom Refresh Event.

		@property domRefreshEvent
		**/
		var domRefreshEvent = jQuery.Event(eventDictionary.dom.DOM_REFRESH);

		/**
		* store the metrics to help check for changes

		@property currentMetrics
		**/
		var currentMetrics;

		var slideTiming = 300;

		/**
		Initializaiton function which runs at object instantiation time.
		Sets up the various modules, popovers and event bindings.

		@method init
		**/
		function init() {

			// WOW일때 컬러칩 active 안 되는 경우 처리
			if( $('.layout-2 #selectColor').length > 0 && $('.layout-2 #selectColor .active').length == 0 ){
				$('.layout-2 #selectColor').find('.swatch').first().addClass('active');
			}

			new ss.PDPStandard.PDPFeaturesController();
			new ss.PDPStandard.PDPAccessories();

			new ss.PDPStandard.PDPThreeSixty();
			new ss.PDPStandard.PDPGallery();
			//new ss.PDPStandard.PDPKeyVisual();

			if ($('.media-module').find('.sampleimages').length > 0) {
				new ss.PDPStandard.PDPSampleImages();
			}

			currentMetrics = ss.metrics;

			bindEvents();
			heroSize();
			throttleCarousel();

			new ss.PDPStandard.PDPCommon();
			new ss.PDPStandard.PDPeCommerceWOW();
			ss.PDPStandard.optionInitWOW();
		}

        /**
        Bind events.

        @method bindEvents
        **/
       function bindEvents() {
			ss.PDPStandard.optionMappingWOW();
			$('.media.gallery').on('click', function() {
				$('.vm-player').css('z-index', '0');
				$('.close-video').trigger('click');
				$('.close-video-player').trigger('click');
				$('.close-youtube-player').trigger('click');
			});

			$('.media.threesixty').on('click', function() {
				$('.vm-player').css('z-index', '0');
				$('.close-video').trigger('click');
				$('.close-video-player').trigger('click');
				$('.close-youtube-player').trigger('click');
			});

			$('.media.sampleimages').on('click', function() {
				$('.vm-player').css('z-index', '0');
				$('.close-video').trigger('click');
				$('.close-video-player').trigger('click');
				$('.close-youtube-player').trigger('click');
			});

			eventBridge.on(eventDictionary.pdpStandard.EVENT_HERO_SHOW, function(e, data) {
				clearTimeout(viewerInitTimer);
				heroContainer.slideDown(500, function() {
					$(eventBridge).trigger(domRefreshEvent);

				//ss.VideoPlayerHandler.init();
				});
			});

			var viewerInitTimer;
			eventBridge.on(eventDictionary.pdpStandard.EVENT_GALLERY_SHOW, function(e, data) {
				heroContainer.slideUp(500);

				if (window.fromG) {
					window.fromG = false;
					setTimeout(function() {
						if (!window.scene7) {
							var mixedMediaViewer = window.scene7 = new s7viewers.MixedMediaViewer();
							mixedMediaViewer.setContainerId("s7viewer");
							mixedMediaViewer.setParam("serverurl", imgServerUrlChk);

                            if(ss.metrics.isIE8()){
                                viewerInitTimer = setTimeout(initializationComplete, 200);
                                function initializationComplete(){
                                    if($('#s7viewer_container').width() && $('#s7viewer_container').width() !== 1280){
										//eventBridge.trigger(jQuery.Event(eventDictionary.global.RESIZE), ss.metrics);
										var container = $('.s7container'), zoomview = $('.s7zoomview');
										container.width('1280px').trigger('resize');
										zoomview.width('1280px').trigger('resize');
                                    }
                                   else{
                                        clearTimeout(viewerInitTimer);
                                        viewerInitTimer = setTimeout(initializationComplete, 200);
                                    }
                                }
                            }
							//var assetNode = { "i": { "n": "" }, "dx": "3000", "dy": "2000" }

							mixedMediaViewer.setAsset(assetJson);


							mixedMediaViewer.init();
						}
					}, 500);
				}
			});

			eventBridge.on(eventDictionary.pdpStandard.EVENT_SAMPLEIMAGES_SHOW, function(e, data) {
				clearTimeout(viewerInitTimer);
				heroContainer.slideUp(500);
			});

			eventBridge.on(eventDictionary.pdpStandard.EVENT_THREESIXTY_SHOW, function(e, data) {
				clearTimeout(viewerInitTimer);
				heroContainer.slideUp(500);
			});

            eventBridge.on(eventDictionary.global.RESIZE, function() {
                heroSize();
            });


			// Sink event for use case of orientation change during video play
			eventBridge.on(eventDictionary.videoPlayer.EVENT_SHOW_VIDEO, function() {
			// $(eventBridge).trigger(domRefreshEvent);
			// ss.VideoPlayerHandler.init();

			// $('.hero-module').first()
			//	 .css( 'background-size', 'cover' )
			//	 .css( '-webkit-background-size', 'cover' );

			});
			heroSize();

       }
	   
	   	function changeSpec() {
			var siteCode = $("#siteCode").val();
			var iaCode = $("#iaCode").val();
			var modelCode = $("#chageModelCode").val();

			$.ajax({
				//url: "/uk/api/product/specification/23050100/SM-N910FZWEBTU?mType=json",
				url: "/"+siteCode+"/api/product/specification/"+iaCode+"/"+modelCode+"?mType=json",
				success : function(data){
					if (data.xmlData.totalCount < 1) {
						$(".tech-spec-module").css("display","none");
						$(".jump-module>.jump-link-list").find("a[tag-code='specs']").parent().css("display","none");
					} else {
						$(".tech-spec-module").css("display","");
						$(".jump-module>.jump-link-list").find("a[tag-code='specs']").parent().css("display","");

						var a = data.xmlData.specList;
						var gg = data.xmlData.viewSpecList;
						var kkk =  data.xmlData.specImage;

						if (gg != null && gg != "" && gg != 'undefined') {
							$.each(gg,function(key){
								var bb = gg.viewSpecList;
								var glanceHtml="<ul aria-label='Tech Specs at a Glance'>";
								$.each(bb,function(key){
									glanceHtml += "<li aria-label='"+bb[key].attrValue+"'><div class='glance-con'><div class='"+bb[key].iconClass+" icon'></div>";
									glanceHtml += "<div class='title'>"+bb[key].attrName+"</div><div class='desc'>"+bb[key].attrValue+"</div></div></li>";
								});
								$(".tech-spec-module .glance-section").html(glanceHtml+"</ul>");
							});
						}

						if (kkk != null && kkk != "" && kkk != 'undefined') {
							$.each(kkk,function(key){
								var fileUrl = kkk.filePath;
								var fileDesc = kkk.fileDesc;
								var dimesiontHtml = "<p><img alt='Dimension of SM-A500FZKUBTU' src='"+fileUrl+"'></p>";
								$(".tech-spec-module .dimension-section").html(dimesiontHtml);
							});
						}

						var specSectionHtml="";
						var specSectionMoreHtml="";
						if (a != null && a != "" && a != 'undefined') {
							$.each(a,function(key){
								if(key<2){
									if(a[key].prdSpecAttrList.length != "0" || a[key].gsValList.length == "0"){
										specSectionHtml="<h4 class='tit'>"+a[key].schmAttNm+"</h4><ul>";
										var b = a[key].prdSpecAttrList;
										$.each(b,function(key){
											specSectionHtml += "<li><div class='spec'><h5 class='sub-tit'>"+b[key].name+"</h5>";
											var c = b[key].values;
											$.each(c,function(key){
												specSectionHtml += "<div class='desc'><p>"+c[key]+"</p></div></li>";
											});
										});
									}else{
										specSectionHtml="<h4 class='tit'>"+a[key].schmAttNm+"</h4><ul>";
										specSectionHtml += "<li><div class='spec'><h5 class='sub-tit'>"+a[key].schmAttNm+"</h5>";
										var b = a[key].gsValList;
										$.each(b,function(key){
											specSectionHtml += "<div class='desc'><p>"+b[key]+"</p></div></li>";
											var c = b[key];
											$.each(c,function(key){
											});
										});
									}
									if (key == 0){
										$(".tech-spec-module .spec-section .spec-list:eq(0)").html(specSectionHtml+"</ul></div>");
									}
									if (key == 1){
										$(".tech-spec-module .spec-section .spec-list:eq(1)").html(specSectionHtml+"</ul></div>");
									}
								}
								if(key>1){
									if(a[key].prdSpecAttrList.length != "0" || a[key].gsValList.length == "0"){
										specSectionMoreHtml+="<div class='spec-list'><h4 class='tit'>"+a[key].schmAttNm+"</h4><ul>";
										var b = a[key].prdSpecAttrList;
										$.each(b,function(key){
											specSectionMoreHtml += "<li><div class='spec'><h5 class='sub-tit'>"+b[key].name+"</h5>";
											var c = b[key].values;
											$.each(c,function(key){
												specSectionMoreHtml += "<div class='desc'><p>"+c[key]+"</p></div></li>";
											});
										});
										specSectionMoreHtml += "</ul></div>";
									}else{
										specSectionMoreHtml+="<div class='spec-list'><h4 class='tit'>"+a[key].schmAttNm+"</h4>";
										specSectionMoreHtml += "<li><div class='spec'><h5 class='sub-tit'>"+a[key].schmAttNm+"</h5>";
										var b = a[key].gsValList;
										$.each(b,function(key){
											specSectionMoreHtml += "<div class='desc'><p>"+b[key]+"</p></div></li>";
											var c = b[key];
											$.each(c,function(key){
											});
										});
										specSectionMoreHtml += "<ul></div>";
									}
								}
							});
						}
						$(".tech-spec-module .spec-section .more-spec-section").html(specSectionMoreHtml);
					}
				}, error : function(data){
				var resultMessage = "Error!";
				console.log(resultMessage);
				}
			});
		};
	
		function productFilterOption() {

			var siteCode = $("#siteCode").val();
			var iaCode = $("#iaCode").val();
			var modelCode = $("#modelCode").val();

			$.ajax({
				url: "/"+siteCode+"/api/filter/option/"+modelCode+"?mType=json&prdOptTypeId=2",
				success : function(data){
					var a = data.xmlData;
					var html;
					$.each(a, function(key){

						if(key == 0){
							html ="<p class='tit'>"+a[key].prdOptTypeTitle+"</p>";
							html += "<fieldset><legend>"+a[key].prdOptTypeTitle+"</legend>";
							html += "<ul class='carrier_ul'>";
							html += "<li><input id='carrier_"+key+"' name='carrier' type='radio' value='"+a[key].prdOptId+"' onclick='productRepModel("+a[key].prdOptId+","+a[key].prdOptTypeId+");'>";
							//html += "<li><input id='carrier_"+key+"' name='carrier' type='radio' value='"+a[key].prdOptId+"'>";
							html += "<label for='carrier_"+key+"'>"+a[key].prdOptNm+"</label></li>";
						}else{
							//html += "<li><input id='carrier_"+key+"' name='carrier' type='radio' value='"+a[key].prdOptId+"'>";
							html += "<li><input id='carrier_"+key+"' name='carrier' type='radio' value='"+a[key].prdOptId+"' onclick='productRepModel("+a[key].prdOptId+","+a[key].prdOptTypeId+");'>";
							html += "<label for='carrier_"+key+"'>"+a[key].prdOptNm+"</label></li>";
						}

					});
					//var Contracthtml = "<fieldset><ul class='aaa'><li><input id='contract_0' name='contract' type='radio' value='5'><label for='contract_0'>Contracted Phone</label></li>";
					//Contracthtml += "<li><input id='contract_1' name='contract' type='radio' value='6'><label for='contract_1'>Uncontracted Phone</label></li>";
					//Contracthtml += "</fieldset>";
					$(".imsi").append(html+"</ul></fieldset>");


				}, error : function(data){
				var resultMessage = "Error!";
				console.log(resultMessage);
				}
			});
		}
		/**
		@function heroSize
		Sets height of the hero section based upon window size
		**/
		function heroSize() {

			var hero = $('.hero-module').first();
			if (hero.hasClass('d-height')) {
				var perHeight = (parseInt(hero.attr('d-height')) * (parseInt($(window).height() / 100)));
				if (ss.metrics.device == 'mobile') {
					if (perHeight > 420)
						perHeight = 420;
					else if (perHeight < 300) {
						perHeight = 300;
					}
				}
				else {

					if (perHeight > 600)
						perHeight = 600;
					else if (perHeight < 420) {
						perHeight = 420;
					}
				}
				hero.attr('height', perHeight + 'px');
			}
			var slideHeight = hero.find('li').first().outerHeight(),
			winheight = $(window).innerHeight(), heroHeight, sampleHeroHeight;

			if (ss.metrics.device === "desktop")
				heroHeight = 600, sampleHeroHeight = 500;
			else if (ss.metrics.device === "tablet-landscape")
				heroHeight = 600, sampleHeroHeight = 500;
			else if (ss.metrics.device === "tablet-portrait")
				heroHeight = 600, sampleHeroHeight = 500;
			else
				heroHeight = 420, sampleHeroHeight = 360;
/*			if (hero.hasClass('d-height')) {
				heroHeight = hero.attr('height');
			}
			else {
				hero.css('height', heroHeight);
			}*/

			heroHeight = parseInt(heroHeight) + 'px';
			sampleHeroHeight = parseInt(sampleHeroHeight) + 'px';
			if ($('.ss_samsung.pdp_wow').length == 0) {
				if ($('.ss-carousel').hasClass('sample')) {
					$('.ss-carousel').css('height', sampleHeroHeight);
				} else {
					$('.ss-carousel').css('height', heroHeight);
				}
				$('.ss-carousel').find('[class*="hero"]').each(function() {
					if ($(this).hasClass('sample')) {
						$(this).css('height', sampleHeroHeight);
					} else {
						$(this).css('height', heroHeight);
					}
				});

				$('.sampleimages-hero .ss-carousel').css('height', $('.sampleimages-hero .ss-carousel').parent().height());
				$('.sampleimages-hero .ss-carousel').find('[class*="hero"]').each(function() {
					$(this).css('height', sampleHeroHeight);
				});

			}
			else {
				var device = ss.metrics.device;
				var ratio;

				switch (device) {
					case 'mobile':
						ratio = 1.43;
						break;
					case 'mobile-landscape':
						ratio = 0.51875;
						break;
					case 'tablet-portrait':
						ratio = 1.43;
						break;
					case 'tablet-landscape':
						ratio = 0.51875;
						break;
					case 'desktop':
						ratio = 0.51875;
						break;
				}
				var heroCC2Height = $('.hero-cc').width() * ratio;

				$('div.hero-module').height(heroCC2Height);
				$('.ss-carousel').find('[class*="hero"]').each(function() {
					$(this).height(heroCC2Height);
				});

			}
			//$('.ss-carousel').find('[class*="hero"]').css('height', heroHeight);
			$('.vm-player').css('height', heroHeight); /* ADD ADNSTYLE */
		//var winheight = $(window).innerHeight(),
		//	heroHeight = (75 * winheight) / 100;
		//
		//heroHeight = parseInt(heroHeight) + 'px';
		//$('#content').find('[class*="hero"]').css('height', heroHeight);
		}

		/**
		* Throttles carousel tabbing with a 300ms delay (default)
		*
		* @method throttleCarousel
		*/
		function throttleCarousel() {
			$('.ss-carousel .pag li a').fastTabFix();
		}



		/* ADD ADNSTYLE */

		init();
	};

	ss.PDPStandard.optionMappingWOW = function (){
		var rIndex = 0;
		var siteCode = $('#siteCode').val();
		var modelCode = $('#modelCode').val();
		var initModelCode = $('#chageModelCode').val();
		var paramModelCode = $('#ParamModelCode').val();
		if (paramModelCode !== undefined && paramModelCode != "" && paramModelCode != null) {
			$('#chageModelCode').val(paramModelCode);
			initModelCode = paramModelCode;
		}
		var url = '/' + siteCode + '/api/filter/modelList/' + initModelCode + '?mType=json';

		mappingList.option = new Array( $(".layout-3>div[class*=option]").length );

		$(".layout-3>div[class*=option]").each(function(){
			var cIndex = 1;
			if( $(this).hasClass("swatches") ){
				mappingList.option[rIndex] = new Array( $(this).find("a").length + 1 );
				mappingList.option[rIndex][0] = "color";
				$(this).find("a").each(function(){
					mappingList.option[rIndex][cIndex] = $(this).attr("data-color");
					cIndex++;
				});

			}else{
				mappingList.option[rIndex] = new Array( $(this).find("li>label").length + 1 );
				mappingList.option[rIndex][0] = $(this).find("li>input").first().attr("id").split("_")[0];
				$(this).find("li").each(function(){
				//$(this).find("li>label").each(function(){
					mappingList.option[rIndex][cIndex] = $(this).find("input[type='radio']").data('optidval');
					//mappingList.option[rIndex][cIndex] = $(this).text();
					cIndex++;
				});
			}
			rIndex++;
		});

		$.ajax({
			type: 'POST',
			url: url,
			dataType: 'json',
			async:false,
			success: function(data) {

					mappingList.product = new Array( data.xmlData.length );
					mappingList.dispNm = new Array( data.xmlData.length );
					mappingList.discontinued = new Array( data.xmlData.length ); // #299

					for(var i=0; i<data.xmlData.length; i++){
						mappingList.product[i] = new Array( data.xmlData[i].option.length + 1 );
						mappingList.dispNm[i] = new Array( data.xmlData[i].option.length + 1 );
						mappingList.discontinued[i] = new Array( data.xmlData[i].option.length + 1 ); // #299
						mappingList.product[i][0] = data.xmlData[i].mdlCd;
						mappingList.dispNm[i][0] = data.xmlData[i].dispNm;
						if(SITE_CD === 'uk'){
							mappingList.discontinued[i][0] = 'N';
						}else{
							mappingList.discontinued[i][0] = data.xmlData[i].discontinued; // #299
						}
						for(var j=0; j<data.xmlData[i].option.length; j++){
							var optionName = data.xmlData[i].option[j].prdTypeEngNm;
							for(var k=0; k<mappingList.option.length; k++){
								if(mappingList.option[k][0] == data.xmlData[i].option[j].prdTypeEngNm){
									mappingList.product[i][k+1] = data.xmlData[i].option[j].prdOptIdVal.replace('&#42;', '*');
									break;
								}
							}
						}
					}
					
					// #299
					for(var i=0; i<data.xmlData.length; i++){
						if(mappingList.product[i][0] == $('#chageModelCode').val()) {
							$('#discontinued').val(mappingList.discontinued[i][0]);
							break;
						}
					}
				},
				error: function(data) {
					console.log("API error");
				}
			});
	};

	ss.PDPStandard.optionInitWOW = function (){
		var matchFlag = false;
		if(mappingList.option[0][0] == 'color'){

			for(var i=1; i<mappingList.option[0].length; i++){
				matchFlag = false;
				for(var j=0; j<mappingList.product.length; j++){
					if(mappingList.option[0][i] == mappingList.product[j][1]){
						matchFlag = true;
						break;
					}
				}
				if(matchFlag){
					var nextInt = 1;
					$(".layout-3>#selectColor").find("a[data-color='"+mappingList.option[0][i]+"']").parent().css('opacity', 1);
					$(".layout-3>#selectColor").find("a[data-color='"+mappingList.option[0][i]+"']").parent().css('display', 'block');
					$(".layout-3>#selectColor").find("a[data-color='"+mappingList.option[0][i]+"']").css('cursor', 'pointer');
					$(".layout-3>#selectColor").find("a[data-color='"+mappingList.option[0][i]+"']").on('click', function(e) {
						$(".layout-3>#selectColor").find('.swatch').removeClass('active');
						$(this).parent().addClass('active');
						ss.PDPStandard.setPrdOptionsWOW(1, $(this).attr('data-color') );
					});
				}else{
					$(".layout-3>#selectColor").find("a[data-color='"+mappingList.option[0][i]+"']").parent().css('display', 'none');
					//$(".layout-3>#selectColor").find("a[data-color='"+mappingList.option[0][i]+"']").parent().css('opacity', 0.2);
					$(".layout-3>#selectColor").find("a[data-color='"+mappingList.option[0][i]+"']").css('cursor', 'default');
					$(".layout-3>#selectColor").find("a[data-color='"+mappingList.option[0][i]+"']").off('click');
				}
			}
		}else{
			for(var i=1; i<mappingList.option[0].length; i++){
				matchFlag = false;
				for(var j=0; j<mappingList.product.length; j++){
					if(mappingList.option[0][i] == mappingList.product[j][1]){
						matchFlag = true;
						break;
					}
				}
				if(matchFlag){
					var nextInt = i;
					$("#"+mappingList.option[0][0]+"_"+i).attr('disabled', false);
					$("#"+mappingList.option[0][0]+"_"+i).parent().css('opacity', 1);
					$("#"+mappingList.option[0][0]+"_"+i).parent().on('click', function(e) {
						ss.PDPStandard.setPrdOptionsWOW(1, $(this).parent().parent().find("input[type='radio']:checked").data('optidval') );
					});
				}else{
					$("#"+mappingList.option[0][0]+"_"+i).attr('disabled', true);
					$("#"+mappingList.option[0][0]+"_"+i).parent().css('display', 'none');
					//$("#"+mappingList.option[0][0]+"_"+i).parent().css('opacity', 0.2);
					$("#"+mappingList.option[0][0]+"_"+i).parent().off('click');
				}
			}
		}
		for(var optionTypeId=1; optionTypeId<mappingList.option.length ; optionTypeId++){
			$(".layout-3>.option-" + ((parseInt(optionTypeId, 10) + 1))).css("opacity", 1);
			var thisOptionType = $(".layout-3>.option-" + ((parseInt(optionTypeId, 10) + 1))).attr("class");
			if(thisOptionType.indexOf("swatches") >= 0){
				$('.layout-3>#selectColor').find(".swatch").each(function(){

					$(this).css('opacity', 1);
					$(this).find("a").css('cursor', 'pointer');
					$(this).find("a").off('click');

					var thisSwatch = $(this);
					var cIndex = 1;
					var optionValue = "";
					var actionFlag = true;
					var matchFlag = false;
					var arrProductFlag = new Array( mappingList.product.length );
					for(var i=0; i<arrProductFlag.length; i++){
						arrProductFlag[i] = true;
					}
					$(".layout-3>div[class*=option]").each(function(){
						if(actionFlag){
							if( $(this).hasClass("swatches") ){
								optionValue = thisSwatch.find("a").attr("data-color");
								for(var i=0; i<arrProductFlag.length; i++){
									if( mappingList.product[i][cIndex] != optionValue && arrProductFlag[i] ){
										arrProductFlag[i] = false;
									}
								}
								actionFlag = false;
							}else{
								optionValue = $(this).find("input[type='radio']:checked").data('optidval');
								for(var i=0; i<arrProductFlag.length; i++){
									if( mappingList.product[i][cIndex] != optionValue && arrProductFlag[i] ){
										arrProductFlag[i] = false;
									}
								}
							}
							cIndex++;
						}
					});
					actionFlag = true;
					matchFlag = false;
					for(var i=0; i<arrProductFlag.length; i++){
						if(arrProductFlag[i]){
							if( (mappingList.product[i][(parseInt(optionTypeId, 10) + 1)] == thisSwatch.find("a").attr("data-color") ) && !matchFlag ){
								matchFlag = true;
							}
						}
					}
					if(matchFlag){
						$(this).css('opacity', 1);
						$(this).css('display', 'block');
						$(this).find("a").css('cursor', 'pointer');
						var nextOptionTypeId = parseInt(optionTypeId, 10) + 1;
						$(this).find("a").on('click', function(e) {
							$(".layout-3>#selectColor").find('.swatch').removeClass('active');
							$(this).parent().addClass('active');
							ss.PDPStandard.setPrdOptionsWOW(nextOptionTypeId, $(this).attr("data-color"));
						});
					}else{
						//$(this).css('opacity', 0.2);
						$(this).css('display', 'none');
						$(this).find("a").css('cursor', 'default');
					}
				});
			} else {
				$(".layout-3>.option-" + ((parseInt(optionTypeId, 10) + 1))).find("li").each(function(){
					$(this).attr('disabled', false);
					$(this).css('opacity', 1);
					var cIndex = 1;
					var optionValue = "";
					var actionFlag = true;
					var matchFlag = false;
					var arrProductFlag = new Array( mappingList.product.length );
					for(var i=0; i<arrProductFlag.length; i++){
						arrProductFlag[i] = true;
					}
					$(".layout-3>div[class*=option]").each(function(){
						if(cIndex <= optionTypeId){
							if( $(this).hasClass("swatches") ){
								optionValue = $(".layout-3>#selectColor>.active").find("a").attr("data-color");
								for(var i=0; i<arrProductFlag.length; i++){
									if( mappingList.product[i][cIndex] != optionValue && arrProductFlag[i] ){
										arrProductFlag[i] = false;
									}
								}
							}else{
								optionValue = $(this).find("input[type='radio']:checked").data('optidval');
								for(var i=0; i<arrProductFlag.length; i++){
									if( mappingList.product[i][cIndex] != optionValue && arrProductFlag[i] ){
										arrProductFlag[i] = false;
									}
								}
							}
							cIndex++;
						}
					});
					matchFlag = false;
					for(var i=0; i<arrProductFlag.length; i++){
						if(arrProductFlag[i]){
							if( ( mappingList.product[i][(parseInt(optionTypeId, 10) + 1)] == $(this).find("input[type='radio']").data('optidval') ) && !matchFlag){
								matchFlag = true;
							}
						}
					}
					if(matchFlag){
						$(this).attr('disabled', false);
						$(this).css('opacity', 1);
						var nextOptionTypeId = parseInt(optionTypeId, 10) + 1;
						$(this).on('click', function(e) {
							ss.PDPStandard.setPrdOptionsWOW(nextOptionTypeId, $(this).find("input[type='radio']").data('optidval'));
						});
					}else{
						$(this).attr('disabled', true);
						$(this).css('opacity', 0.2);
						$(this).hide();
					}
				});
			}
		}
	};

	ss.PDPStandard.setPrdOptionsWOW = function(optionTypeId, optionId) {

		//마지막 옵션 선택 시
		if(optionTypeId == mappingList.option.length){
			var optionValue = "";
			var arrProductFlag = new Array( mappingList.product.length );
			for(var i=0; i<arrProductFlag.length; i++){
				arrProductFlag[i] = true;
			}
			for(var i=0; i<mappingList.option.length; i++){

				if(i < mappingList.option.length - 1){
					if(mappingList.option[i][0] == 'color'){
						optionValue = $('.layout-3>#selectColor>.active').find("a").attr("data-color");
					}else{
						optionValue = $(".layout-3").find("input[id*='"+mappingList.option[i][0]+"']:checked").data('optidval');
					}
					for(var j=0; j<arrProductFlag.length; j++){
						if( mappingList.product[j][i+1] != optionValue && arrProductFlag[j] ){
							arrProductFlag[j] = false;
						}
					}
				}else{
					optionValue = optionId;
					for(var j=0; j<arrProductFlag.length; j++){
						if( mappingList.product[j][i+1] != optionValue && arrProductFlag[j] ){
							arrProductFlag[j] = false;
						}
					}
				}
			}
			for(var i=0; i<arrProductFlag.length; i++){
				if(arrProductFlag[i]){
					// 마지막 옵션 선택 시 선택된 제픔의 displayname을 변경시켜 줌.
					$('.product-info-section').find('.product-title').text(mappingList.dispNm[i][0]);
					// #299 모델코드에 맞는 discontinued 값으로 변경
					$('#discontinued').val(mappingList.discontinued[i][0]);
					ss.PDPStandard.changeSECWOW(mappingList.product[i][0]);
					break;
				}
			}
		}

		//선택된 다음 옵션 처리
		if(optionTypeId <= mappingList.option.length - 1){
			ss.PDPStandard.initChangeSECWOW();
			$(".layout-3>.option-" + (parseInt(optionTypeId, 10) + 1)).css("opacity", 1);
			var thisOptionType = $(".layout-3>.option-" + (parseInt(optionTypeId, 10) + 1)).attr("class");
			if(thisOptionType.indexOf("swatches") >= 0){
				$('.layout-3>#selectColor').find(".swatch").each(function(){

					$(this).css('opacity', 1);
					$(this).find("a").css('cursor', 'pointer');
					$(this).find("a").off('click');

					var thisSwatch = $(this);
					var cIndex = 1;
					var optionValue = "";
					var actionFlag = true;
					var matchFlag = false;
					var arrProductFlag = new Array( mappingList.product.length );
					for(var i=0; i<arrProductFlag.length; i++){
						arrProductFlag[i] = true;
					}
					$(".layout-3>div[class*=option]").each(function(){
						if(actionFlag){
							if( $(this).hasClass("swatches") ){
								optionValue = thisSwatch.find("a").attr("data-color");
								for(var i=0; i<arrProductFlag.length; i++){
									if( mappingList.product[i][cIndex] != optionValue && arrProductFlag[i] ){
										arrProductFlag[i] = false;
									}
								}
								actionFlag = false;
							}else{
								optionValue = $(this).find("input[type='radio']:checked").data('optidval');
								for(var i=0; i<arrProductFlag.length; i++){
									if( mappingList.product[i][cIndex] != optionValue && arrProductFlag[i] ){
										arrProductFlag[i] = false;
									}
								}
							}
							cIndex++;
						}
					});
					actionFlag = true;
					matchFlag = false;
					for(var i=0; i<arrProductFlag.length; i++){
						if(arrProductFlag[i]){
							if( (mappingList.product[i][(parseInt(optionTypeId, 10) + 1)] == thisSwatch.find("a").attr("data-color") ) && !matchFlag ){
								matchFlag = true;
							}
						}
					}
					if(matchFlag){
						$(this).css('opacity', 1);
						$(this).css('display', 'block');
						$(this).find("a").css('cursor', 'pointer');
						var nextOptionTypeId = parseInt(optionTypeId, 10) + 1;
						$(this).find("a").off('click');
						$(this).find("a").on('click', function(e) {
							$(".layout-3>#selectColor").find('.swatch').removeClass('active');
							$(this).parent().addClass('active');
							ss.PDPStandard.setPrdOptionsWOW(nextOptionTypeId, $(this).attr('data-color'));
						});
					}else{
						//$(this).css('opacity', 0.2);
						$(this).css('display', 'none');
						$(this).find("a").css('cursor', 'default');
					}
					if($(this).hasClass("active") ){
						$(this).removeClass("active");
						$('#currentColor').val("");
					}
				});
				//new ss.PDPStandard.PDPStandardKv();
			} else {
				$(".layout-3>.option-" + (parseInt(optionTypeId, 10) + 1)).find("li").each(function(){
					$(this).attr('disabled', false);
					$(this).css('opacity', 1);
					var cIndex = 1;
					var optionValue = "";
					var actionFlag = true;
					var matchFlag = false;
					var arrProductFlag = new Array( mappingList.product.length );
					for(var i=0; i<arrProductFlag.length; i++){
						arrProductFlag[i] = true;
					}
					$(".layout-3>div[class*=option]").each(function(){
						if(cIndex <= optionTypeId){
							if( $(this).hasClass("swatches") ){
								if(cIndex == cIndex){
									optionValue = optionId;
								}else{
									optionValue = $(".layout-3>#selectColor>.active").find("a").attr("data-color");
								}
								for(var i=0; i<arrProductFlag.length; i++){
									if( mappingList.product[i][cIndex] != optionValue && arrProductFlag[i] ){
										arrProductFlag[i] = false;
									}
								}
							}else{
								optionValue = $(this).find("input[type='radio']:checked").data('optidval');
								for(var i=0; i<arrProductFlag.length; i++){
									if( mappingList.product[i][cIndex] != optionValue && arrProductFlag[i] ){
										arrProductFlag[i] = false;
									}
								}
							}
							cIndex++;
						}
					});
					matchFlag = false;
					for(var i=0; i<arrProductFlag.length; i++){
						if(arrProductFlag[i]){
							if( ( mappingList.product[i][parseInt(optionTypeId, 10) + 1] == $(this).find("input[type='radio']").data('optidval') ) && !matchFlag){
								matchFlag = true;
							}
						}
					}
					if(matchFlag){
						$(this).attr('disabled', false);
						$(this).css('opacity', 1);
						var nextOptionTypeId = parseInt(optionTypeId, 10) + 1;
						$(this).off('click');
						$(this).on('click',function(e) {
							ss.PDPStandard.setPrdOptionsWOW( nextOptionTypeId, $(this).find("input[type='radio']").data('optidval') );
						});
					}else{
						$(this).attr('disabled', true);
						$(this).css('opacity', 0.2);
						//aeseul.kim
						$(this).find("input[type='radio']:checked").prop("checked", false);
						$(this).find("input[type='radio']:checked").removeAttr("checked");
					}
				});

				//aeseul.kim s
				//선택한 옵션의 다음 옵션이 마지막 옵션일 경우
				//선택 가능한 마지막 항목 중 첫 번째 또는 이미 선택되어 있는 항목으로 ss.PDPStandard.setPrdOptionsWOW 실행
				if(optionTypeId == mappingList.option.length - 1){
					//이미 선택되어 있는 항목이 선택 불가 항목일 경우
					if($(".layout-3>.option-" + (parseInt(optionTypeId, 10) + 1)).find("li").find("input[type='radio']:checked").attr('data-optidval') == undefined) {
						$(".layout-3>.option-" + (parseInt(optionTypeId, 10) + 1)).find("li").each(function(){
							if($(this).attr("disabled") == undefined){
								$(".layout-3>.option-" + (parseInt(optionTypeId, 10) + 1)).find("li").find("input[type='radio']:checked").prop("checked", false);
								$(".layout-3>.option-" + (parseInt(optionTypeId, 10) + 1)).find("li").find("input[type='radio']:checked").removeAttr("checked");
								$(this).find("input[type='radio']").attr("checked", "checked");
								ss.PDPStandard.setPrdOptionsWOW( (parseInt(optionTypeId, 10) + 1), $(this).find("input[type='radio']").data('optidval') );
								return false;
							}
						});
					} else{
						ss.PDPStandard.setPrdOptionsWOW( (parseInt(optionTypeId, 10) + 1), $(".layout-3>.option-" + (parseInt(optionTypeId, 10) + 1)).find("li").find("input[type='radio']:checked").attr('data-optidval') );
					}
				}
				//aeseul.kim e
			}
		}

		// 선택된 다다음 옵션이후 처리
		if(optionTypeId <= mappingList.option.length - 2){
			for(var i=(parseInt(optionTypeId, 10) + 1); i <= mappingList.option.length; i++){
				var thisOptionType = $(".layout-3>.option-" + (parseInt(i, 10) + 1)).attr("class");
				if(thisOptionType.indexOf("swatches") >= 0){
					$('.layout-3>#selectColor').find("a").each(function(){
						$(this).off('click');
						$(this).css('opacity', 1);
						$(this).css('cursor', 'default');
					});
					$('.layout-3>#selectColor').css('opacity', 0.2);
				} else {
					$(".layout-3>.option-" + (parseInt(i, 10) + 1)).find("li").each(function(){
						$(this).attr('disabled', true);
						$(this).css('opacity', 1);
					});
					$(".layout-3>.option-" + (parseInt(i, 10) + 1)).css('opacity', 0.2);
				}
			}
		}

		return false;
	};

	ss.PDPStandard.initChangeSECWOW = function(){

		$('.module-wrap').find('#eCommerceFlag').html('');

		$('.module-wrap').find('#seeAllAvailability').css('display', 'none');

		$('.module-wrap').find('#quickBuy').css('display', 'none');

		$('.module-wrap').find('#addToCart').css('style', '');
		$('.module-wrap').find('#addToCart').css('display', 'none');
		$('.module-wrap').find('#addToCartDisable').css('display', 'none');

		$('.module-wrap').find('#stockLevelStatus').text('');

		$('.module-wrap').find('#promotionPrice').text('');
		$('.module-wrap').find('#price').text('');

		$('.module-wrap').find('#mileage').html('');

		/*
		$('.module-wrap').find('#freegiftData').find('img').attr('src', '');
		$('.module-wrap').find('#freegiftData').find('img').attr('alt', '');
		$('.module-wrap').find('#freegiftLinkImg').attr('href', '');
		$('.module-wrap').find('#freegiftLinkTitle').html('');
		$('.module-wrap').find('#freegiftLinkTitle').attr('href', '');
		$('.module-wrap').find('#freegiftDataDesc').text('');
		*/
		$('.module-wrap').find('#freegiftOutOfStock').hide();
		$('.module-wrap').find('#freegift').hide();
		$('.module-wrap').find('.offers-bar-module.inner').hide();
		$('.module-wrap').find('#offerbelow').hide();

		if(SITE_CD == 'fr'){
			$('.module-wrap').find('.eco-tax').empty();
		}

		$('.module-wrap').find('#promotionDesc').html('');
		$('.module-wrap').find('#promotionDescRed').html('');

		$('.module-wrap').find('.ecom-text>.promotion').html('');

		$('.module-wrap').find('.ecom-text .point').hide();
		
		//aeseul.kim #94 0820
		var tempHtml = $('#seeAllAvailability').data('bs.popover')['options']['content'];
		$('#wtb').html(tempHtml);
		$('#wtb').find('.buy-online > ul').empty();
		$('#seeAllAvailability').data('bs.popover')['options']['content'] = $('#wtb').html();
	};

	ss.PDPStandard.changeSECWOW = function(modelCode) {
		$('#chageModelCode').val(modelCode);
		ss.PDPStandard.initChangeSECWOW();

		var modelCode = $('#modelCode').val();
		var modelName = $('#modelName').val();
		var chageModelCode = $("#chageModelCode").val();
		var displayName = $('#displayName').val();
		var discontinued = $('#discontinued').val();
		var priceDisplay = $('#priceDisplay').val();
		var oldProductYN = $('#oldProductYN').val();
		var prdPrice = $('#prdPrice').val();
		var prdPriceDiscl = $('#prdPriceDiscl').val();
		var rrpDisplay = $('#rrpDisplay').val() == "true" ? true : false;
		var quickByButton = $('#quickByButton').val() == "true" ? true : false;
		var usePreOrder = false;
		var whereToBuyBtnUse = false;
		var addToCart;
		var btnCount = 0;
		var whereToBuyBtn = $('#whereToBuyBtnYN').val();
		var whereToBuyBtnPDP = $('#whereToBuyBtnPDPYN').val();
		var onlineRetailerYN = $('#onlineRetailerYN').val();
		var storeLocatorYN = $('#storeLocatorUse').val() == "true" ? 'Y' : 'N';
		var lightPdpFl = $('#lightPdpFl').val();
		var typeCd = $('#typeCode').val();
		var lightPdpWhereToBuyFl = $('#lightPdpWhereToBuyFl').val() == "true" ? true : false;

		function init() {
			btnCount = 0;
			$('.module-wrap').find('#seeAllAvailability').hide();
			$('.module-wrap').find('#shopNowButton').css('display', '');
			//버튼 1개 이상인 경우로 변경
			$('.module-wrap').find('#multiShopButton').attr('class', 'nor-btnList');
			//$('#multiShopButton').hide();
			if ($('a.clearfix.toggle').is(':visible')) {
				if ($('a.clearfix.toggle').hasClass('link-toggled')) {
					$('a.clearfix.toggle').next('.nor-btnList').show();
				}
				else {
					$('a.clearfix.toggle').next('.nor-btnList').hide();
				}
			}
			else {
				$('a.clearfix.toggle').next('.nor-btnList').show();
			}

            // where to buy data setting.
            if(SITE_CD != 'ar' || SITE_CD != 'py' || SITE_CD != 'uy') {
            	onlineRetailer();
            }

			getRealTimeProductSimpleInfo();
		}

		// where to buy관련.
        function onlineRetailer(){
			var buyOnlineUseSite = $("#buyOnlineUseSite").val();
			var buyInStoreUseSite = $("#buyInStoreUseSite").val();
			var paramModelCode = $("ParamModelCode").val();

        	var param = {};

        	param.siteCode	 = $("#siteCode").val();
        	//param.modelCode	 = $("#modelCode").val();
			if (paramModelCode !== undefined && paramModelCode != "" && paramModelCode != null) {
				param.modelCode	 = $("ParamModelCode").val();
			initModelCode = paramModelCode;
			}else{
				param.modelCode	 = $("#chageModelCode").val();
			}
			//param.modelCode	 = $("#chageModelCode").val();
	        param.chageModelCode = $("#chageModelCode").val();
        	param.modelName	 = $("#modelName").val();
        	param.displayName= $("#displayName").val();
        	param.iaCode	 = $("#iaCode").val();
        	param.entry 	 = "product";
        	param.groupName  = $("#group").val();
        	param.typeName	 = $("#type").val();
        	param.subTypeName	 = $("#subtype").val();

			if(buyOnlineUseSite.indexOf(',' + SITE_CD + ',') >= 0 && buyInStoreUseSite.indexOf(',' + SITE_CD + ',') >= 0){ // online retailer, storelocator
				onlineRetailerInfoNew(1, param);
			} else if (buyOnlineUseSite.indexOf(',' + SITE_CD + ',') >= 0) { // online retailer
				onlineRetailerInfoNew(2, param);
			} else if (buyInStoreUseSite.indexOf(',' + SITE_CD + ',') >= 0) { // storelocator
				onlineRetailerInfoNew(3, param);
			}
        }

		function bindEvents() {
			$('#quickbuybutton').off('click');
			$('#quickbuybutton').on('click', function(event) {
				var $layer = $('#popup_alert_new').first();
				$(".layer_popup").hide();
				$layer.parent().show();
				$('.lightbox-skrim').remove();
				$('body').append('<div class="lightbox-skrim"></div>');
				var l = parseInt(($('body').width() - $layer.width())/2);
				var t = parseInt( $(window).scrollTop() + (($(window).height()-$layer.height())/2) );
				if($(window).height()<$layer.height()){
					t = $(window).scrollTop() + 10;
				}
				$layer.css({ "top":t+"px", "left":l+"px"});

				// 레이어팝업 열 때 선택된 모델로 check / active 재설정
				for(var i = 0; i < mappingList.product.length; i++){
					if(mappingList.product[i][0] == $("#chageModelCode").val()){
						for(var j = 1; j < mappingList.product[i].length; j++){
							if($(".option-" + j).hasClass("swatches")){
								$(".option-" + j).find(".swatch").removeClass("active");
								$(".option-" + j).find("a[data-color='"+ mappingList.product[i][j] +"']").parent().addClass("active");
							}else{
								$(".option-" + j).find("input[type='radio']:checked").prop("checked", false);
								$(".option-" + j).find("input[data-optidval='"+ mappingList.product[i][j] +"']").prop("checked", true);
							}
						}
					}
				}
				//aeseul.kim #94 0820
				//ss.PDPStandard.optionInitWOW();
				ss.PDPStandard.changeSECWOW($('#chageModelCode').val());
				event.stopPropagation();
	        });

			$('.module-wrap').find('#quickBuy').off("click");
			$('.module-wrap').find('#quickBuy').on("click", function() {
				console.log("quickBuy");
				estore.buyNow({productCode: $("#chageModelCode").val(),quantity: '1'}, function(data) {
					if (data && data.resultCode == "0000") {
						if (usePreOrder) {
							sendClickCode('wishlist', 'pre order now');
						} else {
							//sendClickCode('wishlist', 'quick buy');
							//sendScBasket(modelName,modelCode);
							sendScBasket($("#modelName").val(),$("#chageModelCode").val());
						}
						location.href = "http://" + STORE_DOMAIN + "/" + SITE_CD + "/ng/cartAndCheckout";
						return false;
					}
				});
			});


			// Go To Check Out에 대한 옵니쳐 적용
			$('#addCartList').find('a').attr('onclick',"sendScView(\';"+ modelName + "\');");

			$('#addToCart').off('show.bs.popover hidden.bs.popover shown.bs.popover');
			addToCart = new ss.Popover('#addToCart:not(.btngrey)', {skipBoot: true,interOp2Hide: function(obj) { /*obj.toggle();*/},interOp2Show: function(obj) {

				//Analytics_tagging
				sendScAddPrd(modelName,$("#chageModelCode").val());

				// 미니카트 숨김처리
				navigation.miniCartHide();

				// addToCart 레이어팝업이 열려 있으면 호출 안함.
				if ($('.cart-popover').length <= 1) {

					estore.addCart({productCode: $("#chageModelCode").val(),quantity: '1'}, function(data) {
						if (data && data.resultCode == "0000") {

							$.Auth.getGlobalCartCount(function(data) {
								console.info("addCart", data);
							});

							$('#cartCount').text(pdpMsg.addedtocart);
							setTimeout("$('#cartCount').text(pdpMsg.addtocart);", 1000);

							//$('.jump-module').find('#jumpToCartArea').removeClass('on');

							obj.showOnly();

							ss.commonWidgets.setDefaultFocusInWidget( ".popover .cart-popover" );

							if (SITE_CD == 'uk'
									&& TMAN != undefined && TMAN ) {
								TMAN.addParams('samsunguk', {currency: 'EUR',conversion_type: 'purchase_indirect_online',product_prices: '0.0'});
								TMAN.doTags(TMAN.position.CUSTOM_2, true);
							} else if (SITE_CD == 'de'
									&& TMAN != undefined && TMAN ) {
								TMAN.addParams('samsungde', {currency: 'EUR',conversion_type: 'purchase_indirect_online',product_prices: '0.0'});
								TMAN.doTags(TMAN.position.CUSTOM_2, true);
							} else if ( SITE_CD == 'pt'
									&& TMAN != undefined && TMAN ) {
								TMAN.addParams('samsungpt', {currency: 'EUR',conversion_type: 'purchase_indirect_online',product_prices: '0.0'});
								TMAN.doTags(TMAN.position.CUSTOM_2, true);
							}

						}
					});
				}

			},tapProtect: true,placement: 'auto top',content: $('#addCartList').html(),html: true,container: '.body_wrapper',animation: false}); /* ADD ADNSTYLE */
		}

		function jumpToBindEvents(){
			$('.jump-module').find('#jumpToQuickbuybutton').off('click');
			$('.jump-module').find('#jumpToQuickbuybutton').on('click', function() {
				//sendClickCode('jumpto','jump to:buy now');
				$('#quickbuybutton').trigger('click');
			});

			if( SITE_CD != 'ca' && SITE_CD != 'ca_fr' && SITE_CD != 'tr' && !(SITE_CD== 'br' && typeCd == '01030000')) {
				// E-store 호출 완료후 Where To Buy 이벤트 처리
				//new ss.Popover('.buy-button', {placement: 'auto top',content: $('.whereBox-content').html(),html: true,container: '#shop-popover-container',lightbox: 'true'});
				//new ss.Popover('.buy-button-1', {placement: 'auto top',content: $('.whereBox-content').html(),html: true,container: '#shop-popover-container',lightbox: 'true'});
			}

			//aeseul.kim #94 0820
			//where to buy button 버튼 클릭 처리
			// jump To where to buy button 버튼 클릭 처리
/*			$('.buy-button, .buy-button-1').off('click');
			$('.buy-button, .buy-button-1').on('click', function() {
				// TMAN 처리
				if (SITE_CD == 'uk'
						&& TMAN != undefined && TMAN ) {
					TMAN.addParams('samsunguk', {currency: 'EUR',conversion_type: 'purchase_indirect_online',product_prices: '0.0'});
					TMAN.doTags(TMAN.position.CUSTOM_1, true);
				} else if (SITE_CD == 'de'
						&& TMAN != undefined && TMAN ) {
					TMAN.addParams('samsungde', {currency: 'EUR',conversion_type: 'purchase_indirect_online',product_prices: '0.0'});
					TMAN.doTags(TMAN.position.CUSTOM_2, true);
				} else if ( SITE_CD == 'pt'
						&& TMAN != undefined && TMAN ) {
					TMAN.addParams('samsungpt', {currency: 'EUR',conversion_type: 'purchase_indirect_online',product_prices: '0.0'});
					TMAN.doTags(TMAN.position.CUSTOM_2, true);
				}

				if( SITE_CD == 'ca' || SITE_CD == 'ca_fr' ) {
					pswtb.sandbox.openWTB(this, 'CA_'+modelCode);
					return;
				}

				if(SITE_CD== 'br' && typeCd == '01030000'){
					window.open("http://www.samsung.com.br/lojas/");
					return;
				}

				if(SITE_CD== 'tr'){
					window.open("http://www.samsung.com/tr/magazalar/");
					return;
				}

				var buyOnlineUseSite = $("#buyOnlineUseSite").val();
				var buyInStoreUseSite = $("#buyInStoreUseSite").val();

				var param = {};

	        	param.siteCode	 = $("#siteCode").val();
	        	param.modelCode	 = $("#modelCode").val();
	        	param.modelName	 = $("#modelName").val();
	        	param.displayName= $("#displayName").val();
	        	param.iaCode	 = $("#iaCode").val();
	        	param.entry 	 = "product";
	        	param.groupName  = $("#iaUrlNamePath").val().split("|")[0];
	        	param.typeName	 = $("#iaUrlNamePath").val().split("|")[1];
	        	param.subTypeName	 = $("#iaUrlNamePath").val().split("|")[2];

				if(SITE_CD == 'ar') {
					if(buyOnlineUseSite.indexOf(',' + SITE_CD + ',') >= 0 && buyInStoreUseSite.indexOf(',' + SITE_CD + ',') >= 0){ // online retailer, storelocator
						onlineRetailerInfo(1, param);
					} else if (buyOnlineUseSite.indexOf(',' + SITE_CD + ',') >= 0) { // online retailer
						onlineRetailerInfo(2, param);
					} else if (buyInStoreUseSite.indexOf(',' + SITE_CD + ',') >= 0) { // storelocator
						onlineRetailerInfo(3, param);
					}
				}

				if (buyInStoreUseSite.indexOf(',' + SITE_CD + ',') >= 0 && onlineRetailerMsg.outLinkUrl == "") { // storelocator
					eventBridge.trigger(jQuery.Event(eventDictionary.location.REQUEST_STORES));
				}

			});
			*/
		}

		// eCommerce 실시간 상품 정보 조회 처리
		function getRealTimeProductSimpleInfo() {
			// 스토어 사용국가이고 제품이 판매대상인지
			if (USE_ESTORE && discontinued != "Y") {

				// old product 일 경우
				if (oldProductYN == 'Y') {
					$('.module-wrap').find('#promotionDescRed').empty();
					$('.module-wrap').find('#promotionDescRed').html(pdpMsg.oldProductMsg);
					$('.jump-module').find('#jumpToQuickbuybutton').css('display','');

					notEcommerceSite();

					hiddenBuyingOptionBtn();

					oneButton();

					new ss.PDPStandard.PDPJumpModule();

					bindEvents();

					jumpToBindEvents();

				}else{

					estore.getRealTimeProductSimpleInfo({productCode: $("#chageModelCode").val() }, function(data) {

						console.info('estore_data :: ', data);

						if(data.flagSoldOut == "Y" && SITE_CD == "nl") {
							$("#addToCartDisable > span[id='cartCount']").text("Tijdelijk niet op voorraad in de Shop");
							$("#jumpToAddToCartDisable").text("Tijdelijk niet op voorraad in de Shop");
						}

						if (data && data.resultCode == "0000") {
							
							// UK 사이트는 Where to buy 항상 노출
							if(SITE_CD === 'uk'){
								data.whereToBuyBtnYn = 'Y';
								if(data.price === '£0.00'){
									data.price = '';
								}
							}

							// flag 처리
							if(data.flags && data.flags != ""){

								var flag = data.flags;
								flag = flag.split(',');

								if (flag.length) {
									var appendData = '';
									for (var index = 0; index < flag.length; index++) {
										var flagVal =  $.trim(flag[index]);
										if(flagVal != null && flagVal != ""){

											if (index != 0) {
												appendData += ' <span class="spacer">|</span> ';
											}
											appendData += flagVal;
										}
									}
									$('.module-wrap').find('#eCommerceFlag').html(appendData);
								}
							}

							// 1. 버튼 노출 여부
							// quick buy 와 add to basket 버튼
							$('.module-wrap').find('#seeAllAvailability > span').text(pdpMsg.otherRetailers);
							if (data.buyNowBtnYn == 'Y' && data.cartBtnYn == 'Y') {
								if (!quickByButton) {
									// 예약 상품인 경우 버튼 텍스트 변경
									if (data.flagPreOrder == 'Y') {
										usePreOrder = true;
										$('.module-wrap').find('#quickBuy').children().text(pdpMsg.preordernow);
										$('.module-wrap').find('#quickBuy').css('display', '');
									}else{
										$('.module-wrap').find('#quickBuy').css('display', '');
									}
									$('.module-wrap').find('#addToCart').css('display', 'none');
									btnCount ++;

								} else {
									$('.module-wrap').find('#addToCart').attr('style', '');
									$('.module-wrap').find('#addToCart').removeClass('btngrey');
									$('.module-wrap').find('#quickBuy').css('display', 'none');
									btnCount ++;
								}

							}else if(data.buyNowBtnYn == 'Y'){
								// 예약 상품인 경우 버튼 텍스트 변경
								if (data.flagPreOrder == 'Y') {
									usePreOrder = true;
									$('.module-wrap').find('#quickBuy').children().text(pdpMsg.preordernow);
									$('.module-wrap').find('#quickBuy').css('display', '');

								}else{
									$('.module-wrap').find('#quickBuy').css('display', '');
								}
								$('.module-wrap').find('#addToCart').css('display', 'none');
								btnCount ++;

							}else if(data.cartBtnYn == 'Y'){
								$('.module-wrap').find('#addToCart').attr('style', '');
								$('.module-wrap').find('#addToCart').removeClass('btngrey');
								$('.module-wrap').find('#quickBuy').css('display', 'none');
								btnCount ++;

							}else{
								if(SITE_CD == 'au' || SITE_CD == 'br'){
									$('.module-wrap').find('#quickBuy').css('display', 'none');
									$('.module-wrap').find('#addToCart').css('display', 'none');
								} else {
								// out of stock일 경우 버튼은 노출 시키되 동작 안되도록 수정.
								$('.module-wrap').find('#addToCartDisable').css('display', '').css('cursor', 'default').css('background', '#666').addClass('btngrey'); // background 흑백 & 기본 커서로 수정.
								$('.module-wrap').find('#addToCart').css('display', 'none');
								//$('.module-wrap').find('#addToCart').unbind('click');	// 클릭 안되게 수정.
								btnCount ++;

								$('.module-wrap').find('#quickBuy').css('display', 'none');
								}
							}


							// 2. where to buy 버튼
							if(whereToBuyBtn == 'Y'
								&& whereToBuyBtnPDP == 'Y'
								&& data.whereToBuyBtnYn == 'Y'
									&& (onlineRetailerYN == 'Y' || storeLocatorYN == 'Y' )
									&& (lightPdpFl == 'N' || lightPdpWhereToBuyFl == true)){

								if( SITE_CD == 'br' &&	($('#addToCart').css('display') != 'none'|| $('#quickBuy').css('display') != 'none')){
									$('.module-wrap').find('#seeAllAvailability').css('display', 'none');
									whereToBuyBtnUse = false;
								}else{
									$('.module-wrap').find('#seeAllAvailability').css('display', '');
									whereToBuyBtnUse = true;
									btnCount ++;
								}
								//$('.module-wrap').find('#seeAllAvailability').css('display', '');
								//whereToBuyBtnUse = true;
								//btnCount ++;
							}else{
								$('.module-wrap').find('#seeAllAvailability').css('display', 'none');
							}

							// 3.재고량에 따른 문구 표현
							if (data.stockLevelStatusDisplay && data.flagPreOrder != 'Y' ) {
								$('.module-wrap').find('#stockLevelStatus').text(data.stockLevelStatusDisplay);
							}

							// 4. 할인가격 표시
							if (data.promotionPrice != undefined && data.promotionPrice != null && data.promotionPrice != "") {
								$('.module-wrap').find('#promotionPrice').text(data.promotionPrice);

								if(SITE_CD == 'au')
									if(modelCode=='WW90H9600EW/SA' || modelCode=='GT-I9505ZKAXSA')
									ecommerceData.product[0].price=data.promotionPrice;

								if (data.price) {
									$('.module-wrap').find('#price').text(data.price);
								}
							} else {
								// 가격 표시
								if ( data.price ) {
									$('.module-wrap').find('#promotionPrice').text(data.price);

									if(SITE_CD == 'au')
										if(modelCode=='WW90H9600EW/SA' || modelCode=='GT-I9505ZKAXSA')
										ecommerceData.product[0].price=data.price;
								}
							}

							// 5. 마일리지 표시
							if (data.productMileage != "0.0" && data.productMileage != "") {
								var mileage = '(<strong class="cb">' + data.productMileage + '</strong> Points';
								if (data.promotionMileage != "0.0" && data.promotionMileage != "") {
									mileage += ' + <strong class="cr">' + data.promotionMileage + '</strong> Points)';
								} else {
									mileage += ')';
								}
								$('.module-wrap').find('#mileage').html(mileage);
							}

							// 6. freeGift 정보 표시
							if (data.promotionData.length > 0) {
								var freegift = data.promotionData[0];

								// freegift 이미지 처리
								if (freegift.url && freegift.url != "") {
									$('.module-wrap').find('#freegiftData').find('img').attr('src', freegift.url + '?fmt=png-alpha');

									if(freegift.displayName){
										$('.module-wrap').find('#freegiftData').find('img').attr('alt', freegift.displayName);
									}

									if (freegift.code && freegift.code != "") {
										$('.module-wrap').find('#freegiftLinkImg').attr('href', '/' + SITE_CD + '/c/p/' + freegift.code);
									}else{
										$('.module-wrap').find('#freegiftLinkImg').attr('href', 'javascript:void(0)');
									}

								}

								// title 처리
								if (freegift.title && freegift.title != "" ) {
									$('.module-wrap').find('#freegiftLinkTitle').html(freegift.title + '&nbsp;<span class="icon-link-play"></span>');

								}

								// title 링크처리
								if(freegift.code  && freegift.code != ""){
									$('.module-wrap').find('#freegiftLinkTitle').attr('href', '/' + SITE_CD + '/c/p/' + freegift.code);

								}else{
									$('.module-wrap').find('#freegiftLinkTitle').attr('href', 'javascript:void(0)');

								}

								if (freegift.description) {
									$('.module-wrap').find('#freegiftDataDesc').text(freegift.description);
								}

								if (freegift.outOfstockInfo) {
									$('.module-wrap').find('#freegiftOutOfStock').show();
								}

								$('.module-wrap').find('#freegift').show();
								$('.module-wrap').find('.offers-bar-module.inner').show();
								$('.module-wrap').find('#offerbelow').show();
							}

							// 7. eco tax 정보 및 E-Store 링크정보 (국가가 프랑스일 경우에만 노출)
							if(SITE_CD == 'fr'){

								// E-Store 링크정보
								if(data.buyNowBtnYn == 'Y' || data.cartBtnYn == 'Y'){
									$('.module-wrap').find('.ecomText').append('<p class="eco-tax"><a href="/fr/shop/contact/" target="_blank">Livraison gratuite et contact Shop</a></p>');
								}
								// copyrightFee
								if(data.copyrightFee != undefined && data.copyrightFee != null && data.copyrightFee != ""){
									var copyrightFeeURL = '/fr/shop/static/link_tax_p.html#copyright_tax';
									var ecoTaxData = '<p class="eco-tax">';
									ecoTaxData += '(Dont ' + data.copyrightFee + ' <a href="' + copyrightFeeURL + '" target="_blank" onclick="window.open(this.href, '+ "'_blank','scrollbars=yes, width=470, height=600'" + '); return false;" >de copie privée</a>)';
									ecoTaxData += '</p>';
									$('.module-wrap').find('.ecomText').append(ecoTaxData);
								}

								// weeeFee
								if(data.weeeFee != undefined && data.weeeFee != null && data.weeeFee != ""){
									var weeeFeeURL = '/fr/shop/static/link_tax_p.html#eco_tax';
									var ecoTaxData = '<p class="eco-tax">';
									ecoTaxData += '(Dont ' + data.weeeFee + ' <a href="' + weeeFeeURL + '" target="_blank" onclick="window.open(this.href, '+ "'_blank','scrollbars=yes, width=470, height=600'" + '); return false;" >éco-participation</a>)';
									ecoTaxData += '</p>';
									$('.module-wrap').find('.ecomText').append(ecoTaxData);
								}

							}

							// 8. 예약 안내 문구 노출
							if(data.flagPreOrder == 'Y'){
								if (data.reservedDeliveryStartDate) {
									$('.module-wrap').find('#promotionDesc').empty();
									$('.module-wrap').find('#promotionDesc').html(pdpMsg.scheduledToShipOn + " " + data.reservedDeliveryStartDate);
									$('.module-wrap').find('#promotionDesc').parent('div.point').css('display','');
									if(SITE_CD == 'fr'){
										var pointHtml = $('.module-wrap').find('#promotionDesc').parent('div.point').html();
										var ecoTaxHtml = $('.module-wrap').find('.eco-tax').html();
										//$('.module-wrap').find('#promotionDesc').parent('div.point').remove();
										$('.module-wrap').find('#promotionDesc').parent('div.point').hide();
										$('.module-wrap').find('.eco-tax').html(ecoTaxHtml + pointHtml);
									}
								}
							}

							// 9. 별점 정보 처리
							/*
							var starStyle = $('.overall-section>.owner-review>.score>.star-score p').attr('style');
							var reviewCount = $('#reviews>.module-heading>.heading-alt-text').text().replace(/^.*\(([0-9]+)\).*$/g,'$1');
							var reviewText = $('#reviews>.module-heading>.heading-text').text();

							if(starStyle != null && starStyle != ""){
							    var ratingHtml = '<div class="point"><p style="';
							    ratingHtml += starStyle;
							    ratingHtml += '"></p></div><p class="reviews"> <a href="#">'+ reviewCount + ' ' + reviewText + '</a> </p>';
								$('.module-wrap').find('.usp-module>.star-score').html(ratingHtml);
								$('.module-wrap').find('.usp-module>.star-score').find('a').off('click');
								$('.module-wrap').find('.usp-module>.star-score').find('a').on('click', function(){
									var shopGnbHeight = $('.select-category').outerHeight();
									if(shopGnbHeight == null || shopGnbHeight == ""){
										shopGnbHeight = 0;
									}
									ss.htmlBody.animate({
										scrollTop : ( ss.metrics.elemTop( $('#reviews') ) - $('.jump-module').outerHeight() - shopGnbHeight )
									}, 1000);
								});
							}
							*/

							// 10. Promotion 문구 처리
							if (data.promotionDescription != null && data.promotionDescription != "") {
								var promotion = '<ul><li>';
								promotion += data.promotionDescription;
								promotion += '</li></ul>';
								$('.module-wrap').find('.ecomText>.promotion').html(promotion);
							}

							// 포인트 및 예약안내 정보 없을경우 해당 영역 삭제
							if((data.productMileage == "0.0" || data.productMileage == "") && data.flagPreOrder != 'Y'){
								$('.module-wrap').find('.ecomText .point').hide();
							}

							// sales status 가 end 일 때 특정 문구 출력 (fr 사이트만 해당)
							if(SITE_CD == 'fr' && data.salesStatus == 'SALES_END'){
								$('.module-wrap').find('#stockLevelStatus').text(data.saleEndDesc);
							}

						} else {
							notEcommerceSite();
						}
						$('.jump-module').find('#jumpToQuickbuybutton').css('display','');

						hiddenBuyingOptionBtn();

						oneButton();

						new ss.PDPStandard.PDPJumpModule();

						bindEvents();

						jumpToBindEvents();

					});

				}
			} else {

				// old product 일 경우
				if (oldProductYN == 'Y') {
					$('.module-wrap').find('#promotionDescRed').empty();
					$('.module-wrap').find('#promotionDescRed').html(pdpMsg.oldProductMsg);
				}

				$('.jump-module').find('#jumpToQuickbuybutton').css('display','');

				notEcommerceSite();

				hiddenBuyingOptionBtn();

				oneButton();

				new ss.PDPStandard.PDPJumpModule();

				bindEvents();

				jumpToBindEvents();
			}

		}

		//eCommerce Cart 건수 조회
		// 현재 사용안함
		function getCartCount() {
			estore.getCartCount(function(data) {
				console.info("cartCount", data);
				if (data && data.resultCode == "0000") {

				}

			});
		}

		//버튼이 한개일 경우
		function oneButton() {
/*			if(btnCount <= 1){
				$('#shopNowButton').hide();
				$('#multiShopButton').attr('class', 'nor-btnList-etc');
				$('#multiShopButton').css('display', '');
			}*/

			//버튼이 한개 미만일 경우
			if(btnCount < 1){
				$('.jump-module .info-section').addClass('no-button');
			}

			// E-store 버튼이 두개일경우 높이값 동기화
			//var norBtn = $('.product-info-wrap > .product-info-section > .module-wrap > .ecom-module > .nor-btnList > .nor-button');
            //if(norBtn.length === 2) ss.CompareHeight.init(norBtn.eq(0), norBtn.eq(1), false, false, true, true, true, true);
            var norBtnCon = $('.popup_wrap > .product-info-section > .module-wrap > .ecom-module > .nor-btnList'), norBtn = norBtnCon.find('> .nor-button');

			var btnNum = norBtn.length;
			norBtn.each(function() {
				if (($(this).attr('style') == 'display: none;') || ($(this).attr('style') == 'display:none')) {
					btnNum = btnNum-1;
				}
			});

			if($('#addToCartDisable').length > 0){
				if($('#addToCartDisable').attr('style').indexOf('display: none;') > 0 || $('#addToCartDisable').attr('style').indexOf('display:none') > 0) {
					btnNum = btnNum-1;
				}
			}

            norBtnCon.addClass('num-'+btnNum);
		}

		//E-Store 사이트가 아닌경우.
		function notEcommerceSite() {

			// 사용하지 않는 버튼 제거
			//$('.module-wrap').find('#quickBuy').remove();
			//$('.module-wrap').find('#addToCart').remove();
			$('.module-wrap').find('#quickBuy').css('display','none');
			$('.module-wrap').find('#addToCart').css('display','none');

			// 사용하지 않는 영역 제거.
			//$('.module-wrap').find('.ecom-text .point').remove();
			$('.module-wrap').find('.ecomText .point').hide();

			//제품의 특성을 나타내는 아이콘 노출
			var flag = $('#productIconTypeCode').val();
			if (flag == 'C') {
				$('.module-wrap').find('#eCommerceFlag').html(pdpMsg.flagComingSoon);
			} else if (flag == 'E') {
				$('.module-wrap').find('#eCommerceFlag').html(pdpMsg.flagEvnet);
			} else if (flag == 'H') {
				$('.module-wrap').find('#eCommerceFlag').html(pdpMsg.flagHot);
			} else if (flag == 'N') {
				$('.module-wrap').find('#eCommerceFlag').html(pdpMsg.flagNew);
			}


			// 가격정보 노출
			if (rrpDisplay && priceDisplay == 'Y' ) {

				if (prdPrice != undefined && prdPrice != null && prdPrice != "") {

					$('.module-wrap').find('#promotionPrice').text(prdPrice);
					//$('.module-wrap').find('#jumpToPrice').text(prdPrice);

					if(prdPrice != undefined && prdPriceDiscl != null && prdPriceDiscl != ""){
						$('.module-wrap').find('.price-dec p').html(prdPriceDiscl);
					}

				} else {
				//ERP price
				}
			}

			if(whereToBuyBtn == 'Y'
				&& whereToBuyBtnPDP == 'Y'
				&& ( onlineRetailerYN == 'Y' || storeLocatorYN == 'Y' || SITE_CD == "cn" || SITE_CD == "ca" || SITE_CD == "ca_fr")
				&& (lightPdpFl == 'N' || lightPdpWhereToBuyFl == true)){
				$('.module-wrap').find('#seeAllAvailability').css('display', '');
				$('#jumpToSeeAllAvailability').css('display','');
				whereToBuyBtnUse = true;
				btnCount++;

			}else{
				//$('.module-wrap').find('#seeAllAvailability').remove();
				$('.module-wrap').find('#seeAllAvailability').css('display','none');
			}


		}

		function hiddenBuyingOptionBtn(){


/*			if (modelCode == 'SM-G900FZDABTU'
				|| (SITE_CD == 'jp' && typeCd == '05020000')) {

				// buying option 노출 안함.
				$('#seeAllAvailability').hide();
				if(whereToBuyBtnUse){
					btnCount --;
				}
			}*/

		}


		// E-Store data 노출 중단 (초기화)
		// 현제 사용안함
		function notUseEcommerce() {
			console.info("eCommerce 사용안함");

			//PRE-ORDER NOW 를 quick buy 로 초기화
			$('.module-wrap').find('#quickBuy').children().text(pdpMsg.quickbuy);
			// 플래그 초기화
			$('.module-wrap').find('#eCommerceFlag').html('');
			// 버튼 제거
			$('.module-wrap').find('#quickBuy').hide();
			$('.module-wrap').find('#addToCart').hide();
			//문구 제거
			$('.module-wrap').find('#stockLevelStatus').text('');
			//가격 제거
			$('.module-wrap').find('#promotionPrice').text('');
			$('.module-wrap').find('#price').text('');

			//마일리지 제거
			$('.module-wrap').find('#mileage').html('');

			//설명 문구 제거
			$('.module-wrap').find('#promotionDesc').html('');
			$('.module-wrap').find('#promotionDescRed').html('');

			//buying option 추가
			$('.module-wrap').find('#seeAllAvailability').css('display', '');

			//버튼이 1개일경우 처리
			oneButton();

			//freegift 정보제거
			$('.module-wrap').find('#freegiftData').find('img').attr('src', '');
			$('.module-wrap').find('#freegiftData').find('img').attr('alt', '');
			$('.module-wrap').find('#freegiftLinkImg').attr('href', '');
			$('.module-wrap').find('#freegiftLinkTitle').html('');
			$('.module-wrap').find('#freegiftLinkTitle').attr('href', '');
			$('.module-wrap').find('#freegiftDataDesc').text('');
			$('.module-wrap').find('#freegiftOutOfStock').hide();
			$('.module-wrap').find('#freegift').hide();

			if ($('.module-wrap').find('.offers-bar-module').find('[data-offer="Y"]').length == 0) {
				$('.module-wrap').find('.offers-bar-module.inner').hide();
				$('.module-wrap').find('#offerbelow').hide();
			}
		}

		function onlineRetailerInfoNew(flag, param) {
			retailerSiteCode = param.siteCode;
			retailerModelName = param.modelName;
			retailerModelCode = $('#chageModelCode').val();
			retailerIaCode = param.iaCode;
			retailerEntry = param.entry;
			retailerGroupName = param.groupName;
			retailerTypeName = param.typeName;
			retailerSubTypeName = param.subTypeName;
	 		retailerSiteCode == 'fr' ?  retailerDisplayName  = param.displayName : undefined;

			if(flag != 3){

				if(retailerSiteCode == 'ar' || retailerSiteCode == 'mx' || retailerSiteCode == 'py' || retailerSiteCode == 'uy'){
					
					retailerDisplayName = param.displayName.replace(/ /g, "+");
					var $buyonlineTemplate = $('.buy-online > ul');
					$buyonlineTemplate.empty();
					var buyonlineHtml = "";

					var parameter = "";
					var url = "";

					if(retailerSiteCode == 'ar') {
						parameter = "group=" + retailerGroupName + "&type=" + retailerTypeName + "&subtype=" + retailerSubTypeName + "&iaAcc=&model_code="+retailerModelCode+"&model_name="+retailerModelName+"&display_model_name="+retailerDisplayName;
						url = "http://etale.samsungargentina.net/getData.php?" + parameter;
					} else if(retailerSiteCode == 'py') {
						parameter = "group=" + retailerGroupName + "&type=" + retailerTypeName + "&subtype=" + retailerSubTypeName + "&iaAcc=&model_code="+retailerModelCode+"&model_name="+retailerModelName+"&display_model_name="+retailerDisplayName;
						url = "http://etale.samsungnet.com.ar/getData.php?" + parameter;
					} else if(retailerSiteCode == 'uy') {
						parameter = "group=" + retailerGroupName + "&type=" + retailerTypeName + "&subtype=" + retailerSubTypeName + "&iaAcc=&model_code="+retailerModelCode+"&model_name="+retailerModelName+"&display_model_name="+retailerDisplayName;
						url = "http://assets.etailing-la.com/samsung/uy/getData.php?" + parameter;
					} else {
						if(retailerTypeName == 'accessories' || retailerTypeName == 'mobile-phones' || retailerTypeName == 'televisions' || retailerTypeName == 'air-conditioners' || retailerTypeName == 'audio-systems'
							|| retailerTypeName == 'wireless-audio-with-dock' || retailerTypeName == 'cameras' || retailerTypeName == 'smart-compact' || retailerTypeName == 'printers' || retailerTypeName == 'odd'
								|| retailerTypeName == 'home-theaters' || retailerTypeName == 'galaxy-camera' || retailerTypeName == 'mwo' || retailerTypeName == 'laundry' || retailerTypeName == 'digital-camera'
									|| retailerTypeName == 'monitors' || retailerTypeName == 'smart-nx' || retailerTypeName == 'ultra-mobile-pc' || retailerTypeName == 'refrigerators' || retailerTypeName == 'soundbar'
										|| retailerTypeName == 'video' || retailerTypeName == 'camcorders' || retailerTypeName == 'visual-solutions' || retailerTypeName == 'lens') {
							parameter = "group=" + retailerGroupName + "&type=" + retailerTypeName + "&subtype=" + retailerSubTypeName + "&iaAcc=&model_code="+retailerModelCode+"&model_name="+retailerModelName+"&display_model_name="+retailerDisplayName+"&output=embed";
							url = "http://198.61.129.0/onlineRetailers/index.php?" + parameter;

						}
					}


					console.info("url >>>>>>>> ", url);

					buyonlineHtml = "<iframe src='" + url + "' style='border:none;' width='100%' height='310'></iframe>";

					$buyonlineTemplate.append(buyonlineHtml);

					popoverDefaultHeight($('.buy-instore'), onlineRetailerMsg.gelocationNoCheck, 'buyinstore');
					
				}  else {

					//코드값 강제 삽입
					var retailerUniSiteCode = $.cookies.get("country_codes");
					if (retailerUniSiteCode && retailerUniSiteCode != "") {
						retailerUniSiteCode = retailerUniSiteCode.toLowerCase();
					} else {
						retailerUniSiteCode = "";
					}
					$.ajax({
						type: "POST"
						,url: "/" + retailerSiteCode + "/data-consumer/online-retailer?mType=xml"
						,data: {
							 siteCode: retailerSiteCode
							,modelCode: retailerModelCode
							,iaCode: retailerIaCode
							,retailerUniSiteCode : retailerUniSiteCode
						}
						,dataType: "xml"
						,async: true
						,block: true
						,success: function(data) {

							// BUY ONLINE TAB. [START]
							var buyonlineList = $(data).find("map").find("entry").find("onlineRetailerInfo");

							var $buyonlineTemplate = $('.buy-online > ul');
							var ortApiUseFl = buyonlineList.attr("ortApiUseFl");
							var buyonlineHtml = "";
							var etcName = "";

							$buyonlineTemplate.empty();

							var tabMsg = flag == 2 ? onlineRetailerMsg.buyonlineTabMsg : onlineRetailerMsg.buyinstoreTabMsg;
							if(flag == 2){
								$(".shop-popover > ul:first").hide();
								$(".shop-popover-title").text(tabMsg).show();
							}
							// retailer 개수가 5개 이하일 때는 페이징부분 display:none 처리.
							if (buyonlineList.attr("onlineRetailerListCnt") < 6) {
								$(".tab-content .controls").hide();
							}

							if (buyonlineList.attr("onlineRetailerListCnt") > 0 && buyonlineList.attr("ortDisplayFlag") == "Y") {
								buyonlineList.find("onlineRetailerList").find("onlineRetailer").each(function(idx) {

									var name = $(this).find("name");
									var displayType = $(this).find("displayType");
									var instock = $(this).find("instock");
									var deeplinkUrl = $(this).find("deeplinkUrl");
									var logoUrl = $(this).find("logoUrl");
									var price = $(this).find("price");

									if (instock.text() != "") {

										etcName = instock.text() == "true" ? onlineRetailerMsg.instock : onlineRetailerMsg.outofstock;

										/*if ("be,be_fr,nl,uk".indexOf(retailerSiteCode)!=-1 &&"SM-G925FZKFBTU,SM-G920FZKEBTU,SM-G920FZKFBTU,SM-G925FZKEBTU,SM-G925FZKFBTU,SM-G920FZKAPHN,SM-G920FZKEPHN, SM-G920FZKFPHN, SM-G925FZKAPHN, SM-G925FZKEPHN, SM-G925FZKFPHN, SM-G920FZKALUX, SM-G920FZKELUX, SM-G925FZKALUX, SM-G925FZKELUX, SM-G925FZKFLUX, SM-G920FZKALUX, SM-G920FZKELUX, SM-G925FZKALUX, SM-G925FZKELUX, SM-G925FZKFLUX".indexOf(retailerModelCode)!=-1 && instock.text() == "true") {
											etcName = 'Pre-order';
										}*/
										if(retailerSiteCode == "uk" && instock.text() == "true" && $('#lightPdpFl').val()== "Y") {
											etcName = 'Pre-order';
										}
									}

									//buyonlineHtml += idx < 5 ? "<li>" : "<li class='hide'>";
									buyonlineHtml += "<li>";
									buyonlineHtml += "<span class='store-name'>";
									if (displayType.text() == "N-M") {
										buyonlineHtml += name.text();
									} else if (displayType.text() == "L-G") {
										buyonlineHtml += "<img src='" + logoUrl.text() + "' alt='checked at 16 February 2014 12:35:04' />";
									} else {
										buyonlineHtml += "<img src='" + logoUrl.text() + "' alt='checked at 16 February 2014 12:35:04' />" + name.text();
									}
									buyonlineHtml += "</span>";
									if (ortApiUseFl == "Y") {
										buyonlineHtml += "<span class='etc'>" + price.text() + "</span>";
										buyonlineHtml += "<span class='etc-name'>" + etcName + "</span>";
									}
									buyonlineHtml += "<span>";
									buyonlineHtml += "<button type=\"button\" class=\"go ss-button darkblue\" aria-label=\"Go purchase at Littlewood's\" onclick=\"$_retailerLocation('" + deeplinkUrl.text() + "','" + name.text() + "');\">" + onlineRetailerMsg.btngo + "</button>";
									buyonlineHtml += "</span>";
									buyonlineHtml += "</li>";

								});
								
								//aeseul.kim #94 0820
						 		//var tempHtml = $('#seeAllAvailability').data('bs.popover')['options']['content'];
								//$('#wtb').html(tempHtml);
								$('#wtb').find('.buy-online > ul').html(buyonlineHtml);
								$('#seeAllAvailability').data('bs.popover')['options']['content'] = $('#wtb').html();
								$buyonlineTemplate.html(buyonlineHtml);

								$_retailerLocation = function(deeplinkUrl, name) {
									sendClickCode('wishlist_step2', 'buy online:' + name + '|' + retailerModelCode.toLowerCase() +'|' + retailerModelName.toLowerCase() + '');
									//sendClickCode('wishlist', 'buy online:' + name + '||' + retailerModelName.toLowerCase() + '');
									if("fr".indexOf(retailerSiteCode)!=-1 && location.href.indexOf('samsung.com/fr/')!=-1){
										  s_sendOmnitureData('where_to_buy:online:link', name)         //    2015-02-13 [fr] tagging added
									}
									var openNewWindow = window.open("about:blank");
									openNewWindow.location.href = deeplinkUrl;
								};

							} else if (buyonlineList.attr("ortDisplayFlag") == "N") {
								if(flag == 2){
									popoverDefaultHeight($buyonlineTemplate, onlineRetailerMsg.retailerNoData, '');
								} else {

									$(".shop-popover > ul:first").hide();
									$(".shop-popover-title").text(onlineRetailerMsg.buyinstoreTabMsg).show();

									$(".shop-popover").find(".tab-content").each(function(elm) {
										$(this).toggleClass('show');
									});
								}
							} else {
								// buy online에 retailer data가 없다고 표시.
								popoverDefaultHeight($buyonlineTemplate, onlineRetailerMsg.retailerNoData, '');
							}

							if(SITE_CD != 'fr'){
								popoverDefaultHeight($('.buy-instore'), onlineRetailerMsg.gelocationNoCheck, 'buyinstore');
							} else {
								popoverDefaultHeight($('.buy-instore'), onlineRetailerMsg.storeNoData, 'buyinstore');
							}

						// BUY ONLINE TAB. [END]
						},
						error: function(xhr, st, err) {
							var $buyonlineTemplate = $('.buy-online > ul');

							popoverDefaultHeight($buyonlineTemplate, onlineRetailerMsg.retailerNoData, '');
							$(".tab-content .controls").hide();
							popoverDefaultHeight($('.buy-instore'), onlineRetailerMsg.gelocationNoCheck, 'buyinstore');
							console.info("error", err);
						}
					});
				}

			} else {

				if(SITE_CD != 'fr'){
					popoverDefaultHeight($('.buy-instore'), onlineRetailerMsg.gelocationNoCheck, 'buyinstore');
				} else {

					popoverDefaultHeight($('.buy-instore'), onlineRetailerMsg.storeNoData, 'buyinstore');
				}

				$(".shop-popover > ul:first").hide();
				$(".shop-popover-title").text(onlineRetailerMsg.buyinstoreTabMsg).show();

				$(".shop-popover").find(".tab-content").each(function(elm) {
					$(this).toggleClass('show');
				});

			}
		}

		init();
	}

		ss.PDPStandard.PDPCommon = function (){
		/**
		Reviews module.

		@property reviewsModule
		**/
		var reviewsModule = $('.reviews-module');

		/**
		Reviews sort button.

		@property reviewSortButton
		**/
		var reviewSortButton = reviewsModule.find('.review-controls .sort-button');

		/**
		Reviews module tabs.

		@property reviewsModuleTabs
		**/
		var reviewsModuleTabs = reviewsModule.find('.rating-type-toggle li a');

		/**
		Find in store button.

		@property findInStore
		**/
		var findInStore = $('.ss-onstore');

		/**
		In-store map module.

		@property instoreMap
		**/
		var instoreMap = $('.instore-map');

		/**
		Map module tabs.

		@property instoreMapTabs
		**/
		var instoreMapTabs = instoreMap.find('.map-floor-toggle li a');

		/**
		Media module.

		@property mediaModule
		**/
		var mediaModule = $('.media-module');

		var isIE8 = ss.metrics.isIE8();

        function init(){
        	setupPopovers();
        	bindEvents();
        	ratingSortTabIndex();
        	loadAwards();
        	initReviews();
        	setMediaNum();

			/*
      	   * REVIEW POPOVER 이벤트 초기화
      	   * @author syy.song
      	   */
      			bindReviewSubmitEvents();
        	$('.toggle-content').trigger('myScroll'); /* ADD ADNSTYLE */
        	$( ".button-area" ).addClass( "num-"+ $( ".button-area > a" ).length );
        	$( ".glance-list" ).addClass( "num-"+ $( ".glance-list > li" ).length );
        	eventBridge.trigger(jQuery.Event(eventDictionary.global.RESIZE), ss.metrics);

			// BrightCovePlayer 초기화
			var checktry = 0;
			if ($('#videoBE').length) {
				var videoInit = setInterval(function(){
					checktry++;
					if(brightcove.internal._instances['videoBE'] != undefined || checktry > 7){
						$.VideoPlayerHandler.init('videoBE');
						clearTimeout(videoInit);
					}
				}, 1000);
			}

			// Offer check
			var offerData = $('li[data-offer="Y"]');
            for(var i = 0; i<offerData.length; i++){
            	var offerDataLink = $(offerData[i]).find('a').attr('href');
            	if(offerDataLink != undefined && offerDataLink != null){

            		if(offerDataLink.indexOf("samsung.com") < 0 && offerDataLink.indexOf("/"+SITE_CD+"/") != 0){
            			$(offerData[i]).find('a').attr("target","_blank");
            		}else{
            			$(offerData[i]).find('a').attr("target","_self");
            		}
            	}
            }
        }

        function setMediaNum() {
			var num;
			if (ss.metrics.deviceLayoutId == 1 && !isIE8) {
				num = $(".media-module .wrap .media").not(".threesixty").length;
			} else {
				num = $(".media-module .wrap .media").length;
			}

			$(".media-module .wrap .media").each(function() {
				if (($(this).attr('style') == 'display: none;') || ($(this).attr('style') == 'display:none')) {
					num = num-1;
				}
			});

			$(".media-module .wrap").removeClass(function(index, css) {
				var classes = css.match(/num-[0-9]/g);
				if (classes) {
					return classes[0];
				} else {
					return null;
				}
			});
        	$( ".media-module .wrap" ).addClass( "num-" + num );
        }

        function initReviews() {
			var $currentMoreText;
			var $showmore = $(".owner-review .review-text .show-more").on("click", function(event) {
				var self = $(this)
				var contentName = self.data("content")
				$currentMoreText = self.siblings(contentName);
				$currentMoreText.on("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", transitionEnd);
			});

			function transitionEnd(event) {
				eventBridge.trigger(jQuery.Event(eventDictionary.global.RESIZE), ss.metrics);
				$(this).off("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", transitionEnd)
			}

			var $overallViewBtn = $('.overall-section .tab-button');
			var $expertViewBtn = $('.latest-expert-section .tab-button');
			var $ownersSection = $('.owners-section');
			var $expertSection = $('.expert-section');
			var $sortByTit = $( '.owners-section .sort-by-tit' );
            var $sortBtn = $( '.owners-section .sort-button' );
			var toggleView = null;
			$overallViewBtn.on('click', toggleReviewsViewBtn);
			$expertViewBtn.on('click', toggleReviewsViewBtn);

			function toggleReviewsViewBtn() {
				if (ss.metrics.width < 1280)
					return;
				var hasToggled = false;
				var thisElement = $(this)[0];
				switch (thisElement) {
				case $overallViewBtn[0]:
					hasToggled = $expertSection.hasClass('toggled');
					if (hasToggled)
						triggerToggleState($expertViewBtn);
					break;
				case $expertViewBtn[0]:
					hasToggled = $ownersSection.hasClass('toggled');
					if (hasToggled)
						triggerToggleState($overallViewBtn);
					break;
				}
			}

			function triggerToggleState($toggler) {
				var args = {
				content : $toggler.data('content'),
				afterText : $toggler.data('after-text'),
				currText : $toggler.data('text'),
				autoScroll : $toggler.data('autoscroll')
				};
				toggleView = new ss.Toggle($toggler, args);
				toggleView.action();
			}

			eventBridge.on(eventDictionary.global.RESIZE, function() {
                if( ss.metrics.deviceLayoutId > 1 ){
                    $sortByTit.attr( "data-ignore-height", true );
                    $sortBtn.attr( "data-ignore-height", true );
                }else{
                    $sortByTit.removeAttr( "data-ignore-height" );
                    $sortBtn.removeAttr( "data-ignore-height" );
                }

                if( ss.metrics.device != 'desktop' ) return;
                if( $expertSection.hasClass( 'toggled') && $ownersSection.hasClass( 'toggled') ){
                    triggerToggleState( $overallViewBtn );
                }
            });
		}

		function initPopover(self){
			var bElm = self.attr('data-element');
			var bContent = $(self.attr('data-content-cls')).html();
			var bContainer = self.attr('data-container');
			new ss.Popover(bElm, {placement: 'auto top',content: bContent,html: true,container: bContainer,lightbox: 'true'});
		}

		/**
		 * Setup popovers.
		 *
		 * @method setupPopovers
		 */
        function setupPopovers() {
			sharePopover = new ss.Popover('.media-module .media.share', {placement: 'auto top',content: $('#share-popover').html(),html: true,container: 'body',animation: false});
			//awardsPopover = new ss.Popover('.awards-module .award-button', {placement: 'left auto', content: $('.awards-popover-content').html(), html: true, container: '.featured-review-wrap', animation: false});
			//addToCart = new ss.Popover('.nor-button:eq(1)', {placement: 'top', content: $('#addCartList').html(), html: true, container: 'body', animation: false});		/* ADD ADNSTYLE */
			//new ss.Popover('.shop-button', {placement: 'auto top', content: $('.shop-popover-content').html(), html: true, container: '#shop-popover-container', lightbox: 'true'});
			//new ss.Popover('.buy-button', {placement: 'auto top', content: $('.whereBox-content').html(), html: true, container: '#shop-popover-container', lightbox: 'true'});		/* ADD ADNSTYLE */

			$('.auto-popover').each(function() {
				initPopover($(this));
			});

			/*
			 * WishListButton 생성
			 * @author syy.song
			 */
			if (USE_ESTORE) {
				new ss.WishListButton({container: $('.ss-wishlist-button')});

		         /*
		         * contact-us Button generate
		         */

				/*
				if(SITE_CD == 'de'){
					var contactusText = '<br/>*Kosten laut Konditionen des Vertragspartners für Festnetzanschlüsse oder Mobilfunkanschlüsse';
					$('.contactus-text').html(contactusText);
				}
			    */
				if ( SITE_CD == 'uk' ){
					$('#contactus-tab').attr('href', '/uk/info/contactus.html');
				} else if ( SITE_CD == 'fr' ){
					$('#contactus-tab').attr('href', '/fr/shop/contact/');
				} else if ( $('#contentsType').val() != "WOW" ){
					new ss.ContactUsButton({container: $('.ss-contactus-button')});
				} else {}
			}



			//Inits the "Shop It" popovers functionality
			$(document).on('shown.bs.popover', '.shop-button', function() {
				ss.commonWidgets.initShopWidget();
			});

			$(document).on('shown.bs.popover', '.popover-base', function() {
				$(this).addClass('active');
			});
			$(document).on('hidden.bs.popover', '.popover-base', function() {
				$(this).removeClass('active');
			});
			$(document).on('shown.bs.popover', '.share', function() {
				var shareWidgetTimeout = setTimeout(function() {
					ss.commonWidgets.initShareWidget();
					clearTimeout(shareWidgetTimeout);
				}, 100);
			});
			$('.ss-compare-button').on('keydown', function(e) {

				if (e.keyCode === 13 || e.which === 13) {
					var compareWidgetTimeout = setTimeout(function() {
						ss.commonWidgets.initCompareWidget();
						clearTimeout(compareWidgetTimeout);
					}, 150);
				}

			});

            $( document ).on( 'shown.bs.popover', '#jumpToSeeAllAvailability', function() {
                var buyWidgetTimeout = setTimeout( function() {
                    ss.commonWidgets.setDefaultFocusInWidget( "#shop-popover-container .popover .shop-popover" );
                    clearTimeout(buyWidgetTimeout);
                }, 100);
            });

            $( document ).on( 'shown.bs.popover', '.ratings-button', function() {
                var reviewWidgetTimeout = setTimeout( function() {
                    ss.commonWidgets.setFocusAtInWidget( ".popover .popover-content>.ylayerBox .icoStarBox>span:first-child" );
                    clearTimeout(reviewWidgetTimeout);
                }, 100);
            });

            // where to buy data setting.
            if(SITE_CD != 'ar' || SITE_CD != 'py' || SITE_CD != 'uy') {
            	onlineRetailer();
            }
        }

        // where to buy관련.
        function onlineRetailer(){

			var buyOnlineUseSite = $("#buyOnlineUseSite").val();
			var buyInStoreUseSite = $("#buyInStoreUseSite").val();

        	var param = {};

        	param.siteCode	 = $("#siteCode").val();
			//by hun
			param.modelCode	 = $("#chageModelCode").val();
        	//param.modelCode	 = $("#modelCode").val();
        	param.modelName	 = $("#modelName").val();
        	param.displayName= $("#displayName").val();
        	param.iaCode	 = $("#iaCode").val();
        	param.entry 	 = "product";
        	param.groupName  = $("#group").val();
        	param.typeName	 = $("#type").val();
        	param.subTypeName	 = $("#subtype").val();

			if(buyOnlineUseSite.indexOf(',' + SITE_CD + ',') >= 0 && buyInStoreUseSite.indexOf(',' + SITE_CD + ',') >= 0){ // online retailer, storelocator
				onlineRetailerInfo(1, param);
			} else if (buyOnlineUseSite.indexOf(',' + SITE_CD + ',') >= 0) { // online retailer
				onlineRetailerInfo(2, param);
			} else if (buyInStoreUseSite.indexOf(',' + SITE_CD + ',') >= 0) { // storelocator
				onlineRetailerInfo(3, param);
			}
        }

		/**
		Review Submit Popover Events

		@method bindReviewSubmitEvents
		@author syy.song
		**/
		function bindReviewSubmitEvents() {

			// SUBMIT A REVIEW 일 경우 Omniture 적용
			$('.ratings-button').on('click', function() {
				sendClickCode('content_click', 'submit a review');
			});

			var $reviewSubmitPopup = $('#ratings-popover-container');

			$reviewSubmitPopup.on('focus', '[id^=y_radio]', function() {
			    var $this = $( this );
			    var id = $this.attr( "id" );
			    var $label = $this.siblings( "label[ for="+id+"]");
			    $label.addClass( "focused" );
			});
			$reviewSubmitPopup.on('blur','[id^=y_radio]', function() {
			    var $this = $( this );
			    var id = $this.attr( "id" );
			    var $label = $this.siblings( "label[ for="+id+"]");
			    $label.removeClass( "focused" );
			});

			/**
			 * Write Form 이벤트
			 */
			// 별점체크
			$reviewSubmitPopup.on('click', '.ratings-write-content .icoStarBox span', function(event) {
				var $this = $(this);
				var rating = $this.attr('rating');
				var $starDiv =  $this.parent().parent();
				var $ratingDiv = $this.parent();
				var $ratingText = $this.parent().parent().find('.fl');
				$ratingDiv.find('span').each(function() {
					(rating >= $(this).attr('rating') ? $(this).addClass('on').removeClass('off') : $(this).addClass('off').removeClass('on'));
				});
				$this.parent().attr('rating', rating);

				$ratingDiv =$ratingDiv.detach();
				$starDiv.find('p:eq(1)').before($ratingDiv);

				switch (rating) {
				case '1':
					$ratingText.text(pdpMsg.poor);
					$ratingDiv.find('span:eq(0)').focus();
					break;
				case '2':
					$ratingText.text(pdpMsg.fair);
					$ratingDiv.find('span:eq(1)').focus();
					break;
				case '3':
					$ratingText.text(pdpMsg.average);
					$ratingDiv.find('span:eq(2)').focus();
					break;
				case '4':
					$ratingText.text(pdpMsg.good);
					$ratingDiv.find('span:eq(3)').focus();
					break;
				case '5':
					$ratingText.text(pdpMsg.excellent);
					$ratingDiv.find('span:eq(4)').focus();
					break;
				default:
					$ratingText.text('');
					break;
				}

			});

			// 별점체크
			$reviewSubmitPopup.on('keydown', '.ratings-write-content .icoStarBox span', function(event) {
				if (event.keyCode === 13){
					event.preventDefault();
					var $this = $(this);
					var rating = $this.attr('rating');
					var $starDiv =  $this.parent().parent();
					var $ratingDiv = $this.parent();
					var $ratingText = $this.parent().parent().find('.fl');
					$ratingDiv.find('span').each(function() {
						(rating >= $(this).attr('rating') ? $(this).addClass('on').removeClass('off') : $(this).addClass('off').removeClass('on'));
					});
					$this.parent().attr('rating', rating);

					$ratingDiv =$ratingDiv.detach();
					$starDiv.find('p:eq(1)').before($ratingDiv);

					switch (rating) {
					case '1':
						$ratingText.text(pdpMsg.poor);
						$ratingDiv.find('span:eq(0)').focus();
						break;
					case '2':
						$ratingText.text(pdpMsg.fair);
						$ratingDiv.find('span:eq(1)').focus();
						break;
					case '3':
						$ratingText.text(pdpMsg.average);
						$ratingDiv.find('span:eq(2)').focus();
						break;
					case '4':
						$ratingText.text(pdpMsg.good);
						$ratingDiv.find('span:eq(3)').focus();
						break;
					case '5':
						$ratingText.text(pdpMsg.excellent);
						$ratingDiv.find('span:eq(4)').focus();
						break;
					default:
						$ratingText.text('');
						break;
					}
				}

			});


			// PREVIEW 버튼 클릭
			$reviewSubmitPopup.on('click', '.ratings-write-content .y_btnBox01 .ratings-submit-button', function() {
				// Validate
				if (!validateWriteForm())
					return;
				if (reviewTermsCheckSite && (!$('#checkYes').is(':checked')))
					return;
				// submit form show
				$('.terms-content').hide();
				$('.review-content').hide();
				$('.ratings-submit-content').show();
				$('.ratings-submit-content').nextAll().hide();
				barSize(); // bar size 재계산
				$(this).parents('.popover-content').animate({scrollTop: 0}, 500);
				// submit Setting
				submitFormSetting();
				// Omniture 적용
				sendClickCode('reviews', 'consumer review:wirte');
			});

			// terms&conditions 버튼 클릭
			$reviewSubmitPopup.on('click', '.ratings-write-content .y_btnBox02 .terms-button', function() {
				sendClickCode('reviews', 'review:terms conditions');
				window.open('http://reviews.'+SITE_CD+'.samsung.com/content/' + reviewSubmitPopup.message.bvDisplayCd + '/termsandconditions.htm', 'termsConditionWindow', 'scrollbars=1,width=500px,height=550px');
			});

			// reivew guidelines 버튼 클릭
			$reviewSubmitPopup.on('click', '.ratings-write-content .y_btnBox02 .review-button', function() {
				sendClickCode('reviews', 'review:review guidelines');
				window.open('http://reviews.'+SITE_CD+'.samsung.com/content/' + reviewSubmitPopup.message.bvDisplayCd + '/guidelines.htm', 'guideLinesWindow', 'scrollbars=1,width=500px,height=550px');
			});

			// 내부 팝업 close 버튼 클릭
			$reviewSubmitPopup.on('click', '.ratings-write-content .icon-close-x.hide-parent', function(event) {
				event.preventDefault();
				$(this).parent().hide();
			});
			
			// 체크박스 클릭
			$reviewSubmitPopup.on('click','.ratings-write-content #checkYes', function() {
				if (!$(this).is(':checked')) {
					$('.ratings-submit-button').css('cursor','default').css('background','#e2e2e2');
				}else {
					$('.ratings-submit-button').css('cursor','Pointer').css('background','#1428a0');
				}
			});


			/**
			 * Submit Form 이벤트
			 */
			// terms&conditions 버튼 클릭
			$reviewSubmitPopup.on('click', '.ratings-submit-content .terms-button', function() {
				window.open('http://reviews.'+SITE_CD+'.samsung.com/content/' + reviewSubmitPopup.message.bvDisplayCd + '/termsandconditions.htm', 'termsConditionWindow', 'scrollbars=1,width=500px,height=550px');
			});
			// 내부 팝업 close 버튼 클릭
			$reviewSubmitPopup.on('click', '.ratings-submit-content .icon-close-x.hide-parent', function(event) {
				event.preventDefault();
				$(this).parent().hide();
			});
			// edit 버튼 클릭
			$reviewSubmitPopup.on('click', '.ratings-submit-content .edit-button', function(event) {
				// submit form hide
				$('.terms-content').hide();
				$('.ratings-submit-content').hide();
				$('.ratings-submit-content').nextAll().show();
				$(this).parents('.popover-content').animate({scrollTop: 0}, 500);
			});
			// submit 버튼 클릭
			$reviewSubmitPopup.on('click', '.ratings-submit-content .submit-button', function(event) {
				if (confirm(reviewSubmitPopup.message.validateSubmit)) {
					reviewSubmit();
				}
			});


			/**
			 * Private Function
			 */
			// Validate & submit Setting
			var validateWriteForm = function() {
				var $wform = $reviewSubmitPopup.find('.ratings-write-content');

				var title = $wform.find('[name=title]').val2();
				var reviewText = $wform.find('[name=reviewText]').val2();
				var userNickname = $wform.find('[name=userNickname]').val2();
				var userEmail = $wform.find('[name=userEmail]').val2();

				// validation
				if ('' === title || '' === reviewText || '' === userNickname || '' === userEmail) {
					alert(reviewSubmitPopup.message.validateBlank);
					return false;
				}
				if (reviewText.length < 50) {
					alert(reviewSubmitPopup.message.validateDetail);
					return false;
				}
				if (userNickname.length < 4) {
					alert(reviewSubmitPopup.message.validateNickname);
					return false;
				}
				var reg = new RegExp("^[\\w\\-]+(\\.[\\w\\-_]+)*@[\\w\\-]+(\\.[\\w\\-]+)*(\\.[a-zA-Z]{2,3})$", "gi");
				if (!reg.test(userEmail)) {
					alert(reviewSubmitPopup.message.validateEmail);
					return false;
				}
				return true;
			};

			// Review Submit Form 초기화
			var submitFormSetting = function() {
				var $wform = $reviewSubmitPopup.find('.ratings-write-content');
				var $sform = $reviewSubmitPopup.find('.ratings-submit-content');

				var title = $wform.find('[name=title]').val2();
				var reviewText = $wform.find('[name=reviewText]').val2();
				var userNickname = $wform.find('[name=userNickname]').val2();
				var userEmail = $wform.find('[name=userEmail]').val2();

				// submit setting
				$sform.find('[form-name=userNickname]').text(userNickname);
				$sform.find('[form-name=title]').text(title);
				// HTML Escape
				reviewText = reviewText.replace(/<script[^>]*>(.|[\t\n\r])*<\/script>/gi, '');
				reviewText = reviewText.replace(/>/gi, '&gt;');
				reviewText = reviewText.replace(/</gi, '&lt;');
				reviewText = reviewText.replace(/%3C/gi, '&lt;');
				reviewText = reviewText.replace(/%3E/gi, '&gt;');
				reviewText = reviewText.replace(/\n/gi, '<br/>');
				$sform.find('[form-name=reviewText]').html(reviewText);
				$sform.find('[form-name=userEmail]').attr('href', 'mailto:' + userEmail).text(userEmail);
				$wform.find('[ratingType]').each(function() {
					var ratingType = $(this).attr('ratingType');
					var rating = $(this).attr('rating');
					if ('rating' === ratingType) {
						var ortLabel = reviewSubmitPopup.message.overallRatingTypeLabel;
						$sform.find('[ratingType=rating]').attr('aria-label', ortLabel.replace('#rating#', rating));
						$sform.find('span[group=rating]').each(function() {
							(rating >= $(this).attr('rating') ? $(this).addClass('on').removeClass('off') : $(this).addClass('off').removeClass('on'));
						});
					} else {
						var rtLabel = reviewSubmitPopup.message.ratingTypeLabel;
						$sform.find('[ratingType=' + ratingType + '] h4').attr('aria-label', rtLabel.replace('#ratingtype#', ratingType).replace('#rating#', rating));
						$sform.find('[ratingType=' + ratingType + '] .rating-value').text(rating + '/5');
						var $barFull = $sform.find('[ratingType=' + ratingType + '] .barfull').eq(0);
						var barSize = $barFull.css('background-size').split('px')[0] / 5;
						$sform.find('[ratingType=' + ratingType + '] .barfull').css('width', rating * barSize);
					}
				});
			};

			// 리뷰 등록
			var reviewSubmit = function() {
				// parameter setting
				var $wform = $reviewSubmitPopup.find('.ratings-write-content');
				var param = {
					'title': $wform.find('[name=title]').val2(),
					'reviewtext': $wform.find('[name=reviewText]').val2(),
					'usernickname': $wform.find('[name=userNickname]').val2(),
					'useremail': $wform.find('[name=userEmail]').val2(),
					'isrecommended': $wform.find('[name=recommend]:checked').val(),
				};
				if(reviewTermsCheckSite){
					param['agreedtotermsandconditions'] = true; 
				}
				$wform.find('[ratingType]').each(function() {
					($(this).attr('rating') > 0 ? param[$(this).attr('ratingType')] = $(this).attr('rating') : param[$(this).attr('ratingType')] = '');
				});
				//var url = '/' + SITE_CD + '/data-consumer/review-submit/' + $('#modelCode').val();
				//var url = '//' + DOMAIN + '/' + SITE_CD + '/data-consumer/review-submit/' + $('#modelCode').val();
				var url = 'http://api.bazaarvoice.com/data/submitreview.json?ApiVersion=5.4&PassKey=' + reviewSubmitPopup.message.passKey + '&ProductId=' + $('#modelCode').val().replace("/", "_") + '&Action=submit';
				console.log("review ajax url : "+url);
				$.ajax({
					type: 'POST',
					url: url,
					dataType: 'json',
					data: param,
					success: function(data) {
						// Omniture 적용

						sendClickCode('reviews', 'consumer review:review submit');
						// 팝업 클로즈
						$.Popover.activePopover.hide();
						$('.lightbox-skrim').remove();
					},
					error: function(data) {
						// 팝업 클로즈

						$.Popover.activePopover.hide();
						$('.lightbox-skrim').remove();
					}
				});
			};
		}



		/**
		Bind events.

		@method bindEvents
		**/
		function bindEvents() {
			/* breadcrumb 카테고리 URL 정보가 없을경우 처리 */
			$('.breadcrumb').find('a').on('click', function(e) {
				e.preventDefault();

				var breadcrumbURL = $(this).attr('href');

				if(breadcrumbURL == undefined || breadcrumbURL == null || breadcrumbURL == "" || breadcrumbURL == "#"){
					if($(this).attr("iaType") == "type"){
						breadcrumbURL =  '/'  + SITE_CD + '/consumer/' + $('#group').val() + '/' + $('#type').val() + '/';
					} else {
						breadcrumbURL =  '/'  + SITE_CD + '/consumer/' + $('#group').val() + '/' + $('#type').val() + '/' + $('#subtype').val() + '/';
					}
				}
				location.href = breadcrumbURL;
				return false;
			});

            /* 140610 ADD ADNSTYLE */
            $('.download-item-group .toggler').on('click', function (ev) {
                var mobile = new RegExp('(^mobile)');
                if (!mobile.test(ss.metrics.device)){
                    ev.preventDefault();
                    return false;
                }
            });
            /* 140610 ADD ADNSTYLE */

			// E-commerce 버튼 처리
			$('a.clearfix.toggle').on('click', function() {
				if ($('a.clearfix.toggle').hasClass('link-toggled')) {
					$('a.clearfix.toggle').addClass('active');
					$('a.clearfix.toggle').next('.nor-btnList').show();
				}
				else {
					$('a.clearfix.toggle').removeClass('active');
					$('a.clearfix.toggle').next('.nor-btnList').hide();
				}
			});


			/* ADD ADNSTYLE */
			$('.toggle').on('click', function(e) {
				eventBridge.trigger('myScroll', {link: this});
			});

			eventBridge.on('myScroll', function(e, data) {
				var $self = $(data.link);
				if ($self.hasClass('clsBtn')) {
					$self.parent().prev('.header').find('.icon-plus').removeClass('icon-minus');
				}
				if ($self.hasClass('extra-specs') && $self.attr('data-autoscroll') == "true") {
					if (!$('.more-specs').find('> .header').next().hasClass('toggled')) {
						$('.more-specs').find('> .header').trigger('click');
						var offset = ss.metrics.elemTop($('.more-specs'));
						ss.htmlBody.animate({scrollTop: offset}, 1000);
					}
				}
				if ($self.hasClass('top-wrap')) {
					if (!$('.header').next().hasClass('toggled')) {
						$('.product-specs-full').find('> .header').trigger('click');
						if ($self.hasClass('_bind-init2click')) {
							$self.removeClass('_bind-init2click');
						}
						else {
						//var offset = ss.metrics.elemTop($('.product-specs-full'));
						//ss.htmlBody.animate({ scrollTop : offset }, 1000);
						}
					}
				}
			});

			$('.play-btn').on('click', function() {
				if ($(this).parents('.bizcolumn').length > 0)
					return false;
				$('.vm-player').css('z-index', '100');
			});

			$('.close-video').on('click', function() {
				$('.vm-player').css('z-index', '0');
			});


			mediaModule.on(ss.clickEvent, '.save', function() {
				mediaModule.addClass('save-focus').removeClass('share-focus');
			});

			mediaModule.on(ss.clickEvent, '.share', function() {
				mediaModule.addClass('share-focus').removeClass('save-focus');
			});

			// Modify review sort popover after opening.
			//reviewSortButton.on('click', function() {
			//	reviewSortPopover.toggle();
			//	reviewsModule.find('.popover').width(reviewSortButton.width() - 4);

			//	reviewsModule.find('.popover').css({'top': (Number(reviewsModule.find('.popover').css('top').replace('px','')) + 9),'left': reviewSortButton.offset().left - reviewsModule.offset().left});
			//});

			reviewsModule.on(ss.clickEvent, '.review-sort-popover .sort', function() {
				//reviewSortPopover.hide();

				reviewSortButton.find('p').text($(this).attr('data-sort-text'));
			});

			reviewsModuleTabs.on(ss.clickEvent, function() {
				new ss.Tabs($(this), $(this).parents('ul').data('contents')).init();
			});

			instoreMapTabs.on(ss.clickEvent, function() {
				new ss.Tabs($(this), $(this).parents('ul').data('contents')).init();
			});

			reviewsModule.on(ss.clickEvent, '.reviews.expert .review .text .expand-button', function() {
				var collapsedContent = $(this).parent().find('.collapsed');
				var ellipses = $(this).parent().find('.ellipses');
				if (collapsedContent.hasClass('hide')) {
					collapsedContent.removeClass('hide');
					ellipses.hide();
					$(this).text($(this).attr('data-see-less-text'));

				} else {
					collapsedContent.addClass('hide');
					ellipses.show();
					$(this).text($(this).attr('data-see-more-text'));
				}
			});

			findInStore.on(ss.clickEvent, function() {
				$(this).toggleClass('active');
				instoreMap.stop().slideToggle(500, function() {
					$(this).toggleClass('hide');
				});
			});

			eventBridge.on(eventDictionary.global.RESIZE, function() {
				//heroSize();
				barSize(); /* ADD ADNSTYLE */
				setMediaNum();
			// $('.hero-module').first()
			//	 .css( 'background-size', 'cover' )
			//	 .css( '-webkit-background-size', 'cover' );
			// console.log( 'hero.size()' );

			});



			// $( window ).on( 'orientationchange', function(e) {

			//	 $('.hero-module').first()
			//		 .css( 'background-size', 'cover' )
			//		 .css( '-webkit-background-size', 'cover' );
			//	 console.log( 'window.orientationChange()' );

			// });

			reviewsModule.find('.sort-list a').on(ss.clickEvent, function() {
				var sortButton = reviewsModule.find('.sort-button');

				reviewsModule.find('.sort-list a.selected').removeClass('selected');
				$(this).addClass('selected');
				sortButton.find('.sort-button-text').html($(this).text() + ' <span class="icon-plus icon icon-minus"></span>');

				sortButton.click().focus();

				// @SDS This is where interaction with the service would occur based on filter type.
				var filterType = $(this).attr('data-filter-type');
			});
			//heroSize();
			barSize(); /* ADD ADNSTYLE */

			// IE에서 placeholder를 인식하지 못하는 문제
			if (navigator.appVersion.match(/MSIE [\d.]+/)) {
				$('.ratings-button').on('click', function() {
					$('#ratings-popover-container .input input[type=text], .input textarea').each(function() {
						$(this).val() == '' ? $(this).val($(this).attr('placeholder')) : false;
					});
				});
				// Placeholders.js가 작동을 안해서 임시처리
				$('#ratings-popover-container').on('blur', '.input input[type=text], .input textarea', function() {
					if ($(this).val() == '') {
						$(this).val($(this).attr('placeholder'));
						$(this).attr('data-placeholder-active', true);
					} else {
						$(this).attr('data-placeholder-active', false);
					}
				});
				$('#ratings-popover-container').on('focus', '.input input[type=text], .input textarea', function() {
					if ($(this).val() == $(this).attr('placeholder')) {
						$(this).val('');
					}
				});
			}

			$('.extend-list').on('click', function() {
				var iconObj = $(this).find('[class^=icon-]');
				var checkState = iconObj.attr('data-state');
				if (checkState == 'plus') {
					iconObj.attr('data-state', 'minus').removeClass('icon-plus').addClass('icon-minus');
					$(this).parent().find('li.hide').removeClass('hide').addClass('is-hide');
				}
				else {
					iconObj.attr('data-state', 'plus').removeClass('icon-minus').addClass('icon-plus');
					$(this).parent().find('li.is-hide').addClass('hide');
				}
			});
		/*$('.extra-specs').on('click', function(){
		$(this).parents('.product-specs-module').find('.module-heading').trigger('click');
	  });*/

			$('.ss_samsung').delegate('.cart-popover > .close-button', 'keydown', function(e)  {
                if(e.keyCode === 13 || e.keyCode === 32) {
                    $(this).trigger('click');
                    $('#addToCart').focus();
                }
            });
		}

		/**
		@function ratingSortTabIndex
		Modify tab index of reviews sort option based upon window size
		**/
		function ratingSortTabIndex() {
			if (ss.metrics.device !== 'desktop') {
				reviewsModule.find('.sort-list a').attr('tabindex', '-1');
			}
		}

		function loadAwards() {
			if ($(".awards-popover").length) {
				$(".awards-popover").insertAfter(".featured-review-wrap .title");
			}
		}

		function barSize() {
			$(".bars > .barfull").each(function(idx) {
				$(".bars:eq(" + idx + ") > .barfull").css("background-size", parseInt($(".bars:eq(" + idx + ") > .barfull").parent().width()) + "px 5px")
			});

			if (window.innerWidth > 1279) {
				$(".awards-popover ul > li.hide").addClass('is-hide').removeClass('hide');
				$(".awards-popover a.y_btnMore").addClass('hide').hide().find('[class^=icon-]').attr('data-state', 'minus').removeClass('icon-plus').addClass('icon-minus');
			}
			else {
				if ($(".awards-popover ul > li").length < 5) {
					$(".awards-popover a.y_btnMore").addClass('hide').hide();
				}
				else {
					if ($(".awards-popover a.y_btnMore").hasClass('hide')) {
						$(".awards-popover a.y_btnMore").removeClass('hide').show();
					}
				}
			}
		}


		/**
		@function heroSize
		Sets height of the hero section based upon window size
		**/
		function heroSize() {

			var hero = $('.hero-module').first();
			if (hero.hasClass('d-height')) {
				var perHeight = (parseInt(hero.attr('d-height')) * (parseInt($(window).height() / 100)));
				if (ss.metrics.device == 'mobile') {
					if (perHeight > 420)
						perHeight = 420;
					else if (perHeight < 300) {
						perHeight = 300;
					}
				}
				else {

					if (perHeight > 600)
						perHeight = 600;
					else if (perHeight < 420) {
						perHeight = 420;
					}
				}
				hero.attr('height', perHeight + 'px');
			}
			var slideHeight = hero.find('li').first().outerHeight(),
			winheight = $(window).innerHeight(), heroHeight, sampleHeroHeight;

			if (ss.metrics.device === "desktop")
				heroHeight = 600, sampleHeroHeight = 500;
			else if (ss.metrics.device === "tablet-landscape")
				heroHeight = 600, sampleHeroHeight = 500;
			else if (ss.metrics.device === "tablet-portrait")
				heroHeight = 600, sampleHeroHeight = 500;
			else
				heroHeight = 420, sampleHeroHeight = 360;
/*			if (hero.hasClass('d-height')) {
				heroHeight = hero.attr('height');
			}
			else {
				hero.css('height', heroHeight);
			}*/

			heroHeight = parseInt(heroHeight) + 'px';
			sampleHeroHeight = parseInt(sampleHeroHeight) + 'px';
			if ($('.ss_samsung.pdp_wow').length == 0) {
				if ($('.ss-carousel').hasClass('sample')) {
					$('.ss-carousel').css('height', sampleHeroHeight);
				} else {
					$('.ss-carousel').css('height', heroHeight);
				}
				$('.ss-carousel').find('[class*="hero"]').each(function() {
					if ($(this).hasClass('sample')) {
						$(this).css('height', sampleHeroHeight);
					} else {
						$(this).css('height', heroHeight);
					}
				});

				$('.sampleimages-hero .ss-carousel').css('height', $('.sampleimages-hero .ss-carousel').parent().height());
				$('.sampleimages-hero .ss-carousel').find('[class*="hero"]').each(function() {
					$(this).css('height', sampleHeroHeight);
				});

			}
			else {
				var device = ss.metrics.device;
				var ratio;

				switch (device) {
					case 'mobile':
						ratio = 1.43;
						break;
					case 'mobile-landscape':
						ratio = 0.51875;
						break;
					case 'tablet-portrait':
						ratio = 1.43;
						break;
					case 'tablet-landscape':
						ratio = 0.51875;
						break;
					case 'desktop':
						ratio = 0.51875;
						break;
				}
				var heroCC2Height = $('.hero-cc').width() * ratio;

				$('div.hero-module').height(heroCC2Height);
				$('.ss-carousel').find('[class*="hero"]').each(function() {
					$(this).height(heroCC2Height);
				});

			}
			//$('.ss-carousel').find('[class*="hero"]').css('height', heroHeight);
			$('.vm-player').css('height', heroHeight); /* ADD ADNSTYLE */
		//var winheight = $(window).innerHeight(),
		//	heroHeight = (75 * winheight) / 100;
		//
		//heroHeight = parseInt(heroHeight) + 'px';
		//$('#content').find('[class*="hero"]').css('height', heroHeight);
		}

		init();
	};
    /**
	 * PDPJumpModule class
	 *
	 * @class $.PDPStandard.PDPJumpModule
	 * @constructor
	 */
	ss.PDPStandard.PDPJumpModule = function(params) {

		// 확인 필요
		if( $('.jump-module').length > 1 ){
			$('.jump-module').last().remove();
		}
		var container = $('.jump-module');
		var containerClone = container.clone();
		var toggleButton = container.find('.header');
		var jumpLinks = null;
		var jumpLinksClone = null;
		var jumpLinksCount = -1;
		var toggleButtonClone = containerClone.find('.header');
		var jumpShim = $('.jump-module-shim');
		var jumpContents = $('.jump-contents');
		var moreItems = $('.more-item');
		var firstMoreItem = (moreItems && moreItems.length > 0) ? moreItems.eq(0) : null;
		var hasMore = (firstMoreItem) ? true : false;
		var jumpCollapsedHeight = 71;
		var collapsed = false;
		var docked = false;
		var self = this;
		var haltScrollListener = false;
		var currentWinWidth = ss.metrics.width;
		var currentWinHeight = ss.metrics.height;
		var selctedItem = null;
		var scrollUpdate = true;
		var infoSection = null;
		var infoSectionPl = null;
		var infoSectionPr = null;
		var btnSection = null;
		var btnGoTop = $('.btn-go-top');
		var backTotop = $('.topBtn');
		var currentScrollNo = -1;

		var scrollUse = null;
		
		if(backTotop.length === 0){
			backTotop = $('.back-top');
		}

		/**
		 * Initializaiton function which runs at object instantiation time.
		 *
		 * @method init
		 */
		function init() {
			var divider = $('.jump-divider');
			toggleButtonClone.removeClass('expanded');
			$('body').append(containerClone);

			var latestReview = $('.latest-expert-section');
			var ownerSection = $('.owners-section');
			var scrollWrapper = ss.scrollWrapper;
			// Toggle open/closed state
			$('body').on(ss.clickEvent, '.jump-module .header', function() {
				var $elem = $(this);
				if ($elem.hasClass('expanded')) {
					hide();
				} else {
					show();
				}
			});

			btnGoTop.on(ss.clickEvent, function() {
				sendClickCode('jumpto','back to top:floating');
				ss.htmlBody.animate({scrollTop : 0}, 1000);
			});

			//확인 필요
			//$('body').on(ss.clickEvent, '.jump-links ul li a', function(e) {
			$('.jump-links ul li a').off('click');
			$('.jump-links ul li a').on('click', function(e) {
				links = $('.jump-module ul li a');
				links.removeClass('clicked');
				var jumpTo = $('.' + $(this).data('jump'));
				currentJumpLink = this;
				e.preventDefault();
				e.stopPropagation();
				if (jumpTo && jumpTo.length > 0) {

					haltScrollListener = true;
					haltSelect = true;

					var bodyAnimateTimeout = setTimeout(function() {

						dock(true);
						var toggle = jumpTo.children('.toggle:not(.link-toggled)');
						if (toggle.length > 0) {
							toggle.click();
						}
						ss.htmlBody.animate({
							scrollTop : (ss.metrics.elemTop(jumpTo))
						}, 1000);
						var haltScrollTimeout = setTimeout(function() {
							haltScrollListener = false;
							clearTimeout(haltScrollTimeout);
						}, 500);
						clearTimeout(bodyAnimateTimeout);
					}, 10);
				}
			});

			//확인 필요
			//$('body').on(ss.clickEvent, '.jump-toggle', function(e) {
			$('.jump-toggle').on('click', function(e) {
				if (container.hasClass('open')) {
					container.removeClass('open');
					containerClone.removeClass('open');
				} else {
					container.addClass('open');
					containerClone.addClass('open');
				}
			});

			function checkBtnGoTopOverBottom() {
				if (!docked) return;
				if (($(window).scrollTop() + $(window).height()) > backTotop.offset().top) {
					(btnGoTop.hasClass('on')) ? btnGoTop.removeClass('on') : null;
				} else {
					(!btnGoTop.hasClass('on')) ? btnGoTop.addClass('on') : null;
				}
			}

			var scrollValue = -1;
			eventBridge.on(eventDictionary.global.SCROLL, function(e, metrics) {
				checkBtnGoTopOverBottom();
				// if (haltScrollListener || metrics.device ===
				// 'tablet-landscape' || metrics.device === 'desktop') {return;}
				var jumpTop = (container.offset().top)
				if (metrics.scrollTop >= jumpTop) {
					dock();
				} else {
					undock();
				}

				if (docked && scrollUpdate) {
					setSelectedItemAt(getCurrentListItem(metrics.scrollTop),null);
				}

				dir = scrollValue < metrics.scrollTop ? 'down' : 'up';
				scrollValue = metrics.scrollTop;

				if (container.hasClass('open')) {
					container.removeClass('open');
					containerClone.removeClass('open');
				}
			});

			eventBridge.on(eventDictionary.global.RESIZE, function(e, metrics) {
				checkBtnGoTopOverBottom();
				currentWinHeight = ss.metrics.height;
				currentWinWidth = ss.metrics.width;
				var currentWin
				updateInfoSection();
				if (!metrics) {
					if (currentWinHeight <= 680 || ss.metrics.device === 'tablet-landscape' || ss.metrics.device === 'desktop') {
						undock();
					}
				}

				if ($('a.clearfix.toggle').is(':visible')) {
					if ($('a.clearfix.toggle').hasClass('link-toggled')) {
						$('a.clearfix.toggle').next('.nor-btnList').show();
					} else {
						$('a.clearfix.toggle').next('.nor-btnList').hide();
					}
				} else {
					$('a.clearfix.toggle').next('.nor-btnList').show();
				}

				if (ownerSection.length > 0 && latestReview.length > 0) {
					if ( ss.metrics.device === 'desktop' ) {
						if (latestReview.data("insertBefore") != 'true') {
							latestReview.insertBefore(ownerSection);
							latestReview.data("insertBefore", 'true');
						}
					} else {
						if (latestReview.data("insertBefore") != 'false') {
							latestReview.insertAfter(ownerSection);
							latestReview.data("insertBefore", 'false');
						}
					}
				}
			});
		}

		var updateInfoSection = function() {
			if (ss.metrics.width >= 768) {
				if (!infoSectionPl)
					infoSectionPl = parseInt(infoSection.css("padding-left"));
				if (!infoSectionPr)
					infoSectionPr = parseInt(infoSection.css("padding-right"));
				infoSection.width(container.outerWidth() - btnSection.outerWidth() - infoSectionPl - infoSectionPr - 20);
			} else {
				infoSection.css("width", "100%");
			}
		}

		var undock = function() {
			if (!docked) {
				return;
			}
			btnGoTop.removeClass( "on" )
			docked = false;
			containerClone.removeClass('docked');
			show();
			container.css('visibility', 'visible');
			btnSection.hide();
			setSelectedItem(jumpLinks.eq(0));
		};

		var dock = function(force) {
			// if (currentWinHeight <= 680) {return;}
			var f = typeof force === 'undefined' ? false : force;
			if (docked && !f) {
				return;
			}
			btnGoTop.addClass( "on" );
			containerClone.addClass('docked');
			//container.css('visibility', 'hidden');
			$('a[tag-code=features]').removeClass('on');
			hide();
			btnSection.show();
			docked = true;

			// 모바일 버젼일 경우 jump-module의 버튼이 겹치는 현상 수정.
			var jumpModuleCnt = $('body').find('.jump-module:last > p.btn-section > a:visible').length;

			if(jumpModuleCnt == 2){
				$('body').find('.jump-module:last > p.btn-section > a').each(function (idx) {
					if ($(this).css('display') != 'none') {
						if(!$(this).hasClass('[class^=btn-type]')){
							$(this).addClass(idx == 1 ? 'btn-type-left': 'btn-type-right');
						}
					}
				});
			}


		};

		var getCurrentListItem = function(scrollTop) {
			var contentsTop = 0;
			var contentsHeigth = 0;
			var $contents;
			scrollTop += 50
			for ( var i = 0, count = jumpContents.length; i < count; i += 1) {
				$contents = jumpContents.eq(i);
				contentsTop = $contents.offset().top - container.outerHeight();
				contentsHeigth = $contents.outerHeight();
				if (contentsTop <= scrollTop && scrollTop <= contentsTop + contentsHeigth) {
					return i;
				} else if (hasMore && firstMoreItem.offset().top - container.outerHeight() <= scrollTop) {
					return jumpLinksCount - 1;
				}
			}
			return -1;
		};

		var setSelectedItem = function($item) {
			if (selctedItem)
				selctedItem.removeClass('on');
			if (!$item)
				return;
			$item.addClass('on');
			selctedItem = $item;
		};

		var dir = null;

		var setSelectedItemAt = function(idx,scrollUse) {
			setSelectedItem((idx == -1) ? null : jumpLinksClone.eq(idx));
			if(idx != -1 && currentScrollNo != idx){

				currentScrollNo = idx;
				var currentItemLowerNm = $($('.jump-module').eq(0).find('.jump-link li a')[currentScrollNo]).attr('tag-code').toLowerCase();

				if(scrollUse == "N"){
					sendClickCode('jumpto','jump to:'+currentItemLowerNm);
				    console.log("click : " +currentItemLowerNm);
					//console.log("scrollUse : " +scrollUse);
				}else{
					sendClickCode('jumpto','jump to:scroll:'+currentItemLowerNm);
					console.log("scroll : " +currentItemLowerNm);
				}
				//sendClickCode('jumpto','jump to:'+currentItemLowerNm);
			}
		};
		/**
		 * @method hide
		 */
		function hide() {
			toggleButton.removeClass('expanded');
			toggleButtonClone.removeClass('expanded');
			collapsed = true;
		}

		/**
		 * @method show
		 */
		function show() {
			toggleButton.addClass('expanded');
			toggleButtonClone.addClass('expanded');
			collapsed = false;
		}

		function createItems() {
			var firstMoreItemIndex = (hasMore) ? jumpContents.index(firstMoreItem) : -1;
			var listContainer = $('.jump-module > .jump-link-list > ul');
			var label = null;
			var tag = null;
			var $item;
			/*
			jumpContents.each(function(index, item) {
				label = $(item).find('.module-heading > .heading-text').text();
				tag =  $(item).attr( "tag-code" );
				if(tag == undefined || tag == null || tag == ""){
					tag = label;
				}
				//VersaTag
				if(SITE_CD == 'ae' || SITE_CD == 'ae_ar'){
					if(tag == 'TECH SPECS'){
						if ('SM-N910CZDEXSG'.indexOf($('#modelCode').val())!=-1) {
							$item = $('<li><a href="javascript:void(0);" onclick = "versaTagObj.generateRequest(\'https://www.samsung.com/ps/button/techspecs/click.html\');" class="jump-link" tag-code="'+tag+'">' + label + '</a></li>');
						}else{
							$item = $('<li><a href="javascript:void(0);" class="jump-link" tag-code="'+tag+'">' + label + '</a></li>');
						}
					}else{
						$item = $('<li><a href="javascript:void(0);" class="jump-link" tag-code="'+tag+'">' + label + '</a></li>');
					}
				}else{
					$item = $('<li><a href="javascript:void(0);" class="jump-link" tag-code="'+tag+'">' + label + '</a></li>');
				}
				listContainer.append($item);
			});
			if (hasMore)
				if(SITE_CD == 'ae' || SITE_CD == 'ae_ar'){
					if ('SM-N910CZDEXSG'.indexOf($('#modelCode').val())!=-1) {
						listContainer.append($('<li><a href="javascript:void(0);"  onclick = "versaTagObj.generateRequest(\'https://www.samsung.com/ps/button/moreinfo/click.html\');" class="jump-link" data-href=".go-more" tag-code="MORE">' + pdpMsg.more + '</a></li>'));
					}else{
						listContainer.append($('<li><a href="javascript:void(0);" class="jump-link" data-href=".go-more" tag-code="MORE">' + pdpMsg.more + '</a></li>'));
					}
				}else{
					listContainer.append($('<li><a href="javascript:void(0);" class="jump-link" data-href=".go-more" tag-code="MORE">' + pdpMsg.more + '</a></li>'));
				}
			*/
			jumpLinks = container.find('ul li a.jump-link');
			jumpLinksClone = containerClone.find('ul li a.jump-link');
			jumpLinksCount = jumpLinksClone.length;

			setSelectedItem(jumpLinks.eq(0));

			var goToHandler = function(event) {
				var $item = $(this);
				var index = ((event.data.isClone) ? jumpLinksClone : jumpLinks).index($item);
				var dataHref = $item.attr('data-href');
				var jumpTo;
				var jumpToPlus;
				var doubleFeatureYN;
				var featureConNo;
				var lastContNo;
				if (dataHref == ".go-more")
					jumpTo = firstMoreItem;
				else
					//리뷰 사용 국가 분기 dong_won.lee, uk,ru,es,ca,in,se,at,pt,cn,fr,tr,za,pl,dk,fi,no,ua,ua_ru,nz,ph,sec,
					if ("uk".indexOf(getOmniSiteCd())!=-1 && "SM-G928FZDABTU".indexOf(getOmniInputTagValue("model_code").toUpperCase())!=-1 ||
						"uk".indexOf(getOmniSiteCd())!=-1 && "SM-G928FZDEBTU".indexOf(getOmniInputTagValue("model_code").toUpperCase())!=-1 ||
						"uk".indexOf(getOmniSiteCd())!=-1 && "SM-G928FZKEBTU".indexOf(getOmniInputTagValue("model_code").toUpperCase())!=-1 ||
						"uk".indexOf(getOmniSiteCd())!=-1 && "SM-G928FZKABTU".indexOf(getOmniInputTagValue("model_code").toUpperCase())!=-1 
					    ) {
						//실제로 리뷰의 사용 여부 확인(리뷰, 피쳐 컨텐츠의 기준)
							if('FEATURES'.indexOf(jumpContents.eq(1).attr('tag-code'))!=-1 && 'FEATURES'.indexOf(jumpContents.eq(0).find('div > span').text())!=-1){
								doubleFeatureYN = 'Y'
								//featureConNo = idx;
							}
						$.each(jumpContents, function(idx){
							if('FEATURES'.indexOf($(this).attr('tag-code'))!=-1){
								//피쳐의 No를 기억
								featureConNo = idx;
								
							}
							if('REVIEWS'.indexOf($(this).attr('tag-code'))!=-1){
								//리뷰가 사용되지 아니하면, 리뷰의 No를 기억
								if(!$('.reviews-module').is(":visible")){
									jumpToPlus = idx;
								}
							}
							lastContNo = idx;
						})
						//JumpTobar 해당 컨텐츠가 리뷰의 기준 시점과 같거나 더 오른쪽의 것을 클릭하면 contnest+1을 찾아감. 
						if(jumpToPlus != undefined && index >= jumpToPlus)  
							//More 클릭 시 
								if(lastContNo == index)
									jumpTo = firstMoreItem;
								else
									jumpTo = jumpContents.eq(index+1);
						else
							//피쳐 콘텐츠가 double이고, 피쳐보다 우측에 있는 것을 선택시, contenst+1을 찾아감. 
							if('Y'.indexOf(doubleFeatureYN)!=-1 && index >= 1)
								//More 클릭 시 
								if(lastContNo == index)
									jumpTo = firstMoreItem;
								else
									jumpTo = jumpContents.eq(index+1);
							else
								jumpTo = jumpContents.eq(index);
					}else{
					//다른 국가
						jumpTo = jumpContents.eq(index);
					}
				scrollUpdate = false;

				if(jumpTo && jumpTo.length > 0){
					scrollUse = "N";
				}else{
					scrollUse = "";
					console.log("not scrollUse"+scrollUse);
				}

				setSelectedItemAt(index,scrollUse);
				if (jumpTo && jumpTo.length > 0) {
					dock(true);
					haltScrollListener = true;
					var bodyAnimateTimeout = setTimeout(function() {
						ss.htmlBody.stop().animate({
							scrollTop : (ss.metrics.elemTop(jumpTo))
						}, 1000, function() {
							scrollUpdate = true;
						});
						var haltScrollTimeout = setTimeout(function() {
							haltScrollListener = false;
							clearTimeout(haltScrollTimeout);
						}, 500);
						clearTimeout(bodyAnimateTimeout);
					}, 10);
				}
				if (container.hasClass('open')) {
					container.removeClass('open');
					containerClone.removeClass('open');
				}
				event.preventDefault();
				event.stopPropagation();

			}

			jumpLinksClone.on(ss.clickEvent, {
				isClone : true
			}, goToHandler);
			jumpLinks.on(ss.clickEvent, {
				isClone : false
			}, goToHandler);
			infoSection = $(".info-section");
			btnSection = $(".btn-section");
			eventBridge.trigger(jQuery.Event(eventDictionary.global.RESIZE));
			btnSection.hide();
		}

		init();
		createItems();

	};

	/**
	 * PDPFeaturesController class
	 *
	 * @class $.PDPStandard.PDPFeaturesController
	 * @constructor
	 */
	ss.PDPStandard.PDPFeaturesController = function(params) {
		var container = $('.features-module');
		var moreFeaturesWrapper = container.find('.more-features');
		var moreFeatures = moreFeaturesWrapper.find('.feature,.mgFeature_more');

		/**
		 * Initializaiton function which runs at object instantiation time.
		 *
		 * @method init
		 */
		function init() {

			var features = $('.features-module .set-size');
			// mobile-portrait: 360x640
			// mobile-landscape: 640x360
			// tablet-portrait: 800x1150
			// tablet-landscape: 1280x700
			// desktop: 1920x1129

			var onResize = function(e, metrics) {
				var h,
				w = metrics.width,
				device = metrics.device;

				if (device === 'mobile') {
					h = (w * 1150) / 800;
				} else if (device === 'mobile-landscape') {
					h = (w * 1150) / 800;
				} else if (device === 'tablet-portrait') {
					h = (w * 1472) / 1024;
				} else if (device === 'tablet-landscape') {
					h = (w * 684) / 1280;
				} else {
					h = (w * 1026) / 1920;
				}

				if (ss.metrics.isIE8() === 8) {
					w = 1280;
					h = (w * 684) / 1280;
				}

				features.css({
					width: w,
					height: h
				});
			};
			eventBridge.on(eventDictionary.global.RESIZE, function() {
				onResize(null, ss.metrics);

				if (!window.tmpCnt) {
					window.tmpCnt = 0;
				}
				window.tmpCnt += 1;
			/*
			 * $('#s7viewer').hide(); if (window.scene7 &&
			 * window.scene7.container && window.scene7.container.resize ) { var
			 * tmp=setTimeout(function(){
			 *
			 * window.tmpCnt -= 1; clearTimeout(tmp); if ( window.tmpCnt == 0 ) {
			 * window.scene7.container.resize($('#s7viewer').width(),
			 * $('#s7viewer').height());
			 * window.scene7.zoomView.resize($('#s7viewer').width(),
			 * $('#s7viewer').height()); $('#s7viewer').show(); } },200); }
			 */

			});
			// todo toggle refer
			container.find('.view-more-features .module-heading').on(ss.clickEvent, function() {

				if (!$(this).hasClass('expanded')) {
					$(this).addClass('expanded');

					moreFeatures.show();

					var offset = ss.metrics.elemTop(moreFeaturesWrapper);
					ss.htmlBody.animate({scrollTop: offset}, 1000);
				} else {
					$(this).removeClass('expanded');

					moreFeatures.hide();
				}

				container.find('.icon-plus').toggleClass('icon-minus');

			});

			onResize(null, ss.metrics);
		}

		init();
	};

	/**
	 * PDDAccessories class
	 *
	 * @class $.PDPStandard.PDDAccessories
	 * @constructor
	 */
	ss.PDPStandard.PDPAccessories = function(params) {
		var currentAccessory = 0;
		var accessoriesAnim = false;

		var container = $('.accessories-module');
		var containerLayout = container.find('.wrap');
		var accessoriesWraps = containerLayout.children('li');
		var accessories = $('.accessory');
		var carousel = []; /* ADD ADNStyle */

		var carouselSwipe = null;

		var previousAccessory = 0;

		/**
		Initializaiton function which runs at object instantiation time.

		@method init
		**/
		function init() {
			initAccessories();
		}

		function initCarousel() {
			if (carousel) {
				return;
			}

		/* skip carousel
			//container.removeClass('no-carousel').addClass('ss-carousel');
			//carousel = new ss.Carousel(container, {});
			//carousel.init();
	  */
		// carousel.fastTabFix();
		}

		function removeCarousel() {
			//carousel.destroy();
			carousel = null;
			containerLayout.css('width', '100%');
			container.removeClass('ss-carousel').addClass('no-carousel');
		}

		function needsCarousel() {
			var ie8 = ss.metrics.isIE8();
			return (ss.metrics.width <= 800 && !ie8);
		}
		/**
		@function initAccessories
		Setup accessories carousel
		**/
		function initAccessories() {

			if (needsCarousel()) {
				initCarousel();
			}
			eventBridge.on(eventDictionary.global.RESIZE, function() {
				if (needsCarousel()) {
					initCarousel();
				} else if (carousel) {
					removeCarousel();
				}
			});

			eventBridge.on(eventDictionary.global.EVENT_SHOW_VIDEO, function() {


			});

			accessoriesAltClasses();
		}

		/**
		Apply alternating classes style in IE8
		**/
		function accessoriesAltClasses() {
			var i;
			for (i = 0; i < accessories.length; i++) {
				var accessory = accessories.eq(i);
				i % 4 === 0 ? accessory.addClass('alternate') : '';
				(i + 1) % 4 === 0 ? accessory.addClass('alternate') : '';
				i % 2 === 0 ? accessory.addClass('odd') : accessory.addClass('even');
			}
		}

		init();
	};

	/**
	PDPThreeSixty class

	@class $.PDPStandard.PDPThreeSixty
	@constructor
	**/
	ss.PDPStandard.PDPThreeSixty = function(params) {
		// 기존url 값에  sitecode 값 받는 부분 없어서 추가
		var siteCode = $('#siteCode').val();
		var container = $('.threesixty-module');
		var containerAnim = false;
		var assetContainer = container.find('.product');

		var slider = container.find('.slider');
		var sliderHandle;
		var playButton = container.find('.play-button');
		var pauseButton = container.find('.pause-button');

		var threeSixtyButton = $('#threesixty-tab'); //$('.media-module').find('.threesixty');
		var closeButton = container.find('.close-button');

		var numAsets = 0;

		var currentPosition = 1;

		var isAnimating = false;
		var animTimer;
		var imgs = [];

        var onslideCnt=0;
        var assets;


		var spinSetId = assetContainer.attr('data-url');
		//		http://127.0.0.1:8080/spinImage/uk_PS51F4500AWXXU_black_spinset?mType=json
		if (siteCode != undefined && spinSetId != undefined
		&& siteCode != null && spinSetId != null && spinSetId != "") {

			//testurl :: /uk/spinImage/uk_EC-WB850FBPBGB_spin?mType=json
			//var url = '/' + siteCode + '/data-consumer/spinImage/' + spinSetId + '?mType=json';

			var url;

			var urlDomain = document.location.href.match(/http[s]*:\/\/([a-zA-Z0-9\-\.]*)/)[1];

			if(urlDomain.indexOf("preview4") > -1){
				url = 'http://stg-images.samsung.com/is/image/samsung/' + spinSetId;
			} else {
				url = 'http://images.samsung.com/is/image/samsung/' + spinSetId;
			}

			console.info("url  : " + url );

			$.ajax({
				url: url,
				data:  {
					req     : "imageset,json",
					handler : "S7jsonResponse"
				},
				dataType: 'jsonp',
				jsonpCallback : "S7jsonResponse",
				success: function(json) {

					responseData = eval(json);

					spinIArray = responseData.IMAGE_SET.split(",");

					numAsets = spinIArray.length;
					var imageList = spinIArray;

					for (var i = 0; i < numAsets; i++) {
						var asset = $('<div class="asset"></div>');
						//asset.append('<img class="loading-asset async-img" src="http://images.samsung.com/is/image/' + imageList[i] + '?wid=1080&amp;hei=1080' + '" alt="' + $('#displayName').val() + '" />');
						assetContainer.append(asset);

		                imgs[i] = new ss.AsyncImageLoader({
		                    container: asset,
		                    imagePath: "http://images.samsung.com/is/image/" + imageList[i].replace(";", "") + "?wid=1080&hei=1080",
		                    altText: $('#displayName').val(),
		                    instantLoad: false
		                });

						if (i === 0) {
							asset.css( 'display', 'block' );
							imgs[i].loadImg();
						}
					}

					assets = $( '.asset' );

					if (numAsets > 1) {
						init();
					} else {
						wrapBtnSize();
					}
				},
				error: function(xmlData) {
					console.info("Load Error!");
					wrapBtnSize();
				}
			});

			function wrapBtnSize() {
				$('#threesixty-tab').remove();

				// media-module 버튼 사이즈 재설정
				var num;
				if (ss.metrics.deviceLayoutId == 1 && !isIE8) {
					num = $(".media-module .wrap .media").not(".threesixty").length;
				} else {
					num = $(".media-module .wrap .media").length;
				}

				$(".media-module .wrap .media").each(function() {
					if (($(this).attr('style') == 'display: none;') || ($(this).attr('style') == 'display:none')) {
						num = num-1;
					}
				});

				$(".media-module .wrap").removeClass(function(index, css) {
					var classes = css.match(/num-[0-9]/g);
					if (classes) {
						return classes[0];
					} else {
						return null;
					}
				});
				$( ".media-module .wrap" ).addClass( "num-" + num );

			}

			/**
				Initializaiton function which runs at object instantiation time.

				@method init
				**/
			function init() {
				var onSlideFn = ss.metrics.isIE8() || ss.metrics.isMobile() ? onSlideIE8 : onSlide
				slider.noUiSlider({
					range: [1, numAsets],
					start: 1,
					handles: 1,
					step: 1,
					slide: onSlideFn,
					set: function() {
						onSlideFn(true);
					}
				});

				sliderHandle = slider.find('.noUi-handle');
				sliderHandle.append('<span class="icon-slideHandle"></div>');

				bindEvents();

			}

	        var currentAsset;
	        function onSlideIE8(force) {
	            var sliderPosition = Math.round(slider.val());
	            if(sliderPosition !== currentPosition || force) {
	            	if( currentAsset ) currentAsset.css( 'display', 'none' );
	            	var asset = assets.eq( sliderPosition );
	            	asset.css( 'display', 'block' );
	            	currentAsset = asset;
	            }
	        }

			function onSlide(force) {
				var sliderPosition = Math.round(slider.val());

				if (sliderPosition !== currentPosition || force) {
	            	var asset = assets.eq( sliderPosition );
	            	if( asset.css( 'display' ) != 'block' ) asset.css( 'display', 'block' );
	            	asset.css( "z-index", onslideCnt++ );

					currentPosition = sliderPosition;
				}
			}

			function bindEvents() {

	            if(isWow){
	                threeSixtyButton.on(ss.clickEvent, threeSixtyButtonClickHandler_wow);
	                eventBridge.on(eventDictionary.pdpStandard.EVENT_HERO_SHOW, heroShow_wow);
	                eventBridge.on(eventDictionary.pdpStandard.EVENT_GALLERY_SHOW, galleryShow_wow);
	                eventBridge.on(eventDictionary.pdpStandard.EVENT_SAMPLEIMAGES_SHOW, sampleImagesShow_wow);
	                closeButton.on('click', closeButtonClickHandler_wow);
	            }else{
	                threeSixtyButton.on(ss.clickEvent, threeSixtyButtonClickHandler_standard);
	                eventBridge.on(eventDictionary.pdpStandard.EVENT_HERO_SHOW, heroShow_standard);
	                eventBridge.on(eventDictionary.pdpStandard.EVENT_GALLERY_SHOW, galleryShow_standard);
	                eventBridge.on(eventDictionary.pdpStandard.EVENT_SAMPLEIMAGES_SHOW, sampleImagesShow_standard);
	                closeButton.on('click', closeButtonClickHandler_standard);
	            }

	            function threeSixtyButtonClickHandler_wow() {

					/* Analytics_tagging */
					sendClickCode('pdp_360', '360');

					if (!containerAnim) {
						$('.media-module .media.current').removeClass('current');
						threeSixtyButton.addClass('current');

						containerAnim = true;

						container.slideDown(500, function() {
							containerAnim = false;
						});
						ss.scrollWrapper.scrollTop(0);


						eventBridge.trigger(jQuery.Event(eventDictionary.pdpStandard.EVENT_THREESIXTY_SHOW));
					}
					$('.play-button').trigger('click');
	            }

	            function threeSixtyButtonClickHandler_standard() {

					/* Analytics_tagging */
					sendClickCode('pdp_360', '360');

	                if(!containerAnim) {
	                    if(!viewSection.hasClass('on')) viewSection.addClass('on');

	                    $('.media-module .media.current').removeClass('current');
	                    threeSixtyButton.addClass('current');

	                    containerAnim = false;

	                    container.css('display', 'block');

	                    $('.lightbox-skrim').remove();
	                    $('body').append('<div class="lightbox-skrim"></div>');
	                    $('.lightbox-skrim').on(ss.clickEvent, function (){
	                        closeButton.trigger('click');
	                    });

	                    eventBridge.trigger(jQuery.Event(eventDictionary.pdpStandard.EVENT_THREESIXTY_SHOW));
	                    viewSection[0].popAlign();

	                    closeButton.focus();
	                }
	                $('.play-button').trigger('click');
	            }

	            function heroShow_wow(e, data){
	                container.slideUp(500);
	            }

	            function heroShow_standard(e, data){
	                container.css('display', 'none');
	            }

	            function galleryShow_wow(e, data){
	                container.slideUp(500);
	            }

	            function galleryShow_standard(e, data){
	                container.css('display', 'none');
	            }

	            function sampleImagesShow_wow(e, data){
	                container.slideUp(500);
	            }

	            function sampleImagesShow_standard(e, data){
	                container.css('display', 'none');
	            }

				// 360 close
	            function closeButtonClickHandler_wow(e) {

					e.preventDefault();

					$('.media-module .media.current').removeClass('current');

					if (isAnimating) {
						stopAnim();
					}

					container.slideDown(500, function() {
						containerAnim = false;
						$('.media-module').find('.gallery').trigger(ss.clickEvent);
					//eventBridge.trigger(jQuery.Event(eventDictionary.pdpStandard.EVENT_GALLERY_SHOW));
					});
				//eventBridge.trigger(jQuery.Event(eventDictionary.pdpStandard.EVENT_HERO_SHOW));
				//eventBridge.trigger(jQuery.Event(eventDictionary.pdpStandard.EVENT_THREESIXTY_PAUSE));
				}

	            function closeButtonClickHandler_standard(e) {

	                e.preventDefault();

	                $('.media-module .media.current').removeClass('current');

	                if(isAnimating) {
	                    stopAnim();
	                }

	                if(viewSection.hasClass('on')) viewSection.removeClass('on');
	                threeSixtyButton.focus();

	                eventBridge.trigger(jQuery.Event(eventDictionary.pdpStandard.EVENT_HERO_SHOW));
	                eventBridge.trigger(jQuery.Event(eventDictionary.pdpStandard.EVENT_THREESIXTY_PAUSE));
	            }

				function loadRestImgs() {
					for ( var i = 1; i < numAsets; i++) {
						imgs[i].loadImg();
					}
				}

				sliderHandle.on('click touchstart touchend', function() {
					if (isAnimating) {
						stopAnim();
					}
				});

				playButton.on('click', function() {
					if (!isAnimating) {
						startAnim();
					}
				});

				pauseButton.on('click', function() {
					if (isAnimating) {
						stopAnim();
					}
				});

				eventBridge.on(eventDictionary.pdpStandard.EVENT_THREESIXTY_PAUSE, function(e, data) {
					if (isAnimating) {
						stopAnim();
					}
				});

	            eventBridge.on(eventDictionary.pdpStandard.EVENT_THREESIXTY_SHOW, function(e, data) {
	                loadRestImgs();
	                //adding a timeout to compensate for 450ms transition to show the controls
	                var startAnimTimeout = window.setTimeout( function(){
	                    startAnim();
	                    clearTimeout(startAnimTimeout);
	                }, 550 );
	            });


			}



			function startAnim() {
				isAnimating = true;
				playButton.addClass('active');
				pauseButton.removeClass('active');
				if (animTimer) {
					clearInterval(animTimer);
				}
				animTimer = setInterval(advanceAnim, 100);
			}

			function advanceAnim() {
				currentPosition++;
				if (currentPosition > numAsets) {
					currentPosition = 0;
				}

				slider.val(currentPosition, true);
			}

			function stopAnim() {
				isAnimating = false;
				pauseButton.addClass('active');
				playButton.removeClass('active');

				clearInterval(animTimer);
			}
		}

		if ($('#threesixtyType').val() == 'D') {
			if (ss.metrics.device == "desktop") {
				$('#threesixty-tab').css('display', '');
				threeSixty3DBind();
			}
		}

		function threeSixty3DBind() {

            if(isWow){
                threeSixtyButton.on(ss.clickEvent, threeSixtyButtonClickHandler_wow);
                eventBridge.on(eventDictionary.pdpStandard.EVENT_HERO_SHOW, heroShow_wow);
                eventBridge.on(eventDictionary.pdpStandard.EVENT_GALLERY_SHOW, galleryShow_wow);
                eventBridge.on(eventDictionary.pdpStandard.EVENT_SAMPLEIMAGES_SHOW, sampleImagesShow_wow);
                closeButton.on('click', closeButtonClickHandler_wow);
            }else{
                threeSixtyButton.on(ss.clickEvent, threeSixtyButtonClickHandler_standard);
                eventBridge.on(eventDictionary.pdpStandard.EVENT_HERO_SHOW, heroShow_standard);
                eventBridge.on(eventDictionary.pdpStandard.EVENT_GALLERY_SHOW, galleryShow_standard);
                eventBridge.on(eventDictionary.pdpStandard.EVENT_SAMPLEIMAGES_SHOW, sampleImagesShow_standard);
                closeButton.on('click', closeButtonClickHandler_standard);
            }

            function threeSixtyButtonClickHandler_wow() {

				/* Analytics_tagging */
				sendClickCode('pdp_360', '360');

				if (!containerAnim) {
					$('.media-module .media.current').removeClass('current');
					threeSixtyButton.addClass('current');

					containerAnim = true;

					container.slideDown(500, function() {
						containerAnim = false;
					});
					ss.scrollWrapper.scrollTop(0);
					//$(window).scrollTop(0); //IE8

					eventBridge.trigger(jQuery.Event(eventDictionary.pdpStandard.EVENT_THREESIXTY_SHOW));
				}
			}

            function threeSixtyButtonClickHandler_standard() {

				/* Analytics_tagging */
				sendClickCode('pdp_360', '360');

                if(!containerAnim) {
                    if(!viewSection.hasClass('on')) viewSection.addClass('on');

                    $('.media-module .media.current').removeClass('current');
                    threeSixtyButton.addClass('current');

                    containerAnim = false;

                    container.css('display', 'block');

                    $('.lightbox-skrim').remove();
                    $('body').append('<div class="lightbox-skrim"></div>');
                    $('.lightbox-skrim').on(ss.clickEvent, function (){
                        closeButton.trigger('click');
                    });

                    eventBridge.trigger(jQuery.Event(eventDictionary.pdpStandard.EVENT_THREESIXTY_SHOW));
                    viewSection[0].popAlign();

                    closeButton.focus();
                }
            }

            function heroShow_wow(e, data){
                container.slideUp(500);
            }

            function heroShow_standard(e, data){
                container.css('display', 'none');
            }

            function galleryShow_wow(e, data){
                container.slideUp(500);
            }

            function galleryShow_standard(e, data){
                container.css('display', 'none');
            }

            function sampleImagesShow_wow(e, data){
                container.slideUp(500);
            }

            function sampleImagesShow_standard(e, data){
                container.css('display', 'none');
            }

            function closeButtonClickHandler_wow(e) {

				e.preventDefault();

				$('.media-module .media.current').removeClass('current');

				if (isAnimating) {
					stopAnim();
				}

				container.slideDown(500, function() {
					containerAnim = false;
					$('.media-module').find('.gallery').trigger(ss.clickEvent);
				});

				threeSixtyButton.focus();
			}

            function closeButtonClickHandler_standard(e) {

                e.preventDefault();

                $('.media-module .media.current').removeClass('current');

                if(isAnimating) {
                    stopAnim();
                }

                if(viewSection.hasClass('on')) viewSection.removeClass('on');
                threeSixtyButton.focus();

                eventBridge.trigger(jQuery.Event(eventDictionary.pdpStandard.EVENT_HERO_SHOW));
                eventBridge.trigger(jQuery.Event(eventDictionary.pdpStandard.EVENT_THREESIXTY_PAUSE));
            }

		}
	};

	ss.PDPStandard.IE8Zoom = function(params) {
		var container = params.container,
		zoomIn = params.zoomIn,
		zoomOut = params.zoomOut,
		maxScale = (params.scale - 1),
		currentScale = 0,
		breakpoints = [],
		currentDims = {
			width: 0,
			height: 0,
			left: 0,
			top: 0,
			'marginLeft': 0
		};


		function init() {
			refreshDimensions();
			bindEvents();
		}

		function bindEvents() {
			zoomIn.on('click', function() {
				zoom('in');
			});
			zoomOut.on('click', function() {
				zoom('out');
			});
		}

		function refreshDimensions() {
			var positionToUse = container.is(':visible') ? 'offset' : 'position';
			currentDims = {
				width: (container.outerWidth()),
				height: (container.outerHeight()),
				left: (container[positionToUse]().left),
				top: (parseInt(container.css('top'), 10)),
				'marginLeft': 0
			};

			breakpoints[0] = currentDims;
			for (var i = 1, len = (maxScale + 1); i < len; i++) {
				var b = breakpoints[i - 1];
				var newW = b.width + (b.width * 0.2);
				var newH = b.height + (b.height * 0.2);
				var newL = b.left - ((newW - b.width) / 2);
				var newT = b.top - ((newH - b.height) / 2);

				breakpoints[i] = {
					width: newW,
					height: newH,
					left: newL,
					top: newT,
					'marginLeft': 0
				};
			}
		}

		function zoom(which) {
			if (which === 'in' && currentScale < maxScale) {
				currentScale = currentScale + 1;
				//container.css(updateZoomDimensions('in'));
				container.css(breakpoints[currentScale]);
			} else if (which === 'out' && currentScale > 0) {
				//container.css(updateZoomDimensions('out'));
				currentScale = currentScale - 1;
				container.css(breakpoints[currentScale]);
			}
			if (currentScale === 0) {
				container.attr('data-zoom-direction', 'in');
			} else if (currentScale === maxScale) {
				container.attr('data-zoom-direction', 'out');
			}
		}

		init();
	};

	/**
	PDPGallery class

	@class $.PDPStandard.PDPGallery
	@constructor
	**/
	ss.PDPStandard.PDPGallery = function(params) {

		var container = $('.gallery-module');
		var containerAnim = false;
		var assetContainer = container.find('.product');

		var galleryButton = $('.media-module').find('.gallery');
		var closeButton = container.find('.close-button');
		var zoomIn = container.find('.zoom-in-button');
		var zoomOut = container.find('.zoom-out-button');

		var thumbnailGallery = container.find('.thumbnail-gallery');

		var firstLoad = true;
		var prdColor = getUrl('color');

		var selectColor = null;
		var selectIndex = 0;

		var isPanning = false;

		var prevArrow = thumbnailGallery.find('.prev');
		var nextArrow = thumbnailGallery.find('.next');

		var currentThumbnail = 0;
		var thumbnailsAnim = false;

		var currentSwatchID;
		window.imgServerUrlChk = $($('#prdImgData').find('[data-heroimagetype="G"]')[0]).find('div').attr('data-media-tablet-portrait');

		if (imgServerUrlChk == null) {
			imgServerUrlChk = "http://images.samsung.com/is/image/";
		} else {
			imgServerUrlChk = imgServerUrlChk.substr(0, imgServerUrlChk.indexOf('/is/')) + "/is/image/";
		}
		console.info("imgServerUrlChk :: ", imgServerUrlChk);

		//var zoomViewer = window.scene7 = new s7viewers.ZoomViewer();

		var video_url = $('#prdImgData').find("[data-heroimagetype='V']");

		window.assetJson = {"set": {"n": "scene","pv": "1.0","type": "media_set","item": [{"type": "img_set","set": {"n": "scene","type": "img_set","item": []}}]}};

		var productData = {'products': [{}]};
		var bindColorNames = $('#bindColorNames').val();
		if (bindColorNames == undefined || bindColorNames == null || bindColorNames == 'nocolor') {
			bindColorNames = ['default'];
		} else {
			bindColorNames = bindColorNames.split(',');
		}

		var bindColors = $('#bindColors').val();
		if (bindColors == undefined || bindColors == null || bindColors == "") {
			bindColors = ['default'];
		} else {
			bindColors = bindColors.split(',');
		}

		var rsptImgColor = $('#rpstColorCode').val();

		var defaultColorIndex = $('#selectColor').find('a').index($('#selectColor').find('[data-rsptColor="Y"]'));
		if(defaultColorIndex == -1){
			defaultColorIndex = 0;
			if(rsptImgColor != undefined  && rsptImgColor != null && rsptImgColor != ""){
				for(var i=0; i < bindColors.length; i++ ){
					if(rsptImgColor == bindColors[i]){
						defaultColorIndex = i;
					}
				}
			}
		}

		var defaultColor =  $('#selectColor').find('[data-rsptColor="Y"]').attr('data-color');
		if(defaultColor == undefined ){
			defaultColor = null;
			if(rsptImgColor != undefined  && rsptImgColor != null && rsptImgColor != ""){
				for(var i=0; i < bindColors.length; i++ ){
					if(rsptImgColor == bindColors[i]){
						defaultColor = bindColors[i];
					}
				}
			}
		}

		for (var i = 0; i < bindColorNames.length; i++) {
			var image_url = $('#prdImgData').find("[gallery-color-type='" + bindColors[i] + "']");
			productData.products[i] = {'swatchColor': bindColorNames[i],'swatchColorCode': bindColors[i],'images': []};

			var j = 0;
			for (; j < image_url.length; j++) {
				var assetUrl = '';
				if ($(image_url[j]).attr('gallery-image-url').indexOf('samsung/') != -1) {
					assetUrl = $(image_url[j]).attr('gallery-image-url').substr($(image_url[j]).attr('gallery-image-url').indexOf('samsung/'));
				} else {
					assetUrl = $(image_url[j]).attr('gallery-image-url');
				}
				productData.products[i].images[j] = {
					'type': 's7',
					'thumbnail': $(image_url[j]).attr('gallery-thumb-url')
					,'url': imgServerUrlChk
					,'asset': assetUrl + "?i=" + j
					,'width': $(image_url[j]).attr('gallery-size-width')
					,'height': $(image_url[j]).attr('gallery-size-height')
				};
			}

			for (var k = 0; k < video_url.length; k++) {
				var assetUrl = '';
				var assetWidth = '';
				var assetHeight = '';
				if ($(video_url[k]).find('div').attr('gallery-image-url').indexOf('samsung/') != -1) {
					assetUrl = $(video_url[k]).find('div').attr('gallery-image-url').substr($(video_url[k]).find('div').attr('gallery-image-url').indexOf('samsung/'));
					assetWidth = ($(video_url[k]).find('div').attr('gallery-size-width') == undefined || $(video_url[k]).find('div').attr('gallery-size-width') == "") ? "3000" : $(video_url[k]).find('div').attr('gallery-size-width');
					assetHeight = ($(video_url[k]).find('div').attr('gallery-size-height') == undefined || $(video_url[k]).find('div').attr('gallery-size-height') == "") ? "2000" : $(video_url[k]).find('div').attr('gallery-size-height')
				} else {
					assetUrl = "samsung/gallery_thumbnail";
					assetWidth = "700";
					assetHeight = "467";
				}

				if ($(video_url[k]).find('div').attr('gallery-image-url') == "") {
					productData.products[i].images[j] = {'thumbnail': "http://images.samsung.com/is/image/samsung/gallery_thumbnail"
						,'asset': assetUrl + "?i=" + j
						,'code': $(video_url[k]).find('div').attr('gallery-code')
						,'type': $(video_url[k]).find('div').attr('gallery-videoType') == "B" ? "be" : "yt"
						,'width': assetWidth
						,'height': assetHeight
					};
				} else {
					productData.products[i].images[j] = {'thumbnail': $(video_url[k]).find('div').attr('gallery-thumb-url')
						,'asset': assetUrl + '?i=' + j
						,'code': $(video_url[k]).find('div').attr('gallery-code')
						,'type': $(video_url[k]).find('div').attr('gallery-videoType') == "B" ? "be" : "yt"
						,'width': assetWidth
						,'height': assetHeight
					};
				}

				j++;
			}
		}


		// 첫 로딩 시 currentColor 값으로 이미지 세팅
		$('#currentColor').val($('#selectColor').find('.active > a').attr('data-color'));
		if (($('#currentColor').val() != "") && ($('#currentColor').val() != undefined) && ($('#currentColor').val() != null)) {
			defaultColor = $('#currentColor').val();
			// 몇번째 색상인지 체크
			$.each(productData.products, function(i) {
				if (productData.products[i].swatchColorCode === defaultColor) {
					defaultColorIndex = i;
				}
			});
		} else {
			defaultColorIndex = 0;
			defaultColor = bindColors[0];
			$('#currentColor').val(defaultColor);
		}

		function getUrl(strParamName) {
			var strReturn = "";
			var strHref = window.location.href;
			var bFound = false;

			var cmpstring = strParamName + "=";
			var cmplen = cmpstring.length;

			if (strHref.indexOf("?") > -1) {
				var strQueryString = strHref.substr(strHref.indexOf("?") + 1);
				var aQueryString = strQueryString.split("&");
				for (var iParam = 0; iParam < aQueryString.length; iParam++) {
					if (aQueryString[iParam].substr(0, cmplen) == cmpstring) {
						var aParam = aQueryString[iParam].split("=");
						strReturn = aParam[1];
						bFound = true;
						break;
					}
				}
			}
			if (bFound == false)
				return null;
			return strReturn;
		}

		/**
		Initialization function which runs at object instantiation time.

		@method init
		**/
		function init() {
			if (productData.products.length > 1) {
				colorPickerPopover = new ss.Popover('.gallery-module .controls .color-picker', {placement: 'top',content: $('.color-picker-popover-content').html(),html: true,container: '.gallery-module',animation: false});
			}

			var modelCode = $('#modelCode').val();

			// Category에서 색상 값이 넘어올 경우
			/*if (prdColor != null && bindColorNames.length > 1) {
				for (var index = 0; index < bindColorNames.length; index++) {
					if (bindColorNames[index] == prdColor) {
						selectColor = bindColors[index];
						selectIndex = index;
					}
				}
				if (selectColor != null) {

					var url = $('#selectColor').find('[data-color="' + bindColors[selectIndex] + '"]').attr('data-url');
					var group = $('#selectColor').find('[data-color="' + bindColors[selectIndex] + '"]').attr('data-groupcode');
					var model = $('#selectColor').find('[data-color="' + bindColors[selectIndex] + '"]').attr('data-modelcode');

					if (selectIndex == defaultColorIndex) {
						$('#currentColor').val(selectColor);

					} else {

						// 그룹으로 묶이지 않은 색상일경우
						if (group == "" || group == null) {
							$('#currentColor').val(selectColor);

						// 그룹으로 묶인 색상일 경우
						} else {
							// 모델이 동일하지 않을경우
							if (model != modelCode) {
								location.href = url;
								return false;

							} else {
								// 모델이 동일한 경우
								$('#currentColor').val(selectColor);

							}
						}
					}


				} else {
					//new ss.PDPStandard.PDPeCommerce();
					$('#currentColor').val(defaultColorIndex);
				//setupThumbnailGallery(defaultColorIndex);

				}

			// Category에서 색상 값을 받지 못한 경우 또는 색상이 하나밖에 없을때
			} else {
				//new ss.PDPStandard.PDPeCommerce();
				$('#currentColor').val(defaultColorIndex);
			//setupThumbnailGallery(defaultColorIndex);
			}*/

			//$('#currentColor').val(selectColor);

			// 첫 로딩 시 옵션 컬러값이 있을 경우
			var paramModelColor = $('#ParamModelColor').val();
			if ((paramModelColor != "") && (paramModelColor != undefined) && (paramModelColor != null)) {
				var siteCode = $('#siteCode').val();
				var colorCode = $('#currentColor').val();
				var url = '/' + siteCode + '/api/product/gallery/' + $('#ParamModelCode').val() + '?mType=json';
				$.ajax({
					type: 'POST',
					url: url,
					dataType: 'json',
					success: function(data) {
						var htmlStr = "";
						var prdImg = data.xmlData.productImage.productImage;
						// displayname 변경.
						$(".product-title").text(prdImg[0].dispNm);
						$.each(prdImg, function(i) {
							if (this.type == 'R' || this.type == 'G') {
								htmlStr += '<li data-heroImageType="G" image-color-type="' + this.color + '">';
								htmlStr += '<div class="hero responsive-image"';
								htmlStr += 'data-media-tablet-portrait="' + this.url + '?$DT-Gallery$"';
								htmlStr += 'data-media-desktop="' + this.url + '?$DT-Gallery$"';
								htmlStr += 'gallery-image-url="' + this.url + '"';
								htmlStr += 'gallery-thumb-url="' + this.url + '?$XS-Thumbnail$"';
								htmlStr += 'gallery-color-type="' + this.color + '"';
								htmlStr += 'gallery-size-width="' + this.width + '"';
								htmlStr += 'gallery-size-height="' + this.height + '"';
								htmlStr += 'role="img" aria-label="${escSpecialTextdispNm }">';
								htmlStr += '</div>';
								htmlStr += '</li>';
							} else if ((this.type == 'B' || this.type == 'Y') && this.useTIYN == 'Y') {
								htmlStr += '<li data-heroImageType="V">';
								htmlStr += '<div';
								htmlStr += 'gallery-videoType="' + this.type + '"';
								htmlStr += 'gallery-code="' + this.src + '"';
								htmlStr += 'gallery-image-url="' + this.desktopTI + '"';
								htmlStr += 'gallery-thumb-url="' + this.desktopTI + '"';
								htmlStr += 'gallery-size-width="' + this.width + '"';
								htmlStr += 'gallery-size-height="' + this.height + '">';
								htmlStr += '</div>';
								htmlStr += '</li>';
							} else if (this.type == 'B' || this.type == 'Y') {
								htmlStr += '<li data-heroImageType="V">';
								htmlStr += '<div';
								htmlStr += 'gallery-videoType="' + this.type + '"';
								htmlStr += 'gallery-code="' + this.src + '"';
								htmlStr += 'gallery-image-url=""';
								htmlStr += 'gallery-thumb-url=""';
								htmlStr += 'gallery-size-width=""';
								htmlStr += 'gallery-size-height="">';
								htmlStr += '</div>';
								htmlStr += '</li>';
							}
						});
						if((colorCode == "") || (colorCode == "undefined") || (colorCode == null)) {
							colorCode = prdImg[0].color;
						}
						$('#prdImgData').html(htmlStr);
						$('#currentColor').val(colorCode);

						productData.products[defaultColorIndex] = {'swatchColor': bindColorNames[defaultColorIndex],'swatchColorCode': bindColors[defaultColorIndex],'images': []};
						var image_url = $('#prdImgData').find("[gallery-color-type='" + $('#currentColor').val() + "']");
						for (var j = 0; j < image_url.length; j++) {
							var assetUrl = '';
							if ($(image_url[j]).attr('gallery-image-url').indexOf('samsung/') != -1) {
								assetUrl = $(image_url[j]).attr('gallery-image-url').substr($(image_url[j]).attr('gallery-image-url').indexOf('samsung/'));
							} else {
								assetUrl = $(image_url[j]).attr('gallery-image-url');
							}
							productData.products[defaultColorIndex].images[j] = {
								'type': 's7',
								'thumbnail': $(image_url[j]).attr('gallery-thumb-url')
								,'url': imgServerUrlChk
								,'asset': assetUrl + "?i=" + j
								,'width': $(image_url[j]).attr('gallery-size-width')
								,'height': $(image_url[j]).attr('gallery-size-height')
							};
						}
						var video_url = $('#prdImgData').find("[data-heroimagetype='V']");
						for (var k = 0; k < video_url.length; k++) {
							var assetUrl = '';
							var assetWidth = '';
							var assetHeight = '';
							if ($(video_url[k]).find('div').attr('gallery-image-url').indexOf('samsung/') != -1) {
								assetUrl = $(video_url[k]).find('div').attr('gallery-image-url').substr($(video_url[k]).find('div').attr('gallery-image-url').indexOf('samsung/'));
								assetWidth = ($(video_url[k]).find('div').attr('gallery-size-width') == undefined || $(video_url[k]).find('div').attr('gallery-size-width') == "") ? "3000" : $(video_url[k]).find('div').attr('gallery-size-width');
								assetHeight = ($(video_url[k]).find('div').attr('gallery-size-height') == undefined || $(video_url[k]).find('div').attr('gallery-size-height') == "") ? "2000" : $(video_url[k]).find('div').attr('gallery-size-height')
							} else {
								assetUrl = "samsung/gallery_thumbnail";
								assetWidth = "700";
								assetHeight = "467";
							}

							if ($(video_url[k]).find('div').attr('gallery-image-url') == "") {
								productData.products[defaultColorIndex].images[j] = {'thumbnail': "http://images.samsung.com/is/image/samsung/gallery_thumbnail"
									,'asset': assetUrl + "?i=" + j
									,'code': $(video_url[k]).find('div').attr('gallery-code')
									,'type': $(video_url[k]).find('div').attr('gallery-videoType') == "B" ? "be" : "yt"
									,'width': assetWidth
									,'height': assetHeight
								};
							} else {
								productData.products[defaultColorIndex].images[j] = {'thumbnail': $(video_url[k]).find('div').attr('gallery-thumb-url')
									,'asset': assetUrl + '?i=' + j
									,'code': $(video_url[k]).find('div').attr('gallery-code')
									,'type': $(video_url[k]).find('div').attr('gallery-videoType') == "B" ? "be" : "yt"
									,'width': assetWidth
									,'height': assetHeight
								};
							}

							j++;
						}
						$('#ParamModelColor').val("");
						setupThumbnailGallery(defaultColorIndex);
						bindEvents();
						changeSpec();
					},
					error: function(data) {
						console.log("API error");
					}
				});
			} else {
				setupThumbnailGallery(defaultColorIndex);
				bindEvents();
			}
		}

		function galleryPopupOpen() {
			if (!containerAnim) {
				$('.media-module .media.current').removeClass('current');
				galleryButton.addClass('current');

				containerAnim = true;

				container.slideDown(500, function() {
					containerAnim = false;
				});

				ss.scrollWrapper.scrollTop(0);
				window.fromG = true;

				eventBridge.trigger(jQuery.Event(eventDictionary.pdpStandard.EVENT_GALLERY_SHOW));
				eventBridge.trigger(jQuery.Event(eventDictionary.pdpStandard.EVENT_THREESIXTY_PAUSE));
				$('.asset.current').panzoom('reset');

			}
		}

		function bindEvents() {
			container.on(ss.clickEvent, '.asset:not(.s7)', function() {
				var elem = $(this);
			/*
			  if (isPanning) {return;}

			  if (elem.attr('data-zoom-direction') === 'in') {
				zoomIn.trigger('click');
			  } else {
				zoomOut.trigger('click');
			  }
*/
			});
			galleryButton.on(ss.clickEvent, function() {

				/* Analytics_tagging */
				sendClickCode('pdp_gallery', 'gallery');

				//setupThumbnailGallery(defaultColorIndex);

				if (!containerAnim) {
					$('.media-module .media.current').removeClass('current');
					galleryButton.addClass('current');

					containerAnim = true;

					container.slideDown(500, function() {
						containerAnim = false;
					});

					ss.scrollWrapper.scrollTop(0);
					window.fromG = true;

					eventBridge.trigger(jQuery.Event(eventDictionary.pdpStandard.EVENT_GALLERY_SHOW));
					eventBridge.trigger(jQuery.Event(eventDictionary.pdpStandard.EVENT_THREESIXTY_PAUSE));
					$('.asset.current').panzoom('reset');

				}


			});

			closeButton.on('click', function() {
				$('.media-module .media.current').removeClass('current');

				container.slideUp(500, function() {
					containerAnim = false;

				});
				eventBridge.trigger(jQuery.Event(eventDictionary.pdpStandard.EVENT_HERO_SHOW));
			});

			nextArrow.on(ss.clickEvent, function(e) {
				//by lwj
				//if (currentThumbnail === thumbnailGallery.find('.thumbnail').length - 4) {
				if (currentThumbnail === thumbnailGallery.find('.thumbnail').length - 10) {
					e.preventDefault();
				} else {
					currentThumbnail++;
					slideThumbnails();
				}
			});

			// by lwj
			prevArrow.on(ss.clickEvent, function(e) {
				if (currentThumbnail === 0) {
					e.preventDefault();
				} else if (currentThumbnail >= (thumbnailGallery.find('.thumbnail').length - 9)){
					currentThumbnail = thumbnailGallery.find('.thumbnail').length - 11;
					slideThumbnails();
				} else {
					currentThumbnail--;
					slideThumbnails();
				}
			});

			window.galleryArrowNext = function() {
				//by lwj
				//if (currentThumbnail === thumbnailGallery.find('.thumbnail').length - 4) {
				if (currentThumbnail === thumbnailGallery.find('.thumbnail').length - 10) {
				} else {
					currentThumbnail++;
					slideThumbnails();
				}
			};
			window.galleryArrowPrev = function() {
				if (currentThumbnail === 0) {
				} else {
					currentThumbnail--;
					slideThumbnails();
				}
			};

			thumbnailGallery.swipe({
				swipeLeft: function(event, direction) {
					// by lwj
					//var maxPos = thumbnailGallery.find('.thumbnail').length - 4;
					var maxPos = thumbnailGallery.find('.thumbnail').length - 10;

					if (currentThumbnail === maxPos && !thumbnailsAnim) {
						event.preventDefault();
					} else {
						currentThumbnail++;
						slideThumbnails();
					}
				},

				swipeRight: function(event, direction) {
					if (currentThumbnail === 0 && !thumbnailsAnim) {
						event.preventDefault();
					} else {

						currentThumbnail--;
						slideThumbnails();
					}
				}
			});

			thumbnailGallery.on('swipeleft', function(e) {
				// by lwj
				//var maxPos = thumbnailGallery.find('.thumbnail').length - 4;
				var maxPos = thumbnailGallery.find('.thumbnail').length - 10;

				if (currentThumbnail === maxPos && !thumbnailsAnim) {
					e.preventDefault();
				} else {
					currentThumbnail++;
					slideThumbnails();
				}
			}).on('swiperight', function(e) {
				if (currentThumbnail === 0 && !thumbnailsAnim) {
					e.preventDefault();
				} else {
					currentThumbnail--;
					slideThumbnails();
				}
			});

			thumbnailGallery.on(ss.clickEvent, '.thumbnail', function() {
				console.log('hey!! 02');

				/* Analytics_tagging */
				sendClickCode('pdp_gallery', 'gallery:image');
				if (!$(this).hasClass('current')) {
					$(thumbnailGallery).find('.thumbnail.current').removeClass('current');

					$(this).addClass('current');

					loadAsset($(this));
				//$('.asset.current').panzoom('reset');
				}
			});

			// tumbnail image arrows
			$('#gallery-panel .controls').on(ss.clickEvent, '.arrows', function() {
				sendClickCode('pdp_gallery', 'gallery:image');
				var indexNum = $(this).attr('scene-index');
				loadAsset($(this));
			});

			if (productData.products.length > 0) {
				$('#selectColor').find('a').off();
				$('#selectColor').find('a').on('click', function(e) {

					e.preventDefault();

					sendClickCode('pdp_gallery','gallery:color');

					var fromEStore = $('#fromEStore').val();
					var catid = $('#catid').val();
					var catnm = $('#catnm').val();

					var modelCode = $('#chageModelCode').val();
					var currentColor = $('#currentColor').val();
					defaultColor = $('.swatch.active').children().attr('data-color');

					var thisSwatch = $(this);
					if (thisSwatch.attr('data-color') !== defaultColor || thisSwatch.attr('data-color') === defaultColor) {
						var url = $(this).attr('data-url');
						var group = $(this).attr('data-groupcode');
						var model = $(this).attr('data-modelcode');
						var dispNm = $(this).attr('data-displayName');

						// colorchip선택시 display name 변경(shop now의 layer popup 제외).
						$(".product-title:not(.product-info-section .product-title)").text(dispNm);

						// 몇번째 색상인지 체크
						var swatchIndex = 0;
						$.each(productData.products, function(i) {
							if (productData.products[i].swatchColorCode === thisSwatch.attr('data-color')) {
								swatchIndex = i;
							}
						});

						if (model != modelCode || model == modelCode) {
							$('#currentColor').val(thisSwatch.attr('data-color'));
							//getPDPGallery(model);
							var siteCode = $('#siteCode').val();
							var colorCode = $('#currentColor').val();
							var url = '/' + siteCode + '/api/product/gallery/' + model + '?mType=json';
							$.ajax({
								type: 'POST',
								url: url,
								dataType: 'json',
								success: function(data) {
									var htmlStr = "";
									var prdImg = data.xmlData.productImage.productImage;
									$.each(prdImg, function(i) {
										if (this.type == 'R' || this.type == 'G') {
											htmlStr += '<li data-heroImageType="G" image-color-type="' + this.color + '">';
											htmlStr += '<div class="hero responsive-image"';
											htmlStr += 'data-media-tablet-portrait="' + this.url + '?$DT-Gallery$"';
											htmlStr += 'data-media-desktop="' + this.url + '?$DT-Gallery$"';
											htmlStr += 'gallery-image-url="' + this.url + '"';
											htmlStr += 'gallery-thumb-url="' + this.url + '?$XS-Thumbnail$"';
											htmlStr += 'gallery-color-type="' + this.color + '"';
											htmlStr += 'gallery-size-width="' + this.width + '"';
											htmlStr += 'gallery-size-height="' + this.height + '"';
											htmlStr += 'role="img" aria-label="${escSpecialTextdispNm }">';
											htmlStr += '</div>';
											htmlStr += '</li>';
										} else if ((this.type == 'B' || this.type == 'Y') && this.useTIYN == 'Y') {
											htmlStr += '<li data-heroImageType="V">';
											htmlStr += '<div';
											htmlStr += 'gallery-videoType="' + this.type + '"';
											htmlStr += 'gallery-code="' + this.src + '"';
											htmlStr += 'gallery-image-url="' + this.desktopTI + '"';
											htmlStr += 'gallery-thumb-url="' + this.desktopTI + '"';
											htmlStr += 'gallery-size-width="' + this.width + '"';
											htmlStr += 'gallery-size-height="' + this.height + '">';
											htmlStr += '</div>';
											htmlStr += '</li>';
										} else if (this.type == 'B' || this.type == 'Y') {
											htmlStr += '<li data-heroImageType="V">';
											htmlStr += '<div';
											htmlStr += 'gallery-videoType="' + this.type + '"';
											htmlStr += 'gallery-code="' + this.src + '"';
											htmlStr += 'gallery-image-url=""';
											htmlStr += 'gallery-thumb-url=""';
											htmlStr += 'gallery-size-width=""';
											htmlStr += 'gallery-size-height="">';
											htmlStr += '</div>';
											htmlStr += '</li>';
										}
									});
									if((colorCode == "") || (colorCode == "undefined") || (colorCode == null)) {
										colorCode = prdImg[0].color;
									}
									$('#prdImgData').html(htmlStr);
									$('#currentColor').val(colorCode);

									productData.products[swatchIndex] = {'swatchColor': bindColorNames[swatchIndex],'swatchColorCode': bindColors[swatchIndex],'images': []};
									var image_url = $('#prdImgData').find("[gallery-color-type='" + $('#currentColor').val() + "']");
									for (var j = 0; j < image_url.length; j++) {
										var assetUrl = '';
										if ($(image_url[j]).attr('gallery-image-url').indexOf('samsung/') != -1) {
											assetUrl = $(image_url[j]).attr('gallery-image-url').substr($(image_url[j]).attr('gallery-image-url').indexOf('samsung/'));
										} else {
											assetUrl = $(image_url[j]).attr('gallery-image-url');
										}
										productData.products[swatchIndex].images[j] = {
											'type': 's7',
											'thumbnail': $(image_url[j]).attr('gallery-thumb-url')
											,'url': imgServerUrlChk
											,'asset': assetUrl + "?i=" + j
											,'width': $(image_url[j]).attr('gallery-size-width')
											,'height': $(image_url[j]).attr('gallery-size-height')
										};
									}
									var video_url = $('#prdImgData').find("[data-heroimagetype='V']");
									for (var k = 0; k < video_url.length; k++) {
										var assetUrl = '';
										var assetWidth = '';
										var assetHeight = '';
										if ($(video_url[k]).find('div').attr('gallery-image-url').indexOf('samsung/') != -1) {
											assetUrl = $(video_url[k]).find('div').attr('gallery-image-url').substr($(video_url[k]).find('div').attr('gallery-image-url').indexOf('samsung/'));
											assetWidth = ($(video_url[k]).find('div').attr('gallery-size-width') == undefined || $(video_url[k]).find('div').attr('gallery-size-width') == "") ? "3000" : $(video_url[k]).find('div').attr('gallery-size-width');
											assetHeight = ($(video_url[k]).find('div').attr('gallery-size-height') == undefined || $(video_url[k]).find('div').attr('gallery-size-height') == "") ? "2000" : $(video_url[k]).find('div').attr('gallery-size-height')
										} else {
											assetUrl = "samsung/gallery_thumbnail";
											assetWidth = "700";
											assetHeight = "467";
										}

										if ($(video_url[k]).find('div').attr('gallery-image-url') == "") {
											productData.products[swatchIndex].images[j] = {'thumbnail': "http://images.samsung.com/is/image/samsung/gallery_thumbnail"
												,'asset': assetUrl + "?i=" + j
												,'code': $(video_url[k]).find('div').attr('gallery-code')
												,'type': $(video_url[k]).find('div').attr('gallery-videoType') == "B" ? "be" : "yt"
												,'width': assetWidth
												,'height': assetHeight
											};
										} else {
											productData.products[swatchIndex].images[j] = {'thumbnail': $(video_url[k]).find('div').attr('gallery-thumb-url')
												,'asset': assetUrl + '?i=' + j
												,'code': $(video_url[k]).find('div').attr('gallery-code')
												,'type': $(video_url[k]).find('div').attr('gallery-videoType') == "B" ? "be" : "yt"
												,'width': assetWidth
												,'height': assetHeight
											};
										}

										j++;
									}
									setupThumbnailGallery(swatchIndex);
									bindEvents();
									changeSpec();
								},
								error: function(data) {
									console.log("API error");
								}
							});
							//setupThumbnailGallery(swatchIndex);
						}
						else {
							// 모델이 동일한 경우
							$('#currentColor').val(thisSwatch.attr('data-color'));
							setupThumbnailGallery(swatchIndex);
							bindEvents();
						}

						/*
						// 그룹으로 묶이지 않은 색상일경우
						if (group == "" || group == null) {

							setupThumbnailGallery(swatchIndex);
							galleryPopupOpen();

							$('#currentColor').val(thisSwatch.attr('data-color'));

						// 그룹으로 묶인 색상일 경우
						} else {
							// 모델이 동일하지 않을경우
							if (model != modelCode) {

								// e-store breadcrumb 정보가 있으면 함께 전달한다.
								var decodedCnm = $('<div/>').html(catnm).text();
								if(fromEStore == 'Y'){
									if(url.indexOf('?') == -1){
										location.href = url + '?catid=' + catid + '&catnm=' + decodedCnm;
									}else{
										location.href = url + '&catid=' + catid + '&catnm=' + decodedCnm;
									}
								}else{
									location.href = url;
								}
								return false;

							} else {
								// 모델이 동일한 경우
								$('#currentColor').val(thisSwatch.attr('data-color'));
								setupThumbnailGallery(swatchIndex);
								galleryPopupOpen();

							}
						}*/
					} else {
						$('#currentColor').val(thisSwatch.data('color'));

					}
					galleryPopupOpen();

					//레이어팝업 컬러칩에도 적용
					$('#chageModelCode').val(thisSwatch.data('modelcode'));
					$(".layout-3 .swatch a").each(function(){
						if( $(this).data("color") == thisSwatch.data('color') ){
							$(this).trigger('click');
						}
					});
				});
			}
			zoomIn.on('click', function() {
				window.scene7.zoomView.zoomIn();

				/* Analytics_tagging */
				sendClickCode('pdp_gallery', 'gallery:zoom in');


			});
			zoomOut.on('click', function() {
				window.scene7.zoomView.zoomOut();

				/* Analytics_tagging */
				sendClickCode('pdp_gallery', 'gallery:zoom out');
			});

			eventBridge.on(eventDictionary.pdpStandard.EVENT_HERO_SHOW, function(e, data) {
				container.slideUp(500);
			});

			eventBridge.on(eventDictionary.pdpStandard.EVENT_THREESIXTY_SHOW, function(e, data) {
				container.slideUp(500);
			});

			eventBridge.on(eventDictionary.pdpStandard.EVENT_SAMPLEIMAGES_SHOW, function(e, data) {
				container.slideUp(500);
			});

		}

		function setupThumbnailGallery(swatchIndex) {
			window.scene7 = null;
			assetJson.set.item[0].set.item = [];
			assetContainer.find('.s7').empty();
			thumbnailGallery.find('.wrap').empty();

			//var initColorModel = $("#ColorModelCode").val();
			var initColorModel = $("#ParamModelCode").val();

			var param = new Array();

			// 현재 페이지의 url
			var url = decodeURIComponent(location.href);
			url = decodeURIComponent(url);

			/*
			var params;
			params = url.substring( url.indexOf('?')+1, url.length );
			params = params.split("&");

			if( typeof params[1] == 'undefined'){
			}else{
				$("#prdImgData").empty();
  				getPDPGallery(initColorModel);
			}
			*/

			if($('#gallery-panel .controls-wrap .thumbnail-cnt').length > 0){
				$('#gallery-panel .controls-wrap .thumbnail-cnt').remove();
				$('#gallery-panel .controls-wrap .arrows').remove();
			}

			currentThumbnail = 0;

			currentSwatchID = productData.products[swatchIndex].swatchColor;
			var sceneIdx = 0;
			var currentColorCode = productData.products[swatchIndex].swatchColorCode;

			// set control width
			if (productData.products[swatchIndex].images.length <= 10){
				$('#gallery-panel .thumbnail-gallery').css('width',productData.products[swatchIndex].images.length*90+'px');
				$('#gallery-panel .thumbnail-gallery .wrap').css('width',productData.products[swatchIndex].images.length*90+'px');
			}
			// big arrow element create append
			var arrowLeft = $('<a href="#none" class="arrows left_arrow" gallery-index="0" scene-index="0"></a>');
			var arrowReft = $('<a href="#none" class="arrows right_arrow" gallery-index="1" scene-index="1"></a>');
			$('#gallery-panel .controls-wrap').append(arrowLeft);
			$('#gallery-panel .controls-wrap').append(arrowReft);

			$.each(productData.products[swatchIndex].images, function(i) {

				var thumb = $('<a href="#none" class="thumbnail" alt=""><img src="http://images.samsung.com/is/image/'+productData.products[swatchIndex].images[i].asset+'" alt="'+productData.products[swatchIndex].images[i].type+'"></a>');

				thumb.attr('gallery-index', i);
				thumb.attr('scene-index', sceneIdx);
				thumb.attr('gallery-type', productData.products[swatchIndex].images[i].type);
				thumb.attr('media-image-url', productData.products[swatchIndex].images[i].asset);

				if (!!productData.products[swatchIndex].images[i]['code']) {
					thumb.attr('data-video-id', productData.products[swatchIndex].images[i].code);
				}
				//thumb.append('<img src="' + productData.products[swatchIndex].images[i].thumbnail + '" alt="' + $('#displayName').val() + '" />');

				//if ( productData.products[swatchIndex].images[i].type=='s7' ) {
				sceneIdx += 1;
				var assetNode = {"i": {"n": ""},"dx": productData.products[swatchIndex].images[i].width,"dy": productData.products[swatchIndex].images[i].height};
				assetNode.i.n = productData.products[swatchIndex].images[i].asset;
				assetJson.set.item[0].set.item.push(assetNode);
				//}

				if (i === 0) {
					thumb.addClass('current');
				}

				thumbnailGallery.find('.wrap').append(thumb);
			});

			// thumb-cnt element create append
			var thumbCnt = $('<div class="thumbnail-cnt"><span class="cnt-current">1</span>/'+productData.products[swatchIndex].images.length+'</div>');
			$('#gallery-panel .controls-wrap').append(thumbCnt);

			initArrowControls();

			//loadAsset($(thumbnailGallery.find('.thumbnail')[0]));
			/*			if(productData.products[swatchIndex].images.length > 0){*/

			thumbnailGallery.find('.thumbnail').each(function(i) {
				//$(this).css({'left': (i * 25) + '%'});
				$(this).css({'left': (i * 90) + 'px'});
			});

			var thumbnails = thumbnailGallery.find('.thumbnail');
			thumbnails.on('focus', function() {
				console.log('hey!! 03');

				var thumb = $(this);
				//if (thumb[0] === thumbnails.last()[0]) {
				//  nextArrow.addClass('disabled');
				//} else if (thumb[0] === thumbnails.first()[0]) {
				//  prevArrow.addClass('disabled');
				//} else {
				//  prevArrow.removeClass('disabled');
				//  nextArrow.removeClass('disabled');
				//}

				currentThumbnail = parseInt(thumb.attr('gallery-index'), 10);
				slideThumbnails();

			});
			/*
			}else{
			  assetContainer.find('.asset').hide();
			}
			*/

			// 컬러칩 하이라이트 변경
			$('#selectColor').find('.swatch').removeClass('active');
			$('#selectColor').find('[data-color="' + $('#currentColor').val() + '"]').parent().addClass('active');
		}

		function initArrowControls() {
			//by lwj
			//console.log("currentThumbnail = "+currentThumbnail+" / total length = "+thumbnailGallery.find('.thumbnail').length);
			console.log("currentThumbnail = "+currentThumbnail+" / total length = "+thumbnailGallery.find('.thumbnail').length);

			if (currentThumbnail === 0) {
				prevArrow.addClass('disabled');
				nextArrow.removeClass('disabled');
			//} else if (currentThumbnail === thumbnailGallery.find('.thumbnail').length - 4) {
			} else if (currentThumbnail >= thumbnailGallery.find('.thumbnail').length - 10) {
				prevArrow.removeClass('disabled');
				nextArrow.addClass('disabled');
			} else {
				prevArrow.removeClass('disabled');
				nextArrow.removeClass('disabled');
			}
			//if(thumbnailGallery.find('.thumbnail').length <= 4){
			if(thumbnailGallery.find('.thumbnail').length <= 10){
				prevArrow.addClass('disabled');
				nextArrow.addClass('disabled');
			}
		}

		function slideThumbnails() {
			console.log('it works!!');
			//if (currentThumbnail > thumbnailGallery.find('.thumbnail').length - 4) {
			if(thumbnailGallery.find('.thumbnail').length <= 10){
				return false;
			}

			var marginLength = -1 * currentThumbnail * 90;
			if (currentThumbnail >= thumbnailGallery.find('.thumbnail').length - 10) {
				marginLength = (thumbnailGallery.find('.thumbnail').length - 10)*-1*90;
			}

			thumbnailsAnim = true;

			initArrowControls();

			//thumbnailGallery.find('.thumbnail').animate({marginLeft: (-1 * currentThumbnail * 25) + '%'}, 500, function() {
			thumbnailGallery.find('.thumbnail').animate({marginLeft: marginLength+'px'}, 500, function() {
				thumbnailsAnim = false;
			});
		}

		function loadAsset(j_elm) {
			var url = j_elm.attr('media-image-url'),
			index = j_elm.attr('gallery-index') || 0,
			sIdx = j_elm.attr('scene-index') || 0,
			asset_type = j_elm.attr('gallery-type'),
			code = j_elm.attr('data-video-id');

			var arrows = $('#gallery-panel .controls .arrows');
			var thumbnails = $('#galleryThumbImg .thumbnail').length - 1;
			if(index == 0){
				arrows.eq(0).attr('gallery-index','0');
				arrows.eq(0).attr('scene-index','0');
				arrows.eq(1).attr('gallery-index','1');
				arrows.eq(1).attr('scene-index','1');
			}else if(index == thumbnails){
				arrows.eq(0).attr('gallery-index',thumbnails-1);
				arrows.eq(0).attr('scene-index',thumbnails-1);
				arrows.eq(1).attr('gallery-index',thumbnails);
				arrows.eq(1).attr('scene-index',thumbnails);
			}else{
				arrows.eq(0).attr('gallery-index',index-1);
				arrows.eq(0).attr('scene-index',index-1);
				arrows.eq(1).attr('gallery-index',Number(index)+1);
				arrows.eq(1).attr('scene-index',Number(index)+1);
			}

			// thumbnail-cnt get current number
			var thumbCnt = $('#gallery-panel .thumbnail-cnt .cnt-current');
			thumbCnt.text(Number(index)+1);

			$('.gallery-video').hide();

			if (asset_type == 's7') {


				assetContainer.find('.asset').hide();
				$('#s7viewer').addClass('current');
				try{
					window.scene7.colorSwatches.onSwatchClicked(null, window.scene7.colorSwatches.swatches_[sIdx]);
				}catch (e) {

				}


				$('#s7viewer').show();

			}
			else {
				assetContainer.find('.asset').hide();
				$('#s7viewer').addClass('current');
				try{
					window.scene7.colorSwatches.onSwatchClicked(null, window.scene7.colorSwatches.swatches_[sIdx])
				}catch (e) {

				}


				$('#s7viewer').show();

				var currentAsset = assetContainer.find('.asset[gallery-index="' + index + '"][data-swatch-color="' + currentSwatchID + '"]');
				if (asset_type == 'be') {
					$('.gallery-video.be').show();
					var beVideo = brightcove.api.getExperience('videoBE').getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
					beVideo.cueVideoByID($('.gallery-module').find('.thumbnail-gallery').find('[gallery-index="' + index + '"]').attr('data-video-id'));
					beVideo.pause();
				}
				else if (asset_type == 'yt') {
					$('.gallery-video.yt').show();
					var ytVideo = $('#firstYT').parent()[0].player;
					ytVideo.cueVideoById($('.gallery-module').find('.thumbnail-gallery').find('[gallery-index="' + index + '"]').attr('data-video-id'));
					ytVideo.pauseVideo();
				}
			}
		}
		function prevSwipe()
		{
			if (currentThumbnail === 0 && !thumbnailsAnim) {
			//event.preventDefault();
			} else {
				currentThumbnail--;
				slideThumbnails();

			}
			var curElm = $(thumbnailGallery).find('.thumbnail.current');
			var prevElm = curElm.prev();
			if (prevElm.length > 0) {
				curElm.removeClass('current');

				prevElm.addClass('current');

				loadAsset(prevElm);
			}
		}
		function nextSwipe()
		{
			//var maxPos = thumbnailGallery.find('.thumbnail').length - 4;
			var maxPos = thumbnailGallery.find('.thumbnail').length - 10;

			if (currentThumbnail === maxPos && !thumbnailsAnim) {
			//event.preventDefault();
			} else {
				currentThumbnail++;
				slideThumbnails();


			}
			var curElm = $(thumbnailGallery).find('.thumbnail.current');
			var nextElm = curElm.next();
			if (nextElm.length > 0) {
				curElm.removeClass('current');
				nextElm.addClass('current');
				loadAsset(nextElm);
			}
		}

		init();
	};







	ss.PDPStandard.PDPSampleImages = function(params) {

        var container = $('.sampleimages-module');
        var containerAnim = false;

        var carousel = container.find('.ss-carousel')[0].binder;

        var sampleButton = $('.media-module').find('.sampleimages');
        var closeButton = container.find('.close-button');

        var descriptionToggleButtons = container.find('.toggle-button');

        var thumbnailGallery = container.find('.thumbnail-sampleimages');

        var isPanning = false;

        var prevArrow = thumbnailGallery.find('.prev');
        var nextArrow = thumbnailGallery.find('.next');

        var currentThumbnail = 0;
        var thumbnailsAnim = false;

        var currentSwatchID;

        var colorPickerPopover;

        var domRefreshEvent = jQuery.Event(eventDictionary.dom.DOM_REFRESH);
        /**
         Initialization function which runs at object instantiation time.

         @method init
         **/
        function init() {
            setupThumbnailGallery(0);
            bindEvents();
        }

        function bindEvents() {

            if(isWow){
                sampleButton.on(ss.clickEvent, sampleButtonClickHandler_wow);
                eventBridge.on(eventDictionary.pdpStandard.EVENT_HERO_SHOW, heroShow_wow);
                eventBridge.on(eventDictionary.pdpStandard.EVENT_THREESIXTY_SHOW, threeSixtyShow_wow);
                eventBridge.on(eventDictionary.pdpStandard.EVENT_GALLERY_SHOW, galleryShow_wow);
                closeButton.on('click', closeButtonClickHandler_wow);
            }else{
                sampleButton.on(ss.clickEvent, sampleButtonClickHandler_standard);
                eventBridge.on(eventDictionary.pdpStandard.EVENT_HERO_SHOW, heroShow_standard);
                eventBridge.on(eventDictionary.pdpStandard.EVENT_THREESIXTY_SHOW, threeSixtyShow_standard);
                eventBridge.on(eventDictionary.pdpStandard.EVENT_GALLERY_SHOW, galleryShow_standard);
                closeButton.on('click', closeButtonClickHandler_standard);
            }

            function sampleButtonClickHandler_wow() {

                if(!containerAnim) {
                    $('.media-module .media.current').removeClass('current');
                    sampleButton.addClass('current');

                    containerAnim = true;

                    container.slideDown(500, function() {
                        containerAnim = false;
                        $(eventBridge).trigger(domRefreshEvent);
                    });

                    ss.scrollWrapper.scrollTop(0);

                    eventBridge.trigger(jQuery.Event(eventDictionary.pdpStandard.EVENT_SAMPLEIMAGES_SHOW));
                    eventBridge.trigger(jQuery.Event(eventDictionary.pdpStandard.EVENT_THREESIXTY_PAUSE));

                }
            }

            function sampleButtonClickHandler_standard() {

                if(!containerAnim) {
                    if(!viewSection.hasClass('on')) viewSection.addClass('on');

                    $('.media-module .media.current').removeClass('current');
                    sampleButton.addClass('current');

                    containerAnim = false;

                    container.css('display', 'block');

                    $('.lightbox-skrim').remove();
                    $('body').append('<div class="lightbox-skrim"></div>');
                    $('.lightbox-skrim').on(ss.clickEvent, function (){
                        closeButton.trigger('click');
                    });

                    eventBridge.trigger(jQuery.Event(eventDictionary.pdpStandard.EVENT_SAMPLEIMAGES_SHOW));
                    eventBridge.trigger(jQuery.Event(eventDictionary.pdpStandard.EVENT_THREESIXTY_PAUSE));
                    viewSection[0].popAlign();

                    closeButton.focus();

                    $(eventBridge).trigger(domRefreshEvent);

                }
            }

            function heroShow_wow(e, data){
                container.slideUp(500);
            }

            function heroShow_standard(e, data){
                container.css('display', 'none');
            }

            function threeSixtyShow_wow(e, data){
                container.slideUp(500);
            }

            function threeSixtyShow_standard(e, data){
                container.css('display', 'none');
            }

            function galleryShow_wow(e, data){
                container.slideUp(500);
            }

            function galleryShow_standard(e, data){
                container.css('display', 'none');
            }

            function closeButtonClickHandler_wow(e){
                $('.media-module .media.current').removeClass('current');

                container.slideUp(500, function() {
                    containerAnim = false;
                });
                sampleButton.focus();
                eventBridge.trigger(jQuery.Event(eventDictionary.pdpStandard.EVENT_HERO_SHOW));
            }

            function closeButtonClickHandler_standard(e){
                $('.media-module .media.current').removeClass('current');

                if(viewSection.hasClass('on')) viewSection.removeClass('on');
                sampleButton.focus();
                eventBridge.trigger(jQuery.Event(eventDictionary.pdpStandard.EVENT_HERO_SHOW));
            }

            nextArrow.on(ss.clickEvent, function(e) {
								// by lwj
                //if (currentThumbnail === thumbnailGallery.find('.thumbnail').length - 4) {
								if (currentThumbnail === thumbnailGallery.find('.thumbnail').length - 10) {
                    e.preventDefault();
                } else {
                    currentThumbnail++;
                    slideThumbnails();
                }
            });

            prevArrow.on(ss.clickEvent, function(e) {
                if (currentThumbnail === 0) {
                    e.preventDefault();
                } else {
                    currentThumbnail--;
                    slideThumbnails();
                }
            });

            thumbnailGallery.swipe({
                swipeLeft: function (event, direction) {
										// by lwj
                    //var maxPos = thumbnailGallery.find('.thumbnail').length - 4;
										var maxPos = thumbnailGallery.find('.thumbnail').length - 10;

                    if (currentThumbnail === maxPos && !thumbnailsAnim) {
                        event.preventDefault();
                    } else {
                        currentThumbnail++;
                        slideThumbnails();
                    }
                },

                swipeRight: function (event, direction) {
                    if (currentThumbnail === 0 && !thumbnailsAnim) {
                        event.preventDefault();
                    } else {

                        currentThumbnail--;
                        slideThumbnails();
                    }
                }
            });

            thumbnailGallery.on('swipeleft', function(e) {
								// by lwj
                //var maxPos = thumbnailGallery.find('.thumbnail').length - 4;
								var maxPos = thumbnailGallery.find('.thumbnail').length - 10;

                if (currentThumbnail === maxPos && !thumbnailsAnim) {
                    e.preventDefault();
                } else {
                    currentThumbnail++;
                    slideThumbnails();
                }
            }).on('swiperight', function(e) {
                    if (currentThumbnail === 0 && !thumbnailsAnim) {
                        e.preventDefault();
                    } else {
                        currentThumbnail--;
                        slideThumbnails();
                    }
                });

            thumbnailGallery.on(ss.clickEvent, '.thumbnail', function() {
                if(!$(this).hasClass('current')) {
                    $(thumbnailGallery).find('.thumbnail.current').removeClass('current');

                    $(this).addClass('current');

                    carousel.carouselSwipe.slide(parseInt($(this).attr('sampleimages-index'), 10));

                    $('.asset.current').panzoom('reset');
                }
            });

            descriptionToggleButtons.on(ss.clickEvent, function (e){
                var parent = $(this).parent();
                var icon = $(this).find('.icon-plus');
                parent.toggleClass('show-information');
                if(parent.hasClass('show-information')) icon.addClass('icon-minus');
                else icon.removeClass('icon-minus');
            });
        }

        function setupThumbnailGallery(swatchIndex) {
            //thumbnailGallery.find('.wrap').empty();
            currentThumbnail = 0;
            initArrowControls();

            $(thumbnailGallery).find('.thumbnail.current').removeClass('current');
            thumbnailGallery.find('.thumbnail').first().addClass('current')
            thumbnailGallery.find('.thumbnail').each(function(i) {
                $(this).css({'left': (i * 25) + '%'});
            });

            var thumbnails = thumbnailGallery.find('.thumbnail');
            thumbnails.on('focus', function() {
                var thumb = $(this);
                currentThumbnail = parseInt(thumb.attr('sampleimages-index'), 10);
                slideThumbnails();
            });
        }

        function initArrowControls() {
            if(currentThumbnail === 0) {
                prevArrow.addClass('disabled');
                nextArrow.removeClass('disabled');
						// by lwj
            //} else if(currentThumbnail === thumbnailGallery.find('.thumbnail').length - 4) {
						} else if(currentThumbnail === thumbnailGallery.find('.thumbnail').length - 10) {
                prevArrow.removeClass('disabled');
                nextArrow.addClass('disabled');
            } else {
                prevArrow.removeClass('disabled');
                nextArrow.removeClass('disabled');
            }
        }

        function slideThumbnails() {
						// by lwj
						//if (currentThumbnail > thumbnailGallery.find('.thumbnail').length - 4) { return false; }
            if (currentThumbnail > thumbnailGallery.find('.thumbnail').length - 10) { return false; }

            thumbnailsAnim = true;

            initArrowControls();

            thumbnailGallery.find('.thumbnail').animate({marginLeft: (-1 * currentThumbnail * 25) + '%'}, 500, function () {
                thumbnailsAnim = false;
            });
        }

        init();
    };

	/**
	@class $.PDPStandard.PDPeCommerceSTD
	@constructor
	**/
	ss.PDPStandard.PDPeCommerceSTD = function(params) {
		var modelCode = $('#modelCode').val();
		var modelName = $('#modelName').val();
		var displayName = $('#displayName').val();
		var discontinued = $('#discontinued').val();
		var priceDisplay = $('#priceDisplay').val();
		var oldProductYN = $('#oldProductYN').val();
		var prdPrice = $('#prdPrice').val();
		var prdPriceDiscl = $('#prdPriceDiscl').val();
		var rrpDisplay = $('#rrpDisplay').val() == "true" ? true : false;
		var quickByButton = $('#quickByButton').val() == "true" ? true : false;
		var usePreOrder = false;
		var whereToBuyBtnUse = false;
		var addToCart;
		var btnCount = 0;
		var whereToBuyBtn = $('#whereToBuyBtnYN').val();
		var whereToBuyBtnPDP = $('#whereToBuyBtnPDPYN').val();
		var onlineRetailerYN = $('#onlineRetailerYN').val();
		var storeLocatorYN = $('#storeLocatorUse').val() == "true" ? 'Y' : 'N';
		var lightPdpFl = $('#lightPdpFl').val();
		var typeCd = $('#typeCode').val();
		var lightPdpWhereToBuyFl = $('#lightPdpWhereToBuyFl').val() == "true" ? true : false;

		function init() {
			btnCount = 0;
			$('#seeAllAvailability').hide();
			$('#shopNowButton').css('display', '');
			//버튼 1개 이상인 경우로 변경
			$('#multiShopButton').attr('class', 'nor-btnList');
			//$('#multiShopButton').hide();
			if ($('a.clearfix.toggle').is(':visible')) {
				if ($('a.clearfix.toggle').hasClass('link-toggled')) {
					$('a.clearfix.toggle').next('.nor-btnList').show();
				}
				else {
					$('a.clearfix.toggle').next('.nor-btnList').hide();
				}
			}
			else {
				$('a.clearfix.toggle').next('.nor-btnList').show();
			}

			// Go To Check Out에 대한 옵니쳐 적용
			$('#addCartList').find('a').attr('onclick',"sendScView(\';"+ modelName + "\');");
			//$('#addCartList').find('a').attr('href', 'https://stg-kr.shop.samsung.com/uk/ng/cartAndCheckout/basket')

			$('#addToCart').off('show.bs.popover hidden.bs.popover shown.bs.popover');
			addToCart = new ss.Popover('#addToCart:not(.btngrey)', {skipBoot: true,interOp2Hide: function(obj) { /*obj.toggle();*/},interOp2Show: function(obj) {

					//Analytics_tagging
					sendScAddPrd(modelName,$("#chageModelCode").val());

					// 미니카트 숨김처리
					navigation.miniCartHide();

					// addToCart 레이어팝업이 열려 있으면 호출 안함.
					//if ($('.cart-popover').length <= 1) {
					if(!$('#addToCart').hasClass('btngrey')){

						estore.addCart({productCode: $("#chageModelCode").val(),quantity: '1'}, function(data) {
							if (data && data.resultCode == "0000") {

								$.Auth.getGlobalCartCount(function(data) {
									console.info("addCart", data);
								});

								$('#cartCount').text(pdpMsg.addedtocart);
								setTimeout("$('#cartCount').text(pdpMsg.addtocart);", 1000);

								$('.jump-module').find('#jumpToCartArea').removeClass('on');

								obj.showOnly();

								ss.commonWidgets.setDefaultFocusInWidget( ".popover .cart-popover" );

								if (SITE_CD == 'uk'
										&& TMAN != undefined && TMAN ) {
									TMAN.addParams('samsunguk', {currency: 'EUR',conversion_type: 'purchase_indirect_online',product_prices: '0.0'});
									TMAN.doTags(TMAN.position.CUSTOM_2, true);
								} else if (SITE_CD == 'de'
										&& TMAN != undefined && TMAN ) {
									TMAN.addParams('samsungde', {currency: 'EUR',conversion_type: 'purchase_indirect_online',product_prices: '0.0'});
									TMAN.doTags(TMAN.position.CUSTOM_2, true);
								} else if ( SITE_CD == 'pt'
										&& TMAN != undefined && TMAN ) {
									TMAN.addParams('samsungpt', {currency: 'EUR',conversion_type: 'purchase_indirect_online',product_prices: '0.0'});
									TMAN.doTags(TMAN.position.CUSTOM_2, true);
								}

							}
						});
					}

				},tapProtect: true,placement: 'auto top',content: $('#addCartList').html(),html: true,container: '.body_wrapper',animation: false}); /* ADD ADNSTYLE */

			getRealTimeProductSimpleInfo();

			// shop popover 생성 - chw.park
			$( document ).on( 'shown.bs.popover', '#seeAllAvailability', function() {
                var buyWidgetTimeout = setTimeout( function() {
                    ss.commonWidgets.setDefaultFocusInWidget( "#shop-popover-container .popover .shop-popover" );
                    clearTimeout(buyWidgetTimeout);
                }, 100);
            });
			bindEvents();

		}

		function bindEvents() {
			$('#quickBuy').off("click");
			$('#quickBuy').on("click", function() {
				estore.buyNow({productCode: $("#chageModelCode").val(),quantity: '1'}, function(data) {
					if (data && data.resultCode == "0000") {
						if (usePreOrder) {
							sendClickCode('wishlist', 'pre order now');
						} else {
							//sendClickCode('wishlist', 'quick buy');
							//sendScBasket(modelName,modelCode);
							sendScBasket($("#modelName").val(),$("#chageModelCode").val());
						}
						location.href = "http://" + STORE_DOMAIN + "/" + SITE_CD + "/ng/cartAndCheckout";
						return false;
					}
				});
			});

			// [START] : br : Shipping Calculation/Installment 150413 STD
			var $fkShippingModal = $('#fk-shipping-modal');

			$(document.body).on('click', '#fk-shipping-modal .close-button', function (e) {
				ss.Popover.hideActive(true, e);
				$fkShippingModal.hide();
				if(isWow){
					$('body').append('<div class="lightbox-skrim"></div>');
				}
				e.preventDefault();
			});

			$(document.body).on('click', '#fk-shipping', function (e) {
				$fkShippingModal.css({
					left: $(this).offset().left,
					top: $(this).offset().top - $fkShippingModal.height()
				}).show();
				e.preventDefault();
			});

			$fkShippingModal.on('click', '.ss-button', function (e) {
				var zipCode = $fkShippingModal.find("input[id=br_cep]").val();
				shippingCostAjax(zipCode);
			});
			// [ END ] : br : Shipping Calculation/Installment 150413

		}

		function jumpToBindEvents(){

			// jumpTo cart영역 닫기버튼 처리
			$('.jump-module').find('#jumpToCartArea').find('.close-button').off('click');
			$('.jump-module').find('#jumpToCartArea').find('.close-button').on('click', function(){
				$('.jump-module').find('#jumpToCartArea').removeClass('on');
			});

			// JumpTo addtoCart 처리
			$('.jump-module').find('#jumpToAddToCart:not(.btngrey)').off('click');
			$('.jump-module').find('#jumpToAddToCart:not(.btngrey)').on('click', function(){

				//Analytics_tagging
				sendClickCode('jumpto','jump to:add to cart');
				sendScAddPrd(modelName,$("#chageModelCode").val());

				if ($('.cart-popover').length > 1) {
					$('.cart-popover .close-button').trigger('click');
				}

				if(!$('#jumpToCartArea').hasClass('on')){
					estore.addCart({productCode: $("#chageModelCode").val(),quantity: '1'}, function(data) {
						if (data && data.resultCode == "0000") {

							$.Auth.getGlobalCartCount(function(data) {
								console.info("addCart", data);
							});

							$('.jump-module').find('#jumpToCartArea').addClass('on');
							$('.jump-module').find('#jumpToCartArea').css('display','');

							$('.jump-module').find('#jumpToAddToCart').text(pdpMsg.addedtocart);
							setTimeout("$('.jump-module').find('#jumpToAddToCart').text(pdpMsg.addtocart);", 1000);

							if (SITE_CD == 'uk'
								&& TMAN != undefined && TMAN ) {
								TMAN.addParams('samsunguk', {currency: 'EUR',conversion_type: 'purchase_indirect_online',product_prices: '0.0'});
								TMAN.doTags(TMAN.position.CUSTOM_2, true);
							} else if (SITE_CD == 'de'
									&& TMAN != undefined && TMAN ) {
								TMAN.addParams('samsungde', {currency: 'EUR',conversion_type: 'purchase_indirect_online',product_prices: '0.0'});
								TMAN.doTags(TMAN.position.CUSTOM_2, true);
							} else if ( SITE_CD == 'pt'
									&& TMAN != undefined && TMAN ) {
								TMAN.addParams('samsungpt', {currency: 'EUR',conversion_type: 'purchase_indirect_online',product_prices: '0.0'});
								TMAN.doTags(TMAN.position.CUSTOM_2, true);
							}
						}
					});

				}

			});

			$('.jump-module').find('#jumpToQuickBuy').off('click');
			$('.jump-module').find('#jumpToQuickBuy').on('click', function() {
				sendClickCode('jumpto','jump to:buy now');
				$('#quickBuy').trigger('click');
			});

			if( SITE_CD != 'ca' && SITE_CD != 'ca_fr' && SITE_CD != 'tr'
				&& SITE_CD != 'hr' && SITE_CD != 'rs' && SITE_CD != 'si' && !(SITE_CD== 'br' && typeCd == '01030000')) {
				// E-store 호출 완료후 Where To Buy 이벤트 처리
				new ss.Popover('.buy-button', {placement: 'auto top',content: $('.whereBox-content').html(),html: true,container: '#shop-popover-container',lightbox: 'true'});
				new ss.Popover('.buy-button-1', {placement: 'auto top',content: $('.whereBox-content').html(),html: true,container: '#shop-popover-container',lightbox: 'true'});
			}

			//where to buy button 버튼 클릭 처리
			// jump To where to buy button 버튼 클릭 처리
			$('.buy-button, .buy-button-1').on('click', function() {
				// TMAN 처리
				if (SITE_CD == 'uk'
						&& TMAN != undefined && TMAN ) {
					TMAN.addParams('samsunguk', {currency: 'EUR',conversion_type: 'purchase_indirect_online',product_prices: '0.0'});
					TMAN.doTags(TMAN.position.CUSTOM_1, true);
				} else if (SITE_CD == 'de'
						&& TMAN != undefined && TMAN ) {
					TMAN.addParams('samsungde', {currency: 'EUR',conversion_type: 'purchase_indirect_online',product_prices: '0.0'});
					TMAN.doTags(TMAN.position.CUSTOM_2, true);
				} else if ( SITE_CD == 'pt'
						&& TMAN != undefined && TMAN ) {
					TMAN.addParams('samsungpt', {currency: 'EUR',conversion_type: 'purchase_indirect_online',product_prices: '0.0'});
					TMAN.doTags(TMAN.position.CUSTOM_2, true);
				}

				if( SITE_CD == 'ca' || SITE_CD == 'ca_fr' ) {
					pswtb.sandbox.openWTB(this, 'CA_'+modelCode);
					return;
				}

				if(SITE_CD== 'br' && typeCd == '01030000'){
					window.open("http://www.samsung.com.br/lojas/");
					return;
				}

				if(SITE_CD== 'tr'){
					window.open("http://www.samsung.com/tr/magazalar/");
					return;
				}

				// 버튼 클릭 시 바로 storelocator로 이동하도록 수정.
				if(SITE_CD == 'hr' || SITE_CD == 'rs' || SITE_CD == 'si'){
					sendClickCode('locator','locator|' + $("#modelName").val().toLowerCase() + '');
					$("#storeModelCode").val($("#chageModelCode").val());
					$("#storeModelName").val($("#modelName").val());
					$("#storeIaCode").val($("#iaCode").val());
					$("#onlineRetailerfrm").submit();
					return;
				}

				var buyOnlineUseSite = $("#buyOnlineUseSite").val();
				var buyInStoreUseSite = $("#buyInStoreUseSite").val();

				var param = {};

	        	param.siteCode	 = $("#siteCode").val();
	        	param.modelCode	 = $("#modelCode").val();
	        	param.modelName	 = $("#modelName").val();
	        	param.displayName= $("#displayName").val();
	        	param.iaCode	 = $("#iaCode").val();
	        	param.entry 	 = "product";
	        	param.groupName  = $("#iaUrlNamePath").val().split("|")[0];
	        	param.typeName	 = $("#iaUrlNamePath").val().split("|")[1];
	        	param.subTypeName	 = $("#iaUrlNamePath").val().split("|")[2];

				if(SITE_CD == 'ar' || SITE_CD == 'py' || SITE_CD == 'uy') {
					if(buyOnlineUseSite.indexOf(',' + SITE_CD + ',') >= 0 && buyInStoreUseSite.indexOf(',' + SITE_CD + ',') >= 0){ // online retailer, storelocator
						onlineRetailerInfo(1, param);
					} else if (buyOnlineUseSite.indexOf(',' + SITE_CD + ',') >= 0) { // online retailer
						onlineRetailerInfo(2, param);
					} else if (buyInStoreUseSite.indexOf(',' + SITE_CD + ',') >= 0) { // storelocator
						onlineRetailerInfo(3, param);
					}
				}

				if (buyInStoreUseSite.indexOf(',' + SITE_CD + ',') >= 0 && onlineRetailerMsg.outLinkUrl == "") { // storelocator
					eventBridge.trigger(jQuery.Event(eventDictionary.location.REQUEST_STORES));
				}

			});
		}

		// eCommerce 실시간 상품 정보 조회 처리
		function getRealTimeProductSimpleInfo() {

			// 스토어 사용국가이고 제품이 판매대상인지
			if (USE_ESTORE && discontinued != "Y") {

				// old product 일 경우
				if (oldProductYN == 'Y') {
					$('#promotionDescRed').empty();
					$('#promotionDescRed').html(pdpMsg.oldProductMsg);

					notEcommerceSite();

					hiddenBuyingOptionBtn();

					oneButton();

					new ss.PDPStandard.PDPJumpModule();

					jumpToBindEvents();

				}else{

					var optionValue = $("#currentColor").val();
					var model = $('#selectColor').find('[data-color="' + optionValue + '"]').attr('data-modelcode');

					//console.log("여기 들어옴, 모델은? :"+model);
					modelCode = model;
					//if(model != null && model != "" && model != "undefined") {
						//$("#chageModelCode").val(model);
					//}

					estore.getRealTimeProductSimpleInfo({productCode: $("#chageModelCode").val() }, function(data) {

						console.info('estore_data :: ', data);

						if(data.flagSoldOut == "Y" && SITE_CD == "nl") {
							$("#addToCartDisable > span[id='cartCount']").text("Tijdelijk niet op voorraad in de Shop");
							$("#jumpToAddToCartDisable").text("Tijdelijk niet op voorraad in de Shop");
						}

						if (data && data.resultCode == "0000") {
							
							// UK 사이트는 Where to buy 항상 노출
							if(SITE_CD === 'uk'){
								data.whereToBuyBtnYn = 'Y';
								if(data.price === '£0.00'){
									data.price = '';
								}
							}

							// flag 처리
							if(data.flags && data.flags != ""){

								var flag = data.flags;
								flag = flag.split(',');

								if (flag.length) {
									var appendData = '';
									for (var index = 0; index < flag.length; index++) {
										var flagVal =  $.trim(flag[index]);
										if(flagVal != null && flagVal != ""){

											if (index != 0) {
												appendData += ' <span class="spacer">|</span> ';
											}
											appendData += flagVal;
										}
									}
									$('#eCommerceFlag').html(appendData);
								}
							}

							// 1. 버튼 노출 여부
							// quick buy 와 add to basket 버튼
							$('#seeAllAvailability > span, #jumpToSeeAllAvailability').text(pdpMsg.otherRetailers);
							if (data.buyNowBtnYn == 'Y' && data.cartBtnYn == 'Y') {
								if (!quickByButton) {
									// 예약 상품인 경우 버튼 텍스트 변경
									if (data.flagPreOrder == 'Y') {
										usePreOrder = true;
										$('#quickBuy').children().text(pdpMsg.preordernow);
										$('#quickBuy').css('display', '');
										$('#jumpToQuickBuy').text(pdpMsg.preordernow);
										$('#jumpToQuickBuy').css('display', '');

									}else{
										$('#quickBuy').css('display', '');
										$('#jumpToQuickBuy').css('display', '');
									}
									$('#addToCart').hide();
									//$('#addToCart').remove();
									btnCount ++;

								} else {
									$('#addToCart').css('display', '');
									$('#jumpToAddToCart').css('display', '');
									$('#addToCart, #jumpToAddToCart').removeClass('btngrey');
									$('#quickBuy').hide();
									btnCount ++;
								}

							}else if(data.buyNowBtnYn == 'Y'){
								// 예약 상품인 경우 버튼 텍스트 변경
								if (data.flagPreOrder == 'Y') {
									usePreOrder = true;
									$('#quickBuy').children().text(pdpMsg.preordernow);
									$('#quickBuy').css('display', '');
									$('#jumpToQuickBuy').text(pdpMsg.preordernow);
									$('#jumpToQuickBuy').css('display', '');

								}else{
									$('#quickBuy').css('display', '');
									$('#jumpToQuickBuy').css('display', '');
								}
								$('#addToCart').hide();
								//$('#addToCart').remove();
								btnCount ++;

							}else if(data.cartBtnYn == 'Y'){
								$('#addToCart').css('display', '');
								$('#jumpToAddToCart').css('display', '');
								$('#addToCart, #jumpToAddToCart').removeClass('btngrey');
								$('#quickBuy').hide();
								btnCount ++;

							}else{
								if(SITE_CD == 'au' || SITE_CD == 'br'){
									$('#quickBuy').hide();
									$('#addToCart').hide();
								} else {
								// out of stock일 경우 버튼은 노출 시키되 동작 안되도록 수정.
								var jumpToAddToCartDisable = '<a href="javascript:void(0)" id="jumpToAddToCartDisable" class="btn btn-type-01" style="display:none">' + pdpMsg.addtocart + '</a>';
								$('.module-wrap').find('#jumpToAddToCart').append(jumpToAddToCartDisable);
								$('.module-wrap').find('#addToCartDisable, #jumpToAddToCartDisable').css('display', '').css('cursor', 'default').css('background', '#666').addClass('btngrey'); // background 흑백 & 기본 커서로 수정.
								$('.module-wrap').find('#addToCart, #jumpToAddToCart').css('display', 'none');
								//$('#addToCart, #jumpToAddToCart').css('display', '').css('cursor', 'default').css('background', '#666').addClass('btngrey'); // background 흑백 & 기본 커서로 수정.
								//$('#addToCart').unbind('click');	// 클릭 안되게 수정.
								$('.jump-module-shim').find('.btn-type-01').addClass('btngrey');
								btnCount ++;

								$('#quickBuy').hide();
								//$('#addToCart').remove();
								}
							}

							// add to basket이 노출 되었을 경우에만 shpping 노출.
				            // [START] : br : Shipping Calculation/Installment 150413 STD
							if(SITE_CD == 'br' && ($('#addToCart').is(':visible') || $('#quickBuy').is(':visible'))){
								$('.module-wrap').find('#seeAllAvailability').css('display', 'none');
								shippingInstallationAjax();
							}
							// [ END ] : br : Shipping Calculation/Installment 150413

							// 2. where to buy 버튼
							if(whereToBuyBtn == 'Y'
								&& whereToBuyBtnPDP == 'Y'
								&& data.whereToBuyBtnYn == 'Y'
									&& (onlineRetailerYN == 'Y' || storeLocatorYN == 'Y' )
									&& (lightPdpFl == 'N' || lightPdpWhereToBuyFl == true)
								){
								if( SITE_CD == 'br' && ($('#addToCart').css('display') != 'none'|| $('#quickBuy').css('display') != 'none')){
									$('.module-wrap').find('#seeAllAvailability').css('display', 'none');
								}else{
									$('.module-wrap').find('#seeAllAvailability').css('display', '');
								}
								//$('#seeAllAvailability').css('display', '');
								whereToBuyBtnUse = true;
								btnCount ++;

								if(data.buyNowBtnYn != 'Y' && data.cartBtnYn != 'Y'){
									$('#jumpToSeeAllAvailability').css('display','');
								}

							}else{
								$('#seeAllAvailability').hide();
								//$('#seeAllAvailability').remove();
							}

							// 3.재고량에 따른 문구 표현
							if (data.stockLevelStatusDisplay && data.flagPreOrder != 'Y' ) {
								$('#stockLevelStatus').text(data.stockLevelStatusDisplay);
								$('#jumpToStockStatus').text(data.stockLevelStatusDisplay);
							}

							// 4. 할인가격 표시
							if (data.promotionPrice != undefined && data.promotionPrice != null && data.promotionPrice != "") {
								$('#promotionPrice').text(data.promotionPrice);

								if(SITE_CD == 'au')
									if(modelCode=='WW90H9600EW/SA' || modelCode=='GT-I9505ZKAXSA')
									ecommerceData.product[0].price=data.promotionPrice;

								$('#jumpToPrice').text(data.promotionPrice);
								if (data.price) {
									$('#price').text(data.price);
								}
							} else {
								// 가격 표시
								if ( data.price ) {
									$('#promotionPrice').text(data.price);

									if(SITE_CD == 'au')
										if(modelCode=='WW90H9600EW/SA' || modelCode=='GT-I9505ZKAXSA')
										ecommerceData.product[0].price=data.price;

									$('#jumpToPrice').text(data.price);
								}
							}

							// 5. 마일리지 표시
							if (data.productMileage != "0.0" && data.productMileage != "") {
								var mileage = '(<strong class="cb">' + data.productMileage + '</strong> Points';
								if (data.promotionMileage != "0.0" && data.promotionMileage != "") {
									mileage += ' + <strong class="cr">' + data.promotionMileage + '</strong> Points)';
								} else {
									mileage += ')';
								}
								$('#mileage').html(mileage);
							}

							// 6. freeGift 정보 표시
							if (data.promotionData.length > 0) {
								var freegift = data.promotionData[0];

								// freegift 이미지 처리
								if (freegift.url && freegift.url != "") {
									$('#freegiftData').find('img').attr('src', freegift.url + '?fmt=png-alpha');

									if(freegift.displayName){
										$('#freegiftData').find('img').attr('alt', freegift.displayName);
									}

									if (freegift.code && freegift.code != "") {
										$('#freegiftLinkImg').attr('href', '/' + SITE_CD + '/c/p/' + freegift.code);
									}else{
										$('#freegiftLinkImg').attr('href', 'javascript:void(0)');
									}

								}

								// title 처리
								if (freegift.title && freegift.title != "" ) {
									$('#freegiftLinkTitle').html(freegift.title + '&nbsp;<span class="icon-link-play"></span>');

								}

								// title 링크처리
								if(freegift.code  && freegift.code != ""){
									$('#freegiftLinkTitle').attr('href', '/' + SITE_CD + '/c/p/' + freegift.code);

								}else{
									$('#freegiftLinkTitle').attr('href', 'javascript:void(0)');

								}

								if (freegift.description) {
									$('#freegiftDataDesc').text(freegift.description);
								}

								if (freegift.outOfstockInfo) {
									$('#freegiftOutOfStock').show();
								}

								$('#freegift').show();
								$('.offers-bar-module.inner').show();
								$('#offerbelow').show();
							}

							// 7. eco tax 정보 및 E-Store 링크정보 (국가가 프랑스일 경우에만 노출)
							if(SITE_CD == 'fr'){

								// E-Store 링크정보
								if(data.buyNowBtnYn == 'Y' || data.cartBtnYn == 'Y'){
									$('.eco-tax').prepend('<p><a href="/fr/shop/contact/" target="_blank">Profiter de la livraison express gratuite</a></p>');
								}
								// copyrightFee
								if(data.copyrightFee != undefined && data.copyrightFee != null && data.copyrightFee != ""){
									var copyrightFeeURL = '/fr/shop/static/link_tax_p.html#copyright_tax';
									var ecoTaxData = '<p>';
									ecoTaxData += '(Dont ' + data.copyrightFee + ' <a href="' + copyrightFeeURL + '" target="_blank" onclick="window.open(this.href, '+ "'_blank','scrollbars=yes, width=470, height=600'" + '); return false;" >de copie privée</a>)';
									ecoTaxData += '</p>';
									$('.eco-tax').prepend(ecoTaxData);

								}

								// weeeFee
								if(data.weeeFee != undefined && data.weeeFee != null && data.weeeFee != ""){
									var weeeFeeURL = '/fr/shop/static/link_tax_p.html#eco_tax';
									var ecoTaxData = '<p>';
									ecoTaxData += '(Dont ' + data.weeeFee + ' <a href="' + weeeFeeURL + '" target="_blank" onclick="window.open(this.href, '+ "'_blank','scrollbars=yes, width=470, height=600'" + '); return false;" >éco-participation</a>)';
									ecoTaxData += '</p>';
									$('.eco-tax').prepend(ecoTaxData);

								}

							}

							// 8. 예약 안내 문구 노출
							if(data.flagPreOrder == 'Y'){
								if (data.reservedDeliveryStartDate) {
									$('#promotionDesc').append(pdpMsg.scheduledToShipOn + " " + data.reservedDeliveryStartDate);
									$('#promotionDesc').parent('div.point').css('display','');
									if(SITE_CD == 'fr'){
										var pointHtml = $('#promotionDesc').parent('div.point').html();
										var ecoTaxHtml = $('.eco-tax').html();
										//$('#promotionDesc').parent('div.point').remove();
										$('#promotionDesc').parent('div.point').hide();
										$('.eco-tax').html(ecoTaxHtml + pointHtml);
									}
								}
							}

							// 9. 별점 정보 처리
							/*
							var starStyle = $('.overall-section>.owner-review>.score>.star-score p').attr('style');
							var reviewCount = $('#reviews>.module-heading>.heading-alt-text').text().replace(/^.*\(([0-9]+)\).*$/g,'$1');
							var reviewText = $('#reviews>.module-heading>.heading-text').text();

							if(starStyle != null && starStyle != ""){
							    var ratingHtml = '<div class="point"><p style="';
							    ratingHtml += starStyle;
							    ratingHtml += '"></p></div><p class="reviews"> <a href="#">'+ reviewCount + ' ' + reviewText + '</a> </p>';
								$('.usp-module>.star-score').html(ratingHtml);
								$('.usp-module>.star-score').find('a').off('click');
								$('.usp-module>.star-score').find('a').on('click', function(){
									var shopGnbHeight = $('.select-category').outerHeight();
									if(shopGnbHeight == null || shopGnbHeight == ""){
										shopGnbHeight = 0;
									}
									ss.htmlBody.animate({
										scrollTop : ( ss.metrics.elemTop( $('#reviews') ) - $('.jump-module').outerHeight() - shopGnbHeight )
									}, 1000);
								});
							}
							*/

							// 10. Promotion 문구 처리
							if (data.promotionDescription != null && data.promotionDescription != "") {
								var promotion = '<ul><li>';
								promotion += data.promotionDescription;
								promotion += '</li></ul>';
								$('.ecom-text>.promotion').html(promotion);
							}

							// 11. 로고 아이콘 노출 (네덜란드만 처리)
							if (SITE_CD == 'nl'){
								if( $('.ecom-module .pdp_sebn_wrap').length == 0 ){
									var sebnLabelHtml = '<p class="pdp_sebn_wrap"><a href="https://www.thuiswinkel.org/leden/samsung-shop/certificaat" class="pdp_sebn_logo" target="_blank" title="THUISWINKEL WAARBORG"><span class="blind">THUISWINKEL WAARBORG</span></a></p>';
									$('.ecom-module .ecom-text').after(sebnLabelHtml);
								}
							}

							// 포인트 및 예약안내 정보 없을경우 해당 영역 삭제
							if((data.productMileage == "0.0" || data.productMileage == "") && data.flagPreOrder != 'Y'){
								//$('.ecom-text .point').remove();
								$('.ecom-text .point').hide();
							}

							// sales status 가 end 일 때 특정 문구 출력 (fr 사이트만 해당)
							if(SITE_CD == 'fr' && data.salesStatus == 'SALES_END'){
								$('.module-wrap').find('#stockLevelStatus').text(data.saleEndDesc);
							}

						} else {
							notEcommerceSite();
						}

						hiddenBuyingOptionBtn();

						oneButton();

						new ss.PDPStandard.PDPJumpModule();

						jumpToBindEvents();

					});

				}
			} else {

				// old product 일 경우
				if (oldProductYN == 'Y') {
					$('#promotionDescRed').empty();
					$('#promotionDescRed').html(pdpMsg.oldProductMsg);

				}

				notEcommerceSite();

				hiddenBuyingOptionBtn();

				oneButton();

				new ss.PDPStandard.PDPJumpModule();

				jumpToBindEvents();
			}

			if(SITE_CD == 'za') {
				$.ajax({
					type: 'GET',
					//url: 'http://api.bazaarvoice.com/data/reviews.xml?ApiVersion=5.4&PassKey=' + reviewSubmitPopup.message.passKey + '&Filter=ProductId:' + $('#modelCode').val().replace("/", "_") + '&Sort=Rating:desc&Include=Products&Stats=Reviews',
					url: 'http://api.bazaarvoice.com/data/reviews.xml?ApiVersion=5.4&PassKey=hu3qm5e77djqbomfuomfp99mp&Filter=ProductId:' + $('#modelCode').val().replace("/", "_") + '&Sort=Rating:desc&Include=Products&Stats=Reviews',
					dataType: 'xml',
					success: function(data) {
						$(data).find("DataApiResponse").each(function(){
							var reviewCount = $(this).children("TotalResults").text();
							console.log("za review",reviewCount);
							if(reviewCount > 0){
								var productCol = $(this).children("Includes").find("Product");
								productCol.each(function(){
									var count = Number($(this).index())+1;
									if(count == 1){
										$(this).find("ReviewStatistics").each(function(){
											var averageOverallRating = $(this).children("AverageOverallRating").text();
											var ratingPercent = (Number(averageOverallRating)/5*100).toFixed(0);
											var reviewResultCount = Number(reviewCount).toLocaleString().split(".")[0];
											var reviewText = $('#reviews>.module-heading>.heading-text').text();
											var ratingHtml = '<div class="point"><p style="width:' + ratingPercent + '%;"></p></div>'
											ratingHtml += '<p class="reviews"> <a href="#">'+ reviewResultCount + ' ' + reviewText + '</a> </p>';
											$('.usp-module>.star-score').html(ratingHtml);
											$('.usp-module>.star-score').find('a').click(function(){
												var shopGnbHeight = $('.select-category').outerHeight();
												if(shopGnbHeight == null || shopGnbHeight == ""){
													shopGnbHeight = 0;
												}
												ss.htmlBody.animate({
													scrollTop : ( ss.metrics.elemTop( $('#reviews') ) - $('.jump-module').outerHeight() - shopGnbHeight )
												}, 1000);
											});
										});
									}
								});
							}
						});
					}
				});
			}

		}

		// [START] : br : Shipping Calculation/Installment 150413 STD
		function shippingInstallationAjax(){
			var modelCode = $("#modelCode").val();
			//var url = "https://br-shop-qa.samsungfk.net/br/ng/p4v1/getRealTimeProductSimpleInfo";
			var url = "https://shop.samsung.com/br/ng/p4v1/getRealTimeProductSimpleInfo";

			$.ajax({
				url: url,
				data : {
					productCode : modelCode
				},
				dataType: 'jsonp',
				success: function(json) {
					if(json.resultCode == '0000'){
						var upToText = json.installmentPlan.upToText;
						var text= upToText + "<br><a href=\"#\" id=\"fk-shipping\">Calcular o frete</a>";
						$(".ecom-text").find("#shippingCalculation").append(text);
					} else {
						console.info("api error", json.resultMessage);
						$(".ecom-text").find("#shippingCalculation").append(json.resultMessage);
					}

				}
			});
		}

		function shippingCostAjax(zipCode){
			var modelCode = $("#modelCode").val();
			//var url = "https://br-shop-qa.samsungfk.net/br/ng/p4v1/calcShippingCost";
			var url = "https://shop.samsung.com/br/ng/p4v1/calcShippingCost";

			$.ajax({
				url: url,
				data : {
					productCode : modelCode
				   ,zipCode : zipCode
				},
				dataType: 'jsonp',
				success: function(json) {
					if(json.resultCode == '0000'){
						var displayText = json.shipping_estimate.displayText;
						var address = json.shipping_estimate.address;
						$("#fk-shipping-modal").find("p[class=uptoText]").text(displayText).show();
						$("#fk-shipping-modal").find("li[class=shippingAddress]").text(address).show();
						console.info("api success", displayText + " : " + address);
					} else {
						console.info("api error", json.resultMessage);
					}

				}
			});
		}

		//eCommerce Cart 건수 조회
		// 현제 사용안함
		function getCartCount() {
			estore.getCartCount(function(data) {
				console.info("cartCount", data);
				if (data && data.resultCode == "0000") {

				}

			});
		}

		//버튼이 한개일 경우
		function oneButton() {
/*			if(btnCount <= 1){
				$('#shopNowButton').hide();
				$('#multiShopButton').attr('class', 'nor-btnList-etc');
				$('#multiShopButton').css('display', '');
			}*/

			//버튼이 한개 미만일 경우
			if(btnCount < 1){
				$('.jump-module .info-section').addClass('no-button');
			}

			// E-store 버튼이 두개일경우 높이값 동기화
			//var norBtn = $('.product-info-wrap > .product-info-section > .module-wrap > .ecom-module > .nor-btnList > .nor-button');
            //if(norBtn.length === 2) ss.CompareHeight.init(norBtn.eq(0), norBtn.eq(1), false, false, true, true, true, true);
            var norBtnCon = $('.product-info-wrap > .product-info-section > .module-wrap > .ecom-module > .nor-btnList'), norBtn = norBtnCon.find('> .nor-button');

			var btnNum = norBtn.length;
			norBtn.each(function() {
				if (($(this).attr('style') == 'display: none;') || ($(this).attr('style') == 'display:none')) {
					btnNum = btnNum-1;
				}
			});

            norBtnCon.addClass('num-'+btnNum);
		}

		//E-Store 사이트가 아닌경우.
		function notEcommerceSite() {

			// 사용하지 않는 버튼 제거
			$('#quickBuy').hide();
			$('#addToCart').hide();

			// 사용하지 않는 영역 제거.
			//$('.ecom-text .point').remove();
			$('.ecom-text .point').hide();

			//제품의 특성을 나타내는 아이콘 노출
			var flag = $('#productIconTypeCode').val();
			if (flag == 'C') {
				$('#eCommerceFlag').html(pdpMsg.flagComingSoon);
			} else if (flag == 'E') {
				$('#eCommerceFlag').html(pdpMsg.flagEvnet);
			} else if (flag == 'H') {
				$('#eCommerceFlag').html(pdpMsg.flagHot);
			} else if (flag == 'N') {
				$('#eCommerceFlag').html(pdpMsg.flagNew);
			}


			// 가격정보 노출
			if (rrpDisplay && priceDisplay == 'Y' ) {

				if (prdPrice != undefined && prdPrice != null && prdPrice != "") {

					$('#promotionPrice').text(prdPrice);
					$('#jumpToPrice').text(prdPrice);

					if(prdPrice != undefined && prdPriceDiscl != null && prdPriceDiscl != ""){
						$('.price-dec p').html(prdPriceDiscl);
					}

				} else {
				//ERP price
				}
			}

			if(whereToBuyBtn == 'Y'
				&& whereToBuyBtnPDP == 'Y'
				&& ( onlineRetailerYN == 'Y' || storeLocatorYN == 'Y' || SITE_CD == "cn" || SITE_CD == "ca" || SITE_CD == "ca_fr")
				&& (lightPdpFl == 'N' || lightPdpWhereToBuyFl == true)){
				$('#seeAllAvailability').css('display', '');
				$('#jumpToSeeAllAvailability').css('display','');
				whereToBuyBtnUse = true;
				btnCount++;

			}else{
				//$('#seeAllAvailability').remove();
				$('#seeAllAvailability').hide();
			}


		}

		function hiddenBuyingOptionBtn(){


/*			if (modelCode == 'SM-G900FZDABTU'
				|| (SITE_CD == 'jp' && typeCd == '05020000')) {

				// buying option 노출 안함.
				$('#seeAllAvailability').hide();
				if(whereToBuyBtnUse){
					btnCount --;
				}
			}*/

		}


		// E-Store data 노출 중단 (초기화)
		// 현제 사용안함
		function notUseEcommerce() {
			console.info("eCommerce 사용안함");

			//PRE-ORDER NOW 를 quick buy 로 초기화
			$('#quickBuy').children().text(pdpMsg.quickbuy);
			// 플래그 초기화
			$('#eCommerceFlag').html('');
			// 버튼 제거
			$('#quickBuy').hide();
			$('#addToCart').hide();
			//문구 제거
			$('#stockLevelStatus').text('');
			//가격 제거
			$('#promotionPrice').text('');
			$('#price').text('');

			//마일리지 제거
			$('#mileage').html('');

			//설명 문구 제거
			$('#promotionDesc').html('');
			$('#promotionDescRed').html('');

			//buying option 추가
			$('#seeAllAvailability').css('display', '');

			//버튼이 1개일경우 처리
			oneButton();

			//freegift 정보제거
			$('#freegiftData').find('img').attr('src', '');
			$('#freegiftData').find('img').attr('alt', '');
			$('#freegiftLinkImg').attr('href', '');
			$('#freegiftLinkTitle').html('');
			$('#freegiftLinkTitle').attr('href', '');
			$('#freegiftDataDesc').text('');
			$('#freegiftOutOfStock').hide();
			$('#freegift').hide();

			if ($('.offers-bar-module').find('[data-offer="Y"]').length == 0) {
				$('.offers-bar-module.inner').hide();
				$('#offerbelow').hide();
			}

		}

		init();

	};

	/**
	@class $.PDPStandard.PDPeCommerceWOW
	@constructor
	**/
	ss.PDPStandard.PDPeCommerceWOW = function(params) {

		var modelCode = $('#modelCode').val();
		var modelName = $('#modelName').val();
		var chageModelCode = $("#chageModelCode").val();
		var displayName = $('#displayName').val();
		var discontinued = $('#discontinued').val();
		var priceDisplay = $('#priceDisplay').val();
		var oldProductYN = $('#oldProductYN').val();
		var prdPrice = $('#prdPrice').val();
		var prdPriceDiscl = $('#prdPriceDiscl').val();
		var rrpDisplay = $('#rrpDisplay').val() == "true" ? true : false;
		var quickByButton = $('#quickByButton').val() == "true" ? true : false;
		var usePreOrder = false;
		var whereToBuyBtnUse = false;
		var addToCart;
		var btnCount = 0;
		var whereToBuyBtn = $('#whereToBuyBtnYN').val();
		var whereToBuyBtnPDP = $('#whereToBuyBtnPDPYN').val();
		var onlineRetailerYN = $('#onlineRetailerYN').val();
		var storeLocatorYN = $('#storeLocatorUse').val() == "true" ? 'Y' : 'N';
		var lightPdpFl = $('#lightPdpFl').val();
		var typeCd = $('#typeCode').val();
		var lightPdpWhereToBuyFl = $('#lightPdpWhereToBuyFl').val() == "true" ? true : false;

		function init() {
			btnCount = 0;
			$('.module-wrap').find('#seeAllAvailability').hide();
			$('.module-wrap').find('#shopNowButton').css('display', '');
			//버튼 1개 이상인 경우로 변경
			$('.module-wrap').find('#multiShopButton').attr('class', 'nor-btnList');
			//$('#multiShopButton').hide();
			if ($('a.clearfix.toggle').is(':visible')) {
				if ($('a.clearfix.toggle').hasClass('link-toggled')) {
					$('a.clearfix.toggle').next('.nor-btnList').show();
				}
				else {
					$('a.clearfix.toggle').next('.nor-btnList').hide();
				}
			}
			else {
				$('a.clearfix.toggle').next('.nor-btnList').show();
			}

			getRealTimeProductSimpleInfo();

			// shop popover 생성 - chw.park
			$( document ).on( 'shown.bs.popover', '#seeAllAvailability', function() {
                var buyWidgetTimeout = setTimeout( function() {
                    ss.commonWidgets.setDefaultFocusInWidget( "#shop-popover-container .popover .shop-popover" );
                    clearTimeout(buyWidgetTimeout);
					$('.lightbox-skrim').remove();
					$('.popup_wrap').append('<div class="lightbox-skrim"></div>');
                }, 100);
            });
		}

		// where to buy관련.
        function onlineRetailer(){

			var buyOnlineUseSite = $("#buyOnlineUseSite").val();
			var buyInStoreUseSite = $("#buyInStoreUseSite").val();
			var paramModelCode = $("ParamModelCode").val();

        	var param = {};

        	param.siteCode	 = $("#siteCode").val();
        	//param.modelCode	 = $("#modelCode").val();
			if (paramModelCode !== undefined && paramModelCode != "" && paramModelCode != null) {
				param.modelCode	 = $("ParamModelCode").val();
			initModelCode = paramModelCode;
			}else{
				param.modelCode	 = $("#chageModelCode").val();
			}
			//param.modelCode	 = $("#chageModelCode").val();
	        param.chageModelCode = $("#chageModelCode").val();
        	param.modelName	 = $("#modelName").val();
        	param.displayName= $("#displayName").val();
        	param.iaCode	 = $("#iaCode").val();
        	param.entry 	 = "product";
        	param.groupName  = $("#group").val();
        	param.typeName	 = $("#type").val();
        	param.subTypeName	 = $("#subtype").val();

			if(buyOnlineUseSite.indexOf(',' + SITE_CD + ',') >= 0 && buyInStoreUseSite.indexOf(',' + SITE_CD + ',') >= 0){ // online retailer, storelocator
				onlineRetailerInfo(1, param);
			} else if (buyOnlineUseSite.indexOf(',' + SITE_CD + ',') >= 0) { // online retailer
				onlineRetailerInfo(2, param);
			} else if (buyInStoreUseSite.indexOf(',' + SITE_CD + ',') >= 0) { // storelocator
				onlineRetailerInfo(3, param);
			}

			if(SITE_CD == 'jp') {
				$(".shop-tab-contents > button").click(function(){
					ga('send', 'event', 'Buy '+typeNmGglTag, 'button click', dispNmGglTag);
				});
			}
        }

		function bindEvents() {
			$('#quickbuybutton').off('click');
			$('#quickbuybutton').on('click', function(event) {
				$('.usp-module').hide();
				var $layer = $('#popup_alert_new').first();
				$(".layer_popup").hide();
				$layer.parent().show();
				$('.lightbox-skrim').remove();
				$('body').append('<div class="lightbox-skrim"></div>');
				var l = parseInt(($('body').width() - $layer.width())/2);
				var t = parseInt( $(window).scrollTop() + (($(window).height()-$layer.height())/2) );
				if($(window).height()<$layer.height()){
					t = $(window).scrollTop() + 10;
				}
				$layer.css({ "top":t+"px", "left":l+"px"});

				// 레이어팝업 열 때 선택된 모델로 check / active 재설정
				for(var i = 0; i < mappingList.product.length; i++){
					if(mappingList.product[i][0] == $("#chageModelCode").val()){
						for(var j = 1; j < mappingList.product[i].length; j++){
							if($(".option-" + j).hasClass("swatches")){
								$(".option-" + j).find(".swatch").removeClass("active");
								$(".option-" + j).find("a[data-color='"+ mappingList.product[i][j] +"']").parent().addClass("active");
							}else{
								$(".option-" + j).find("input[type='radio']:checked").prop("checked", false);
								$(".option-" + j).find("input[data-optidval='"+ mappingList.product[i][j] +"']").prop("checked", true);
							}
						}
					}
				}
				//aeseul.kim #94 0820
				//ss.PDPStandard.optionInitWOW();
				ss.PDPStandard.changeSECWOW($('#chageModelCode').val());
				event.stopPropagation();
	        });

			$('.module-wrap').find('#quickBuy').off("click");
			$('.module-wrap').find('#quickBuy').on("click", function() {
				console.log("quickBuy");
				estore.buyNow({productCode: $("#chageModelCode").val(),quantity: '1'}, function(data) {
					if (data && data.resultCode == "0000") {
						if (usePreOrder) {
							sendClickCode('wishlist', 'pre order now');
						} else {
							//sendClickCode('wishlist', 'quick buy');
							//sendScBasket(modelName,modelCode);
							sendScBasket($("#modelName").val(),$("#chageModelCode").val());
						}
						location.href = "http://" + STORE_DOMAIN + "/" + SITE_CD + "/ng/cartAndCheckout";
						return false;
					}
				});
			});

			// shop popover close 버튼 클릭 이벤트 - chw.park
			$('body').on('click', '#shop-popover-close', function(ev) {
				ss.Popover.hideActive(true, ev);
	            $('.lightbox-skrim').remove();
	            $('body').append('<div class="lightbox-skrim"></div>');
             });

			// skrim 클릭 방지
			$('body').on('click', '.lightbox-skrim', function(ev) {
             });

			// Go To Check Out에 대한 옵니쳐 적용
			$('#addCartList').find('a').attr('onclick',"sendScView(\';"+ modelName + "\');");

			$('#addToCart').off('show.bs.popover hidden.bs.popover shown.bs.popover');

			addToCart = new ss.Popover('#addToCart:not(.btngrey)', {skipBoot: true, interOp2Hide: function(obj) { /*obj.toggle();*/}, interOp2Show: function(obj) {

				//Analytics_tagging
				sendScAddPrd(modelName,$("#chageModelCode").val());

				// 미니카트 숨김처리
				navigation.miniCartHide();

				// addToCart 레이어팝업이 열려 있으면 호출 안함.
				if ($('.cart-popover').length <= 1) {

					estore.addCart({productCode: $("#chageModelCode").val(),quantity: '1'}, function(data) {
						if (data && data.resultCode == "0000") {

							$.Auth.getGlobalCartCount(function(data) {
								console.info("addCart", data);
							});

							$('#cartCount').text(pdpMsg.addedtocart);
							setTimeout("$('#cartCount').text(pdpMsg.addtocart);", 1000);

							//$('.jump-module').find('#jumpToCartArea').removeClass('on');

							obj.showOnly();

							ss.commonWidgets.setDefaultFocusInWidget( ".popover .cart-popover" );

							if (SITE_CD == 'uk'
									&& TMAN != undefined && TMAN ) {
								TMAN.addParams('samsunguk', {currency: 'EUR',conversion_type: 'purchase_indirect_online',product_prices: '0.0'});
								TMAN.doTags(TMAN.position.CUSTOM_2, true);
							} else if (SITE_CD == 'de'
									&& TMAN != undefined && TMAN ) {
								TMAN.addParams('samsungde', {currency: 'EUR',conversion_type: 'purchase_indirect_online',product_prices: '0.0'});
								TMAN.doTags(TMAN.position.CUSTOM_2, true);
							} else if ( SITE_CD == 'pt'
									&& TMAN != undefined && TMAN ) {
								TMAN.addParams('samsungpt', {currency: 'EUR',conversion_type: 'purchase_indirect_online',product_prices: '0.0'});
								TMAN.doTags(TMAN.position.CUSTOM_2, true);
							}

						}
					});
				}

			},tapProtect: true,placement: 'auto top',content: $('#addCartList').html(),html: true,container: '#popup_alert_new',animation: false}); /* ADD ADNSTYLE */

			// [START] : br : Shipping Calculation/Installment 150413 WOW
			var $fkShippingModal = $('#fk-shipping-modal');

			$(document.body).on('click', '#fk-shipping-modal .close-button', function (e) {
				ss.Popover.hideActive(true, e);
				$fkShippingModal.hide();
				if(isWow){
					$('body').append('<div class="lightbox-skrim"></div>');
				}
				e.preventDefault();
			});

			$(document.body).on('click', '#fk-shipping', function (e) {
				$fkShippingModal.css({
					left: $(this).offset().left,
					top: $(this).offset().top - $fkShippingModal.height()
				}).show();
				e.preventDefault();
			});

			$fkShippingModal.on('click', '.ss-button', function (e) {
				var zipCode = $fkShippingModal.find("input[id=br_cep]").val();
				shippingCostAjax(zipCode);
			});
			// [ END ] : br : Shipping Calculation/Installment 150413
		}

		function jumpToBindEvents(){
			$('.jump-module').find('#jumpToQuickbuybutton').off('click');
			$('.jump-module').find('#jumpToQuickbuybutton').on('click', function() {
				//sendClickCode('jumpto','jump to:buy now');
				$('#quickbuybutton').trigger('click');
			});

			if( SITE_CD != 'ca' && SITE_CD != 'ca_fr' && SITE_CD != 'tr'
				&& SITE_CD != 'hr' && SITE_CD != 'rs' && SITE_CD != 'si' && !(SITE_CD== 'br' && typeCd == '01030000')) {
				// E-store 호출 완료후 Where To Buy 이벤트 처리
				new ss.Popover('.buy-button', {placement: 'auto top',content: $('.whereBox-content').html(),html: true,container: '#shop-popover-container',lightbox: 'true'});
				//new ss.Popover('.buy-button-1', {placement: 'auto top',content: $('.whereBox-content').html(),html: true,container: '#shop-popover-container',lightbox: 'true'});
			}

			//where to buy button 버튼 클릭 처리
			// jump To where to buy button 버튼 클릭 처리
			$('.buy-button, .buy-button-1').on('click', function() {
				// TMAN 처리
				if (SITE_CD == 'uk'
						&& TMAN != undefined && TMAN ) {
					TMAN.addParams('samsunguk', {currency: 'EUR',conversion_type: 'purchase_indirect_online',product_prices: '0.0'});
					TMAN.doTags(TMAN.position.CUSTOM_1, true);
				} else if (SITE_CD == 'de'
						&& TMAN != undefined && TMAN ) {
					TMAN.addParams('samsungde', {currency: 'EUR',conversion_type: 'purchase_indirect_online',product_prices: '0.0'});
					TMAN.doTags(TMAN.position.CUSTOM_2, true);
				} else if ( SITE_CD == 'pt'
						&& TMAN != undefined && TMAN ) {
					TMAN.addParams('samsungpt', {currency: 'EUR',conversion_type: 'purchase_indirect_online',product_prices: '0.0'});
					TMAN.doTags(TMAN.position.CUSTOM_2, true);
				}

				if( SITE_CD == 'ca' || SITE_CD == 'ca_fr' ) {
					pswtb.sandbox.openWTB(this, 'CA_'+modelCode);
					return;
				}

				if(SITE_CD== 'br' && typeCd == '01030000'){
					window.open("http://www.samsung.com.br/lojas/");
					return;
				}

				if(SITE_CD== 'tr'){
					window.open("http://www.samsung.com/tr/magazalar/");
					return;
				}

				// 버튼 클릭 시 바로 storelocator로 이동하도록 수정.
				if(SITE_CD == 'hr' || SITE_CD == 'rs' || SITE_CD == 'si'){
					sendClickCode('locator','locator|' + $("#modelName").val().toLowerCase() + '');
					$("#storeModelCode").val($("#chageModelCode").val());
					$("#storeModelName").val($("#modelName").val());
					$("#storeIaCode").val($("#iaCode").val());
					$("#onlineRetailerfrm").submit();
					return;
				}

				var buyOnlineUseSite = $("#buyOnlineUseSite").val();
				var buyInStoreUseSite = $("#buyInStoreUseSite").val();

				var param = {};

	        	param.siteCode	 = $("#siteCode").val();
	        	param.modelCode	 = $("#modelCode").val();
	        	param.modelName	 = $("#modelName").val();
	        	param.displayName= $("#displayName").val();
	        	param.iaCode	 = $("#iaCode").val();
	        	param.entry 	 = "product";
	        	param.groupName  = $("#iaUrlNamePath").val().split("|")[0];
	        	param.typeName	 = $("#iaUrlNamePath").val().split("|")[1];
	        	param.subTypeName	 = $("#iaUrlNamePath").val().split("|")[2];

				if(SITE_CD == 'ar' || SITE_CD == 'py' || SITE_CD == 'uy') {
					if(buyOnlineUseSite.indexOf(',' + SITE_CD + ',') >= 0 && buyInStoreUseSite.indexOf(',' + SITE_CD + ',') >= 0){ // online retailer, storelocator
						onlineRetailerInfo(1, param);
					} else if (buyOnlineUseSite.indexOf(',' + SITE_CD + ',') >= 0) { // online retailer
						onlineRetailerInfo(2, param);
					} else if (buyInStoreUseSite.indexOf(',' + SITE_CD + ',') >= 0) { // storelocator
						onlineRetailerInfo(3, param);
					}
				}

				if (buyInStoreUseSite.indexOf(',' + SITE_CD + ',') >= 0 && onlineRetailerMsg.outLinkUrl == "") { // storelocator
					eventBridge.trigger(jQuery.Event(eventDictionary.location.REQUEST_STORES));
				}

			});
			
			// #269 첫 로딩 시 url에 popup=on 이라는 파라미터가 있을 경우 바잉툴 팝업 오픈
			var url = decodeURIComponent(location.href);
			if(url.indexOf('popup=on') > -1){
				$('#quickbuybutton').trigger('click');
			}
		}

		// eCommerce 실시간 상품 정보 조회 처리
		function getRealTimeProductSimpleInfo() {
			// 스토어 사용국가이고 제품이 판매대상인지
			if (USE_ESTORE && discontinued != "Y") {

				// old product 일 경우
				if (oldProductYN == 'Y') {
					$('.module-wrap').find('#promotionDescRed').empty();
					$('.module-wrap').find('#promotionDescRed').html(pdpMsg.oldProductMsg);
					$('.jump-module').find('#jumpToQuickbuybutton').css('display','');

					notEcommerceSite();

					hiddenBuyingOptionBtn();

					oneButton();

					new ss.PDPStandard.PDPJumpModule();

					bindEvents();

					jumpToBindEvents();

				}else{

					estore.getRealTimeProductSimpleInfo({productCode: $("#chageModelCode").val() }, function(data) {

						console.info('estore_data :: ', data);

						if(data.flagSoldOut == "Y" && SITE_CD == "nl") {
							$("#addToCartDisable > span[id='cartCount']").text("Tijdelijk niet op voorraad in de Shop");
							$("#jumpToAddToCartDisable").text("Tijdelijk niet op voorraad in de Shop");
						}

						if (data && data.resultCode == "0000") {
							
							// UK 사이트는 Where to buy 항상 노출
							if(SITE_CD === 'uk'){
								data.whereToBuyBtnYn = 'Y';
								if(data.price === '£0.00'){
									data.price = '';
								}
							}

							// flag 처리
							if(data.flags && data.flags != ""){

								var flag = data.flags;
								flag = flag.split(',');

								if (flag.length) {
									var appendData = '';
									for (var index = 0; index < flag.length; index++) {
										var flagVal =  $.trim(flag[index]);
										if(flagVal != null && flagVal != ""){

											if (index != 0) {
												appendData += ' <span class="spacer">|</span> ';
											}
											appendData += flagVal;
										}
									}
									$('.module-wrap').find('#eCommerceFlag').html(appendData);
								}
							}

							// 1. 버튼 노출 여부
							// quick buy 와 add to basket 버튼
							$('.module-wrap').find('#seeAllAvailability > span').text(pdpMsg.otherRetailers);
							if (data.buyNowBtnYn == 'Y' && data.cartBtnYn == 'Y') {
								if (!quickByButton) {
									// 예약 상품인 경우 버튼 텍스트 변경
									if (data.flagPreOrder == 'Y') {
										usePreOrder = true;
										$('.module-wrap').find('#quickBuy').children().text(pdpMsg.preordernow);
										$('.module-wrap').find('#quickBuy').css('display', '');
									}else{
										$('.module-wrap').find('#quickBuy').css('display', '');
									}
									$('.module-wrap').find('#addToCart').css('display', 'none');
									btnCount ++;

								} else {
									$('.module-wrap').find('#addToCart').css('display', '');
									$('.module-wrap').find('#addToCart').removeClass('btngrey');
									$('.module-wrap').find('#quickBuy').css('display', 'none');
									btnCount ++;
								}

							}else if(data.buyNowBtnYn == 'Y'){
								// 예약 상품인 경우 버튼 텍스트 변경
								if (data.flagPreOrder == 'Y') {
									usePreOrder = true;
									$('.module-wrap').find('#quickBuy').children().text(pdpMsg.preordernow);
									$('.module-wrap').find('#quickBuy').css('display', '');
								}else{
									$('.module-wrap').find('#quickBuy').css('display', '');
								}
								$('.module-wrap').find('#addToCart').css('display', 'none');
								btnCount ++;

							}else if(data.cartBtnYn == 'Y'){
								$('.module-wrap').find('#addToCart').css('display', '');
								$('.module-wrap').find('#addToCart').removeClass('btngrey');
								$('.module-wrap').find('#quickBuy').css('display', 'none');
								btnCount ++;

							}else{
								if(SITE_CD == 'au' || SITE_CD == 'br'){
									$('.module-wrap').find('#quickBuy').css('display', 'none');
									$('.module-wrap').find('#addToCart').css('display', 'none');
								} else {
									// out of stock일 경우 버튼은 노출 시키되 동작 안되도록 수정.
									$('.module-wrap').find('#addToCartDisable').css('display', '').css('cursor', 'default').css('background', '#666').addClass('btngrey'); // background 흑백 & 기본 커서로 수정.
									$('.module-wrap').find('#addToCart').css('display', 'none');
									//$('.module-wrap').find('#addToCart').unbind('click');	// 클릭 안되게 수정.
									btnCount ++;

									$('.module-wrap').find('#quickBuy').css('display', 'none');
								}
							}

				            // [START] : br : Shipping Calculation/Installment 150413 WOW
							if(SITE_CD == 'br' && ($('#addToCart').css('display') != 'none'|| $('#quickBuy').css('display') != 'none')){
								$('.module-wrap').find('#seeAllAvailability').css('display', 'none');
								shippingInstallationAjax();
							}
							// [ END ] : br : Shipping Calculation/Installment 150413

							// 2. where to buy 버튼
							if(whereToBuyBtn == 'Y'
								&& whereToBuyBtnPDP == 'Y'
								&& data.whereToBuyBtnYn == 'Y'
									&& (onlineRetailerYN == 'Y' || storeLocatorYN == 'Y' )
									&& (lightPdpFl == 'N' || lightPdpWhereToBuyFl == true)
									){
								if( SITE_CD == 'br' && ($('#addToCart').css('display') != 'none'|| $('#quickBuy').css('display') != 'none')){
									$('.module-wrap').find('#seeAllAvailability').css('display', 'none');
								}else{
									$('.module-wrap').find('#seeAllAvailability').css('display', '');
								}
								//$('.module-wrap').find('#seeAllAvailability').css('display', '');
								whereToBuyBtnUse = true;
								btnCount ++;
							}else{
								$('.module-wrap').find('#seeAllAvailability').css('display', 'none');
							}

							// 3.재고량에 따른 문구 표현
							if (data.stockLevelStatusDisplay && data.flagPreOrder != 'Y' ) {
								$('.module-wrap').find('#stockLevelStatus').text(data.stockLevelStatusDisplay);
							}

							// 4. 할인가격 표시
							if (data.promotionPrice != undefined && data.promotionPrice != null && data.promotionPrice != "") {
								$('.module-wrap').find('#promotionPrice').text(data.promotionPrice);

								if(SITE_CD == 'au')
									if(modelCode=='WW90H9600EW/SA' || modelCode=='GT-I9505ZKAXSA')
									ecommerceData.product[0].price=data.promotionPrice;

								if (data.price) {
									$('.module-wrap').find('#price').text(data.price);
								}
							} else {
								// 가격 표시
								if ( data.price ) {
									$('.module-wrap').find('#promotionPrice').text(data.price);

									if(SITE_CD == 'au')
										if(modelCode=='WW90H9600EW/SA' || modelCode=='GT-I9505ZKAXSA')
										ecommerceData.product[0].price=data.price;
								}
							}

							// 5. 마일리지 표시
							if (data.productMileage != "0.0" && data.productMileage != "") {
								var mileage = '(<strong class="cb">' + data.productMileage + '</strong> Points';
								if (data.promotionMileage != "0.0" && data.promotionMileage != "") {
									mileage += ' + <strong class="cr">' + data.promotionMileage + '</strong> Points)';
								} else {
									mileage += ')';
								}
								$('.module-wrap').find('#mileage').html(mileage);
							}

							// 6. freeGift 정보 표시
							if (data.promotionData.length > 0) {
								var freegift = data.promotionData[0];

								// freegift 이미지 처리
								if (freegift.url && freegift.url != "") {
									$('.module-wrap').find('#freegiftData').find('img').attr('src', freegift.url + '?fmt=png-alpha');

									if(freegift.displayName){
										$('.module-wrap').find('#freegiftData').find('img').attr('alt', freegift.displayName);
									}

									if (freegift.code && freegift.code != "") {
										$('.module-wrap').find('#freegiftLinkImg').attr('href', '/' + SITE_CD + '/c/p/' + freegift.code);
									}else{
										$('.module-wrap').find('#freegiftLinkImg').attr('href', 'javascript:void(0)');
									}

								}

								// title 처리
								if (freegift.title && freegift.title != "" ) {
									$('.module-wrap').find('#freegiftLinkTitle').html(freegift.title + '&nbsp;<span class="icon-link-play"></span>');

								}

								// title 링크처리
								if(freegift.code  && freegift.code != ""){
									$('.module-wrap').find('#freegiftLinkTitle').attr('href', '/' + SITE_CD + '/c/p/' + freegift.code);

								}else{
									$('.module-wrap').find('#freegiftLinkTitle').attr('href', 'javascript:void(0)');

								}

								if (freegift.description) {
									$('.module-wrap').find('#freegiftDataDesc').text(freegift.description);
								}

								if (freegift.outOfstockInfo) {
									$('.module-wrap').find('#freegiftOutOfStock').show();
								}

								$('.module-wrap').find('#freegift').show();
								$('.module-wrap').find('.offers-bar-module.inner').show();
								$('.module-wrap').find('#offerbelow').show();
							}

							// 7. eco tax 정보 및 E-Store 링크정보 (국가가 프랑스일 경우에만 노출)
							if(SITE_CD == 'fr'){

								// E-Store 링크정보
								if(data.buyNowBtnYn == 'Y' || data.cartBtnYn == 'Y'){
									$('.module-wrap').find('.ecomText').append('<p class="eco-tax"><a href="/fr/shop/contact/" target="_blank">Livraison gratuite et contact Shop</a></p>');
								}
								// copyrightFee
								if(data.copyrightFee != undefined && data.copyrightFee != null && data.copyrightFee != ""){
									var copyrightFeeURL = '/fr/shop/static/link_tax_p.html#copyright_tax';
									var ecoTaxData = '<p class="eco-tax">';
									ecoTaxData += '(Dont ' + data.copyrightFee + ' <a href="' + copyrightFeeURL + '" target="_blank" onclick="window.open(this.href, '+ "'_blank','scrollbars=yes, width=470, height=600'" + '); return false;" >de copie privée</a>)';
									ecoTaxData += '</p>';
									$('.module-wrap').find('.ecomText').append(ecoTaxData);
								}

								// weeeFee
								if(data.weeeFee != undefined && data.weeeFee != null && data.weeeFee != ""){
									var weeeFeeURL = '/fr/shop/static/link_tax_p.html#eco_tax';
									var ecoTaxData = '<p class="eco-tax">';
									ecoTaxData += '(Dont ' + data.weeeFee + ' <a href="' + weeeFeeURL + '" target="_blank" onclick="window.open(this.href, '+ "'_blank','scrollbars=yes, width=470, height=600'" + '); return false;" >éco-participation</a>)';
									ecoTaxData += '</p>';
									$('.module-wrap').find('.ecomText').append(ecoTaxData);
								}

							}

							// 8. 예약 안내 문구 노출
							if(data.flagPreOrder == 'Y'){
								if (data.reservedDeliveryStartDate) {
									$('.module-wrap').find('#promotionDesc').empty();
									$('.module-wrap').find('#promotionDesc').append(pdpMsg.scheduledToShipOn + " " + data.reservedDeliveryStartDate);
									$('.module-wrap').find('#promotionDesc').parent('div.point').css('display', '');
									if(SITE_CD == 'fr'){
										var pointHtml = $('.module-wrap').find('#promotionDesc').parent('div.point').html();
										var ecoTaxHtml = $('.module-wrap').find('.eco-tax').html();
										//$('.module-wrap').find('#promotionDesc').parent('div.point').remove();
										$('.module-wrap').find('#promotionDesc').parent('div.point').hide();
										$('.module-wrap').find('.eco-tax').html(ecoTaxHtml + pointHtml);
									}
								}
							}

							// 9. 별점 정보 처리
							/*
							var starStyle = $('.overall-section>.owner-review>.score>.star-score p').attr('style');
							var reviewCount = $('#reviews>.module-heading>.heading-alt-text').text().replace(/^.*\(([0-9]+)\).*$/g,'$1');
							var reviewText = $('#reviews>.module-heading>.heading-text').text();

							if(starStyle != null && starStyle != ""){
							    var ratingHtml = '<div class="point"><p style="';
							    ratingHtml += starStyle;
							    ratingHtml += '"></p></div><p class="reviews"> <a href="#">'+ reviewCount + ' ' + reviewText + '</a> </p>';
								$('.module-wrap').find('.usp-module>.star-score').html(ratingHtml);
								$('.module-wrap').find('.usp-module>.star-score').find('a').off('click');
								$('.module-wrap').find('.usp-module>.star-score').find('a').on('click', function(){
									var shopGnbHeight = $('.select-category').outerHeight();
									if(shopGnbHeight == null || shopGnbHeight == ""){
										shopGnbHeight = 0;
									}
									ss.htmlBody.animate({
										scrollTop : ( ss.metrics.elemTop( $('#reviews') ) - $('.jump-module').outerHeight() - shopGnbHeight )
									}, 1000);
								});
							}
							*/

							// 10. Promotion 문구 처리
							if (data.promotionDescription != null && data.promotionDescription != "") {
								var promotion = '<ul><li>';
								promotion += data.promotionDescription;
								promotion += '</li></ul>';
								$('.module-wrap').find('.ecomText>.promotion').html(promotion);
							}

							// 포인트 및 예약안내 정보 없을경우 해당 영역 삭제
							if((data.productMileage == "0.0" || data.productMileage == "") && data.flagPreOrder != 'Y'){
								//$('.module-wrap').find('.ecom-text .point').remove();
								$('.module-wrap').find('.ecomText .point').hide();
							}

							// sales status 가 end 일 때 특정 문구 출력 (fr 사이트만 해당)
							if(SITE_CD == 'fr' && data.salesStatus == 'SALES_END'){
								$('.module-wrap').find('#stockLevelStatus').text(data.saleEndDesc);
							}

						} else {
							notEcommerceSite();
						}
						$('.jump-module').find('#jumpToQuickbuybutton').css('display','');

						hiddenBuyingOptionBtn();

						oneButton();

						new ss.PDPStandard.PDPJumpModule();

						bindEvents();

						jumpToBindEvents();

					});

				}
			} else {

				// old product 일 경우
				if (oldProductYN == 'Y') {
					$('.module-wrap').find('#promotionDescRed').empty();
					$('.module-wrap').find('#promotionDescRed').html(pdpMsg.oldProductMsg);
				}

				$('.jump-module').find('#jumpToQuickbuybutton').css('display','');

				notEcommerceSite();

				hiddenBuyingOptionBtn();

				oneButton();

				new ss.PDPStandard.PDPJumpModule();

				bindEvents();

				jumpToBindEvents();
			}

		}

		// [START] : br : Shipping Calculation/Installment 150413 WOW
		function shippingInstallationAjax(){
			var modelCode = $("#modelCode").val();
			//var url = "https://br-shop-qa.samsungfk.net/br/ng/p4v1/getRealTimeProductSimpleInfo";
			var url = "https://shop.samsung.com/br/ng/p4v1/getRealTimeProductSimpleInfo";

			$.ajax({
				url: url,
				data : {
					productCode : modelCode
				},
				dataType: 'jsonp',
				success: function(json) {
					if(json.resultCode == '0000'){
						var upToText = json.installmentPlan.upToText;
						var text= upToText + "<br><a href=\"#\" id=\"fk-shipping\">Calcular o frete</a>";
						$(".ecomText").find("#shippingCalculation").append(text);
					} else {
						console.info("api error", json.resultMessage);
						$(".ecomText").find("#shippingCalculation").append(json.resultMessage);
					}

				}
			});
		}

		function shippingCostAjax(zipCode){
			var modelCode = $("#modelCode").val();
			//var url = "https://br-shop-qa.samsungfk.net/br/ng/p4v1/calcShippingCost";
			var url = "https://shop.samsung.com/br/ng/p4v1/calcShippingCost";

			$.ajax({
				url: url,
				data : {
					productCode : modelCode
				   ,zipCode : zipCode
				},
				dataType: 'jsonp',
				success: function(json) {
					if(json.resultCode == '0000'){
						var displayText = json.shipping_estimate.displayText;
						var address = json.shipping_estimate.address;
						$("#fk-shipping-modal").find("p[class=uptoText]").text(displayText).show();
						$("#fk-shipping-modal").find("li[class=shippingAddress]").text(address).show();
						console.info("api success", displayText + " : " + address);
					} else {
						console.info("api error", json.resultMessage);
					}

				}
			});
		}

		//eCommerce Cart 건수 조회
		// 현제 사용안함
		function getCartCount() {
			estore.getCartCount(function(data) {
				console.info("cartCount", data);
				if (data && data.resultCode == "0000") {

				}

			});
		}

		//버튼이 한개일 경우
		function oneButton() {
/*			if(btnCount <= 1){
				$('#shopNowButton').hide();
				$('#multiShopButton').attr('class', 'nor-btnList-etc');
				$('#multiShopButton').css('display', '');
			}*/

			//버튼이 한개 미만일 경우
			if(btnCount < 1){
				$('.jump-module .info-section').addClass('no-button');
			}

			// E-store 버튼이 두개일경우 높이값 동기화
			//var norBtn = $('.product-info-wrap > .product-info-section > .module-wrap > .ecom-module > .nor-btnList > .nor-button');
            //if(norBtn.length === 2) ss.CompareHeight.init(norBtn.eq(0), norBtn.eq(1), false, false, true, true, true, true);
            var norBtnCon = $('.popup_wrap > .product-info-section > .module-wrap > .ecom-module > .nor-btnList'), norBtn = norBtnCon.find('> .nor-button');

			var btnNum = norBtn.length;
			norBtn.each(function() {
				if (($(this).attr('style') == 'display: none;') || ($(this).attr('style') == 'display:none')) {
					btnNum = btnNum-1;
				}
			});

            norBtnCon.addClass('num-'+btnNum);
		}

		//E-Store 사이트가 아닌경우.
		function notEcommerceSite() {

			// 사용하지 않는 버튼 제거
			//$('.module-wrap').find('#quickBuy').remove();
			//$('.module-wrap').find('#addToCart').remove();
			$('.module-wrap').find('#quickBuy').css('display','none');
			$('.module-wrap').find('#addToCart').css('display','none');

			// 사용하지 않는 영역 제거.
			//$('.module-wrap').find('.ecom-text .point').remove();
			$('.module-wrap').find('.ecomText .point').hide();

			//제품의 특성을 나타내는 아이콘 노출
			var flag = $('#productIconTypeCode').val();
			if (flag == 'C') {
				$('.module-wrap').find('#eCommerceFlag').html(pdpMsg.flagComingSoon);
			} else if (flag == 'E') {
				$('.module-wrap').find('#eCommerceFlag').html(pdpMsg.flagEvnet);
			} else if (flag == 'H') {
				$('.module-wrap').find('#eCommerceFlag').html(pdpMsg.flagHot);
			} else if (flag == 'N') {
				$('.module-wrap').find('#eCommerceFlag').html(pdpMsg.flagNew);
			}


			// 가격정보 노출
			if (rrpDisplay && priceDisplay == 'Y' ) {

				if (prdPrice != undefined && prdPrice != null && prdPrice != "") {

					$('.module-wrap').find('#promotionPrice').text(prdPrice);
					//$('.module-wrap').find('#jumpToPrice').text(prdPrice);

					if(prdPrice != undefined && prdPriceDiscl != null && prdPriceDiscl != ""){
						$('.module-wrap').find('.price-dec p').html(prdPriceDiscl);
					}

				} else {
				//ERP price
				}
			}

			if(whereToBuyBtn == 'Y'
				&& whereToBuyBtnPDP == 'Y'
				&& ( onlineRetailerYN == 'Y' || storeLocatorYN == 'Y' || SITE_CD == "cn" || SITE_CD == "ca" || SITE_CD == "ca_fr")
				&& (lightPdpFl == 'N' || lightPdpWhereToBuyFl == true)){
				$('.module-wrap').find('#seeAllAvailability').css('display', '');
				$('#jumpToSeeAllAvailability').css('display','');
				whereToBuyBtnUse = true;
				btnCount++;

			}else{
				//$('.module-wrap').find('#seeAllAvailability').remove();
				$('.module-wrap').find('#seeAllAvailability').css('display','none');
			}


		}

		function hiddenBuyingOptionBtn(){


/*			if (modelCode == 'SM-G900FZDABTU'
				|| (SITE_CD == 'jp' && typeCd == '05020000')) {

				// buying option 노출 안함.
				$('#seeAllAvailability').hide();
				if(whereToBuyBtnUse){
					btnCount --;
				}
			}*/

		}


		// E-Store data 노출 중단 (초기화)
		// 현제 사용안함
		function notUseEcommerce() {
			console.info("eCommerce 사용안함");

			//PRE-ORDER NOW 를 quick buy 로 초기화
			$('.module-wrap').find('#quickBuy').children().text(pdpMsg.quickbuy);
			// 플래그 초기화
			$('.module-wrap').find('#eCommerceFlag').html('');
			// 버튼 제거
			$('.module-wrap').find('#quickBuy').hide();
			$('.module-wrap').find('#addToCart').hide();
			//문구 제거
			$('.module-wrap').find('#stockLevelStatus').text('');
			//가격 제거
			$('.module-wrap').find('#promotionPrice').text('');
			$('.module-wrap').find('#price').text('');

			//마일리지 제거
			$('.module-wrap').find('#mileage').html('');

			//설명 문구 제거
			$('.module-wrap').find('#promotionDesc').html('');
			$('.module-wrap').find('#promotionDescRed').html('');

			//buying option 추가
			$('.module-wrap').find('#seeAllAvailability').css('display', '');

			//버튼이 1개일경우 처리
			oneButton();

			//freegift 정보제거
			$('.module-wrap').find('#freegiftData').find('img').attr('src', '');
			$('.module-wrap').find('#freegiftData').find('img').attr('alt', '');
			$('.module-wrap').find('#freegiftLinkImg').attr('href', '');
			$('.module-wrap').find('#freegiftLinkTitle').html('');
			$('.module-wrap').find('#freegiftLinkTitle').attr('href', '');
			$('.module-wrap').find('#freegiftDataDesc').text('');
			$('.module-wrap').find('#freegiftOutOfStock').hide();
			$('.module-wrap').find('#freegift').hide();

			if ($('.module-wrap').find('.offers-bar-module').find('[data-offer="Y"]').length == 0) {
				$('.module-wrap').find('.offers-bar-module.inner').hide();
				$('.module-wrap').find('#offerbelow').hide();
			}

		}

		init();

	};
}(jQuery));

$(function() {
	new ss.PDPStandard();
	var initBindT = setTimeout(function() {
		clearTimeout(initBindT);
		$('._bind-init2click').trigger('click');
	}, 500);

	// keyVisual Text theme change
/*	if ($('.ss-carousel.hero.top-view').length > 0) {
		$('.ss-carousel.hero.top-view')[0].binder.callFn = function() {
			var currentTextTheme = $('#currnetTextTheme').val();
			var textThemeClass = $('.product-info.inner-x').eq(0);
			var addClass = $('.ss-carousel.hero.top-view').eq(0).find('[data-index="' + arguments[0].curr + '"]').children().attr('data-theme');
			textThemeClass.removeClass(currentTextTheme);
			textThemeClass.addClass(addClass);
			$('#currnetTextTheme').val(addClass);
		};
	}*/
});

(function($) {
  if ($.fn.style) {
    return;
  }

  // Escape regex chars with \
  var escape = function(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  };

  // For those who need them (< IE 9), add support for CSS functions
  var isStyleFuncSupported = !!CSSStyleDeclaration.prototype.getPropertyValue;
  if (!isStyleFuncSupported) {
    CSSStyleDeclaration.prototype.getPropertyValue = function(a) {
      return this.getAttribute(a);
    };
    CSSStyleDeclaration.prototype.setProperty = function(styleName, value, priority) {
      this.setAttribute(styleName, value);
      var priority = typeof priority != 'undefined' ? priority : '';
      if (priority != '') {
        // Add priority manually
        var rule = new RegExp(escape(styleName) + '\\s*:\\s*' + escape(value) +
            '(\\s*;)?', 'gmi');
        this.cssText =
            this.cssText.replace(rule, styleName + ': ' + value + ' !' + priority + ';');
      }
    };
    CSSStyleDeclaration.prototype.removeProperty = function(a) {
      return this.removeAttribute(a);
    };
    CSSStyleDeclaration.prototype.getPropertyPriority = function(styleName) {
      var rule = new RegExp(escape(styleName) + '\\s*:\\s*[^\\s]*\\s*!important(\\s*;)?',
          'gmi');
      return rule.test(this.cssText) ? 'important' : '';
    }
  }

  // The style function
  $.fn.style = function(styleName, value, priority) {
    // DOM node
    var node = this.get(0);
    // Ensure we have a DOM node
    if (typeof node == 'undefined') {
      return this;
    }
    // CSSStyleDeclaration
    var style = this.get(0).style;
    // Getter/Setter
    if (typeof styleName != 'undefined') {
      if (typeof value != 'undefined') {
        // Set style property
        priority = typeof priority != 'undefined' ? priority : '';
        style.setProperty(styleName, value, priority);
        return this;
      } else {
        // Get style property
        return style.getPropertyValue(styleName);
      }
    } else {
      // Get CSSStyleDeclaration
      return style;
    }
  };
})(jQuery);

// by lwj(15.07.16)
function mobileGallerySize(){
	var body = $('.ss_samsung');
	var isWow = body.hasClass('pdp_wow') || body.hasClass('instore') || body.hasClass('business') ? true : false;
	if(ss.metrics.device == 'mobile' || ss.metrics.device == 'mobile-landscape') {
		var wH = $(window).height();													// window height
		var gH = $('.global_header .nav').outerHeight();			// gnb height
		var bH = $('.contens-bread-crumb').outerHeight();			// breadcrumb height
		var zH = 80;																					// zoom btn area height
		var pH = 59;																					// paging area height
		var galH = wH - (gH + bH);
		var prodH = wH - (gH + bH + zH + pH);
		var pdpCarouselH = wH - (gH + bH + pH);

		if(isWow){
			if($('.hero-module.hero-cc').css('display') == 'block') {
        $('.product-container.hero-cc').style('height', $('.hero-module.hero-cc').height());
      } else {
        $('.product-container.hero-cc').style('height', + galH + 'px', 'important');
      }
			$('#gallery-panel .product').style('height', + prodH + 'px', 'important');
			$('#gallery-panel').style('height', + galH + 'px', 'important');
			$('#s7viewer_container').style('height', '100%', 'important');
			$('#s7viewer_zoomView').style('height', '100%', 'important');
			$('#s7viewer_zoomView > div').style('height', '100%', 'important');
			$('#s7viewer_zoomView > div > div').style('height', '100%', 'important');

			$('#s7viewer_zoomView canvas').style('width', 'auto', 'important');
			$('#s7viewer_zoomView canvas').style('height', + prodH + 'px', 'important');
		} else {
			var pdpImgSize = $('.pdp-hero .ss-carousel').width();
			var pdpCarouseonlylH = pdpImgSize + pH;
			$('.pdp-hero .product-img-section').style('height', + galH + 'px', 'important');
			$('.pdp-hero .product-img-section').style('max-height', + pdpCarouseonlylH + 'px', 'important');
			$('.pdp-hero .ss-carousel').style('height', + pdpCarouselH + 'px', 'important');
				$('.pdp-hero .ss-carousel').style('max-height', + pdpImgSize + 'px', 'important');
			$('.pdp-hero .ss-carousel ul > li').find('div[class^="hero"]').each(function(index) {
    		$(this).style('height', + pdpCarouselH + 'px', 'important');
  		});
			$('.pdp-hero .ss-carousel ul > li').find('div[class^="hero"]').each(function(index) {
    		$(this).style('max-height', + pdpImgSize + 'px', 'important');
  		});
			$('.pdp-hero .ss-carousel ul > li > div[class^="hero"]').find('p').each(function(index) {
    		$(this).style('height', + pdpCarouselH + 'px', 'important');
  		});
			$('.pdp-hero .ss-carousel ul > li > div[class^="hero"]').find('p').each(function(index) {
    		$(this).style('max-height', + pdpImgSize + 'px', 'important');
  		});
			$('.pdp-hero .ss-carousel ul > li > div[class^="hero"]').find('img.pdp-desktop').each(function(index) {
    		$(this).style('height', '100%', 'important');
  		});
			$('.pdp-hero .ss-carousel ul > li > div[class^="hero"]').find('img.pdp-desktop').each(function(index) {
    		$(this).style('width', 'auto', 'important');
  		});
			$('.pdp-hero .ss-carousel ul > li > div[class^="hero"]').find('img.pdp-mobile').each(function(index) {
    		$(this).style('height', '100%', 'important');
  		});
				$('.pdp-hero .ss-carousel ul > li > div[class^="hero"]').find('img.pdp-mobile').each(function(index) {
    		$(this).style('width', 'auto', 'important');
  		});
			$('.pdp-hero .ss-carousel ul > li > div[class^="hero"]').find('span.click-area').each(function(index) {
    		$(this).style('width', '100%', 'important');
  		});
			$('.pdp-hero .ss-carousel ul > li > div[class^="hero"]').find('span.click-area').each(function(index) {
    		$(this).style('margin-left', '-50%', 'important');
  		});
		}

	} else {
		if(!isWow){
			$('.pdp-hero .product-img-section').removeAttr('style');
		}
	}
}

$(document).ready(function(){
	$('#selectColor').css('opacity','1');
	// by lwj(15.07.16)
	mobileGallerySize();
});
// by lwj(15.07.16)
$(window).resize(function () {
	mobileGallerySize();
});


window.onload = function  () {
	if ( SITE_CD === 'dk' ||  SITE_CD === 'fi' ||  SITE_CD === 'no' ||  SITE_CD === 'se') {
		if (location.hash == '#reviews?ratingpopup') {
		function calculateElemTop() {
			//-ratingsPoupup 기능 적용 
			var _elem = $('#reviews');
			var _offset =  _elem.offset(),
				_extra = 0,
				_dockedJumpModule = $('.jump-module.docked'),
				_elemTop;
			if(_dockedJumpModule.length > 0) {
				_extra += _dockedJumpModule.outerHeight();
			}
			 _elemTop = _offset.top - _extra;
			 return _elemTop;
		}
		//고의적으로 스크롤 내려 lazy loading실행 -> reviews영역을 클릭하는 것으로 대체 
		/*
		$.each($('.jump-link').find('a'), function(){
			if($(this).attr('tag-code') == "reviews") $(this).click();
		})
		*/
		$(window).scrollTop(calculateElemTop());		
			setTimeout(function  () {
				$(window).scrollTop(calculateElemTop());		
				$('#reviews > div.module-con > div.overall-section > div > div.button-area > a.write-review-button').click();
			},1000)
			
		}
	}
}