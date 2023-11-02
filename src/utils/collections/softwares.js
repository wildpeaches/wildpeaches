function relatedPostData(post) {
  return {
    title: post.data.title,
    url: post.data.permalink,
  };
}

function softwares(collection) {
  // Need to get posts again → https://github.com/11ty/eleventy/discussions/2403?sort=top#discussioncomment-2809282
  const posts = collection.getFilteredByGlob('src/_content/posts/*.md');
  const softwares = collection.getFilteredByGlob('src/_content/software/*.md');

  return softwares.map((software) => {
    const postsUsingSoftware = [];

    posts.map((post) => {
      if (post.data.software?.includes(software.template.fileSlugStr)) {
        postsUsingSoftware.push(relatedPostData(post));
      }
    });

    if (postsUsingSoftware.length !== 0) {
      software.data.posts = postsUsingSoftware;
    }

    return software;
  });
}

module.exports = { softwares };
