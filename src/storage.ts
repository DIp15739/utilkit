export function setItemSync(key: string, value: unknown): void {
  try {
    const stringValue = JSON.stringify(value)
    localStorage.setItem(key, stringValue)
  } catch (error) {
    console.error(`Error setting item ${key} to localStorage`, error)
  }
}

export async function setItemAsync(key: string, value: unknown): Promise<void> {
  try {
    const stringValue = JSON.stringify(value)
    await Promise.resolve(localStorage.setItem(key, stringValue))
  } catch (error) {
    console.error(`Error setting item ${key} to localStorage`, error)
    throw new Error(`Unable to set item: ${error}`)
  }
}

export function getItemSync(key: string): unknown {
  try {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : null
  } catch (error) {
    console.error(`Error getting item ${key} from localStorage`, error)
    return null
  }
}

export async function getItemAsync(key: string): Promise<unknown> {
  try {
    const item = await Promise.resolve(localStorage.getItem(key))
    return item ? JSON.parse(item) : null
  } catch (error) {
    console.error(`Error getting item ${key} from localStorage`, error)
    throw new Error(`Unable to get item: ${error}`)
  }
}

export function removeItemSync(key: string): void {
  try {
    localStorage.removeItem(key)
  } catch (error) {
    console.error(`Error removing item ${key} from localStorage`, error)
  }
}

export async function removeItemAsync(key: string): Promise<void> {
  try {
    await Promise.resolve(localStorage.removeItem(key))
  } catch (error) {
    console.error(`Error removing item ${key} from localStorage`, error)
    throw new Error(`Unable to remove item: ${error}`)
  }
}

export function clearSync(): void {
  try {
    localStorage.clear()
  } catch (error) {
    console.error('Error clearing localStorage', error)
  }
}

export async function clearAsync(): Promise<void> {
  try {
    await Promise.resolve(localStorage.clear())
  } catch (error) {
    console.error('Error clearing localStorage', error)
    throw new Error(`Unable to clear localStorage: ${error}`)
  }
}
