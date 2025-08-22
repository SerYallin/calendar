import { IValue, IValidateResults } from '@lib/types';
export interface IRequestFormUiProps {
  values: { [key: string]: string };
  errors: IValidateResults;
  onChange: (value: IValue) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}
