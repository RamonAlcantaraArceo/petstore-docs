# Hi and welcome to my portfolio!

I wanted to share a portfolio project I've been building that demonstrates my approach to quality engineering end to end. The **Petstore** project spans multiple repositories — a FastAPI backend, a React UI, a generated OpenAPI client — all deployed to live environments and covered by a structured Python test framework.

---

## Documentation

Aggregated documentation covering all repositories:
**https://ramonalcantaraarceo.github.io/petstore-docs/**

Repositories covered by this docs site:

- [petstore-api](https://github.com/RamonAlcantaraArceo/petstore-api)
- [petstore-ui](https://github.com/RamonAlcantaraArceo/petstore-ui)
- [petstore-grpc](https://github.com/RamonAlcantaraArceo/petstore-grpc)
- [petstore-mcp](https://github.com/RamonAlcantaraArceo/petstore-mcp)
- [petstore-openapi-client-pydantic](https://github.com/RamonAlcantaraArceo/petstore-openapi-client-pydantic)
- [petstore-test-python](https://github.com/RamonAlcantaraArceo/petstore-test-python)

---

## Live Environments
 
Dev uses an in-memory database. Staging uses PostgreSQL.

| | Dev | Staging |
|---|---|---|
| **API (Swagger UI)** | [petstore-api-dev.ramon-alcantara.work/docs](https://petstore-api-dev.ramon-alcantara.work/docs) | [petstore-api-staging.ramon-alcantara.work/docs](https://petstore-api-staging.ramon-alcantara.work/docs) |
| **UI** | [petstore-ui-dev.ramon-alcantara.work/petstore](https://petstore-ui-dev.ramon-alcantara.work/petstore/) | [petstore-ui-staging.ramon-alcantara.work/petstore](https://petstore-ui-staging.ramon-alcantara.work/petstore/) |
| **Storybook** | [petstore-ui-dev.ramon-alcantara.work/storybook](https://petstore-ui-dev.ramon-alcantara.work/storybook/) | [petstore-ui-staging.ramon-alcantara.work/storybook](https://petstore-ui-staging.ramon-alcantara.work/storybook/) |

---

## Test Framework

The test repo covers API, UI (Selenium + Page Object Model), integration, end-to-end and performance tests against a shared protocol interface — so the same test can run against the API layer or the browser without modification. It includes fluent assertions, factory-based test data generation, Allure reporting, and enforced code quality via pre-commit hooks (ruff, mypy, black).

The UI automation is being worked on so that it can work with selenium and playwright interchangeably.

- **Source:** [github.com/RamonAlcantaraArceo/petstore-test-python](https://github.com/RamonAlcantaraArceo/petstore-test-python)
- **Latest Allure report:** [ramonalcantaraarceo.github.io/petstore-test-python](https://ramonalcantaraarceo.github.io/petstore-test-python/)
- **CI run history:** [ramonalcantaraarceo.github.io/petstore-api/ci](https://ramonalcantaraarceo.github.io/petstore-api/ci/)

---

## GitHub Profile

All repositories: **https://github.com/RamonAlcantaraArceo**

---

Happy to walk through any part of it in more detail.
