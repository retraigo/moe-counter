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
        <div class = {tw`mx-auto text-center bg-gray-900 text-white p-1`} onCopy = {e => e.clipboardData?.setData("text/plain", "https://count.nett.moe/get/CUSTOM_NAME/img") }>https://count.nett.moe/get/CUSTOM_NAME/img</div>
      </div>
    </div>
  );
}
