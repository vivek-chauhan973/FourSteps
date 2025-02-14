export const login = async (username, password) => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
  
    if (!res.ok) {
      console.log("login failed")
    }
  
    const { accessToken } = await res.json();
    localStorage.setItem("accessToken", accessToken);
    return accessToken;
  };
  