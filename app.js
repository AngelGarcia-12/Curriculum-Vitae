// Navbar
let menu_visible = false;
let menu = document.getElementById("nav");
const mostrarOcultarMenu = () => {
    if(menu_visible === false){
        menu.style.display = "block";
        menu_visible = true;
    }
    else {
        menu.style.display = "none";
        menu_visible = false;
    }
}
// Ocultar menu una vez se selecciona
let links = document.querySelectorAll("nav a");
for (let x = 0; x < links.length; x++) {
    links[x].onclick = () => {
        menu.style.display = "none";
        menu_visible = false;
    }
}
// Crear barras de porcentaje
const limit = 16;
const createBar = (id_bar) => {
    for (let i = 0; i < limit; i++) {
        let div = document.createElement('div');
        div.className = 'e';
        id_bar.appendChild(div);
    }
}
// Crear las barras en base al id del lenguaje
// Python
let python = document.getElementById('python');
createBar(python);
// C/C++
let c = document.getElementById('c-c++');
createBar(c);
// Java
let java = document.getElementById('java');
createBar(java);
// JavaScript
let javascript = document.getElementById('javascript');
createBar(javascript);
// SQL
let sql = document.getElementById('sql');
createBar(sql);
// C#
let cSharp = document.getElementById('csharp');
createBar(cSharp);
// HTML
let html = document.getElementById('html');
createBar(html);
// ABAP
let abap = document.getElementById('abap');
createBar(abap);
// React
let react = document.getElementById('react');
createBar(react);
// Django
let django = document.getElementById('django');
createBar(django);
// Ensglish
let english = document.getElementById('english');
createBar(english);
// Spanish
let spanish = document.getElementById('spanish');
createBar(spanish);
// Japanese
let japanese = document.getElementById('japanese');
createBar(japanese);

// Colorear la barra en base al porcentaje
let counts = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
let flag = false;
// Funcion que aplicara el coloreado
const paintSkills = () => {
    let skills = document.getElementById('skills');
    let dis_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(dis_skills >= 300 && flag === false){
        flag = true;
        const intervalPython = setInterval(() => {
            paintBar(python, Math.round(limit*0.7), 0, intervalPython);
        }, 100);
        const intervalC = setInterval(() => {
            paintBar(c, Math.round(limit*0.5), 1, intervalC);
        }, 100);
        const intervalJava = setInterval(() => {
            paintBar(java, Math.round(limit*0.4), 2, intervalJava);
        }, 100);
        const intervalJavaScript = setInterval(() => {
            paintBar(javascript, limit/2, 3, intervalJavaScript);
        }, 100);
        const intervalSql = setInterval(() => {
            paintBar(sql, limit/2, 4, intervalSql);
        }, 100);
        const intervalCSharp = setInterval(() => {
            paintBar(cSharp, Math.round(limit*0.25), 5, intervalCSharp);
        }, 100);
        const intervalHtml = setInterval(() => {
            paintBar(html, Math.round(limit*0.45), 6, intervalHtml);
        }, 100);
        const intervalAbap = setInterval(() => {
            paintBar(abap, Math.round(limit*0.2), 7, intervalAbap);
        }, 100);
        const intervalReact = setInterval(() => {
            paintBar(react, Math.round(limit*0.75), 8, intervalReact);
        }, 100);
        const intervalDjango = setInterval(() => {
            paintBar(django, limit/2, 9, intervalDjango);
        }, 100);
        const intervalEnglish = setInterval(() => {
            paintBar(english, Math.round(limit*0.65), 10, intervalEnglish);
        }, 100);
        const intervalSpanish = setInterval(() => {
            paintBar(spanish, Math.round(limit*1), 11, intervalSpanish);
        }, 100);
        const intervalJapanese = setInterval(() => {
            paintBar(japanese, Math.round(limit*0.25), 12, intervalJapanese);
        }, 100);
    }
}

// LLenar la barra
const paintBar = (id_bar, cantidad, index, interval) => {
    counts[index]++;
    x = counts[index];
    if(x < cantidad){
        let elements = id_bar.getElementsByClassName('e');
        elements[x].style.backgroundColor = "#0FE030";
    }
    else{
        clearInterval(interval);
    }
}

// Detectar scrolling en mouse para aplicar animacion
window.onscroll = () => {
    paintSkills();
}