(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{387:function(e,t,a){"use strict";a.r(t);var o=a(45),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"creating-new-levels"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-new-levels"}},[e._v("#")]),e._v(" Creating New Levels")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("⚠️ UNDER CONSTRUCTION")]),e._v(" "),a("p",[e._v("This guide is still a work in progress!")])]),e._v(" "),a("p",[e._v("A "),a("strong",[e._v("level")]),e._v(" in TwilioQuest is an explorable area in the game that can contain objectives, game objects, and characters for the player to interact with. There are two types of levels that you can create:")]),e._v(" "),a("ul",[a("li",[e._v("A "),a("strong",[e._v("VR training mission")]),e._v(" accessible through the Fog Owl's training simulator room")]),e._v(" "),a("li",[e._v("A "),a("strong",[e._v("location within The Cloud")]),e._v(" that the player can navigate to using the Fog Owl's navigation map interface ("),a("strong",[e._v("NOTE:")]),e._v(" This feature is under construction - the navigation map should be available in summer 2021.)")])]),e._v(" "),a("p",[e._v("A level folder contains a configuration file (a file called "),a("code",[e._v("level.json")]),e._v(", which we will cover later on) and the following assets:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Maps:")]),e._v(" These files specify the visual layout and game objects present within the level. A level may have multiple maps.")]),e._v(" "),a("li",[a("strong",[e._v("Objectives:")]),e._v(" Objectives are where you will deliver most of the educational content for your level. You will describe your objective using "),a("a",{attrs:{href:"https://github.github.com/gfm/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Markdown"),a("OutboundLink")],1),e._v(" and write validation code for your objective using "),a("a",{attrs:{href:"https://www.nodejs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[a("strong",[e._v("Conversations:")]),e._v(" You can write dynamic non-player character (NPC) dialogue for the characters the player will encounter in the level.")]),e._v(" "),a("li",[a("strong",[e._v("Event Scripting:")]),e._v(" A level folder contains an "),a("code",[e._v("events.js")]),e._v(" file which can respond to level lifecycle events, and add dynamic behavior to your level.")])]),e._v(" "),a("p",[e._v("Read on to learn more about how these pieces fit together, and how to get started creating your own level.")]),e._v(" "),a("h2",{attrs:{id:"planning-your-level"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#planning-your-level"}},[e._v("#")]),e._v(" Planning your level")]),e._v(" "),a("p",[e._v("Which kind of level you choose to build comes down to the type of content you are looking to create for players.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Story Levels")]),e._v(" "),a("th",[e._v("VR Training Levels")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Are you looking to create a "),a("strong",[e._v("story-driven experience")]),e._v(" with characters, event scripting, and an immersive environment? You should create a level that appears as a "),a("strong",[e._v("location within The Cloud")]),e._v(" on the navigation map interface.")]),e._v(" "),a("td",[e._v("Are you more interested in creating "),a("strong",[e._v("task-focused exercises")]),e._v(" that don't require extensive story elements? You chould create a mission that uses the "),a("strong",[e._v("VR Training")]),e._v(" tiles and motif, and just focus on creating chests and laser barriers.")])])])]),e._v(" "),a("p",[e._v("We recommend that most content authors start by creating a VR Training mission, since creating event scripts, NPC conversations, and maps with detailed visuals can be quite time consuming when you are just getting started. To see how you can make your level show up in either the navigation interface or VR training computer, read the configuration section at the bottom of this guide.")]),e._v(" "),a("h3",{attrs:{id:"planning-your-content-and-learning-objectives"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#planning-your-content-and-learning-objectives"}},[e._v("#")]),e._v(" Planning your content and learning objectives")]),e._v(" "),a("p",[e._v("Before you start hacking on a level, we recommend you begin in a document and come up with a list of "),a("a",{attrs:{href:"https://www.bobpikegroup.com/trainer-blog/5-steps-to-writing-clear-and-measurable-learning-objectives",target:"_blank",rel:"noopener noreferrer"}},[e._v("learning objectives"),a("OutboundLink")],1),e._v(". What should your learners have practiced and mastered by the time they complete the level? After writing out your learning objectives, you should take some time to think through how you could assess whether or not the learner has actually mastered those concepts. Finally, you should try and identify any prerequisites or ordering - e.g. if you want to teach the Python REPL, your learner should have Python installed first.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("You can make other levels a "),a("strong",[e._v("prerequisite")]),e._v(" before a given level can be loaded in the VR training mission computer. Refer to the level configuration guide below to see how this works.")])]),e._v(" "),a("p",[e._v("Creating a learning objective outline, considering how you will assess learning objective outcomes, and identifying dependencies will help you visualize how your level should play out. In general, a learning objective maps to a single "),a("code",[e._v("objective")]),e._v(' within the game (an instance of a "hackable" object or barrier in the map). A single map should contain '),a("strong",[e._v("six objectives or fewer")]),e._v(", and be doable by your target audience in "),a("strong",[e._v("under 30 minutes")]),e._v(". These are not hard and fast rules, but hopefully useful hueristics as you plan out your content.")]),e._v(" "),a("p",[e._v("If you have more learning objectives than can fit into a single map, consider breaking up your content to span multiple maps.")]),e._v(" "),a("h3",{attrs:{id:"example-learning-objective-outline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-learning-objective-outline"}},[e._v("#")]),e._v(" Example learning objective outline")]),e._v(" "),a("p",[e._v("Here is an example of an objective outline for a TwilioQuest VR Training mission focused on teaching "),a("a",{attrs:{href:"https://www.twilio.com/docs/sms/send-messages",target:"_blank",rel:"noopener noreferrer"}},[e._v("how to send an SMS message using the Twilio API"),a("OutboundLink")],1),e._v(". This will be very specific to how the Twilio API works, but this format/methodology can be adapted to teach any kind of technical concept.")]),e._v(" "),a("h4",{attrs:{id:"objectives"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#objectives"}},[e._v("#")]),e._v(" Objectives")]),e._v(" "),a("ol",[a("li",[e._v("The learner should be able to find their account SID and auth token in the Twilio console, to use for API requests.")]),e._v(" "),a("li",[e._v("The learner should be able to make an authenticated REST API request to Twilio using their account credentials. (Requires #1)")]),e._v(" "),a("li",[e._v("The learner should understand how to use the "),a("code",[e._v("/Messages")]),e._v(" REST API endpoint to create a new SMS text message. (Requires #2)")]),e._v(" "),a("li",[e._v("The learner should be able to send a media message (in the US or Canada) by providing the "),a("code",[e._v("mediaUrl")]),e._v(" parameter in a request to the "),a("code",[e._v("/Messages")]),e._v(" endpoint. (Requires #3)")]),e._v(" "),a("li",[e._v("The learner should be able to specify a status callback URL when they send a messages using the "),a("code",[e._v("/Messages")]),e._v(" endpoint. (Requires #3)")])]),e._v(" "),a("h4",{attrs:{id:"validation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validation"}},[e._v("#")]),e._v(" Validation")]),e._v(" "),a("ol",[a("li",[e._v("Ask the user to input their account credentials, and we can make an API request on their behalf to ensure that they are correct. We should store the credentials in a local file to use for subsequent validation requests.")]),e._v(" "),a("li",[e._v("Ask the user to make an authenticated API request to the "),a("code",[e._v("/Accounts")]),e._v(" endpoint, which requires no parameters. Ask them what one of the data elements is in the response sent back from the server. Using their configured account credentials, ensure the input they gave us was correct.")]),e._v(" "),a("li",[e._v('Ask the user to send an outbound SMS message using their account credentials, with the string of text "TwilioQuest rules". Ask the user to input a "SID", or unique ID, for the message. Using that SID, check the Twilio API to see if the message has been sent, and if it contained the appropriate message text.')]),e._v(" "),a("li",[e._v("Ask the user to send a media message with the API, and provide a SID for validation. Check the Twilio API to see if a media message has been sent.")]),e._v(" "),a("li",[e._v("Provide a URL to a server I (as the content developer) control to use as a status callback URL. Ask the user to send a message using this status callback URL. Check the server to ensure that the status callback message was received.")])]),e._v(" "),a("h4",{attrs:{id:"sketching-the-level-layout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sketching-the-level-layout"}},[e._v("#")]),e._v(" Sketching the level layout")]),e._v(" "),a("p",[e._v("Once you have a sense of what your learning objectives are, and how you will assess completion of those objectives, you can start to plan out where you will place objectives within a map to support the learning path you have laid out.")]),e._v(" "),a("p",[e._v("In the example above, objectives 1, 2, and 3 each build on the previous one, and should be completed in order. Objectives 4 and 5 both require #3, but could theoretically be completed in any order.")]),e._v(" "),a("p",[e._v("One way you might lay out a level to contain these objectives would be a linear path to complete the first three objectives, followed by a branching course to potentially complete the final two.")]),e._v(" "),a("h2",{attrs:{id:"creating-a-new-level-folder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-new-level-folder"}},[e._v("#")]),e._v(" Creating a new level folder")]),e._v(" "),a("p",[e._v("Copy an existing one!")]),e._v(" "),a("h2",{attrs:{id:"configuring-and-building-your-level"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-and-building-your-level"}},[e._v("#")]),e._v(" Configuring and building your level")]),e._v(" "),a("p",[e._v("Go over how to poke at the level.json, and then link to guides on specific topics.")])])}),[],!1,null,null,null);t.default=n.exports}}]);