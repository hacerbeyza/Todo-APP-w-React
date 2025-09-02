// Görevlerin localStorage'da saklanması için oluşturulan dosya. 
// key-value değerleriyle todoları tutuyoruz

export const setItem = (key, value) =>  {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error)  {
    console.error("Hata", error)
  }
};

export const getItem = (key) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Hata", error);
    return [];
  }
}