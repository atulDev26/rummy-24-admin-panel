export const formatAmount = (amount) => {
    if (amount >= 1e9) {
      return (amount / 1e9).toFixed(1) + 'B'; // Billions
    } else if (amount >= 1e6) {
      return (amount / 1e6).toFixed(1) + 'M'; // Millions
    } else if (amount >= 1e3) {
      return (amount / 1e3).toFixed(1) + 'K'; // Thousands
    }
    return amount;
  };