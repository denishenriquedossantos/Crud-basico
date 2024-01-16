# Crud Básico

Este repositório se trata de um projeto básico de funcionalidade CRUD, utilizando [Java Spring Boot](https://spring.io/projects/spring-boot/) e [Angular](https://angular.io/) para criar operações simples sobre um banco de dados.

### Visão Geral

O banco de dados se trata de um banco simples utilizando [MySQL](https://www.mysql.com/) onde cada entrada contém:
- Um número identificador `id`
- Três dados alfanuméricos `nome`, `marca` e `categoria`
- Um número real que identifica o `preço`

A interface contém simples funcionalidades para servirem as operações básicas CRUD:
- `Adicionar` permite a criação de novas entradas no banco
- `Listar Tudo`, `Procurar` e `Procurar por id` exibem todos os dados do banco, aqueles onde `nome`, `marca` ou `categoria` condizem com o input fornecido, e a entrada que condiz com o `id` fornecido, respectivamente.
- `Editar` permite a atualização de determinada entrada já presente no banco.
- `Excluir` permite a remoção de determinada entrada do banco.

### Execução

Para a execução dos arquivos pode ser necessário possuir MySQL, Java e Angular.
Primeiro deve ser executada a aplicação backend Spring. Ela pode ser facilmente executada abrindo o projeto `spring` em uma IDE e executando ou utilizando [Maven](https://maven.apache.org/) na pasta `spring` com o seguinte comando: `mvn spring-boot:run`

Com a aplicação Spring executando é necessário então executar o frontend Angular através do comando `ng serve` na pasta `angular` e então acessar [localhost:4200](http://localhost:4200), ou executar `ng serve --open` para abrir a página diretamente.
