export const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    value,
  ); // TODO

export const formatDate = (value: Date): string => {
  const date = new Date(value);
  return Intl.DateTimeFormat('pt-BR').format(date);
};
