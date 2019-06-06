import dateformat from 'dateformat'

export const formatMonthDay = (date) => {
  return dateformat(date, 'mmmm dS, yyyy')
}
