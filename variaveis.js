<!DOCTYPE html>
<html lang="pt-br">
<head><meta charset="UT-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
<meta name="viewport" content="width=device-width, inicial-scale=1.0">
<title>Simulação de Site</title>

</head>
<body>

    <h2>Simulação de Site</h2>
    <p>Responda às perguntas abaixo:</p>
    <form id="formulario">
        <label for="nome">Qual o seu nome?</label>
        <input type="text" id="nome" required><br></br>

        <label for="idade"> Qual a sua idade?</label>
        <input type="number" id="idade" required><br></br>

        <label for="cidade">Ondevocê mora?</label>
        <input type="text" id="cidade" required><br></br>
        
        <label for="Linguagem" > Qual a linguagem de programação você está aprendendo?</label>
        <input type="text" id="linguagem" required><br><br>

        <button type="button" onclick="coletarResposta()"> Enviar</button>

    </form>

    <h3>Respostas:</h3>
    <p id="resultado"></p>

    <script>

        function coletarRespostas() {
            let nome = document.getElementById("nome").value;
            let idade = document.getElementById("idade").value;
            let cidade = document.getElementById("cidade").value;
            let liguagem = document.getElementById("liguagem").value;

            if (nome && idade && cidade) {
                document.getElementById("resultado").innerHTML = 
                let mensagem = `Olá, ${nome}! Você tem $ {idade} anos e mora em $ {cidade}.`;
                mensagem += `<br>Você está aprendendo $ {linguagem}.`;
                document.getElementById("resultado").innerHTML = mensagem;

                setTimeout(() => {

                    let resposta = prompt(`Você gosta de estudar ${linguagem}?\nResponda com o número 1 para Sim ou  para Não.`);
                    if (resposta === "1") {
                        document.getElementById.ById("perguntaExtra").innerHTML= "Muito bom!  Continue estudando e você terá muito sucesso.";
                } else if (resposta === "2"){
                    document.getElementById("perguntaExtra").innerHTML = "Ahh, que pena ... já tentou aprender outras linguagens?";"
                } else {
                 } document.getElementById("perguntaExtra").innerHTML = "Resposta inválida. Por favor, recarregue a página e tente novamente.";
                } , 500);
            } else {
                alert ("Por favor, preencha toda todas as respostas.");
            }
        
    </script>
</body>
</html>
