---
title: "<Suspense/>"
description: "Unravelling the magic from React"
pubDate: "Nov 20 2023"
headerColor: "#5DD4F4"
heroImage: "/blog/suspense/showreel.png"
hidden: true
---

<p>
    <span>
        While trying to answer <a href="https://stackoverflow.com/q/77479989/4655177" target="_blank">this question</a> on StackOverflow, I realized that I didn't know enough about the workings of Suspense myself to give a good answer. So I decided to do some research and write this article.
    </span>
</p>

> _`<Suspense/>`_ `Suspense` lets you display a fallback until its children have finished loading
> <cite><a href="https://react.dev/reference/react/Suspense" target="_blank">react documentation</a></cite>

```jsx
<Suspense fallback={<Loading />}>
  <SomeComponent />
</Suspense>
```

_But how does it work?_
<span>
Neat, but _how_ does it actually works? _How_ does `Suspense` know when to show the fallback and when to show the child component? When I asked around I just got the answer that it's "magic". But I don't like magic code, so let's find out how it works
</span>

## TL;DR
`<Suspense/>` acts as a fancy `try/catch` block.<br aria-hidden/><br aria-hidden/>When a `Promise` has been thrown, `Suspense` will render the fallback component until the promise resolves.

```jsx
<Suspense fallback={{/* Catch */}}> 
  {/* Try */}
</Suspense>
```

**How people perceive the Suspense component**
<img src="/blog/suspense/magic.gif" alt="an animated gif showing a popular 'magic' meme"/>

Hey you made it this far! This means you are interested in how things works instead of accepting the magic, high five ✋.

<p>
<span>
As seen in the TL;DR whenever <i>something</i> throws a promise from within the <code>Suspense</code> component will render the fallback component until the promise resolves. 
</span>
</p>

```jsx
function ComponentWhichThrows() {
  throw new Promise(() => {}); // This will trigger the fallback state

  return "hi there";
};

export default function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>loading....</div>}>
        <ComponentWhichThrows />
      </Suspense>
    </div>
  );
}
```

Simple as that! A fancy `try/catch` for React.

Let's see if we can make it a bit more interesting and make an async call using suspense.

First we need to create something we need to wait for.

```javascript
export function fakeApi(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello " + name);
    }, 2000);
  });
};
```


<p>
<span>
To play nice with <code>Suspense</code> we need to have a method in which we can wrap our promise. For this we can create a poor-mans implementation of Reacts <a href="https://react.dev/reference/react/use" target="_blank">use</a> hook<sup class="text-sm">*</sup>.
<br aria-hidden/>
<span class="text-sm">
    <sup>*</sup>
    <em>
      As of writing this article, Reacts <code>use</code> hook is still experimental and not available in the stable release.
    </em>
</span>
</p>


```javascript
// This is a poor-mans implementation of Reacts use hook
// please don't use this in production
export function use(promise) {
  if (promise.status === "fulfilled") {
    return promise.value;
  } else if (promise.status === "rejected") {
    throw promise.reason;
  } else if (promise.status === "pending") {
    throw promise;
  } else {
    promise.status = "pending";
    promise.then(
      (result) => {
        promise.status = "fulfilled";
        promise.value = result;
      },
      (reason) => {
        promise.status = "rejected";
        promise.reason = reason;
      }
    );
    throw promise;
  }
}
```

And finally we can use this inside of our component

```jsx
function YourComponent() {
  const data = use(fakeApi("xiduzo"))

  return <div>{data}</div>;
};

export default function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>loading user</div>}>
        <YourComponent />
      </Suspense>
    </div>
  );
}
```

<p>
    <span>
        See <a href="https://codesandbox.io/s/use-example-7rhlnv" target="_blank">this codesandbox</a> for a working example.
    </span>
</p>


## Why would you use `<Suspense/>`
<p>
<span>
Suspense is a great way to handle asynchronous data fetching. It is a great alternative to the <a href="https://react.dev/reference/react/useEffect#fetching-data-with-effects" target="_blank">traditional way</a> of handling data fetching in React.
</span>
</p>

_Lazy loading_
<span>
Suspense was initially added to React to support <a href="https://legacy.reactjs.org/docs/code-splitting.html#reactlazy" target="_blank">lazy loading of components</a>. But currently can also be used to await data fetching and adding of <a href="https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary" target="_blank">error boundaries</a>.
</span>

_User Experience_
<span>
In order to create a better User Experience (UX) it is important to show the user something while we are waiting for data to load. It is also possible to <a href="https://codesandbox.io/s/66nw34?file=/ArtistPage.js&utm_medium=sandpack" target="_blank">nest <code>Suspense</code> components</a> for a more fine-grained experience.
</span>

_Be a step ahead_
<span>
Even though `Suspense` is still experimental, libraries like <a href="https://relay.dev/docs/migration-and-compatibility/suspense-compatibility/" target="_blank">Relay</a>, <a href="https://swr.vercel.app/docs/suspense" target="_blank">swr</a> or <a href="https://tanstack.com/query/latest/docs/react/guides/suspense" target="_blank">@tanstack/react-query</a> have added support for it.
</span>

## Why wouldn't you use `<Suspense/>`
<p>
<span>
It is important to recognize `Suspense` is still an experimental feature and should be used with caution. 
</span>
</p>

_Server components_
<span>
The whole concept of `Suspense` might also get overshadowed by <a href="https://react.dev/reference/react/use-server" target="_blank">server components</a> in the future. Where <a href="https://react.dev/reference/react/use#caveats" target="_blank">the documentation</a> mentions: <em>When fetching data in a Server Component, prefer `async` and `await` over `use`.</em>
</span>

## Conclusion
`Suspense` can be a powerful tool in your toolbox, especially if you truly understand how it functions. Don't treat it as your new shiny hammer and start hitting everything with it. Use it wisely and it will be a great addition to your work.

_Other reads_
<span>
    <a href="https://codesandbox.io/s/ymcj43" target="_blank">Reacts codesandbox example</a><br aria-hidden /><br aria-hidden />
    <a href="https://blog.logrocket.com/data-fetching-react-suspense/" target="_blank">Data fetching with React Suspense</a>
</a>
</span>