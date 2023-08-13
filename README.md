# WEB103 Prework - Creatorverse

Submitted by: Farnaz Zinnah

About this web app: 
      
      In a world full of content creators, I wanted to make it easier for people to discover and manage their favorite role models, from Jay Shetty to Michelle Obama. My mission was to create a one-stop platform where users can learn about these creators and manage their profiles. Everyone is looking for motivation, whether it's through podcasts or YouTube. It's also difficult to keep track of the growing number of creators. That's why, I created this user-friendly web platform for accessing, managing, and exploring profiles of inspirational figures.
      The primary goal was to build an easy-to-use React platform with features for adding, viewing, updating, and deleting content creator profiles. The creators had details like a picture, a brief description, and links to their content.
      That's what I have done so far:
      1. I created a smooth and user-friendly interface with React JS. 
      2. Instead of using standard card layouts, I created a unique visual experience. 
      3. Users are greeted with a gallery of creators. 
      4. When you click on the view button, you'll be taken to a dedicated page with information and links to their content. 
      5. If someone is missing from the list, users can simply add them or change the information for those who are already there. 
      6. All of this while Supabase ensures that every piece of data is securely stored.
      The end result is an elegant, interactive platform designed with PicoCSS visuals. A location where users can not only browse but also interact and contribute, making content discovery and management truly interactive and simple.

Time spent: 25 hours

## Required Features

The following **required** functionality is completed:

- [x] **A logical component structure in React is used to create the frontend of the app**
- [x] **At least five content creators are displayed on the homepage of the app**
- [x] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- [x] **API calls use the async/await design pattern via Axios or fetch()**
- [x] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- [x] **Each content creator has their own unique URL**
- [x] **The user can edit a content creator to change their name, url, or description**
- [x] **The user can delete a content creator**
- [x] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

The following **optional** features are implemented:

- [x] Picocss is used to style HTML elements
- [x] The content creator items are displayed in a creative format, like cards instead of a list
- [x] An image of each content creator is shown on their content creator card

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality:
  1. Personal Recommendations: Introducing an algorithm that suggests creators based on user preference and browsing history.
  2. Search and Filter: Implementing a search bar, helping users quickly find creators or filter them based on categories or popularity.
  3. User Profiles: Letting users have profiles where they can bookmark their favorite creators or see their activity.
  4. Responsive Design: Making sure the platform looks great not just on desktops but on tablets and mobiles too.
  5. User Authentication: Ensuring that only genuine users can modify or add content.

## Video Walkthrough

Here's a walkthrough of implemented required features:

👉🏿<img src='[https://imgur.com/3lSkjci](https://imgur.com/3lSkjci)' title='Video Walkthrough for Web Dev 103 Pre Work Farnaz Zinnah' width='' alt='Video Walkthrough for Web Dev 103 Pre Work Farnaz Zinnah' />

GIF created with ...  LiceCap

## Notes

Describe any challenges encountered while building the app or any additional context you'd like to add:

    1. Reducing Redundancies Through Mapping: Managing large amounts of data frequently results in repetitive tasks. To dynamically generate fields and sections, the code used array map functions. This method reduces hardcoding to a minimum and is easier to maintain.
    2. Obtaining Dynamic Data: Data is retrieved from Supabase. Making sure the data was always up to date and current, presented a challenge. This was successfully handled with hooks and asynchronous patterns (async/await).
    3. Specific creators' individual IDs: That must be obtained in order to edit them. The usage to extract IDs from the URL, a react-router-dom parameter hook was used.
    4. Data validation and fallbacks: There is a chance of getting null or undefined values when fetching data. These were changed to empty strings using a reducer to prevent the application from crashing due to unpredictably generated data.
    5. Fixing the update button's malfunction and the imageURL's failure to display images: These problems needed to be identified and resolved, which often requires lengthy testing and debugging.
    6. Dynamic routing: It is used with React Router to display, edit, add, and view creators; this requires knowledge of route parameters and effective state management.
    7. Context for Theming: To manage theme switching between light and dark modes, a context was created. This context enables components located far down in the component tree to access and update the theme without having to drill into the props.
    
    It was challenging and rewarding to build this app. It created a dynamic, data-driven application by fusing the strength of React with the abilities of Supabase. Bug fixes, UI/UX enhancements, and smooth data operations were all essential components of the development process. The knowledge gained from this experience probably gave me a thorough understanding of both React and backend operations, laying the foundation for future full-stack development projects.

## License

Copyright [2023] [Farnaz Zinnah]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
