function generateNumbers() {
    // 生成6个红球号码
    let redBalls = [];
    while (redBalls.length < 6) {
        let ball = Math.floor(Math.random() * 33) + 1;
        if (!redBalls.includes(ball)) {
            redBalls.push(ball);
        }
    }
    
    // 生成1个蓝球号码
    let blueBall = Math.floor(Math.random() * 16) + 1;

    // 显示红球号码
    const redBallDiv = document.getElementById('red-balls');
    redBallDiv.innerHTML = '';  // 清空之前的号码
    redBalls.sort((a, b) => a - b);  // 排序红球号码
    redBalls.forEach(ball => {
        const ballElement = document.createElement('div');
        ballElement.classList.add('ball');
        ballElement.textContent = ball;
        redBallDiv.appendChild(ballElement);
    });

    // 显示蓝球号码
    const blueBallDiv = document.getElementById('blue-ball');
    blueBallDiv.innerHTML = '';  // 清空之前的号码
    const blueBallElement = document.createElement('div');
    blueBallElement.classList.add('ball', 'blue');
    blueBallElement.textContent = blueBall;
    blueBallDiv.appendChild(blueBallElement);
}
