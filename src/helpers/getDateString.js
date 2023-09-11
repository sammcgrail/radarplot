export default function getDateString(data) {
  const DATEOPTIONS = { dateStyle: "full", timeStyle: "short" };
  const DATE = new Date(data * 1000);
  if (DATE instanceof Date) {
    return new Intl.DateTimeFormat("en-US", DATEOPTIONS).format(DATE);
  } else {
    return undefined;
  }
}
