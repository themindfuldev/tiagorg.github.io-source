var main = (function() {
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
    $('#content a').attr('target','_blank');
  }

  return {
    initialize: function() {
      setupScrollTop();
      setupGithubCommits();
      setupCoderWall();
      fixTargetLinks();
    }
  }
})();

$(function() {
  $(document).foundation();
  main.initialize();
});

