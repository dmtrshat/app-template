# app-template

This is webpack template.

This template is based on webpack 4 and postcss.

Automatic linting is configured using - stylelint, prettier, eslint, husky, lint-staged.

## Installation

There are two ways to use this template.

### First:

```bash
# Download repository:
git clone https://github.com/dmtrshat/app-template.git

# Go to the app:
cd app-template

# Install dependencies:
npm install
```

#### REMINDER: don't forget to delete the folder `.git`.

### The second(best):

Use my cli - [:smiley_cat: meow](https://www.npmjs.com/package/cli-cat "cli-cat").

You can easily create your new projects without repeating the steps from the first method.

## Project Structure:

- `src/index.html` - main app HTML
- `src/index.js` - main app
- `src/js` - put custom app scripts here
- `src/css` - the same as above but CSS here.
- `src/assets/img` - put images here.
- `static/` - folder with extra static assets that will be copied into output folder

#### REMINDER: don't forget to include/import all required libs and init app in `index.js`.

## Usage

```
# Server with hot reload at http://localhost:8081/
npm run dev

# Output will be at dist/ folder
npm run build
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :smiley:

## License

[MIT](./LICENSE)

Copyright (c) 2019-present, [Dmitry Shatokhin](https://github.com/dmtrshat).
