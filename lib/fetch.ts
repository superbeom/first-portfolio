const apiResult = async (response: Response) => {
  if (response.status === 500) return;

  const result = await response.json();

  return result;
};

export const getSocialsApi = async () => {
  const response = await fetch("/api/getSocials", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return apiResult(response);
};
