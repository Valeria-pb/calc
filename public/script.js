let tipoGlobal = "";
      let equipamentosSelecionados = [];
      let laboratoriosSelecionados = [];
      let somaTotalEquip = 0;

      const listaGeralEquipamentos = [
        // Equipamentos do LAimage - Lab. de Imageamento p/ Micro e Nanoeletrônica
        {
          nome: "Microscópio eletrônico de varredura com litografia por feixe de elétrons - FEG-SEM Tescan modelo Mira 3 XMU equipado com EDS 60 mm Bruker",
          ano: 2018,
          valor: 1300000.0,
          lab: "Lab. de Imageamento p/ Micro e Nanoeletrônica",
        },

        {
          nome: "Sistema de nanomanipuladores para medidas elétricos in situ em microcópio eletrônico de varredura com resolução de 100 nm Imina Technologies modelo miBot BT-14",
          ano: 2018,
          valor: 350000.0,
          lab: "Lab. de Imageamento p/ Micro e Nanoeletrônica",
        },

        {
          nome: "Microscópio de Força Atômica Nanosurf modelo EasyScan 2",
          ano: 2010,
          valor: 215000.0,
          lab: "Lab. de Imageamento p/ Micro e Nanoeletrônica",
        },

        {
          nome: "Microscópio óptico com fluorescência Olympus modelo MX61",
          ano: 2009,
          valor: 70000.0,
          lab: "Lab. de Imageamento p/ Micro e Nanoeletrônica",
        },

        {
          nome: "Sistemas de medidas elétricas por 4 pontas Jandell modelo 3000+ com RM3000 Test Unit",
          ano: 2018,
          valor: 40000.0,
          lab: "Lab. de Imageamento p/ Micro e Nanoeletrônica",
        },

        {
          nome: "Espectrômetro de Fluorescência de Raios-X (XRF) Fischer modelo XDV-SD",
          ano: 2010,
          valor: 50000.0,
          lab: "Lab. de Imageamento p/ Micro e Nanoeletrônica",
        },

        {
          nome: "Microscópio óptico com fluorescência Thermofisher modelo EVOS M5000",
          ano: 2024,
          valor: 431962.99,
          lab: "Lab. de Imageamento p/ Micro e Nanoeletrônica",
        },

        {
          nome: "Difratômetro de Raios-X Panalytical Aeris",
          ano: 2025,
          valor: 1068059.87,
          lab: "Lab. de Imageamento p/ Micro e Nanoeletrônica",
        },

        {
          nome: "Microtomógrafo Bruker SkyScan 1272 CMOS",
          ano: 2022,
          valor: 1519069.47,
          lab: "Lab. de Imageamento p/ Micro e Nanoeletrônica",
        },

        // Equipamentos do LAsuport - Lab. de Processamento Fisico-Químico

        {
          nome: "Sistema de glove-box com spinner e evaporadora térmica orgânica/ inorgânica integrados em atmosfera inerte Mbraun modelo LAB master sp",
          ano: 2011,
          valor: 1508000.0,
          lab: "Lab. de Processamento Fisico-Químico",
        },

        {
          nome: "Sistema de Deposição por Spray ultrassônico Sonotek modelo ExactaCoat",
          ano: 2009,
          valor: 160000.0,
          lab: "Lab. de Processamento Fisico-Químico",
        },

        //dois equipamentos iguais, ano diferente, valor diferente, mesmo laboratório.
        {
          nome: "Sistema de Deposição por Spray ultrassônico Sonotek modelo ExactaCoat",
          ano: 2011,
          valor: 170000.0,
          lab: "Lab. de Processamento Fisico-Químico",
        },

        {
          nome: "Impressora jato de tinta para materiais metálicos - Dimatix modelo DMP-28",
          ano: 2009,
          valor: 70000.0,
          lab: "Lab. de Processamento Fisico-Químico",
        },

        {
          nome: "Impressoa jato de tinta para materiais orgânicos - Dimatix modelo DMP-28",
          ano: 2007,
          valor: 60000.0,
          lab: "Lab. de Processamento Fisico-Químico",
        },

        {
          nome: "Perfilômetro NanoMap modelo 500LT",
          ano: 2013,
          valor: 150000.0,
          lab: "Lab. de Processamento Fisico-Químico",
        },

        {
          nome: "Evaporadora térmica alto vácuo Edwards modelo EV400",
          ano: 2013,
          valor: 150000.0,
          lab: "Lab. de Processamento Fisico-Químico",
        },

        {
          nome: "Sputtering de filmes ulta-finos de ouro -E5200 Auto Sputter Coater",
          ano: 1990,
          valor: 1,
          lab: "Lab. de Processamento Fisico-Químico",
        },

        {
          nome: "Forno Tubular EDG modelo FTH1-60",
          ano: 2007,
          valor: 15420.0,
          lab: "Lab. de Processamento Fisico-Químico",
        },

        {
          nome: "Evaporadora por feixe de elétrons Edwards FL400 Auto306 cryo",
          ano: 2015,
          valor: 9150.0,
          lab: "Lab. de Processamento Fisico-Químico",
        },

        {
          nome: "Câmara para caracterização de materiais por Field Emission",
          ano: 2000,
          valor: 1.0,
          lab: "Lab. de Processamento Fisico-Químico",
        },

        {
          nome: "Infraestrutura complementar para preparação de amostras",
          ano: 2020,
          valor: 1.0,
          lab: "Lab. de Processamento Fisico-Químico",
        },

        {
          nome: "Sistema de Análise Óptica para Dispositivos de Iliminação - EVERFINE YF1000",
          ano: 2022,
          valor: 365176.26,
          lab: "Lab. de Processamento Fisico-Químico",
        },

        {
          nome: "Gerador de eletróstatica EVERFINE modelo EMS61000-2A",
          ano: 2022,
          valor: 26144.97,
          lab: "Lab. de Processamento Fisico-Químico",
        },

        {
          nome: "Gerador de surtos EVERFINE modelo EMS61000-5A",
          ano: 2022,
          valor: 33735.79,
          lab: "Lab. de Processamento Fisico-Químico",
        },

        {
          nome: "Gerador de interrupção e quedas de tensão EVERFINE modelo EMS61000-11K",
          ano: 2022,
          valor: 18554.14,
          lab: "Lab. de Processamento Fisico-Químico",
        },

        {
          nome: "Gerador de transientes EVERFINE modelo EMS61000-4B",
          ano: 2022,
          valor: 32049.55,
          lab: "Lab. de Processamento Fisico-Químico",
        },

        // Equipamentos do LAsupport - Lab. de Caracterização Espectroscópica
        {
          nome: "Microscópio de infravermelho Thermo Electron modelo iN10",
          ano: 2011,
          valor: 165000.0,
          lab: "Lab. de Caracterização Espectroscópica",
        },

        {
          nome: "Espectrômetro de absorção e fluorescência UV-Vis-NIR Horiba modelo Duetta",
          ano: 2019,
          valor: 315000.0,
          lab: "Lab. de Caracterização Espectroscópica",
        },

        {
          nome: "Espectrômetro UV/VIS/NIR Perkin Elmer modelo Lambda 900",
          ano: 2001,
          valor: 180000.0,
          lab: "Lab. de Caracterização Espectroscópica",
        },

        {
          nome: "Simulador Solar ScienceTech modelo SS 1kW",
          ano: 2010,
          valor: 120000.0,
          lab: "Lab. de Caracterização Espectroscópica",
        },
        //EQUIPAMENTO REPETIDO, MESMO NOME, MESMO LABORATÓRIO, ANO DIFERENTE.
        {
          nome: "Simulador Solar ScienceTech modelo SS 1kW",
          ano: 2008,
          valor: 120000.0,
          lab: "Lab. de Caracterização Espectroscópica",
        },

        {
          nome: "Espectrômetro de Infravermelho - Spectrum 100 - Perkin Elmer",
          ano: 2009,
          valor: 55000.0,
          lab: "Lab. de Caracterização Espectroscópica",
        },

        {
          nome: "Medidor de Ângulo de Contato DataPhysics Instruments modelo OCA 15",
          ano: 2008,
          valor: 60000.0,
          lab: "Lab. de Caracterização Espectroscópica",
        },

        {
          nome: "Microscópio de luz polarizada Olympus modelo BX51 com estágio de aquecimento/resfriamento Instec",
          ano: 2008,
          valor: 45000.0,
          lab: "Lab. de Caracterização Espectroscópica",
        },

        {
          nome: "Simulador Solar Ossila G2009A1",
          ano: 2022,
          valor: 14968.2,
          lab: "Lab. de Caracterização Espectroscópica",
        },

        {
          nome: "Simulador Solar LumiSun-50",
          ano: 2024,
          valor: 79310.23,
          lab: "Lab. de Caracterização Espectroscópica",
        },

        {
          nome: "Estação de Trabalho",
          ano: " ",
          valor: 4391.76,
          lab: "Lab. de Caracterização Espectroscópica",
        },

        // equipamentos do LAsupport - Lab. de Fotônica
        {
          nome: "Caracterização de circuitos integrados fotônicos com montagem micro/nano posicionadores automáticos",
          ano: 2012,
          valor: 145000.0,
          lab: "Lab. de Fotônica",
        },

        {
          nome: "Laser sintonizável banda C infravermelho com saída em fibra optica",
          ano: 2012,
          valor: 85000.0,
          lab: "Lab. de Fotônica",
        },

        {
          nome: "Mesa 3D",
          ano: 2020,
          valor: 235421.31,
          lab: "Lab. de Fotônica",
        },

        {
          nome: "Analisador de parâmetros opticos",
          ano: 2017,
          valor: 103000.0,
          lab: "Lab. de Fotônica",
        },

        {
          nome: "Simulador Solar ScienceTech modelo SS 1kW",
          ano: 2010,
          valor: 120000.0,
          lab: "Lab. de Fotônica",
        },

        {
          nome: "Espectrômetro de absorção e fluorescência UV-Vis-NIR Horiba modelo Duetta",
          ano: 2019,
          valor: 315000.0,
          lab: "Lab. de Fotônica",
        },

        {
          nome: "Fonte laser sintonizável - Agilent 81980A Tunable Laser Source",
          ano: 2012,
          valor: 81412.94,
          lab: "Lab. de Fotônica",
        },

        {
          nome: "Fonte laser sintonizável - CoBriteDX4-2-C-H01-FA",
          ano: 2014,
          valor: 23666.74,
          lab: "Lab. de Fotônica",
        },

        {
          nome: "Fonte de Luz de Banda Larga -Amonics ASLD-CWDM-5-B-FA Super- Wideband Light Source",
          ano: 2012,
          valor: 33717.75,
          lab: "Lab. de Fotônica",
        },

        {
          nome: "Medidor de Potência ótica de 4 canais - Keysight N7744A Optical Multiport Power Meter",
          ano: 2012,
          valor: 10903.36,
          lab: "Lab. de Fotônica",
        },

        {
          nome: "Estabilizador ativo de polarização - General Photonics  Polastay PDS 103-A",
          ano: 2012,
          valor: 15038.12,
          lab: "Lab. de Fotônica",
        },

        {
          nome: "Analisador de Espectro Óptico - Yokogawa AQ6370c",
          ano: 2012,
          valor: 63593.72,
          lab: "Lab. de Fotônica",
        },

        {
          nome: "Fonte e medidor de tensão/corrente integrado - Keithley 2401 Sourcemeter",
          ano: 2012,
          valor: 5419.36,
          lab: "Lab. de Fotônica",
        },

        {
          nome: "Setups para aclopamento vertical e lateral",
          ano: 2017,
          valor: 26578.79,
          lab: "Lab. de Fotônica",
        },

        {
          nome: "Máquina de fusão (emenda) de fibra ótica- FITEL S179 Fusion Slicer",
          ano: 2023,
          valor: 19900.0,
          lab: "Lab. de Fotônica",
        },

        {
          nome: "Impressora 3D de resina - Creality Halot Mage 8k",
          ano: 2024,
          valor: 3927.7,
          lab: "Lab. de Fotônica",
        },

        {
          nome: "Estação de Trabalho",
          ano: "",
          valor: 4391.76,
          lab: "Lab. de Fotônica",
        },

        //equipamentos do Lab. de Biotecnologia
        {
          nome: "Impressora 3D Modelo 593",
          ano: 2024,
          valor: 850000.0,
          lab: "Lab. de Biotecnologia",
        },

        {
          nome: "Misturador Hauschild Speed Mixer 250 DAC",
          ano: 2024,
          valor: 30000.0,
          lab: "Lab. de Biotecnologia",
        },

        {
          nome: "Liofilizador Labconco modelo FreeZone 2.5 Lister Benchtop Freeze Dry",
          ano: 2022,
          valor: 73360.0,
          lab: "Lab. de Biotecnologia",
        },

        {
          nome: "Leitor de Multiplacas Loccus modelo LMR 96-i",
          ano: 2022,
          valor: 22000.0,
          lab: "Lab. de Biotecnologia",
        },

        {
          nome: "Forno de sinterização com controlador Incon modelo CNT 400",
          ano: 2024,
          valor: 135260.0,
          lab: "Lab. de Biotecnologia",
        },

        {
          nome: "Shaker",
          ano: 2020,
          valor: 300000.0,
          lab: "Lab. de Biotecnologia",
        },

        {
          nome: "Estação de Trabalho",
          ano: " ",
          valor: 4391.76,
          lab: "Lab. de Biotecnologia",
        },

        //Equipamentos Dipaq - Lab. de Análises de Falhas, Lab. de Qualificação de Produtos Eletrônicos, Lab. de Teste e Caracterização Elétrica, ficou todos juntos no filtro
        { nome: "MicroFlex", ano: 2020, valor: 1000000.0, lab: "Lab. DIPAQ" },

        {
          nome: "Probe Station",
          ano: 2020,
          valor: 700000.0,
          lab: "Lab. DIPAQ",
        },

        { nome: "RF", ano: 2020, valor: 645022.43, lab: "Lab. DIPAQ" },

        {
          nome: "Câmara Climática",
          ano: 2020,
          valor: 200000.0,
          lab: "Lab. DIPAQ",
        },

        {
          nome: "Câmara Térmica",
          ano: 2020,
          valor: 200000.0,
          lab: "Lab. DIPAQ",
        },

        {
          nome: "Analisador de parâmetros semicondutores - B1500A",
          ano: 2020,
          valor: 179562.5,
          lab: "Lab. DIPAQ",
        },

        { nome: "Must 3+", ano: 2020, valor: 85351.95, lab: "Lab. DIPAQ" },

        {
          nome: "Equip. Elétricos",
          ano: 2020,
          valor: 78148.65,
          lab: "Lab. DIPAQ",
        },

        { nome: "CM-60", ano: 2020, valor: 70000.0, lab: "Lab. DIPAQ" },

        {
          nome: "Plasma Etching",
          ano: 2020,
          valor: 58000.0,
          lab: "Lab. DIPAQ",
        },

        { nome: "Raio-X", ano: 2020, valor: 56153.7, lab: "Lab. DIPAQ" },

        {
          nome: "Microscópico Metalográfico",
          ano: 2020,
          valor: 52434.6,
          lab: "Lab. DIPAQ",
        },

        { nome: "Estufa", ano: 2020, valor: 50000.0, lab: "Lab. DIPAQ" },

        {
          nome: "Microscópio Estereo",
          ano: 2020,
          valor: 43094.12,
          lab: "Lab. DIPAQ",
        },

        { nome: "EMIC", ano: 2020, valor: 38000.0, lab: "Lab. DIPAQ" },

        {
          nome: "Instrumentação",
          ano: 2020,
          valor: 30881.23,
          lab: "Lab. DIPAQ",
        },

        { nome: "Autoclave", ano: 2020, valor: 30000.0, lab: "Lab. DIPAQ" },

        { nome: "Névoa salina", ano: 2020, valor: 30000.0, lab: "Lab. DIPAQ" },

        {
          nome: "Ciclagem Líq. Líq.",
          ano: 2020,
          valor: 30000.0,
          lab: "Lab. DIPAQ",
        },

        { nome: "Politrizes", ano: 2020, valor: 9800.0, lab: "Lab. DIPAQ" },

        { nome: "Cadinho", ano: 2020, valor: 2225.69, lab: "Lab. DIPAQ" },

        {
          nome: "Estação de Trabalho",
          ano: " ",
          valor: 4391.76,
          lab: "Lab. DIPAQ",
        },

        // Equipamentos do Lab. de Micro e Nanofabricação

        {
          nome: "Alinhadora de máscara por contato UV400 Karl Suss Modelo MJB3",
          ano: 2001,
          valor: 150000.0,
          lab: "Lab. de Micro e Nanofabricação",
        },

        {
          nome: "Sistema de corrosão seca por íons reativos Oxford Tech. modelo RIE-80",
          ano: 1994,
          valor: 40000.0,
          lab: "Lab. de Micro e Nanofabricação",
        },

        {
          nome: 'Spin Coating Brewer Science modelo Cee 200CBX 8" com placa quente',
          ano: 2013,
          valor: 80000.0,
          lab: "Lab. de Micro e Nanofabricação",
        },

        {
          nome: 'Sistema de deposição e recozimento – Brewer Science modelo Cee 200CBX 8"',
          ano: 2013,
          valor: 200000.0,
          lab: "Lab. de Micro e Nanofabricação",
        },

        {
          nome: "Spin Coating para fotoresiste Headway 6''",
          ano: 2020,
          valor: 50000.0,
          lab: "Lab. de Micro e Nanofabricação",
        },

        {
          nome: 'Microscópio óptico de inspeção com capacidade de até 8" Nikon modelo Eclipse L2O',
          ano: 2020,
          valor: 50000.0,
          lab: "Lab. de Micro e Nanofabricação",
        },

        {
          nome: "Sistema de Litografia direta a Laser UV Heidelberg Instruments modelo DWL-66FS (DWL)",
          ano: 2011,
          valor: 1100000.0,
          lab: "Lab. de Micro e Nanofabricação",
        },

        {
          nome: "Sistema de deposição de filmes finos Langmuir-Blodgett com cuba - Biolin Scientific",
          ano: 2015,
          valor: 25000.0,
          lab: "Lab. de Micro e Nanofabricação",
        },

        {
          nome: "Sistema de limpeza de máscaras e substrato Balzers modelo BMC701",
          ano: 1995,
          valor: 250000.0,
          lab: "Lab. de Micro e Nanofabricação",
        },

        {
          nome: "Copiadora de máscaras por UV Tamarack Série 155",
          ano: 1994,
          valor: 1644.4,
          lab: "Lab. de Micro e Nanofabricação",
        },

        {
          nome: "Estação de Trabalho",
          ano: " ",
          valor: 4391.76,
          lab: "Lab. de Micro e Nanofabricação",
        },

        //Equipamentos do Lab. Aberto de Empacotamento e Integração de Sistemas

        {
          nome: "Máquina de selagem hermética Solid State Equip. Co. modelo Parallel Seam 1000",
          ano: 2006,
          valor: 250000.0,
          lab: "Lab. Aberto de Empacotamento e Integração de Sistemas",
        },

        {
          nome: "Cortadora de lâminas Disco Corp modelo DAD 321",
          ano: 2011,
          valor: 210000.0,
          lab: "Lab. Aberto de Empacotamento e Integração de Sistemas",
        },

        {
          nome: "Pick and Place para SMD Essemtech Paraquda",
          ano: 1998,
          valor: 70000.0,
          lab: "Lab. Aberto de Empacotamento e Integração de Sistemas",
        },

        {
          nome: "Forno de Refusão SMD Heller 1088",
          ano: 2009,
          valor: 150000.0,
          lab: "Lab. Aberto de Empacotamento e Integração de Sistemas",
        },

        {
          nome: "Soldadora de Fios manual TPT HB 160",
          ano: 1990,
          valor: 80000.0,
          lab: "Lab. Aberto de Empacotamento e Integração de Sistemas",
        },

        {
          nome: "Soldadora de Fios automática ITM Bonda 101",
          ano: 2009,
          valor: 65000.0,
          lab: "Lab. Aberto de Empacotamento e Integração de Sistemas",
        },

        {
          nome: "Dispensador resina / pasta de solda CAM/ALOT 1414",
          ano: 2012,
          valor: 225000.0,
          lab: "Lab. Aberto de Empacotamento e Integração de Sistemas",
        },

        {
          nome: "Sist. de montagem Flip-Chip Semi Corp Eagle 860",
          ano: 2001,
          valor: 60000.0,
          lab: "Lab. Aberto de Empacotamento e Integração de Sistemas",
        },

        {
          nome: "Estação de retrabalho de BGA PACE ThermoFloTF200",
          ano: 2001,
          valor: 86.0,
          lab: "Lab. Aberto de Empacotamento e Integração de Sistemas",
        },

        {
          nome: "Equip. inspeção de Raios-X PACE XR 2000",
          ano: 2008,
          valor: 123000.0,
          lab: "Lab. Aberto de Empacotamento e Integração de Sistemas",
        },

        {
          nome: "Impressora de solda por estêncil DIMA SMT HS 100",
          ano: 2006,
          valor: 65000.0,
          lab: "Lab. Aberto de Empacotamento e Integração de Sistemas",
        },

        {
          nome: "Microscópio para inspeção de BGA Ersascope",
          ano: 2012,
          valor: 220000.0,
          lab: "Lab. Aberto de Empacotamento e Integração de Sistemas",
        },

        {
          nome: "Perfilômetro Mecânico Dektak XT",
          ano: 2010,
          valor: 600000.0,
          lab: "Lab. Aberto de Empacotamento e Integração de Sistemas",
        },

        {
          nome: "Sistema de deposição Sputtering RF Kurt Lesker 3 Guns",
          ano: 2012,
          valor: 400000.0,
          lab: "Lab. Aberto de Empacotamento e Integração de Sistemas",
        },

        {
          nome: "Sistema de Processamento Laser UV Newport modelo Pulseo",
          ano: 2015,
          valor: 106642.26,
          lab: "Lab. Aberto de Empacotamento e Integração de Sistemas",
        },

        {
          nome: "Agitador magnético digital com aquecimento e sonda com base quadrada em cerâmica",
          ano: 2022,
          valor: 10000.0,
          lab: "Lab. Aberto de Empacotamento e Integração de Sistemas",
        },

        {
          nome: "Estação de Trabalho",
          ano: " ",
          valor: 4391.76,
          lab: "Lab. Aberto de Empacotamento e Integração de Sistemas",
        },

        // Equipamentos Lab. Aberto de impressão 3D

        {
          nome: "Tecnologia de impressão 3D por multijatos (PolyJet) Objet - Stratasys modelo Connex 350",
          ano: 2010,
          valor: 516734.43,
          lab: "Lab. Aberto de impressão 3D",
        },

        {
          nome: "Equipamento de Manufatura aditiva por processo de impressão 3D em gesso e outros materiais - marca Zcorp",
          ano: 2003,
          valor: 146510.0,
          lab: "Lab. Aberto de impressão 3D",
        },

        {
          nome: "Plataforma experimental de Impressão 3D para ensaios e estruturação de materiais em camadas Projeto open source CTI modelo Fab@CTI",
          ano: 2006,
          valor: 5000.0,
          lab: "Lab. Aberto de impressão 3D",
        },

        {
          nome: "Tecnologia de impressão 3D por extrusão de filamento (FDM) Stratasys modelo Fortus 400mc",
          ano: 2012, //ano estava diferente da planilha(2007), deixei igual.
          valor: 221915.12,
          lab: "Lab. Aberto de impressão 3D",
        },

        {
          nome: "Tecnologia de impressão 3D por extrusão de filamento (FDM) Stratasys modelo Vantage i",
          ano: 2007,
          valor: 221915.12,
          lab: "Lab. Aberto de impressão 3D",
        },

        {
          nome: "Tecnologia de impressão 3D por Sinterização Seletiva à Laser (SLS) DTM Corporation - 3D Systems modelo Sinterstation 2000",
          ano: 1998,
          valor: 340236.0,
          lab: "Lab. Aberto de impressão 3D",
        },

        {
          nome: "Tecnologia de impressão 3D por Sinterização Seletiva à Laser (SLS) 3D Systems modelo Sinterstation HiQ",
          ano: 2007,
          valor: 494506.38,
          lab: "Lab. Aberto de impressão 3D",
        },

        {
          nome: "Tecnologia de impressão 3D por jateamento de cera (WaxJet) Solidscape - Stratasys modelo R66+",
          ano: 2010,
          valor: 60849.9,
          lab: "Lab. Aberto de impressão 3D",
        },

        {
          nome: "Tecnologia de impressão 3D por jateamento de líquido aglutinante (Binder Jetting) Z Corporation - 3D Systems modelo 3DP Spectrum Z510",
          ano: 2008,
          valor: 122768.76,
          lab: "Lab. Aberto de impressão 3D",
        },

        {
          nome: "Digitalizador tridimensional com capacidade de geração de nuvens de pontos, exportados na forma de arquivos digitais - Scanner 3D-EXAscan",
          ano: 2009,
          valor: 79062.61,
          lab: "Lab. Aberto de impressão 3D",
        },

        {
          nome: "Equipamento de manufatura aditiva por feixe de elétrons - ARCAM Q10 Plus",
          ano: 2015,
          valor: 2530293.07,
          lab: "Lab. Aberto de impressão 3D",
        },

        {
          nome: "Equipamento para usinagem três eixos de blocos de resina e scanner 3D para cópia de objetos tridimensionais - Roland - MDX-20",
          ano: 2004,
          valor: 15000.0,
          lab: "Lab. Aberto de impressão 3D",
        },

        {
          nome: "Leitora de microplacas (Elisa)",
          ano: 2022,
          valor: 22000.0,
          lab: "Lab. Aberto de Impressão 3D",
        },

        {
          nome: "Estação de Trabalho para Processamento de Dados em Unidades de Processamento Gráfico (GPU)",
          ano: 2019,
          valor: 164285.0,
          lab: "Lab. Aberto de Impressão 3D",
        },

        {
          nome: "Estação de Trabalho",
          ano: " ",
          valor: 4391.76,
          lab: "Lab. Aberto de Impressão 3D",
        },

        //EQUIPAMENTOS Lab. Aberto de Energia Fotovoltaica
        {
          nome: "Soldadora semi automática de células por aquecimento LightBeam",
          ano: 2010,
          valor: 137887.25,
          lab: "Lab. Aberto de Energia Fotovoltaica",
        },

        {
          nome: "Mesa de corte e processamento de barramentos para células",
          ano: 2013,
          valor: 9400.0,
          lab: "Lab. Aberto de Energia Fotovoltaica",
        },

        {
          nome: "Mesas para posicionamento e movimentação de módulos fotovoltaicos",
          ano: 2013,
          valor: 20863.0,
          lab: "Lab. Aberto de Energia Fotovoltaica",
        },

        {
          nome: "Sistema de movimentação aéreo com braço pantográfico para manipulação e transporte de vidros",
          ano: 2010,
          valor: 54125.0,
          lab: "Lab. Aberto de Energia Fotovoltaica",
        },

        {
          nome: "Laminador de módulos fotovoltaicos",
          ano: 2010,
          valor: 349201.89,
          lab: "Lab. Aberto de Energia Fotovoltaica",
        },

        {
          nome: "Lavadora e secadora de vidros vertical AGMAQ",
          ano: 2010,
          valor: 86950.0,
          lab: "Lab. Aberto de Energia Fotovoltaica",
        },

        {
          nome: "Câmara de caracterização de painéis fotovoltaicos com simulador solar por flash e imageamento por eletroluminescência",
          ano: 2010,
          valor: 134805.08,
          lab: "Lab. Aberto de Energia Fotovoltaica",
        },

        {
          nome: "Estação de Trabalho",
          ano: " ",
          valor: 4391.76,
          lab: "Lab. Aberto de Energia Fotovoltaica",
        },

        //EQUIPAMENTOS LAEDAS

        {
          nome: "DELL Optiplex 9020 - 8G RAM, Monitor, mausse e teclado",
          ano: 2013,
          valor: 3700.0,
          lab: "Lab. LAEDAS",
        },

        {
          nome: "Sun Ultra 40 M2- 16G RAM, Monitor, mausse e teclado",
          ano: 2009,
          valor: 5000.0,
          lab: "Lab. LAEDAS",
        },

        {
          nome: "DELL Precision 3660 - 30G RAM, Monitor, mausse e teclado",
          ano: 2023,
          valor: 14000.0,
          lab: "Lab. LAEDAS",
        },

        {
          nome: "Estação de Trabalho",
          ano: " ",
          valor: 4391.76,
          lab: "Lab. LAEDAS",
        },

        // esses equipamentos não constam na lista da erica
        // { nome: "Processamento térmico rápido (RTP) Allwin21 modelo AccuThermo AW 61", ano: 2011, valor: 170000.00, lab: ""},
        // { nome: "Potenciostato/Galvanostato Metrohn AG mdoelo Autolab PGSTAT302N", ano: 2008, valor: 120000.00, lab: ""},
        // { nome: "SISTEMA DE DEPOSICAO DE FILMES FINOS COM DUPLO PROCESSO DE DEPOSICAO", ano: null, valor: 2403270.00, lab:""},
        // { nome: "Medidor de Ângulo de Contato DataPhysics Instruments modelo OCA 15", ano: 2008, valor: 60000.00, lab:""},
        // { nome: "Perfilômetro Óptico Zygo modelo NewView 7300", ano: 2007, valor: 300000.00, lab:""},
        // { nome: "Difratômetro de Raios-X Rigaku modelo Ultima IV", ano: 2013, valor: 250000.00, lab:""},
        // { nome: "Espectrômetro de Fotoelétrons Excitados por Raios-X (XPS) Kratos modelo Axis Ultra DLD", ano: 2015, valor: 1200000.00, lab:""},
        // { nome: "Sistema de deposição por pulverização catódica (sputtering) DC/RF Kurt Lesker modelo CMS-18", ano: 2010, valor: 300000.00, lab:""},
        // { nome: "Sistema de deposição por pulverização catódica (sputtering) RF magnetron AJA modelo ATC-1800-F", ano: 2015, valor: 500000.00, lab:""},
        // { nome: "Sistema de deposição por evaporação térmica em alto vácuo Angstrom Engineering modelo EvoVac", ano: 2012, valor: 200000.00, lab:""},
        // { nome: "Sistema de deposição por evaporação eletrônica em ultra alto vácuo Temescal modelo FC-2000", ano: 2008, valor: 250000.00, lab:""},
        // { nome: "Sistema de litografia por feixe de elétrons Raith modelo eLINE Plus", ano: 2013, valor: 600000.00, lab:""},
        // { nome: "Difratômetro de Raios-X de alta resolução Rigaku modelo SmartLab", ano: 2018, valor: 800000.00, lab:""},
        // { nome: "Espectrômetro Raman Horiba modelo LabRAM HR Evolution", ano: 2014, valor: 250000.00, lab:""},
        // { nome: "Microscópio Confocal de Varredura a Laser Leica modelo TCS SP8", ano: 2016, valor: 600000.00, lab:""},
        // { nome: "Ultra Microtomo Leica modelo EM UC7", ano: 2012, valor: 150000.00, lab:""},
        // { nome: "Estação de retrabalho para componentes SMD Metcal modelo HCT2", ano: 2005, valor: 15000.00, lab:""},
        // { nome: "Máquina de inspeção ótica automática (AOI) Koh Young modelo Zenith", ano: 2010, valor: 250000.00, lab:""},
        // { nome: "Máquina de inspeção ótica automática (AOI) Koh Young modelo YSi-V",ano: 2015, valor: 300000.00, lab:""},
        // { nome: "Máquina de inspeção ótica automática (AOI) Koh Young modelo YSi-M", ano: 2018, valor: 350000.00, lab:""},
        // { nome: "Máquina de inspeção ótica automática (AOI) Koh Young modelo YSi-L", ano: 2020, valor: 400000.00, lab:""},
        // { nome: "Estação de retrabalho para componentes BGA e QFN PACE modelo HotShot", ano: 2004, valor: 40000.00, lab:""},
      ];

      // Objeto global para armazenar os valores capturados
      let fatoresPlanilha = {
        total_serv_supri: 0, // C5
        area_total_construida: 0, // C9
        percentual_areas_servi: 0, // C10
        valor_m2_contru: 0, // C11
        vida_util_predial: 0, // C12
        percentual_manutencao_predial: 0, // C13
        vida_util_horas_equipamentos: 0, // C14
        horas_equipamentos_utilizada_anual: 0, // C15
        percentual_equipamentos_manut_anual: 0, // C16
        valor_hora_pessoal_nivel_superior: 0, // C17
        valor_hora_pessoal_nivel_medio: 0, // C18
      };

      async function carregarFatoresDaPlanilha() {
        try {
          // Busca os dados da rota que você acabou de testar no navegador
          const response = await fetch("http://localhost:3000/api/parametros");
          if (!response.ok)
            throw new Error("Falha ao conectar com o servidor Node.js");

          const dados = await response.json();

          // Alimenta o objeto global fatoresPlanilha com os dados do Excel
          fatoresPlanilha = dados;

          console.log("Dados sincronizados com o servidor:", fatoresPlanilha);

          // Um pequeno feedback visual para você confirmar que funcionou
        } catch (error) {
          console.error("Erro na integração:", error);
        }
      }
      window.onload = carregarFatoresDaPlanilha;

      class ItemEquipamento {
        constructor(equipOriginal) {
          this.idUnico =
            "equip_" + Date.now() + Math.floor(Math.random() * 1000);
          this.nome = equipOriginal.nome;
          this.lab = equipOriginal.lab;
          this.valorOriginal = equipOriginal.valor;
          this.horas = 0; // Campo que recebe o inteiro
        }
      }

      function selecionarTipo(tipo) {
        tipoGlobal = tipo;
        document.getElementById("etapa1").classList.add("hidden");
        document.getElementById("formulario-dados").classList.remove("hidden");
        document.getElementById("tipo-escolhido").innerText =
          tipo.toUpperCase();

        const campoProj = document.getElementById("campo-projeto");
        const duracaoServ = document.getElementById("campo-duracao-servico");
        const duracaoProj = document.getElementById("campo-duracao-projeto");

        if (tipo === "projetos") {
          campoProj.classList.remove("hidden");
          duracaoProj.classList.remove("hidden");
          duracaoServ.classList.add("hidden");
        } else {
          campoProj.classList.add("hidden");
          duracaoProj.classList.add("hidden");
          duracaoServ.classList.remove("hidden");
        }
      }

      function adicionarLaboratorio() {
        const select = document.getElementById("selLaboratorio");
        const idLab = select.value;
        const textoLab = select.options[select.selectedIndex].text;
        const areaLab = parseFloat(
          select.options[select.selectedIndex].getAttribute("data-area"),
        );

        if (idLab === "") {
          alert("Selecione um laboratório!");
          return;
        }

        if (laboratoriosSelecionados.some((l) => l.id === idLab)) {
          alert("Laboratório já adicionado!");
          return;
        }

        if (horasSuperior < 0 || horasIntermediario < 0) {
          alert("As horas de pessoal não podem ser valores negativos!");
          return;
        }

        laboratoriosSelecionados.push({
          id: idLab,
          nome: textoLab,
          area: areaLab,
        });

        // Atualiza a visualização da lista de labs
        const containerLista = document.getElementById(
          "area-labs-selecionados",
        );
        const divLista = document.getElementById("listaLabsWeb");
        containerLista.classList.remove("hidden");

        const item = document.createElement("div");
        item.className = "equip-item";
        item.innerHTML = `<span>${textoLab} (${areaLab} m²)</span>`;
        divLista.appendChild(item);

        focarEquipamentosDoLaboratorio(idLab);

        select.value = ""; // Limpa o select de laboratório para o próximo
      }

      function focarEquipamentosDoLaboratorio(idLab) {
        const selectEq = document.getElementById("selEquipamento");
        selectEq.innerHTML =
          '<option value="">-- Selecione o Equipamento --</option>';

        // Filtra equipamentos APENAS do laboratório recém selecionado
        const disponiveis = listaGeralEquipamentos.filter(
          (eq) => eq.lab === idLab,
        );

        if (disponiveis.length === 0) {
          selectEq.innerHTML =
            '<option value="">Nenhum equipamento cadastrado para este lab</option>';
        }

        disponiveis.forEach((eq) => {
          let opt = document.createElement("option");
          opt.value = listaGeralEquipamentos.indexOf(eq);
          opt.text = `${eq.nome} (${eq.ano || "N/A"})`;
          selectEq.add(opt);
        });
      }

      function atualizarSomaEquipamentos() {
        // Percorre a lista de objetos ItemEquipamento e soma a propriedade valorOriginal
        somaTotalEquip = equipamentosSelecionados.reduce(
          (acc, item) => acc + (item.valorOriginal || 0),
          0,
        );

        console.log(
          "Valor total dos equipamentos utilizados: R$ " +
            somaTotalEquip.toFixed(2),
        );
      }

      function adicionarEquipamento() {
        const select = document.getElementById("selEquipamento");
        const index = select.value;

        if (index === "") {
          alert("Selecione um equipamento!");
          return;
        }

        const novoItem = new ItemEquipamento(listaGeralEquipamentos[index]);
        equipamentosSelecionados.push(novoItem);

        renderizarListaEquipamentos();
        atualizarSomaEquipamentos();
        select.value = "";
      }

      function renderizarListaEquipamentos() {
        const containerLista = document.getElementById("area-selecionados");
        const divLista = document.getElementById("listaEquipsWeb");

        if (equipamentosSelecionados.length === 0) {
          containerLista.classList.add("hidden");
          return;
        }

        containerLista.classList.remove("hidden");
        divLista.innerHTML = ""; // Limpa para reconstruir a lista atualizada

        equipamentosSelecionados.forEach((item, index) => {
          const div = document.createElement("div");
          div.className = "equip-item";
          div.style.padding = "10px";
          div.style.marginBottom = "5px";
          div.style.border = "1px solid #ddd";

          div.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span><strong>${item.nome}</strong> <small>(${item.lab})</small></span>
                    <button onclick="removerEquipamento('${item.idUnico}')" 
                            style="background: #dc3545; padding: 2px 8px; font-size: 0.7rem;">Excluir</button>
                </div>
                <div style="margin-top: 8px;">
                    <label style="display: inline; font-size: 0.8rem;">Horas de uso:</label>
                    <input type="number" 
                        value="${item.horas || ""}" 
                        onchange="atualizarHoras('${item.idUnico}', this.value)"
                        placeholder="0" 
                        style="width: 70px; padding: 4px; margin-left: 5px;">
                </div>
            `;
          divLista.appendChild(div);
        });
      }

      // Função para ALTERAR dinamicamente o valor dentro do objeto na lista
      function atualizarHoras(id, valor) {
        const item = equipamentosSelecionados.find((e) => e.idUnico === id);
        if (item) {
          item.horas = parseInt(valor) || 0;
          // Sempre que mudar o valor de um item, recalcula o total
          sincronizarSomaHoras();
        }
      }

      // Função para EXCLUIR o item da lista
      function removerEquipamento(id) {
        equipamentosSelecionados = equipamentosSelecionados.filter(
          (e) => e.idUnico !== id,
        );
        renderizarListaEquipamentos();
        // Após remover, a soma deve diminuir automaticamente
        sincronizarSomaHoras();
        atualizarSomaEquipamentos();
      }

      function sincronizarSomaHoras() {
        // Soma as horas de todos os objetos da classe ItemEquipamento na lista
        const somaTotalHoras = equipamentosSelecionados.reduce(
          (acc, item) => acc + (item.horas || 0),
          0,
        );

        // Localiza os inputs de ambas as calculadoras
        const inputHoraServico = document.getElementById("horaServico");
        const inputHoraEquipamentoProjeto =
          document.getElementById("horaEquipamento");

        // Atualiza o campo da aba de Serviços
        if (inputHoraServico) {
          inputHoraServico.value = somaTotalHoras;
        }

        // Atualiza o campo da aba de Projetos (Corrigido para id="horaEquipamento")
        if (inputHoraEquipamentoProjeto) {
          inputHoraEquipamentoProjeto.value = somaTotalHoras;
        }

        console.log(
          "Sincronização em tempo real concluída: " +
            somaTotalHoras +
            " horas totais.",
        );
      }

      function validarEGerar() {
        const servidor = document.getElementById("nomeServidor").value.trim();
        const divisao = document.getElementById("nomeDivisao").value.trim();
        const projeto = document.getElementById("nomeProjeto").value.trim();
        const horasSuperior = parseFloat(document.getElementById("horasSuperior").value) || 0;
        const horasIntermediario = parseFloat(document.getElementById("horasIntermediario").value) || 0;
        const custoRH = (horasSuperior * fatoresPlanilha.valor_hora_pessoal_nivel_superior) + (horasIntermediario * fatoresPlanilha.valor_hora_pessoal_nivel_medio);

        if (!servidor || !divisao) {
          alert("Nome do Servidor e Divisão são obrigatórios!");
          return;
        }

        if (laboratoriosSelecionados.length === 0) {
          alert("Adicione pelo menos um laboratório!");
          return;
        }

        if (equipamentosSelecionados.length === 0) {
          alert("É obrigatório incluir pelo menos 1 equipamento!");
          return;
        }

        let areaTotalM2 = laboratoriosSelecionados.reduce(
          (acc, lab) => acc + lab.area,
          0,
        );
        let depPredial = 0,
          consPredial = 0,
          servicoSuprimentos = 0,
          duracaoTexto = "";
        let depEquip = 0,
          manEquip = 0,
          duracaoTextoEquip = "";

        let consMensal =
          (fatoresPlanilha.valor_m2_contru *
            (fatoresPlanilha.percentual_areas_servi + 1)) /
          (fatoresPlanilha.vida_util_predial * 12);

        let depMensal =
          (fatoresPlanilha.valor_m2_contru *
            (fatoresPlanilha.percentual_areas_servi + 1)) /
          (fatoresPlanilha.vida_util_predial * 12);

        if (tipoGlobal === "serviços") {
          const horaServico = parseFloat(
            document.getElementById("horaServico").value,
          );
          if (isNaN(horaServico) || horaServico <= 0) {
            alert("Informe as horas!");
            return;
          }

          depPredial = areaTotalM2 * (depMensal / 200) * horaServico;
          consPredial = areaTotalM2 * (consMensal / 200) * horaServico;
          servicoSuprimentos =
            (areaTotalM2 *
              (0.005 * horaServico) *
              (1 + fatoresPlanilha.percentual_areas_servi) *
              fatoresPlanilha.total_serv_supri) /
            fatoresPlanilha.area_total_construida /
            12;
          depEquip =
            (1 / fatoresPlanilha.vida_util_horas_equipamentos) *
            horaServico *
            somaTotalEquip;
            manEquip= somaTotalEquip*0.05*horaServico/1500;

          duracaoTexto = horaServico + " horas";
        } else {
          if (!projeto) {
            alert("O nome do Projeto é obrigatório!");
            return;
          }
          const mesesProjeto = parseFloat(
            document.getElementById("mesesProjeto").value,
          );
          const totalHorasEquip =
            parseFloat(document.getElementById("horaEquipamento").value) || 0;
          if (isNaN(mesesProjeto) || mesesProjeto <= 0) {
            alert("Informe os meses!");
            return;
          }

          depPredial = areaTotalM2 * depMensal * mesesProjeto;

          consPredial = areaTotalM2 * consMensal * mesesProjeto;

          //usando a planilha para calcular serviço e suprimentos, multiplicando o valor por m2 e duração em meses
          servicoSuprimentos =
            (areaTotalM2 *
              mesesProjeto *
              (1 + fatoresPlanilha.percentual_areas_servi) *
              fatoresPlanilha.total_serv_supri) /
            fatoresPlanilha.area_total_construida /
            12;

          depEquip =
            (1 / fatoresPlanilha.vida_util_horas_equipamentos) *
            totalHorasEquip *
            somaTotalEquip;
            manEquip= somaTotalEquip*0.05*totalHorasEquip/1500;

          duracaoTexto = mesesProjeto + " meses e " + totalHorasEquip + " horas de equipamento";
        }

        // Preencher relatório
        document.getElementById("res-servidor").innerText = servidor;
        document.getElementById("res-tipo").innerText =
          tipoGlobal.toUpperCase();
        document.getElementById("res-divisao").innerText = divisao;
        document.getElementById("res-duracao").innerText = duracaoTexto;
        document.getElementById("res-area").innerText = areaTotalM2.toFixed(2);
        // Preenche os novos campos de horas no relatório
        document.getElementById("res-horas-sup").innerText = horasSuperior;
        document.getElementById("res-horas-int").innerText = horasIntermediario;

        const listaResLab = document.getElementById("res-lista-laboratorios");
        listaResLab.innerHTML = "";
        laboratoriosSelecionados.forEach((lab) => {
          const li = document.createElement("li");
          li.innerText = `${lab.nome} (${lab.area.toFixed(2)} m²)`;
          listaResLab.appendChild(li);
        });

        const listaResEq = document.getElementById("res-lista-equipamentos");
        listaResEq.innerHTML = "";
        equipamentosSelecionados.forEach((eq) => {
          const li = document.createElement("li");
          li.innerText = `${eq.nome} (${eq.ano || "N/A"})`;
          listaResEq.appendChild(li);
        });

        const f = (n) =>
          n.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          });

        document.getElementById("somaHorasPessoal").innerText = f(custoRH);
        document.getElementById("res-dep").innerText = f(depPredial);
        document.getElementById("res-cons").innerText = f(consPredial);
        document.getElementById("res-suprimentos").innerText =
          f(servicoSuprimentos);
        document.getElementById("res-dep-equip").innerText = f(depEquip);
        document.getElementById("res-man-equip").innerText = f(manEquip);

        document.getElementById("data-geracao").innerText =
          new Date().toLocaleString("pt-BR");
        document.getElementById("res-projeto-linha").style.display =
          tipoGlobal === "projetos" ? "block" : "none";
        if (tipoGlobal === "projetos")
          document.getElementById("res-projeto").innerText = projeto;

        document.getElementById("formulario-dados").classList.add("hidden");
        document.getElementById("relatorio-final").classList.remove("hidden");
             
      }
      function voltarParaEdicao() {
    // Esconde o relatório
    document.getElementById("relatorio-final").classList.add("hidden");
    // Mostra o formulário com os dados preservados
    document.getElementById("formulario-dados").classList.remove("hidden");
      }
