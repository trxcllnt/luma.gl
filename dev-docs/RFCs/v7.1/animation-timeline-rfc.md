# RFC: Hiearchical Animation Timeline in luma.gl

* **Author**: Tarek Sherif
* **Date**: April, 2019
* **Status**: **Draft**


## Summary

This RFC specifies a timeline management system to facilate more complex animations.


## Background

Currently, the only support for animation provided by luma.gl is the passing of elapsed wall time and frame counts as `animationProps`. This pushes all orchestration of animation to the application, which can end up being quite complex. Since systems like deck.gl's transitions and luma.gl's uniform animations track `animationProps` time, there is no way to control them independantly of wall time.


## Customers

The Elevate team has requested the ability to controls transitions in deck.gl, specifically, the ability to pause, play and scrub through an animation.


## Overview

A timeline manager that can provide `time` values to be used in animations are independent of wall time. The timeline manager should support the following features:

- play: provide a `time` value that elapses at the same rate as wall time
- pause: `time` remains constant at the current value
- set: set `time` to a specific value
- multiple `channels` that provide `channelTime` values, related to `time`, but with the following additional properties:
  * `rate`: a scaling factor that indicates how quickly `channelTime` elapses relative to `time`
  * `startTime`: an offset into `time` at which `channelTime` begins elapsing
  * `duration`: how long `channelTime` runs for
  * `wrapMode`: what to do when `duration` elapses. Options are `clamp` (stop elapsing) or `loop` (go back to 0)

The `channels` provide a mechanism for orchestrating complex animatons elapse differently but all relative to the same base timeline.

## Example

A timeline with two channels:
- Channel 1:
  - rate: 0.5
  - startTime: 1
  - duration: 2
  - wrapMode: loop
- Channel 2:
  - rate: 2
  - startTime: 5
  - duration: 10
  - wrapMode: clamp

```
                   pause  play
                     |     |
Wall time:      0----5----10----15----20
`time`          0----5     5----10----15
Channel 1:       0---2     2---2---2---2
Channel 2:                 0----10
```

## Implentation

`AnimatonLoop` will have a new `timeline` property which is an instance of the class `Timeline`. The `Timeline` class will provide the following methods:

- `play`: elapse `time` automatically with wall time
- `pause`: stop elapsing `time` automatically with wall time
- `reset`: set `time` to 0
- `setTime(time): set `time` to a specific value
- `getTime`: get current `time`
- `addChannel(props)`: create a new channel with given properties and return a handle to it
- `getChannelTime(handle)`: get the current `channelTime`
- `removeChannel(handle)`: