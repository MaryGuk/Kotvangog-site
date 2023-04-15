import { useEffect } from "react";
import { ReviewWrapper } from './styled';

const ReviewsPage = () => {
  // Code from disqus installation instruction
  useEffect(() => {
    var d = document, s = d.createElement('script');
    s.src = 'https://kotvangog.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  });

  return <ReviewWrapper><div id="disqus_thread" /></ReviewWrapper>;
};

export default ReviewsPage;
