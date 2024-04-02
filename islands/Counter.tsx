/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";

import { Button } from "../components/Button.tsx";

type Theme =
  | "gelbooru"
  | "asoul"
  | "gelbooru-h"
  | "moebooru"
  | "moebooru-h"
  | "rule34";

const options: Theme[] = [
  "asoul",
  "gelbooru",
  "gelbooru-h",
  "moebooru",
  "moebooru-h",
  "rule34",
];

export default function Counter() {
  const [n, setn] = useState<{ name: string; theme: Theme }>({
    name: "foo",
    theme: "gelbooru",
  });
  let name = n.name;
  let theme = n.theme;
  return (
    <div class={tw`flex flex-col space-y-8 w-full `}>
      <div class={tw`md:flex flex-row items-center gap-2`}>
        <div class={tw`md:flex flex-row items-center bg-gray-900 text-white p-3`}>
          <span>https://count.nett.moe/get/</span>
          <input
            class={tw`p-1 w-24 border border-gray-600 bg-gray-800 font-mono`}
            type="text"
            onInput={(e) => name = e.currentTarget.value}
            value={name}
          />
          <span>/img?theme=</span>
          <select class={tw`p-1 border border-gray-600 bg-gray-800 font-mono`} onChange={(e) => theme = e.currentTarget.value as Theme}>
            {options.map((opt) => <option value={opt} selected={opt === "gelbooru"}>{opt}</option>)}
          </select>
        </div>
        <div class={tw`flex gap-2`}>
        <button
          class={tw`p-2 bg-gray-300`}
          onClick={(e) => {
            setn({ name, theme });
          }}
        >
          Test
        </button>
        <button class={tw`p-2 bg-gray-300`} onClick={e => navigator.clipboard.writeText(`https://count.nett.moe/get/${name}/img?theme=${theme}`) }>Copy</button>
        </div>
      </div>
      <p class={tw`flex-grow-1 font-bold text-xl`}>Image</p>
      <img src={`/get/${n.name}/img?theme=${n.theme}`} />
    </div>
  );
}
