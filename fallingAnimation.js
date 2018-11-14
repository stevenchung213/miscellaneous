var fallingAnimation = function(className, numFallingItems, ...imgURLstring) {

    var imgArray = imgURLstring.slice();
    var arrayIndex = 0;

      for (var i = 0; i < numFallingItems; i++) {

        arrayIndex = arrayIndex === imgArray.length ? 0 : arrayIndex;

        var browserWidth = $(window).width();
        var randomSpawnLocation = Math.floor(browserWidth*Math.random());

        var randomTimeDelay = Math.random() * 20;
        var randomFallSpeed = (Math.random()*20)+10;
     

        var imgSpan = $(`<span class=${className}>`).css({
                                                          left : randomSpawnLocation,
                                                          top: '-150px',
                                                          "-webkit-animation-delay" : randomTimeDelay + 's',
                                                          "-webkit-animation-duration" : randomFallSpeed + 's'
        });

        $(imgSpan).prepend(`<img src=${imgArray[arrayIndex]} alt='falling image'>`);

        $('body').append(imgSpan);
      
        arrayIndex++;
        
      };
};