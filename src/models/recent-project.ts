export interface RecentProject {
    name: string;
    imageUrl: string;
    summary: string;
    attributes: string[];
    link?: RecentProjectLink;
    additionalImage?: RecentProjectAdditionalImage;
}

export interface RecentProjectLink {
    url: string;
    text: string;
}

export interface RecentProjectAdditionalImage {
    url: string;
    backgroundColor: string;
}
