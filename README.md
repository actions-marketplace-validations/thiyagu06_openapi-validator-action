# openapi-validator-action

This action validates whether the OpenAPI/Swagger schema file is valid or not

## Inputs

### `file-path`

**Required** Path of the OpenAPI schema file. Default is `"openapi.yaml"` at root. Path starts root of github repo.
For example, if your schema is in `schemas` folder.

```
root
├── schemas
│   └── openapi.yaml
├── package.json
└── package-lock.json
```

You should use `file_path: './schemas/file-path.yaml'`

## Example usage

```
- name: 'validate openapi schema'
  uses: thiyagu08/validate-github-action@v1
  with:
    filepath: 'openapi.yaml'
```
You can specify version with `@v<release-version>`. It follows semantic release. For latest release, please check [releases](https://github.com/thiyagu06/openapi-validator-action/releases) page.
