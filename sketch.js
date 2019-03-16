

const width = 600;
const height = 600;
const enemy_frequency = 0.02;

function setup () {
    player = new Player()
    asteroids =[]
    bullets =[]
    explosions =[]

    createCanvas(width, height);
    frameRate(15);
    stroke(255);
    strokeWeight(10);
    console.log("Asteroids!")
}
    
function draw() {
    background(0);
    if (random(1) < enemy_frequency) {
        asteroids.push(new Asteroid())
    }

    player.update();
    
    asteroids.forEach(asteroid => {
        asteroid.update();
    })

    bullets.forEach(bullet => {
        bullet.update();
    })

    explosions.forEach(explosion => {
        explosion.update();
    })
    background(255);

}
function keyPressed() {
    switch (keyCode) {
        case 74:
            if (direction !== 'right') {
                direction = 'left';
            }
            break;
        case 76:
            if (direction !== 'left') {
                direction = 'right';
            }
            break;
        case 73:
            if (direction !== 'down') {
                direction = 'up';
            }
            break;
        case 75:
            if (direction !== 'up') {
                direction = 'down';
            }
            break;
    }
}

    // def update
    // @player.turn_left if button_down ? (Gosu:: KB_A)
    //         @player.turn_right if button_down ? (Gosu:: KB_D)
    //         @player.accelerate if button_down ? (Gosu:: KB_W)
    //         @player.move
    // if rand < ENEMY_FREQUENCY
    //             @asteroids.push Asteroid.new(self)
    // end
    // @asteroids.each do | asteroid |
    //     asteroid.move
    //         end 
    //         @bullets.each do | bullet |
    //     bullet.move 
    //         end 
    //         @asteroids.dup.each do | asteroid |
    //             @bullets.dup.each do | bullet |
    //     distance = Gosu.distance(asteroid.x, asteroid.y, bullet.x, bullet.y)
    //                 if distance < asteroid.radius + bullet.radius
    //                     @asteroids.delete asteroid
    // @bullets.delete bullet
    // @explosions.push Explosion.new(self, asteroid.x, asteroid.y)
    // end
    // end
    // end
    // @explosions.dup.each do | explosion |
    //             @explosions.delete explosion if explosion.finished
    //         end
    // @asteroids.dup.each do | asteroid |
    //             if asteroid.y > HEIGHT + asteroid.radius
    //                 @asteroids.delete asteroid
    // end
    // end
    // @bullets.dup.each do | bullet |
    //             @bullets.delete bullet unless bullet.onscreen ?
    //     end 
    //     end

    // def draw

    // end
    // end
    // end

