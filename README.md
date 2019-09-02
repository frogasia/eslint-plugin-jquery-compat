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
        "jquery-compat"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "jquery-compat/no-parse-json": 2
    }
}
```

Alternatively, extend the recommended config:


```json
{
  "extends": ["plugin:jquery-compat/recommended"]
}
```

## Supported Rules

### jquery-compat/no-parse-json

Disallows use of `$.parseJSON` (prefer native `JSON.parse`)

### jquery-compat/jmvc/no-trailing-comma-after-selector

Disallow trailing commas after selectors in JMVC event listeners (jQuery 1.9+
throws a parsing error).

### jquery-compat/no-capitalised-html-data-attributes

Enforce lower-casing of HTML data attribute names within string literals.

### jquery-compat/no-die

Disallow use of `$.fn.die()`, which was removed in jQuery 1.9 (prefer `$.fn.off()` instead).

### jquery-compat/no-live

Disallow use of `$.fn.live()`, which was removed in jQuery 1.9 (prefer `$.fn.on()` instead).

### jquery-compat/deferred-use-state

Enforce the use of `deferred.state()` instead of `deferred.isResolved()` and `deferred.isRejected()` (removed in jQuery 1.8).

## Contributing

- Run tests with `npm run test`
- Please format commits using the [conventional commit format](https://www.conventionalcommits.org/en/v1.0.0-beta.2/)
