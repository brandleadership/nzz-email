require('./styles/styles.scss');

const {cx, SchemaVersion, Locale} = require('@bsi-cx/design-build');

const {contentElements} = require('./content-elements/base');
const {spacerElements} = require('./content-elements/base');
const {colOneElements} = require('./content-elements/base');
const {colTwoElements} = require('./content-elements/base');
const {colTwoSlimElements} = require('./content-elements/base');
const {colTwoWideElements} = require('./content-elements/base');
const {colThreeElements} = require('./content-elements/base');

module.exports = cx.design
  .withSchemaVersion(SchemaVersion.V_22_0)
  .withTitle('BSI CX Master Template - E-Mail')
  .withAuthor('Design Team - BSI Business Systems Integration AG')
  .withDate('22.08.2022')
  .withDefaultLocale(Locale.EN)
  .withLocales(Locale.EN)
  .withContentElementGroups(
    cx.contentElementGroup
      .withGroupId('header-VGHXnt')
      .withLabel('Header')
      .withContentElements(
        require('@bsi-cx/design-standard-library-email/content-elements/base/header-preheader'),
        require('./content-elements/base/logo'),
        require('./content-elements/base/header-img')),
    cx.contentElementGroup
      .withGroupId('layout-NfWlMT')
      .withLabel('Layout')
      .withContentElements(
        require('@bsi-cx/design-standard-library-email/content-elements/layout/layout-base')
          .withExtendedDropzone(
            'layout-base-dropzone-7nPzXF',
            require('./content-elements/layout/col-two-ratio-1-2'),
            ...spacerElements),
        require('./content-elements/layout/layout-colored'),
        require('@bsi-cx/design-standard-library-email/content-elements/layout/col-one')
          .withExtendedDropzone(
            'col-one-dropzone-GYTnrx',
            ...colOneElements),
        require('@bsi-cx/design-standard-library-email/content-elements/layout/col-two')
          .withExtendedDropzone(
            'col-two-dropzone-1-rRaE9R',
            ...colTwoElements)
          .withExtendedDropzone(
            'col-two-dropzone-2-K1vkFU',
            ...colTwoElements),
        require('./content-elements/layout/col-two-ratio-1-2'),
        require('@bsi-cx/design-standard-library-email/content-elements/layout/col-two-ratio-2-1')
          .withExtendedDropzone(
            'col-two-ratio-2-1-dropzone-1-7xstGU',
            ...colTwoWideElements)
          .withExtendedDropzone(
            'col-two-ratio-2-1-dropzone-2-N4gT0V',
            ...colTwoSlimElements),
        require('@bsi-cx/design-standard-library-email/content-elements/layout/col-three')
          .withExtendedDropzone(
            'col-three-dropzone-1-mxExhj',
            ...colThreeElements)
          .withExtendedDropzone(
            'col-three-dropzone-2-23ir6r',
            ...colThreeElements)
          .withExtendedDropzone(
            'col-three-dropzone-3-ajc3B6',
            ...colThreeElements)),
    cx.contentElementGroup
      .withGroupId('spacing-divider-cEbF9P')
      .withLabel('Abstände & Trenner')
      .withContentElements(
        require('./content-elements/base/spacer-small'),
        require('@bsi-cx/design-standard-library-email/content-elements/base/spacer'),
        require('./content-elements/base/spacer-large'),
        require('@bsi-cx/design-standard-library-email/content-elements/base/divider')),
    cx.contentElementGroup
      .withGroupId('headings-TbGwox')
      .withLabel('Titel & Text')
      .withContentElements(
        require('@bsi-cx/design-standard-library-email/content-elements/base/title-h1'),
        require('./content-elements/base/title-h2'),
        require('./content-elements/base/title-h3'),
        require('@bsi-cx/design-standard-library-email/content-elements/base/text')),
    cx.contentElementGroup
      .withGroupId('images-hRO9mw')
      .withLabel('Bilder')
      .withContentElements(
        require('@bsi-cx/design-standard-library-email/content-elements/base/image'),
        require('./content-elements/base/img-66'),
        require('./content-elements/base/img-50'),
        require('./content-elements/base/img-33'),
        require('@bsi-cx/design-standard-library-email/content-elements/base/img-10')),
    cx.contentElementGroup
      .withGroupId('buttons-BadRb3')
      .withLabel('Buttons')
      .withContentElements(
        require('@bsi-cx/design-standard-library-email/content-elements/base/cta'),
        require('./content-elements/base/cta-center'),
        require('./content-elements/base/cta-right')),
    cx.contentElementGroup
      .withGroupId('special-content-5C921n')
      .withLabel('Besonderer Inhalt')
      .withContentElements(
        require('@bsi-cx/design-standard-library-email/content-elements/base/highlighted-content')
          .withExtendedDropzone(
            'highlighted-content-dropzone-4HtYBB',
            ...contentElements,
            ...spacerElements),
        require('@bsi-cx/design-standard-library-email/content-elements/base/news-snippet'),
        require('@bsi-cx/design-standard-library-email/content-elements/base/table'),
        require('@bsi-cx/design-standard-library-email/content-elements/base/smiley-rating'),
        require('@bsi-cx/design-standard-library-email/content-elements/base/event')),
    cx.contentElementGroup
      .withGroupId('footer-Ah9a9j')
      .withLabel('Footer')
      .withContentElements(
        require('@bsi-cx/design-standard-library-email/content-elements/layout/layout-dark-footer')
          .withExtendedDropzone(
            'layout-dark-footer-dropzone-S2Twva',
            ...spacerElements),
        require('./content-elements/layout/layout-light-footer'),
        require('@bsi-cx/design-standard-library-email/content-elements/layout/col-one-footer')
          .withExtendedDropzone(
            'col-one-footer-dropzone-jaZSq2',
            ...spacerElements),
        require('@bsi-cx/design-standard-library-email/content-elements/layout/col-two-footer')
          .withExtendedDropzone(
            'col-two-footer-dropzone-1-WJcCmL',
            ...spacerElements)
          .withExtendedDropzone(
            'col-two-footer-dropzone-2-qCJrba',
            ...spacerElements),
        require('@bsi-cx/design-standard-library-email/content-elements/base/footer-link'),
        require('@bsi-cx/design-standard-library-email/content-elements/base/social-media-follow')));