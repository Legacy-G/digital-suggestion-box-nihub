import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HText from '../shared/HText';
import PrimaryText from '../shared/PrimaryText';
import axios from '../services/api';
import toast from 'react-hot-toast';

const Notification = ({ name }) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-purple-900 text-white text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold mb-2">
          Thank You {name?.trim() ? name : 'Anonymous'}!
        </h1>
        <p className="text-lg max-w-md mx-auto">
          Your suggestion has been sent to the NIHUB admins. We appreciate your feedback and time.
        </p>
      </motion.div>
    </section>
  );
};

const SuggestionBox = () => {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [anonymous, setAnonymous] = useState(false);
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
        setSubmittedName('');
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !category) {
      toast.error('Please fill in all required fields.');
      return;
    }

    const payload = {
      title,
      description,
      category,
      is_anonymous: anonymous,
      user_id: null
    };

    try {
      await axios.post('/suggestions', payload);
      toast.success('Suggestion submitted successfully!');
      setSubmitted(true);
      setSubmittedName(name);
      
      setTitle('');
      setDescription('');
      setCategory('');
      setAnonymous(false);
      setName('');
    } catch (err) {
      console.error(err);
      toast.error('Failed to submit suggestion. Try again.');
    }
  };

  if (submitted) {
    return <Notification name={submittedName} />;
  }

  const labelStyles = 'text-md font-semibold text-gray-600 w-fit';
  const inputStyles =
    'w-full p-3 bg-white rounded-md font-semibold outline-none text-gray-700 border focus:bg-purple-100 placeholder:text-gray-500';
  const submitStyles =
    'rounded-md bg-gradient-to-br from-purple-600 to-purple-900 px-10 py-2 border border-transparent hover:from-transparent hover:to-transparent hover:text-purple-700 hover:border-purple-700 active:from-purple-900 active:to-purple-950 active:text-white cursor-pointer font-bold w-full text-center text-lg text-white transition-all';

  return (
    <section className="bg-slate-50 text-slate-800 w-full transition-all h-full py-11 px-4 text-center">
      <div className="flex flex-col justify-evenly items-start gap-6 w-full max-w-3xl mx-auto">
        <div className="text-center self-center">
          <HText>Share Your Insight</HText>
          <PrimaryText>Help us improve NIHUB. Your feedback is invaluable.</PrimaryText>
        </div>

        <form
          className="flex flex-col gap-4 bg-white w-full rounded-lg py-11 px-5 shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col items-start gap-2 w-full">
            <label className={labelStyles}>Suggestion *</label>
            <input
              type="text"
              placeholder="e.g. Add dark mode"
              className={inputStyles}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col items-start gap-2 w-full">
            <label className={labelStyles}>Description *</label>
            <textarea
              placeholder="Describe your suggestion in detail..."
              className={inputStyles}
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col items-start gap-2 w-full">
            <label className={labelStyles}>Category *</label>
            <select
              className={inputStyles}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select a Category </option>
              <option value="enhancement">Enhancement</option>
              <option value="bugfix">Bug Fix</option>
              <option value="uiimprovement">UI Improvement</option>
              <option value="performance">Performance</option>
              <option value="featurerequest">Feature Request</option>
              <option value="accessibility">Accessibility</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="flex justify-between items-center gap-2 w-full p-3 bg-white rounded-md font-semibold outline-none text-gray-600 border">
            <div className="text-left">
              <label className={labelStyles}>Submit Anonymously</label>
              <p className="text-xs text-gray-400">
                Your name will not be attached to this suggestion.
              </p>
            </div>
            <input
              type="checkbox"
              id="anonymous"
              checked={anonymous}
              onChange={(e) => setAnonymous(e.target.checked)}
            />
          </div>

          <div className="flex flex-col items-start gap-2 w-full">
            <label className={labelStyles}>Full Name (optional)</label>
            <input
              type="text"
              placeholder="John Doe"
              className={inputStyles}
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={anonymous}
            />
          </div>

          <div className="flex flex-col items-start gap-2 w-full">
            <input type="submit" className={submitStyles} value="Submit Suggestion" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default SuggestionBox;
