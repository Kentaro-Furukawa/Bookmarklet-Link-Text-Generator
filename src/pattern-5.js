javascript: (() => {
    const incPattern = /(INC)\d{7}(?!\d)|(TASK)\d{7}(?!\d)/gi;
    const pageTitle = document.title;
    const incNo = pageTitle.match(incPattern);
    if (!(incNo)) {
        console.log('Invalid page title')
    } else {
        let plain = `[${incNo[0]}](https://example.com/${incNo[0]})`;
        plain = plain.replace(/\n/g, "\\par\n");
        const rtf = "{\\rtf1\\ansi\\ansicpg1252\\deff0\\deflang2057{\\fonttbl{\\f0\\fnil\\fcharset0 Microsoft Sans Serif;}}\n\\viewkind4\\uc1\\pard\\f0\\fs17 " + plain + "\\par\n}";
        navigator.clipboard.writeText(rtf)
    }
})()

javascript: (() => {const incPattern = /(INC)\d{7}(?!\d)|(TASK)\d{7}(?!\d)/gi;const pageTitle = document.title;const incNo = pageTitle.match(incPattern);if (!(incNo)) {console.log('Invalid page title')} else {let plain = `[${incNo[0]}](https://example.com/${incNo[0]})`;plain = plain.replace(/\n/g, "\\par\n");const rtf = "{\\rtf1\\ansi\\ansicpg1252\\deff0\\deflang2057{\\fonttbl{\\f0\\fnil\\fcharset0 Microsoft Sans Serif;}}\n\\viewkind4\\uc1\\pard\\f0\\fs17 " + plain + "\\par\n}";navigator.clipboard.writeText(rtf)}})()
