"use server";

export async function captureEmail(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();

  if (!email) return;

  console.info("TODO(claude): wire optional email capture before launch", {
    received: true,
  });
}

