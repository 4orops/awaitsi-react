export interface LeadSubmissionPayload {
  name: string;
  email: string;
  phone?: string;
  projectType?: string;
  message?: string;
  businessStage?: string;
  budget?: string;
  description?: string;
}

export interface ApiSubmissionResult {
  success: boolean;
  message: string;
}

export async function submitLead(
  endpoint: '/api/contact' | '/api/quote',
  payload: LeadSubmissionPayload
): Promise<ApiSubmissionResult> {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const contentType = response.headers.get('content-type');
    let data: any = {};
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    }

    if (!response.ok) {
      throw new Error(data.message || `Request failed with status ${response.status}`);
    }

    return {
      success: true,
      message: data.message || 'Submission received successfully!',
    };
  } catch (error: any) {
    console.error(`[API Client] Error submitting to ${endpoint}:`, error);
    return {
      success: false,
      message: error.message || 'Unable to submit at this time. Please try again or email info@awaitsi.co.za.',
    };
  }
}
