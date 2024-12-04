"use server";

export async function subscribeEmail(email: string) {
  if (!email) {
    return { error: "Email is required" };
  }
  if (
    !email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    return { error: "Invalid email" };
  }

  // TODO: Send email to user

  return { success: "Email subscribed" };
}
