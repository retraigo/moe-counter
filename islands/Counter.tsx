/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";

import { Button } from "../components/Button.tsx";
export default function Counter() {
  const [n, setn] = useState("foo");
  let name = n;
  return (
    <div class={tw`flex flex-col space-y-8 w-full`}>
      <div class = {tw`flex flex-row items-center`}><span>https://count.nekooftheabyss.moe/get/</span><input class = {tw`p-1 border border-gray-600`} type = "text" onInput={e => name = e.currentTarget.value} value={name} /><span>/img</span></div>
      <button class = {tw`p-2 bg-gray-300`} onClick={e => setn(name)}>Test</button>

      <p class={tw`flex-grow-1 font-bold text-xl`}>Image</p>
      <img src={`/get/${n}/img`} />
    </div>
  );
}
