---
title: "Fissa"
description: "Not only one person should decide what's playing on a party"
pubDate: "Jun 02 2023"
headerColor: "#5FB2FF"
heroImage: "/project/fissa/showreel.png"
hidden: false
---

_Problem_
<span>
    Having friends at a party with a bad taste in music stinks. This is what <a href="https://www.linkedin.com/in/milan-van-der-maaten-307a1697/" target="_blank">Milan</a> and myself have experienced countless times.
    <br aria-hidden="true" /><br aria-hidden="true" />
    Instead of complaining about it constantly we decided to do something about it.
</span>

As I am always looking for an excuse to start a new pet-project to learn and explore new technologies, Fissa seemed like a perfect opportunity to do so.

<!-- <hr />

<a href="" target="_blank">Read about the design process</a>

<hr /> -->

<img src="/project/fissa/emojis.png" alt="Emojis used in the fissa application" loading="lazy" />

## Requirements
Before starting the project we set some ground rules:

1. Fissa should be available on both iOS and Android
2. No onboarding! Like jokes, apps lose their charm when you have to explain them
3. A fissa never stops, there is always music playing
4. Have some fun, this is not work

<img src="/project/fissa/design_exploration.png" alt="Screens exploring the visual style of fissa" loading="lazy" />

_The journey to <a href="https://docs.expo.dev/" target="_blank">expo</a>_
<span>
    I was wary of using any cross-platform framework after having some subpar experiences with <a href="https://github.com/phonegap" target="_blank">Phonegap</a>, <a href="https://ionicframework.com/" target="_blank">Ionic</a> and <a href="https://flutter.dev/" target="_blank">Flutter</a>.
    <br aria-hidden="true" /><br aria-hidden="true" />
    However, we never give up, technology moves forward, and there seems to be a _new kid on the block_; <a href="https://reactnative.dev/" target="_blank">React Native</a>.
</span>

<p>
    <span>
        As with all the cross-platform tools I felt more like a <em>configurator</em> than a developer. Constantly fighting the framework to get things done, and having to write platform specific code anyway.
        <br aria-hidden="true" /><br aria-hidden />
        What happened to the fun? Was this the end of the project?
        <br aria-hidden /><br aria-hidden />
        I take great inspiration from <a href="https://www.youtube.com/@t3dotgg/videos" target="_blank">Theo Browne</a> which is how I stumbled upon the <a href="https://create.t3.gg/" target="_blank">T3-stack</a>. No more configuration<sup class="text-sm">*</sup>, just coding!
        <br aria-hidden /><br aria-hidden />
        <span class="text-sm">
            <sup>*</sup>
            <em>
                Beside some minor <a href="https://docs.expo.dev/eas/" target="_blank">Expo Application Services</a> to make the release process easier
            </em>
        </span>
    </span>
</p>

**The promise of the T3-stack**
<img src="/project/fissa/t3.png" alt="The T3-stack comes neatly pre-configured with tailwind css, expo, next-js, prisma, trpc, next-auth and typescript" loading="lazy" />

_The great reset_
<span>
    No, not <a href="https://www.weforum.org/great-reset/" target="_blank">that one</a>.
    <br aria-hidden /><br aria-hidden />
    Working with TypeScript (for the past 5 years) has been a real game-changer and I would never go without, neither should any sane person. However, even TypeScript still has it's quirks.
    <br aria-hidden="true" /><br aria-hidden="true" />
    Luckily, our TypeScript wizard <a href="https://www.youtube.com/@mattpocockuk" target="_blank">Matt Pocock</a> released an awesome tool right when we started with Fissa; <a href="https://github.com/total-typescript/ts-reset" target="_blank">ts-reset</a>.
</span>

```typescript
// Import in a single file, then across your whole project...
import "@total-typescript/ts-reset";

// .filter just got smarter!
const filteredArray = [1, 2, undefined].filter(Boolean); // number[]
```

**It's a fissa, but within our boundaries**
<img src="/project/fissa/colors.png" alt="The different color pallettes Fissa has" loading="lazy" />

## A colorful Fissa
Music is a blend of personal expression and social connection. By creating a collaborative playlist, and sharing your favorite tunes, we create a social experience.
<br aria-hidden /><br aria-hidden />
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

<img src="/project/fissa/colors_in_app.png" alt="screens displaying the different color palettes being used inside of the app" loading="lazy" />

