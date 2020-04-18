const postService = {
  load: function(limit) {
    return fetch(`http://localhost:9999/api/origami${limit ? `?limit=${limit}` : ""}`).then((res) =>
      res.json()
    );
  }
};

export default postService;
