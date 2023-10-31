$(function() {
    $('a[rel=blog]').click( function(){ 
       $('#content').removeClass('active');
       window.location.hash = 'blog';
       $(this).addClass('active');
           $('#prawo').fadeOut( 'slow', function(){
               $('#prawo').empty().load('blog.html');
               $('#prawo').removeClass().addClass('#content').fadeIn('slow');
            })
            return false;
     })
    $('a[rel=stocks]').click( function(){ 
       $('#content').removeClass('active');
       window.location.hash = 'stocks';
       $(this).addClass('active');
           $('#prawo').fadeOut( 'slow', function(){
               $('#prawo').empty().load('stocks.html');
               $('#prawo').removeClass().addClass('#content').fadeIn('slow');
            })
            return false;
     })
     
      $('a[rel=chess]').click( function(){ 
       $('#content').removeClass('active');
       window.location.hash = 'chess';
       $(this).addClass('active');
           $('#prawo').fadeOut( 'slow', function(){
               $('#prawo').empty().load('chess.html');
               $('#prawo').removeClass().addClass('#content').fadeIn('slow');
            })
            return false;
     })
      $('a[rel=about]').click( function(){ 
       $('#content').removeClass('active');
       window.location.hash = 'about';
       $(this).addClass('active');
           $('#prawo').fadeOut( 'slow', function(){
               $('#prawo').empty().load('about.html');
               $('#prawo').removeClass().addClass('#content').fadeIn('slow');
            })
            return false;
     })
      $('a[rel=offer]').click( function(){ 
       $('#content').removeClass('active');
       window.location.hash = 'offer';
       $(this).addClass('active');
           $('#prawo').fadeOut( 'slow', function(){
               $('#prawo').empty().load('offer.html');
               $('#prawo').removeClass().addClass('#content').fadeIn('slow');
            })
            return false;
     })
      $('a[rel=contact]').click( function(){ 
       $('#content').removeClass('active');
       window.location.hash = 'contact';
       $(this).addClass('active');
           $('#prawo').fadeOut( 'slow', function(){
               $('#prawo').empty().load('contact.html');
               $('#prawo').removeClass().addClass('#content').fadeIn('slow');
            })
            return false;
     })
     
      $('a[rel=home]').click( function(){ 
       $('#content').removeClass('active');
       window.location.hash = '';
       $(this).addClass('active');
           $('#prawo').fadeOut( 'slow', function(){
               $('#prawo').empty().load('home.html');
               $('#prawo').removeClass().addClass('#content').fadeIn('slow');
            })
            return false;
     })
     $('a[rel=dev]').click( function(){ 
       $('#content').removeClass('active');
       window.location.hash = 'dev';
       $(this).addClass('active');
           $('#prawo').fadeOut( 'slow', function(){
               $('#prawo').empty().load('dev.html');
               $('#prawo').removeClass().addClass('#content').fadeIn('slow');
            })
            return false;
     })
   
   /* 
     $('a[href=#tlo2]').click( function(){
       $('#main_slider li a').removeClass('active');
       $(this).addClass('active');
           $('#about').fadeOut( 'slow', function(){
               $('#about').empty().load('slide2.html');
               $('#about').removeClass().addClass('bg_arrow').fadeIn('slow');
           })
           return false;
     })*/
   });
   
   if(window.location.hash=="#blog") {
       $(function(){
           $('a[rel=blog]').trigger("click");
       });
   }
   if(window.location.hash=="#stocks") {
       $(function(){
           $('a[rel=stocks]').trigger("click");
       });
   }
   if(window.location.hash=="#contact") {
       $(function(){
           $('a[rel=contact]').trigger("click");
       });
   }
   if(window.location.hash=="#chess") {
       $(function(){
           $('a[rel=chess]').trigger("click");
       });
   }
   if(window.location.hash=="#about") {
       $(function(){
           $('a[rel=about]').trigger("click");
       });
   }

   
   //slajder z menu
   $(document).ready(function()
   {
       slide("#sliding-navigation", 25, 15, 150, .8);
   });
   
   function slide(navigation_id, pad_out, pad_in, time, multiplier)
   {
       // creates the target paths
       var list_elements = navigation_id + " li.sliding-element";
       var link_elements = list_elements + " a";
       
       // initiates the timer used for the sliding animation
       var timer = 0;
       
       // creates the slide animation for all list elements 
       $(list_elements).each(function(i)
       {
           // margin left = - ([width of element] + [total vertical padding of element])
           $(this).css("margin-left","-180px");
           // updates timer
           timer = (timer*multiplier + time);
           $(this).animate({ marginLeft: "0" }, timer);
           $(this).animate({ marginLeft: "15px" }, timer);
           $(this).animate({ marginLeft: "0" }, timer);
       });
   
       // creates the hover-slide effect for all link elements 		
       $(link_elements).each(function(i)
       {
           $(this).hover(
           function()
           {
               $(this).animate({ paddingLeft: pad_out }, 150);
           },		
           function()
           {
               $(this).animate({ paddingLeft: pad_in }, 150);
           });
       });
   }
   
   
   
   
   
   
   //hover
       // On window load. This waits until images have loaded which is essential
       $(window).load(function(){
           
           // Fade in images so there isn't a color "pop" document load and then on window load
           $(".item img").fadeIn(500);
           
           // clone image
           $('.item img').each(function(){
               var el = $(this);
               el.css({"position":"absolute"}).wrap("<div class='img_wrapper' style='display: inline-block'>").clone().addClass('img_grayscale').css({"position":"absolute","z-index":"998","opacity":"0"}).insertBefore(el).queue(function(){
                   var el = $(this);
                   el.parent().css({"width":this.width,"height":this.height});
                   el.dequeue();
               });
               this.src = grayscale(this.src);
           });
           
           // Fade image 
           $('.item img').mouseover(function(){
               $(this).parent().find('img:first').stop().animate({opacity:1}, 1000);
           })
           $('.img_grayscale').mouseout(function(){
               $(this).stop().animate({opacity:0}, 1000);
           });		
       });
       
       // Grayscale w canvas method
       function grayscale(src){
           var canvas = document.createElement('canvas');
           var ctx = canvas.getContext('2d');
           var imgObj = new Image();
           imgObj.src = src;
           canvas.width = imgObj.width;
           canvas.height = imgObj.height; 
           ctx.drawImage(imgObj, 0, 0); 
           var imgPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
           for(var y = 0; y < imgPixels.height; y++){
               for(var x = 0; x < imgPixels.width; x++){
                   var i = (y * 4) * imgPixels.width + x * 4;
                   var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
                   imgPixels.data[i] = avg; 
                   imgPixels.data[i + 1] = avg; 
                   imgPixels.data[i + 2] = avg;
               }
           }
           ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
           return canvas.toDataURL();
       }
       
       
   //tajmer
   
   /*
    *
    *	jQuery Timer plugin v0.1
    *		Matt Schmidt [http://www.mattptr.net]
    *
    *	Licensed under the BSD License:
    *		http://mattptr.net/license/license.txt
    *
    */
    
    jQuery.timer = function (interval, callback)
    {
    /**
     *
     * timer() provides a cleaner way to handle intervals  
     *
     *	@usage
     * $.timer(interval, callback);
     *
     *
     * @example
     * $.timer(1000, function (timer) {
     * 	alert("hello");
     * 	timer.stop();
     * });
     * @desc Show an alert box after 1 second and stop
     * 
     * @example
     * var second = false;
     *	$.timer(1000, function (timer) {
     *		if (!second) {
     *			alert('First time!');
     *			second = true;
     *			timer.reset(3000);
     *		}
     *		else {
     *			alert('Second time');
     *			timer.stop();
     *		}
     *	});
     * @desc Show an alert box after 1 second and show another after 3 seconds
     *
     * 
     */
   
       var interval = interval || 100;
   
       if (!callback)
           return false;
       
       _timer = function (interval, callback) {
           this.stop = function () {
               clearInterval(self.id);
           };
           
           this.internalCallback = function () {
               callback(self);
           };
           
           this.reset = function (val) {
               if (self.id)
                   clearInterval(self.id);
               
               var val = val || 100;
               this.id = setInterval(this.internalCallback, val);
           };
           
           this.interval = interval;
           this.id = setInterval(this.internalCallback, this.interval);
           
           var self = this;
       };
       
       return new _timer(interval, callback);
    };
    
   
   
   //colorbox
           $(document).ready(function(){
               $(".box2").colorbox({
               transition: 'elastic', 
               opacity: '0.85', 
               loop: false, 
               preloading: false,
               });
   
           });