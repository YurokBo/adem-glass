export function scrollTo(e) {
    if (!e.target) {
        return
    }

    document.getElementById("quiz").scrollIntoView({
        block: "start",
        behavior: "smooth",
    });
}