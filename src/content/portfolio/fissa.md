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
3. A fissa never stops, there is always music playing
4. Have some fun, this is not work

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
    Working with TypeScript (for the past 5 years) has been a real game-changer and I would never go without, neither should any sane person. However, even TypeScript still has it's quirks.
    <br /><br />
    Luckily, our TypeScript wizard <a href="https://www.youtube.com/@mattpocockuk" target="_blank">Matt Pocock</a> released an awesome tool right when we started with Fissa; <a href="https://github.com/total-typescript/ts-reset" target="_blank">ts-reset</a>.
</span>

```typescript
// Import in a single file, then across your whole project...
import "@total-typescript/ts-reset";

// .filter just got smarter!
const filteredArray = [1, 2, undefined].filter(Boolean); // number[]
```

**It's a fissa, but within our boundaries**
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

For <span><a href="https://www.nativewind.dev/" target="_blank">NativeWind</a></span>, the tailwind helper for React Native, this does not work out-of-the-box well and we do need to expose the <span><a href="https://www.nativewind.dev/guides/theme-values" target="_blank">runtime variables</a></span> to use the dynamic theme.


**Exposing the runtime variable**
```typescript
// Tailwind config.js

// ...

const theme = themes[Math.floor(Math.random() * themes.length)];

module.exports.theme = theme;
```

**Using the runtime variable in React Native**
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

![screens displaying the different color palettes being used inside of the app](/portfolio/fissa/colors_in_app.png)

## Less = more
Milan and myself are both big fans of Spotify and we recognize its strength. They focus on one thing, and they do it very well; explore and discover music. 
<br/><br/>
While building Fissa, Spotify introduced the <span><a href="https://support.spotify.com/us/article/remote-group-session/" target="_blank">remote group session</a></span>. However, this is always a hidden feature, changes constantly and does not seem to have any focus from Spotify.
<br/><br/>
Although we want to keep users fully engaged in Fissa, we would never be able to do the exploration of music as well as Spotify does. Therefore we put our focus on managing a collaborative playlist and utilize Spotify for the rest.
<br/><br/>
Do one thing, and do it well.

**Explorations on how we could add songs to a fissa via Spotify**
![three different explorations of how we could add songs to a fissa](/portfolio/fissa/add_songs.png)

_Free with limits_
<span>
    Spotify provides us with an <a href="https://developer.spotify.com/documentation/web-api" target="_blank">awesome API</a>. Unfortunately, and understandably, it is <a href="https://developer.spotify.com/documentation/web-api/concepts/rate-limits" target="_blank">rate limited</a>.
    <br/><br/>
    Users need to be signed in to their Spotify account to use Fissa, therefore we can utilize the unlimited API calls from personal accounts. Everything which is not related to the Fissa itself, like searching for songs, is done via the Fissa app and stored using <a href="https://github.com/pmndrs/zustand" target="_blank">zustand</a>.
    <br/><br/>
    This reduces the load on Fissa's servers and simultaneously also allows us to host more Fissas without hitting Spotify's usage restrictions. Win-Win.
<span>

**Code for getting the songs information of the Fissa**
```typescript
export const useTracks = (trackIds?: string[]) => {
  const { addTracks, tracks, spotify } = useSpotifyStore();

  const cachedTrackIds = useMemo(() => tracks.map(({ id }) => id), [trackIds, tracks]);

  const uncachedTrackIds = useMemo(() => {
    return trackIds?.filter((trackId) => !cachedTrackIds.includes(trackId)) ?? [];
  }, [trackIds, cachedTrackIds]);

  const requestedTracks = useMemo(() => {
    return (
      trackIds?.map((trackId) => tracks.find(({ id }) => id === trackId)).filter(Boolean) ?? []
    );
  }, [trackIds, tracks]);

  useMemo(async () => {
    const promises = splitInChunks(uncachedTrackIds).map(async (chunk) => {
      const { tracks } = await spotify.getTracks(chunk);
      return tracks;
    });

    const tracks = (await Promise.all(promises)).flat();

    if (tracks.length) addTracks(tracks);
  }, [uncachedTrackIds, addTracks, spotify]);

  return requestedTracks;
};
```

<hr />

<a href="https://github.com/xiduzo/t3-fissa/blob/main/packages/utils/stores/spotifyStore.ts#L36" target="_blank">See the full implementation</a>

<hr />

## Beyond the app
Of course any app needs to work, what's the point of having a non-functioning app. Besides playing tracks at a party we wanted Fissa to be a fun experience, both for the users and for us creating Fissa.

**Some playful error message icons**
```typescript
export class Toaster {
  protected defaultIcon(type: ToastType) {
    switch (type) {
      case "error":
        return "🦀";
      case "info":
        return "🦉";
      case "warning":
        return "🦑";
      case "success":
      default:
        return "🐕";
    }
  }
}
```

**React Native implementation of the Toaster**
```typescript
class NativeToast extends Toaster {
  protected show({ type = "success", message, duration, icon }: ToasterProps) {
    const text2 = icon ?? this.defaultIcon(type);
    const visibilityTime = duration ?? ToastAndroid.SHORT;

    switch (Platform.OS) {
      case "ios":
      case "macos":
        return Toast.show({ type, text1: message, text2, visibilityTime });
      case "android":
        return ToastAndroid.show(message, visibilityTime);
    }
  }
}
```

<a href="mailto:mail@sanderboer.nl?subject=Let's chat!&body=Hi, I'd like to talk about Fissa," aria-label="Send me an email to I can tell you more" target="_blank">I'd like to know more</a>

<hr />

_Experience fissa_
<span>
    <a href="https://apps.apple.com/nl/app/fissa-houseparty/id1632218985" target="_blank">App store</a><br/><br/>
    <a href="https://play.google.com/store/apps/details?id=com.fissa" target="_blank">Play store</a>
</span>

_In collaboration with_
<span>
    <a href="https://milanvdmaaten.netlify.app" target="_blank">Milan van der Maaten</a>
</span>

_References_
<span>
    <a href="https://github.com/xiduzo/t3-fissa" target="_blank">Code</a><br/><br/>
    <a href="https://github.com/xiduzo/fissa" target="_blank">Prototype code</a>
</span>
