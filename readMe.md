# Portfolio Template

**Note:** All current content, including text, pictures and icons, serves just as a placeholder. In a next step the template will be transformed into an actual website by adjusting text, images and integrating own projects. 

**Goal:** Create single page & responsive website that can be used as personal portfolio web page.  simplistic design  simplified navigation to 
Practice HTML5 / CSS3 skills and get started with Bootstrap

**Helpful Resources:** 
  * MDN-Web Documentation and free tutorials from Daily Tuition, Julio Codes & Udemy
  * Further design inspiration through Codester template videos
  * GitHub and other websites for open source code to create pop-up (portfolio), text "typing" effect (hero), filter function (portfolio), owl carousel (testimonials) & icons

## Milestones
1. Determine individual sections and creating rough sketch (focus on structure & element hierarchy) --> deviations in final website layout possible  
2. Watching short introduction tutorial about Bootstrap
3. Integrating Bootstrap and jQuery
4. Adding global variables and default css section
5. Creating hero & footer
6. Creating sections in between (about, portfolio, testimonials, contact)
7. Creating navabar
8. Adding responsive css-file (media queries) to refine responsive behaviour
9. Polishing code (e.g. delete unnecessary comments etc.)


## Greatest challenges
1. Programming the navbar:
    * Create an understanding of the basic code principles and properties in order to include all necessary functionalities
    * Latest Bootstrap version had some issues/bugs with collapsing menu --> button was shown, but menu never opened (height of the navbar became "0")
    * Programming the design changes when scrolling ("sticky-navigation")
2. Maintaining the same design layout throughout the whole page and making sure that especially margins/paddings or font-sizes always follow the same concept and are aligned
3. Defining media query rules to create responsive behaviour (especially in "about me" section): 
    * How to set the right css rules for the grid and margin/padding for every possible width (also because of missing knowledge about when to use instyle css for rows/columns) --> became particularly complex with an increasing number of nested grids
    * How to handle the alignment of ::before/::after elements


## Upcoming features and code improvements
* Check if sticky-navigation has a bug - when refreshing the page while class "sticky-navigation" is active the navbar behaves like sticky navigation class is false - and then fix it
* Improve code: global variables, standardize selectors in css, delete redundant code and check overall design consistency (e.g. margin/padding, text size & style etc.)
* Feature: programm functionality of the contact form (with PHP - GET & POST) 
* Responsive behaviour of image in about-me section: find solution for the small range when image gets too close to the left border
* Add design improvements e.g. navbar design elements or "loader icon" when page is initialized
* Add additional code to media queries for certain website elements - currently it addresses mainly the navbar
* Improve SEO (e.g. add meta data or use other tags than "div" like section/main/article etc. if appropriate)
* Transform template into actual Portfolio Website by adjusting text, images and integration of own projects
* Feature: add a blog section
