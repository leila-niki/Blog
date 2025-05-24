export function convertDateToPersion(){
    const now = new Date();
    const formatter = new Intl.DateTimeFormat("fa-IR", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    const formatted = formatter.format(now);

    return formatted

}