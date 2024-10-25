export interface ILocaleParams
  extends IParams<{
    locale: string;
  }> {
  children?: React.ReactNode;
}

export interface IParams<T extends Record<string, any>> {
  params: T;
}
