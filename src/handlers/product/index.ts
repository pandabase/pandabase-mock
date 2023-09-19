import { GetProductResponse, UpdateProductRequest } from "product-interfaces";

import { products } from "../../data";

function handleGetProducts() {
  const response = { data: products };
  return response;
}

function handleGetProduct(id: number) {
  const product = products.find((c) => c.id === id);

  if (product) {
    return product as GetProductResponse;
  } else {
    return { error: `Product with id ${id} was not found` };
  }
}

function handleUpdateProduct(id: number, data: UpdateProductRequest) {
  const productIndex = products.findIndex((product) => product.id === id);

  if (productIndex !== -1) {
    products[productIndex] = {
      ...products[productIndex],
      ...data,
    };

    return { message: `Product with id ${id} was updated` };
  } else {
    return { error: `Product with id ${id} was not found` };
  }
}

function handleDeleteProduct(id: number) {
  const product = products.filter((product) => product.id !== id);

  if (product) {
    return { message: `Product with id ${id} was deleted` };
  } else {
    return { error: `Product with id ${id} was not found` };
  }
}

export {
  handleGetProducts,
  handleGetProduct,
  handleDeleteProduct,
  handleUpdateProduct,
};
