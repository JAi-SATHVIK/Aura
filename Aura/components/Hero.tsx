import { ArrowRight, Layout, Rows2, Sparkles, Bot, Star, Zap } from 'lucide-react';
import Meteors from './ui/meteors';
import Link from 'next/link';
import { FaGithub, FaStar } from 'react-icons/fa';
import { MarqueeDemo } from './MarqueeDemo';
import Accordian from './Accordion';
import { motion } from 'framer-motion';
import Features from './Features';
import HowitWork from './HowItWork';

export default function Home() {
  return (
    <motion.div
      initial={{ filter: 'blur(10px)' }}
      animate={{ filter: 'blur(0px)' }}
      transition={{ duration: 0.5 }}
      className="px-4 sm:px-6 lg:px-8 overflow-x-hidden"
    >
      <div className="h-full sm:block hidden">
        <Meteors number={8} />
      </div>

      <div className="flex flex-col items-center max-w-5xl mx-auto mt-16 sm:mt-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 px-6 py-3 mb-12 rounded-full bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 border border-primary-200/50 dark:border-primary-700/30 text-primary-700 dark:text-primary-300 text-sm font-semibold shadow-soft"
        >
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-semibold">Discover Genuine Feedback</span>
          <Star className="w-4 h-4" />
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl sm:text-6xl md:text-7xl text-center font-bold mb-8"
      >
        <h1 className="mb-4 gradient-text">
          Highlight Genuine Feedback
        </h1>
        <p className="text-3xl sm:text-4xl md:text-5xl text-foreground/80 font-medium">
          Inspire Significant Transformation 🚀
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-10 text-center text-lg sm:text-xl text-muted-foreground w-full sm:w-3/4 md:w-2/3 mx-auto px-8 sm:px-4"
      >
        <p>
          Easily embed feedback collection on your site, showcase genuine
          insights, and drive impactful growth with minimal effort.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-col sm:flex-row justify-center mt-12 gap-6 px-4"
      >
        <Link
          className="btn-primary text-lg px-8 py-4 flex items-center justify-center gap-3 group"
          href={'signin'}
        >
          Get Started Now
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
        <Link
          href="https://github.com/echomind"
          target="_blank"
          className="px-8 py-4 bg-gradient-to-r from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 hover:from-neutral-200 hover:to-neutral-300 dark:hover:from-neutral-700 dark:hover:to-neutral-600 transition-all duration-300 py-4 rounded-2xl border border-neutral-300 dark:border-neutral-600 text-lg font-semibold flex items-center justify-center gap-3 text-center shadow-soft hover:shadow-medium group"
        >
          <FaGithub className="text-xl" /> 
          Star on GitHub{' '}
          <span>
            <FaStar className="group-hover:fill-yellow-400 transition-colors duration-200" />
          </span>
        </Link>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 px-4 max-w-4xl mx-auto"
      >
        <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 border border-primary-200/50 dark:border-primary-700/30 hover:shadow-medium transition-all duration-300 group">
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-3 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
            <Bot className="w-8 h-8 text-white" />
          </div>
          <span className="text-xl font-semibold text-foreground">AI Summary</span>
        </div>
        <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-900/20 dark:to-secondary-800/20 border border-secondary-200/50 dark:border-secondary-700/30 hover:shadow-medium transition-all duration-300 group">
          <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 p-3 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
            <Layout className="w-8 h-8 text-white" />
          </div>
          <span className="text-xl font-semibold text-foreground">Embed Widget</span>
        </div>
        <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/20 border border-accent-200/50 dark:border-accent-700/30 hover:shadow-medium transition-all duration-300 group">
          <div className="bg-gradient-to-r from-accent-500 to-accent-600 p-3 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
            <Rows2 strokeWidth={2} className="w-8 h-8 text-white" />
          </div>
          <span className="text-xl font-semibold text-foreground">Showcase</span>
        </div>
      </motion.div>

      <Features />
      <HowitWork />

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="mt-32 px-4 max-w-7xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 gradient-text">
          See EchoMind in Action
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground mb-12 w-full sm:w-3/4 md:w-2/3 mx-auto">
          Explore a live demo to understand how EchoMind can transform your
          feedback collection and presentation.
        </p>
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-3xl p-8 border border-primary-200/50 dark:border-primary-700/30">
          <MarqueeDemo />
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mt-32 px-4 max-w-7xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 gradient-text">
          FAQ&#39;s
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground mb-12 w-full sm:w-3/4 md:w-2/3 mx-auto">
          Some common FAQ&#39;s about EchoMind
        </p>
        <div className="bg-gradient-to-r from-neutral-50 to-neutral-100 dark:from-neutral-900/20 dark:to-neutral-800/20 rounded-3xl p-8 border border-neutral-200/50 dark:border-neutral-700/30">
          <Accordian />
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="text-center mt-32 max-w-7xl mx-auto mb-16 px-4"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 gradient-text">
          Ready to Elevate Your Feedback Collection?
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground mb-12 w-full sm:w-3/4 md:w-2/3 mx-auto px-8">
          Start showcasing your journey to better user feedback insights today
          with EchoMind and see the difference it makes.
        </p>
        <div className="flex justify-center">
          <Link
            className="btn-primary text-lg px-8 py-4 flex items-center gap-3 group"
            href={'/signin'}
          >
            <Zap className="w-5 h-5" />
            Create Your account
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
