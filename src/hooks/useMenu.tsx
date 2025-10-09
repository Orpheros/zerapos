// hooks/useMenu.js
import { useQuery } from "@tanstack/react-query";
import { fetchAllMenu } from "../services/menu-service";

export const menuKeys = {
  all: ["menu"] as const,
  lists: () => [...menuKeys.all, "list"] as const,
  list: (filters: string) => [...menuKeys.lists(), { filters }] as const,
  details: () => [...menuKeys.all, "detail"] as const,
  detail: (id: string) => [...menuKeys.details(), id] as const,
};

export const useMenu = () => {
  return useQuery({
    queryKey: menuKeys.lists(),
    queryFn: fetchAllMenu,
    staleTime: 5 * 60 * 1000,
  });
};
