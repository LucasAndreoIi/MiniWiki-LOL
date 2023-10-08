"use strict";
let elemento = document.getElementById("skillsDescText");
let elemento2 = document.getElementById("skillsdesch2");
let champskill1 = document.getElementById("skillsett1");
let champskill2 = document.getElementById("skillsett2");
let champskill3 = document.getElementById("skillsett3");
let champskill4 = document.getElementById("skillsett4");
let champskill5 = document.getElementById("skillsett5");
let background = document.getElementById("miolo");
let background2 = document.getElementById("corpo");
let lore = document.getElementById("lore");
let nome = document.getElementById("nomechamp");
let desc = document.getElementById("descChamp");


document.getElementById("skillsett1").addEventListener("click", function(){
    if(champskill1.id == "skillvlad1"){
        elemento2.innerHTML = "PACTO VERMELHO";
        elemento.innerHTML = "Cada 30 pontos de Vida adicional concedem 1 de Poder de Habilidade a Vladimir, e cada 1 ponto de Poder de Habilidade concede a ele 1,6 de Vida adicional (não cumulativos entre si).";
    }else if(champskill1.id == "skillsett1"){
        elemento2.innerHTML = "OUSADIA DA ARENA";
        elemento.innerHTML = "Os ataques básicos de Sett alternam entre socos de direita e esquerda. Socos de direita são levemente mais fortes e rápidos. Como Sett odeia perder, recebe Regeneração de Vida adicional com base na Vida perdida.";
    }else if(champskill1.id == "skillLeblanc1"){
        elemento2.innerHTML = "IMAGEM-ESPELHO";
        elemento.innerHTML = "Quando a Vida de LeBlanc está abaixo de 40%, ela fica invisível por 1s e cria uma Imagem-Espelho que não causa dano e dura até 8s.";
    }else if(champskill1.id == "skilldarius1"){
        elemento2.innerHTML = "HEMORRAGIA";
        elemento.innerHTML = "Os Ataques e Habilidades de dano de Darius fazem os inimigos sangrarem, causando Dano Físico ao longo de 5s e acumulando até 5 vezes. Darius se enfurece e recebe uma grande quantidade de Dano de Ataque quando o alvo alcança o máximo de acúmulos.";
    }else if(champskill1.id == "skillsamira1"){
        elemento2.innerHTML = "IMPULSO AUDACIOSO";
        elemento.innerHTML = "Samira gera um combo conforme Ataca ou conjura habilidades de forma alternada. Seus Ataques corpo a corpo causam Dano Mágico adicional. Os Ataques de Samira contra inimigos sob efeitos Imobilizadores a farão avançar ao Alcance de Ataque dela. Se o inimigo estiver afetado por Arremesso ao ar, ela mantém o Arremesso ao ar por um curto período.";
    }
});
document.getElementById("skillsett2").addEventListener("click", function(){
    if(champskill2.id == "skillvlad2"){
        elemento2.innerHTML = "TRANSFUSÃO";
        elemento.innerHTML = "Vladimir rouba vida do inimigo-alvo. Quando sua reserva estiver cheia, Transfusão terá os benefícios de dano e cura drasticamente aumentados por um breve período.";
    }else if(champskill2.id == "skillsett2"){
        elemento2.innerHTML = "PANCADARIA";
        elemento.innerHTML = "Os próximos dois ataques de Sett causam dano adicional com base na Vida máxima do alvo. Ele também recebe Velocidade de Movimento enquanto se move em direção a Campeões inimigos.";
    }else if(champskill2.id == "skillLeblanc2"){
        elemento2.innerHTML = "SIGILO DE MALÍCIA";
        elemento.innerHTML = "LeBlanc projeta um Sigilo, causando dano e marcando o alvo por 3,5s. Causar dano ao alvo marcado com qualquer Habilidade detona o Sigilo, causando dano adicional. Se qualquer parte dessa combinação abater o alvo, LeBlanc restitui o custo de Mana e parte do Tempo de Recarga restante desta Habilidade.";
    }else if(champskill2.id == "skilldarius2"){
        elemento2.innerHTML = "DIZIMAR";
        elemento.innerHTML = "Darius pega impulso e golpeia com seu machado em um movimento circular. Os inimigos atingidos pela lâmina recebem mais dano do que aqueles atingidos pelo cabo. Darius cura a si mesmo com base nos Campeões inimigos e monstros grandes atingidos pela lâmina.";
    }else if(champskill2.id == "skillsamira2"){
        elemento2.innerHTML = "TALENTO NATURAL";
        elemento.innerHTML = "Samira dispara um projétil ou golpeia com a espada, causando dano. Se a habilidade for conjurada durante Ímpeto Indomável, ela atinge todos os inimigos no caminho.";
    }
});
document.getElementById("skillsett3").addEventListener("click", function(){
    if(champskill3.id == "skillvlad3"){
        elemento2.innerHTML = "POÇA DE SANGUE";
        elemento.innerHTML = "Vladimir mergulha numa poça de sangue, tornando-se inalvejável por 2s. Além disso, inimigos na poça sofrem redução de Velocidade de Movimento e Vladimir drena Vida deles.";
    }else if(champskill3.id == "skillsett3"){
        elemento2.innerHTML = "CASCA-GROSSA";
        elemento.innerHTML = "O dano que Sett sofre é armazenado passivamente como Ousadia. Ao conjurar a habilidade, Sett consome toda a Ousadia armazenada em troca de um escudo e desfere um soco em uma área, causando Dano Verdadeiro no centro e Dano Físico nas laterais.";
    }else if(champskill3.id == "skillLeblanc3"){
        elemento2.innerHTML = "DISTORÇÃO";
        elemento.innerHTML = "LeBlanc avança até um local, causando dano aos inimigos próximos de seu destino. Pelos próximos 4s, ativar Distorção novamente faz com que LeBlanc retorne até sua posição inicial.";
    }else if(champskill3.id == "skilldarius3"){
        elemento2.innerHTML = "ATAQUE MUTILADOR";
        elemento.innerHTML = "O próximo ataque de Darius acerta uma artéria importante do inimigo. Enquanto a vítima sangra, a Velocidade de Movimento dela é reduzida.";
    }else if(champskill3.id == "skillsamira3"){
        elemento2.innerHTML = "VORAGEM AFIADA";
        elemento.innerHTML = "Samira gira a espada ao seu redor, causando dano e destruindo projéteis inimigos.";
    }
});
document.getElementById("skillsett4").addEventListener("click", function(){
    if(champskill4.id == "skillvlad4"){
        elemento2.innerHTML = "MARÉ DE SANGUE";
        elemento.innerHTML = "Vladimir paga com a própria Vida para carregar uma reserva de sangue que, quando desferida, causa dano em área ao seu redor, mas pode ser bloqueada por unidades inimigas.";
    }else if(champskill4.id == "skillsett4"){
        elemento2.innerHTML = "QUEBRA-CRÂNIO";
        elemento.innerHTML = "Sett puxa todos os inimigos de cada lado seu, causando dano e atordoando. Caso haja inimigos somente de um lado, eles sofrem redução de velocidade em vez de atordoamento.";
    }else if(champskill4.id == "skillLeblanc4"){
        elemento2.innerHTML = "CORRENTES ETÉREAS";
        elemento.innerHTML = "LeBlanc lança uma corrente que prende a primeira unidade atingida. Se o alvo permanecer preso por 1,5s, ele é enraizado e sofre dano adicional.";
    }else if(champskill4.id == "skilldarius4"){
        elemento2.innerHTML = "APREENDER";
        elemento.innerHTML = "Darius afia seu machado, fazendo com que seu Dano Físico ignore passivamente um percentual da Armadura do alvo. Quando ativado, Darius ataca seus inimigos com o gancho do seu machado e os puxa em sua direção.";
    }else if(champskill4.id == "skillsamira4"){
        elemento2.innerHTML = "ÍMPETO INDOMÁVEL";
        elemento.innerHTML = "Samira avança e atravessa um inimigo (incluindo estruturas), cortando os inimigos atravessados e recebendo Velocidade de Ataque. Abater um Campeão inimigo reinicia o Tempo de Recarga da habilidade.";
    }
});
document.getElementById("skillsett5").addEventListener("click", function(){
    if(champskill5.id == "skillvlad5"){
        elemento2.innerHTML = "HEMOPRAGA";
        elemento.innerHTML = "Vladimir infecta uma área com uma praga virulenta. Inimigos afetados recebem dano crescente enquanto durar o efeito. Depois de alguns segundos, Hemopraga causa Dano Mágico aos inimigos infectados e cura Vladimir a cada Campeão inimigo atingido.";
    }else if(champskill5.id == "skillsett5"){
        elemento2.innerHTML = "HORA DO SHOW";
        elemento.innerHTML = "Sett carrega um Campeão inimigo pelos ares e o arremessa no chão, causando dano e redução de velocidade a todos os inimigos que estiverem próximos ao local de aterrissagem.";
    }else if(champskill5.id == "skillLeblanc5"){
        elemento2.innerHTML = "MÍMICA";
        elemento.innerHTML = "Leblanc conjura uma versão copiada de uma de suas habilidades.";
    }else if(champskill5.id == "skilldarius5"){
        elemento2.innerHTML = "GUILHOTINA DE NOXUS";
        elemento.innerHTML = "Darius salta na direção de um Campeão inimigo e o atinge com um golpe letal, causando Dano Verdadeiro. Este dano aumenta a cada acúmulo de Hemorragia no alvo. Se Guilhotina de Noxus causar o golpe final, seu Tempo de Recarga é zerado por um breve momento.";
    }else if(champskill5.id == "skillsamira5"){
        elemento2.innerHTML = "GATILHO INFERNAL";
        elemento.innerHTML = "Samira dispara uma saraivada de tiros, atingindo todos os inimigos ao redor dela.";
    }
});

