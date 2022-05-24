javascript: (() => {
    const incPattern = /(INC)\d{7}(?!\d)|(TASK)\d{7}(?!\d)/gi;
    const pageTitle = document.title;
    const incNo = pageTitle.match(incPattern);
    if (incNo) {
        const link = `[${incNo[0]}](https://example.com/${incNo[0]})`;
        (async () => {
            try {
                await navigator.clipboard.writeText(link)
            } catch (error) {
                console.log(`Error 😗 : ${error}`)
            }
        })()
    }
})()


javascript: (() => {const incPattern = /(INC)\d{7}(?!\d)|(TASK)\d{7}(?!\d)/gi;const pageTitle = document.title;const incNo = pageTitle.match(incPattern);if (incNo) {const link = `[${incNo[0]}](https://example.com/${incNo[0]})`;(async () => {try {await navigator.clipboard.writeText(link)} catch (error) {console.log(`Error 😗 : ${error}`)}})()}})()

