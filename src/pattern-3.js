javascript: (() => {
    const incPattern = /(INC)\d{7}(?!\d)|(TASK)\d{7}(?!\d)/gi;
    const pageTitle = document.title;
    const incNo = pageTitle.match(incPattern);
    if (!(incNo)) {
        console.log('Invalid page title')
    } else {
        const link = `[${incNo[0]}](https://example.com/${incNo[0]})`;
        const type = 'text/markdown';
        const blob = new Blob([link], { type });
        const data = [new ClipboardItem({ [type]: blob })];
        navigator.clipboard.write(data).then(console.log('done!'))
    }
})()



