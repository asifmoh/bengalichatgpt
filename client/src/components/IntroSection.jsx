import React from "react";
import BotResponse from "./BotResponse";

const IntroSection = () => {
  return (
    <div id="introsection">
      <h1>
      বাঙলাভাষায় কৃত্রিম বুদ্ধিমত্তা
        <BotResponse response=" - আপনার শ্রেষ্ঠ সহকারী" />
      </h1>
      <h2>
      এটি একটি অত্যাধুনিক কৃত্রিম বুদ্ধিমত্তা চালিত অ্যাপ যা আপনার যেকোনো প্রশ্নের তাৎক্ষণিক উত্তর প্রদান করতে সর্বোচ্চ চেষ্টা করবে। With Talkbot, you'll never be left searching for
        answers again. Whether you need information for school or work, or just
        want to know the latest news, Talkbot has you covered.
      </h2>
      <p>
        Features:
        <ul>
          <li>Instant answers to any question</li>
          <li>Deep learning technology that improves with usage</li>
          <li>Continuously Learning</li>
          <li>User-friendly interface</li>
          <li>Available 24/7</li>
        </ul>
      </p>
      <p>
        Say goodbye to endless searching and typing, and say hello to TalkBot,
        your personal AI assistant. Try it now and see for yourself how TalkBot
        can make your life easier.
      </p>
    </div>
  );
};

export default IntroSection;
