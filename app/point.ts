export class Point {
  number: number;
  name: string;
  address: string;
  position: Position;
  banking: boolean;
  bonus: boolean;
  status: string;
  contract_name: string;
  bike_stands: number;
  available_bike_stands: number;
  available_bikes: number;
  last_update: number;
}

export class Position {
  lat: number;
  lng: number;
}
