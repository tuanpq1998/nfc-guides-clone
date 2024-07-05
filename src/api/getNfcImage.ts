import { delayHelper } from "./general/delay";
import { INfcResponse } from "./types/INfcResponse";

export async function getNfcImage(brand: string, model: string, delayMs = 0) {
  try {
    const start = new Date();
    const response = await fetch(
      `https://nfc-guides.kalapa.vn/api/get-device-data?brand=${encodeURIComponent(
        brand
      )}&name=${encodeURIComponent(model)}`
    );
    const parsed = await response.json();
    await delayHelper(+start, delayMs);
    return (parsed as INfcResponse).data;
  } catch (error) {
    // console.log("getBranch::error", error);
    return Promise.reject(error);
  }
}
