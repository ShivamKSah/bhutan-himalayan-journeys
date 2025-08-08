
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Blog = () => {
  const blogPosts = [
    {
      title: "The Magic of Bhutanese Festivals",
      excerpt: "Discover the vibrant colors, traditional dances, and spiritual significance of Bhutan's most celebrated festivals.",
      date: "January 15, 2025",
      category: "Culture"
    },
    {
      title: "Trekking in the Himalayas: A Beginner's Guide",
      excerpt: "Everything you need to know before embarking on your first Himalayan trekking adventure.",
      date: "January 10, 2025",
      category: "Adventure"
    },
    {
      title: "Hidden Gems of North India",
      excerpt: "Explore lesser-known destinations that offer authentic cultural experiences away from the crowds.",
      date: "January 5, 2025",
      category: "Travel"
    },
    {
      title: "Sustainable Tourism in Bhutan",
      excerpt: "How Bhutan's unique approach to tourism helps preserve its environment and culture.",
      date: "December 28, 2024",
      category: "Sustainability"
    },
    {
      title: "Monsoon Travel: Pros and Cons",
      excerpt: "Understanding the advantages and challenges of traveling during the monsoon season.",
      date: "December 20, 2024",
      category: "Planning"
    },
    {
      title: "Photography Tips for Mountain Landscapes",
      excerpt: "Capture the breathtaking beauty of the Himalayas with these professional photography techniques.",
      date: "December 15, 2024",
      category: "Photography"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Travel Blog</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Stories, insights, and inspiration from the Himalayas
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-heritage font-semibold">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-bold text-primary mb-3">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <button className="text-heritage font-semibold hover:text-primary transition-colors">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
