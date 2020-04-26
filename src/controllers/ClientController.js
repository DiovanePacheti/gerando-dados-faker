//importando o faker para o arquivo
const faker = require('faker');

//difinindo a regiao dos dados 
faker.locale = 'pt_BR'

const clients = [];

module.exports = {


    async index(request, response){
        for (let i = 0; i < 10; i++) {

            const name = faker.name.findName();
            const image = faker.image.avatar();
            const email = faker.internet.email(name);
            const phoneNumber = faker.phone.phoneNumber();
            const birth = faker.date.past(30, 2000); //gera data no intervalo de 30 anos tendo 2000 como ano de referencia na direção descendente

            //Gerando um Objeto Cliente 
            client = {
                name,
                image,
                email,
                phoneNumber,
                birth
            }

            clients.push(client); //adiciona um client no final do array

        } //fim do for

        console.log(clients);

        return response.json(clients);

    }
/*
//for que ira gerar os dados
for (let i = 0; i < 10; i++) {

    const name = faker.name.findName();
    const image = faker.image.avatar();
    const email = faker.internet.email(name);
    const phoneNumber = faker.phone.phoneNumber();
    const birth = faker.date.past(30, 2000); //gera data no intervalo de 30 anos tendo 2000 como ano de referencia na direção descendente

    /*Gerando um Objeto Cliente 
    client = {
        name,
        image,
        email,
        phoneNumber,
        birth
    }

    clients.push(client); //adiciona um client no final do array

} //fim do for

console.log(clients);*/

}