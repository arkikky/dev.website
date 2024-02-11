const baseURL = process.env.NEXT_PUBLIC_API;

interface ApiResponse {
  id: any;
  status: number;
  token?: any;
  result?: any;
}

export async function getUser(
  id: any,
  token: any
): Promise<ApiResponse | boolean> {
  try {
    const res = await fetch(`${baseURL}/api/users/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        Origin: "*",
      },
      cache: "no-store",
    });

    if (res.status === 200) {
      return { status: res.status, result: await res.json() } as ApiResponse;
    }
  } catch (error) {
    console.error("Error during API request:", error);

    return false;
  }

  return false;
}
