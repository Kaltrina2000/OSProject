import { apiRequest} from "@api/Api";
import { News } from "./news.client";

export const getAllNews = () => apiRequest<{}, News[]>({ url: "comments" });