import { delayHelper } from "./general/delay";
import { IResponse } from "./types/IResponse";

export async function getModel(brand: string, delayMs = 0) {
  try {
    const start = new Date();
    const response = await fetch(
      `https://nfc-guides.kalapa.vn/api/get-devices${
        brand != "" ? `?brand=${brand}` : ""
      }`
    );
    const parsed = await response.json();
    await delayHelper(+start, delayMs);
    return (parsed as IResponse).data;
  } catch (error) {
    // console.log("getBranch::error", error);
    return Promise.reject(error);
  }
}
