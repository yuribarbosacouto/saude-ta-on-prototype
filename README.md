# Saúde Tá On

Protótipo de alta fidelidade para validação do site público e do fluxo inicial de matrícula do projeto **Saúde Tá On**.

## O que entrega

- Site público para alunos com home, sobre, atividades, contato e matrícula online.
- Identidade pública alinhada ao perfil oficial `@projetosaudetaon`.
- Formulário de matrícula simplificado com nome, telefone, data de nascimento, turma, endereço e recado opcional.
- Painel administrativo demonstrativo para a Fernanda com dashboard, gestão de alunos, gestão de turmas, relatórios e configurações.
- Matrículas enviadas pelo site entram automaticamente na tabela administrativa.
- Ações de visualizar, editar status, excluir, imprimir ficha e exportar CSV.
- Lista de presença imprimível.
- Dados salvos no navegador via `localStorage`.

## Área administrativa demonstrativa

O painel não aparece como botão no site público. Para demonstração interna, acesse:

```text
?admin=fernanda
```

Exemplo local:

```text
http://127.0.0.1:4180/?admin=fernanda
```

Em produção real, essa área precisa de login, banco de dados e regras de privacidade.

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
