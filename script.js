const dadosPessoa = {
    "nome": "LUIZ HENRIQUE",
    "email": "fulaninho@email.com",
    "telefone": "46987654321",
    "cpf": "00123456789",
    "endereco": "Rua dos Bobos",
    "numero": 0,
    "complemento": "Era uma casa muito engraçada",
    "cep": 123456789,
    "bairro": "Centro",
    "cidade": "Pato Branco",
    "estado": "Paraná",
    "sexo": "Masculino",
    "estadoCivil": "Casado",
    "profissao": "Especialista em Desenvolvimento de Software",
    "dataNascimento": "01/01/1980",
    "urls": ["https://github.com/cezarmezzalira",
        "https://linkedin.com/in/cezarmezzalira",
    ]


}

const divTitle = document.getElementById("title")

const h1Nome = document.createElement("h1")
h1Nome.textContent = dadosPessoa.nome

divTitle.appendChild(h1Nome)

const spanProfissao = document.createElement("span")
spanProfissao.textContent = dadosPessoa.profissao

divTitle.appendChild(spanProfissao)

// Montagem da div contact

const divContact = document.getElementById("contact")

// lista não ordenada
const listaContato = document.createElement("ul")

// item de lista para o endereço completo
const itemEndereco = document.createElement("li")
itemEndereco.textContent = `${dadosPessoa.endereco}, ${dadosPessoa.numero}`
listaContato.appendChild(itemEndereco)


// item de lista para email
const itemEmail = document.createElement("li")
itemEmail.textContent = dadosPessoa.email
listaEmail.appendChild(itemEmail)


//item de lista para telefone 
const itemTelefone = document.createElement("li")
itemTelefone.textContent = dadosPessoa.telefone
listaTelefone.appendChild(itemTelefone)


// item de lista com link da lista de links(Url)

for(url of dadosPessoa.urls){
    const itemLink = document.createElement("li")
    const ancora = document.createElement("a")
    ancora.textContent = url
    ancora.setAttribute("href" , url)
    itemLink.appendChild(ancora)
    listaContato.appendChild(itemLink)
}


divContact.appendChild(listaContato)