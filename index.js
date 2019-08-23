window.onload = function() {
    const mainContainerId = document.getElementById('main-container');
    const buttonRestart = document.getElementById('restart');

    const moveCircle = () => {
        let moveCircleId = 0;
        let count = 0;
        buttonRestart.disabled = true;
        moveCircleId = setInterval( () => {
            count += 1;
            mainContainerId.style.marginLeft = `${count}px`;
            if (count >= 300) {
                buttonRestart.disabled = false;
                clearInterval(moveCircleId);
            }
        }, 10);
    };

    moveCircle();

    buttonRestart.onclick = () => moveCircle();
};