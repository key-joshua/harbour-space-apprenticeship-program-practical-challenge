
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(process.env.HARBOUR_SPACE_API_URL || "https://harbour.space/api/v1/scholarship_pages/data-science-apprenticeship-zeptolab");
    if (!response.ok) return NextResponse.json({ error: "Failed to fetch scholarship data from Harbour.Space" }, { status: response.status });
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Scholarship API error:", error);
    return NextResponse.json({ error: "Unable to retrieve scholarship data" }, { status: 500 });
  }
}
