let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreEl = document.getElementById("home-score")
let homeScore = 0
let homeScoreBtnTwo = document.getElementById("home-score-btn-2")
let homeScoreEl2 = document.getElementById("home-score")
let homeScoreBtnThree = document.getElementById("home-score-btn-1")
let homeScoreEl3 = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0
let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
let guestScoreBtnTwo = document.getElementById("guest-score-btn-2")
let guestScoreBtnThree = document.getElementById("guest-score-btn-3")
let leaderEl = document.getElementById("leadercard-btn" )

function increaseHomeScoreOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function increaseHomeScoreTwo() {
    homeScore += 2
    homeScoreEl2.textContent = homeScore
}

function increaseHomeScoreThree() {
    homeScore += 3
    homeScoreEl3.textContent = homeScore
}

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

function newGame(){
    homeScoreEl.textContent = 0
    homeScore = 0
    guestScoreEl.textContent = 0
    guestScore = 0
    leaderEl.textContent = "LEADER"
}

function leaderSpot(){
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
}

