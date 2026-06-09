import { httpClient } from "../api/httpClient";

export const submitContactInquiry = async (payload) => {
  if (import.meta.env.VITE_ENABLE_MOCK_API !== "false") {
    await new Promise((resolve) => {
      window.setTimeout(resolve, 900);
    });

    return {
      id: `lead-${Date.now()}`,
      status: "received",
      message: "Your consultation request has been received.",
    };
  }

  const { data } = await httpClient.post("/contact", payload);
  return data;
};
