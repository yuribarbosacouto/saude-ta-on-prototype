# Security Policy

## Supported Scope

This repository is a public portfolio prototype and the `main` branch is the only supported version.

The public demo simulates enrollment and administration flows with browser storage only. It is not a production system and must not receive real student, health, address, phone, or attendance data. Treat any secret, credential, private token, or real personal data committed here as a security incident.

## Reporting a Vulnerability

Please do not open a public issue with exploit steps, secrets, tokens, or private data.

Use GitHub's private vulnerability reporting flow for this repository when available. If that is not available, contact the maintainer through the public GitHub profile and share only a short, non-sensitive summary until a private channel is agreed.

Include:

- A short description of the issue.
- Affected page, form, storage behavior, asset, dependency, or workflow.
- Reproduction steps using fake demo data only.
- Potential privacy or security impact.
- Suggested fix, if you already have one.

## Response Expectations

- Initial triage target: 7 days.
- Confirmed privacy, data exposure, dependency, or deployment issues are prioritized before feature work.
- Public disclosure should wait until a fix or mitigation is available.

## Out of Scope

- Automated reports without a reproducible impact.
- Social engineering.
- Denial-of-service testing against GitHub Pages or third-party services.
- Findings that require modifying a user's local browser or device outside the prototype.
