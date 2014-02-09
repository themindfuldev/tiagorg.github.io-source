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
        url: 'https://coderwall.com/tiagorg.json',
        type: 'GET',
        crossDomain: true,
        dataType: 'jsonp',
        success: function(response) {
          var documentFragment = document.createDocumentFragment();
          $.each(response.data.badges, function(index, badge) {
            var li = $('<li/>');

            var link = $('<a/>', {
              href: 'https://coderwall.com/tiagorg',
              target: '_blank'
            });

            var img = $('<img/>', {
              src : badge.badge,
              title : badge.description
            });
            link.append(img);

            li.append(link);

            var p = $('<p/>', {
              text: badge.name
            });
            li.append(p);

            documentFragment.appendChild(li[0]);
          });
          el.html(documentFragment);
        }
      });
    }
  }

  function setupGithubCommits() {
    var el = $('#github-commits');

    if (el) {
      $.ajax({
        url: 'https://api.github.com/users/tiagorg/events',
        type: 'GET',
        crossDomain: true,
        dataType: 'jsonp',
        success: function(response) {
          var documentFragment = document.createDocumentFragment();
          response.data.length = 10;
          $.each(response.data, function(index, event) {
            if (event.type === 'PushEvent') {
              var li = $('<li/>');

              var commitsLength = event.payload.commits.length;
              $.each(event.payload.commits, function(index, commit) {
                var commitUrl = 'https://github.com/' + commit.url.split('/repos/')[1].replace('commits', 'commit');
                var commitLink = $('<a/>', {
                  href: commitUrl,
                  text: commit.message,
                  target: '_blank'
                });
                li.append(commitLink);

                if (index < commitsLength - 1) {
                  li.append(', ');
                }
              });

              li.append(' @ ');

              var repoUrl = 'https://github.com/' + event.repo.url.split('/repos/')[1];
              var repoLink = $('<a/>', {
                href: repoUrl,
                text: event.repo.name,
                target: '_blank'
              });
              li.append(repoLink);

              li.append(' [')
                .append(event.created_at.split('T')[0])
                .append(']');

              documentFragment.appendChild(li[0]);
            }
          });
          el.html(documentFragment);
        }
      });
    }
  }

  function fixTargetLinks() {
    $('div.featured-content a').attr('target','_blank');
  }

  function showRecaptcha(element) {
    Recaptcha.create('6Lf4Yu4SAAAAAHxlo-Ly7IPlRo6zQtfBKW9crnoI', element, {
      theme: 'custom',
      custom_theme_widget: 'recaptcha_widget'
    });
  }

  function setupRecaptcha() {
    var contactFormHost = 'http://tgarcia-contact-form.herokuapp.com/',
        form = $('#contact-form'),
        notice = $('#notice');

    if (form.length) {
      showRecaptcha('recaptcha_widget');

      form.submit(function(ev){
        ev.preventDefault();

        $.ajax({
          type: 'POST',
          url: contactFormHost + 'send_email',
          data: form.serialize(),
          dataType: 'json',
          success: function(response) {
            switch (response.message) {
              case 'success':
                form.fadeOut(function() {
                  form.html('<h4>' + form.data('success') + '</h4>').fadeIn();
                });
                break;

              case 'failure_captcha':
                showRecaptcha('recaptcha_widget');
                notice.text(notice.data('captcha-failed')).fadeIn();
                break;

              case 'failure_email':
                notice.text(notice.data('error')).fadeIn();
            }
          },
          error: function(xhr, ajaxOptions, thrownError) {
            notice.text(notice.data('error')).fadeIn();
          }
        });
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
      setupGithubCommits();
      setupCoderWall();
      fixTargetLinks();
      setupRecaptcha();
    }
  }
})();

main.initialize();