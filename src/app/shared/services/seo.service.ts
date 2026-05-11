import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoData {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
  noIndex?: boolean;
}

const SITE_NAME = 'IUGNA';
const BASE_TITLE = 'Instituto Universitario de Gendarmería Nacional Argentina';
const BASE_URL = 'https://www.iugna.edu.ar';

@Injectable({ providedIn: 'root' })
export class SeoService {

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  set(data: SeoData): void {
    const fullTitle = data.title === BASE_TITLE
      ? `${SITE_NAME} — ${data.title}`
      : `${data.title} | ${SITE_NAME}`;

    this.title.setTitle(fullTitle);

    this.meta.updateTag({ name: 'description', content: data.description });
    if (data.keywords) {
      this.meta.updateTag({ name: 'keywords', content: data.keywords });
    }

    // Robots: noindex para rutas privadas, index para públicas
    const robots = data.noIndex ? 'noindex, nofollow' : 'index, follow';
    this.meta.updateTag({ name: 'robots', content: robots });

    // Canonical URL
    if (data.path !== undefined) {
      const canonicalUrl = `${BASE_URL}${data.path}`;
      this.setCanonical(canonicalUrl);
      this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    }

    // Open Graph
    this.meta.updateTag({ property: 'og:title',       content: fullTitle });
    this.meta.updateTag({ property: 'og:description',  content: data.description });
    this.meta.updateTag({ property: 'og:site_name',    content: SITE_NAME });
    this.meta.updateTag({ property: 'og:type',         content: 'website' });
  }

  setNoIndex(): void {
    this.meta.updateTag({ name: 'robots', content: 'noindex, nofollow' });
  }

  private setCanonical(url: string): void {
    let link: HTMLLinkElement | null = this.doc.querySelector('link[rel="canonical"]');
    if (link) {
      link.setAttribute('href', url);
    } else {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', url);
      this.doc.head.appendChild(link);
    }
  }
}
