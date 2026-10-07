/* ==========================================================================
   CONFIG.JS  —  ÚNICO ARQUIVO QUE VOCÊ EDITA PARA CRIAR UM NOVO CONVITE
   ==========================================================================

   COMO USAR:
   1. Troque apenas os arquivos usados na pasta /assets (mantendo os mesmos nomes).
   2. Edite os valores abaixo (nome, WhatsApp, mapa, cores, etc.).
   3. Suba no GitHub. Pronto — não precisa mexer no index.html.

   As cores no campo "tema" podem ser nome ('pink'), hexadecimal ('#f6c1cd')
   ou rgb('rgb(246,193,205)'). Use o formato que preferir.

   DICA: para reposicionar os botões da tela principal, abra o convite no
   navegador com ?editor=1 no final do link (ex.: .../index.html?editor=1),
   arraste os botões e clique em "Copiar código". Cole o resultado no campo
   "hotspots" aqui embaixo
   ========================================================================== */

window.CONFIG = {

  // ENGINE V4 MODULAR

  // ----- IDENTIDADE DO CONVITE -------------------------------------------
  // Nome do aniversariante. Aparece no título da aba do navegador e nos
  // textos automáticos do convite.
  nome: "Maria Cecília",

  // ----- WHATSAPP (CONFIRMAR PRESENÇA) -----------------------------------
  // numero: DDI + DDD + número, SÓ DÍGITOS (sem +, espaço, parênteses ou traço).
  //         Ex.: 55 (Brasil) + 31 (DDD) + 985657116 -> "5531985657116"
  // mensagem: texto que já vem pré-preenchido quando a pessoa abre o WhatsApp.
  whatsapp: {
    numero: "5583993164384",
    mensagem: "Olá! Confirmo minha presença no aniversário da Maria Cecília."
  },

  // ----- LOCALIZAÇÃO (BOTÃO MAPA) ----------------------------------------
  // Link completo do Google Maps. Abra o local no Maps, clique em "Compartilar"
  // -> "Copiar link" e cole aqui (mantenha as aspas).
  mapa: "https://maps.app.goo.gl/vvgM1X1E4NPXBaC5A",

  // ----- QUAIS TELAS APARECEM --------------------------------------------
  // video:     true  -> toca o vídeo (assets/video.mp4) depois da abertura.
  //            false  -> pula direto da abertura para a tela principal.
  // Cada opção pode ser true ou false.
  // Quando estiver false, o hotspot, a tela e a opção do editor são removidos.
  telas: {
    video: true,
    whatsapp: true,
    localizacao: true,
    presentes: true,
    dresscode: true,
    manual: true,
    contagem: false
  },

  // ----- PIX OPCIONAL (SUGESTÕES DE PRESENTES) ---------------------------
  // ativo: true  -> cria uma área clicável na tela de presentes.
  //        false -> não cria a área de PIX e o convite continua como antes.
  // chave: é exatamente o texto que será copiado quando o convidado clicar.
  // posicao: ajuste pelo editor visual (?editor=1), escolhendo “PIX (copiar chave)”.
  pix: {
    ativo: true,
    chave: "michelcdssape2017@gmail.com",
    posicao: {"left":18.6402587110623,"top":71.8250896805022,"width":62.3194825778754,"height":3.481935095363479}
  },

  // ----- LOJAS SUGERIDAS (TELA DE PRESENTES) -----------------------------
// Cria um hotspot independente na tela de presentes. Ao clicar, abre uma
// janela elegante com os links das lojas.
// Ajuste a área pelo ?editor=1 escolhendo “Lojas sugeridas”.
lojas: {
  ativo: true,
  titulo: "Sugestões de lojas",
  texto: "Separamos algumas lojas como inspiração para quem desejar escolher um presente.",
  links: [
    {
      nome: "Bella's Store",
      url: "https://www.instagram.com/lojabellasstoreof?stkn=MWZyOHh3cGp1N3d2dQ==",
      descricao: "Ver no Instagram"
    },
    {
      nome: "Bella e Rica Acessórios",
      url: "https://www.instagram.com/bellaericaacessorios_pb?stkn=MWF4ZXU4emxucDFtMg==",
      descricao: "Ver no Instagram"
    },
    {
      nome: "ClosetB / moda gringa",
      url: "https://www.instagram.com/closetb_27?stkn=MTM5N29mN3lvdTZ5aQ==",
      descricao: "Ver no Instagram"
    },
    {
      nome: "Gata Pink - Moda Feminina",
      url: "https://www.instagram.com/gatapinkstore?stkn=MnlnaDJvMjV3Mzlq",
      descricao: "Ver no Instagram"
    },
    {
      nome: "Thay Soares",
      url: "https://www.instagram.com/usethaysoares?stkn=MXJ5cXh6eDNodjI4Yw==",
      descricao: "Ver no Instagram"
    },
    {
      nome: "Ablicia - Moda Gringa",
      url: "https://www.instagram.com/a.blicia?stkn=MWl5ajh4YWZobGV5ZA==",
      descricao: "Ver no Instagram"
    },
    {
      nome: "Realce Calçados-Sape",
      url: "https://www.instagram.com/realcecalcadossape?stkn=MXgwZXMxd3puN29tdA==",
      descricao: "Ver no Instagram"
    },
    {
      nome: "O boticario-Sape",
      url: "https://www.instagram.com/oboticariosape?stkn=YnZsZWVodGkzbDJ5",
      descricao: "Ver no Instagram"
    }
  ],
  posicao: {
    left: 16.8,
    top: 74.0,
    width: 66.0,
    height: 8.2
  }
},

  // ----- TEXTOS DOS BOTÕES -----------------------------------------------
  // Rótulos que aparecem nos botões. Edite livremente.
  textos: {
    abrir: "Toque para abrir",
    pularVideo: "Pular vídeo",
    voltar: "Voltar",
    ativarMusica: "Ativar música"
  },

  // ----- TEMA / CORES ----------------------------------------------------
  // cor:                 cor principal (barra do navegador mobile, acentos).
  // corBotaoVoltar:      fundo do botão "Voltar" (tela de presentes).
  // corTextoBotaoVoltar: texto do botão "Voltar".
  tema: {
    cor: "#f6c1cd",
    corBotaoVoltar: "rgba(255,255,255,.76)",
    corTextoBotaoVoltar: "#6b3a21"
  },


  // ----- BOTÕES DE VOLTAR -------------------------------------------------
  // mostrarTexto: true mostra “Voltar”; false deixa apenas a área clicável.
  // A posição pode ser alterada no editor ?editor=1.
  botoesVoltar: {
    presentes: { mostrarTexto:false, posicao: {"left":25.835788987619807,"top":87.28238997934795,"width":47.843450479233226,"height":5.498495288519727} },
    dresscode: { mostrarTexto:false, posicao: {"left":25.578603609225237,"top":89.76238084338961,"width":48.626213683107025,"height":4.388952189157708} },
    manual: { mostrarTexto:false, posicao: {"left":25.37411828574281,"top":86.88549995403928,"width":50.670926517571885,"height":5.309555171188598} }
  },

  // ----- POSIÇÃO DOS BOTÕES NA TELA PRINCIPAL ----------------------------
  // Valores em PORCENTAGEM da imagem (0 a 100). Para evitar mexer à mão,
  // use o editor (?editor=1) e cole o resultado aqui.
  //   left/top: canto superior esquerdo do botão
  //   width/height: tamanho do botão
    hotspots: {
        confirm: { left:23.60944295307581, top:64.72381217656003, width:13.509367818530352, height:7.421638542822543 },
        map: { left:43.558226024320525, top:64.83884550248719, width:12.544870809784289, height:7.487323330299423 },
        gift: { left:62.98461397951293, top:64.59789568749594, width:11.797118360623, height:8.183191974685592 },
        dress: { left:32.92012467551917, top:75.64507440505005, width:12.00160368410543, height:7.837950903820634 },
        manual: { left:54.1922910711663, top:75.6450831845603, width:12.206057807507985, height:8.068101374968661 },
        stores: { left:0, top:0, width:100, height:3 }
  },

  // ----- CONTAGEM REGRESSIVA ---------------------------------------------
  // Formato da data: ANO-MÊS-DIAT HORA:MINUTO:SEGUNDO (sem espaço antes do T).
  // Exemplo: "2026-10-03T16:00:00"
  // A posição pode ser ajustada no editor escolhendo "Contador (na tela)".
  // corNumero altera somente a cor dos números.
  // corLegenda altera a cor de Meses, Dias, Horas, Min e Seg.
  // Aceita hexadecimal, nome de cor ou rgb().
  contagem: {
    dataEvento: "2026-08-29T18:30:00",
    textoFinal: "A festa começou!",
    corNumero: "#ffffff",
    corLegenda: "#ffffff",
    posicao: { left:22.5175531649361, top:51.45224389795505, width:56.19169641074281, height:6.218642289127358 }
  },

  // ----- MÚSICA DE FUNDO -------------------------------------------------
  // volume: de 0 (mudo) a 1 (máximo). O padrão 0.30 é agradável e não
  //         briga com o áudio do vídeo.
  musica: {
    volume: 0.30
  }
};
