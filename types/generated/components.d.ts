import type { Schema, Attribute } from '@strapi/strapi';

export interface CommonVideo extends Schema.Component {
  collectionName: 'components_common_videos';
  info: {
    displayName: 'video';
    icon: 'play';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
  };
}

export interface CommonMap extends Schema.Component {
  collectionName: 'components_common_maps';
  info: {
    displayName: 'map';
    icon: 'pinMap';
    description: '';
  };
  attributes: {
    lat: Attribute.Component<'common.geo'>;
    type: Attribute.Enumeration<['yandex', 'google']>;
  };
}

export interface CommonGeo extends Schema.Component {
  collectionName: 'components_common_geos';
  info: {
    displayName: 'geo';
  };
  attributes: {
    lat: Attribute.String;
    lon: Attribute.String;
  };
}

export interface CommonAddress extends Schema.Component {
  collectionName: 'components_common_addresses';
  info: {
    displayName: 'Address';
    icon: 'car';
    description: '';
  };
  attributes: {
    state: Attribute.String;
    city: Attribute.String;
    address: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common.video': CommonVideo;
      'common.map': CommonMap;
      'common.geo': CommonGeo;
      'common.address': CommonAddress;
    }
  }
}
