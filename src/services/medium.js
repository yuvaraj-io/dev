import { MediumArticles } from 'medium-article-api';

const medium = MediumArticles();

export const getMediumBlogs = async () => {
  const username = '@yuvidev';  // Replace with your Medium username

  try {
   
    const articles = await medium.getData(username);

    // Map through articles to display desired details
    const blogs = articles.items.map((article) => ({
      title: article.title,
      link: article.link,
      pubDate: article.pubDate,
      description: article.content,
    }));

    return blogs;
  } catch (error) {
    console.error("Error fetching Medium blogs:", error.message);
    return [];
  }
}
