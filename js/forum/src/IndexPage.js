import {extend, override} from 'flarum/extend';
import IndexPage from 'flarum/components/IndexPage';

import Page from 'flarum/components/Page';
import ItemList from 'flarum/utils/ItemList';
import listItems from 'flarum/helpers/listItems';
import DiscussionList from 'flarum/components/DiscussionList';
import WelcomeHero from 'flarum/components/WelcomeHero';
import DiscussionComposer from 'flarum/components/DiscussionComposer';
import LogInModal from 'flarum/components/LogInModal';
import DiscussionPage from 'flarum/components/DiscussionPage';
import Select from 'flarum/components/Select';
import Button from 'flarum/components/Button';
import LinkButton from 'flarum/components/LinkButton';
import SelectDropdown from 'flarum/components/SelectDropdown';

override(IndexPage.prototype, 'view', function(){
  return (
      <div className="IndexPage themer">
        {this.hero()}
        <div className="container">
          <nav className="IndexPage-nav sideNav">
            <ul>{listItems(this.sidebarItems().toArray())}</ul>
          </nav>
          <div className="IndexPage-results sideNavOffset">
            <div className="IndexPage-toolbar">
              <ul className="IndexPage-toolbar-view">{listItems(this.viewItems().toArray())}</ul>
              <ul className="IndexPage-toolbar-action">{listItems(this.actionItems().toArray())}</ul>
            </div>
            {app.cache.discussionList.render()}
          </div>
        </div>
      </div>
    );
});
