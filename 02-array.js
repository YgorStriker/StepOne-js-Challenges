// 1- Crie um array vazio chamado animals
let animals = [];

// 2- Adicione nesse array dois animais: dog e cat (você pode fazer isso de mais de uma forma diferente!)
animals.push("Dog","Cat");

// 3- Adicione no começo do array outro animal: spider
animals.unshift("Spider");

// 4- Remova o primeiro elemento do array
animals.shift();

// 5- Remova o último elemento do array
animals.pop();

// 6- Como ficou o array final?! E qual é o elemento 1 desse array?
// R- O array fica apenas: animals = ["Dog"] e o elemento 1 não existe, apenas o elemento 0.
console.log(animals);