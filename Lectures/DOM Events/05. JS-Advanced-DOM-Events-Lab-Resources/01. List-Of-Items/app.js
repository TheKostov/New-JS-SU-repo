function addItem() {
    // read input value
    const text = document.getElementById('newItemText').value;
    // create newLi
    const newLi = document.createElement('li');
    newLi.textContent = text; 
    // obtain reference to list element
    const list = document.getElementById('items');
    // add new <li> to list
    list.appendChild(newLi);
}