//SETT
document.getElementById("btnsett").addEventListener("click", function(){
    background.style.backgroundImage = `url(../Imagens/Sett/sett.jpg)`;
    background2.style.backgroundImage = `url(../Imagens/Sett/sett.jpg)`;
    champskill1.id = "skillsett1";
    champskill2.id = "skillsett2";
    champskill3.id = "skillsett3";
    champskill4.id = "skillsett4";
    champskill5.id = "skillsett5";
    elemento.innerHTML = "";
    elemento2.innerHTML = "";
    nome.innerHTML = "SETT";
    desc.innerHTML = "O CHEFE";
    lore.innerHTML = "Líder de parte do próspero submundo do crime em Ionia, Sett deve todo o seu sucesso à guerra contra Noxus. Mesmo estreando como um simples desafiante nas arenas de combate em Navori, ele logo conquistou notoriedade com sua força bruta e capacidade de suportar dor contínua e extrema. Agora, após superar todos os combatentes locais, Sett chegou até o topo e reina sobre as arenas onde um dia lutara.";
});
//VLADIMIR
document.getElementById("btnvlad").addEventListener("click", function(){
    champskill1.id = "skillvlad1";
    champskill2.id = "skillvlad2";
    champskill3.id = "skillvlad3";
    champskill4.id = "skillvlad4";
    champskill5.id = "skillvlad5";
    background.style.backgroundImage = `url(../Imagens/Vladmir/Vladmir.jpg)`;
    background.style.backgroundRepeat = "none";
    background.style.backgroundSize = "cover";
    background2.style.backgroundImage = `url(../Imagens/Vladmir/Vladmir.jpg)`;
    background2.style.backgroundRepeat = "none";
    background2.style.backgroundSize = "cover";
    lore.innerHTML = "Um demônio sedento pelo sangue dos mortais, Vladimir tem influenciado os acontecimentos de Noxus desde os primórdios do império. Além de ter estendido sua vida por meios não naturais, sua maestria em hemomancia o permite controlar as mentes e corpos de outros como se fossem os seus. Nos exuberantes salões da aristocracia noxiana, isso possibilitou que construísse um culto fanático de personalidades ao seu redor, tudo isso para que ele possa sangrar seus inimigos nos becos escuros.";
    elemento.innerHTML = "";
    elemento2.innerHTML = "";
    nome.innerHTML = "VLADIMIR";
    desc.innerHTML = "O SANGUINÁRIO ESCARLATE";
});

