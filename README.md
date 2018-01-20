# Deprecation
Use [Slush Jugs](https://www.npmjs.com/package/slush-jugs) instead, this is no longer maintained.

## slush-justice

[![Build Status](https://travis-ci.org/NathanielInman/slush-justice.svg?branch=master)](https://travis-ci.org/NathanielInman/slush-justice) [![dependency Status](https://david-dm.org/NathanielInman/slush-justice/status.svg?style=flat)](https://david-dm.org/NathanielInman/slush-justice) [![devDependency Status](https://david-dm.org/NathanielInman/slush-justice/dev-status.svg?style=flat)](https://david-dm.org/NathanielInman/slush-justice#info=devDependencies)

Slush generator **JUSTICE** makes programming with ES6 modules easy!

- **Vue** : *Modern SPA framework inspired by React and Angular*
- **Buefy** : *Modern component library extension of Bulma*
- **BrowserSync** : *Live reloading system*
- **Webpack** : *Project compilation, module bundler, uglifier, etc.*
- **Modules** : *Use ES2015 modules with no additional configuration*
- **Babel** : *Modern JS to ES5 compiler formerly called 6to5*
- **ESLint** : *Lint your javascript in its ES.Next format*
- **Pug** : *Templating system made easy*
- **Stylus** : *Powerful CSS Preprocessor with a beautiful syntax*
- **PostCSS** : *Style optimizer used with autoprefixer*
- **Uglify** : *Minify both CSS and JS to make your client payloads small and quick to load*

## Table of Contents

* [Installation](#installation)
* [File Structure](#file-structure)
* [Notes](#notes)
* [Thanks](#thanks)

## Installation

Simply install [slush][2], as well as this generator globally:

```
npm install -g slush slush-justice
mkdir appName
cd appName
slush justice
```

follow the instructions and it will set everything up for you and install
dependencies. After it's finished to run the project and have it automatically
listen to the code for changes and update merely run the command:

```
npm start
```

And just like that, you're on the way to making your app!

## File Structure

```
project
├─dist
│ └─ <-(assets copied here on compile)
├─ src
│ ├─assets
│ │ └─ (imgs/html/pdf/other go here)
│ ├─app
│ │ ├─routes
│ │ │ ├─routeName1
│ │ │ │ ├─ index.js (route index file)
│ │ │ │ └─ routeName1UsageName.js
│ │ │ └─routeName2
│ │ │   ├─ index.js (route index file)
│ │ │   └─ routeName2UsageName.js
│ │ ├─ app.pug (main template framework)
│ │ ├─ app.styl (main stylus file)
│ │ └─ app.js (main vue instance)
├─ index.manifest.js (used to create index.html)
├─ package.json
└─ readme.md
```

## Thanks

This boilerplate of mine is just a combination of great tools, all credit goes to
those who actually put in all the hard work to create them.

- There have been many [Slush][1] generators that have been instrumental in getting
  all those pesky apps developed on time. It's great to finally have an alternative
  to Yeoman.
- [Webpack][8] has been an instrumental boost in productivity and clean code, allowing the
  the use of the ES2015 module system.
- Though [Pug][2] (formerly Jade,) has been seen predominately as a server-side helper
  for templating, I find it incredibly helpful on front-end projects where I'm using a
  build system anyways, as the syntax is far easier to read and reduces duplication of
  segments with partials.
- From css to less to sass to [Stylus][3], it's been a long road with css pre-processors,
  but I finally found one that lets me drop all the redundant syntax and focus more on the
  design. I love my curly brace languages, but personally think that it gets in-between
  me and focusing on what's important when dealing with UX, wireframing or general
  design.
- No more worrying about vendor prefixes! [Autoprefixer][5] has been an instrumental
  improvement to my workflow when it comes to styling. None of that would be possible
  without [PostCSS][4] and all of the benefits it's brought to frontend development.
- If you're still coding without a linter like [ESLint][6], I'm not sure whether to
  give you a high-five for all the hard work or question your dedication for only
  stupidity.
- Dropped Traceur for [Babel][7] (formerly 6to5) because it has more readable compiled
  code as well as a much more versatile transpilation story when it comes to upcoming
  features to javascript. You can gather more specifics on comparisons of the two at
  their website.

# License
 [MIT](/LICENSE)

[1]:https://github.com/slushjs/slush
[2]:https://github.com/pugjs/pug
[3]:https://github.com/learnboost/stylus
[4]:https://github.com/postcss/postcss
[5]:https://github.com/postcss/autoprefixer
[6]:http://eslint.org
[7]:https://github.com/babel/babel
[8]:https://webpack.github.io
