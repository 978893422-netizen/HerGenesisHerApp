
export enum GrowthStage {
  JUVENILE = 'Juvenile', // 幼年
  ADULT = 'Adult', // 成年
  BREEDING = 'Breeding', // 繁育
  RE_BREEDING = 'Re-Breeding' // 再繁育
}

export interface Species {
  id: string;
  name: string; // e.g., "Dodo"
  scientificName: string;
  extinctionYear: string;
  origin: string;
  description: string;
  extinctionCause: string; // Added field
  image: string; // Placeholder URL
  color: string; // Theme color for UI
}

export interface PetMetadata {
  saturation: number; // 0-100+
  intimacy: number;   // 0-100+
  health: number;     // 0-100+
  lastFedAt: number;  // Timestamp
  lastPettedAt: number; // Timestamp
  lastCleanedAt: number; // Timestamp
}

export interface Pet {
  id: string;
  speciesId: string;
  name: string; // Nickname
  stage: GrowthStage;
  metadata: PetMetadata;
  mintDate: number;
}

export interface PopulationData {
  day: string;
  Dodo: number;
  Mammoth: number;
  Thylacine: number;
  IrishElk: number;
}
