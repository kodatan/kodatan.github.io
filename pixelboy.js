const boy = document.querySelector('#boy');

let counter = 2;
let topmargin = 0;
let leftmargin = 0;

function animateUp() {
    counter += 1;
    if (counter % 2 === 0) {
    boy.style.backgroundImage = "url('pics/48/back-leftstep-48.png')";
    }
    else {
    boy.style.backgroundImage = "url('pics/48/back-rightstep-48.png')";
    }
}

function animateDown() {
    counter += 1;
    if (counter % 2 === 0) {
    boy.style.backgroundImage = "url('pics/48/front-leftstep-48.png')";
    }
    else {
    boy.style.backgroundImage = "url('pics/48/front-rightstep-48.png')";
    }
}

function animateLeft() {
    counter += 1;
    if (counter % 2 === 0) {
    boy.style.backgroundImage = "url('pics/48/left-leftstep-48.png')";
    }
    else {
    boy.style.backgroundImage = "url('pics/48/left-rightstep-48.png')";
    }
}

function animateRight() {
    counter += 1;
    if (counter % 2 === 0) {
    boy.style.backgroundImage = "url('pics/48/right-leftstep-48.png')";
    }
    else {
    boy.style.backgroundImage = "url('pics/48/right-rightstep-48.png')";
    }
}

window.addEventListener('keydown', function (e) {
    switch (e.code) {
        case 'KeyS':
            // console.log("Down!");
            topmargin += 15;
            boy.style.marginTop = `${topmargin}px`;
            animateDown();
            break;
        case 'KeyW':
            // console.log("Up!");
            topmargin -= 15;
            boy.style.marginTop = `${topmargin}px`;
            animateUp();
            break;
        case 'KeyA':
            // console.log("Left!");
            leftmargin -= 20;
            boy.style.marginLeft = `${leftmargin}px`;
            animateLeft();
            break;
        case 'KeyD':
            // console.log("Right!");
            leftmargin += 20;
            boy.style.marginLeft = `${leftmargin}px`;
            animateRight();
            break;
        }
        // case 'Space':

    })

    window.addEventListener('keyup', function (e) {
        switch (e.code) {
            case 'KeyS':
                boy.style.backgroundImage = "url('pics/48/front-static-48.png')";
                break;
            case 'KeyW':
                boy.style.backgroundImage = "url('pics/48/back-static-48.png')";
                break;
            case 'KeyA':
                boy.style.backgroundImage = "url('pics/48/left-static-48.png')";
                break;
            case 'KeyD':
                boy.style.backgroundImage = "url('pics/48/right-static-48.png')";
                break;
            }
        })