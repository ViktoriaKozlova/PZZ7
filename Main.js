 ing.onclick = function() {
      let start = Date.now();

      let timer = setInterval(function() {
        let timePassed = Date.now() - start;

        ing.style.left = timePassed / 5 + 'px';

        if (timePassed > 2000) clearInterval(timer);

      }, 20);
    }
     ing2.onclick = function() {
      let start = Date.now();

      let timer = setInterval(function() {
        let timePassed = Date.now() - start;

        ing2.style.left = timePassed / 5 + 'px';

        if (timePassed > 2000) clearInterval(timer);

      }, 20);
    }
      ing3.onclick = function() {
      let start = Date.now();

      let timer = setInterval(function() {
        let timePassed = Date.now() - start;

        ing3.style.left = timePassed / 5 + 'px';

        if (timePassed > 2000) clearInterval(timer);

      }, 20);
    }
var p = document.getElementById("Send");
p.onclick = function() {
    alert("Вы не заполнили свою форму, просмотрите дальнейшие окна");
    let d = prompt("Username:")
    if (d == "") {
        alert("Вы снова не заполнили нужное поле!");
        return true;
    }
    let t = prompt("E-mail:");
    if (t == "") {
        alert("Вы снова не заполнили нужное поле!");
        return true;
    }
    let v = prompt("Введите свой отзыв:");
    if (v == "") {
        alert("Вы снова не заполнили нужное поле!");
        return true;
    }
    alert("Операция прошла успешно, нажмите 'ок'");
    return true;
} 
$("#img").on('click', function(){
  $(this).fadeOut();
})
    $("#img2").on('click', function(){
  $(this).fadeOut();
})
    $("#img3").on('click', function(){
  $(this).fadeOut();
})
    $("#img4").on('click', function(){
  $(this).fadeOut();
}) 
    $("#img5").on('click', function(){
  $(this).fadeOut();
})
    $("#img6").on('click', function(){
  $(this).fadeOut();
})
    $("#img7").on('click', function(){
  $(this).fadeOut();
})
    $("#img8").on('click', function(){
  $(this).fadeOut();
})
    $(document).ready(function () {

var timeList = 700;
var TimeView = 5000;
var RadioBut = true;

var slideNum = 1;
var slideTime;
slideCount = $("#slider .slide").length;

var animSlide = function(arrow){
    clearTimeout(slideTime); 

    if(arrow == "next"){
	  if(slideNum == slideCount) { slideNum=1; }
	  else{slideNum++}
       translateWidth = -$('#active-slide').width() * (slideNum - 1);
       $('#slider').css({'transform': 'translate(' + translateWidth + 'px, 0)'});
    }
    else if(arrow == "prew")
    {	
       if(slideNum == 1) { slideNum=slideCount; }
	  else{slideNum-=1}
	  translateWidth = -$('#active-slide').width() * (slideNum - 1); 
       $('#slider').css({'transform': 'translate(' + translateWidth + 'px, 0)'});
    }else{
       slideNum = arrow;
	  translateWidth = -$('#active-slide').width() * (slideNum -1);
       $('#slider').css({'transform': 'translate(' + translateWidth + 'px, 0)'});
    }

    $(".ctrl-select.active").removeClass("active");
    $('.ctrl-select').eq(slideNum - 1).addClass('active');
}

    if(RadioBut){
    var $linkArrow = $('<a id="prewbutton" href="#">&lt;</a><a id="nextbutton" href="#">&gt;</a>')
        .prependTo('#active-slide');
        $('#nextbutton').click(function(){
           animSlide("next");
           return false;
           })
        $('#prewbutton').click(function(){
           animSlide("prew");
           return false;
           })
    }
        var adderSpan = '';
        $('.slide').each(function(index) {
               adderSpan += '<span class = "ctrl-select">' + index + '</span>';
           });
        $('<div class ="Radio-But">' + adderSpan +'</div>').appendTo('#slider-wrap');
        $(".ctrl-select:first").addClass("active");
        $('.ctrl-select').click(function(){
        var goToNum = parseFloat($(this).text());
        animSlide(goToNum + 1);
        });
        var pause = false;
        var rotator = function(){
               if(!pause){slideTime = setTimeout(function(){animSlide('next')}, TimeView);}
               }
        $('#slider-wrap').hover(
           function(){clearTimeout(slideTime); pause = true;},
           function(){pause = false; rotator();
           });  
    var clicking = false;
    var prevX;
    $('.slide').mousedown(function(e){
        clicking = true;
        prevX = e.clientX;
    });

    $('.slide').mouseup(function() {
     clicking = false;
    });

    $(document).mouseup(function(){
        clicking = false;
    });

    $('.slide').mousemove(function(e){
        if(clicking == true)
         {
             if(e.clientX < prevX) { animSlide("next"); clearTimeout(slideTime); }
             if(e.clientX > prevX) { animSlide("prew"); clearTimeout(slideTime); }
           clicking = false;
        }
    });
    $('.slide').hover().css('cursor', 'pointer');
    rotator();  

})
$(document).ready(function() {
	$('#accordeon .acc-head').on('click', f_acc);
});

function f_acc(){
	$('#accordeon .acc-body').not(    $(this).next()   ).slideUp(1000);
	$(this).next().slideToggle(2000);
}
$( function() {
  $( "#sortable" ).sortable();
  $( "#sortable" ).disableSelection();
} );
function openCity(evt, cityName) {

    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


$(document).ready(function(){
	$('.select').change(function(){
		window.location.href = $(this).val();
	});
});