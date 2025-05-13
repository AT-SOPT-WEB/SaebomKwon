export const getUserInfo = async (user) => {
  try {
    const response = await fetch(`https://api.github.com/users/${user}`);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    return { status: "resolved", data };
  } catch {
    return { status: "rejected", data: null };
  }
};
