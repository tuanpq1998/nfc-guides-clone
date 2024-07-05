import { IResponse } from "./IResponse";

export interface INfcResponse extends Pick<IResponse, "error"> {
  data: INfcResponseData;
}

export interface INfcResponseData {
  brand: string;
  image: string;
  name: string;
}
