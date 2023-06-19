document.addEventListener('DOMContentLoaded', function(event) {
	function handleScroll() {
	    var scroll = window.pageYOffset || document.documentElement.scrollTop;
	    var header = document.querySelector('.header');
	    if (scroll > 1) {
	        header.classList.add('scroll');
	    } else {
	        header.classList.remove('scroll');
	    }
	}
	handleScroll();
  var headerBurger = document.querySelector('.header__burger');
  var menu = document.querySelector('.menu');
  var body = document.querySelector('body');
  var headerRight = document.querySelector('.header__right');

	window.addEventListener('scroll', handleScroll); 
	document.querySelector('.header__burger').addEventListener('click', function(event) {
	    headerBurger.classList.toggle('active');
	    menu.classList.toggle('active');
	    body.classList.toggle('lock');
	});

	var menuLinks = document.querySelectorAll('.menu__link');
	menuLinks.forEach(function(link) {
	    link.addEventListener('click', function(event) {
	        headerBurger.classList.remove('active');
	        menu.classList.remove('active');
	        body.classList.remove('lock');
	    });
	});
	document.addEventListener( 'click', (e) => {
		const withinBoundaries = e.composedPath().includes(headerRight);
	 
		if ( ! withinBoundaries ) {
        headerBurger.classList.remove('active');
        menu.classList.remove('active');
        body.classList.remove('lock');
		}
	})
  const calcsel = document.querySelectorAll(".repair__sel");
  if(calcsel){
	  calcsel.forEach(function (calcsel) {
	    calcsel.addEventListener("click", function (event) {
	      const dataSel = this.parentNode.querySelectorAll("[data-tab].active");
	      for (let j = 0; j < dataSel.length; j++) {
	        dataSel[j].classList.remove("active");
	      }
	      this.classList.add("active");
	      const target = this.parentNode.parentNode.querySelectorAll("[data-content].target");
	      for (let j = 0; j < target.length; j++) {
	        target[j].classList.remove("target");
	      }
	      const dataTab = this.getAttribute("data-tab");
	      const dataId = document.querySelector(`[data-content="${dataTab}"]`);
	      if (dataId !== null) {
	        dataId.classList.add("target");
	      }
	    });
	  });  	
  }
  const nextButton = document.querySelectorAll(".repair__next");
  if(nextButton){
	  nextButton.forEach(function (nextButton) {
	    nextButton.addEventListener("click", function (event) {
	    	event.preventDefault();
	      const dataSel = this.closest('.repair__calc').querySelectorAll("[data-tab].active");
	      for (let j = 0; j < dataSel.length; j++) {
	        dataSel[j].classList.remove("active");
	      }
	      const target = this.parentNode.parentNode.querySelectorAll("[data-content].target");
	      for (let j = 0; j < target.length; j++) {
	        target[j].classList.remove("target");
	      }
	      const dataTab = this.getAttribute("data-tab");
	      const dataId = document.querySelector(`[data-content="${dataTab}"]`);
	      if (dataId !== null) {
	        dataId.classList.add("target");
	      }

	      const dataNextSel =document.querySelector(`.repair__sel[data-tab="${dataTab}"]`);
	      if (dataNextSel !== null) {
	        dataNextSel.classList.add("active");
	      }
	    });
	  });  	
  }

	var blocks = document.querySelectorAll('.repair__block');
	var maxHeight = 0;
	blocks.forEach(function(block) {
	  var blockHeight = block.offsetHeight;
	  if (blockHeight > maxHeight) {
	    maxHeight = blockHeight;
	  }
	});
	blocks.forEach(function(block) {
	  block.style.height = maxHeight + 'px';
	});
	var questionsTop = document.querySelectorAll('.questions__top');
	if(questionsTop){
		questionsTop.forEach(function(questionsTop) {
		    questionsTop.addEventListener('click', function(event) {
		    		questionsTop.classList.toggle('active');
		        slideToggle(questionsTop.nextElementSibling);
		    });
		});		
	}

	function slideToggle(element) {
	  var target = element.style;
	  target.transition = 'all 0.3s ease-in-out';
	  if (target.maxHeight) {
	    target.maxHeight = null;
	    element.classList.remove('active');
	  } else {
	    target.maxHeight = element.scrollHeight + 'px';
	    element.classList.add('active');
	  }
	}

  if(document.querySelector('.reviews__swiper')){
      new Swiper('.reviews__swiper', {
        speed: 600,
        spaceBetween: 20,
        slidesPerView: 1,
        loop:false,
	      navigation: {
	        nextEl: '.reviews-next',
	        prevEl: '.reviews-prev',
	      },
        breakpoints: {
          991: {
            slidesPerView: 4,
          },
          767: {
            slidesPerView: 3,
          },
          550: {
            slidesPerView: 2,
          },
          0: {
          	loop:true,
            slidesPerView: 1,
          }
        }
      });
   }
  if(document.querySelector('.works__slider')){
      new Swiper('.works__slider', {
        speed: 600,
        spaceBetween: 20,
        slidesPerView: 1,
        loop:true,
	      navigation: {
	        nextEl: '.works-next',
	        prevEl: '.works-prev',
	      },
      });
   }

	Fancybox.bind("[data-fancybox]");



	window.onload = () => {
	  let openBtn = document.querySelector('.openphone')
	  let blocks = document.querySelector('.blocks')
	  openBtn.addEventListener('click', function(){
	     if(blocks.classList.contains('active')){
	        close()
	     }else{
	        open()
	     }
	  })
		document.addEventListener( 'click', (e) => {
			const openbtss = e.composedPath().includes(openBtn);
			if ( ! openbtss ) {
	        close()
			}
		})

	  function open(){
	     document.querySelector('.callback-phone-block .blocks').classList.add('active');
	     document.querySelector('.callback-phone-block').classList.add('opens');
	  }
	  function close(){
	     document.querySelector('.callback-phone-block .blocks').classList.remove('active');
	     document.querySelector('.callback-phone-block').classList.remove('opens');    
	  }
	      
	  let image = document.querySelector('.circle.image')
	  let pulse1 = document.querySelector('.pulse1')
	  let pulse2 = document.querySelector('.pulse2')
		let images = ['img/footer/1.svg', 'img/footer/2.svg', 'img/footer/3.svg']
		let i = 0
		animate(i)
		i++
		setInterval(() => {
		  if(i < images.length){
		     animate(i)
		     i++
		  }else{
		     i = 0
		     animate(i)
		     i++
		  }
		  
		}, 3000)
		function animate(i){
		  pulse1.style.animation = 'pulseCircle 2s'
		  pulse2.style.animation = 'pulseCircle 2s'
		  setTimeout(() => {
		     pulse1.style.animation = ''
		     pulse2.style.animation = ''
		     image.style.transform = `scale(0.5)`
		     image.style.opacity = `0`
		  }, 2500)
		  image.style.background = `url(${images[i]}) center center no-repeat`
		  image.style.transform = `scale(1)`
		  image.style.opacity = `1`

		}
	}

	
  const popup = document.querySelectorAll("[data-topopup]");
  popup.forEach(function (popup) {
    popup.addEventListener("click", function (event) {
      event.preventDefault();
      var scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = scrollBarWidth + "px";
      const datapopupclass = this.getAttribute("data-topopup");
      document.querySelector(`.${datapopupclass}`).classList.add("open");
      body.classList.add('lock1');
    });
  });
  const popupClose = document.querySelectorAll(".popup__close");
  popupClose.forEach(function (popupClose) {
    popupClose.addEventListener("click", function (event) {
      event.preventDefault();
      document.body.style.paddingRight = 0;
      popupClose.closest('.popup').classList.remove('open');
      body.classList.remove('lock1');
    });
  });
});