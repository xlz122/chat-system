export type State = {};

export type Props = {
  location?: Record<string, any>;
};

export type InputChange = React.ChangeEventHandler<HTMLInputElement>;

export type Response = {
  code?: number;
  data?: unknown | Record<string, any>;
  msg?: string;
};
