export class UtilService {
  public static getItem(key: string) {
    const itemStr = localStorage.getItem(key);

    // if the item doesn't exist, return null
    if (!itemStr) {
      return null;
    }

    const item = JSON.parse(itemStr);
    return item;
  }

  public static setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
