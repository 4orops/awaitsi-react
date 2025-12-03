import React, { useState, useEffect, useRef } from 'react';
import ComingSoonPage from '../pages/ComingSoonPage';

const ComingSoonContainer: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const launchDate = new Date('2026-03-02T00:00:00'); // March 2, 2026

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (containerRef.current) {
        const { clientX, clientY } = event;
        const { innerWidth, innerHeight } = window;
        const x = (clientX / innerWidth) * 2 - 1;
        const y = (clientY / innerHeight) * 2 - 1;
        containerRef.current.style.setProperty('--mouse-x', `${x}`);
        containerRef.current.style.setProperty('--mouse-y', `${y}`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(timer);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && !isSubmitting) {
      setIsSubmitting(true);
      setError(null);
      try {
        const response = await fetch('/api/subscribe', { // Changed URL to API route
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        if (response.ok) {
          setSubmitted(true);
          setEmail('');
          setTimeout(() => setSubmitted(false), 3000);
        } else {
          const errorData = await response.json().catch(() => ({ message: 'An unknown error occurred.' }));
          const errorMessage = errorData?.errors?.[0]?.message || errorData.message || 'An error occurred.';
          console.error('Form submission error:', errorMessage);
          setError(errorMessage);
        }
      } catch (error) {
        const errorMessage = 'An unexpected error occurred during submission.';
        console.error('Form submission error:', error);
        setError(errorMessage);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <ComingSoonPage
      email={email}
      setEmail={setEmail}
      submitted={submitted}
      handleSubmit={handleSubmit}
      timeLeft={timeLeft}
      containerRef={containerRef}
      isSubmitting={isSubmitting}
      error={error}
    />
  );
};

export default ComingSoonContainer;
