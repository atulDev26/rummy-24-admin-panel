export const formatAmount = (amount) => {
  if (amount >= 1e9) {
    return (amount / 1e9).toFixed(1) + "B"; // Billions
  } else if (amount >= 1e6) {
    return (amount / 1e6).toFixed(1) + "M"; // Millions
  } else if (amount >= 1e3) {
    return (amount / 1e3).toFixed(1) + "K"; // Thousands
  }
  return amount;
};

export const getRole = (agent) => {
  switch (agent?.role) {
    case 1:
      return "[admin]";
    case 2:
      return "[accounts]";
    case 3:
      return "[analyst]";
    case 4:
      return "[sub admin]";
    default:
      return "[unknown role]";
  }
};
