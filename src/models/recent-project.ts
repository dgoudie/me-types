export interface RecentProject {
    name: string;
    imageUrl: string;
    summary: string;
    attributes: string[];
    link: RecentProjectLink;
}

export interface RecentProjectLink {
    url: string;
    text: string;
}
