export const getData = async(url, setData) => {
    try {
        const response = await fetch(url);
        setData(await response.json());
      } catch(error) {
        console.log(error);
    }
};