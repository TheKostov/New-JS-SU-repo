function deleteByEmail() {
    // read input value
    const query = document.querySelector('input[name="email"]').value;
    // get all rows
    const rows = document.querySelectorAll('#customers tbody tr');
    const rowsArray = Array.from(rows);
    // iterate rows and compare content to input
    for (let row of rowsArray){
        const col = row.children()[1];
        
        if (col.textContent == query){
            // remove matching row
            row.remove();
        }
    }
}