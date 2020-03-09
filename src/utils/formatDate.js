import moment from "moment"
import "moment/locale/es";

const formatDate = () => {
  let beforeDay = moment().subtract(1, 'days').format("YYYY-MM-DD")
  let FormatBeforeDay = moment().locale("es").subtract(1, 'days').format("LLL")
  let formatStringDayBefore = FormatBeforeDay.split(" ", 3).join(' ')

  let todayData = moment().format("YYYY-MM-DD")
  let FormatTodayDay = moment().locale("es").format("LLL")
  let formatStringDayToday = FormatTodayDay.split(" ", 3).join(' ')

  let afterDay = moment().add(2, 'days').format("YYYY-MM-DD")
  let FormatAfterDay = moment().locale("es").add(1, 'days').format("LLL")
  let formatStringDayAfter = FormatAfterDay.split(" ", 3).join(' ')

  const data = [
    {
      day: beforeDay,
      formatStringDay : formatStringDayBefore
    },
    {
      day: todayData,
      formatStringDay: formatStringDayToday,
    },
    {
      day: afterDay,
      formatStringDay: formatStringDayAfter
    }
  ]

  return data;

}

export default formatDate;


