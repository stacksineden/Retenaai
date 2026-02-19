import axios from "axios";

export interface LocationResponse {
  country_code: string;
  country: string;
}

export async function getUserCountry(): Promise<string | null> {
  try {
    const response = await axios.get(
      "https://www.cloudflare.com/cdn-cgi/trace",
      {
        responseType: "text",
      }
    );

    const text = response.data as string;

    const match = text.match(/loc=([A-Z]{2})/);

    if (match) {
      return match[1]; // "NG"
    }

    return null;
  } catch (error) {
    console.error("Location error:", error);
    return null;
  }
}