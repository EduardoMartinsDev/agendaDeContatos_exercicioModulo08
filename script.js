const form = document.getElementById('contactForm');
const tabelaContatos = document.getElementById('tabelaContatos');

// array para checagem de telefones repetidos
let listaTelefones = [];

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o comportamento padrão de recarregar a página

  const nomeInput = document.getElementById('nome');
  const telefoneInput = document.getElementById('telefone');

  const nome = nomeInput.value.trim();
  const telefone = telefoneInput.value.trim();

  // Validar se o telefone já existe na lista
  if (listaTelefones.includes(telefone)) {
    alert(`Este número (${telefone}) já consta para outro usuário!`);
    return;
  }

  //Verificar formatação do telefone com REGEX
  const telefoneRegex = /^\(\d{2}\)\s?\d{4,5}-\d{4}$/;
  if (!telefoneRegex.test(telefone)) {
    alert("O telefone deve estar no formato (99) 99999-9999 ou (99) 9999-9999");
    return;
  }

  // Se passou na validação, podemos inserir na tabela
  const novaLinha = document.createElement('tr');

  const colunaNome = document.createElement('td');
  const colunaTelefone = document.createElement('td');

  colunaNome.textContent = nome;
  colunaTelefone.textContent = telefone;

  novaLinha.appendChild(colunaNome);
  novaLinha.appendChild(colunaTelefone);

  tabelaContatos.appendChild(novaLinha);

  listaTelefones.push(telefone);

  nomeInput.value = '';
  telefoneInput.value = '';
});