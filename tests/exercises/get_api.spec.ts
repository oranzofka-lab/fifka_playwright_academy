// tests/learning/api/
// sending_api.spec.ts
import { test } from "@playwright/test";

// ? Parametr request nám umožňuje práci s API (posílání, konfigurace...)
test("Send GET Request", async ({ request }) => {
  await request.get("https://tegb-backend-877a0b063d29.herokuapp.com/train");
});

test("GET Request with URL Parameter", async ({ request }) => {
  await request.get("https://tegb-backend-877a0b063d29.herokuapp.com/eshop", {
    params: {
      userId: 2014,
    },
  });
});

test("GET Request with Header", async ({ request }) => {
  await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/train/header",
    {
      headers: {
        train: "Request s hlavickou",
      },
    }
  );
});
test("POST request with JSON body", async ({ request }) => {
  await request.post(
    "https://tegb-backend-877a0b063d29.herokuapp.com/train/body",
    {
      data: {
        stringProperty: "Ahoj",
        numberProperty: 666,
        booleanProperty: false,
      },
    }
  );
});

test("POST Request s Body", async ({ request }) => {
  await request.post(
    "https://tegb-backend-877a0b063d29.herokuapp.com/eshop/register",
    {
      data: {
        username: "Zuzana Bielikova",
        password: "123456",
        email: "testneco@example.net",
      },
    }
  );
});
