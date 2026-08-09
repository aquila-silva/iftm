let r, g, b = 0;
alert("Digite um valor de 0 a 255 para cada espectro de cor\nR (Red)\nG(Green)\nB (Blue).")

r = parseInt(prompt("Para Red:"));
g = parseInt(prompt("Para Green:"));
b = parseInt(prompt("Para Blue:"));

document.write(`<p style="color: rgb(${r}, ${g}, ${b}); text-align: center;">Fundamentos de Web Design II</p>`)
