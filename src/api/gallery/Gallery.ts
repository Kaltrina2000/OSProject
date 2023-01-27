import { apiRequest } from "@api/Api";
import { Gallery } from "./gallery.client";


export const getAllPhotos = () => apiRequest<{}, Gallery[]>({ url: "photos" });


