import { HandleProps, Node } from 'react-flow-renderer';

export type WebsiteStackGraphElement = Node<WebsiteStackGraphElementData> & {
    data: WebsiteStackGraphElementData;
};

export interface WebsiteStackElementData {
    imageUrl: string;
    title: string;
}

export type WebsiteStackGraphElementData = WebsiteStackElementData & {
    handles?: HandleProps[];
    yPosition: number;
    column: 1 | 2 | 3;
    columnSpan?: 1 | 2 | 3;
};

export type WebsiteStackDialogElementData = WebsiteStackElementData & {
    description?: string;
    links?: WebsiteStackItemInfoLink[];
    additionalImages?: WebsiteStackItemInfoImage[];
    theme?: WebsiteStackDialogTheme;
};

export interface WebsiteStackDialogTheme {
    color: string;
    backgroundColor: string;
    linkTheme?: 'light' | 'dark';
}

export interface WebsiteStackItemInfoLink {
    text: string;
    href: string;
}

export interface WebsiteStackItemInfoImage {
    url: string;
    title?: string;
}
