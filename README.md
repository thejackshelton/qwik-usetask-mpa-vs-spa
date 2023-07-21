# Qwik City App ⚡️

- [Qwik Docs](https://qwik.builder.io/)
- [Discord](https://qwik.builder.io/chat)
- [Qwik GitHub](https://github.com/BuilderIO/qwik)
- [@QwikDev](https://twitter.com/QwikDev)
- [Vite](https://vitejs.dev/)

---

# useTask$ MPA vs. SPA differences.

This repository highlights the differences between what runs in a useTask$ when running SPA with <Link /> and MPA on page refresh.

The reason this reproduction was created, is because we noticed there was functionality that worked on MPA, that did not on SPA navigation. 

When we don't specify the **isServer** and **isBrowser** conditionals, it will be rendered based on MPA or SPA navigation.

For example:

```tsx
  useTask$(({ track }) => {
      console.log('hi!')
  })
```

Will run on the server on MPA

```tsx

useTask$(({ track }) => {
    console.log('hi!')
})
```

Will run on the client with SPA

For example, in a real-world use case like Qwik UI, we currently have an accordion with the defaultValue prop, this prop intends to open the accordion item by default.

We also have two tasks, one that resets the trigger values, and another that will open the default task.

```tsx
useTask$(function resetTriggersTask({ track }) {
    track(() => selectedTriggerIdSig.value);

    if (isBrowser && behavior === 'single' && triggerId !== selectedTriggerIdSig.value) {
    isTriggerExpandedSig.value = false;
    }
});

// task runs once on server
useTask$( function defaultValueTask() => {
    if (isServer && defaultValue && !isDefaultValueOpenedSig.value) {
        isTriggerExpandedSig.value = true;
        isDefaultValueOpenedSig.value = true;
    }
})
```

If we were to use this on MPA, it works perfectly fine, but on SPA, that isServer conditional would never run. Knowing this:

- Would I need to duplicate the logic to isBrowser for it to work with SPA?
- Should it be fully client-side so that it works with SPA?