## Less = more
Milan and myself are both big fans of Spotify and we recognize its strength. They focus on one thing, and they do it very well; explore and discover music. 
<br aria-hidden /><br aria-hidden />
While building Fissa, Spotify introduced the <span><a href="https://support.spotify.com/us/article/remote-group-session/" target="_blank">remote group session</a></span>. However, this is always a hidden feature, changes constantly and does not seem to have any focus from Spotify.
<br aria-hidden /><br aria-hidden />
Although we want to keep users fully engaged in Fissa, we would never be able to do the exploration of music as well as Spotify does. Therefore we put our focus on managing a collaborative playlist and utilize Spotify for the rest.
<br aria-hidden /><br aria-hidden />
Do one thing, and do it well.

**Explorations on how we could add songs to a fissa via Spotify**
<img src="/project/fissa/add_songs.png" alt="three different explorations of how we could add songs to a fissa" loading="lazy" />

_Free with limits_
<span>
    Spotify provides us with an <a href="https://developer.spotify.com/documentation/web-api" target="_blank">awesome API</a>. Unfortunately, and understandably, it is <a href="https://developer.spotify.com/documentation/web-api/concepts/rate-limits" target="_blank">rate limited</a>.
    <br aria-hidden /><br aria-hidden />
    Users need to be signed in to their Spotify account to use Fissa, therefore we can utilize the unlimited API calls from personal accounts. Everything which is not related to the Fissa itself, like searching for songs, is done via the Fissa app and stored using <a href="https://github.com/pmndrs/zustand" target="_blank">zustand</a>.
    <br aria-hidden /><br aria-hidden />
    This reduces the load on Fissa's servers and simultaneously also allows us to host more Fissas without hitting Spotify's usage restrictions. Win-Win.
<span>

**Code for getting the songs information of the Fissa**
```typescript
export const useTracks = (trackIds?: string[]) => {
  const { addTracks, tracks, spotify } = useSpotifyStore();

  const cachedTrackIds = useMemo(() => new Set(tracks.map(({ id }) => id)), [tracks]);

  const uncachedTrackIds = useMemo(
    () => trackIds?.filter((trackId) => !cachedTrackIds.has(trackId)) ?? [],
    [trackIds, cachedTrackIds],
  );

  const requestedTracks = useMemo(
    () => trackIds?.map((trackId) => tracks.find(({ id }) => id === trackId)).filter(Boolean) ?? [],
    [trackIds, tracks],
  );

  useMemo(async () => {
    const promises = splitInChunks(uncachedTrackIds).map(
      async (chunk) => (await spotify.getTracks(chunk)).tracks,
    );

    const newTracks = (await Promise.all(promises)).flat();

    if (newTracks.length) addTracks(newTracks);
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

By playing around with animal-eomjis as copy we try to lighten the mood of Fissa and bring some extra joy to the experience.
<br aria-hidden /><br aria-hidden />
Besides, it was a fun exercise to find the right animal for the different states of Fissa.

**A few examples of the use of emojis in Fissa**
<img src="/project/fissa/emojis_in_screens.png" alt="A few examples on how emojis are used in Fissa. For example, when skipping a song you will see the text 'ssssssssssssskipping song' with the emoji of a snake" loading="lazy" />

## The Fissa never stops.
What is more annoying than being at a party, finally having the courage to show your moves and then the musics stops.
<br aria-hidden /><br aria-hidden />
This should never happen, the Fissa never stops.
<br aria-hidden /><br aria-hidden />
Whenever the queue is about to get empty, Fissa will add recommended tracks. These will be semi-random tracks, utilizing the <span><a href="https://developer.spotify.com/documentation/web-api/reference/get-recommendations" target="_blank">Spotify recommendations</a></span>, but most importantly they will be based on the tracks which gained the most votes.

```typescript
class FissaService {
    // ...

