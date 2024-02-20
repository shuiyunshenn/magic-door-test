export const toPrice = (number: number | string) => {
  const raw = typeof number === 'string' ? Number(number) : number

  if (Number.isNaN(raw)) {
    throw new Error('number is invalid')
  }

  return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
}
