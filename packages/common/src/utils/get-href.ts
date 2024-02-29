import type { TFile, TLink, TPage } from "../types";

export const getHref = (item: TLink | TPage | TFile): string => {
  switch(item._type) {
    case "downloadFile":
      return item.file.asset.url;
    case "page":
      return item.path;
    case "link":
      return item.href;
  }
}
