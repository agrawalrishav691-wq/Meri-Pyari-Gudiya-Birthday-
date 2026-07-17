// Buttons & Sections
const nextBtn = document.getElementById("nextBtn");
const surprise = document.getElementById("surprise");

const giftBox = document.getElementById("giftBox");
const giftItems = document.getElementById("giftItems");

const continueBtn = document.getElementById("continueBtn");

const cakeSection = document.getElementById("cakeSection");
const lightBtn = document.getElementById("lightBtn");
const wishSection = document.getElementById("wishSection");
const blowBtn = document.getElementById("blowBtn");

const letterSection = document.getElementById("letterSection");

const envelope = document.getElementById("envelope");
const birthdayLetter = document.getElementById("birthdayLetter");

const finalSection = document.getElementById("finalSection");
const finalGift = document.getElementById("finalGift");
const finalMessage = document.getElementById("finalMessage");

const music = document.getElementById("music");

// Countdown
const countdown = document.getElementById("countdown");

if (countdown) {
    const target = new Date("December 21, 2026 00:00:00").getTime();

    setInterval(function () {

        const now = new Date().getTime();
        const gap = target - now;

        if (gap < 0) {
            countdown.innerHTML = "🎉 Happy Birthday! 🎉";
            return;
        }

        const days = Math.floor(gap / (1000 * 60 * 60 * 24));
        const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((gap % (1000 * 60)) / 1000);

        countdown.innerHTML =
            "⏳ " +
            days + " Days " +
            hours + " Hours " +
            minutes + " Minutes " +
            seconds + " Seconds";

    }, 1000);
}

// Open Surprise
nextBtn.onclick = async function () {

    surprise.style.display = "block";
    nextBtn.style.display = "none";

    if (music) {
        music.volume = 0.5;

        try {
            await music.play();
        } catch (err) {
            console.log("Music could not play:", err);
        }
    }

};

// Open Gift Box
giftBox.onclick = function () {

    giftBox.style.display = "none";
    giftItems.style.display = "block";

};

// Continue to Cake
continueBtn.onclick = function () {

    surprise.style.display = "none";

    cakeSection.style.display = "block";

    window.scrollTo({
        top: cakeSection.offsetTop,
        behavior: "smooth"
    });

};

// Light Candle
lightBtn.onclick = function () {

    wishSection.style.display = "block";

    lightBtn.innerHTML = "🕯️ Candle is Lit";

};

// Blow Candle
blowBtn.onclick = function () {

    createConfetti();

    cakeSection.style.display = "none";

    letterSection.style.display = "block";

    finalSection.style.display = "block";

    window.scrollTo({
        top: letterSection.offsetTop,
        behavior: "smooth"
    });

};

// Final Surprise
finalGift.onclick = function () {

    finalGift.style.display = "none";

    finalMessage.style.display = "block";

    setTimeout(function () {

        const ending = document.getElementById("ending");

        ending.style.display = "flex";

    }, 12000);

};

// Confetti
function createConfetti() {

    const container = document.getElementById("confetti");

    for (let i = 0; i < 120; i++) {

        const piece = document.createElement("div");

        piece.className = "confetti";

        piece.style.left = Math.random() * 100 + "%";

        piece.style.animationDelay = Math.random() * 2 + "s";

        piece.style.backgroundColor = [
            "#ff4f87",
            "#ffd700",
            "#87ceeb",
            "#98fb98",
            "#ff69b4",
            "#ffa500"
        ][Math.floor(Math.random() * 6)];

        container.appendChild(piece);

        setTimeout(function () {
            piece.remove();
        }, 5000);
    }
}
if (envelope && birthdayLetter) {

    envelope.onclick = function () {

        envelope.classList.add("open");

        setTimeout(function () {

            envelope.style.display = "none";
            birthdayLetter.style.display = "block";

        }, 600);

    };

}