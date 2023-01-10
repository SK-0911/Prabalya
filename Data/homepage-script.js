var prevScrollpos = window.pageYOffset
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos >= currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-150px";
    }
    prevScrollpos = currentScrollPos;
}

var events_scroll = 0;
function prev_slide(){
    events_scroll = Math.max(events_scroll-20, 0);
    document.getElementById("EventDetailsContainer").style.transform = "translateX(" + -events_scroll + "%)";
    console.log("preivious", "translateX(" + -events_scroll + "%)")

}

function next_slide(){
    events_scroll = (events_scroll+20)%100;
    document.getElementById("EventDetailsContainer").style.transform = "translateX(" + -events_scroll + "%)";
    console.log("preivious", "translateX(" + -events_scroll + "%)")
}