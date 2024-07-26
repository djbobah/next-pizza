import {
  Categories,
  Container,
  SortPopup,
  Title,
  TopBar,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-5">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="pb-14">
        <div className="flex gap-[60px]">
          {/* фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>
          {/* список товаров */}
          <div className="flex flex-col gap-16">
            {/* <ProductsGroupList title="Пиццы" items={[1, 2, 3, 4, 5]} />
            <ProductsGroupList title="Пиццы" items={[1, 2, 3, 4, 5]} /> */}
            {/* список товаров */}
          </div>
        </div>
      </Container>
    </>
  );
}
