// var educationSec = document.getElementById('education');

// var coordinates = educationSec.getBoundingClientRect();

// console.log(coordinates);

// educationSec.addEventListener('click')

// var setScroll = setInterval(() => {
//     if(coordinates ==tage){
//     }
    
// }, 50);

var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
console.log(navMenuAnchorTags); 

for(var i =0 ;i<navMenuAnchorTags.length ; i++){
    navMenuAnchorTags[i].addEventListener('click', function(event){
        event.preventDefault();

        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetsection = document.getElementById(targetSectionID);
        console.log(targetsection);

        
        var interval =setInterval(() => {
            var coordinates = targetsection.getBoundingClientRect();
            if(coordinates.top <=0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);
        }, 20);
    });
}