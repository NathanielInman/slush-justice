# slush-justice

[![Build Status](https://github.com/nathanielinman/jugs-vue/workflows/Node.js%20CI/badge.svg)](https://github.com/nathanielinman/jugs-vue/actions)

Vue app generator **JUGS-VUE** makes getting started with VueJS easy!

- **Vue + VueRouter** : *Modern SPA framework inspired by React and Angular*
- **Vue Hot Reload API** : *Live reloading system*
- **Vuex** : *Flux data management. Multiple stores, single dispatcher, no clumsy reducers*
- **Buefy** : *Modern component library extension of Bulma*
- **Parcel** : *Project compilation, module bundler, uglifier, etc.*
- **Babel** : *Modern JS to ES5 compiler formerly called 6to5*
- **Pug** : *Templating system made easy*
- **Stylus** : *Powerful CSS Preprocessor with a beautiful syntax*

## Table of Contents

* [Installation](#installation)
* [File Structure](#file-structure)
* [Notes](#notes)
* [Thanks](#thanks)

## Installation

Simply install this package globally and run it:

```
npm install -g jugs-vue
mkdir appName
cd appName
jugs-vue
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
│ ├─routes
│ │ ├─help
│ │ │ ├─index.js (route index file)
│ │ │ └─HelpIndex.vue (help page controller)
│ │ └─Dashboard.vue (landing page controller)
│ ├─ routes.js (all route initialization)
│ ├─ App.vue (the root vue page component)
│ ├─ index.styl (app-wide stylus file)
│ ├─ index.pug (app html file)
│ └─ index.js (app initializaiton of vue instance)
├─ package.json
└─ readme.md
```

## Thanks

This boilerplate of mine is just a combination of great tools, all credit goes to
those who actually put in all the hard work to create them.

- [Parcel][7] has been an instrumental boost in productivity and clean code, allowing the
  the use of the ES2015 module system. Moving from webpack has greatly improved speed
- Though [Pug][1] (formerly Jade,) has been seen predominately as a server-side helper
  for templating, I find it incredibly helpful on front-end projects where I'm using a
  build system anyways, as the syntax is far easier to read and reduces duplication of
  segments with partials.
- From css to less to sass to [Stylus][2], it's been a long road with css pre-processors,
  but I finally found one that lets me drop all the redundant syntax and focus more on the
  design. I love my curly brace languages, but personally think that it gets in-between
  me and focusing on what's important when dealing with UX, wireframing or general
  design.
- No more worrying about vendor prefixes! [Autoprefixer][4] has been an instrumental
  improvement to my workflow when it comes to styling. None of that would be possible
  without [PostCSS][3] and all of the benefits it's brought to frontend development.
- If you're still coding without a linter like [ESLint][5], I'm not sure whether to
  give you a high-five for all the hard work or question your dedication for only
  stupidity.
- Dropped Traceur for [Babel][6] (formerly 6to5) because it has more readable compiled
  code as well as a much more versatile transpilation story when it comes to upcoming
  features to javascript. You can gather more specifics on comparisons of the two at
  their website.

# License
 [MIT](/LICENSE)

[1]:https://github.com/pugjs/pug
[2]:https://github.com/learnboost/stylus
[3]:https://github.com/postcss/postcss
[4]:https://github.com/postcss/autoprefixer
[5]:http://eslint.org
[6]:https://github.com/babel/babel
[7]:https://parceljs.org/
