var roteiro = "<html><head><title>Gulliver Traveller - Roteiros</title></head><body><b>->1 - Roteiros para *São Paulo*</b><br>A Terra da Garoa!<br>Fundada em 25 de janeiro de 1554 a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil e aqui vão 3 dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br>#Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>#Roteiro B | Região: Centro<br>Catedral da Sé; Pátio do Colégio; Rua Augusta<br>#Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br> <b>->2 - Roteiros para *Las Vegas*</b><br>Viva Las Vegas!<br>       A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905 e é considerada uma cidade, oficialmente, desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br>#Roteiro A | Região: Las Vegas Boulevard South<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>#Roteiro B | Região: Downtown<br>; Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado; <br>#Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b><br>Privet!<br>A capital Russa fica situada às margens do Rio Moscou e apesar de ser a cidade mais cosmopolita da Rússia, conta com grande resguardo de sua história soviética<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>#Roteiro B | Região: Centro<br>Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br>#Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  <br></body></html>";

function buscaCidades() {
    var busca1 = roteiro.search("São Paulo");
    var cidade1 = roteiro.substr(busca1, 9);
    document.getElementById("cidade1").innerHTML = cidade1;

    var busca2 = roteiro.search("Las Vegas");
    var cidade2 = roteiro.substr(busca2, 9);
    document.getElementById("cidade2").innerHTML = cidade2;

    var busca3 = roteiro.search("Moscou");
    var cidade3 = roteiro.substr(busca3, 6);
    document.getElementById("cidade3").innerHTML = cidade3;
}

function buscaRoteiroA() {
    var busca1 = roteiro.search("Região: Avenida Paulista");
    var roteiro1 = roteiro.substr(busca1, 65);
    document.getElementById("roteiro1").innerHTML = roteiro1;

    var busca2 = roteiro.search("Região: Las Vegas Boulevard South");
    var roteiro2 = roteiro.substr(busca2, 96);
    document.getElementById("roteiro2").innerHTML = roteiro2;

    var busca3 = roteiro.search("Região: Praça Vermelha");
    var roteiro3 = roteiro.substr(busca3, 100);
    document.getElementById("roteiro3").innerHTML = roteiro3;
}

function quantidadeLocais() {
    var busca1 = roteiro.search("MASP");
    var quantidade1 = roteiro.substr(busca1, 33).split(';');
    document.getElementById("quantidade1").innerHTML = quantidade1.length;

    var busca2 = roteiro.search("Fonte");
    var quantidade2 = roteiro.substr(busca2, 55).split(';');
    document.getElementById("quantidade2").innerHTML = quantidade2.length;

    var busca3 = roteiro.search("Museu");
    var quantidade3 = roteiro.substr(busca3, 70).split(';');
    document.getElementById("quantidade3").innerHTML = quantidade3.length;
}

function centroSP() {
    var busca = roteiro.search("Catedral");
    var centroSP = roteiro.substr(busca, 45).split(';');
    document.getElementById("centroSP").innerHTML = centroSP;
}

function centroLA() {
    var busca = roteiro.search("Los");
    var centroLA = roteiro.substr(busca, 100).split(';');

    if(centroLA.length < 3) {
        document.getElementById("centroLA").innerHTML = "Sem resultados";
    }else {
        document.getElementById("centroLA").innerHTML = centroLA;
    }
}

function centroLV() {
    var busca = roteiro.search("Fremont");
    var centroSP = roteiro.substr(busca, 65).split(';');
    document.getElementById("centroLV").innerHTML = centroSP;
}
