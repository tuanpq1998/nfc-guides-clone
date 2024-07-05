export interface IResponse {
  data: string[];
  error: IReponseError;
}

export interface IReponseError {
  code: number;
  message: string;
}
