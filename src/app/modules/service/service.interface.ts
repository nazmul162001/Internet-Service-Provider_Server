export type IServices = {
  name: string;
  price: Number;
  category: string;
  images: string;
  location: string;
  description: string;
  channel: string;
  hdChannel: string;
  connectionCost: number;
  status: string;
};

export type IServiceFilterRequest = {
  search?: string;
};

// for search
export const ServiceSearchAbleFields = ['name', 'category', 'price'];

// for filter
export const BookFilterAbleFields = ['search', 'name', 'category', 'price'];

export type IPriceFilters = {
  maxPrice?: number;
  minPrice?: number;
};

export const PriceSearchableFields = ['maxPrice', 'minPrice'];
