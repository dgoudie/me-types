export interface Info {
    name: string;
    title: string;
    links: Link[];
    about: string[];
    education: EducationItem[];
    workExperience: WorkExperienceItem[];
    interests: string[];
    topSkills: TopSkillItem[];
    builtWith: BuiltWithItem[];
}

export interface Link {
    text: string;
    link: string;
    faIcon: string;
    textForPrint: string;
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
