import { useContext } from "react";
import { FilterContext } from "../contexts/FilterContext";

export function useFilters() {
  return useContext(FilterContext);
}
