export function formatDate(dateString: string) {
  const date = new Date(dateString)

  const formatDate = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full',
  }).format(date)

  return formatDate
}
