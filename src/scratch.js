function setClipboard(text) {
    var type = "text/plain";
    var blob = new Blob([text], { type });
    var data = [new ClipboardItem({ [type]: blob })];

    navigator.clipboard.write(data).then(
        function () {
        /* success */
        console.log('success')
        },
        function () {
        /* failure */
        console.log('failed')
        }
    );
}

setClipboard('[hee](https://example.com)')