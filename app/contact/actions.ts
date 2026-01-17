"use server";

import { contactFormSchema, type ContactFormData } from "@/lib/validations";

/**
 * Server Action for handling contact/quote form submissions
 * Validates input using Zod schema
 * 
 * @param formData - Form data from contact form
 * @returns Success or error response
 */
export async function submitContactForm(
  formData: ContactFormData
): Promise<{ success: boolean; error?: string }> {
  try {
    // Validate form data
    const validatedData = contactFormSchema.parse(formData);

    // TODO: Integrate with email service (Resend/SendGrid)
    // For now, we'll just log the data and simulate success
    console.log("Contact form submission:", validatedData);

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // In production, you would send an email here:
    // await sendEmail({
    //   to: "contact@bizneel.com",
    //   subject: `New Quote Request from ${validatedData.name}`,
    //   body: `
    //     Name: ${validatedData.name}
    //     Email: ${validatedData.email}
    //     Phone: ${validatedData.phone || "N/A"}
    //     Company: ${validatedData.company || "N/A"}
    //     Product Interest: ${validatedData.productInterest || "N/A"}
    //     Message: ${validatedData.message}
    //   `,
    // });

    return { success: true };
  } catch (error) {
    console.error("Form submission error:", error);
    
    if (error instanceof Error) {
      return {
        success: false,
        error: error.message,
      };
    }

    return {
      success: false,
      error: "Failed to submit form. Please try again.",
    };
  }
}
