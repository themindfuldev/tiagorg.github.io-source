var main = (function() {
  function setupTwitter(d, s) {
    var js, fjs = d.getElementsByTagName(s)[0], load = function(url, id) {
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.src = url; js.id = id;
      fjs.parentNode.insertBefore(js, fjs);
    };
    load('//platform.twitter.com/widgets.js', 'tweetjs');
  }

  function iosFix(j) {
    var i=j.document;if(!i.querySelectorAll){return}var l=i.querySelectorAll("meta[name=viewport]")[0],a=l&&l.getAttribute("content"),h=a+", maximum-scale=1.0",d=a+", maximum-scale=10.0",g=true,c=j.orientation,k=0;if(!l){return}function f(){l.setAttribute("content",d);g=true}function b(){l.setAttribute("content",h);g=false}function e(m){c=Math.abs(j.orientation);k=Math.abs(m.gamma);if(k>8&&c===0){if(g){b()}}else{if(!g){f()}}}j.addEventListener("orientationchange",f,false);j.addEventListener("deviceorientation",e,false);
  }

  function setupScrollTop() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  }

  function setupCoderWall() {
    var el = $('#coderwall');

    if (el) {
      $.ajax({
        url: 'http://coderwall.com/tiagorg.json',
        type: 'GET',
        crossDomain: true,
        dataType: 'jsonp',
        success: function(response) {
          var documentFragment = document.createDocumentFragment();
          $.each(response.data.badges, function(index, badge) {
            var li = document.createElement('li');

            var img = document.createElement('img');
            img.src = badge.badge;
            img.title = badge.description;
            li.appendChild(img);

            var p = document.createElement('p');
            p.textContent = badge.name;
            li.appendChild(p);

            documentFragment.appendChild(li);
          });
          el.html(documentFragment);
        }
      });
    }
  }

  return {
    initialize: function() {
      setupTwitter(document, 'script');
      iosFix(window);
      $(this.initializejQuery);
    },

    initializejQuery: function() {
      setupScrollTop();
      setupCoderWall();
    }
  }
})();

main.initialize();