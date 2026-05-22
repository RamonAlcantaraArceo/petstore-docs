# petstore-docs

Aggregated documentation site for the Petstore ecosystem, built with
[`mkdocs-multirepo-plugin`](https://github.com/jdoiro3/mkdocs-multirepo-plugin).

## Aggregated repositories

This site imports docs from:

1. `petstore-api`
2. `petstore-ui`
3. `petstore-mcp`
4. `petstore-openapi-client-pydantic`
5. `petstore-test-python`

Each source is configured to pull from `main` and `docs/`.

## Local development

```bash
uv venv
source .venv/bin/activate
uv sync
uv run mkdocs serve
```

The site will be available at `http://127.0.0.1:8000`.

## Deployment

Deployment is automated with GitHub Actions on pushes to `main`.
The workflow runs `uv run mkdocs gh-deploy --force` and publishes to the `gh-pages` branch.

If imported repositories are private, ensure workflow credentials have read access.