//LEBLANC
document.getElementById("btnleblanc").addEventListener("click", function(){
    champskill1.id = "skillLeblanc1";
    champskill2.id = "skillLeblanc2";
    champskill3.id = "skillLeblanc3";
    champskill4.id = "skillLeblanc4";
    champskill5.id = "skillLeblanc5";
    background.style.backgroundImage = `url(../Imagens/Leblanc/Leblanc.jpg)`;
    background.style.backgroundRepeat = "none";
    background.style.backgroundSize = "cover";
    background2.style.backgroundImage = `url(../Imagens/Leblanc/Leblanc.jpg)`;
    background2.style.backgroundRepeat = "none";
    background2.style.backgroundSize = "cover";
    lore.innerHTML = "Misteriosa mesmo para os outros membros da Rosa Negra, LeBlanc é somente um dos muitos nomes de uma mulher pálida que tem manipulado pessoas e eventos desde os primeiros dias de Noxus. Usando sua magia para espelhar a si mesma, a feiticeira pode aparecer para qualquer um, em qualquer lugar e mesmo em vários lugares ao mesmo tempo. Sempre planejando às escondidas, as verdadeiras motivações de LeBlanc são tão inescrutáveis quanto sua identidade inconstante.";
    elemento.innerHTML = "";
    elemento2.innerHTML = "";
    nome.innerHTML = "LEBLANC";
    desc.innerHTML = "A FARSANTE";
});

