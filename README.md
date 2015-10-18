# FlarumThemer
Theme Base Engine for Flarum Forum [WTFPL License]

<a href="http://www.wtfpl.net/"><img
       src="http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-4.png"
       width="80" height="15" alt="WTFPL" /></a>
       
       
This is the base extension for theming your Flarum-based forum.
You can change basic home page layout (forum.blade.php), or override client-side views by Monkey patching using gulp.

## How to extend layout
Simply change HTML code in layouts/forum.blade.php

## How to extend client views
First, you need to know what component and what view you want to change.
You can see all default flarum components here: https://github.com/flarum/core/tree/master/js/forum/src/components

Let's change some discussions list.
First, open DiscussionList.js file: https://github.com/flarum/core/blob/master/js/forum/src/components/DiscussionList.js
Then, create empty DiscussionList.js file insite js/forum/src folder (in this extension).
And paste this code:

    import {extend, override} from 'flarum/extend';
    import DiscussionList from 'flarum/components/DiscussionList';

Where **DiscussionList** is our component name.
Then, copy-paste all imports from original component.
In our case we have this one:

    import Component from 'flarum/Component';
    import DiscussionListItem from 'flarum/components/DiscussionListItem';
    import Button from 'flarum/components/Button';
    import LoadingIndicator from 'flarum/components/LoadingIndicator';
    import Placeholder from 'flarum/components/Placeholder';

After that you need to select what view function you need to override.
In our case we have function **view**()

Let's write this code in our file:
    override(DiscussionList.prototype, 'view', function(){
      // Here will be view code
    });
    
In original file we have some logic. We need to save it, but change return view.
Let's copy-pase code:

    override(DiscussionList.prototype, 'view', function(){
      const params = this.props.params;
      let loading;
  
      if (this.loading) {
        loading = LoadingIndicator.component();
      } else if (this.moreResults) {
        loading = Button.component({
          children: app.trans('core.forum.discussion_list_load_more_button'),
          className: 'Button',
          onclick: this.loadMore.bind(this)
        });
      }
  
      if (this.discussions.length === 0 && !this.loading) {
        const text = app.trans('core.forum.discussion_list_empty_text');
        return (
          <div className="DiscussionList">
            {Placeholder.component({text})}
          </div>
        );
      }
  
      return (
        <div className="DiscussionList">
          <ul className="DiscussionList-discussions">
            {this.discussions.map(discussion => {
              return (
                <li key={discussion.id()} data-id={discussion.id()}>
                  {DiscussionListItem.component({discussion, params})}
                </li>
              );
            })}
          </ul>
          <div className="DiscussionList-loadMore">
            {loading}
          </div>
        </div>
      );
    });
    
Now, you can change any HTML code in return, like change classes, or add some awesome html tags.
Do what you want. Of course, if you are good web developer, you can change any functions or logic, or use flarum's extend function except override.

Now, when we create our awesome view file, let's compile it with gupl.
Install node, and gulp on your computer, if you don't have one. Google it :)
Open your js/forum/ folder in terminal, and run command
  gulp watch
  
That's all. Gulp will compile your file in dist folder.
Now you can install and enable extension, and everything should work perfect.

