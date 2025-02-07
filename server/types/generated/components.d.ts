import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsAboutDescription extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_descriptions';
  info: {
    displayName: 'About Description';
  };
  attributes: {
    description: Schema.Attribute.Text;
  };
}

export interface SectionsFeaturesWorks extends Struct.ComponentSchema {
  collectionName: 'components_sections_features_works';
  info: {
    description: '';
    displayName: 'Features Works';
    icon: 'stack';
  };
  attributes: {
    projects: Schema.Attribute.Relation<
      'oneToMany',
      'api::project-page.project-page'
    >;
  };
}

export interface SectionsListOfServices extends Struct.ComponentSchema {
  collectionName: 'components_sections_list_of_services';
  info: {
    description: '';
    displayName: 'List of Services';
    icon: 'bulletList';
  };
  attributes: {
    list_item: Schema.Attribute.Component<'ui.list-item', true>;
  };
}

export interface SectionsPorfolio extends Struct.ComponentSchema {
  collectionName: 'components_sections_porfolios';
  info: {
    displayName: 'Porfolio';
  };
  attributes: {
    portfolio_item: Schema.Attribute.Component<'ui.portfolio-item', true>;
  };
}

export interface SectionsServices extends Struct.ComponentSchema {
  collectionName: 'components_sections_services';
  info: {
    description: '';
    displayName: 'Services';
    icon: 'briefcase';
  };
  attributes: {
    service_item: Schema.Attribute.Component<'ui.service-item', true>;
  };
}

export interface UiFeatureImage extends Struct.ComponentSchema {
  collectionName: 'components_ui_feature_images';
  info: {
    description: '';
    displayName: 'Feature Image';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface UiListItem extends Struct.ComponentSchema {
  collectionName: 'components_ui_list_items';
  info: {
    description: '';
    displayName: 'List Item';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface UiPortfolioItem extends Struct.ComponentSchema {
  collectionName: 'components_ui_portfolio_items';
  info: {
    description: '';
    displayName: 'Portfolio Item';
  };
  attributes: {
    projects: Schema.Attribute.Relation<
      'oneToMany',
      'api::project-page.project-page'
    >;
  };
}

export interface UiReviewItem extends Struct.ComponentSchema {
  collectionName: 'components_ui_review_items';
  info: {
    displayName: 'Review Item';
    icon: 'star';
  };
  attributes: {};
}

export interface UiServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_ui_service_items';
  info: {
    description: '';
    displayName: 'Service Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.about-description': SectionsAboutDescription;
      'sections.features-works': SectionsFeaturesWorks;
      'sections.list-of-services': SectionsListOfServices;
      'sections.porfolio': SectionsPorfolio;
      'sections.services': SectionsServices;
      'ui.feature-image': UiFeatureImage;
      'ui.list-item': UiListItem;
      'ui.portfolio-item': UiPortfolioItem;
      'ui.review-item': UiReviewItem;
      'ui.service-item': UiServiceItem;
    }
  }
}
