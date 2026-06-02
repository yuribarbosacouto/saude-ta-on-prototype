# Saúde Tá On

Protótipo de alta fidelidade para validação do fluxo de matrícula e gestão do projeto **Saúde Tá On**.

## O que entrega

- Site público para alunos com home, sobre, atividades, contato e matrícula online.
- Formulário de matrícula com dados pessoais, endereço, turma, responsável, observações e upload de documento.
- Painel administrativo para a Fernanda com dashboard, gestão de alunos, gestão de turmas, relatórios e configurações.
- Matrículas enviadas pelo site entram automaticamente na tabela administrativa.
- Ações de visualizar, editar status, excluir, imprimir ficha e exportar CSV.
- Lista de presença imprimível.
- Dados salvos no navegador via `localStorage`.

## Como abrir

Opção direta:

```powershell
Start-Process .\index.html
```

Com servidor local:

```powershell
python -m http.server 4180
```

Depois acesse:

```text
http://127.0.0.1:4180
```
