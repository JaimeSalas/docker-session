require("dotenv").config();

const assert = require("assert");
const { client } = require("./dbConnection");

const expectedElements = [
  {
    id: 12,
    title: "Learn Jenkins",
    completed: false,
    due_date: new Date("2020-12-04T18:37:44.234Z"),
    order: null,
  },
  {
    id: 13,
    title: "Learn GitLab",
    completed: true,
    due_date: new Date("2020-12-04T18:37:44.234Z"),
    order: null,
  },
  {
    id: 21,
    title: "Learn K8s",
    completed: false,
    due_date: new Date("2020-12-04T18:37:44.234Z"),
    order: null,
  },
];

const delay = (time = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

(async () => {
  await delay(5_000);
  await client.connect();
  const { rows } = await client.query("SELECT * FROM todos");
  assert.deepStrictEqual(rows, expectedElements);
  await client.end();
})();
