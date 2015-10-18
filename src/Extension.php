<?php namespace Themer;

use Flarum\Support\Extension as BaseExtension;
use Illuminate\Events\Dispatcher;

class Extension extends BaseExtension
{
    public function listen(Dispatcher $events)
    {
        $events->subscribe('Themer\Listeners\AddClientAssets');
        $events->subscribe('Themer\Listeners\ChangeLayout');
    }
}
