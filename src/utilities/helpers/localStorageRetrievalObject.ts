/*
 * Retrieve an item from local storage based on the provided key.
 * @param - a key
 * @returns - the value from local storage
*/
const localStorageRetriever = (key: string): string | null | Record<string, any> | any[] => {
    const storedItem = localStorage.getItem(key);

        try {
            const parsedItem = JSON.parse(storedItem as string);
            if (typeof parsedItem === 'object' && parsedItem !== null) {
                return parsedItem;
            } else {
                return parsedItem;
            }
        } catch (error) {
            return storedItem;
        }
    }


export default localStorageRetriever;