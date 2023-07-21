import { component$, useTask$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {

  return (
    <>
      <h1>Hi 👋</h1>
      <p>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </p>

      {/* SPA navigation */}
      <div>
        <Link href="/test">Go to useTask$ test page</Link>
      </div>
      <div>
        <Link href="/delay-test" >useTask$ vs. useVisibleTask$ delay</Link>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
