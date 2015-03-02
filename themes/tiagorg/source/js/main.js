var main = (function() {

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
    $('#content article a').attr('target', '_blank');
  }

  function setupGoogleAnalytics() {
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-60254345-1', 'auto');
    ga('send', 'pageview');
  }

  return {
    initialize: function() {
      setupGithubCommits();
      fixTargetLinks();
      setupGoogleAnalytics();
    }
  }
})();

$(function() {
  $(document).foundation();
  main.initialize();
});

