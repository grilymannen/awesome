import { browser } from "$app/environment";

function createUser() {
  if (!browser) return;
  const user = $state(localStorage.getItem("user") ?? {});
  $effect(() => {
    localStorage.setItem("user", user);
  });

  return user;
}

export const user = createUser();