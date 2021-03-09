function relatedPostData(post) {
  return {
    title: post.data.title,
    subtitle: post.data.subtitle,
    url: post.data.permalink,
    hero: post.data.hero,
  };
}

module.exports = {
  posts(collection) {
    const posts = collection.getFilteredByGlob('src/_content/posts/*.md');
    return posts.map((el) => {
      const post = el;

      const related = [];
      posts.forEach((comparatorPost) => {
        if (post.data.permalink !== comparatorPost.data.permalink) {
          const postMeta = [...post.data.keywords, ...post.data.tags].sort();
          const comparatorPostMeta = [...comparatorPost.data.keywords, ...comparatorPost.data.tags].sort();
          const matches = postMeta.filter((keyword) => comparatorPostMeta.includes(keyword));
          const score = matches.length;

          if (score > 1) {
            related.push(Object.assign(relatedPostData(comparatorPost), { score }));
          }
        }
      });

      if (related.length !== 0) {
        post.data.relatedPosts = related
          .sort((relatedPost, relatedComparatorPost) => relatedComparatorPost.score - relatedPost.score)
          .slice(0, 5);
      }

      return post;
    });
  },
};
