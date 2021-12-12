let textInput = document.querySelector('.textarea-input');
let output = document.querySelector('.output-container');

textInput.addEventListener('click', () => output.textContent = 'Your ciphered emoji will appear here.');

let emojis = [
    "😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "🥲", "☺", "😊", "😇", "🙂", "🙃",
    "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "😚", "😋", "😛", "😝", "😜", "🤪", "🤨",
    "🧐", "🤓", "😎", "🥸", "🤩", "🥳", "😏", "😒", "😞", "😔", "😟", "😕", "🙁", "☹",
    "😣", "😖", "😫", "😩", "🥺", "😢", "😭", "😤", "😠", "😡", "🤬", "🤯", "😳", "🥵",
    "🥶", "😱", "😨", "😰", "😥", "😓", "🤗", "🤔", "🤭", "🤫", "🤥", "😶", "😐", "😑",
    "😬", "🙄", "😯", "😦", "😧", "😮", "😲", "🥱", "😴", "🤤", "😪", "😵", "🤐", "🥴",
    "🤢", "🤮", "🤧", "😷", "🤒", "🤕", "🤑", "🤠", "😈", "👿", "👹", "👺", "🤡", "💩",
    "👻", "💀", "☠", "👽", "👾", "🤖", "🎃", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿"
]

textInput.addEventListener('keyup', () => {
    let text = textInput.value;
    let cipheredText = text
        .split('')
        .map((_, index) => emojis[(index + 100) % emojis.length])
        .join('');
    output.textContent = cipheredText;
});