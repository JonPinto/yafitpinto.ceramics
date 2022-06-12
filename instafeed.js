var userFeed = new Instafeed({
    get: 'user',
    template: '<a href="{{link}}"><img title="{{caption}}" src="{{image}}" /></a>',
    limit: 8,
    target: "instafeed-container",
    resolution: 'low_resolution',
    accessToken: 'IGQVJWUDFkZAWlnOHVWVUM4anJQSkVFdThKR1NrZA2VCNW1ac1Q5aU0zWTVfb2xjaWFMWVEtd183ajJtT1VXNE9Lc1B0Yl9xZAHZAOdGZAzVTZAYNlJkcEZAYUlZAFYlFoUkVpSjNLTFNyUVFRaEZAlNjQ3U3dBUgZDZD'
});
userFeed.run();