controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -100
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(mySprite4)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(false)
})
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite4: Sprite = null
let mySprite: Sprite = null
info.setScore(0)
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . 5 5 5 5 5 5 . . . . . . . 
    . . . 5 5 5 5 5 5 . . . . . . . 
    . . . 5 6 5 5 6 5 . . . . . . . 
    . . . 5 5 5 5 5 5 . . . . . . . 
    . . . 5 6 6 6 6 5 . . . . . . . 
    7 . 7 7 f 7 7 f 7 7 . . . . . . 
    5 7 7 7 f 7 7 f 7 7 . . . . . . 
    5 7 7 7 f 7 7 f 7 7 . . . . . . 
    5 7 7 7 f 7 7 f 7 7 7 7 . . . . 
    7 . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setStayInScreen(true)
mySprite.ay = 200
game.onUpdateInterval(2000, function () {
    mySprite4 = sprites.create(img`
        . . . . . . . . . . . 6 6 6 6 6 
        . . . . . . . . . 6 6 7 7 7 7 8 
        . . . . . . 8 8 8 7 7 8 8 6 8 8 
        . . e e e e c 6 6 8 8 . 8 7 8 . 
        . e 2 5 4 2 e c 8 . . . 6 7 8 . 
        e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
        e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
        e 2 e e 2 2 2 2 e e e e c 6 8 . 
        c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
        . c 2 e e e 2 e 2 4 2 2 2 2 c . 
        . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
        . . . e c c e c 2 2 2 2 2 2 2 e 
        . . . . . . . c 2 e e 2 2 e 2 c 
        . . . . . . . c e e e e e e 2 c 
        . . . . . . . . c e 2 2 2 2 c . 
        . . . . . . . . . c c c c c . . 
        `, SpriteKind.Food)
    mySprite2 = sprites.create(img`
        .....6fceeeeeeeeee6.....
        ....6776eeeeeeeee676....
        ...6777666eeee6666776...
        ..67768e67766777667776..
        ...668ee7768867788666...
        ......ee77eeee77ecee....
        ......ee6eeeeee6eef.....
        ......eeeeeeeeeeeef.....
        ......eeeeeeeeeeeef.....
        ......eeeeeeeeeeecf.....
        ......ceeeeeeeeeecf.....
        ......ceeeeeeeeeeff.....
        ......feeeeeeeeeefe.....
        .....6feeeeeeeeeef6.....
        ....6776eeeeeeeee676....
        ...6777666eeee6667776...
        ..6776ee67777777667776..
        ...668ee7768867788666...
        ......ee77eeee67eeee....
        ......ee6eeeeee6cef.....
        ......eeeeeeeeeeeef.....
        ......eeeeeeeeeeeef.....
        ......eeeeeeeeeeecf.....
        ......eeeeeeeeeeecf.....
        ......eeeeeeeeeeeff.....
        ......feeeeeeeeeefe.....
        .....6feeeeeeeeeef6.....
        ....6776eeeeeeeee676....
        ...6777666eeee6667776...
        ..6776ee67777777667776..
        ...668ee7768867788666...
        ......ee77eeee67ee......
        ......ee6eeeeee6ce......
        ......eefeeeeeeece......
        ......eeceeeeeeece......
        ......eeceeeeeeefe......
        ......eeceeeeeeefe......
        ......eeeeeeeeeefe......
        ......eeeeeeeeeece......
        .....6eeeeeeeeeece6.....
        ....6776eeeeeeeee676....
        ...6776666eeee6766776...
        ..6776ee77777777667776..
        ...668ce7768867788666...
        ......ce77eeee67ee......
        ......eeeeeeeeeeee......
        ......eeeeeee111ee......
        ......1ffffffffff1......
        ......1ffffffffff1......
        ......1ffffffffff1......
        ......1ffffffffff1......
        ......1ffffffffff1......
        ......1fffffffff111.....
        ......11fffffff11.......
        .......1fffff111........
        ........111111..........
        `, SpriteKind.Enemy)
    mySprite3 = sprites.create(img`
        .........11111..........
        ........11fff1..........
        .......11ffff111........
        ......11fffffff111......
        ......1ffffffffff1......
        ......1ffffffffff1......
        ......1ffffffffff1......
        ......eefeeeeeeece......
        ......eeceeeeeeece......
        ......eeceeeeeeefe......
        ......eeceeeeeeefe......
        ......eeeeeeeeeefe......
        ......eeeeeeeeeece......
        .....6eeeeeeeeeece6.....
        ....6776eeeeeeeee676....
        ...6776666eeee6766776...
        ..6776ee77777777667776..
        ...668ce7768867788666...
        ......ce77eeee67ee......
        ......eeeeeeeeeeee......
        ......eeeeeeeeeeee......
        ......eeeeeeeeeeee......
        ......eeeeeeeeeeee......
        ......eeeeeeeeeeee......
        ......eeeeeeeeeeee......
        ......eeeeeeeeeeee......
        ......eeeeeeeeeeee......
        ......eeeeeeeeeeee......
        ......eeeeeeeeeeee......
        ......eeeeeeeeeeee......
        ......eeeeeeeeeeee......
        ......eeeeeeeeeeee......
        `, SpriteKind.Enemy)
    mySprite2.setPosition(scene.screenWidth(), randint(0, 40))
    mySprite3.setPosition(scene.screenWidth(), randint(90, 120))
    mySprite2.vx = -50
    mySprite3.vx = -50
    mySprite2.setFlag(SpriteFlag.AutoDestroy, true)
    mySprite3.setFlag(SpriteFlag.AutoDestroy, true)
    mySprite4.setPosition(scene.screenWidth(), 60)
    mySprite4.vx += -50
})
