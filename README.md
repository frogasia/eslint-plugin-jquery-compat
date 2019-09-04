# eslint-plugin-jquery-compat
> Linting rules for checking jQuery version compatibility

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-jquery-compat`:

```
$ npm install @frogeducation/eslint-plugin-jquery-compat --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-jquery-compat` globally.

## Usage

Add `jquery-compat` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "@frogeducation/jquery-compat"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "@frogeducation/jquery-compat/no-parse-json": 2
    }
}
```

Alternatively, extend the recommended config:


```js
{
  "extends": [
    // enables all recommended rules
    "plugin:jquery-compat/recommended",
    // enables only the rules required to upgrade to 1.9
    "plugin:jquery-compat/v1.9",
    // enables only the rules required for JMVC users
    "plugin:jquery-compat/jmvc"
  ]
}
```

## Supported Rules

### v1.9

#### [@frogeducation/jquery-compat/deferred-use-state](docs/rules/deferred-use-state.md)

Enforce the use of `deferred.state()` instead of `deferred.isResolved()` and `deferred.isRejected()` (removed in jQuery 1.8).

#### [@frogeducation/jquery-compat/no-capitalised-html-data-attributes](docs/rules/no-capitalised-html-data-attributes.md)

Enforce lower-casing of HTML data attribute names within string literals.

#### [@frogeducation/jquery-compat/no-die](docs/rules/no-die.md)

Disallow use of `$.fn.die()`, which was removed in jQuery 1.9 (prefer `$.fn.off()` instead).

#### [@frogeducation/jquery-compat/no-live](docs/rules/no-live.md)

Disallow use of `$.fn.live()`, which was removed in jQuery 1.9 (prefer `$.fn.on()` instead).

#### [@frogeducation/jquery-compat/no-parse-json](docs/rules/no-parse-json.md)

Disallows use of `$.parseJSON` (prefer native `JSON.parse`)

### jmvc

#### [@frogeducation/jquery-compat/jmvc/no-trailing-comma-after-selector](docs/rules/jmvc/no-trailing-comma-after-selector.md)

Disallow trailing commas after selectors in JMVC event listeners (jQuery 1.9+
throws a parsing error).

## Contributing

- Run tests with `npm run test`
- Please format commits using the [conventional commit format](https://www.conventionalcommits.org/en/v1.0.0-beta.2/)