    playNextTrack = async () => {
        // ...

        if (nextTracks.length <= TRACKS_BEFORE_ADDING_RECOMMENDATIONS) {
            const withPositiveScore = tracks.filter(({ totalScore }) => totalScore > 0);
            const tracksToMap = withPositiveScore.length ? withPositiveScore : tracks;

            const trackIds = tracksToMap
                .map(({ trackId }) => trackId)
                .sort(randomSort)
                .slice(0, TRACKS_BEFORE_ADDING_RECOMMENDATIONS);

            try {
                await this.trackService.addRecommendedTracks(pin, trackIds, access_token!);
            } catch (e) {
                logger.error(`${fissa.pin}, failed adding recommended tracks`, e);
            }
        }
    }
}
```

**The playlist is democratic, votes determine the queue**
<img src="/project/fissa/voting.png" alt="The more votes a song has, the sooner it will be played on the Fissa" loading="lazy" />

_Determining the next song_
As the Fissa is a collaborative playlist, users determine the order of the songs. This is done by voting on the songs. This proved to be the most challenging part of the project.
<br aria-hidden /><br aria-hidden />
Strap-on your seatbelt, the next part will contain a lot of nerd info.

Initially we just stored the index of the songs directly into the database. This way we put an unique index on the track for data integrity, and we could easily sort the tracks by their index.

**Initial modal of a song within Fissa**
```prisma
model Track {
    index  Int @db.SmallInt
    trackId String @map("track_id") @db.VarChar(22)

    fissa Fissa @relation(fields: [pin], references: [pin], onDelete: Cascade)
    pin String @db.VarChar(4)
    
    @@id([pin, trackId])
    @@unique([pin, index])
    @@map("tracks")
}
```

Easy peasy, lemon squeezy right? Well, not quite. This approach has a few drawbacks:

1. When we add a song to Fissa, we up-vote it. Who wouldn't up-vote their own track, right? But this means that whenever a track is added, we must recalculate the indexes of all the tracks below it because their order might change.
2. Users can up- or down-vote tracks anytime, leading to constant index changes. While this isn't inherently problematic, it can disrupt ongoing index recalculations.
3. Because of the unique index constraint in prisma (read postgres), we had to update it twice: once to clear the new index and once to update the moved track's index.

**Messy code of calculating the new indexes**
```typescript
class FissaService {
  // ...

  reorderPlaylist = async (pin: string) => {
    const { currentIndex, tracks } = await this.getRoomDetailedInformation(pin);

    try {
      const { updates, fakeUpdates, newCurrentIndex } =
        this.generateTrackIndexUpdates(tracks, currentIndex);

      await this.db.$transaction(async (transaction) => {
        if (currentIndex !== newCurrentIndex) {
          await transaction.room.update({
            where: { pin },
            data: { currentIndex: newCurrentIndex },
          });
        }

        // (1) Clear out the indexes
        await transaction.room.update({
          where: { pin },
          data: { tracks: { updateMany: fakeUpdates } },
        });

        // (2) Set the correct indexes
        await transaction.room.update({
          where: { pin },
          data: { tracks: { updateMany: updates } },
        });
      });
    } catch (e) {
      console.log(e);
    }
  };

  private generateTrackIndexUpdates = (
    tracks: Track[],
    currentIndex: number,
  ) => {
    const tracksWithScoreOrAfterIndex = tracks.filter(
      ({ score, index }) => score !== 0 || index > currentIndex,
    );
    const tracksWithoutScoreAndBeforeIndex = tracks.filter(
      ({ score, index }) => score === 0 && index <= currentIndex,
    );

    const sortedTracks = tracksWithScoreOrAfterIndex.sort(
      (a, b) => b.score - a.score,
    );

    const sorted = tracksWithoutScoreAndBeforeIndex.concat(sortedTracks);
    const newCurrentIndex = sorted.findIndex(
      ({ index }) => index === currentIndex,
    );

    const updates = sorted
      .map(({ trackId, index }, newIndex) => {
        if (index === newIndex) return; // No need to update

        return {
          where: { trackId },
          data: { index: newIndex },
        };
      })
      .filter(Boolean);

    const fakeUpdates = updates.map((update, index) => ({
      ...update,
      data: { ...update.data, index: index + tracks.length + 100 }, // Set to an non-existing index
    }));

    return { updates, fakeUpdates, newCurrentIndex };
  };
}
```

And for the final nail in the coffin, Fissa is hosted serverless on <span><a href="https://vercel.com/" target="_blank">vercel</a></span>. As nobody pays for their pet-project in this day-and-age, we only have 10 seconds to perform any operation. Recalculating and updating indexes of Fissas with 50+ songs proved to be not possible. Even with the latest <span><a href="https://www.prisma.io/blog/prisma-and-serverless-73hbgKnZ6t" target="_blank">9x improvements</a></span> in prisma serverless cold starts.

**Trial to move the reordering logic to a node process**
```typescript
export const reorderPlaylistSync = async () => {
  const fissas = await api.fissa.sync.active.query();

  for (const fissa of fissas) {
    if (!fissa.shouldReorder) continue;
    if (isUpdating.get(fissa.pin)) continue;

    try {
      isUpdating.set(fissa.pin, true);
      console.log(`[${fissa.pin}] reordering playlist`);

      if (differenceInSeconds(fissa.expectedEndTime, new Date()) < 5) continue;

      const { updates, newCurrentIndex } = generateTrackIndexUpdates(
        fissa.tracks,
        fissa.currentIndex,
      );

      if (!updates.length) {
        console.info(`No updates needed for fissa ${fissa.pin}`);
        continue;
      }

      await api.fissa.sync.reorder.mutate({
        pin: fissa.pin,
        updates,
        newCurrentIndex,
      });

      console.log(`[${fissa.pin}] reordering done`);
    } catch (error) {
      console.error(`[${fissa.pin}] reordering failed`, error);
    } finally {
      isUpdating.delete(fissa.pin);
    }
  }
};
```

**Simple node server to run the reordering**
```typescript
import { Cron } from "croner";

