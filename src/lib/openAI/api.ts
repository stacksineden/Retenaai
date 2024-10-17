import axios from "axios";
import { authHeaders } from "./config";
import { OpenAIRequest } from "@/types";

export async function generateImageOpenAI(payload:OpenAIRequest) {
    const url = "https://api.openai.com/v1/images/generations";
    const requestPayload = {
      prompt:payload?.prompt,
      model: "dall-e-3",
      n: 1,
      response_format: "url",
      size: "1024x1024",
    };
    try {
      const response = await axios.post(url, requestPayload, {
        headers: {
          ...authHeaders,
          "Content-Type": "application/json",
        },
      });
      // console.log(response, "api response image generation");
      if (response?.data) {
        return response?.data?.data[0]?.url;
      } else {
        throw new Error(`Failed to create thread. Status: ${response.status}`);
      }
    } catch (err) {
      console.log(err);
    }
  }