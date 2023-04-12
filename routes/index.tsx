/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";
import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <Head>
        <title>Moe Counter by NeTT</title>
        <meta name = "description" content="Counter inspired by journey-ad/Moe-counter " />
        <meta name = "theme-color" content="#ff00c3" />
      </Head>
      <img
        src="/icon.webp"
        class={tw`w-12 h-12`}
        alt="Not the fresh logo"
      />
      <p class={tw`my-6`}>
        Front page WIP. Check out the below tho:
      </p>
      <Counter />
      <div class = {tw`mt-6 w-full`}>
        <div class = {tw`mx-auto text-center bg-gray-900 text-white p-1`} onCopy = {e => e.clipboardData?.setData("text/plain", "https://count.nett.moe/get/CUSTOM_NAME/img?theme=gelbooru") }>https://count.nett.moe/get/CUSTOM_NAME/img?theme=gelbooru | asoul | gelbooru-h | moebooru | moebooru-h | rule34 </div>
      </div>
      <a class = {tw`mt-6 block w-full`} href="https://github.com/retraigo/moe-counter">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
          </path>
        </svg>
      </a>
    </div>
  );
}
