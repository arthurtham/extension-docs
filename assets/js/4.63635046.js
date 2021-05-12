(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{361:function(e,t,o){e.exports=o.p+"assets/img/architecture_overview.7b71d8d4.png"},362:function(e,t,o){e.exports=o.p+"assets/img/extension_resolution.e754fd80.png"},363:function(e,t,o){e.exports=o.p+"assets/img/override_extension.6b4a90ca.png"},383:function(e,t,o){"use strict";o.r(t);var s=o(45),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"architecture-overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#architecture-overview"}},[e._v("#")]),e._v(" Architecture Overview")]),e._v(" "),s("p",[e._v("In this guide, we'll explain a bit about the architecture and layout of TwilioQuest and the Extension system. We recommend reading this section before going too much farther, to get a sense of how the Extension system is supposed to work.")]),e._v(" "),s("h2",{attrs:{id:"how-twilioquest-extensions-work"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-twilioquest-extensions-work"}},[e._v("#")]),e._v(" How TwilioQuest Extensions work")]),e._v(" "),s("p",[e._v("TwilioQuest is an "),s("a",{attrs:{href:"https://www.electronjs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Electron desktop application"),s("OutboundLink")],1),e._v(" - Electron allows developers to use HTML, CSS, and JavaScript to build applications that run like a native desktop app. Apps you use every day, like Slack, Discord, and Visual Studio Code use Electron under the hood.")]),e._v(" "),s("p",[e._v("The TwilioQuest game client reads in many game assets at runtime from the filesystem - like event scripts, written tutorial content, and level maps. Before version 3.2 of TwilioQuest, this content could only be read from inside the compressed and signed game bundle that gets downloaded to your computer. Enabling extensions allows TwilioQuest to look for those assets in another folder in your computer as well. This is what allows you to create new levels, objectives, and other content inside your extension project.")]),e._v(" "),s("p",[s("img",{attrs:{src:o(361),alt:"architecture overview"}})]),e._v(" "),s("p",[e._v('The structure of the external extensions folder, and the extensions within, is the same structure as the folder of game assets that ship along with the game. When extensions are enabled, you are merely telling TwilioQuest "hey - you can look for game assets in this other folder, too, not just the one in the game bundle".')]),e._v(" "),s("h2",{attrs:{id:"extension-folder-structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#extension-folder-structure"}},[e._v("#")]),e._v(" Extension folder structure")]),e._v(" "),s("p",[e._v("All content for the game, whether it is packaged and shipped with the game by default or loaded as an extension, is an "),s("a",{attrs:{href:"https://docs.npmjs.com/packages-and-modules/introduction-to-packages-and-modules",target:"_blank",rel:"noopener noreferrer"}},[e._v("npm package"),s("OutboundLink")],1),e._v(". An extension folder will have a structure similar to this.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("my_extension/\n├── levels/\n│   └── my_new_level/\n│       ├── conversations/\n│       │   ├── bob.pug\n│       │   └── alice.pug\n│       ├── maps/\n│       │   ├── default.json\n│       │   └── another_map.json\n│       ├── objectives/\n│       │   └── example_objective/\n│       │       ├── objective.json\n│       │       ├── description.md\n│       │       ├── walkthrough.md\n│       │       └── validator.js\n│       ├── events.js\n│       └── level.json\n├── objects/\n│   └── my_custom_object/\n│       ├── config.js\n│       └── my_custom_object_spritesheet.png\n├── tilesets/\n│   └── MyCustomObjects.json\n└── package.json\n")])])]),s("h4",{attrs:{id:"levels"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#levels"}},[e._v("#")]),e._v(" levels/")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("levels")]),e._v(" folder is where you will define new explorable areas for TwilioQuest. Each level folder will contain:")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"maps"}},[e._v("Maps")]),e._v(", editable with the "),s("a",{attrs:{href:"https://www.mapeditor.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tiled map editor"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"npcs"}},[e._v("NPC conversations")]),e._v(" with dynamic dialogue options")]),e._v(" "),s("li",[s("a",{attrs:{href:"objectives"}},[e._v("Objectives")]),e._v(", which are the means by which you will present code challenges to players")]),e._v(" "),s("li",[s("a",{attrs:{href:"events"}},[e._v("An events.js file")]),e._v(" which you can use to script the game world based on level lifecycle events")]),e._v(" "),s("li",[s("a",{attrs:{href:"../api/levels"}},[e._v("A level.json configuration file")]),e._v(" that contains information about the level you are adding to the game")])]),e._v(" "),s("h4",{attrs:{id:"objects"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#objects"}},[e._v("#")]),e._v(" objects/")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("objects")]),e._v(" folder contains "),s("a",{attrs:{href:"objects"}},[e._v("custom objects")]),e._v(" you may want to add to the game.")]),e._v(" "),s("h4",{attrs:{id:"tilesets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tilesets"}},[e._v("#")]),e._v(" tilesets/")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("tilesets")]),e._v(" folder is where you can store your own custom "),s("a",{attrs:{href:"https://www.mapeditor.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tiled map editor"),s("OutboundLink")],1),e._v(" tileset files. If you used the "),s("a",{attrs:{href:"https://github.com/TwilioQuest/twilioquest-extension-template",target:"_blank",rel:"noopener noreferrer"}},[e._v("extension template"),s("OutboundLink")],1),e._v(", it is already pre-configured with the tilesets we use to build TwilioQuest, so you may not need to work directly with this folder very often.")]),e._v(" "),s("h4",{attrs:{id:"package-json"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#package-json"}},[e._v("#")]),e._v(" package.json")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("package.json")]),e._v(" file at the root of this directory is where you will configure your extension "),s("a",{attrs:{href:"https://docs.npmjs.com/cli/v7/configuring-npm/package-json",target:"_blank",rel:"noopener noreferrer"}},[e._v("as a Node.js package"),s("OutboundLink")],1),e._v(". If you need to install third-party Node.js libraries, you will do so here. In the future, we also plan to make use of the "),s("code",[e._v("engines")]),e._v(" configuration property so you can specify which versions of TwilioQuest your extension supports.")]),e._v(" "),s("h2",{attrs:{id:"resolving-the-path-to-game-assets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resolving-the-path-to-game-assets"}},[e._v("#")]),e._v(" Resolving the path to game assets")]),e._v(" "),s("p",[e._v("When TwilioQuest wants to load a game asset - whether it's a map file for a level or the configuration for an in-game object of some kind - it will use an asset loader that looks for files in either the built-in game bundle, or the extensions folder if extensions have been enabled.")]),e._v(" "),s("p",[e._v("If the player wants to go to a "),s("a",{attrs:{href:"levels"}},[e._v("level")]),e._v(" whose configuration can be found at the path "),s("code",[e._v("levels/fog_owl/level.json")]),e._v(" (this is the file path for the main "),s("em",[e._v("Fog Owl")]),e._v(' level that acts as the hub for most of the game), it will attempt to "look up" that file by iterating through every content folder (starting with extension folders) and return the first "hit".')]),e._v(" "),s("p",[s("img",{attrs:{src:o(362),alt:"resolving an extension path"}})]),e._v(" "),s("p",[e._v('If all extensions provide new content at different file paths, then TwilioQuest will always load the one and only version of an asset that exists. However, it is possible for extensions to override other extensions as well. The asset loader will return the first "hit" that it finds. Let\'s say that the author of '),s("code",[e._v("some-extension")]),e._v(" wanted to override the level configuration for the Fog Owl. They could create a file in their extension at the path "),s("code",[e._v("levels/fog_owl/level.json")]),e._v(", and the game would load that version of the file instead.")]),e._v(" "),s("p",[s("img",{attrs:{src:o(363),alt:"overriding an extension path"}})])])}),[],!1,null,null,null);t.default=a.exports}}]);