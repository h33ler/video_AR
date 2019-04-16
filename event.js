AFRAME.registerComponent('screenhandler', {

    init: function() {
        console.log("In Init for Screen Handler");
        var el = this.el;
        el.addEventListener('click', function(){
            // console.log("Click event heard.");
            el.setAttribute("material","src", "#video");
            var videoEl = document.querySelector('#video');
            el.setAttribute("visible", true);
            console.log("Playing Video");
            videoEl.play();
        });
}});
