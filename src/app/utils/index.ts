/**
 * @function formatCurrency
 * Format number as currency (GBP)
 *
 * @param {number | string} currency
 * @returns {string} number formatted as currency.
 *
 * @example
 *   formatCurrency(0)
 *   // => £0.00
 *
 * @example
 *   formatCurrency(1.5)
 *   // => £1.50
 *
 */
export function formatCurrency(currency: number | string) {
  const c = parseInt(currency.toString(), 10);

  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 2,
  }).format(c);
}
