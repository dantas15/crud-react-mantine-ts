export interface Document {
  id: number;
  document: string;
}

export interface User {
  id: number;
  name: string;
  documents: Document[];
}
