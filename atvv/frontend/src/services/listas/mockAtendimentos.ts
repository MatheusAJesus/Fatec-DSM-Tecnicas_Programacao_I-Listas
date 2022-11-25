import Atendimento from "../../modelo/atendimento";

export const mockAtendimentos: Array<Atendimento> = [

    {
        id: 1,
        dataAtendimento: new Date('2022/01/19'),
        cliente: 'Gerson',
        cpfCliente: '1234567810',
        generoCliente: 'masculino',
        produtos: [
            {   
                id: 1,
                nome:'Gel para cabelo',
                valor: 30.00
            },
            {
                id: 2,
                nome:'Óleo para barba',
                valor: 20.00
            },
            
        ],
        qtdProdutos: 2,
        servicos: [
            {
                id:2,
                nome:'Corte Masculino',
                valor: 40.00
            },
            {
                id:4,
                nome:'Barba',
                valor: 30.00
            },
        ],
        qtdServicos: 2,
        valorTotal: 120
    },
    {
        id: 2,
        dataAtendimento: new Date('2022/01/19'),
        cliente: 'Matheus',
        cpfCliente: '1234567890',
        generoCliente: 'masculino',
        produtos: [
            {   
                id: 1,
                nome:'Gel para cabelo',
                valor: 30.00
            },
            {
                id: 2,
                nome:'Óleo para barba',
                valor: 20.00
            },
            
        ],
        qtdProdutos: 2,
        servicos: [
            {
                id:2,
                nome:'Corte Masculino',
                valor: 40.00
            },
            {
                id:4,
                nome:'Barba',
                valor: 30.00
            },
        ],
        qtdServicos: 2,
        valorTotal: 120
    },
    {
        id: 3,
        dataAtendimento: new Date('2022/01/19'),
        cliente: 'Kevin',
        cpfCliente: '1234567891',
        generoCliente: 'masculino',
        produtos: [
            {   
                id: 1,
                nome:'Gel para cabelo',
                valor: 30.00
            }            
        ],
        qtdProdutos: 1,
        servicos: [
            {
                id:2,
                nome:'Corte Masculino',
                valor: 40.00
            }
        ],
        qtdServicos: 1,
        valorTotal: 70
    },
    {
        id: 4,
        dataAtendimento: new Date('2022/01/19'),
        cliente: 'Bolsonaro',
        cpfCliente: '1234567819',
        generoCliente: 'masculino',
        produtos: [
            {   
                id: 1,
                nome:'Gel para cabelo',
                valor: 30.00
            }            
        ],
        qtdProdutos: 1,
        servicos: [
            {
                id:2,
                nome:'Corte Masculino',
                valor: 40.00
            }
        ],
        qtdServicos: 1,
        valorTotal: 70
    },
    {
        id: 5,
        dataAtendimento: new Date('2022/01/19'),
        cliente: 'Daenerys',
        cpfCliente: '1234567829',
        generoCliente: 'feminino',
        produtos: [
            {
                id:3,
                nome:'Shampoo',
                valor: 30.00
            },
            {
                id:6,
                nome:'Condicionador',
                valor: 40.00
            },          
        ],
        qtdProdutos: 2,
        servicos: [
            {   
                id:1,
                nome:'Corte feminino',
                valor: 50.00
            },
            {
                id:10,
                nome:'Banho de creme',
                valor: 50.00
            },
        ],
        qtdServicos: 2,
        valorTotal: 170
    },
    {
        id: 6,
        dataAtendimento: new Date('2022/01/19'),
        cliente: 'Petala',
        cpfCliente: '1234567824',
        generoCliente: 'feminino',
        produtos: [
            {
                id:3,
                nome:'Shampoo',
                valor: 30.00
            },
            {
                id:6,
                nome:'Condicionador',
                valor: 40.00
            },
            {
                id:9,
                nome:'Creme sem enxague',
                valor: 20.00
            },          
        ],
        qtdProdutos: 3,
        servicos: [
            {   
                id:1,
                nome:'Corte feminino',
                valor: 50.00
            },
            {
                id:10,
                nome:'Banho de creme',
                valor: 50.00
            },
        ],
        qtdServicos: 2,
        valorTotal: 190
    },
    {
        id: 7,
        dataAtendimento: new Date('2022/01/19'),
        cliente: 'Goretti',
        cpfCliente: '1234567825',
        generoCliente: 'feminino',
        produtos: [
            {
                id:3,
                nome:'Shampoo',
                valor: 30.00
            },
            {
                id:9,
                nome:'Creme sem enxague',
                valor: 20.00
            },          
        ],
        qtdProdutos: 2,
        servicos: [
            {   
                id:1,
                nome:'Corte feminino',
                valor: 50.00
            },
            {
                id:10,
                nome:'Banho de creme',
                valor: 50.00
            },
        ],
        qtdServicos: 2,
        valorTotal: 150
    },
    {
        id: 8,
        dataAtendimento: new Date('2022/01/19'),
        cliente: 'Carol',
        cpfCliente: '1234567830',
        generoCliente: 'feminino',
        produtos: [
            {
                id:3,
                nome:'Shampoo',
                valor: 30.00
            },
            {
                id:9,
                nome:'Creme sem enxague',
                valor: 20.00
            },          
        ],
        qtdProdutos: 2,
        servicos: [
            {   
                id:1,
                nome:'Corte feminino',
                valor: 50.00
            },
            {
                id:10,
                nome:'Banho de creme',
                valor: 50.00
            },
        ],
        qtdServicos: 2,
        valorTotal: 150
    },
    {
        id: 9,
        dataAtendimento: new Date('2022/01/19'),
        cliente: 'Marcos',
        cpfCliente: '1234567820',
        generoCliente: 'masculino',
        produtos: [
            {   
                id: 1,
                nome:'Gel para cabelo',
                valor: 30.00
            },
            {
                id: 2,
                nome:'Óleo para barba',
                valor: 20.00
            },
            {   id:16,
                nome:'Escova para barba',
                valor: 20.00
            },
            
        ],
        qtdProdutos: 3,
        servicos: [
            {
                id:2,
                nome:'Corte Masculino',
                valor: 40.00
            },
            {
                id:4,
                nome:'Barba',
                valor: 30.00
            },
        ],
        qtdServicos: 2,
        valorTotal: 140
    },
    {
        id: 10,
        dataAtendimento: new Date('2022/01/19'),
        cliente: 'Sabha',
        cpfCliente: '1234567818',
        generoCliente: 'masculino',
        produtos: [
            {   
                id: 1,
                nome:'Gel para cabelo',
                valor: 30.00
            },
            {
                id: 2,
                nome:'Óleo para barba',
                valor: 20.00
            },
            {   id:16,
                nome:'Escova para barba',
                valor: 20.00
            },
            
        ],
        qtdProdutos: 3,
        servicos: [
            {
                id:2,
                nome:'Corte Masculino',
                valor: 40.00
            },
            {
                id:4,
                nome:'Barba',
                valor: 30.00
            },
            {   id:19,
                nome:'Depilação peitoral',
                valor: 80.00
            },
            {   id:20,
                nome:'Depilação costas',
                valor: 60.00
            },
        ],
        qtdServicos: 4,
        valorTotal: 280
    },
    {
        id: 11,
        dataAtendimento: new Date('2022/01/19'),
        cliente: 'Arakaki',
        cpfCliente: '1234567812',
        generoCliente: 'masculino',
        produtos: [],
        qtdProdutos: 0,
        servicos: [
            {
                id:2,
                nome:'Corte Masculino',
                valor: 40.00
            }
        ],
        qtdServicos: 1,
        valorTotal: 40
    },
    {
        id: 12,
        dataAtendimento: new Date('2022/01/19'),
        cliente: 'Naiara',
        cpfCliente: '1234567899',
        generoCliente: 'feminino',
        produtos: [
            {   id:13,
                nome:'Creme para as mãos',
                valor: 25.00
            },
        ],
        qtdProdutos: 1,
        servicos: [
            {
                id:6,
                nome:'Tintura cabelo',
                valor: 80.00
            },
        ],
        qtdServicos: 1,
        valorTotal: 105
    },     
]