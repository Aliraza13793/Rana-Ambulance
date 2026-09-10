export function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(" ");
}

export function formatPhoneNumber(phone: string) {
  return phone.replace(/(\+92)(\d{3})(\d{7})/, "$1-$2$3");
}

export function generateWhatsAppLink(phone: string, message?: string) {
  const cleanPhone = phone.replace(/[+\-\s]/g, "");
  const encodedMessage = message ? encodeURIComponent(message) : "";
  return `https://wa.me/${cleanPhone}${encodedMessage ? `?text=${encodedMessage}` : ""}`;
}

export function generateCallLink(phone: string) {
  const cleanPhone = phone.replace(/[+\-\s]/g, "");
  return `tel:${cleanPhone}`;
}
