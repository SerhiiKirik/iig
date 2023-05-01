export interface TabType {
  id: number,
  title: string,
  Content: () => JSX.Element,
}

export interface TransitionHistory {
  date: string,
  customerId: string,
  price: number,
}

export interface Transition {
  id: number;
  price: number;
  currency: string;
  history: TransitionHistory[];
}
