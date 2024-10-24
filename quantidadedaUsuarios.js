import { getCSS } from "./common.js"


{
    Facebook: 3049;
    Youtube: 2491;
    WhatsApp: 2000;
    Instagram: 2000;
    Tiktok: 1562;
    WeChat:1336;
    }
    async function quantidadeUsuarios() {
        const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
        const res = await fetch(url)
        const dados = await res.json()
        const nomeDasRedes = Object.keys(dados)
        const quantidadeUsuarios = Object.values(dados)
        console.log(dados)
        const data = [
            {
            
            x: nomeDasRedes,
            y: quantidadeUsuarios,
            type: "bar",
            marker: {
                color: getCSS("--primary-color")
                }
            }
            ]
            const grafico = document.createElement("div")
            grafico.className = "grafico"
            
            document.getElementById("graficos-container").appendChild(grafico)
            Plotly.newPlot(grafico, data,layout)

            const layout = {

                plot_bgcolor: getCSS("--bg-color"),
                paper_bgcolor: getCSS("--bg-color"),
                title: {
                    text: 'Redes sociais com mais usuários no mundo'
                    }
                }
            
        }
        const data = [

            {
            x: nomeDasRedes,
            y: quantidadeUsuarios,
            type: "bar",
            marker: {
            color: getComputedStyle(document.body).
            
            getPropertyValue("--primary-color")
            
            }
            }
            ]
       
       
            quantidadeUsuarios()













