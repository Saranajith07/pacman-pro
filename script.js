const pacArray = []; // Array to hold all PacMen

function makePac() {
    // Create a new PacMan element
    let gameArea = document.getElementById('gameArea');
    let newPac = document.createElement('div');
    newPac.style.position = 'absolute';
    newPac.style.left = Math.random() * (gameArea.offsetWidth - 50) + 'px';
    newPac.style.top = Math.random() * (gameArea.offsetHeight - 50) + 'px';
    newPac.style.width = '50px';
    newPac.style.height = '50px';
    newPac.style.backgroundImage = "url('images/PacMan1.png')";
    newPac.style.backgroundSize = 'cover';
    gameArea.appendChild(newPac);
    
    let velocity = {x: Math.random() * 10, y: Math.random() * 10};
    pacArray.push({element: newPac, velocity: velocity});
}

function startGame() {
    setInterval(movePacMen, 20);
}

function movePacMen() {
    pacArray.forEach(pac => {
        let posX = parseInt(pac.element.style.left);
        let posY = parseInt(pac.element.style.top);
        pac.element.style.left = (posX + pac.velocity.x) + 'px';
        pac.element.style.top = (posY + pac.velocity.y) + 'px';
        checkCollisions(pac);
    });
}

function checkCollisions(pac) {
    let gameArea = document.getElementById('gameArea');
    let posX = parseInt(pac.element.style.left);
    let posY = parseInt(pac.element.style.top);

    if (posX + pac.element.offsetWidth >= gameArea.offsetWidth || posX <= 0) {
        pac.velocity.x = -pac.velocity.x;
    }
    if (posY + pac.element.offsetHeight >= gameArea.offsetHeight || posY <= 0) {
        pac.velocity.y = -pac.velocity.y;
    }
}
