import {
  ImageGenFluxChibskyRequest,
  ImageGenFluxProRequest,
  ImageUpscalingRequest,
} from "@/types";
import axios from "axios";
import { replicate_base_url } from "./config";

export async function imageGenFluxpro(payload: ImageGenFluxProRequest) {
  try {
    const url = `${replicate_base_url}/image-gen-with-flux-1.1`;
    const response = await axios.post(url, payload);
    return response?.data;
  } catch (err) { 
    console.log(err);
  }
}

export async function imageGenFluxLoraChibsky(
  payload: ImageGenFluxChibskyRequest
) {
  try {
    const url = `${replicate_base_url}/image-gen-with-flux-lora-GHIBSKY-style`;
    const response = await axios.post(url, payload);
    return response?.data;
  } catch (err) {
    console.log(err);
  }
}

export async function imageGenFluxLoraCnstll(
  payload: ImageGenFluxChibskyRequest
) {
  try {
    const url = `${replicate_base_url}/image-gen-with-flux-lora-CNSTLL-style`;
    const response = await axios.post(url, payload);
    return response?.data;
  } catch (err) {
    console.log(err);
  }
}

export async function imageGenFluxLoraTok(payload: ImageGenFluxChibskyRequest) {
  try {
    const url = `${replicate_base_url}/image-gen-with-flux-lora-TOK-style`;
    const response = await axios.post(url, payload);
    return response?.data;
  } catch (err) {
    console.log(err);
  }
}

export async function imageGenFluxDevRealism(
  payload: ImageGenFluxChibskyRequest
) {
  try {
    const url = `${replicate_base_url}/image-gen-with-flux-dev-realism`;
    const response = await axios.post(url, payload);
    return response?.data;
  } catch (err) {
    console.log(err); 
  }
}

export async function imageUpscaling(payload: ImageUpscalingRequest) {
  try {
    const url = `${replicate_base_url}/image-upscaler`;
    const response = await axios.post(url, payload);
    return response?.data;
  } catch (err) {
    console.log(err);
  }
}

export async function bgRemover(payload: ImageUpscalingRequest) {
  try {
    const url = `${replicate_base_url}/background-remover`;
    const response = await axios.post(url, payload);
    return response?.data;
  } catch (err) {
    console.log(err);
  }
}
