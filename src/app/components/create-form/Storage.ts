export interface Storage {

    saveDocument(getValueForm: any): string; 
    loadDocument(idDoc: string): any; 
    getDocuments(): string[]; 
  }