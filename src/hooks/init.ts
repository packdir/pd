import { Hook } from "@oclif/core";
import * as fs from "fs";

import { HOME_DIR, CONFIG_FILE } from "../constants.js";

// Config
import * as dotenv from "dotenv";
dotenv.config({ path: CONFIG_FILE });

// Sqlite3
//export const sqlite3;
const hook: Hook<"init"> = async function (opts) {
  // Root directory
  if (!fs.existsSync(HOME_DIR)) {
    fs.mkdirSync(HOME_DIR);
  }
};

export default hook;
