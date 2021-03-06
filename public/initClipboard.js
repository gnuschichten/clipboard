const items = document.querySelectorAll('pre');
const initButton = document.getElementsByTagName('code');

if (initButton) {
    for (const item of items) {

        const button = document.createElement("button");
        const content = item.innerText;

        button.innerHTML = "copy";
        button.classList.add("btn");
        button.setAttribute('data-clipboard-text', content);

        item.appendChild(button);

    }

    const buttons = document.querySelector('.btn');

    if (buttons) {

        buttons.addEventListener("click", function () {

            const btns = document.querySelectorAll('.btn');
            const clipboard = new ClipboardJS(btns);

        });
    }
}
