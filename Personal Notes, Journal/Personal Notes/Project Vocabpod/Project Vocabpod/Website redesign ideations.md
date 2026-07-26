# Fixes
The entire site should be behind a paywall as in content should show up but should not be accessible.
- the audio it downloads should be cached or stored in browseer (and ofc deleted if no premium subscription is detected) in a way thatthey can not retrieve it. It should help with preventing misuse of bandwidth due to refreshings. 

### Features page
in small letters, there should be a "Features" page which explains what methods site emplyes to get them to remember words.
Explain the concept of Mnemonic to them, of SRS and forgetting curve (code in a forgetting curve in the page), Benifit of audio immersion, the contextual story method, the engagement by quiz method, the Real life usage method we use to get them to use the words - each in its beautiful captivating easy for eyes easy for brain type style in easy language so they understand what they have. Plus, the promises like good vocabulary retention, 50+ words a month, effortless learning and all.
## Navigation
### Sidebar
It should have a sidebar navigation so users can go from one place to another wherever they are, at the bottom of the navbar it should show profile as well.
These details should also be in home page ofcourse
# Site description
### Progress bar
User should see a progress bar at home page
1. for the first 10 words
2. Then for 30 words (including the last 10 already done)
3. Then for 50
4. Then for 100
### Levels
Each word can be graded one of these three levels; by default all words appear in same list but user can choose to sort them out by levels if they only want to study that level of word:
- **Level 1 (Foundation):** High-frequency, high-utility words.
- **Level 2 (Nuance):** Words that elevate professional or academic writing
- **Level 3 (Mastery):** Highly specific, complex vocabulary.

### Journey section
There should be a journey section, categorizing words based on their category and allowing users to choose words based on themes. The admin panel word input screen should have option to choose category and create one, and it should show a list of existing categories as well so we do not always create new categories all the time.

### Words screen

### Autoplay
"For those busy times when you still want to learn"
It should autoplay words back to back. It should choose  words from level 1 or 2, downloads the audio, makes a playlist and gives special screen with just the word, its mnemonic and its meaning showing with an elegent audioplayer. It should only download the next audio when done with one word and when downloaded, it should store in browser to prevent re download.
### Call to action
It should have Start Daily Word button which shows them the 2 new words for the day. The thing is that while all the words remain accessible, they should be encouraged to do atleast two words per day so that they can have "50+ words by playing just for 2 minutes a day" (which will be the tagline)
#### Graphic
There should be stickman graphics in there, chosen from the library of stickman you decided to have.

#### Audio
- **Media:** The custom audio player automatically plays the short, high-production podcast snippet.

#### Quiz
This quiz result is what gets sent back to your Supabase backend to update their progress state.

#### A story section
It should have a story section where the word is used again and again in simple story to reinforce the concept. Update the admin portal input, have the syntax in, and update the database to support and sync stories as well.

#### XP
level 1 words should give 10 xp, level 2 gives 15 and level 3 giving 25.

#### Real life usage section

### SRS system
It should make it clear that they will see the word in few days again so they do not forget.

The database needs to track intervals based on the user's quiz performance. If they get the quiz right, the algorithm pushes the word further into the future. If they fail, it brings it back immediately.

### Flashcard view
There should be a flashcard view, where they can review the words they have already learned in flashcard format.

#### Calendar view
It should have a calendar view - 

### Social
#### leaderboard
it should have a leaderboard page which is updated once a day. It is based on xp that the users have.
It should have a button to join the whatsapp group

### Profile
#### Subscription
It should show when the subscription will renew

#### Streak

#### Progress
It should show chart on home screen and on profile of how much progress has been made based on xp and words learned
### About
It should have an about section

### User info
After a user subscribes to premium, it should ask for Phone number of theirs so I can give them product updates and they can stay in touch.
## Admin

### Activity
It should remind me in admin panel of the user who are premium and have not opened the site in 2 days under the inactive users tab. In front of inactive users, I should see a whatsapp button to text them directly - their numbers gathered directly from the database