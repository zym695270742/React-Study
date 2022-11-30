export default function useStorage() {
  const fetch = (key, value) => {
    return localStorage.getItem(key)
  }

  const save = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
  }

  return { fetch, save }
}
