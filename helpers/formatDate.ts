import customParseFormat from 'dayjs/plugin/customParseFormat' // ES 2015
import dayjs from "dayjs";


export default function fomatDate(date: string) {
  dayjs.extend(customParseFormat);
  const _date = dayjs(date, "DD-MM-YYYY")
  return _date.format("DD.MM.YYYY");
}