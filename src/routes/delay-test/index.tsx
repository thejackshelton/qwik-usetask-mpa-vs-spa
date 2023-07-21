import { component$, useTask$, useVisibleTask$ } from '@builder.io/qwik';

export default component$(() => {
    const start = performance.now();

    useTask$(() => {
        const end = performance.now()
        const elapsed = end - start;
        console.log(`useTask$ took ${elapsed} milliseconds to execute.`);
    })

    useVisibleTask$(() => {
        const end = performance.now()
        const elapsed = end - start;
        console.log(`useVisibleTask$ took ${elapsed} milliseconds to execute.`);
    })

  return (
    <>
        <p>This is the useTask$ vs. useVisibleTask$ delay test page!</p>
        <a href="/">Back to home</a>
    </>
  )
});