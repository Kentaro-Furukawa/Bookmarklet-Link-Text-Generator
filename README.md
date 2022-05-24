# Bookmarklet: Link Text Generator


## Add the folling code to your bookmark bar.

You need to midify the URL( `example.com` ).

```
javascript: (() => {const incPattern = /(INC)\d{7}(?!\d)|(TASK)\d{7}(?!\d)/gi;const pageTitle = document.title;const incNo = pageTitle.match(incPattern);if (!(incNo)) {console.log('Invalid page title.')} else {const link = `[${incNo[0]}](https://example.com/${incNo[0]})`;navigator.clipboard.writeText(link)}})()
```

[How can I paste Markdown in Microsoft Teams?](https://stackoverflow.com/questions/55014770/how-can-i-paste-markdown-in-microsoft-teams)
