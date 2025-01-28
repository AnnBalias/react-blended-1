import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export const formattedDate = data => {
  return formatDistanceToNow(new Date(data), { addSuffix: true });
};
