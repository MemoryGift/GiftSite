const button = document.getElementById("button");
const msg = document.getElementById("msg");
const dataInicio = new Date("2021-11-13T13:30:00");
const linha = document.getElementById("linha");
const txt = document.getElementById("txt");
const video = document.getElementById("video");
const centro = document.getElementById("centro");
const coracao = document.getElementById("coração")

function attHora(){
const agora = new Date();
var dif = agora - dataInicio;
const segtot = Math.floor(dif / 1000);
const anos = Math.floor(segtot / (365.25 * 24 * 3600));
const restoano = segtot % Math.floor(365.25 * 24 * 3600);

const meses = Math.floor(restoano / (30 * 24 * 3600));
const restomes = restoano % (30 * 24 * 3600);

const dias = Math.floor(restomes / (24 * 3600));
const restodia = restomes % (24 * 3600);

const horas = Math.floor(restodia / 3600);
const restohora = restodia % 3600;

const minutos = Math.floor(restohora / 60);
const seg = restohora % 60;


const data = `${anos} anos, ${meses} meses, ${dias} dias, ${horas} horas, ${minutos} minutos e ${seg} segundos`;

return data;
}

let intervalo = null;
function msghora(){
    return msg.innerHTML = "<b>❤️Eu te amo há: </b><br><br>" + attHora();
}

document.getElementById("button").addEventListener("click", () => {
    document.getElementById("msg").textContent = attHora();
    button.style.display = "none";
    msg.innerHTML = msghora();
    msg.style.display = "block";
    txt.style.display = "block";
    linha.style.display = "block";
    video.style.display = "block";

    centro.style.height = "auto";


    if(intervalo === null){intervalo = setInterval(()=>{
        msg.innerHTML = msghora();
    }, 1000)}
    });

    function criarcoracao(){
        const coracao = document.createElement("span");
        coracao.innerHTML = "❤️";
        coracao.classList.add("coracao");
        coracao.style.left = Math.random() * 100 + "vw"; 
        coracao.style.top = Math.random() * 100 + "vh";
        
        const size = Math.random() * 20 + 10;
        coracao.style.fontSize = size + "px";

        coracao.style.animationDuration = Math.random() * 5 + 3 + "s";

        document.getElementById("coração").appendChild(coracao);

        setTimeout(() => {
            coracao.remove();
        }, 8000);
    }
    setInterval(criarcoracao, 300)