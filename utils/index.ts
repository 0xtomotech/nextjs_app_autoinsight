import { CarProps, FilterProps } from "@/types";


export const generateImageUrl = () => {
  const randomNumber = Math.floor(Math.random() * 530) + 1;

  return `/player_images_small/${randomNumber}.png`
}

export const generateRandomCarImageUrl = () => {
const randomNumber = Math.floor(Math.random() * 15) + 1;

return `/cars/car${randomNumber}.png`
}

export async function fetchCars(filters: FilterProps) {

  const { manufacturer, year, fuel, limit, model } = filters;
  
  const headers = {
    'X-RapidAPI-Key': '2dd99f97aamsheb0833beeea5a70p147974jsn1e4b954dd823',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }

  const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {
      headers: headers,
  });

  const cars = await response.json() as CarProps[];
  return cars.map((car) => ({
    ...car,
    imageUrl: generateRandomCarImageUrl(),
    // Generate a unique key for each car and add a random number to the end
    uniqueKey: `${car.make}-${car.model}-${Math.floor(Math.random() * 1000)}`,
  }));
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };

export const updateSearchParams = (type: string, value: string) => {

  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`

  return newPathname;
}