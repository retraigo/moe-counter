/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
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
        <div class = {tw`mx-auto text-center bg-gray-900 text-white p-1`} onCopy = {e => e.clipboardData?.setData("text/plain", "https://moecounter.deno.dev/get/CUSTOM_NAME/img") }>https://moecounter.deno.dev/get/CUSTOM_NAME/img</div>
      </div>
    </div>
  );
}
