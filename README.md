# Weather App!

## Technical Design Considerations

- this app was created with
```bash
npx create-react-router@latest project-folder-name
```
- the API call requests 4 weeks of data - only the next 2 weeks have hourly breakdowns from the API, which we need to properly give a forecast for a section of the day (Morning, Afternoon, Evening).
  - As a result, the 3rd and 4th week tiles do not show graphs. They have no graphs and are there just to show the Next/Prev button behavior
- the API call(s) could be optimized depending on expected end-user behavior
  - initially, if we know the user has loaded a viewport that only shows one tile, we could lazy load any other tiles e.g. when the user presses Next or expands the width of the browser
  - add infinite scrolling - if the data set was able to return a lot of tiles worth of data, we would need to load more data as the user presses Next
- I added a Submit button on the location text even though this was not on the design - the alternatives would have been:
  - a request on every letter types - wasteful and a lot of garbage would probably be returned before the user finished typing what she wanted to
  - auto-suggest drop-down based on what's typed - complex
- the weather icons were sourced from https://github.com/visualcrossing/WeatherIcons


- Tested on:
  - MacOS Sequoia 15.3.1
    - Chrome 133.0.6943.127
    - Safari 18.3

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
