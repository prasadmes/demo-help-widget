export default function updateMailUsContents({ subject, message }) {
  const data = JSON.stringify({ subject, message })
  localStorage.setItem('mailUsContents', data)
}
