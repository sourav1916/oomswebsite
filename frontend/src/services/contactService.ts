import { httpClient } from '../api/httpClient';
import type { ContactFormValues } from '../schemas/contactSchema';

export interface ContactSubmissionResponse {
  id: string;
  status: 'received';
  message: string;
}

export const submitContactInquiry = async (
  payload: ContactFormValues,
): Promise<ContactSubmissionResponse> => {
  if (import.meta.env.VITE_ENABLE_MOCK_API !== 'false') {
    await new Promise((resolve) => {
      window.setTimeout(resolve, 900);
    });

    return {
      id: `lead-${Date.now()}`,
      status: 'received',
      message: 'Your consultation request has been received.',
    };
  }

  const { data } = await httpClient.post<ContactSubmissionResponse>('/contact', payload);
  return data;
};
