function extractText() {
    const list = document.querySelectorAll('li');
    const listArr = Array.from(list);
    const textArr = [];
    listArr.forEach(element => {
        textArr.push(element.textContent);
    });
    const result = document.getElementById('result');
    result.value = textArr.join('\n');
}