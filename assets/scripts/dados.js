const categorias = [
    {
        "idCategoria": 1,
        "Descricao": "Gestão",
    },
    {
        "idCategoria": 2,
        "Descricao": "Cliente",
    },
    {
        "idCategoria": 3,
        "Descricao": "RP",
    },
]

const motivos = [
    {
        "idMotivo": 1,
        "Descricao": "Planejamento",
        "idCategoria": 1,
    },
    {
        "idMotivo": 2,
        "Descricao": "Financeiro",
        "idCategoria": 1,
    },
    {
        "idMotivo": 3,
        "Descricao": "Financeiro",
        "idCategoria": 2,
    },
]

const produtos = [
    {
        "idproduto": 1,
        "Descricao": "Impressora",
        "estoque": 35,
        "estoqueMinimo": 10,
        "unidade": "Un",
        "preco": 350,
    },
    {
        "idproduto": 2,
        "Descricao": "Folha A4",
        "estoque": 75,
        "estoqueMinimo": 10,
        "unidade": "Un",
        "preco": 7,
    },
    {
        "idproduto": 3,
        "Descricao": "Agenda",
        "estoque": 90,
        "estoqueMinimo": 10,
        "unidade": "Un",
        "preco": 15,
    },
    {
        "idproduto": 4,
        "Descricao": "Notebook",
        "estoque": 40,
        "estoqueMinimo": 10,
        "unidade": "Un",
        "preco": 480,
    },
]

const departamentos = [
    {
        "idDep": 1,
        "Descricao": "Secretaria da Educação",
        "responsavel": "Ana",
    },
    {
        "idDep": 2,
        "Descricao": "Relações Públicas",
        "resposavel": "Luiz",
    },
    {
        "idDep": 3,
        "Descricao": "Secretaria da Fazenda",
        "responsavel": "Fernando",
    },
]

const funcionarios = [
    {
        "idFunc": 1,
        "nomeFunc": "José Antonio",
        "cargoFunc": "Coordenadora",
    },
    {
        "idFunc": 2,
        "nomeFunc": "Carla Juliana",
        "cargoFunc": "Repositor",
    },
    {
        "idFunc": 3,
        "nomeFunc": "Luiz Carlos",
        "cargoFunc": "Supervisor",
    },
]