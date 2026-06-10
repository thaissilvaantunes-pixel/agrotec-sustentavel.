
javascript// 1. Função de Simulação do Scanner de Doenças com Foco Ecológico
function simularDiagnostico() {
    const cultura = document.getElementById('cultura').value;
    const fotoInput = document.getElementById('foto-planta');
    const resultadoBox = document.getElementById('resultado');

    // Validação básica para garantir que o produtor colocou um arquivo
    if (fotoInput.files.length === 0) {
        alert("Por favor, selecione uma imagem ou tire uma foto da sua cultura antes de prosseguir.");
        return;
    }

    resultadoBox.classList.remove('hidden');
    resultadoBox.innerHTML = "<p>🔄 <strong>Processando imagem e cruzando dados agro-ambientais...</strong></p>";

    // Simula uma resposta do servidor após 1.2 segundos
    setTimeout(() => {
        if (cultura === 'soja') {
            resultadoBox.innerHTML = `
                <h3>🔍 Alerta: Ferrugem Asiática Detectada</h3>
                <p><strong>Causa provável:</strong> Períodos longos de molhamento foliar combinados com ventos que espalham os esporos.</p>
                <p style="margin-top: 8px; color: #2d6a4f; font-weight: bold;">🌱 Solução Sustentável Recomendada:</p>
                <p>Priorizar o manejo com fungicidas microbiológicos (à base de <em>Trichoderma</em>). Evitar aplicações químicas calendarizadas fora do período crítico para proteger os microrganismos regenerativos do solo.</p>
            `;
        } else if (cultura === 'milho') {
            resultadoBox.innerHTML = `
                <h3>🔍 Alerta: Presença de Lagarta-do-Cartucho</h3>
                <p><strong>Causa provável:</strong> Microclima favorável e ausência de inimigos naturais na área cultivada.</p>
                <p style="margin-top: 8px; color: #2d6a4f; font-weight: bold;">🌱 Solução Sustentável Recomendada:</p>
                <p>Realizar o controle biológico com pulverização de defensivos naturais à base de <em>Bacillus thuringiensis</em> (Bt) ou liberar vespas do gênero <em>Trichogramma</em>, reduzindo a carga química pesada na lavoura.</p>
            `;
        } else if (cultura === 'cafe') {
            resultadoBox.innerHTML = `
                <h3>🔍 Alerta: Incidência de Ferrugem do Cafeeiro</h3>
                <p><strong>Causa provável:</strong> Sombreamento excessivo associado à alta umidade e falta de espaçamento ideal.</p>
                <p style="margin-top: 8px; color: #2d6a4f; font-weight: bold;">🌱 Solução Sustentável Recomendada:</p>
                <p>Efetuar podas de arejamento nos ramos e aplicar caldas naturais cúpricas (como a Calda Bordalesa), que controlam o fungo sem agredir os lençóis freáticos.</p>
            `;
        }
    }, 1200);
}

// 2. Função de Efeito de Contadores Crescentes Automáticos
function animarContadores() {
    const alvos = {
        numero1: 1250, // Produtores Sustentáveis
        numero2: 8400, // Hectares Preservados
        numero3: 45    // Projetos Ambientais
    };

    const duracao = 2000; // Tempo total da animação em milissegundos
    const intervaloTempo = 30; // Atualização a cada 30ms

    // Loop pelos elementos configurados para rodar o cálculo matemático simultaneamente
    Object.keys(alvos).forEach(id => {
        const elemento = document.getElementById(id);
        if (!elemento) return;

        const valorAlvo = alvos[id];
        let valorAtual = 0;
        const incremento = Math.ceil(valorAlvo / (duracao / intervaloTempo));

        const timer = setInterval(() => {
            valorAtual += incremento;
            if (valorAtual >= valorAlvo) {
                elemento.innerText = valorAlvo.toLocaleString('pt-BR');
                clearInterval(timer);
            } else {
                elemento.innerText = valorAtual.toLocaleString('pt-BR');
            }
        }, intervaloTempo);
    });
}

// Executa a contagem e as funções assim que a página termina de carregar completamente
window.onload = function() {
    animarContadores();
};

// Mantém a função antiga "saibaMais" mapeada por segurança estrutural
function saibaMais() {
    window.location.hash = '#producao';
}
