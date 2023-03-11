function create(words) {
   const parent = document.getElementById('content');

   words.forEach(element => {
      const div = document.createElement('div');
      const paragraph = document.createElement('p');
      paragraph.textContent = element;
      paragraph.style.display = 'none';
      div.appendChild(paragraph);
      div.addEventListener('click', (event) => {
         event.target.querySelector('p').style.display = 'block';
      });
      parent.appendChild(div);
   });
}