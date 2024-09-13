const recintos = [
{
    numero: 1, 
    bioma: 'savana',
    tamanhoTotal: 10,
    animal: 'macaco',
    animaisExistentes: 3,
},
{
    numero: 2,
    bioma: 'floresta',
    tamanhoTotal: 5,
    animal: '',
    animaisExistentes: '',
},
{
    numero: 3,
    bioma: 'savanaRio',
    tamanhoTotal: 7,
    animal: 'gazela',
    animaisExistentes: 1
},
{
    numero: 4,
    bioma: 'rio',
    tamanhoTotal: 8,
    animal: '',
    animaisExistentes: ''
},
{
    numero: 5,
    bioma: 'savana',
    tamanhoTotal: 9,
    animal: 'leao',
    animaisExistentes: 1
}
];

const animais = [
{
    especie: 'LEAO',
    tamanho: 3,
    bioma: 'savana',
    carnivoro: true
},
{
    especie: 'LEOPARDO',
    tamnho: 2,
    bioma: 'savana',
    carnivoro: true
},
{
    especie: 'CROCODILO',
    tamanho: 3,
    bioma: 'rio',
    carnivoro: true
},
{
    especie: 'MACACO',
    tamanho: 1,
    bioma: 'savana' || 'floresta',
    carnivoro: false
},
{
    especie: 'GAZELA',
    tamanho: 2,
    bioma: 'savana',
    carnivoro: false
},
{
    especie: 'HIPOPOTAMO',
    tamanho: 4,
    bioma: 'savana' || 'rio',
    carnivoro: false
}    
];

/*
Viabilidade
3 leões na savana num5
2 leopardos na savana num1
3 crocodilos no rio num4
1 macaco na savana num1
2 gazelas na savana num2
4 hipopotamos na savana e rio num3
*/

//ainda não consigo desenvolver todas as condicionais e verificações necessárias 
class RecintosZoo {

    analisaRecintos(animal, quantidade) {

    }

}

export { RecintosZoo as RecintosZoo };
