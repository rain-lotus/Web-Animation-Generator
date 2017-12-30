var controlsProgressEl = document.querySelector('#TLcontrols .progress');

var TLcontrols = anime.timeline({
    direction: 'alternate',
    loop: true,
    easing: 'linear',
    update: function(anim) {
        controlsProgressEl.value = anim.progress;
    }
});

TLcontrols
    .add({
        targets: '#TLcontrols .square.el',
        translateX: [ { value: 80 }, { value: 160 }, { value: 250 } ],
        translateY: [ { value: 30 }, { value: 60 }, { value: 60 } ],
        duration: 3000,
        offset: 0
    })
    .add({
        targets: '#TLcontrols .circle.el',
        translateX: [ { value: 80 }, { value: 160 }, { value: 250 } ],
        translateY: [ { value: 30 }, { value: -30 }, { value: -30 } ],
        duration: 3000,
        offset: 0
    })
    .add({
        targets: '#TLcontrols .triangle.el',
        translateX: [ { value: 80 }, { value: 250 } ],
        translateY: [ { value: -60 }, { value: -30 }, { value: -30 } ],
        duration: 3000,
        offset: 0
    });

document.querySelector('#TLcontrols .play').onclick = TLcontrols.play;
document.querySelector('#TLcontrols .pause').onclick = TLcontrols.pause;
document.querySelector('#TLcontrols .restart').onclick = TLcontrols.restart;

controlsProgressEl.addEventListener('input', function() {
    TLcontrols.seek(TLcontrols.duration * (controlsProgressEl.value / 100));
});

['input','change'].forEach(function(evt) {
    controlsProgressEl.addEventListener(evt, function() {
        TLcontrols.seek(TLcontrols.duration * (controlsProgressEl.value / 100));
    });
});
