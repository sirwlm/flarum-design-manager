<?php namespace Themer\Listeners;

use Flarum\Events\RegisterLocales;
use Flarum\Events\BuildClientView;
use Illuminate\Contracts\Events\Dispatcher;

class AddClientAssets
{
    public function subscribe(Dispatcher $events)
    {
        $events->listen(BuildClientView::class, [$this, 'addAssets']);
    }

    public function addAssets(BuildClientView $event)
    {
        $event->forumAssets([
            __DIR__.'/../../js/forum/dist/extension.js'
        ]);

        $event->forumBootstrapper('themer/main');
    }
}
