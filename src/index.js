setTimeout(addNot,1000);
function addNot() {
    let div = document.createElement('div');
    div.className = 'div';
    let main = document.querySelector('#main');
    main.appendChild(div);
    let p = document.createElement('p');
    let i = document.createElement('i');
    i.className = 'fas fa-exclamation-triangle';
    p.appendChild(i);
    p.appendChild(document.createTextNode('Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae obcaecati, tenetur, alias nemo delectus porro quo eaque possimus nesciunt cupiditate dicta illo iusto molestias in minus optio voluptate. Tenetur, cumque!'))
    div.appendChild(p);
    let btn = document.createElement('button');
    btn.className = 'btn-close';
    btn.textContent = 'x';
    div.appendChild(btn);
    btn.addEventListener('click',(e) => {
        main.removeChild(e.target.parentElement);
    });
}