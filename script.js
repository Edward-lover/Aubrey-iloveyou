const yesButton =
    document.getElementById("yesButton");

const noButton =
    document.getElementById("noButton");

const message =
    document.getElementById("message");

const letter =
    document.getElementById("letter");

const closeButton =
    document.getElementById("closeButton");


/*
    YES BUTTON
*/

yesButton.addEventListener("click", function () {

    letter.classList.add("show");

    createHeartExplosion();

});


/*
    CLOSE LETTER
*/

closeButton.addEventListener("click", function () {

    letter.classList.remove("show");

});


/*
    Click outside the letter
*/

letter.addEventListener("click", function (event) {

    if (event.target === letter) {

        letter.classList.remove("show");

    }

});


/*
    Messages when NO escapes
*/

const messages = [
    "Are you sure? 👀",
    "Hehehe, nice try! 😂",
    "You can't catch me! 🏃",
    "Try YES instead 💕",
    "Nope nope nope! 😭",
    "The button is running away!",
    "Why are you chasing me?! 😂",
    "YES is looking pretty nice... 👀"
];


/*
    Move the NO button
*/

function moveNoButton() {

    const width =
        noButton.offsetWidth;

    const height =
        noButton.offsetHeight;

    const padding = 15;

    const maxX =
        window.innerWidth -
        width -
        padding;

    const maxY =
        window.innerHeight -
        height -
        padding;

    const x =
        Math.random() *
        Math.max(maxX, padding);

    const y =
        Math.random() *
        Math.max(maxY, padding);


    noButton.style.position = "fixed";

    noButton.style.left = `${x}px`;

    noButton.style.top = `${y}px`;

    noButton.style.zIndex = "200";


    const randomMessage =
        messages[
            Math.floor(
                Math.random() *
                messages.length
            )
        ];

    message.textContent =
        randomMessage;
}


/*
    PC

    If the mouse gets close,
    the button escapes.
*/

document.addEventListener(
    "mousemove",
    function (event) {

        if (window.innerWidth <= 600) {
            return;
        }

        const rect =
            noButton.getBoundingClientRect();

        const centerX =
            rect.left +
            rect.width / 2;

        const centerY =
            rect.top +
            rect.height / 2;

        const distanceX =
            event.clientX -
            centerX;

        const distanceY =
            event.clientY -
            centerY;

        const distance =
            Math.sqrt(
                distanceX * distanceX +
                distanceY * distanceY
            );


        if (distance < 100) {

            moveNoButton();

        }

    }
);


/*
    PHONE

    Touching NO makes it escape.
*/

noButton.addEventListener(
    "touchstart",
    function (event) {

        event.preventDefault();

        moveNoButton();

    }
);


/*
    Backup for clicking NO
*/

noButton.addEventListener(
    "click",
    function (event) {

        event.preventDefault();

        moveNoButton();

    }
);


/*
    Heart explosion when YES is pressed
*/

function createHeartExplosion() {

    const hearts = [
        "💗",
        "💖",
        "💕",
        "💞",
        "💘",
        "🌸"
    ];

    for (
        let i = 0;
        i < 25;
        i++
    ) {

        const heart =
            document.createElement("div");

        heart.textContent =
            hearts[
                Math.floor(
                    Math.random() *
                    hearts.length
                )
            ];

        heart.style.position =
            "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.top =
            "100vh";

        heart.style.fontSize =
            15 +
            Math.random() * 25 +
            "px";

        heart.style.zIndex =
            "300";

        heart.style.pointerEvents =
            "none";

        heart.style.transition =
            "transform 3s ease, opacity 3s ease";

        document.body.appendChild(
            heart
        );


        setTimeout(function () {

            heart.style.transform =
                `translateY(-${window.innerHeight + 200}px) rotate(${Math.random() * 360}deg)`;

            heart.style.opacity =
                "0";

        }, 50);


        setTimeout(function () {

            heart.remove();

        }, 3100);

    }

}
