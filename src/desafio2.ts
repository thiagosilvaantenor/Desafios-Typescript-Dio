// Como podemos melhorar o esse código usando TS? 

interface Pessoas {
  nome: string,
  idade: number,
  profissao: Profissao,
}

enum Profissao{
  Professora,
  Atriz,
  Desenvolvedora,
  Padeiro
}

const pessoa1: Pessoas = {
  nome: 'Maria',
  idade: 29,
  profissao:Profissao.Atriz,
}


const pessoa2: Pessoas = {
  nome: 'roberto',
  idade: 19,
  profissao: Profissao.Padeiro,
}

const pessoa3: Pessoas = {
  nome: 'laura',
  idade: 32,
  profissao: Profissao.Atriz,
}

const pessoa4: Pessoas = {
  nome: 'carlos',
  idade: 19,
  profissao: Profissao.Padeiro,
}