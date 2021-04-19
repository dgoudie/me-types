export interface RecentProject {
    name: string;
    summary: string;
    attributes: string[];
    link: RecentProjectLink;
}

export interface RecentProjectLink {
    url: string;
    text: string;
}
