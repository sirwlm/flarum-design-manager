System.register('themer/main', ['flarum/extend', 'flarum/components/IndexPage', 'flarum/components/Page', 'flarum/utils/ItemList', 'flarum/helpers/listItems', 'flarum/components/DiscussionList', 'flarum/components/WelcomeHero', 'flarum/components/DiscussionComposer', 'flarum/components/LogInModal', 'flarum/components/DiscussionPage', 'flarum/components/Select', 'flarum/components/Button', 'flarum/components/LinkButton', 'flarum/components/SelectDropdown'], function (_export) {
  'use strict';

  var extend, override, IndexPage, Page, ItemList, listItems, DiscussionList, WelcomeHero, DiscussionComposer, LogInModal, DiscussionPage, Select, Button, LinkButton, SelectDropdown;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
      override = _flarumExtend.override;
    }, function (_flarumComponentsIndexPage) {
      IndexPage = _flarumComponentsIndexPage['default'];
    }, function (_flarumComponentsPage) {
      Page = _flarumComponentsPage['default'];
    }, function (_flarumUtilsItemList) {
      ItemList = _flarumUtilsItemList['default'];
    }, function (_flarumHelpersListItems) {
      listItems = _flarumHelpersListItems['default'];
    }, function (_flarumComponentsDiscussionList) {
      DiscussionList = _flarumComponentsDiscussionList['default'];
    }, function (_flarumComponentsWelcomeHero) {
      WelcomeHero = _flarumComponentsWelcomeHero['default'];
    }, function (_flarumComponentsDiscussionComposer) {
      DiscussionComposer = _flarumComponentsDiscussionComposer['default'];
    }, function (_flarumComponentsLogInModal) {
      LogInModal = _flarumComponentsLogInModal['default'];
    }, function (_flarumComponentsDiscussionPage) {
      DiscussionPage = _flarumComponentsDiscussionPage['default'];
    }, function (_flarumComponentsSelect) {
      Select = _flarumComponentsSelect['default'];
    }, function (_flarumComponentsButton) {
      Button = _flarumComponentsButton['default'];
    }, function (_flarumComponentsLinkButton) {
      LinkButton = _flarumComponentsLinkButton['default'];
    }, function (_flarumComponentsSelectDropdown) {
      SelectDropdown = _flarumComponentsSelectDropdown['default'];
    }],
    execute: function () {

      override(IndexPage.prototype, 'view', function () {
        return m(
          'div',
          { className: 'IndexPage themer' },
          this.hero(),
          m(
            'div',
            { className: 'container' },
            m(
              'nav',
              { className: 'IndexPage-nav sideNav' },
              m(
                'ul',
                null,
                listItems(this.sidebarItems().toArray())
              )
            ),
            m(
              'div',
              { className: 'IndexPage-results sideNavOffset' },
              m(
                'div',
                { className: 'IndexPage-toolbar' },
                m(
                  'ul',
                  { className: 'IndexPage-toolbar-view' },
                  listItems(this.viewItems().toArray())
                ),
                m(
                  'ul',
                  { className: 'IndexPage-toolbar-action' },
                  listItems(this.actionItems().toArray())
                )
              ),
              app.cache.discussionList.render()
            )
          )
        );
      });
    }
  };
});
