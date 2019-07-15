const time = () => {
  const tail = Math.random().toString().slice(3, 6)
  let today = new Date()
  const dd = String(today.getDate()).padStart(2, '0')
  const mm = String(today.getMonth() + 1).padStart(2, '0') // January is 0!
  const yyyy = today.getFullYear()
  const hms = `${today.getHours()}-${today.getMinutes()}-${today.getSeconds()}`
  today = `${mm}${dd}${yyyy}-${hms}-(${tail})`
  return today
}

module.exports = time
