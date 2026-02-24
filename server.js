const express = require('express');
const cors = require('cors');
const xlsx = require('xlsx'); // Biblioteca para ler Excel
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static('public'));

app.get('/api/parametros', (req, res) => {
    try {
        // Localiza o arquivo dentro da pasta 'planilha'
        const caminhoArquivo = path.join(__dirname, 'planilha', 'calculadora_custos_indiretos.xlsm');
        
        // Lê o arquivo Excel completo
        const workbook = xlsx.readFile(caminhoArquivo);
        
        // Seleciona especificamente a aba "Dados CTI"
        const aba = workbook.Sheets["Dados CTI"];
        
        // Converte a aba em uma matriz de dados [linha][coluna]
        const dados = xlsx.utils.sheet_to_json(aba, { header: 1 });

        // Função para limpar e converter os dados para números decimais
        const preparar = (v) => {
            if (v === undefined || v === null) return 0;
            if (typeof v === 'number') return v;
            let limpo = v.toString().replace(/[R$\s.]/g, '').replace(',', '.');
            return parseFloat(limpo) || 0;
        };

        /* NOVO MAPEAMENTO (Coluna A = Índice 0)
           Conforme sua nova imagem da planilha:
           Linha 3 no Excel -> Índice [2] no código
        */
        const parametros = {
            total_serv_supri: preparar(dados[2] ? dados[2][0] : 0),             // A3
            area_total_construida: preparar(dados[3] ? dados[3][0] : 0),        // A4
            percentual_areas_servi: preparar(dados[4] ? dados[4][0] : 0),       // A5
            valor_m2_contru: preparar(dados[5] ? dados[5][0] : 0),              // A6
            vida_util_predial: preparar(dados[6] ? dados[6][0] : 0),            // A7
            percentual_manutencao_predial: preparar(dados[7] ? dados[7][0] : 0), // A8
            vida_util_horas_equipamentos: preparar(dados[8] ? dados[8][0] : 0), // A9
            horas_equipamentos_utilizada_anual: preparar(dados[9] ? dados[9][0] : 0), // A10
            percentual_equipamentos_manut_anual: preparar(dados[10] ? dados[10][0] : 0), // A11
            valor_hora_pessoal_nivel_superior: preparar(dados[11] ? dados[11][0] : 0), // A12
            valor_hora_pessoal_nivel_medio: preparar(dados[12] ? dados[12][0] : 0) // A13
        };

        // Retorna o objeto organizado para o seu HTML
        res.json(parametros);

    } catch (error) {
        console.error("Erro ao ler o Excel:", error);
        res.status(500).json({ erro: "Erro ao acessar a aba 'Dados CTI' ou arquivo não encontrado." });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log(`Acesse sua calculadora em http://localhost:${PORT}/calCustosIndiretos.html`);
});