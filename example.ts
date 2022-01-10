import { add, multiply } from "./deps.ts";
import {assertEquals} from "https://deno.land/std@0.116.0/testing/asserts.ts";

function totalCost(outbound: number, inbound: number, tax: number): number {
  return multiply(add(outbound, inbound), tax);
}

console.log(totalCost(19, 31, 1.2));
console.log(totalCost(45, 27, 1.15));

const namesToLength = {"Kim":3, "Lara": 4};

assertEquals(namesToLength, {"Kim":3, "Lara": 4});
