import { Elements, HandleProps } from 'react-flow-renderer';

export interface Info {
    name: string;
    title: string;
    links: Link[];
    about: string[];
    education: EducationItem[];
    workExperience: WorkExperienceItem[];
    interests: string[];
    topSkills: TopSkillItem[];
    websiteStackElements: Elements<WebsiteStackElementData>;
}
export interface Link {
    text: string;
    link: string;
    faIcon: string;
    textForPrint: string;
    name: string;
}
export interface EducationItem {
    iconUrl: string;
    title: string;
    secondaryInfo: string[];
}
export interface WorkExperienceItem {
    iconUrl: string;
    company: string;
    jobTitle: string;
    startDate: Date;
    endDate: Date;
    description: string;
}
export interface TopSkillItem {
    name: string;
    percentage: number;
}
export interface BuiltWithItem {
    iconUrl: string;
    name: string;
    links?: BuiltWithItemLink[];
}
export interface BuiltWithItemLink {
    text: string;
    url: string;
}
export interface WebsiteStackElementData {
    handles: HandleProps[];
    row: number;
    column: 1 | 2 | 3;
}
