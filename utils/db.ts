import Data from "../data.json" assert { type: "json" };
const db = await Deno.openKv();

for (const {name, count} of Data) {
    db.set(["count", name], count)
}