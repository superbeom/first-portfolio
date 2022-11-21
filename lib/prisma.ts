import { PrismaClient } from "@prisma/client";

declare global {
  var client: PrismaClient;
}

let client: PrismaClient;

if (process.env.NODE_ENV === "production") {
  client = new PrismaClient();
} else {
  if (!global.client) {
    global.client = new PrismaClient();
  }
  client = global.client;
}

export default client;