import { reorderPlaylistSync } from "./syncs";

// ┌──────────────── (optional) second (0 - 59)
// │ ┌────────────── minute (0 - 59)
// │ │ ┌──────────── hour (0 - 23)
// │ │ │ ┌────────── day of month (1 - 31)
// │ │ │ │ ┌──────── month (1 - 12, JAN-DEC)
// │ │ │ │ │ ┌────── day of week (0 - 6, SUN-Mon)
// │ │ │ │ │ │       (0 to 6 are Sunday to Saturday; 7 is Sunday, the same as 0)
// │ │ │ │ │ │
// * * * * * *
Cron(`*/10 * * * * *`, reorderPlaylistSync);

console.info("Sync server is running");
```

_The path of least resistance_
Eventually we settled on inferring the position of a track based on its' score. The score is updated each time a user votes on a track and the score will be cleared whenever the song is being played.
<br aria-hidden /><br aria-hidden />
By using the logic which was already in Fissa, we could actually remove a lot of code and make the whole process a lot more stable.

**Storing the score in the database**
```prisma
model Track {
    trackId String @map("track_id") @db.VarChar(22)

    fissa Fissa @relation(fields: [pin], references: [pin], onDelete: Cascade)
    pin String @db.VarChar(4)

    votes Vote[]
    score Int @db.SmallInt @default(0) // Value used for ordering tracks in a fissa

    @@unique([pin, trackId])
    @@map("tracks")
}
```

**THE algorithm**
```typescript
type Dates = { lastUpdateAt: Date; createdAt: Date; };

export type SortableTrack = Dates & {
  score: number;
  trackId: string;
  hasBeenPlayed: boolean;
};

const sortTrack = (date: keyof Dates) => (a: SortableTrack, b: SortableTrack) => {
  const aTime = a[date].getTime();
  const bTime = b[date].getTime();

  if (a.score !== b.score) return b.score - a.score;
  if (aTime === bTime) return a.trackId.localeCompare(b.trackId);

  return aTime - bTime;
};

export const sortFissaTracksOrder = <T extends SortableTrack>(
  tracks?: T[],
  activeTrackId?: string | null,
) => {
  if (!tracks) return [];

  const { played, unplayed, active } = tracks.reduce(
    (acc, track) => {
      const { hasBeenPlayed, trackId } = track;

      if (trackId === activeTrackId) acc.active = track;
      else if (hasBeenPlayed) acc.played.push(track);
      else acc.unplayed.push(track);

      return acc;
    },
    { played: [] as T[], unplayed: [] as T[], active: null as T | null },
  );

  const sortedPlayedTracks = played.sort(sortTrack("lastUpdateAt"));
  const sortedUnplayedTracks = unplayed.sort(sortTrack("createdAt"));

  return [...sortedPlayedTracks, ...(active ? [active] : []), ...sortedUnplayedTracks];
};
```

Phew, you made it all the way through the though end. That last part was code heavy. Here, have a 🍪.
<br aria-hidden /><br aria-hidden />
Code can be scary right, but it's also fun.

<a href="mailto:mail@sanderboer.nl?subject=Let's chat!&body=Hi, I'd like to talk about Fissa," aria-label="Send me an email so I can tell you more" target="_blank">I'd like to know more</a>

<hr />

_Experience fissa_
<span>
    <a href="https://apps.apple.com/nl/app/fissa-houseparty/id1632218985" target="_blank">App store</a><br aria-hidden /><br aria-hidden />
    <a href="https://play.google.com/store/apps/details?id=com.fissa" target="_blank">Play store</a>
</span>

_In collaboration with_
<span>
    <a href="https://milanvdmaaten.netlify.app" target="_blank">Milan van der Maaten</a>
</span>

_References_
<span>
    <a href="https://github.com/xiduzo/t3-fissa" target="_blank">Code</a><br aria-hidden /><br aria-hidden />
    <a href="https://github.com/xiduzo/fissa" target="_blank">Prototype code</a>
</span>
