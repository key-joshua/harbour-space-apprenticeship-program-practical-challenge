export const APIsRequest = {
	fetchScholarshipData: async () => {
		const headers =  { 'Content-Type': 'application/json' };
		const response = await fetch('/api/scholarship', { method: 'GET', headers });

		if (!response.ok) throw new Error("Failed to fetch scholarship data");
		return response.json();
	},
};
