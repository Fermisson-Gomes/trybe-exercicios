const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const orderArray = Object.entries(order);
  const secondArray = Object.entries(orderArray[3][1]);
  const thirdArray = Object.entries(secondArray[2][1]);
  const phone = Object.entries(orderArray[1]);
  const name = Object.entries(orderArray[0]);
  const address = Object.entries(orderArray[2][1]);
  console.log(`Olá ${thirdArray[0][1]}, entrega para ${name[1][1]}, telefone ${phone[1][1]}, R. ${address[0][1]}, Nº ${address[1][1]}, AP: ${address[2][1]}`)
}

// customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const newOrder = Object.assign({}, order);
  const orderArray = Object.entries(newOrder);
  const name = Object.entries(orderArray[0]);
  const secondArray = Object.entries(orderArray[4])
  const payment = Object.entries(secondArray[1][1])
  name[1][1] = 'Luiz Silva';
  payment[0][1] = 50;
  console.log(`Olá ${name[1][1]}, o total o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ ${payment[0][1]},00.`)
}

orderModifier(order);