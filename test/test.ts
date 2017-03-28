/// <reference path="../node_modules/@types/node/index.d.ts" />

import {Run} from "finnlp";
import "../src/index";

const result = new Run("me &amp; Alex").intercepted.indexOf(" & ");

if(result === -1) {
    console.log("test failed");
    console.log(result);
    process.exit(1);
}
else {
    console.log("Test passed");
}