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
    image: Schema.Attribute.Component<'ui.feature-image', true>;
  };
}

export interface SectionsListOfServices extends Struct.ComponentSchema {
  collectionName: 'components_sections_list_of_services';
  info: {
    displayName: 'List of Services';
    icon: 'bulletList';
  };
  attributes: {
    services_list: Schema.Attribute.Enumeration<
      ['Design System', 'Gsap Animations', 'Webflow Developer']
    >;
  };
}

export interface SectionsServices extends Struct.ComponentSchema {
  collectionName: 'components_sections_services';
  info: {
    displayName: 'Services';
    icon: 'briefcase';
  };
  attributes: {
    service_item: Schema.Attribute.Component<'ui.service-item', false>;
  };
}

export interface UiFeatureImage extends Struct.ComponentSchema {
  collectionName: 'components_ui_feature_images';
  info: {
    displayName: 'Feature Image';
  };
  attributes: {
    alt_description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface UiServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_ui_service_items';
  info: {
    description: '';
    displayName: 'Service Item';
  };
  attributes: {
    description: Schema.Attribute.String;
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
      'sections.services': SectionsServices;
      'ui.feature-image': UiFeatureImage;
      'ui.service-item': UiServiceItem;
    }
  }
}
