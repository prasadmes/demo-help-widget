export function persistToStorage(data) {
  localStorage.setItem('mailUsContents', JSON.stringify(data))
}

export function getFromStorage() {
  return localStorage.getItem('mailUsContents')
}
