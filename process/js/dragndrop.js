 $.curCSS = function(element, prop, val) {
     return $(element).css(prop, val);
     console.log(prop, val);
 };
 $('#draggable').draggable({
     containment: $('body'),

     drag: function() {
         var offset = $(this).offset();
         var xPos = offset.left;
         var yPos = offset.top;

         console.log('x: ' + xPos + 'y: ' + yPos)

         // $('#posX').text('x: ' + xPos);
         // $('#posY').text('y: ' + yPos);
     },
     stop: function() {
         var finalOffset = $(this).offset();
         var finalxPos = finalOffset.left;
         var finalyPos = finalOffset.top;


         console.log(' x final :' + finalxPos + 'y final ' + finalyPos);
         $('#draggable2').css({
             'top': finalyPos + 20,
             'left': finalxPos + 20
         });
     }
 });



 $('.dragTo').droppable({
     drop: eventDrop
 })

 function eventDrop(event, ui) {
     var draggable = ui.draggable;
     var xParse = parseFloat(draggable.stop)
     document.getElementById('draggable').classList.add('bye');
     document.getElementsByClassName('dragTo')[0].classList.add('bye');
     document.getElementById('bad').classList.add('hidden');
     document.getElementById('good').classList.remove('hidden');
     window.setTimeout(function() {

         document.getElementsByClassName('dragTo')[0].classList.add('hi');
     }, 1000);
 }