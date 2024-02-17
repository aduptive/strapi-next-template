import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksCard extends Schema.Component {
  collectionName: 'components_blocks_cards';
  info: {
    displayName: 'card';
    description: '';
  };
  attributes: {
    title: Attribute.Component<'common.title'>;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'baseEditor';
        }
      >;
    image: Attribute.Media & Attribute.Required;
    linkButton: Attribute.Component<'common.link-button'>;
  };
}

export interface BlocksForm extends Schema.Component {
  collectionName: 'components_blocks_forms';
  info: {
    displayName: 'form';
  };
  attributes: {
    title: Attribute.Component<'common.title'> & Attribute.Required;
  };
}

export interface BlocksMenu extends Schema.Component {
  collectionName: 'components_blocks_menus';
  info: {
    displayName: 'Menu';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    Menu: Attribute.JSON;
  };
}

export interface BlocksRichText extends Schema.Component {
  collectionName: 'blocks_rich_texts';
  info: {
    displayName: 'RichText';
    description: '';
  };
  attributes: {
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'baseEditor';
        }
      >;
  };
}

export interface CommonButton extends Schema.Component {
  collectionName: 'common_buttons';
  info: {
    displayName: 'Bot\u00E3o';
    icon: 'external-link-alt';
    description: '';
  };
  attributes: {
    variant: Attribute.Enumeration<['filled-black', 'outline-black']> &
      Attribute.Required &
      Attribute.DefaultTo<'filled-black'>;
    text: Attribute.String & Attribute.Required;
  };
}

export interface CommonLinkButton extends Schema.Component {
  collectionName: 'common_link_buttons';
  info: {
    displayName: 'Bot\u00E3o com Link';
    icon: 'external-link-alt';
    description: '';
  };
  attributes: {
    variant: Attribute.Enumeration<['filled-black', 'outline-black']> &
      Attribute.Required &
      Attribute.DefaultTo<'filled-black'>;
    text: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required & Attribute.DefaultTo<'/'>;
    blank: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
  };
}

export interface CommonLinkSocial extends Schema.Component {
  collectionName: 'common_social_links';
  info: {
    displayName: 'Social link';
    icon: 'share-alt-square';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    type: Attribute.Enumeration<
      [
        'facebook',
        'twitter',
        'instagram',
        'tiktok',
        'whatsapp',
        'linkedin',
        'youtube',
        'phone',
        'email',
        'site'
      ]
    >;
    url: Attribute.String & Attribute.Required;
  };
}

export interface CommonLink extends Schema.Component {
  collectionName: 'common_links';
  info: {
    displayName: 'Link';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required & Attribute.DefaultTo<'/'>;
    blank: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
  };
}

export interface CommonTitle extends Schema.Component {
  collectionName: 'common_titles';
  info: {
    displayName: 'title';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    htmlTag: Attribute.Enumeration<['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']> &
      Attribute.Required &
      Attribute.DefaultTo<'h2'>;
  };
}

export interface FormsAssetsFieldConditions extends Schema.Component {
  collectionName: 'forms_assets_field_conditions';
  info: {
    displayName: 'Condi\u00E7\u00E3o para aparecer campo';
    description: '';
  };
  attributes: {
    field: Attribute.String & Attribute.Required;
    operator: Attribute.Enumeration<
      ['equals', 'different', 'contains', 'not-contains']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'equals'>;
    value: Attribute.String & Attribute.Required;
  };
}

export interface FormsAssetsSelectOption extends Schema.Component {
  collectionName: 'forms_assets_select_options';
  info: {
    displayName: 'Op\u00E7\u00E3o de Sele\u00E7\u00E3o';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    value: Attribute.String & Attribute.Required;
  };
}

