---
title: "Fissa"
description: "Not only one person should decide what's playing on a party"
pubDate: "Jun 02 2023"
headerColor: "#5FB2FF"
backgroundColor: "#FFF"
heroImage: "/portfolio/fissa/showreel.png"
---

_Problem_
<span>
    Having friends at a party with a bad taste in music stinks. This is what <a href="https://www.linkedin.com/in/milan-van-der-maaten-307a1697/" target="_blank">Milan</a> and myself have experienced countless times.
    <br /><br />
    Instead of complaining about it constantly we decided to do something about it.
</span>

As I am always looking for an excuse to start a new pet-project to learn and explore new technologies, Fissa seemed like a perfect opportunity to do so.

<hr />

<a href="" target="_blank">Read about the design process</a>

<hr />

![Emojis used in the fissa application](/portfolio/fissa/emojis.png)

## Requirements
Before starting the project we set some ground rules:

1. Fissa should be available on both iOS and Android
2. No onboarding! Like jokes, apps lose their charm when you have to explain them
3. Have some fun, this is not work

![Screens exploring the visual style of fissa](/portfolio/fissa/design_exploration.png)

_The journey to <a href="https://docs.expo.dev/" target="_blank">expo</a>_
<span>
    I was wary of using any cross-platform framework after having some subpar experiences with <a href="https://github.com/phonegap" target="_blank">Phonegap</a>, <a href="https://ionicframework.com/" target="_blank">Ionic</a> and <a href="https://flutter.dev/" target="_blank">Flutter</a>.
    <br /><br />
    However, we never give up, technology moves forward, and there seems to be a _new kid on the block_; <a href="https://reactnative.dev/" target="_blank">React Native</a>.
</span>

<p>
    <span>
        As with all the cross-platform tools I felt more like a <em>configurator</em> than a developer. Constantly fighting the framework to get things done, and having to write platform specific code anyway.
        <br /><br/>
        What happened to the fun? Was this the end of the project?
        <br/><br/>
        I take great inspiration from <a href="https://www.youtube.com/@t3dotgg/videos" target="_blank">Theo Browne</a> which is how I stumbled upon the <a href="https://create.t3.gg/" target="_blank">T3-stack</a>. No more configuration<sup class="text-sm">*</sup>, just coding!
        <br/><br/>
        <span class="text-sm">
            <sup>*</sup>
            <em>
                Beside some minor <a href="https://docs.expo.dev/eas/" target="_blank">Expo Application Services</a> to make the release process easier
            </em>
        </span>
    </span>
</p>

**The promise of the T3-stack**
![The T3-stack comes neatly pre-configured with tailwind css, expo, next-js, prisma, trpc, next-auth and typescript](/portfolio/fissa/t3.png)

_The great reset_
<span>
    No, not <a href="https://www.weforum.org/great-reset/" target="_blank">that one</a>.
    <br/><br/>
    Working with TypeScript has been a real game-changer and I would never go without, neither should any sane person. However, even TypeScript still has it's quirks.
    <br /><br />
    Luckily, our TypeScript wizard <a href="https://www.youtube.com/@mattpocockuk" target="_blank">Matt Pocock</a> released an awesome tool right when we started with Fissa; <a href="https://github.com/total-typescript/ts-reset" target="_blank">ts-reset</a>.
</span>

```typescript
// Import in a single file, then across your whole project...
import "@total-typescript/ts-reset";

// .filter just got smarter!
const filteredArray = [1, 2, undefined].filter(Boolean); // number[]
```

**It's a fissa, everybody will get their own experience**
![The different color pallettes Fissa has](/portfolio/fissa/colors.png)

## A colorful Fissa
Music is a blend of personal expression and social connection. By creating a collaborative playlist, and sharing your favorite tunes, we create a social experience.
<br/><br/>
However, we also want to give the user a personal experience. This is why decided to give each Fissa their own color palette.

_Tailwind_
<span>
    Tailwind offers a great way to <a href="https://tailwindcss.com/docs/configuration" target="_blank">configure</a> a theme. Initially this was the setup we went for.
</span>

**Initial configuration of the theme**
```typescript
// Tailwind config.js

const pinkey = {
  name: 'pinkey',
  100: "#FFCAF7",
  500: "#FF5FE5",
  900: "#150423",
  gradient: ["#FF5FE5", "#FF5F72"],
};

// ...

const themes = [pinkey, orangy, greeny, blueey, sunney, limey];

const theme = themes[Math.floor(Math.random() * themes.length)];

const config = {
  theme: {
    extend: {
      colors: { theme },
      textColor: { theme },
      backgroundColor: { theme },
      ringColor: { theme },
    },
  },
};
```

This gave some great extension methods which we could use like the `text-theme-900` or `bg-theme-500`. Perfect, <span class="italic">strik erom</span> right? Nope, since we are using <span><a href="https://www.nativewind.dev/" target="_blank">NativeWind</a></span> this does not work well.
<br/><br/>
Instead we are are just exporting and importing the theme and set the `style` property of the components we want to use it with.


**Configure the themes**
```typescript
// Tailwind config.js

// ...

const theme = themes[Math.floor(Math.random() * themes.length)];

module.exports.theme = theme;
```

```tsx
// Component.tsx

import { theme } from "@fissa/tailwind-config";

const Component = () => {
    return (
        <SafeAreaView style={{ backgroundColor: theme["900"] }}>
        </SafeAreaView>
    )
}
```

![screens displaying the different color palettes being used inside of the app](/portfolio/fissa/promotion_screens.png)



_2. Less = more_
lorum ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.

_3. Beyond the functionalities_
lorum ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.

<a href="mailto:mail@sanderboer.nl?subject=Let's chat!&body=Hi, I'd like to talk about Fissa," aria-label="Send me an email to I can tell you more" target="_blank">I'd like to know more</a>

<hr />

_In collaboration with_
<span>
    <a href="https://milanvdmaaten.netlify.app" target="_blank">Milan van der Maaten</a>
</span>

_References_
<span>
    <a href="https://github.com/xiduzo/t3-fissa" target="_blank">Code</a><br/><br/>
    <a href="https://github.com/xiduzo/fissa" target="_blank">Prototype code</a>
</span>
