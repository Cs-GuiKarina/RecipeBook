# RecipeBook

## Estrutura do Projeto
- `recipebook-backend/`
  - Aplicação Spring Boot
  - Entidades `Receita | Categoria`, Controller `ReceitaController`, Serviço `ReceitaService`
  - Repositório JPA para persistência
- `recipebook-frontend/`
  - Aplicação Angular
  - Serviços para consumir a API
  - Páginas para cadastro, listagem e filtro de receitas

## 🌐 Backend (`recipebook-backend`):
### 🛠️ Tecnologias Utilizadas
- **Java 17** - Linguagem de programação
- **Maven** - Gerenciador de dependências e build
- **H2 Database** - Banco de dados owo
- **Spring Boot 3.5.x | JPA | WEB | Validation**

### Como executar (Windows)
- Certifique-se que o JAVA_HOME existe como variável de ambiente (Java 17+)
```powershell
$env:JAVA_HOME = 'C:\Caminho\Do\Java\...\jdk-17'
```

1. Abra o terminal na raiz do projeto
1. Entre na pasta do backend (`cd .\recipebook-backend`).
1. Rode o comando abaixo para executar a aplicação da API:
   ```powershell
   .\mvnw clean compile spring-boot:run
   ```
1. A API ficará disponível em `http://localhost:8080`

### Compilar via IDE
- Abra o projeto em sua IDE (IntelliJ IDEA, Eclipse, VS Code + extensões)
- Clique em "Run" ou execute a classe `ApiApplication.java`

## 🪟 Frontend (`recipebook-frontend`): 
### 🛠️ Tecnologias Utilizadas
- **Angular 21** - Estilização
- **PrimeNG** - Componentes, icones e temas
- **Typescript** - Javascript só que bom(?)

### Como executar
1. Abra o terminal na raiz do projeto
1. Entre na pasta do frontend (`cd .\recipebook-frontend`).
1. Instale as dependências (`npm install`). 
1. Rode o comando abaixo para executar a aplicação web:
   ```powershell
   ng serve
   ```
1. O website ficará disponível em `http://localhost:4200`
