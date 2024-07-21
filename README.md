# Code Challenge Frontend

## Instalação

Navegue até o diretório do projeto e execute os seguintes comandos:

Copie o arquivo `.env.example` para o `.env`:
```
$ cp .env.example .env
```
Crie o container do projeto:
```
$ docker-compose up
```
Ou use o comando Make
```
$ make start
```

Não é necessário alterar as configurações do arquivo `.env.example` para que o projeto rode em modo de desenvolvimento. O frontend pode ser acessado no endereço `http://localhost:5173`.

**É necessário iniciar o projeto backend antes de iniciar o frontend.**

## Ferramentas Utilizadas no Projeto

### Bibliotecas

- [ShadCn](https://ui.shadcn.com/)
- [Zod](https://github.com/colinhacks/zod)
- [React-Query](https://react-query.tanstack.com/)
- [React-Hook-Form](https://react-hook-form.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [moment](https://momentjs.com/)
- [axios](https://github.com/axios/axios)
- [lucide-react](https://lucide.dev/)

## Decisões de Arquitetura e Design

### Opções de Design

![image](https://github.com/user-attachments/assets/7485130f-bee1-4529-b744-b355f6d4abd5)

Toda a aplicação está contida em apenas uma página. Nela é possível visualizar os novos registros, buscá-los e executar as operações de Link Curto, Refresh, Edit e Delete; 

![image](https://github.com/user-attachments/assets/c09983e3-2f24-4c37-95db-0fa4df634d46)

O as ações são acessadas através do menu de 'três pontos' no lado direito superior de cada card de perfil. Cada card tem dois campos adicionais:

- 'Sync Status': informa ao usuário qual é o status atual sincronização do perfil com os dados do Github
- 'Last Update': informa qual foi a última data que o perfil sofreu uma atualização; 

![image](https://github.com/user-attachments/assets/1a5e5f83-4ff8-4903-be15-6381a4f679c8)

A criação e atualização dos perfis são feitos através de modais. Foi adotada essa modalidade pelo fato de existir apenas dois campos para alteração, o que se encaixa bem nesse tipo de modal. 

### Arquitetura

Este projeto utiliza extensivamente a biblioteca React Query para gerenciar os estados das requisições à API. Entre as facilidades oferecidas por essa biblioteca, destaca-se a gestão eficiente do estado cacheado, que contribui para a otimização do desempenho e a redução de chamadas desnecessárias à API.

Também foi adotado boas práticas de gestão de estado via parâmetros. 

## Melhorias
- Atualmente a implementação da lib React Query no projeto invalida o cache da lista principal quando uma mutanção é bem sucedida. Por esse motivo, sempre que essa ação ocorre, o front precisa recarregar os dados da lista atual novamente. Uma boa abordagem para esse problema seria atualizar o item dentro do cache local. 

