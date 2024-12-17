# 🏥 Farmácia Cura Tudo - Aplicação Typescript 

Bem-vindo ao projeto **Farmácia Cura Tudo**! Este é um sistema de gestão de produtos para uma farmácia, desenvolvido em TypeScript. Ele permite cadastrar, listar, consultar, atualizar e deletar produtos como medicamentos e cosméticos.

## 🚀 Funcionalidades

- 📦 **Cadastrar Produtos**: Adicione novos produtos ao sistema.
- 📋 **Listar Produtos**: Veja todos os produtos cadastrados.
- 🔍 **Consultar Produto por ID**: Encontre um produto específico pelo seu ID.
- 🔄 **Atualizar Produto**: Modifique as informações de um produto existente.
- 🗑️ **Deletar Produto**: Remova produtos do sistema.

## 🛠️ Tecnologias Utilizadas

- **TypeScript**: Linguagem principal do projeto.
- **Node.js**: Ambiente de execução do JavaScript no servidor.
- **readline-sync**: Biblioteca para interação com o usuário via terminal.

## 📂 Estrutura de Arquivos

```
.
├── src
│   ├── Colors.ts
│   ├── Cosmetico.ts
│   ├── Medicamento.ts
│   ├── Produto.ts
│   └── model
│       ├── ProdutoController.ts
│       └── ProdutoRepository.ts
├── main.ts
└── README.md
```

## 🚧 Como Configurar e Executar

1. **Clone o Repositório**:

   ```bash
   git clone https://github.com/fern-menezes/aplicacao_farmacia.git
   ```

2. **Navegue até o Diretório do Projeto**:

   ```bash
     cd aplicacao_farmacia
   ```

3. **Instale as Dependências**:

   ```bash
   npm install
   ```

4. **Execute a Aplicação**:

   ```bash
   npm start
   ```

## 📈 Estrutura e Explicação dos Arquivos

### src/

- **Colors.ts**: Gerencia a paleta de cores utilizada no terminal.
- **Cosmetico.ts**: Subclasse de Produto que representa os cosméticos.
- **Medicamento.ts**: Subclasse de Produto que representa os medicamentos.
- **Produto.ts**: Classe abstrata que define as propriedades e métodos comuns para todos os produtos.

### src/model/

- **ProdutoController.ts**: Controlador que gerencia a lógica de negócios e a interação com o repositório de produtos.
- **ProdutoRepository.ts**: Interface que define os métodos para manipulação de produtos.

### main.ts

- Contém a função principal que inicializa o sistema, exibe o menu e gerencia a navegação entre as opções.

## 💡 Ideias Futuras

- **Autenticação e Autorização**: Implementar um sistema de login para diferentes níveis de usuário (administrador, funcionário).
- **Integração com APIs**: Permitir integração com sistemas externos de pagamento e logística.
- **Relatórios e Análises**: Adicionar funcionalidades para geração de relatórios de vendas e estoque.

## 🤝 Contribuindo

Sinta-se à vontade para contribuir com este projeto! Envie um pull request ou abra uma issue com suas ideias e melhorias.

## 📞 Contato

- **Email**: [fmenezes098@gmail.com](mailto:fmenezes098@gmail.com)
- **LinkedIn**: [Fernanda Menezes Ribeiro](https://www.linkedin.com/in/fernanda-menezes-ribeiro/)

---

Desenvolvido com ❤️ por Fern🌿

---