export interface FormsCheckField extends Schema.Component {
  collectionName: 'forms_check_fields';
  info: {
    displayName: 'Campo de Confirma\u00E7\u00E3o';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    label: Attribute.Text & Attribute.Required;
    requiredMessage: Attribute.String & Attribute.Required;
    size: Attribute.Enumeration<['full', 'half']> &
      Attribute.Required &
      Attribute.DefaultTo<'full'>;
    showConditions: Attribute.Component<'forms-assets.field-conditions', true>;
    required: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface FormsHiddenField extends Schema.Component {
  collectionName: 'forms_hidden_fields';
  info: {
    displayName: 'Campo Escondido';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    value: Attribute.String;
  };
}

export interface FormsInputField extends Schema.Component {
  collectionName: 'forms_input_fields';
  info: {
    displayName: 'Campo de Texto';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    label: Attribute.String & Attribute.Required;
    placeholder: Attribute.String;
    type: Attribute.Enumeration<['text', 'email', 'phone', 'date']> &
      Attribute.Required &
      Attribute.DefaultTo<'text'>;
    size: Attribute.Enumeration<['full', 'half']> &
      Attribute.Required &
      Attribute.DefaultTo<'full'>;
    showConditions: Attribute.Component<'forms-assets.field-conditions', true>;
    required: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface FormsSelectField extends Schema.Component {
  collectionName: 'forms_select_fields';
  info: {
    displayName: 'Campo de Sele\u00E7\u00E3o';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    label: Attribute.String & Attribute.Required;
    placeholder: Attribute.String;
    options: Attribute.Component<'forms-assets.select-option', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    type: Attribute.Enumeration<['select', 'radio', 'checkbox']> &
      Attribute.Required &
      Attribute.DefaultTo<'select'>;
    size: Attribute.Enumeration<['full', 'half']> &
      Attribute.Required &
      Attribute.DefaultTo<'full'>;
    showConditions: Attribute.Component<'forms-assets.field-conditions', true>;
    required: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface FormsTextareaField extends Schema.Component {
  collectionName: 'forms_textarea_fields';
  info: {
    displayName: 'Campo de Texto grande';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    label: Attribute.String & Attribute.Required;
    placeholder: Attribute.String;
    size: Attribute.Enumeration<['full', 'half']> &
      Attribute.Required &
      Attribute.DefaultTo<'full'>;
    showConditions: Attribute.Component<'forms-assets.field-conditions', true>;
    required: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface GlobalFooter extends Schema.Component {
  collectionName: 'components_global_footers';
  info: {
    displayName: 'Footer';
    icon: 'cogs';
    description: '';
  };
  attributes: {
    socialLink: Attribute.Component<'common.link-social', true>;
    legalText: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'baseEditor';
        }
      > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface GlobalHeader extends Schema.Component {
  collectionName: 'components_global_header';
  info: {
    displayName: 'Header';
    icon: 'cogs';
    description: '';
  };
  attributes: {
    menuNavigation: Attribute.Component<'common.link', true>;
    logo: Attribute.Media;
  };
}

export interface GlobalNotFound extends Schema.Component {
  collectionName: 'components_global_not_founds';
  info: {
    displayName: 'Not found';
    description: '';
  };
  attributes: {
    title: Attribute.Component<'common.title'>;
    description: Attribute.RichText;
  };
}

export interface MenuMenuList extends Schema.Component {
  collectionName: 'components_menu_menu_lists';
  info: {
    displayName: 'Menu List';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    price: Attribute.Decimal;
    description: Attribute.Text;
    sku: Attribute.String;
  };
}

export interface SharedAssetsCustomHeadProperty extends Schema.Component {
  collectionName: 'shared_assets_custom_head_properties';
  info: {
    displayName: 'Meta Customizada';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    content: Attribute.String;
  };
}

export interface SharedAssetsPageRedirect extends Schema.Component {
  collectionName: 'shared_assets_page_redirects';
  info: {
    displayName: 'Redirecionar Pagina';
    description: '';
  };
  attributes: {
    enabled: Attribute.Boolean & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface SharedGlobalSeo extends Schema.Component {
  collectionName: 'shared_global_seo';
  info: {
    displayName: 'Global SEO';
    icon: 'search';
    description: '';
  };
  attributes: {
    siteName: Attribute.String & Attribute.Required;
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    themeColor: Attribute.String & Attribute.Required;
    metaImage: Attribute.Media & Attribute.Required;
    customMetas: Attribute.Component<
      'shared-assets.custom-head-property',
      true
    >;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'shared_seo';
  info: {
    displayName: 'SEO';
    icon: 'search';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    showOnGoogle: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    redirect: Attribute.Component<'shared-assets.page-redirect'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.card': BlocksCard;
      'blocks.form': BlocksForm;
      'blocks.menu': BlocksMenu;
      'blocks.rich-text': BlocksRichText;
      'common.button': CommonButton;
      'common.link-button': CommonLinkButton;
      'common.link-social': CommonLinkSocial;
      'common.link': CommonLink;
      'common.title': CommonTitle;
      'forms-assets.field-conditions': FormsAssetsFieldConditions;
      'forms-assets.select-option': FormsAssetsSelectOption;
      'forms.check-field': FormsCheckField;
      'forms.hidden-field': FormsHiddenField;
      'forms.input-field': FormsInputField;
      'forms.select-field': FormsSelectField;
      'forms.textarea-field': FormsTextareaField;
      'global.footer': GlobalFooter;
      'global.header': GlobalHeader;
      'global.not-found': GlobalNotFound;
      'menu.menu-list': MenuMenuList;
      'shared-assets.custom-head-property': SharedAssetsCustomHeadProperty;
      'shared-assets.page-redirect': SharedAssetsPageRedirect;
      'shared.global-seo': SharedGlobalSeo;
      'shared.seo': SharedSeo;
    }
  }
}
