import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, MessageCircle, Heart, Share2, Award, Search, PieChart } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

function Community() {
  const [darkMode, setDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Initial posts data including questions and a poll
  const [posts, setPosts] = useState([
    {
      id: 1,
      type: 'question',
      title: "How do I start investing in stocks?",
      author: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      content: "I'm new to investing and would love some guidance on getting started with stocks. What platforms do you recommend?",
      likes: 24,
      replies: 8,
      comments: [],
      tags: ["investing", "stocks", "beginners"],
      timestamp: new Date(2024, 2, 1)
    },
    {
      id: 2,
      type: 'question',
      title: "Tips for emergency fund planning?",
      author: "Emily Chen",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      content: "Looking for advice on how to build and maintain an emergency fund. How many months of expenses should I save?",
      likes: 32,
      replies: 12,
      comments: [],
      tags: ["savings", "emergency-fund", "planning"],
      timestamp: new Date(2024, 2, 5)
    },
    {
      id: 3,
      type: 'poll',
      title: "What financial goal are you focusing on this year?",
      author: "Jessica Williams",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150",
      content: "I'm curious about what financial priorities the community has for this year. Please vote and share your thoughts!",
      likes: 45,
      replies: 17,
      comments: [
        {
          id: 1,
          author: "Michelle Rodriguez",
          avatar: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=150",
          content: "I'm focusing on paying off my student loans this year. It's a big goal but I'm determined!",
          timestamp: new Date(2024, 2, 7),
          likes: 8
        }
      ],
      pollOptions: [
        { id: 1, text: "Building emergency fund", votes: 58 },
        { id: 2, text: "Investing for retirement", votes: 72 },
        { id: 3, text: "Paying off debt", votes: 87 },
        { id: 4, text: "Saving for a home", votes: 43 }
      ],
      tags: ["goals", "finance", "planning", "community"],
      timestamp: new Date(2024, 2, 6)
    },
    {
      id: 4,
      type: 'question',
      title: "Best financial apps for budgeting?",
      author: "Taylor Morgan",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
      content: "I've been trying to get better at tracking my spending. What apps have you found most helpful for creating and sticking to a budget?",
      likes: 19,
      replies: 21,
      comments: [
        {
          id: 1,
          author: "Rebecca Chen",
          avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150",
          content: "I've been using YNAB (You Need A Budget) for about 6 months and it's completely changed my relationship with money. Highly recommend!",
          timestamp: new Date(2024, 2, 8),
          likes: 12
        }
      ],
      tags: ["budgeting", "apps", "personal-finance"],
      timestamp: new Date(2024, 2, 8)
    },
    {
      id: 5,
      type: 'question',
      title: "Advice on negotiating a higher salary?",
      author: "Priya Patel",
      avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150",
      content: "I have my annual review coming up and want to ask for a raise. Any tips from women who've successfully negotiated higher pay? I work in tech and have data showing I'm underpaid compared to peers.",
      likes: 52,
      replies: 24,
      comments: [],
      tags: ["career", "negotiation", "salary", "workplace"],
      timestamp: new Date(2024, 2, 9)
    }
  ]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addPost = (newPost) => {
    setPosts([
      {
        id: posts.length + 1,
        ...newPost,
        likes: 0,
        replies: 0,
        comments: [],
        timestamp: new Date()
      },
      ...posts
    ]);
    setShowModal(false);
  };

  const handleLike = (postId) => {
    setPosts(
      posts.map(post => 
        post.id === postId 
          ? { ...post, likes: post.liked ? post.likes - 1 : post.likes + 1, liked: !post.liked } 
          : post
      )
    );
  };

  const handleVote = (postId, optionId) => {
    setPosts(
      posts.map(post => {
        if (post.id === postId && post.type === 'poll') {
          return {
            ...post,
            pollOptions: post.pollOptions.map(option => 
              option.id === optionId 
                ? { ...option, votes: option.votes + 1 } 
                : option
            )
          };
        }
        return post;
      })
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <nav className="bg-white dark:bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <Award className="h-8 w-8 text-pink-500" />
              <span className="text-2xl font-bold text-pink-500">SheFunds Community</span>
            </motion.div>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700"
            >
              {darkMode ? <Sun className="text-yellow-500" /> : <Moon className="text-gray-600" />}
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div className="relative flex-1 max-w-lg">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search discussions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 
                focus:outline-none focus:ring-2 focus:ring-pink-500 dark:bg-gray-800 dark:text-white"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg 
              font-medium shadow-md transition-colors ml-4"
          >
            Start Discussion
          </motion.button>
        </div>

        <AnimatePresence>
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.1 }}
            >
              <PostCard 
                post={post} 
                onLike={() => handleLike(post.id)}
                onVote={(optionId) => handleVote(post.id, optionId)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </main>

      <AnimatePresence>
        {showModal && (
          <NewPostModal onClose={() => setShowModal(false)} onSubmit={addPost} />
        )}
      </AnimatePresence>
    </div>
  );
}

function PostCard({ post, onLike, onVote }) {
  const [showComments, setShowComments] = useState(false);
  const totalVotes = post.pollOptions?.reduce((sum, option) => sum + option.votes, 0) || 0;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 mb-6"
    >
      <div className="flex items-start space-x-4">
        <img
          src={post.avatar}
          alt={post.author}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {post.title}
            {post.type === 'poll' && (
              <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                <PieChart className="w-3 h-3 mr-1" />
                Poll
              </span>
            )}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Posted by {post.author} • {formatDistanceToNow(post.timestamp)} ago
          </p>
          
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            {post.content}
          </p>

          {post.type === 'poll' && post.pollOptions && (
            <div className="mt-4 space-y-3">
              {post.pollOptions.map(option => {
                const percentage = totalVotes > 0 ? (option.votes / totalVotes) * 100 : 0;
                return (
                  <button
                    key={option.id}
                    onClick={() => onVote(option.id)}
                    className="w-full text-left"
                  >
                    <div className="relative h-10 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        className="absolute top-0 left-0 h-full bg-pink-500 bg-opacity-20"
                      />
                      <div className="absolute top-0 left-0 h-full w-full px-4 flex items-center justify-between">
                        <span className="text-gray-700 dark:text-gray-300">{option.text}</span>
                        <span className="text-gray-500 dark:text-gray-400">{Math.round(percentage)}%</span>
                      </div>
                    </div>
                  </button>
                );
              })}
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                {totalVotes} votes total
              </p>
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-sm bg-pink-100 dark:bg-pink-900 
                text-pink-800 dark:text-pink-200"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-4 flex items-center space-x-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onLike}
              className={`flex items-center space-x-2 ${
                post.liked ? 'text-pink-500' : 'text-gray-500 hover:text-pink-500'
              } transition-colors`}
            >
              <Heart className={`w-5 h-5 ${post.liked ? 'fill-current' : ''}`} />
              <span>{post.likes}</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowComments(!showComments)}
              className="flex items-center space-x-2 text-gray-500 hover:text-pink-500 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{post.type === 'question' ? post.replies : post.comments?.length || 0}</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-2 text-gray-500 hover:text-pink-500 transition-colors"
            >
              <Share2 className="w-5 h-5" />
              <span>Share</span>
            </motion.button>
          </div>

          {showComments && post.comments && post.comments.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 space-y-4"
            >
              {post.comments.map(comment => (
                <motion.div
                  key={comment.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex space-x-3 pt-4"
                >
                  <img
                    src={comment.avatar}
                    alt={comment.author}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg px-4 py-2">
                      <p className="font-medium text-gray-900 dark:text-white">
                        {comment.author}
                      </p>
                      <p className="text-gray-700 dark:text-gray-300">
                        {comment.content}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4 mt-1">
                      <button className="text-sm text-gray-500 hover:text-pink-500">
                        Like
                      </button>
                      <button className="text-sm text-gray-500 hover:text-pink-500">
                        Reply
                      </button>
                      <span className="text-sm text-gray-400">
                        {formatDistanceToNow(comment.timestamp)} ago
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function NewPostModal({ onClose, onSubmit }) {
  const [postType, setPostType] = useState('question');
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    imageUrl: '',
    tags: '',
    author: '',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    pollOptions: [{ id: 1, text: '', votes: 0 }]
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      type: postType,
      title: formData.title,
      author: formData.author || "Anonymous",
      avatar: formData.avatar,
      content: formData.content,
      tags: formData.tags.split(',').map(tag => tag.trim()),
      ...(postType === 'poll' && { pollOptions: formData.pollOptions })
    });
  };

  const addPollOption = () => {
    setFormData(prev => ({
      ...prev,
      pollOptions: [...prev.pollOptions, { id: prev.pollOptions.length + 1, text: '', votes: 0 }]
    }));
  };

  const removePollOption = (id) => {
    if (formData.pollOptions.length > 1) {
      setFormData(prev => ({
        ...prev,
        pollOptions: prev.pollOptions.filter(option => option.id !== id)
      }));
    }
  };

  const updatePollOption = (id, text) => {
    setFormData(prev => ({
      ...prev,
      pollOptions: prev.pollOptions.map(option =>
        option.id === id ? { ...option, text } : option
      )
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Start a New Discussion
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <Sun className="w-6 h-6" />
          </button>
        </div>

        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setPostType('question')}
            className={`flex-1 py-2 rounded-lg flex items-center justify-center space-x-2 ${
              postType === 'question'
                ? 'bg-pink-500 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
            }`}
          >
            <MessageCircle className="w-5 h-5" />
            <span>Question</span>
          </button>
          <button
            onClick={() => setPostType('poll')}
            className={`flex-1 py-2 rounded-lg flex items-center justify-center space-x-2 ${
              postType === 'poll'
                ? 'bg-pink-500 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
            }`}
          >
            <PieChart className="w-5 h-5" />
            <span>Poll</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Your Name
            </label>
            <input
              type="text"
              value={formData.author}
              onChange={(e) => setFormData({ ...formData, author: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 
                focus:outline-none focus:ring-2 focus:ring-pink-500 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Title
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 
                focus:outline-none focus:ring-2 focus:ring-pink-500 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {postType === 'question' ? 'Question' : 'Content'}
            </label>
            <textarea
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 
                focus:outline-none focus:ring-2 focus:ring-pink-500 dark:bg-gray-700 dark:text-white"
              rows="4"
              required
            />
          </div>

          {postType === 'poll' && (
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Poll Options
              </label>
              {formData.pollOptions.map((option) => (
                <div key={option.id} className="flex space-x-2">
                  <input
                    type="text"
                    value={option.text}
                    onChange={(e) => updatePollOption(option.id, e.target.value)}
                    placeholder="Enter option"
                    className="flex-1 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 
                      focus:outline-none focus:ring-2 focus:ring-pink-500 dark:bg-gray-700 dark:text-white"
                    required
                  />
                  {formData.pollOptions.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removePollOption(option.id)}
                      className="p-2 text-gray-500 hover:text-red-500"
                    >
                      -
                    </button>
                  )}
                </div>
              ))}
              {formData.pollOptions.length < 6 && (
                <button
                  type="button"
                  onClick={addPollOption}
                  className="flex items-center space-x-2 text-pink-500 hover:text-pink-600"
                >
                  + Add Option
                </button>
              )}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Tags (comma-separated)
            </label>
            <input
              type="text"
              value={formData.tags}
              onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 
                focus:outline-none focus:ring-2 focus:ring-pink-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., investing, savings, retirement"
              required
            />
          </div>

          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 
                dark:hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg 
              font-medium shadow-md transition-colors"
            >
              Post {postType === 'question' ? 'Question' : 'Poll'}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}

export default Community;