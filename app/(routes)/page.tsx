import getBillboards from "@/actions/get-billboard";
import getProducts from "@/actions/get-prodcuts";
import Billboard from "@/components/Billboard";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/Container";
import React from "react";
export const revalidate = 0;
const HomePage = async () => {
  const billboard = await getBillboards("65268966fd9564b7c00f4bd5");
  const products = await getProducts({ isFeatured: true });
  console.log(products);

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
