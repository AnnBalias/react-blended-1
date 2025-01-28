import format from 'date-fns/format';

export const formattedDateToNow = data => {
  return format(new Date(data), 'Pp');
};
