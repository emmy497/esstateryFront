
import api from "./api";

// const BASE_URL = "https://estateryback.onrender.com/api/properties";

export const getProperties = async (
  params: {
    search?: string;
    type?: string;
    status?: string;
  } = {},
) => {
  const res = await api.get("/properties", { params });
  return res.data;
};

export const getPropertyById = async (id: string) => {
  const res = await api.get(`/properties/${id}`);
  return res.data;
};

export const updatePropertyStatus = async (
  id: string,
  status: "active" | "unlisted",
) => {
  const res = await api.patch(`/properties/${id}/status`, { status });
  return res.data as { message: string; property: unknown };
};

export const updateProperty = async (
  id: string,
  body: Record<string, unknown>,
) => {
  const res = await api.patch(`/properties/${id}`, body);
  return res.data as { message: string; property: unknown };
};

export const updatePropertyImages = async (
  id: string,
  keepImages: string[],
  removedImages: string[],
  newFiles: File[],
) => {
  const formData = new FormData();
  formData.append("keepImages", JSON.stringify(keepImages));
  formData.append("removedImages", JSON.stringify(removedImages));
  newFiles.forEach((file) => formData.append("images", file));
  const res = await api.patch(`/properties/${id}/images`, formData);
  return res.data as { message: string; property: unknown };
};
