/**
 * Verifica se o valor está dentro do intervalo fornecido.
 *
 * @param {number} valor
 * @param {number} min
 * @param {number} max
 */
export const valorNoIntervalo = (valor, min, max) => {
  return !(valor < min || valor > max)
}
