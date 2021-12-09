for (let index = 0; index <= 4; index++) {
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showNumber(3 - index)
}
music.playTone(369, music.beat(BeatFraction.Whole))
basic.showString("go")
basic.forever(function () {
	
})
