# Lista de Tarefas (To-Do List)

Projeto desenvolvido para praticar **JavaScript puro**, com foco em **manipulação do DOM**, **eventos**, **funções reutilizáveis** e **persistência de dados com localStorage**.

A aplicação permite adicionar e remover tarefas, mantendo os dados salvos mesmo após recarregar a página.

---

## Link para acessar o projeto:

👉 https://gutosavi.github.io/to-do-list-project/

---

## O que foi praticado neste projeto

- Captura e manipulação de elementos do DOM
- Uso de eventos (`click` e `Enter`) com **função única**
- Criação dinâmica de elementos HTML (`li`, `button`, `i`)
- Delegação de eventos
- Organização de funções com responsabilidades claras
- Uso do `localStorage` para persistência de dados
- Controle de estado da interface (mostrar/ocultar resultados)

---

## Funcionalidades

- Adicionar tarefas via botão ou tecla **Enter**
- Remover tarefas individualmente
- Salvar tarefas automaticamente no navegador
- Recarregar tarefas salvas ao abrir a página
- Mostrar ou ocultar resultados conforme o estado da lista

---

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Font Awesome (ícones)

---

## Estrutura lógica do projeto

### ➤ Entrada do usuário
- O usuário digita a tarefa no input
- Pode adicionar clicando no botão ou pressionando **Enter**

### ➤ Criação da tarefa
- Um elemento `<li>` é criado dinamicamente
- O texto da tarefa é inserido
- Um ícone de apagar é adicionado à tarefa

### ➤ Remoção
- A remoção é feita através de **delegação de eventos**
- Ao clicar no ícone, apenas a tarefa correspondente é removida

### ➤ Persistência
- As tarefas são salvas no `localStorage`
- Ao recarregar a página, as tarefas são recriadas automaticamente

---

## Observações

Este projeto faz parte do processo de aprendizado em JavaScript, com foco em **lógica**, **organização de código** e **boas práticas iniciais**, evitando o uso de frameworks ou bibliotecas externas.

---

## Próximos passos (ideias)

- Marcar tarefas como concluídas
- Editar tarefas
- Melhorar acessibilidade
- Refatorar para módulos

---

👨‍💻 Desenvolvido por **Gustavo Savi**

