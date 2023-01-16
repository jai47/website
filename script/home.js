let menu = document.getElementById('popup');
let yearList = document.getElementById('yearList');
let folder = document.getElementById('folder');

for (n=23;n>=0;n--){
    let j='';
    if(n>9){
        j=n.toString();
    }else{
        j="0"+n.toString();
    }

    let img = document.createElement("img");
    img.setAttribute("src",`source/years/${j}.webp`);
    img.setAttribute("alt",`20${j}`);
    img.setAttribute("onclick",`showList('20${j}')`);
    yearList.appendChild(img);
    let div = document.createElement("div");
    let i = document.createElement("i");
    let innerDiv = document.createElement("div");
    let h1 = document.createElement("h1");
    div.setAttribute("class","moreOptions");
    div.setAttribute("id",`20${j}`);
    i.setAttribute("class","bx bx-x");
    i.setAttribute("onclick",`showList('20${j}')`);
    innerDiv.setAttribute("class","container scrolling");
    h1.innerText=`20${j}`;
    innerDiv.appendChild(h1)
    div.appendChild(i);
    div.appendChild(innerDiv);
    folder.appendChild(div);    
}

function showOptions() {
    menu.classList.toggle('moreOptionsActive');
}

function showList(e){
    document.getElementById(e).classList.toggle('moreOptionsActive');
}
