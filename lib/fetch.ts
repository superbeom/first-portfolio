const apiResult = async (response: Response) => {
  if (response.status === 400 || response.status === 500) return;

  const result = await response.json();

  return result;
};

const apiBooleanResult = async (status: number) => {
  if (status === 400 || status === 500) return;

  return true;
};

export const getUserApi = async () => {
  const response = await fetch("http://localhost:3000/api/getUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return apiResult(response);
};

export const getExperiencesApi = async () => {
  const response = await fetch("http://localhost:3000/api/getExperiences", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return apiResult(response);
};

export const getProjectsApi = async () => {
  const response = await fetch("http://localhost:3000/api/getProjects", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return apiResult(response);
};

export const getSkillsApi = async () => {
  const response = await fetch("http://localhost:3000/api/getSkills", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return apiResult(response);
};

export const getSocialsApi = async () => {
  const response = await fetch("http://localhost:3000/api/getSocials", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return apiResult(response);
};
