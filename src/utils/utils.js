export function scrollToQuiz(e) {
    if (!e.target) {
        return
    }

    document.getElementById("quiz").scrollIntoView({
        block: "start",
        behavior: "smooth",
    });
}

export function scrollToCatalog(e) {
    if (!e.target) {
        return
    }

    document.getElementById("catalog").scrollIntoView({
        block: "start",
        behavior: "smooth",
    });
}