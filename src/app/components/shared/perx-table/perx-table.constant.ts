export const PAGE_SIZE = 5;

export const PAGE_SIZE_OPTIONS = [5, 10, 25, 100];

export interface PerxDisplayedColumns {
  name: string;
  value: any;
  type?: 'image';
  disableSort?: boolean;
  disableFilter?: boolean;
}
