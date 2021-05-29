(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{377:function(e,t,a){"use strict";a.r(t);var s=a(45),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"built-in-game-objects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#built-in-game-objects"}},[e._v("#")]),e._v(" Built-in Game Objects")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("twilioquest-base")]),e._v(" extension ships with some default scripted objects. We use these in official TwilioQuest content or provide them as helpful building blocks.")]),e._v(" "),a("p",[e._v("These objects are members of the "),a("code",[e._v("TwilioQuestObjects")]),e._v(" tileset. These objects come with a bundle of pre-configured properties and custom scripting. Several of the objects below have many types. These are the same object's with functionality, but with different sprites or orientations.")]),e._v(" "),a("h2",{attrs:{id:"twilioquestobjects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#twilioquestobjects"}},[e._v("#")]),e._v(" TwilioQuestObjects")]),e._v(" "),a("h3",{attrs:{id:"chests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chests"}},[e._v("#")]),e._v(" Chests")]),e._v(" "),a("p",[e._v("Chests in TwilioQuest are used to present objectives to your players that are optional. They do not block a player's progress. These are best suited for enrichment lessons that are not central to the mission's content.")]),e._v(" "),a("h4",{attrs:{id:"properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("objectiveName (String)")]),e._v(" - This is the objective name that this chest should display in a Hack Interface when a player interacts with the chest.")])]),e._v(" "),a("li",[a("p",[e._v("types: "),a("code",[e._v("chest-red")]),e._v(", "),a("code",[e._v("chest-autumn")]),e._v(", "),a("code",[e._v("chest-blue")]),e._v(", "),a("code",[e._v("chest-green")]),e._v(", "),a("code",[e._v("chest-light-blue")]),e._v(", "),a("code",[e._v("chest-light-red")]),e._v(", "),a("code",[e._v("chest-pink")]),e._v(", "),a("code",[e._v("chest-purple")]),e._v(", "),a("code",[e._v("chest-red-orange")])])])]),e._v(" "),a("h3",{attrs:{id:"laser-barriers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#laser-barriers"}},[e._v("#")]),e._v(" Laser Barriers")]),e._v(" "),a("p",[e._v("Laser Barriers in TwilioQuest are conventionally used to present objectives to your players that are required. They prevent a player from progressing into the space they block off. Once their linked objective is completed they will open. These are best suited to be paired with a terminal that will launch essential educational content.")]),e._v(" "),a("h4",{attrs:{id:"properties-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#properties-2"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("objectiveName (String)")]),e._v(" - This is the objective name that should cause this laser barrier to open after it's completed.")])]),e._v(" "),a("li",[a("p",[e._v("types: "),a("code",[e._v("laser-horizontal")]),e._v(", "),a("code",[e._v("laser-vertical")])])])]),e._v(" "),a("h3",{attrs:{id:"terminals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#terminals"}},[e._v("#")]),e._v(" Terminals")]),e._v(" "),a("p",[e._v("Terminals are the conventional location for launching an objective that will open up a laser barrier.")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("objectiveName (String)")]),e._v(" - This is the objective name that this terminal should display in a Hack Interface when a player interacts with the terminal.")])]),e._v(" "),a("li",[a("p",[e._v("types: "),a("code",[e._v("terminal")])])])]),e._v(" "),a("h2",{attrs:{id:"legacy-objects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#legacy-objects"}},[e._v("#")]),e._v(" Legacy Objects")]),e._v(" "),a("p",[e._v("These objects are created in Tiled differently than the new object format above. As time progresses, they'll be migrated to that new format.")]),e._v(" "),a("h3",{attrs:{id:"transition-areas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transition-areas"}},[e._v("#")]),e._v(" Transition Areas")]),e._v(" "),a("ul",[a("li",[e._v("key")])]),e._v(" "),a("p",[e._v("These trigger events when they're entered and exited by a player")]),e._v(" "),a("h3",{attrs:{id:"exits"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exits"}},[e._v("#")]),e._v(" Exits")]),e._v(" "),a("ul",[a("li",[e._v("level name")]),e._v(" "),a("li",[e._v("map name")])]),e._v(" "),a("p",[e._v("These could be replaced by transition areas?")]),e._v(" "),a("h3",{attrs:{id:"player-entry-points"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#player-entry-points"}},[e._v("#")]),e._v(" Player Entry Points")]),e._v(" "),a("p",[e._v("By convention, these points names are formatted like so "),a("code",[e._v("player_entryX")]),e._v(" where "),a("code",[e._v("X")]),e._v(" is a unique identifier (usually an incrementing number).")]),e._v(" "),a("p",[e._v("Each map should have at least one "),a("code",[e._v("player_entry1")]),e._v(" entry point. This is where TwilioQuest will default to if no specific player entry point is provided when a map is loaded.")]),e._v(" "),a("ul",[a("li",[e._v("key")]),e._v(" "),a("li",[e._v("initialFacing")])]),e._v(" "),a("h3",{attrs:{id:"non-player-characters-npcs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#non-player-characters-npcs"}},[e._v("#")]),e._v(" Non Player Characters (NPCs)")]),e._v(" "),a("ul",[a("li",[e._v("conversation")])]),e._v(" "),a("h3",{attrs:{id:"tile-objects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tile-objects"}},[e._v("#")]),e._v(" Tile Objects")]),e._v(" "),a("p",[e._v("This infomration might belong in a guide?")]),e._v(" "),a("h3",{attrs:{id:"generic-objects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generic-objects"}},[e._v("#")]),e._v(" Generic Objects")]),e._v(" "),a("p",[e._v("This information might belong in a guide?")]),e._v(" "),a("p",[e._v("These are sometimes useful to do things like create an arbitrary region that triggers a piece of interaction text.")])])}),[],!1,null,null,null);t.default=r.exports}}]);