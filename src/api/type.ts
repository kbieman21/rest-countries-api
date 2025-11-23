export type Country = {
  name: {
    common: string;
    official: string;
  };
  flags: {
    png: string;
    svg: string;
  };
  region: string;
  population: number;
  cca3: string; // important for border codes
};
