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
    websiteStackElements: Elements<WebsiteStackGraphElementData>;
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

export class WebsiteStackItemInfo {
    title: string;
    imageUrl: string;

    constructor(props: WebsiteStackItemInfo) {
        this.title = props.title;
        this.imageUrl = props.imageUrl;
    }
}
export interface WebsiteStackGraphElemen tData extends WebsiteStackItemInfo {
    handles?: HandleProps[];
    yPosition: number;
    column: 1 | 2 | 3;
    columnSpan?: 1 | 2 | 3;
}
