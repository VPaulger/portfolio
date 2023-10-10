import React, { useEffect } from 'react';
import $ from 'jquery';
import '../styles/clouds.scss';

const Clouds = () => {
  useEffect(() => {
    $(
      (function () {
        var a = 0;
        $('#tv').hide();
        for (; a < 25; a += 1) {
          setTimeout(function b() {
            var a = Math.random() * 1e3 + 5e3,
              c = $('<div />', {
                class: 'smoke',
                css: {
                  left: Math.random() * 1200,
                  backgroundSize: 'contain',
                  width: Math.random() * 1200,
                  height: Math.random() * 1200,
                },
              });
            $(c).addClass('animated');
            $(c).addClass('zoomIn');
            $(c).addClass('rollOut');
            $(c).appendTo('#viewport');
            $.when(
              $(c).animate(
                {},
                {
                  duration: a / 4,
                  easing: 'linear',
                  queue: false,
                  complete: function () {
                    $(c).animate(
                      {},
                      {
                        duration: a / 13,
                        easing: 'linear',
                        queue: false,
                      }
                    );
                  },
                }
              ),
              $(c).animate(
                {
                  bottom: $('#viewport').height(),
                },
                {
                  duration: a / 0.5,
                  easing: 'linear',
                  queue: false,
                }
              )
            ).then(function () {
              $(c).remove();
              b();
            });
          }, Math.random() * 3e3);
        }
      })()
    );
    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/player_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  });

  return (
    <div id='wrap'>
      <div id='viewport'>
        <div className='tv'>
          <div
            className='screen mute'
            id='tv'
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Clouds;
