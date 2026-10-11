
import { create } from "zustand";
import { APIsRequest } from "../services/apis";

export interface ScholarshipData {
    id: number;
    slug: string;
    is_published: boolean;
    scholarship: { name: string; description: { type: string; data: string; }[] };
    og_meta: { id: number; scope: string; page_url: string; title: string; desc: string; image_url: string; };
    meta: { id: number; scope: string; title: string; description: string; abstract: string; keywords: string; meta_image: string | null; };
}

export interface ScholarshipState {
  isLoading: boolean;
  error: string | null;
  data: ScholarshipData | null;
  fetchScholarship: () => Promise<void>;
}

export const useScholarshipStore = create<ScholarshipState>((set) => ({
    data: null,
    error: null,
    isLoading: false,

    fetchScholarship: async () => {
        set({ isLoading: true, error: null });

        try {
            const data = await APIsRequest.fetchScholarshipData();
            set({ data, isLoading: false, });
        } catch (error) {
            set({ error: error instanceof Error ? error.message : "Something went wrong", isLoading: false });
        }
    }
}));
