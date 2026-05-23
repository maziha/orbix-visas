export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root {
        --color-bg-dark: #040175;
        --color-bg-white: #ffffff;
        --color-bg-subtle: #f4f6fb;
      }
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: var(--color-bg-subtle); color: var(--color-bg-dark); display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font-size: 1.25rem; margin: 0 0 0.5rem; }
      p { color: #4b5563; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { font: inherit; cursor: pointer; text-decoration: none; }
      .btn-primary,
      .btn-secondary {
        display: inline-flex; align-items: center; justify-content: center;
        border-radius: 8px; padding: 12px 28px; font-weight: 600;
      }
      .btn-primary {
        background: var(--color-bg-dark); color: var(--color-bg-white); border: none;
      }
      .btn-secondary {
        background: transparent; color: var(--color-bg-dark);
        border: 2px solid var(--color-bg-dark);
      }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home.</p>
      <div class="actions">
        <button class="btn-primary" onclick="location.reload()">Try again</button>
        <a class="btn-secondary" href="/">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
