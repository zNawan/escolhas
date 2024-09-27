let suaidade;
let corpo;
let gênero
let titulo = "Nerko One";
let funk;
let pagode;
let sertanejo;
let musicas = {
  menor10:{
    funk: "Eu só quero ser Feliz - Cidinho e Doca",
    pagode: "Ta vendo aquela lua - Exaltasamba",
    sertanejo: "O Sol - Vitor Kley"
  },
  entre10e14:{
    funk: "Deu onda - MC G15",
    pagode: "Deixa acontece - Grupo revelação",
    sertanejo: "Com mel - Gustavo Lima"
  },
  entre14e16:{
    funk: "Sou de todas - JG TG",
    pagode: "Fica - Ferrugem",
    sertanejo: "Aquela pessoa - Henrique e Juliano"
  },
  entre16e18:{
    funk: "50 Tons - MC DU Black",
    pagode: "Sinais - Sorriso maroto",
    sertanejo: "Propaganda - Jorge e Mateus"
  },
  maior18:{
    funk: "Falei pra elas - MC G15",
    pagode: "Melhor eu ir - Pericles",
    sertanejo: "Papel de carta - Luan santana"
  }
};

let botao;

function setup() {
  createCanvas(850, 400).position(100,100);
  titulo = "Nerko One";
  corpo = "New Amsterdam";
  genero = "Caveat";
  createSpan("Qual a sua idade? 👻").position(580,530).addClass("esconde");
  suaidade = createInput("").position(590,585).addClass("esconde");
  funk = createCheckbox("Você gosta de musicas no estilo Funk?").position(100,600).addClass("esconde");
  pagode = createCheckbox("Você gosta de musicas no estilo pagode").position(100,650).addClass("esconde");
  sertanejo = createCheckbox("Você gosta de musicas no sertanejo?").position(100,700).addClass("esconde");

  botao = createButton("APERTA MEU BOTÃO 😳").position(width/2, 520);
  botao.mousePressed(bota);
  botao.addClass("botao");
}

function bota(){
  selectAll('.esconde').forEach((el) => el.removeClass('esconde'));
  botao.hide();
}

function draw() {
  background("white");
  let idade = parseInt(suaidade.value());
  let checkfunk = funk.checked();
  let checksertanejo = sertanejo.checked();
  let checkpagode = pagode.checked();
  let musica = "Insira suas preferências";
  if (suaidade.value() !== ""){
  musica = mostramusica(idade, checkfunk, checksertanejo, checkpagode)
}
fill("black");
  textAlign(CENTER, CENTER);
  textSize(60);
  text("MELHOR INDICADOR DE MUSICAS 2024",width/2,30);
  textFont(corpo);

  fill("black");
  stroke("lightblue");
  textFont(corpo);
  textAlign(CENTER,CENTER);
  textSize(40);
  text(musica, width/2, height/2);
}

function mostramusica(idade, checkfunk, checksertanejo, checkpagode){
  if (isNaN(idade)){
  return "Idade Inválida"
  }
  if (idade < 5){
    return "Sai daqui, você é uma criança🏼🍼"
  } else
    if (idade > 120){
      return "Já morreu, enterra 💀"
    }
  if (idade >= 5 && idade < 10){
    if (checkfunk){
      return musicas["menor10"]["funk"];
    }
    if (checksertanejo){
      return musicas["menor10"]["sertanejo"];
    }
    if (checkpagode){
      return musicas["menor10"]["pagode"];
    }
  }
  else if (idade >= 10 && idade < 14){
    if (checkfunk){
      return musicas["entre10e14"]["funk"];
    }
    if (checksertanejo){
      return musicas["entre10e14"]["sertanejo"];
    }
    if (checkpagode){
      return musicas["entre10e14"]["pagode"];
    }
  }
  else if (idade >= 14 && idade < 16){
    if (checkfunk){
      return musicas["entre14e16"]["funk"];
    }
    if (checksertanejo){
      return musicas["entre14e16"]["sertanejo"];
    }
    if (checkpagode){
      return musicas["entre14e16"]["pagode"];
    }
  }
  else if (idade >= 16 && idade < 18){
    if (checkfunk){
      return musicas["entre16e18"]["funk"];
    }
    if (checksertanejo){
      return musicas["entre16e18"]["sertanejo"];
    }
    if (checkpagode){
      return musicas["entre16e18"]["pagode"];
    }
  }
  else if (idade >= 18){
    if (checkfunk){
      return musicas["maior18"]["funk"];
    }
    if (checksertanejo){
      return musicas["maior18"]["sertanejo"];
    }
    if (checkpagode){
      return musicas["maior18"]["pagode"];
    }
  } return "Coloca alguma coisa ai fiot";
}