export type ServiceResponse<T> = {
  status: number;
  message?: string;
  data?: T | { message: string };
};