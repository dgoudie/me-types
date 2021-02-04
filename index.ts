import 'reflect-metadata';

import { Elements, HandleProps } from 'react-flow-renderer';
import { Field, ObjectType, Query, Resolver } from 'type-graphql';

@ObjectType()
export class Info {
    @Field()
    name: string;
    @Field()
    title: string;
    @Field()
    links: Link[];
    @Field()
    about: string[];
    @Field()
    education: EducationItem[];
    @Field()
    workExperience: WorkExperienceItem[];
    @Field()
    interests: string[];
    @Field()
    topSkills: TopSkillItem[];
    @Field()
    websiteStackElements: Elements<WebsiteStackElementData>;
}
@ObjectType()
export class Link {
    @Field()
    text: string;

    @Field()
    link: string;

    @Field()
    faIcon: string;

    @Field()
    textForPrint: string;

    @Field()
    name: string;
}
@ObjectType()
export class EducationItem {
    @Field()
    iconUrl: string;

    @Field()
    title: string;

    @Field()
    secondaryInfo: string[];
}
@ObjectType()
export class WorkExperienceItem {
    @Field()
    iconUrl: string;

    @Field()
    company: string;

    @Field()
    jobTitle: string;

    @Field()
    startDate: Date;

    @Field()
    endDate: Date;

    @Field()
    description: string;
}
@ObjectType()
export class TopSkillItem {
    @Field()
    name: string;

    @Field()
    percentage: number;
}
@ObjectType()
export class BuiltWithItem {
    @Field()
    iconUrl: string;
    @Field()
    name: string;
    @Field({ nullable: true })
    links?: BuiltWithItemLink[];
}
@ObjectType()
export class BuiltWithItemLink {
    @Field()
    text: string;
    @Field()
    url: string;
}
@ObjectType()
export class WebsiteStackElementData {
    handles: HandleProps[];
}
