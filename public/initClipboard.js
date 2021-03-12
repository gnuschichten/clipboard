const items = document.querySelectorAll('pre');

for (const item of items) {

    const button = document.createElement("button");
    const content = item.innerText;
    console.log(content);

    button.innerHTML = "copy";
    button.classList.add("btn");
    button.setAttribute('data-clipboard-text', content);

    item.appendChild(button);

}

const buttons = document.querySelector('.btn');

buttons.addEventListener("click", function () {

    const btns = document.querySelectorAll('.btn');
    const clipboard = new ClipboardJS(btns);
    console.log(btns);

    clipboard.on('success', function (e) {
        console.log(e);
    });

    clipboard.on('error', function (e) {
        console.log(e);
    });

    console.log(clipboard);
});
