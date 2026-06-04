# Contributing

Thanks for taking a look at Saúde Tá On. This is a high-fidelity portfolio prototype, so contributions should preserve the goal: a realistic public site plus admin demo that is clear about its prototype limits and respectful of privacy.

## Local Setup

Open the static file directly or run a local server:

```powershell
python -m http.server 4180
```

Then open `http://127.0.0.1:4180`.

Admin demo mode:

```text
http://127.0.0.1:4180/?admin=fernanda
```

## Quality Checklist

Before opening a pull request:

- Check the public flow on desktop and mobile.
- Check the admin demo with `?admin=fernanda`.
- Confirm local assets, scripts, and styles still load.
- Export CSV and print views should still work when touched.
- Use fake demo data only.

## Pull Request Guidelines

- Keep changes focused on one page, form, admin workflow, or technical improvement.
- Explain the user-facing behavior that changed.
- Update README when setup, privacy notes, demo routes, or scope changes.
- Do not commit secrets, tokens, real student data, real health data, addresses, phone numbers, or generated exports.
- Keep the prototype honest: no production claims without login, backend, consent handling, and data retention rules.

## Commit Style

Use short imperative commit messages, for example:

```text
fix: escape enrollment notes in print view
docs: clarify admin demo route
feat: add attendance export state
```
