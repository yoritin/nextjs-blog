import { format,parseISO } from 'date-fns'
import { VFC } from 'react'

type Props = {
  dateString: string
}

const Date: VFC<Props> = ({ dateString }) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}

export default Date
