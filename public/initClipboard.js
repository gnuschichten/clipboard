const items = document.querySelectorAll('pre');
const initButton = document.getElementsByTagName('code');

if (initButton) {
    for (const item of items) {

        const button = document.createElement("button");
        const content = item.innerText;
        const clipboard = new ClipboardJS(button);

        button.innerHTML = "copy";
        button.classList.add("btn");
        button.setAttribute('data-clipboard-text', content);

        item.appendChild(button);

    }
}
