import React, { useEffect, useState } from "react";
import { useFilterContext } from "../../../../context/products/ProductsFilterContext";
import { ProductService } from "../../../adapters/api/products/ProductService";
import { ProductAccordionLine } from "./ProductAccordionLine";
import { Product } from "../../../domain/Product";

export const ProductsList: React.FC = () => {
  const { productName, productDescription, shouldFilter, setShouldFilter } =
    useFilterContext();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async (withFilters: boolean) => {
    setLoading(true);

    try {
      let fetchedProducts: Product[];

      if (withFilters && (productName.trim() || productDescription.trim())) {
        console.log("ProductsList getAll with filters:", {
          productName,
          productDescription,
        });
        fetchedProducts = await ProductService.getAll(
          productName.trim() || undefined,
          productDescription.trim() || undefined,
        );
      } else {
        console.log("ProductsList getAll without filters");
        fetchedProducts = await ProductService.getAll();
      }

      setProducts(fetchedProducts);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    } finally {
      setLoading(false);

      if (withFilters) {
        setShouldFilter(false);
      }
    }
  };

  useEffect(() => {
    fetchProducts(false);
  }, []);

  useEffect(() => {
    if (shouldFilter) {
      fetchProducts(true);
    }
  }, [shouldFilter]);

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
