import * as React from "react";
import { useEffect, useState } from "react";
import { Product } from "../../domain/Product";
import { ListProductsUseCase } from "../../usecases/list-products-use-case";
import { productServiceSingleton } from "../../shared/singletons/ProductServiceSingleton";
import { ProductAccordionLine } from "./ProductAccordionLine";

export const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const listProductsUseCase = new ListProductsUseCase(productServiceSingleton);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const fetchedProducts = await listProductsUseCase.getAll();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      {products.map((product, index) => (
        <ProductAccordionLine key={index} product={product} index={index} />
      ))}
    </div>
  );
};
