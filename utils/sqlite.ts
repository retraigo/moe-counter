import { DB } from "sqlite";

const db = new DB("../count.db");

export interface Counter {
  name: string;
  count: number;
}

db.query(`
CREATE TABLE IF NOT EXISTS moe_count (
    counter_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE,
    counter_name VARCHAR (32) NOT NULL UNIQUE,
    counter_count BIGINT NOT NULL DEFAULT (0)
);
`);

const getOne = db.prepareQuery<[string, number]>(
  `SELECT counter_name as name, counter_count as count from moe_count WHERE counter_name = :name`,
);
const getAll = db.prepareQuery<[string, number]>(
  `SELECT counter_name as name, counter_count as count from moe_count`,
);
const setOne = db.prepareQuery(
  `INSERT INTO moe_count (counter_name, counter_count) VALUES (:name, :count) ON CONFLICT(counter_name) DO UPDATE SET counter_count = :count`,
);

export default {
  get(name: string): Counter {
    try {
      const res = getOne.one({ name });
      return { name, count: res[1] };
    } catch (e) {
      console.error(e);
      return { name, count: 0 };
    }
  },
  all(): Counter[] {
    try {
      const res = getAll.all();
      return res.map((x) => ({ name: x[0], count: x[1] }));
    } catch (e) {
      console.error(e);
      return [{ name: "Moe-chan", count: 0 }];
    }
  },
  set(name: string, count: number): boolean {
    try {
      setOne.execute({
        name,
        count,
      });
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  },
};
