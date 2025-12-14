// authRoutes.js
router.post("/signup", signup);
router.post("/login", login);

// userRoutes.js
router.post("/:id/follow", auth, follow);
router.post("/:id/unfollow", auth, unfollow);
router.get("/:id", auth, profile);

// postRoutes.js
router.post("/", auth, createPost);
router.get("/feed", auth, feed);
router.post("/:id/like", auth, like);
router.post("/:id/unlike", auth, unlike);
router.post("/:id/comment", auth, comment);
