# Steering Behaviors Demos

This project contains a collection of demos, runnable in any browser, that
showcase *steering behaviors*, a series of techniques that can be used to
simulate lifelike movement of autonomous objects in games, visualizations, and
the like. These techniques are modeled after the way that people or animals
navigate, especially around each other, and were pioneered by [Craig
Reynolds][craig-reynolds], who detailed them in a [paper][reynolds-99].

[reynolds-99]: http://www.red3d.com/cwr/papers/1999/gdc99steer.pdf
[craig-reynolds]: http://www.red3d.com/cwr/

## Rationale

Lifelike movements, when done well, have the power to take a mediocre game,
moving graphic, or user interface to the next level. Steering behaviors, in
particular, are essential to any game where characters move on their own (either
in response to the player or other autonomous characters in the game).

As seen in the paper above, the ideas behind steering behaviors have been around
for over 25 years, and it's possible to find open-source implementations of them
on the internet. However, the code -- and the explanations around them -- are
pretty outdated, having been written in an age where Java and C++ were
prevalent. These days, browsers can do a lot of things thanks to JavaScript.

I wanted to learn the magic behind these behaviors and to bring them to life in
a way that anyone could access them.

## Overview

While this project is a work in progress at the moment, the hope is that the
techniques on display here will eventually include:

* Seeking
* Fleeing
* Pursuing
* Evasion
* Offset pursuit
* Arrival
* Obstacle avoidance
* Wandering / Exploring
* Foraging
* Path following
* Wall following
* Containment
* Flow field following
* Unaligned collision avoidance
* Separation
* Cohesion
* Alignment
* Flocking
* Leader following
* Interposing
* Shadowing
* Docking
* Hiding

## Architecture

* The visual engine layer is provided by [Pixi.js][pixi].
* Code is written in TypeScript, compiled by Webpack.

[pixi]: http://www.pixijs.com/

## Development

* Run `yarn` to install dependencies.
* Run `npm start` to start a Webpack development server.
* Go to <http://localhost:8080> to view the demos.

## Deployment

* Run `npm run build` to generate a build of the app in `build/`.
* Run `bin/deploy` to publish the app to GitHub Pages.

## Authorship/License

All code here is copyright (c) 2017 Elliot Winkler under the
[MIT license](LICENSE).

Portions of this code copied from [pixi-seed] and are copyright (c) 2015 Edwin
Webb under the [MIT license](LICENSE).

[pixi-seed]: https://github.com/edwinwebb/pixi-seed
