window.onload = function() {
  const ui = SwaggerUIBundle({
    urls: [
      {url: "https://raw.githubusercontent.com/Nytuo/CosmicComicsNodeServer/refs/heads/main/swagger.json", name: "Remote"},
      {url: "./specs/spec1.json", name: "Spec1"},
      {url: "./specs/spec2.json", name: "Spec2"}
    ],
    dom_id: '#swagger-ui',
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    layout: "StandaloneLayout",
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ]
  });

  window.ui = ui;
}