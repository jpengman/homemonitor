document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function getTouches(evt) {
    return evt.touches ||             // browser API
        evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};

function handleTouchMove(evt) {
    if (!xDown || !yDown || yDown > 55) {
        return;
    }
    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;
    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        console.log("xDiff:" + xDiff + "yDown:" + yDown + "yUp:" + yUp);
        if (xDiff > 0) {
            nextView();
        } else {
            previousView();
        }
    } else {
        if (yDiff > 0) {
            /* up swipe */
        } else {
            /* down swipe */
        }
    }
    xDown = null;
    yDown = null;
};
function nextView() {
    var foundMatch = false;
    if (location.hash == HASH_START) {
        location.hash = menuTree[0][1][0][0];
    }
    else {
        var next = HASH_START;
        menuTree.forEach(menuGroup => {
            menuGroup[1].forEach(menuItem => {
                if (foundMatch) {
                    next = menuItem[0];
                    foundMatch = false;
                }
                if (location.hash == menuItem[0]) {
                    foundMatch = true;
                }
            });
        });
        if (foundMatch) {
            location.hash = next;
        } else {
            location.hash = menuTree[0][1][0][0];
        }
    }
}
function previousView() {
    if (location.hash == HASH_START) {
        var lastMenuGroup = menuTree[menuTree.length - 1];
        var menuList = lastMenuGroup[1];
        location.hash = menuList[menuList.length - 1][0];
    }
    else {
        var previous = HASH_START;
        menuTree.forEach(menuGroup => {
            menuGroup[1].forEach(menuItem => {
                if (location.hash == menuItem[0]) {
                    location.hash = previous;
                }
                previous = menuItem[0];
            });
        });
    }
}