# Saúde Tá On

![CI](https://github.com/yuribarbosacouto/saude-ta-on-prototype/actions/workflows/ci.yml/badge.svg)
![CodeQL](https://github.com/yuribarbosacouto/saude-ta-on-prototype/actions/workflows/codeql.yml/badge.svg)
[![Demo](https://img.shields.io/badge/demo-online-2ea44f)](https://yuribarbosacouto.github.io/saude-ta-on-prototype/)

Protótipo de alta fidelidade para validação do site público e do fluxo inicial de matrícula do projeto **Saúde Tá On**.

[Demo online](https://yuribarbosacouto.github.io/saude-ta-on-prototype/) · [Repositório](https://github.com/yuribarbosacouto/saude-ta-on-prototype)

## O que entrega

- Site público para alunos com home, sobre, atividades, contato e matrícula online.
- Identidade pública alinhada ao perfil oficial `@projetosaudetaon`.
- Conteúdo inspirado no repertório real do Instagram: Família Tá On, aulas 0800, aulões, casa cheia, 4 anos de projeto e #semprepresente.
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

## Qualidade

- CI valida referências locais de assets, scripts e folhas de estilo.
- CodeQL roda análise estática do JavaScript.
- Os campos vindos do formulário são escapados antes de aparecerem em tabelas, detalhes e impressão.
- O painel administrativo é demonstrativo e usa `localStorage`, sem backend ou autenticação real.

## Governanca

- Guia de contribuicao: [CONTRIBUTING.md](CONTRIBUTING.md)
- Politica de seguranca: [SECURITY.md](SECURITY.md)
- Templates de issue e pull request em [`.github`](.github)

## Contatos usados no protótipo

- Instagram oficial: `https://www.instagram.com/projetosaudetaon/`
- WhatsApp do link da bio: `https://api.whatsapp.com/send?phone=5521964691180`

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
