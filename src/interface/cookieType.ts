export interface GetCookie {
  (key: string): string | undefined;
}

export interface SetCookie {
  (key: string, value: string, day: number): void;
}
