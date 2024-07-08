const shoes = [
    { nome: 'Nike', preco: 200, imagem: 'https://png.pngtree.com/png-vector/20240407/ourmid/pngtree-nike-air-max-97-sneaker-in-silver-png-image_12266447.png', desconto: true },
    { nome: 'Adidas', preco: 120, imagem: 'https://png.pngtree.com/png-vector/20240407/ourmid/pngtree-nike-air-max-97-sneaker-in-silver-png-image_12266447.png', desconto: true },
    { nome: 'Puma', preco: 100, imagem: 'https://png.pngtree.com/png-vector/20240407/ourmid/pngtree-nike-air-max-97-sneaker-in-silver-png-image_12266447.png', desconto: false  },
    { nome: 'Reebok', preco: 80, imagem: 'https://png.pngtree.com/png-vector/20240407/ourmid/pngtree-nike-air-max-97-sneaker-in-silver-png-image_12266447.png', desconto: false },
    { nome: 'Vans', preco: 60, imagem: 'https://png.pngtree.com/png-vector/20240407/ourmid/pngtree-nike-air-max-97-sneaker-in-silver-png-image_12266447.png', desconto: false  },
    { nome: 'Converse', preco: 40, imagem: 'https://png.pngtree.com/png-vector/20240407/ourmid/pngtree-nike-air-max-97-sneaker-in-silver-png-image_12266447.png', desconto: false  },
    { nome: 'Crocs', preco: 1, imagem: 'https://png.pngtree.com/png-vector/20240407/ourmid/pngtree-nike-air-max-97-sneaker-in-silver-png-image_12266447.png', desconto: false  }
]

const shoesList = document.getElementById('shoes-list')

shoes.forEach(shoe => {
    const shoeElement = document.createElement('div')
    shoeElement.classList.add('shoe')
    shoeElement.style.display = 'flex'
    shoeElement.style.flexDirection = 'column'
    shoeElement.style.alignItems = 'center'
    shoeElement.style.justifyContent = 'center'
    shoeElement.style.padding = '10px'

    const shoeImage = document.createElement('img')
    shoeImage.src = shoe.imagem
    shoeImage.width = 100
    shoeImage.alt = shoe.nome

    const shoeName = document.createElement('h2')
    shoeName.innerText = shoe.nome

    const shoePrice = document.createElement('p')
    shoePrice.innerText = `R$ ${shoe.preco}`

    const shoeDiscount = document.createElement('p')
    shoeDiscount.innerText = shoe.desconto ? '30% OFF' : ''
    shoeDiscount.style.color = shoe.desconto ? '#000' : ''
    shoeDiscount.style.textAlign = shoe.desconto ? 'center' : ''
    shoeDiscount.style.backgroundColor = shoe.desconto ? '#FFC606' : ''
    shoeDiscount.style.borderRadius = shoe.desconto ? '5px' : ''
    shoeDiscount.style.padding = shoe.desconto ? '5px' : ''
    shoeDiscount.style.margin = shoe.desconto ? '6px' : ''

    shoeElement.appendChild(shoeDiscount)
    shoeElement.appendChild(shoeImage)
    shoeElement.appendChild(shoeName)
    shoeElement.appendChild(shoePrice)
    
    shoesList.appendChild(shoeElement)
})
