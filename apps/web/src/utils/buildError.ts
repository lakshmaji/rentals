export interface ValidationErrors {
  errorMessage: string;
}

export const buildError = (
  response: any,
  message?: string
): ValidationErrors => {
  if (response.message) {
    if (Array.isArray(response.message) && response.message.length > 0) {
      return {
        errorMessage: response.message.join(","),
      } as ValidationErrors;
    }
    return {
      errorMessage: response.message,
    } as ValidationErrors;
  }
  return {
    errorMessage: message || "something went wrong",
  } as ValidationErrors;
};