//DARIUS
document.getElementById("btndarius").addEventListener("click", function(){
    champskill1.id = "skilldarius1";
    champskill2.id = "skilldarius2";
    champskill3.id = "skilldarius3";
    champskill4.id = "skilldarius4";
    champskill5.id = "skilldarius5";
    background.style.backgroundImage = `url(../Imagens/Darius/Darius.jpg)`;
    background.style.backgroundRepeat = "none";
    background.style.backgroundSize = "cover";
    background2.style.backgroundImage = `url(../Imagens/Darius/Darius.jpg)`;
    background2.style.backgroundRepeat = "none";
    background2.style.backgroundSize = "cover";
    lore.innerHTML = "Não há símbolo maior do poder de Noxus do que Darius, o mais temido e experiente comandante da nação. Vindo de origens humildes para se tornar a Mão de Noxus, ele corta seu caminho através dos inimigos do império; muitos dos quais são, inclusive, noxianos. Sabendo que ele nunca duvida da integridade de sua causa e que nunca hesita assim que seu machado é levantado, aqueles que desafiam o comandante da Legião Trifária não esperam por misericórdia.";
    elemento.innerHTML = "";
    elemento2.innerHTML = "";
    nome.innerHTML = "DARIUS";
    desc.innerHTML = "A MÃO DE NOXUS";
});

//Samira
document.getElementById("btnsamira").addEventListener("click", function(){
    champskill1.id = "skillsamira1";
    champskill2.id = "skillsamira2";
    champskill3.id = "skillsamira3";
    champskill4.id = "skillsamira4";
    champskill5.id = "skillsamira5";
    background.style.backgroundImage = `url(../Imagens/Samira/Samira.jpg)`;
    background.style.backgroundRepeat = "none";
    background.style.backgroundSize = "cover";
    background2.style.backgroundImage = `url(../Imagens/Samira/Samira.jpg)`;
    background2.style.backgroundRepeat = "none";
    background2.style.backgroundSize = "cover";
    lore.innerHTML = "Samira encara a morte nos olhos com confiança inabalável, procurando diversão e adrenalina aonde quer que vá. Depois que seu lar em Shurima foi destruído quando ainda era criança, ela encontrou sua verdadeira vocação em Noxus, onde conquistou fama como a guerreira valente e estilosa que aceitava missões arriscadas do mais alto calibre. Empunhando pistolas de pólvora negra e uma espada personalizada, Samira prospera em circunstâncias de vida ou morte, eliminando – com estilo e rapidez – qualquer um que cruze seu caminho.";
    elemento.innerHTML = "";
    elemento2.innerHTML = "";
    nome.innerHTML = "SAMIRA";
    desc.innerHTML = "A ROSA DO DESERTO";
});