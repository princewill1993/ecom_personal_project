export function formatCurrency(amount, locale = "en-US", currency = "USD") {
  if (typeof amount !== "number") {
    throw new Error("Amount must be a number");
  }

  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  });

  return formatter.format(amount);
}

export const serverUrl = "http://localhost:3000/api/v1";
