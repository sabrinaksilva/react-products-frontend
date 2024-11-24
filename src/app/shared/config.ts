export const getEnvVariable = (key: string): string => {
  const value = process.env[`REACT_APP_${key}`];
  if (!value) {
    throw new Error(`Environment variable ${key} is not defined`);
  }
  return value;
};

export const API_URL = getEnvVariable("API_URL");
