javascript: (() => {
    const incPattern = /(INC)\d{7}(?!\d)|(TASK)\d{7}(?!\d)/gi;
    const pageTitle = document.title;
    const incNo = pageTitle.match(incPattern);
    if (!(incNo)) {
        console.log('Invalid page title')
    } else {
        let link = document.createElement('textarea');
        link.value = `<pre>[${incNo[0]}](https://example.com/${incNo[0]})</pre>`;
        navigator.clipboard.writeText(link.value)
    }
})()

javascript: (() => {const incPattern = /(INC)\d{7}(?!\d)|(TASK)\d{7}(?!\d)/gi;const pageTitle = document.title;const incNo = pageTitle.match(incPattern);if (!(incNo)) {console.log('Invalid page title')} else {let link = document.createElement('textarea');link.value = `<pre>[${incNo[0]}](https://example.com/${incNo[0]})</pre>`;navigator.clipboard.writeText(link.value)}})()


