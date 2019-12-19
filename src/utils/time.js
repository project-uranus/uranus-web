import parseISO from 'date-fns/fp/parseISO'
import format from 'date-fns/fp/format'

const customFormat = format('yyyy-MM-dd HH:mm:ss')

export default function ISO2customTime (isoStr) {
  return customFormat(parseISO(isoStr))
}
