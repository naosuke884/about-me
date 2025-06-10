import { redirect } from "react-router";

export async function loader() {
  // 302 mean temporary redirect.
  // allow changing the destination in the future.
  return redirect("/about", 302);
}
