<?php

namespace Plugins\clipboard;

use \Typemill\Plugin;

class clipboard extends Plugin
{
	protected $settings;
	
    public static function getSubscribedEvents()
    {
		return array(
			'onTwigLoaded' 			=> 'onTwigLoaded'
		);
    }
	
	
	public function onTwigLoaded()
	{
		$this->addJS('/clipboard/public/clipboard.min.js');
        $this->addJS('/clipboard/public/initClipboard.js');
        $this->addCSS('/clipboard/public/default.css');
	}
}
