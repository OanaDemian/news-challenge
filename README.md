# News Summary Challenge

### Task

News is a single page application built in React that sends requests to the Guardian API to get Headline and Article data and display them to a busy user. 

Users are able to:

- View today's **headlines** in one place;
- View the relevant **article image** for each news article when browsing the headlines;
- View the **article's summary** which expands when the user clicks on the article's image or headline;
- View the **original article** when the user clicks on the article's expanded summary;
- View the **optimal layout** for the interface depending on their device's screen size.

### User Stories

#### Standard
```
As a busy politician
So I know what the big stories of the day are
I can see all of today's headlines in one place
```

```
As a busy politician
So that I have something nice to look at
I can see a relevant picture to illustrate each news article when I browse headlines
```

#### Extended

```
As a busy politician
So that I can get an in depth understanding of a very important story
I can click a news headline to see a summary and a photo of the news article
```

```
As a busy politician
So I can get a few more details about an important story
I can see click a news article summary title which links to the original article
```

```
As a busy politician
Just in case my laptop breaks
I can read the site comfortably on my phone
```

### Mockups and Component Hierarchy

#### Headlines page

![Headlines page mockup](/images/news-summary-project-headlines-page-mockup-and-component-hierarchy.png)

#### Expanded article

![Article mockup](/images/news-summary-project-article-mockup.png)

### Links
- See the site: https://news-0uxg.onrender.com/
- See the code: https://github.com/OanaDemian/news-summary-challenge-df

### Screenshots
![Headlines page screenshot](/src/assets/news-summary-project-headlines-page.png)
![Article screenshot](/src/assets/news-article-headline-image.png)
![Expanded article screenshot](/src/assets/news-summary-project-expanded-summary.png)

### Built with

Here's an overview of the technologies used to build this template application.

- [React](https://reactjs.org/) is a tool that is used to build engaging front ends. 
- [Axios](https://axios-http.com/) is a promise-based HTTP Client for node.js and the browser. 
- [Vite](https://vitejs.dev/), a platform-agnostic frontend tool for building web applications quickly.
- [ESLint](https://eslint.org) for linting.
- CSS for styling.

### Getting Started 
1. Fork this repository and then run the following command on your local environment:

```bash
$ git clone https://github.com/<YOUR GITHUB USERNAME>//news-summary-challenge-df.git && cd /news-summary-challenge-df
```

2. Install Node.js dependencies:

```bash
$ cd news-summary-challenge-df
$ npm install
```

3. Install an ESLint plugin for your editor. For example: [`ESLint`](https://eslint.org/).

4. Set up the environmental parameters:

```bash
$ touch .env
$ echo VITE_APP_API_KEY = 'your_Guardian_API_key' > .env
```

Create a _.gitignore_ file and add the .env file. This tells Git ignore the .env file and its contents when a Git commit is made.

4. Run de app locally
In the root of your folder, create a .env file which contains the 
```bash
$ npm run dev
```

Runs the app in the development mode.\
Open [ http://localhost:5173/]( http://localhost:5173/) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

5. Testing 

```bash
$ npm run test
```

6. Test coverage:

```bash
$ npm run coverage
```

7. Lint you project:

```bash
$ npm run lint
```

8. Fix linting issues:

```bash
$ npm run lint:fix
```
9. Build the app for production to the `dist` folder:

```bash
$ npm run build
```

Builds the app for production to the `dist` folder.\
Your app is ready to be deployed!


