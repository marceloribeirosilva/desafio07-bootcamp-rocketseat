const formatDateJSON = (value: Date): string => {
  const date = new Date(value);
  return Intl.DateTimeFormat('pt-BR').format(date);
};

export default formatDateJSON;
