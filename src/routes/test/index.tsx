import { component$, useTask$ } from '@builder.io/qwik';
import { isServer, isBrowser } from '@builder.io/qwik/build';

export default component$(() => {
    // useTask without conditionals
  useTask$(() => {
    console.log('Without conditionals!')
  })

  useTask$(() => {
    if (isServer) {
        console.log('server!')
    }
  })
  
  useTask$(() => {
    if (isBrowser) {
        console.log('browser!')
    }
  })

  return (
    <>
        <p>This is the test page!</p>
        <a href="/">Back to home</a>
    </>
  )
});