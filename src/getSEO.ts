import { JSDOM } from 'jsdom';
import fetch from 'node-fetch';

export class getSEO {
    private readonly url: string;
    private html: string | null = null;

    constructor(url: string) {
        this.url = url;
    }

    private async fetchHtml(): Promise<void> {
        try {
            const response = await fetch(this.url);
            this.html = await response.text();
        } catch (error) {
            console.error('Error fetching HTML:', error);
            throw error;
        }
    }

    private parseHtml(): Document {
        if (!this.html) {
            throw new Error('HTML not fetched. Call fetchHtml() before parsing.');
        }
        const dom = new JSDOM(this.html);
        return dom.window.document;
    }

    async getTitle(): Promise<string> {
        if (!this.html) {
            await this.fetchHtml();
        }

        const document = this.parseHtml();
        const title = document.querySelector('head title')?.textContent || '';
        return title;
    }

    async getDescription(): Promise<string> {
        if (!this.html) {
            await this.fetchHtml();
        }

        const document = this.parseHtml();
        const description =
            document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
        return description;
    }
}