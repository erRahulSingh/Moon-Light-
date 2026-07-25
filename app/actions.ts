"use server";

export async function submitAdmissionForm(formData: {
  studentName: string;
  parentName: string;
  phone: string;
  email?: string;
  targetClass: string;
  address: string;
  message?: string;
}) {
  try {
    console.log("[Admission Enquiry Submitted]:", formData);
    // Future integration endpoint (e.g. Resend, SMTP, ERP webhook) goes here.
    return { success: true, message: "Enquiry received successfully!" };
  } catch (err: any) {
    return { success: false, error: err.message || "Failed to process form." };
  }
}

export async function submitContactForm(formData: {
  fullName: string;
  phone: string;
  email?: string;
  subject: string;
  message: string;
}) {
  try {
    console.log("[Contact Message Submitted]:", formData);
    // Future integration endpoint goes here.
    return { success: true, message: "Message received successfully!" };
  } catch (err: any) {
    return { success: false, error: err.message || "Failed to process message." };
  }
}
