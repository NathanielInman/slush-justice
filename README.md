# slush-justice

[![Build Status](https://travis-ci.org/NathanielInman/slush-justice.svg?branch=master)](https://travis-ci.org/NathanielInman/slush-justice) [![dependency Status](https://david-dm.org/NathanielInman/slush-justice/status.svg?style=flat)](https://david-dm.org/NathanielInman/slush-justice) [![devDependency Status](https://david-dm.org/NathanielInman/slush-justice/dev-status.svg?style=flat)](https://david-dm.org/NathanielInman/slush-justice#info=devDependencies)

Slush generator **JUSTICE** makes programming with ES6 modules easy!

- **Modules** : *Use ES6 modules with no additional configuration*
- **Browser Sync** : *Live reloading system*
- **Babel** : *ES.Next to ES5 compiler formerly called 6to5*
- **Jshint** : *Lint your javascript in its ES.Next format*
- **Jade** : *Templating system made easy*
- **Stylus** : *Powerful CSS Preprocessor with a beautiful syntax*
  - **Nib** : **[optional]** *Choosing this plugin gives you plenty of extensions*
  - **Kouto Swiss** : **[optional]** *Alternative plugin that gives tons of additional features*
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

to run...

```
gulp
```

And just like that, you're on the way to making your app!

## File Structure

```
project
├─dist
│ ├ <────(assets copied here on compile)
│ ├─scripts
│ │ ├─ require.min.js
│ │ └─ runtime.min.js
│ ├─styles
│ │ ├─ example1.css
│ │ └─ example2.css
│ ├─ a.html
│ └─ b.html
├─ src
│ ├─assets
│ │ └─ (imgs/html/pdf/other go here)
│ ├─scripts
│ │ ├─common
│ │ │ ├─r1
│ │ │ │ ├─ a.js
│ │ │ │ └─ b.js
│ │ │ └─r2
│ │ │   ├─ c.js
│ │ │   ├─r2c
│ │ │   │ ├─ f.js
│ │ │   │ └─ e.js
│ │ │   └─ d.js
│ │ └─ engine.js
│ ├─ app.js
│ ├─styles
│ │ ├─partials
│ │ │ ├─ foo.styl
│ │ │ └─ bar.styl
│ │ ├─ example1.styl
│ │ └─ example2.styl
│ └─views
│   ├─partials
│   │ ├─ _footer.jade
│   │ ├─ _head.jade
│   │ └─ _scripts.jade
│   ├─ a.jade
│   └─ b.jade
├─ gulpfile.js
├─ package.json
└─ readme.md
```

## Notes

The boilerplate comes setup with the perspective of a video game developer, but
can be easily transitioned into other avenues. One very basic library is included
that I developed : Easel. Easel sets up a canvas that will fit the perspective of
the window and automatically adjust in size when the window is resized. It's an
extremely small library and prepares a few variables that I find very useful:

* **ctx** : *context of the canvas*
* **v.w** : *viewport width in pixels*
* **v.h** : *viewport height in pixels*
* **r(number)** : *returns a decimal between [0,number)*
* **r(0,number,1)** : *returns an integer between [0,number)*
* **r(num1,num2)** : *returns a decimal between [num1,num2)*
* **r(num1,num2,1)** : *returns an integer between [num1,num2)*
* **Easel.onDraw()** : *override this function with custom drawing loop logic*
* **Easel.config()** : *override this with all necessary canvas configuration*
* **Easel.background** : *color to flood the canvas with when it clears before redraw*
* **Easel.redraw()** : *call this function to redraw the canvas. automatically called on resize.*

## Thanks

This boilerplate of mine is just a combination of great tools, all credit goes to
those who actually put in all the hard work to create them.

- The [Gulp][1] developers. Streaming build system - how nice and easy it is to setup.
- There have been many [Slush][2] generators that have been instrumental in getting
  all those pesky apps developed on time. It's great to finally have an alternative
  to Yeoman.
- Though [Jade][3] has been seen predominately as a server-side helper for templating,
  I find it incredibly helpful on front-end projects where I'm using a build system
  anyways, as the syntax is far easier to read and reduces duplication of segments with
  partials.
- From css to less to sass to [Stylus][4], it's been a long road with css pre-processors,
  but I finally found one that lets me drop all the redundant syntax and focus more on the
  design. I love my curly brace languages, but personally think that it gets in-between
  me and focusing on what's important when dealing with UX, wireframing or general
  design.
- Lately I've taken the plunge into [Kouto Swiss][5] from [Nib][6], though the latter
  clear influenced the former. Without sass, it was a lonely road not being able to use
  bourban or compass, or hat with less. [Kouto Swiss][5] has added many features I haven't
  seen in other plugins before, it's a welcome addition to my toolkit.
- If you're still coding without a linter like [JSHint][7], I'm not sure whether to
  give you a high-five for all the hard work or question your dedication for only
  stupidity.
- Dropped Traceur for [Babel][8] (formerly 6to5) because it has more readable compiled
  code. You can gather more specifics on comparisons of the two at their website.

[1]:https://github.com/gulpjs/gulp
[2]:https://github.com/slushjs/slush
[3]:https://github.com/jadejs/jade
[4]:https://github.com/learnboost/stylus
[5]:https://github.com/krkn/kouto-swiss
[6]:https://github.com/tj/nib
[7]:https://github.com/jshint/jshint
[8]:https://github.com/babel/babel
