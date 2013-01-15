#MediaElement-Popup - Popup Option on Control Bar

![MediaElement popup](https://raw.github.com/sourcebits-harshitakasera/mediaelement-popup/master/snapshots/popup.png "Popup")

__Author__   - Harshita Kasera  
__License__   - GPLv2/MIT 


# Introduction

MediaElement-Popup is a <code>MediaElement.js</code> plugin that lets you add a __Popup Option__ in the control bar of MediaElement Player. This plugin also defines a default callback function that will be called everytime the popup button is clicked.Also reference to the mediaelement object is passed as an argument in callback for further processing.The image on the popup button ,text and the callback function all are configurable.  

# Demo
[Click here](http://jsfiddle.net/hkasera/rKtP3/4/) to see a working demo of the plugin.

<code>* Note</code> The default callback function in the demo shows up the video in jQuery modal dialog ,hence if jQueryUI is not included the default callback will not do anything however callback can still be overriden.

# Credits

My Employer - [Sourcebits Inc.](http://www.sourcebits.com)

Thanks to [John Dyer](https://github.com/johndyer), creator of [MediaElement Player](http://mediaelementjs.com/)

# Installation & Usage

### Installation
    <script src="jquery.js"></script>
    <script src="mediaelement-and-player.min.js"></script>
    <script src="mep-feature-popup.js"></script>
    <link rel="stylesheet" href="mediaelementplayer.css" />

### Usage
    $('#player').mediaelementplayer({
        features: ['playpause','current','progress','duration','popup'] //Adding the feature 'popup' enables this plugin
        popupText: "Popup", 
        popupImage: "path to image", 
        popupClick: function (player) { //Override the callback function invoked when user clicks the popup button
          /* Your code */
        }
    });

# Testing
    *IE7 - Flash 
    *IE8 - Flash
    IE9, IE10 - MP4
    Firefox - Ogv
    Chrome - Webm
    Safari - MP4
    
 
# Version History

*1.0.0 (2013/01/14)*    
&nbsp;&nbsp;&nbsp;Initial release
