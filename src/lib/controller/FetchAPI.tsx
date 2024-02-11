const baseURL = process.env.NEXT_PUBLIC_API;

interface ApiResponse {
  status: number;
  data?: any;
  result?: any;
}

export async function getFetch(
  url: string,
  data: any
): Promise<ApiResponse | boolean> {
  try {
    const res = await fetch(`${baseURL}${url}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Origin: "*",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    });

    if (res.status === 500 || res.status === 400 || res.status === 401) {
      return { status: res.status };
    } else {
      return { status: res.status, result: await res.json() };
    }
  } catch (error) {
    console.error("Error during API request:", error);

    return false;
  }
}
