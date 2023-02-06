let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreBtnTwo = document.getElementById("home-score-btn-2")
let homeScoreBtnThree = document.getElementById("home-score-btn-3")
let homeScoreEl = document.getElementById("home-score")
let homeScore = 0
let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0
let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
let guestScoreBtnTwo = document.getElementById("guest-score-btn-2")
let guestScoreBtnThree = document.getElementById("guest-score-btn-3")
let leaderEl = document.getElementById("leadercard-btn")
let newGameEl = document.getElementById("newcard-btn")
let leaderWing = document.getElementById("leadercard-btn")

homeScoreBtnOne.addEventListener ("click", function(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
})

homeScoreBtnTwo.addEventListener ("click", function(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
})

homeScoreBtnThree.addEventListener ("click", function(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
})

guestScoreBtnOne.addEventListener("click", function(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
})

guestScoreBtnTwo.addEventListener("click", function(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
})

guestScoreBtnThree.addEventListener("click", function(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
})

newGameEl.addEventListener("click", function (){ 
    homeScoreEl.textContent = 0
    homeScore = 0
    guestScoreEl.textContent = 0
    guestScore = 0
    leaderEl.textContent = "LEADER"
})

leaderWing.addEventListener("click", function leaderSpot(){
    if (homeScore > guestScore){
    //  foo.animate([{opacity:0},{opacity:1}],{duration:900,iterations:Infinity})
    //  chips.animate([{opacity:0},{opacity:0}],{duration:0,iterations:0})
     leaderEl.innerHTML = "LEADER: " + "HOME" 
    } else if (homeScore === guestScore) {
    //  foo.animate([{opacity:0},{opacity:0}],{duration:0,iterations:0})
    //  chips.animate([{opacity:0},{opacity:0}],{duration:0,iterations:0})
     leaderEl.innerHTML = "TIE"
    } else (
    // chips.animate([{opacity:0},{opacity:1}],{duration:900,iterations:Infinity}),
    // foo.animate([{opacity:0},{opacity:0}],{duration:0,iterations:0}),
    leaderEl.innerHTML = "LEADER: " + "GUEST")
})

