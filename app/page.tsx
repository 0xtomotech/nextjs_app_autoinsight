import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import { fetchCars, generateRandomCarImageUrl } from "@/utils";
import Image from "next/image";

export default async function Home() {

  const allCars = await fetchCars();
  console.log(allCars);

  const isDataEmpty = !Array.isArray(allCars) || allCars.length <1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">

        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold"> Auto Catalogue</h1>
          <p>Explore the cars you like</p>
        </div>

        <div className="home__filters">
          <SearchBar />
          <div className="home__container-filter">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} imageUrl={car.imageUrl} key={car.uniqueKey} />
                ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results...</h2>
            <p>something</p>
          </div>
        )}

      </div>
    </main>
  );
}
