const URL = "https://dummyjson.com";

export async function getProducts() {
  const res = await fetch(`${URL}/products`);
  const data = await res.json();
  return data.products;
}

export async function getProductById(id: number | string) {
  const res = await fetch(`${URL}/products/${id}`);
  const data = await res.json();
  return data;
}