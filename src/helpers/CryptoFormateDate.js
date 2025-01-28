import { format } from 'path';

export const formattedDateToNow = () => {
  return format(
    new Date('2022-03-14T18:14:13.105Z'),
    "yyyy-MM-dd'T'HH:mm:ss.SSSxxx",
  );
};
