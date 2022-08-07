// Como podemos melhorar o esse código usando TS? 
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["Padeiro"] = 3] = "Padeiro";
})(Profissao || (Profissao = {}));
var pessoa1 = {
    nome: 'Maria',
    idade: 29,
    profissao: Profissao.Atriz
};
var pessoa2 = {
    nome: 'roberto',
    idade: 19,
    profissao: Profissao.Padeiro
};
var pessoa3 = {
    nome: 'laura',
    idade: 32,
    profissao: Profissao.Atriz
};
var pessoa4 = {
    nome: 'carlos',
    idade: 19,
    profissao: Profissao.Padeiro
};
