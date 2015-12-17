var ss = $;
(function($) {
	
	/**
	 * Contactus Button Module.
	 * @class $.ContactusButton
	 * @param
	 */
	

	ss.ContactUsButton = function( params ) {
		
		// Contactus Button
		var container = params.container;
		
		// Popover Container
		var popoverContainer = '.contactus-popover-container';
		
		// Contactus Poover 객체
		var popover;
		if(SITE_CD == 'de'){
			$('.forwardLiveChat').html("Live Chat<span class='icon-link-play icon'></span>");
		}
		
		function init() {
			if(SITE_CD == 'fr'){
				$('#contactus-tab').attr('href', '/'+SITE_CD+'/shop/contact/');
			} else if(SITE_CD == 'uk'){
				$('#contactus-tab').attr('href', '/'+SITE_CD+'/info/contactus.html');
			} else{
				setupPopover();
				bindEvents();
			}
         }
		
		function setupPopover() {
			if( $(popoverContainer).length <= 0 ) popoverContainer = 'body';
			popover = new ss.Popover( '#'+container.attr('id'), {placement: container.attr('data-popover-position'), content: $('.contactus-popover-content').html(), html: true, container: popoverContainer, animation: false});
			return;
		}
		
		function bindEvents() {
            // Contactus 버튼 클릭
            container.on('click', function(){
            	if( $.Popover.activePopover ) {
            		// 팝업 초기화
                	initContactusPopover();
										
            	}
            });
			
            // 팝업 내부 View Contactus 버튼 클릭 이벤트
            $(popoverContainer).on('click', '.popover .forwardContactus', function(){
				//sendClickCode('content_click_count','contact us');
				//옵니추어 tagging 변경 by hun
				sendClickCode('content_click_count','contact us:shop faqs');
				if(SITE_CD == 'fr'){
					window.location = '/'+SITE_CD+'/shop/contact/';
				} else if(SITE_CD == 'uk'){
					window.location = '/'+SITE_CD+'/info/contactus.html';
				} else{
					window.location = 'http://shop.samsung.com/'+SITE_CD+'/ng/help/faq';
				}
            });

			$(popoverContainer).on('click', '.popover .forwardLiveChat', function(){
				if(SITE_CD == 'de'){
					//옵니추어 tagging 추가 by hun
					sendClickCode('content_click_count','contact us:live chat');
				}
            });
		}

		
		// 팝업 초기화
		function initContactusPopover() {
		
			//옵니추어 tagging 추가 by hun.
			sendClickCode('content_click_count','contact us');

			var $contactusPopover = $( popoverContainer ).find('.popover .contactus-popover');
			
			$contactusPopover.hide(); // 화면깨짐방지
			// 팝업 ROW 초기화
			$contactusPopover.find('.row').hide();
			$contactusPopover.find('.tel').show();
			$contactusPopover.show(); // 화면깨짐방지
		    positionPopover();
		}
		
		function positionPopover() {
			var $wishPopover = $( popoverContainer ).find('.popover .contactus-popover').parent().parent();
			var $container = $( popover.targetElementSelector );
			if( $wishPopover.hasClass('top') ) {
				$wishPopover.css({'top':  $container.offset().top - $wishPopover.outerHeight()});
			}
			
			$wishPopover.find('.forwardContactus').attr('data-focus-id','forwardContactus').attr('data-tab-previous','wish-login').attr('data-tab-next','wish-close');
			$wishPopover.find('.icon-close-x').attr('data-focus-id','wish-close').attr('data-tab-previous','forwardContactus').attr('data-tab-next','wish-login');
			$wishPopover.find('.forwardContactus').focus();							
		}
		
		init();
	};
	
} (jQuery));