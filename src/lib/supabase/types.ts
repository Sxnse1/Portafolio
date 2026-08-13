export interface Database {
  public: {
    Tables: {
      contact_submissions: {
        Row: {
          id: string;
          name: string;
          email: string;
          message: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          message: string;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["contact_submissions"]["Insert"]>;
        Relationships: [];
      };
      page_visits: {
        Row: {
          id: number;
          count: number;
        };
        Insert: {
          id?: number;
          count?: number;
        };
        Update: Partial<Database["public"]["Tables"]["page_visits"]["Insert"]>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: {
      increment_page_visits: {
        Args: Record<PropertyKey, never>;
        Returns: number;
      };
    };
  };
}
