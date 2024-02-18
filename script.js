let elementoh1 = document.querySelector("h1");
let elementoul = document.querySelector("ul");
let elementoa = document.querySelector("a");
let elementool = document.querySelector("ol");

elementoh1.innerText = `Titulo do exercicio`;
elementoa.innerText = `Site Proz`;

elementoul.innerHTML = `
<li>Primeiro</li>
<li>Segundo</li>
<li>Terceiro</li>`

elementool.innerHTML = `
<li><a href="http://www.google.com/">Google</a></li>
<li><a href="http://www.w3school.com/">W3-School</a></li>
<li><a href="http://www.g1.globo.com/">Globo</a></li>
`