import * as React from "react";
import { useEffect, useState } from "react";
import { Product } from "../../../domain/Product";
import { ProductAccordionLine } from "./ProductAccordionLine";
import { ProductService } from "../../../adapters/api/products/ProductService";

export const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const fetchedProducts = await ProductService.getAll();
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
