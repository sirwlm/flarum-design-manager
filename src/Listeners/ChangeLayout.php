<?php namespace Themer\Listeners;

use Flarum\Events\RegisterLocales;
use Flarum\Events\BuildClientView;
use Illuminate\Contracts\Events\Dispatcher;
use Flarum\Forum\Actions\ClientAction as ForumClientAction;

class ChangeLayout
{
    public function subscribe(Dispatcher $events)
    {
        $events->listen(BuildClientView::class, [$this, 'changeLayout']);
    }

    public function changeLayout(BuildClientView $event)
    {
      if($event->action instanceof ForumClientAction){
        $event->view->setLayout(__DIR__.'/../../layouts/forum.blade.php');
      }
    }
}
